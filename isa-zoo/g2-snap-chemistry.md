---
layout: default
title: "G2-CHEM — G₂ Snap Events in Chemistry"
parent: ISA Zoo
nav_exclude: true
semiring: quantum
---

# G2-CHEM — G₂ Snap Events in Chemistry

| Field | Value |
|-------|-------|
| **Domain** | Chemistry / Condensed Matter |
| **System** | β-deformed G₂ spider at roots of unity |
| **Group** | G₂ → PSL(2,7) at β=1/7 |
| **H^k tier** | H² |
| **ISA** | Forge (β near 1/3, 1/5, 1/7) |
| **Status** | Predicted |
| **Opcodes** | BIND · ORBIT · TWIST |
| **Papers** | Papers 488, 491, 563, 572 |

---

## Overview

The β-deformed G₂ spider has quantum dimensions [n]\_β = sin(nπβ)/sin(πβ).
At β = 1/3, 1/5, 1/7, the dimensions [3], [5], [7] vanish in sequence — *snap events*
where one interaction channel freezes out. Each snap corresponds to a real chemical
phase transition.

The cascade runs **top-down**: from the highest-dimensional channel (7) to the lowest
(3), as β decreases from 1/3 toward 0 (the tropical/classical limit).

---

## The three chemical snap events

### β = 1/3 → spin-crossover critical point

**What collapses**: [3]\_β = 0 — the rank-1 (triad) sector of G₂. In R3, the
(\*φ)-coefficient vanishes: the three-body exchange channel that couples triad angular
momenta switches off.

**Chemical identity**: the **spin-crossover (SCO) critical point** in transition-metal
complexes. At SCO, spin-orbit coupling that mediates H¹ exchange between d-electrons
decouples: the high-spin (HS) to low-spin (LS) transition occurs because the triad
exchange term reaches zero. Papers 488/491 identify SCO as a β\* snap; the G₂ spider
now specifies β\* = 1/3.

**Prediction**: SCO compounds have β\_eff ≈ 1/3. The Weyl c₂ parameter (measurable
from CASSCF NOONs, Paper 596) should peak at β\_eff = 1/3, not at a generic β.
Compounds with β\_eff further from 1/3 should show less sharp SCO transitions.

### β = 1/5 → Mott metal-insulator transition

**What collapses**: [5]\_β = 0 — the bigon self-composition vanishes:
BIND∘BIND† = [5]·id → 0. A BIND pair can no longer self-compose — double occupancy
costs zero extra energy to break.

**Chemical identity**: the **Mott metal-insulator transition**. The Mott condition
U = W (on-site Coulomb repulsion equals bandwidth) is exactly the condition that
double occupancy is energetically neutral — neither favoured nor penalised. Paper 563
(experiment x563c) found the Mott β\* snap at U/t ≈ 1.8; the G₂ spider identifies
this as β\* = 1/5.

**Prediction**: at the Mott critical point, NOONs (natural orbital occupation numbers)
equal exactly 1/2 — the maximally mixed state. This follows from BIND self-annihilation:
when BIND∘BIND† = 0, neither the doubly-occupied nor the empty orbital configuration
is preferred, so the NOON splits exactly at 1/2. This is a quantitative, testable
prediction distinguishing the Mott transition from other strongly-correlated crossovers.

### β = 1/7 → FeMoco coherence transition / PSL(2,7) crystallisation

**What collapses**: [7]\_β = 0 — the full Fano loop evaluation vanishes. Classical
counting of 7 Fe spin configurations gives trace = 0: the 7-dimensional continuous G₂
representation collapses.

**What emerges**: the discrete symmetry PSL(2,7) ≅ GL(3,𝔽₂) = Aut(Fano plane) ⊂ G₂
crystallises in the quotient category. This is spontaneous symmetry *making* (SSM):
the continuous G₂ breaks, the discrete Fano symmetry forms.

**Chemical identity**: the **FeMoco quantum coherence transition** (Paper 488). At
β = 1/7, the 7-iron FeMoco cluster transitions from a classical magnetic configuration
(describable by pairwise Heisenberg exchange, H¹) to a PSL(2,7)-symmetric quantum
state where all 7 Fe-Fe exchange paths are maximally entangled. This is the regime
where FeMoco is "most quantum" — where room-temperature quantum coherence is possible.

**Broader prediction**: any 7-centre cluster with Fano connectivity (7 metal atoms,
exchange paths along the 7 Fano lines) should show:

- A sharp EPR or Mössbauer anomaly near β\_eff = 1/7
- PSL(2,7) selection rules in spectroscopic transitions (forbidden lines become
  allowed; allowed lines split into PSL(2,7) multiplets)
- Anomalous magnetic susceptibility not explainable by pairwise (H¹) exchange

---

## The cascade as a chemical phase diagram

```
β = 1/3   Spin-crossover        [3]=0   Triad exchange freezes → HS/LS transition
β = 1/5   Mott transition       [5]=0   BIND self-pair degeneracy → NOON = 1/2
β = 1/7   Fano coherence        [7]=0   G₂ → PSL(2,7)  → room-T quantum coherence
β → 0     Classical limit        [n]→n   Fano combinatorics; DFT works
```

Moving from β = 1/3 toward β = 0 (increasing temperature or decreasing correlation
strength) passes through the Mott transition and then the FeMoco point.
Moving from β = 1/3 toward β = 1/7 (decreasing temperature or increasing correlation)
passes through increasing quantum coherence until the Fano symmetry crystallises.

---

## ISA programme

```
INIT:    LABEL[n_d electrons in d-manifold]     -- set up d-electron register
SCREEN:  ORBIT[DFT/HF ground state]             -- H0 reference
CORR:    BIND[Weyl c2 diagnostic]               -- is H2 present?
SNAP?:   LABEL[beta_eff from NOON spectrum]     -- which snap are we near?
SCO:     LABEL[beta near 1/3 → HS/LS boundary] -- spin-crossover
MOTT:    LABEL[beta near 1/5 → NOON near 1/2]  -- Mott criticality
FANO:    BIND[PSL(2,7) selection rules]         -- FeMoco / 7-centre clusters
OUTPUT:  LABEL[phase + predictions]
```

---

## Validation status

| Snap | Chemical system | Evidence | Status |
|------|----------------|----------|--------|
| β=1/3 | Fe(phen)₂(NCS)₂ SCO | Papers 488/491; c₂ peak at SCO | Predicted |
| β=1/5 | 1D Hubbard chain | x563c: D collapse at U/t≈1.8 | Partially validated |
| β=1/7 | FeMoco (nitrogenase) | Paper 488: 7-qubit G₂ programme | Predicted |

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/).
See also: [CM01 Hubbard-Mott](cm01-hubbard-mott.md), [C02 Spin-Crossover](c02-spin-crossover.md),
[GA02 FeMoco Galois](ga02-femoco-galois.md), [G2-QEC snap events](g2-snap-qec.md).*
