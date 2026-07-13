---
layout: default
title: "Q01 — Shor's Algorithm"
parent: ISA Zoo
nav_exclude: true
semiring: Boolean
---

# Q01 — Shor's Algorithm

| Field | Value |
|-------|-------|
| **Domain** | Quantum Computing |
| **System** | Period-finding in ℤ_N |
| **Group** | GL(1) = ℤ_N* |
| **H^k tier** | H¹ |
| **ISA** | Origami (β → ∞) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · FLIP · FLOP |
| **Paper** | [doi:10.5281/zenodo.21219704](https://doi.org/10.5281/zenodo.21219704) |

---

## Physical system

Shor's quantum factoring algorithm finds the period r of f(x) = aˣ mod N using
a quantum Fourier transform over ℤ_N, achieving exponential speedup over the
best classical algorithm.

---

## Target category

**QCirc** — the dagger-compact PROP of Clifford+T quantum circuits over ℂ².
The functor is the one established in Paper 468 (ISA Resource Theory).

## Interpretation functor

F: C → QCirc defined by:

| Opcode | F(opcode) in QCirc |
|--------|-------------------|
| ORBIT  | QFT over ℤ_N; eigenvalue = period r of aˣ mod N |
| TWIST  | Controlled-phase gate; Berry phase = 2πk/N for k-th register |
| FLIP   | Hadamard H; creates uniform superposition |
| FLOP   | SWAP gate; recouples register pairs in QFT butterfly |

## ISA programme

```
INIT:    LABEL[|0⟩^⊗n ⊗ |1⟩]       -- n-qubit period register + ancilla
SUPER:   FLIP^⊗n                     -- Hadamard on all n qubits (H⁰ flat state)
MODEXP:  ORBIT[aˣ mod N]             -- controlled modular exponentiation
QFT:     TWIST[2πjk/N] × FLOP       -- QFT: n(n-1)/2 controlled-phases + SWAPs
MEAS:    SPLAT[|j⟩]                  -- measure; output j ≈ sr/N
PERIOD:  ORBIT[gcd(aʲ/ˢ-1, N)]      -- classical post-processing; extract r
```

**Programme length**: O(n²) opcodes for n = log₂N qubits.

## Computable output

- **Period r**: exact, with probability ≥ 2/π² per shot.
- **Mana = 0**: Shor's algorithm is entirely Clifford (ORBIT+TWIST+FLIP+FLOP
  in QCirc are all stabiliser operations). Magic resource is zero — the speedup
  is topological (H¹ TWIST holonomy), not magical (H²). This is the main result
  of Paper 472.
- **T-count = 0**: Grover (Q02) also has mana = 0 by the same argument.

## Validation

- Period r recovered for all test cases N ≤ 21 in x472a–c (SHA 166c699/fabfcec/8dc6f33).
- Mana = 0 confirmed by TV discriminant: TV(Shor circuit) = 1.0 (stabiliser sector).
- Consistent with Gottesman-Knill: no T-gates, QFT over ℤ_N is Clifford when N is a prime power.

---

*Part of the [ISA Zoo](../zoo.md). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
