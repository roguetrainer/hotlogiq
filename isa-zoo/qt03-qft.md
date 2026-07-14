---
layout: default
title: "QT03 — Quantum Fourier Transform"
parent: ISA Zoo
nav_exclude: true
semiring: Boolean
tags: tutorial, qc-circuit, rosetta
backends: ionq, ibm, neutral-atom
---

# QT03 — Quantum Fourier Transform (QFT_n)

| Field | Value |
|-------|-------|
| **Domain** | Quantum Computing |
| **System** | n-qubit period register |
| **Group** | GL(1) = ℤ_N* (N = 2^n) |
| **H^k tier** | H¹ |
| **ISA** | Origami (β → ∞) |
| **Status** | Validated |
| **Opcodes** | FLIP · TWIST · FLOP |
| **Papers** | Paper 472, Paper 605 |
| **Tags** | Tutorial · QC circuit · Rosetta |

---

## What this circuit does

The Quantum Fourier Transform (QFT) maps the computational basis state |j⟩
to the superposition:

$$\mathrm{QFT}_N|j\rangle = \frac{1}{\sqrt{N}}\sum_{k=0}^{N-1} e^{2\pi i jk/N}|k\rangle$$

for N = 2^n. It is the quantum analogue of the classical Fast Fourier Transform
(FFT) but achieves exponential speedup: O(n²) gates vs O(N log N) classical
operations. QFT is the subroutine at the heart of Shor's algorithm, quantum
phase estimation, and many HHL-type algorithms.

**The ISA surprise:** QFT uses **zero BIND opcodes**. It is entirely H¹
(FLIP + TWIST + FLOP). This is the Paper 472 result expressed as a compilation
fact: Shor's exponential speedup comes from H¹ Berry phase accumulation in ℤ_N,
not from H² entanglement. The QFT cross-compiles identically to any backend
because it has no entangling content — it is Clifford throughout.

---

## ISA programme (hardware-independent)

```
for k = 0 to n−1:
    FLIP[qubit k]                           -- Hadamard on qubit k
    for j = k+1 to n−1:
        TWIST[2π/2^(j−k+1), qubit j, ctrl=qubit k]  -- controlled phase R_{j-k+1}
FLOP:  FLOP[0, n-1] · FLOP[1, n-2] · … · FLOP[⌊n/2⌋-1, ⌈n/2⌉]
                                            -- bit-reversal permutation
```

**Programme length:** n FLIPs + n(n−1)/2 TWISTs + ⌊n/2⌋ FLOPs = O(n²) total.
All operations are H¹ (single-qubit rotations and phases, plus SWAP).

**Resource content:**
- BIND count: **0** — QFT has no entangling gates
- TWIST count: n(n−1)/2 controlled-phase gates (each is a TWIST conditioned on a control qubit)
- FLOP count: ⌊n/2⌋ SWAP gates (each costs 3 BINDs on hardware — see §Gate translations)
- Mana: **0** (QFT is Clifford when N = 2^n; TV = 1)
- H^k tier: **H¹** — all phase accumulation; no entanglement generation

**Important nuance on FLOP:** In the ISA, FLOP is a permutation opcode (wire
swap), not an entangling gate. On hardware, SWAP = 3 CNOT = 3 BINDs. But many
backends implement the bit-reversal by re-labelling output wires (virtual FLOP,
zero cost), or by reversing the qubit ordering in the classical readout. In
practice, QFT circuits omit the FLOP entirely and account for it in post-processing.
The BIND count of QFT is therefore **0 in the ISA sense** even though hardware
FLOPs cost BINDs if naively compiled.

---

## Interpretation functor

| Opcode | Meaning in ℤ_N / QFT context |
|--------|-------------------------------|
| FLIP | Hadamard H on qubit k: maps \|0⟩/\|1⟩ to \|+⟩/\|−⟩; creates the initial superposition in the k-th bit of the frequency register; H⁰→H¹ boundary |
| TWIST[2π/2^m, j, ctrl=k] | Controlled-R_m gate: accumulates Berry phase 2π/2^m on qubit j when qubit k = \|1⟩; this is the H¹ holonomy that encodes the period information into the phases of the superposition |
| FLOP | SWAP / bit-reversal: reorders the output register to match the standard QFT bit ordering; often implemented as a relabelling (virtual FLOP, zero cost) |

The TWIST sequence implements the DFT twiddle factors e^{2πijk/N} as Berry
phases. The exponential speedup is entirely in this H¹ phase structure — there
is no entanglement (H²) involved.

---

## Gate circuit translations

### Any backend (QFT is backend-independent)

Because QFT has zero BINDs, the ISA programme compiles to **identical circuits**
on all backends — no backend-specific optimisation needed. The only difference
is gate naming and native decomposition of the controlled-phase gates.

**Standard QFT circuit for n = 4 (showing FLIP/TWIST/FLOP mapping):**

```
q[0]: ─ FLIP ─ TWIST[π/2] ─ TWIST[π/4] ─ TWIST[π/8] ──────────────────── FLOP[0↔3]
                  ctrl=q[1]    ctrl=q[2]    ctrl=q[3]
q[1]: ────────────────────────────────────── FLIP ─ TWIST[π/2] ─ TWIST[π/4] ─ FLOP[1↔2]
                                                       ctrl=q[2]    ctrl=q[3]
q[2]: ──────────────────────────────────────────────────────────── FLIP ─ TWIST[π/2] ──
                                                                             ctrl=q[3]
q[3]: ─────────────────────────────────────────────────────────────────────── FLIP ────
```

### IonQ / Quantinuum (MS gate native)

Controlled-phase gates are decomposed into single-qubit gates + MS gate(s).
However, since these are small-angle controlled phases, they can be implemented
as virtual TWIST operations (frame updates) on many ion platforms, with the
entangling component approximated to high accuracy.

Alternatively: Cp(θ) = (Rz(θ/2) ⊗ I) · CZ · (Rz(−θ/2) ⊗ I) · CZ / (local phase)
where each CZ = 1 BIND. This means a naive compilation counts n(n−1)/2 BINDs.

**IonQ optimisation:** approximate QFT (dropping small-angle terms θ < threshold)
reduces BIND count to O(n log n). For Shor's algorithm the approximation is
exact if threshold = 2π/n (accuracy sufficient for period-finding).

```python
# Qiskit: standard QFT (IonQ backend)
from qiskit import QuantumCircuit
from qiskit.circuit.library import QFT

n = 4
qc = QFT(n, do_swaps=False)   # do_swaps=False = virtual FLOP (no SWAP gates)
# On IonQ, each cp(theta) gate is compiled to MS + local rotations
# Approximate QFT omits gates with |theta| < 2pi/n
```

### IBM (CZ / CR gate native, OpenQASM 3)

```openqasm
// QFT_4 in OpenQASM 3
OPENQASM 3;
include "stdgates.inc";
qubit[4] q;

// k=0
h q[0];                    // FLIP
cp(pi/2) q[1], q[0];      // TWIST[π/2] ctrl=q[1]
cp(pi/4) q[2], q[0];      // TWIST[π/4] ctrl=q[2]
cp(pi/8) q[3], q[0];      // TWIST[π/8] ctrl=q[3]

// k=1
h q[1];
cp(pi/2) q[2], q[1];
cp(pi/4) q[3], q[1];

// k=2
h q[2];
cp(pi/2) q[3], q[2];

// k=3
h q[3];

// FLOP: bit reversal (or omit and reorder classical readout)
swap q[0], q[3];           // FLOP[0↔3]
swap q[1], q[2];           // FLOP[1↔2]
```

### Neutral atom (Rydberg, any connectivity)

QFT has no structural connectivity requirement — every gate is either
single-qubit (FLIP/TWIST) or a nearest-available SWAP (FLOP). Any connectivity
graph works. No connectivity advantage for QFT (unlike GHZ or QAOA).

### PennyLane (device-agnostic)

```python
import pennylane as qml
import numpy as np

def qft_isa(wires):
    """ISA programme for QFT — works on any backend."""
    n = len(wires)
    for k in range(n):
        qml.Hadamard(wires=wires[k])                   # FLIP
        for j in range(k+1, n):
            angle = 2 * np.pi / (2 ** (j - k + 1))
            qml.ControlledPhaseShift(angle,             # TWIST
                wires=[wires[j], wires[k]])
    # FLOP: bit-reversal (optional — omit if readout handles it)
    for k in range(n // 2):
        qml.SWAP(wires=[wires[k], wires[n-1-k]])       # FLOP

# Identical ISA programme for all devices:
dev_ionq    = qml.device("ionq.qpu", wires=8)
dev_ibm     = qml.device("qiskit.ibmq", wires=8, backend="ibm_brisbane")
dev_default = qml.device("default.qubit", wires=8)

@qml.qnode(dev_ionq)
def circuit(state):
    qml.BasisState(state, wires=range(8))
    qft_isa(range(8))
    return qml.probs(wires=range(8))
```

---

## Gate count table

| n qubits | FLIP | TWIST (controlled phase) | FLOP (SWAP) | BIND count (ISA) | BIND count (hardware, naive) |
|----------|------|--------------------------|-------------|------------------|------------------------------|
| 2 | 2 | 1 | 1 | **0** | 3 (1 SWAP) |
| 4 | 4 | 6 | 2 | **0** | 6+6=12 (SWAPs + phases) |
| 8 | 8 | 28 | 4 | **0** | ~60 |
| n | n | n(n−1)/2 | ⌊n/2⌋ | **0** | O(n²) |

The ISA BIND count is 0 because FLOPs and TWISTs are H¹ resources. The
hardware BIND count is non-zero only because of the compilation from ISA
to physical gate sets (SWAP→3 CNOT, Cp→CZ+local). This is the compilation
overhead, not the algorithmic content.

---

## The H¹ speedup argument

QFT achieves exponential speedup (O(n²) gates vs O(N log N) classically)
through **H¹ Berry phase structure**, not H² entanglement. The key facts:

1. QFT output states are product states in the Hadamard basis — maximally
   entangled in the computational basis but separable in the Fourier basis.
2. The speedup comes from the ability to accumulate phases e^{2πijk/N}
   coherently across n qubits using only O(n²) controlled-phase gates
   (TWIST operations).
3. By Gottesman-Knill, QFT over ℤ_{2^n} is Clifford: it can be simulated
   classically in O(n²) time if the input is a stabiliser state. The speedup
   is only realised when QFT is composed with a non-stabiliser subroutine
   (like modular exponentiation in Shor's).

**ISA statement:** QFT is an H¹ algorithm. Its computational content lives
entirely in the TWIST (Berry phase) sector. Shor's speedup is not due to
magic (H²) — it is due to the ability to coherently evaluate H¹ phase
arithmetic over ℤ_N in O(n²) time.

This is Paper 472's main result, now expressed as an explicit gate circuit
and ISA compilation.

---

## Zoo neighbours

- **Q01** — Shor's algorithm (QFT as the core subroutine; ORBIT+TWIST = H¹)
- **QT01** — Bell state (H² comparison: requires BIND; QFT does not)
- **QT02** — GHZ state (H² comparison: requires BIND; QFT does not)
- **QT04** — QAOA (H² algorithm; contrast with QFT's H¹ character)
- **QT08** — Quantum phase estimation (QFT as subroutine; whole circuit is H¹)

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). QC Tutorial series: Paper 605. Algorithm result: Paper 472.*
