---
layout: default
title: "QT01 — Bell State Preparation"
parent: ISA Zoo
nav_exclude: true
semiring: Clifford
tags: tutorial, qc-circuit, rosetta
---

# QT01 — Bell State Preparation

| Field | Value |
|-------|-------|
| **Domain** | Quantum Computing |
| **System** | 2-qubit register |
| **Group** | SU(2) × SU(2) |
| **H^k tier** | H² |
| **ISA** | Meld (β = it) |
| **Status** | Validated |
| **Opcodes** | FLIP · BIND · LABEL |
| **Papers** | Paper 604, Paper 605 |
| **Tags** | Tutorial · QC circuit · Rosetta |

---

## What this circuit does

Bell state preparation is the canonical "Hello World" of quantum computing:
it takes two qubits in the ground state |00⟩ and produces the maximally
entangled Bell state |Φ⁺⟩ = (|00⟩ + |11⟩)/√2 using exactly two gates
(Hadamard + CNOT, or equivalently one FLIP and one BIND).

This is the simplest genuinely H² computation: it cannot be done without
a BIND opcode. A circuit with only ORBIT and TWIST opcodes (H⁰ + H¹)
can never produce entanglement from a product state.

---

## ISA programme (hardware-independent)

```
INIT:     ORBIT[|00⟩]              -- ground state (both qubits)
FLIP:     FLIP[qubit 0]            -- H⁰→H¹: |0⟩ → (|0⟩+|1⟩)/√2
BIND:     BIND[qubits 0, 1]        -- H² holonomy: generates entanglement
LABEL:    LABEL[qubit 0, qubit 1]  -- measure in computational basis
```

**Programme length:** 2 opcodes (1 FLIP + 1 BIND). This is the canonical length —
any implementation using fewer than 1 BIND cannot produce an entangled state.

**Resource content:**
- BIND count: **1** (1 MS gate / CNOT / CZ — all equivalent)
- Mana: **0** (Bell states are stabiliser states; TV = 1)
- H^k tier: **H²** — the output state is an H² object; it has no H¹ description

---

## Interpretation functor

| Opcode | Meaning in 2-qubit Hilbert space |
|--------|----------------------------------|
| FLIP   | Hadamard H: rotates Bloch vector from Z-axis to X-axis; takes \|0⟩ to the H⁰/H¹ boundary |
| BIND   | Controlled-NOT (or MS gate): generates entanglement via shared interaction; H² holonomy; cannot be factored as a product of single-qubit operations |
| LABEL  | Computational basis measurement σ_z; collapses to \|00⟩ or \|11⟩ with equal probability |

---

## Gate circuit translations

This is the Rosetta Stone for this ISA programme: the same 2-opcode programme
compiles to three physically different gate circuits, all producing the same state.

### IonQ / Quantinuum (MS gate native)

```
FLIP[q0]  →  R(π/2, 0) on ion 0          -- single laser pulse
BIND[0,1] →  U_MS(π/4) on ions (0,1)     -- bichromatic laser; phonon bus
              + R_z(−π/2) on ion 0        -- virtual frame correction
              + R_z(−π/2) on ion 1        -- virtual frame correction
```

MS gate count: **1** (= BIND count). All corrections are virtual Z-rotations
(TWIST, zero physical time). Total physical pulses: 2.

### IBM / Google (CZ or CR gate native)

**OpenQASM 3:**
```
h q[0];           // FLIP
cx q[0], q[1];    // BIND (CNOT = CZ + local H)
```

Alternatively with native CZ:
```
h q[0];
h q[1]; cz q[0],q[1]; h q[1];   // CZ version: H·CZ·H = CNOT
```

CZ / CNOT count: **1** (= BIND count). Total gates: 2 (H + CNOT).

### Neutral atom (Rydberg CZ)

```
Rx(π/2) on atom 0                    // FLIP
Rydberg-CZ on (atom 0, atom 1)       // BIND
+ local single-qubit corrections      // TWIST
```

CZ (Rydberg) count: **1**. Same BIND count as other backends.

### Qiskit code

```python
from qiskit import QuantumCircuit

# ISA programme → Qiskit circuit
qc = QuantumCircuit(2, 2)
qc.h(0)       # FLIP
qc.cx(0, 1)  # BIND (1 CNOT = 1 MS gate on IonQ)
qc.measure_all()  # LABEL

# Compile to IonQ backend
from qiskit_ionq import IonQProvider
provider = IonQProvider(token="...")
backend = provider.get_backend("ionq_qpu")
job = backend.run(qc)  # automatically maps CNOT → U_MS
```

### PennyLane code

```python
import pennylane as qml

dev_ionq    = qml.device("ionq.qpu", wires=2)
dev_ibm     = qml.device("qiskit.ibmq", wires=2, backend="ibm_brisbane")
dev_default = qml.device("default.qubit", wires=2)

@qml.qnode(dev_ionq)   # swap device to change backend; ISA programme unchanged
def bell_state():
    qml.Hadamard(wires=0)     # FLIP
    qml.CNOT(wires=[0, 1])    # BIND (PennyLane maps to U_MS on IonQ backend)
    return qml.probs(wires=[0, 1])

# Identical ISA programme, three physical backends:
# dev_ionq    → U_MS gate (Mølmer-Sørensen, phonon bus)
# dev_ibm     → CX gate (cross-resonance, microwave)
# dev_default → classical simulation
```

**The ISA point:** the programme `FLIP · BIND` is identical for all three
device declarations. Only the `dev` argument changes. This is the ARM analogy:
same assembly, different silicon.

---

## BIND count analysis

| Backend | Physical gate for BIND | Time per BIND | Fidelity per BIND |
|---------|------------------------|---------------|-------------------|
| IonQ Forte | U_MS(π/4) | ~200 μs | 99.5% |
| Quantinuum H2-1 | U_MS(π/4) | ~100 μs | 99.9% |
| IBM Heron | CX (cross-resonance) | ~100 ns | 99.5% |
| Neutral atom (QuEra) | CZ (Rydberg) | ~1 μs | 99.5% |

For a 1-BIND circuit, all backends produce fidelity > 99%. The BIND count
analysis becomes decisive for deep circuits (k ≥ 20 BINDs); see Paper 604 §5
and x604a results.

---

## Speedup classification

Bell state preparation is **not a speedup** — it solves no classically hard
problem. But it is the *unit H² operation*: the minimal computation that
cannot be done without one BIND.

The **speedup** enabled by Bell pairs comes later:
- Quantum teleportation (Q05): 1 Bell pair + 1 classical bit → teleport qubit
- Superdense coding (Q06): 1 Bell pair → 2 classical bits over 1 qubit channel
- CHSH violation (Q07): 1 Bell pair → win cooperative game at rate 85.4% > 75%

All three speedups have exactly 1 BIND in their resource account. The Bell
pair is the H² token that is spent in each of them.

---

## Zoo neighbours

- **Q05** — Quantum teleportation (uses 1 Bell pair as resource)
- **Q06** — Superdense coding (uses 1 Bell pair as resource)
- **Q07** — CHSH game (1 Bell pair → quantum advantage)
- **QH01** — Trapped-ion MS gate (the physical BIND for this circuit)
- **QT02** — GHZ state (n-qubit generalisation; n-1 BINDs)

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). QC Tutorial series: Paper 605.*
