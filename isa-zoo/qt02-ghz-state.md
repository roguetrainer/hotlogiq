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
outcome.  GHZ states are the resource for quantum secret sharing, multi-party
Bell tests, and distributed quantum sensing.

---

## ISA programme (hardware-independent)

```
INIT:       ORBIT[|00…0⟩]                    -- n qubits in ground state
FLIP:       FLIP[qubit 0]                    -- |0⟩ → (|0⟩+|1⟩)/√2
BIND^{n-1}: BIND[0→1] · BIND[0→2] · … · BIND[0→n-1]
                                             -- propagate entanglement
LABEL:      LABEL[all n qubits]              -- always outputs 00…0 or 11…1
```

**Programme length:** 1 FLIP + (n−1) BINDs.  This is optimal: one FLIP
to create superposition; n−1 BINDs because each BIND can entangle at most
one new qubit, and GHZ requires all n qubits to be entangled.

**Resource accounting:**

| Metric | Value | What it measures |
| --- | --- | --- |
| BIND count | n−1 | algorithm entanglement cost (hardware-independent) |
| BIND depth (all-to-all) | **1** | sequential BIND layers on IonQ/Quantinuum |
| BIND depth (nearest-neighbour) | **n−1** | sequential BIND layers on IBM |
| Mana / TV | 0 / 1 | GHZ is a stabiliser state; no magic content |
| H^k tier | H² | genuinely entangling; no H¹ circuit can produce GHZ |

**The key distinction:** BIND *count* (n−1) is fixed by the algorithm.
BIND *depth* (1 or n−1) is fixed by the hardware connectivity graph.
The ISA separates these; a gate-count analysis conflates them.

---

## What the ISA lens adds here

The n−1 depth advantage of trapped ions for GHZ is real, but it comes
from **all-to-all connectivity**, not from the ISA.  A textbook comparing
CNOT chains on IBM vs MS gates on IonQ reaches the same conclusion without
any ISA machinery.

What the ISA contributes:

1. **BIND count is the algorithm resource** — the irreducible entanglement
   cost of GHZ is n−1, stated independently of gate set or connectivity.
   This is the quantity that should appear in algorithm analyses, not
   "CNOT count on device X."

2. **BIND depth = fidelity-relevant cost** — since hardware fidelity
   decays as F^{BIND\_depth} (sequential layers, not total count), BIND
   depth is the metric that actually predicts circuit fidelity.  For GHZ,
   BIND depth on all-to-all hardware = 1 because all n−1 BINDs are
   *mutually independent* (qubit 0 is the only shared wire, but the BINDs
   fan out in parallel).  The ISA programme graph makes this independence
   explicit.

3. **The same programme compiles to any backend** — the ISA separates
   *what* the circuit computes from *how* hardware executes it.  The
   depth difference is a compiler/topology fact, not an algorithmic one.

The honest claim: the ISA gives a clean name (BIND depth) to the metric
that the field already uses informally.  For GHZ, BIND depth = 1 on
all-to-all is a topology statement.  The ISA makes it derivable from the
programme graph rather than requiring hardware knowledge.

---

## Gate circuit translations

### IonQ / Quantinuum (MS gate native)

All-to-all connectivity: every BIND[0→k] is a direct MS gate, and all
n−1 are mutually independent, so the hardware executes them as a single
parallel layer.

```python
# PennyLane — device determines depth
import pennylane as qml

def ghz_isa(n):
    qml.Hadamard(wires=0)           # FLIP
    for k in range(1, n):
        qml.CNOT(wires=[0, k])      # BIND[0→k] — all independent

# IonQ Forte: executes all CNOT[0→k] as one parallel MS layer (depth 1)
dev_ionq = qml.device("ionq.qpu", wires=10)

# IBM: CNOT chain, depth grows with n
dev_ibm = qml.device("qiskit.ibmq", wires=10, backend="ibm_brisbane")

# Same ISA programme; depth difference is a hardware property
```

**IonQ fidelity at n=10:** F ≈ (0.999)^9 × 0.998 ≈ 0.990 (Quantinuum H2-1,
one BIND layer).

### IBM (CZ / CR gate native)

Nearest-neighbour layout: propagation chain.  The CNOT chain is not an
ISA requirement — it is one valid compilation of the ISA programme onto
a linear topology.

```
h q[0];
cx q[0], q[1];     // depth 1
cx q[1], q[2];     // depth 2
…
cx q[n-2], q[n-1]; // depth n-1
```

**IBM fidelity at n=10:** F ≈ (0.995)^9 × 0.990 ≈ 0.856 (IBM Heron,
no SWAP needed on linear layout, n−1 sequential BIND layers).

The fidelity gap (0.990 / 0.856 = 1.16× at n=10, growing to 1.49× at
n=20) is a consequence of BIND depth difference, not BIND count difference.
Both backends execute exactly n−1 BINDs.

### Neutral atom / QuEra (Rydberg CZ)

Reconfigurable connectivity: with hub layout, achieves depth 1 like IonQ.
Atom sorting adds latency not counted in gate depth.

---

## BIND count vs BIND depth

| n | BIND count | BIND depth (all-to-all) | BIND depth (nearest-neighbour) |
| --- | --- | --- | --- |
| 2 | 1 | 1 | 1 |
| 4 | 3 | 1 | 3 |
| 8 | 7 | 1 | 7 |
| 10 | 9 | 1 | 9 |
| 20 | 19 | 1 | 19 |
| n | n−1 | **1** | **n−1** |

BIND count is the same for both hardware families.  BIND depth diverges
as O(n).  Fidelity scales with depth, not count.  This table is a
**topology statement**, not an ISA statement — the ISA provides the
vocabulary to express it cleanly.

---

## Zoo neighbours

- **QT01** — Bell state (n=2 special case of GHZ; BIND count = 1)
- **QT03** — QFT (H¹ circuit; BIND count = 0; no topology advantage to unlock)
- **QT04** — QAOA (also uses parallel BINDs on all-to-all; depth analysis similar)
- **Q07** — CHSH game (2-qubit H² resource; generalises to GHZ-based Bell tests)

---

*Part of the [ISA Zoo](/isa-zoo/). QC Tutorial series: Paper 605.*
