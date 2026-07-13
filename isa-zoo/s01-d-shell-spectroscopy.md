---
layout: default
title: "S01 — Electronic Spectroscopy (d-shell)"
parent: ISA Zoo
nav_exclude: true
semiring: Boolean
---

# S01 — Electronic Spectroscopy (d-shell)

| Field | Value |
|-------|-------|
| **Domain** | Spectroscopy |
| **System** | Any transition-metal complex |
| **Group** | SU(2) |
| **H^k tier** | H⁰ |
| **ISA** | Origami (β → ∞) |
| **Status** | Validated |
| **Opcodes** | FLOP · SPLIT · SPLAT · ORBIT |
| **Paper** | [doi:10.5281/zenodo.21219722](https://doi.org/10.5281/zenodo.21219722) |

---

## Physical system

The d-shell electronic structure of transition-metal (TM) complexes in
octahedral (O_h), tetrahedral (T_d), or lower symmetry environments.
Observables: term symbol ordering, d-d transition energies (visible
spectroscopy), ground-state spin multiplicity.

---

## Target category

**Rep(SU(2))** in the cold (β→∞) limit. All d-shell electrons are treated
as angular momentum wires; the crystal field and electron-electron repulsion
are FLOP operations (6j recoupling) in this representation.

## Interpretation functor

F: C → Rep(SU(2)) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| FLOP   | Racah 6j symbol {j₁ j₂ J₁₂; j₃ J j₂₃} — recoupling cost |
| SPLIT  | SPLIT(j) = √(2j+1) — quantum dimension, pair creation |
| SPLAT  | SPLAT(j) = 1/√(2j+1) — bubble closure |
| ORBIT  | G-orbit label on d^n configuration: term symbol ²ˢ⁺¹L_J |

## ISA programme

```
INIT:   LABEL[d^n]                   -- n electrons in d shell
SPLIT:  SPLIT[L=2] x n              -- open n angular momentum wires
FLOP:   FLOP[L,S,J coupling]        -- Racah recoupling; cost = 6j products
ORBIT:  ORBIT[2S+1 L_J]             -- read term symbol from orbit label
SPLAT:  SPLAT[closed subshell]       -- close filled subshell wires
```

**Programme length**: O(n²) FLOPs for n d-electrons (one recoupling per pair).

## Computable output

- **Term symbols**: ²ˢ⁺¹L_J for d¹ through d¹⁰, all 4 common geometries
- **Transition energies** in units of Racah B parameter: exact rational
  multiples; e.g. for d² Oh: ³T₁g→³T₂g = 8Dq, ³T₁g→³A₂g = 18Dq - 12B
- **Tanabe-Sugano diagrams**: E/B vs Dq/B curves are ORBIT label sequences
  as a function of β (crystal field strength). These are tropical varieties
  in the MGE sense (Paper 491).
- **Ground-state spin**: highest-weight ORBIT label agrees with Hund's rules
  without empirical input

## Validation

Term symbol ordering confirmed for all d^n configurations d¹–d¹⁰ in O_h.
Transition energies match experiment to within Racah B parameterisation
(B fitted once per metal ion, then predictive across all complexes).
Tanabe-Sugano diagrams reproduced exactly. See Paper 487 §3 and experiment
x487a–f (72/73 = 98.6% accuracy on valence assignment benchmark).

---

*Part of the [ISA Zoo](../zoo.md). See also [Chemistry Roadmap](../chemistry-roadmap.md)
Layer 4; [spectrafold](https://github.com/roguetrainer/spectrafold) implements this programme.*
