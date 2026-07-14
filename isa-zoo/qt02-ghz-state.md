---
layout: default
title: "QT02 — GHZ State (n qubits)"
parent: ISA Zoo
nav_exclude: true
semiring: Clifford
tags: tutorial, qc-circuit, rosetta
backends: ionq, ibm, neutral-atom
---

# QT02 — GHZ State (n qubits)

| Field | Value |
|-------|-------|
| **Domain** | Quantum Computing |
| **System** | n-qubit register |
| **Group** | SU(2)^⊗n |
| **H^k tier** | H² |
| **ISA** | Meld (β = it) |
| **Status** | Validated |
| **Opcodes** | FLIP · BIND^{n−1} · LABEL |
| **Papers** | Paper 604, Paper 605 |
| **Tags** | Tutorial · QC circuit · Rosetta |

---

## What this circuit does

The Greenberger-Horne-Zeilinger (GHZ) state is the n-qubit generalisation
of the Bell state:

$$\vert\mathrm{GHZ}_n\rangle = \frac{1}{\sqrt{2}}\bigl(\vert 0\rangle^{\otimes n} + \vert 1\rangle^{\otimes n}\bigr)$$

It is the canonical multipartite entangled state: every qubit is maximally
correlated with every other, yet measuring any single qubit yields a random
outcome. GHZ states are the resource for quantum secret sharing, multi-party
Bell tests, and distributed quantum sensing.

**Why GHZ is interesting for the ISA:** the standard linear-chain circuit
uses n−1 BINDs in series (depth n−1). On trapped-ion hardware with all-to-all
connectivity, the same ISA programme compiles to depth **1** — all n−1 BINDs
execute in parallel. This is the clearest demonstration of the IonQ/Quantinuum
architecture advantage quantified in Paper 604.

---

## ISA programme (hardware-independent)

```
INIT:     ORBIT[|00…0⟩]              -- n qubits in ground state
FLIP:     FLIP[qubit 0]              -- |0⟩ → (|0⟩+|1⟩)/√2 on control qubit
BIND^{n-1}: BIND[0→1] · BIND[0→2] · … · BIND[0→n-1]
                                     -- propagate entanglement; can be parallel
LABEL:    LABEL[all n qubits]        -- measure; outputs correlated 00…0 or 11…1
```

**Programme length:** 1 FLIP + (n−1) BINDs. This is the minimum: you need at
least one FLIP (to create superposition) and n−1 BINDs (to entangle all n qubits;
each BIND can create at most one new entanglement edge).

**Resource content:**
- BIND count: **n−1**
- Circuit depth (IonQ, all-to-all): **1 BIND layer** (all BINDs parallel, qubit 0 as hub)
- Circuit depth (IBM, nearest-neighbour): **n−1 BIND layers** (CNOT chain)
- Mana: **0** (GHZ states are stabiliser states; TV = 1 for all n)
- H^k tier: **H²** — GHZ is an H² resource; no H¹ circuit can produce it

---

## Interpretation functor

| Opcode | Meaning in n-qubit Hilbert space |
|--------|----------------------------------|
| FLIP | Hadamard on qubit 0: creates uniform superposition on the control qubit; the H⁰→H¹ boundary |
| BIND[0→k] | Controlled-NOT (or MS gate) between qubit 0 and qubit k: propagates the superposition to qubit k as entanglement; H² holonomy; these n−1 BINDs are **independent** and can execute simultaneously |
| LABEL | Measure all n qubits in computational basis: always yields either all-0 or all-1 (perfect correlation) |

---

## Gate circuit translations

### IonQ / Quantinuum (MS gate native) — depth 1

The key hardware advantage: all-to-all connectivity means every BIND[0→k]
is a direct MS gate. All n−1 MS gates can run **simultaneously** (parallel
BIND layer, depth 1). No SWAP overhead.

```
FLIP[q0]          →  R(π/2, 0) on ion 0          [single laser pulse]
BIND[0→1]  ⎫
BIND[0→2]  ⎬  simultaneous  → n−1 × U_MS(π/4)   [bichromatic field, all pairs]
BIND[0→k]  ⎭              + virtual Z corrections on each ion
```

**Gate count:** 1 FLIP + (n−1) MS gates.
**Circuit depth:** 2 layers (1 FLIP + 1 parallel BIND layer).
**Fidelity at n=10:** F ≈ (0.999)^9 × 0.998 ≈ 0.990 (Quantinuum H2-1).

```python
# IonQ circuit (Qiskit)
from qiskit import QuantumCircuit
n = 10
qc = QuantumCircuit(n)
qc.h(0)                         # FLIP
for k in range(1, n):
    qc.cx(0, k)                 # BIND[0→k]; IonQ executes as U_MS in parallel
# Transpiler note: IonQ Forte executes all cx(0,k) in one MS layer (all-to-all)
```

### IBM (CZ / CR gate native) — depth n−1

IBM's nearest-neighbour grid forces a linear CNOT chain. CNOT(0,k) for k > 1
requires routing through intermediate qubits via SWAP gates, adding 3 BINDs
per hop. For a linear chain layout (no SWAP needed):

```
h q[0];
cx q[0], q[1];    // BIND[0→1], depth 1
cx q[1], q[2];    // BIND[1→2], depth 2  (qubit 1 now carries entanglement)
cx q[2], q[3];    // depth 3
…
cx q[n-2], q[n-1]; // depth n-1
```

Note: IBM uses a **propagation chain** rather than star topology — each CNOT
propagates entanglement one step further. The result is the same GHZ state.

**Gate count:** 1 H + (n−1) CNOT.
**Circuit depth:** n layers.
**Fidelity at n=10:** F ≈ (0.995)^9 × 0.990 ≈ 0.856 (IBM Heron, no SWAP).

The IonQ vs IBM fidelity gap at n=10: **0.990 / 0.856 = 1.16×**, growing to
**1.49×** at n=20. This is the all-to-all advantage quantified in Paper 604 §2.2.

```python
# IBM circuit (Qiskit) — linear chain, no SWAP needed on linear layout
from qiskit import QuantumCircuit
n = 10
qc = QuantumCircuit(n)
qc.h(0)
for k in range(1, n):
    qc.cx(k-1, k)               # chain; depth grows with n
```

### Neutral atom / QuEra (Rydberg CZ) — depth 1

Neutral atom arrays (QuEra Aquila, Pasqal) have reconfigurable connectivity.
With a hub layout (atom 0 at centre, atoms 1…n-1 at periphery):

```
Rx(π/2) on atom 0                        # FLIP
CZ_Rydberg(0, k) for k=1…n-1            # n-1 parallel Rydberg BINDs
+ local single-qubit phase corrections   # TWIST
```

**Depth:** 2 layers (same as IonQ). Connectivity is reconfigurable but not
permanent — atom sorting adds latency overhead not counted in gate depth.

### PennyLane (device-agnostic)

```python
import pennylane as qml

def ghz_isa(n):
    """ISA programme for GHZ_n — backend determined by device."""
    qml.Hadamard(wires=0)               # FLIP
    for k in range(1, n):
        qml.CNOT(wires=[0, k])          # BIND[0→k]

# IonQ: all CNOT[0→k] execute as parallel MS gates (depth 1)
dev_ionq = qml.device("ionq.qpu", wires=10)

# IBM: CNOT chain (depth n-1 on nearest-neighbour)
dev_ibm = qml.device("qiskit.ibmq", wires=10, backend="ibm_brisbane")

@qml.qnode(dev_ionq)
def circuit():
    ghz_isa(10)
    return qml.probs(wires=range(10))
```

The ISA programme `ghz_isa` is **identical** for both devices. Only the
device changes. The depth difference (1 vs 9) is a property of the hardware
connectivity, not the programme.

---

## BIND depth comparison table

| n qubits | BIND count | IonQ depth | IBM depth | Depth ratio |
|----------|-----------|-----------|----------|-------------|
| 2 | 1 | 1 | 1 | 1× |
| 4 | 3 | 1 | 3 | 3× |
| 8 | 7 | 1 | 7 | 7× |
| 10 | 9 | 1 | 9 | 9× |
| 20 | 19 | 1 | 19 | 19× |
| n | n−1 | **1** | **n−1** | **n−1×** |

The depth advantage of trapped ions scales as **O(n)** for GHZ-type star
circuits. For n=50 (a practical NISQ scale), trapped ions run in depth 1
while IBM runs in depth 49. Since fidelity decays per BIND layer (not just
per gate), this is a genuine n× fidelity advantage, not just a speed advantage.

---

## Speedup classification

GHZ preparation is H² (requires BINDs). But the **depth advantage** is
an H⁰/H¹ property of the connectivity graph, not an H² effect:

- The ISA programme has n−1 BINDs regardless of backend.
- The BIND *depth* (number of sequential layers) is 1 on all-to-all vs n−1
  on nearest-neighbour.
- Fidelity scales as F^{depth}, not F^{count}, for parallel BINDs.

This distinction — count vs depth — is the Paper 604 §4 result applied
concretely. The ISA makes it explicit; a gate-count-only analysis misses it.

---

## Zoo neighbours

- **QT01** — Bell state (n=2 special case of GHZ)
- **QT04** — QAOA (also uses BIND in parallel on all-to-all)
- **QH01** — Trapped-ion MS gate (the physical BIND for IonQ backends)
- **Q07** — CHSH game (2-qubit H² resource; generalises to GHZ tests)

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). QC Tutorial series: Paper 605.*
