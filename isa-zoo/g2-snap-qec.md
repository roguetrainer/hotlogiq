---
layout: default
title: "G2-QEC — G₂ Snap Events as Quantised QEC Thresholds"
parent: ISA Zoo
nav_exclude: true
semiring: Boolean
---

# G2-QEC — G₂ Snap Events as Quantised QEC Thresholds

| Field | Value |
|-------|-------|
| **Domain** | Quantum Error Correction |
| **System** | Topological codes at Fano-prime qubit count |
| **Group** | PSL(2,7) at β=1/7; ℤ₅ at β=1/5; ℤ₃ at β=1/3 |
| **H^k tier** | H² |
| **ISA** | Origami (β → ∞ topological) / Forge (finite β) |
| **Status** | Predicted |
| **Opcodes** | BIND · ORBIT · TWIST |
| **Papers** | Papers 572, 607 |

---

## Overview

The β-deformed G₂ spider (Paper 572) has snap events at β = 1/7, 1/5, 1/3 where
quantum dimensions [7]\_β, [5]\_β, [3]\_β vanish. These are not generic error thresholds
— they are **root-of-unity quantised thresholds** for code families whose stabiliser
geometry is based on Fano-prime qubit counts n = 7, 5, 3. The snap is the threshold:
at β = 1/p, the p-dimensional anyonic charge of the minimal error path evaluates to
zero, making the error chain indistinguishable from the vacuum.

---

## The three QEC snap thresholds

### β = 1/3: colour code (weight-3 stabilisers)

**What collapses**: [3]\_β = 0 — the anyonic charge of a weight-3 error chain in the
G₂ spider equals zero. A weight-3 error string is indistinguishable from the vacuum:
anyon condensation in the weight-3 sector.

**Code family**: codes whose minimum-weight stabilisers are weight-3 (triangular colour
codes). The threshold condition is exactly [3]\_β = 0: below β = 1/3 the code corrects
minimal errors; at β = 1/3 weight-3 error paths become degenerate with the identity.

**Peierls connection** (Paper 607 Theorem B): β\*(P) = (1/κ)log(1/2B·n\_B). For
κ = 3 (weight-3 network dimension) and n\_B determined by the colour code geometry,
Theorem B back-determines the defect fugacity B from the snap condition β\* = 1/3.

### β = 1/5: five-qubit perfect code [[5,1,3]]

**What collapses**: [5]\_β = 0 — BIND∘BIND† = [5]·id → 0. The error-correction map
self-annihilates on composition: applying the correction operator twice gives zero.

**Code identity**: the **[[5,1,3]] perfect code**, the smallest quantum code correcting
any single-qubit error. It saturates the quantum Hamming bound — and it does so because
it operates at β = 1/5. The BIND self-annihilation at [5]=0 is the condition for
maximal degeneracy: two distinct errors share the same syndrome, so the code can
correct both using one syndrome measurement. Perfection = G₂ snap.

**Structural consequence**: the 5-qubit code is the only [[n,1,3]] code saturating the
Hamming bound because n=5 is the only Fano-prime that admits a [[n,1,3]] perfect code.
n=3 gives [[3,1,1]] (trivial repetition); n=7 gives [[7,1,3]] (Steane, not perfect but
distance-optimal). The snap at β=1/5 selects n=5 uniquely for perfection.

### β = 1/7: Steane [[7,1,3]] code (Fano threshold)

**What collapses**: [7]\_β = 0 — the full Fano orbit loop evaluates to zero. A weight-7
logical operator wrapping the entire Fano plane becomes degenerate (invisible to the
code). This is the topological protection threshold in G₂ spider language.

**Code identity**: the **Steane [[7,1,3]] code**, encoding 1 logical qubit in 7
physical qubits arranged in Fano-plane geometry (PG(2,2)). Its 6 stabiliser generators
are the 6 Fano lines used for syndrome measurement; its transversal gate group is
PSL(2,7) ≅ GL(3,𝔽₂) — exactly the discrete symmetry that crystallises from G₂ at
the β=1/7 snap (see Zoo entry G2-SSM). The snap IS the threshold; PSL(2,7) IS
the surviving symmetry after G₂ breaks.

**Why the Steane code has a transversal T-gate**: the T-gate generates the third level
of the Clifford hierarchy. It is transversal in the Steane code because PSL(2,7) —
the gate group that crystallises at β=1/7 — contains elements of order 7 that
implement the T-gate exactly. No smaller code has a transversal T because no smaller
n is a Fano prime with a G₂ snap.

---

## The QEC cascade

| β snap | Code | n | What collapses at threshold |
|--------|------|---|-----------------------------|
| 1/3 | Colour code | 3 | Weight-3 anyon condensation |
| 1/5 | [[5,1,3]] perfect | 5 | BIND self-annihilation; max degeneracy |
| 1/7 | Steane [[7,1,3]] | 7 | Fano orbit; PSL(2,7) crystallises |

---

## The non-Fano-prime prediction

Codes with n = 4, 6, 8, ... (non-Fano-prime) do **not** sit at G₂ snap points. Their
error thresholds are generic: determined by code-specific geometry (Peierls formula
Theorem B with code-specific B, κ, n\_B), but not quantised at a root-of-unity value.

This is a falsifiable prediction: the thresholds of the 3-, 5-, and 7-qubit codes
(under depolarising noise) should be related by simple rational ratios derived from
the G₂ quantum dimensions, while the threshold of the 4-qubit or 6-qubit codes should
not fit the same pattern.

---

## ISA programme for G₂-quantised threshold detection

```
INIT:    LABEL[n qubits; code geometry]      -- identify n
FANO?:   LABEL[n in {3,5,7}?]               -- check Fano-prime
G2SNAP:  BIND[beta* = 1/n]                  -- assign snap threshold
PEIERLS: LABEL[B from Theorem B consistency] -- back-determine fugacity
PREDICT: LABEL[threshold p* = f(beta*,B,kappa)] -- output threshold
VERIFY:  ORBIT[compare to known threshold]   -- validate
```

---

## Connection to fault-tolerant universality

The three snap thresholds give the three critical resources for universal fault-tolerant
quantum computation:

| Snap | Code | Resource provided |
|------|------|-------------------|
| β=1/3 | Colour code | Transversal Clifford + T (magic state distillation input) |
| β=1/5 | [[5,1,3]] perfect | Perfect single-error correction; minimal overhead |
| β=1/7 | Steane [[7,1,3]] | Transversal T-gate; CSS structure; full Clifford group |

Together they form the minimal fault-tolerant toolkit. The G₂ snap structure explains
why these three codes — and not others — are the canonical primitives of fault-tolerant
QC: they are the codes whose stabiliser geometry sits exactly at G₂ snap points.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/).
See also: [Q03 Steane code](q03-steane.md), [G2-CHEM snap events](g2-snap-chemistry.md),
[G2-SSM symmetry making](g2-snap-ssm.md), [Paper 607](https://doi.org/10.5281/zenodo.21372999).*
