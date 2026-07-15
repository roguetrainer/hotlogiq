---
layout: default
title: "G2-SSM — G₂ Snap as Symmetry Making"
parent: ISA Zoo
nav_exclude: true
semiring: quantum
---

# G2-SSM — G₂ Snap as Spontaneous Symmetry Making

| Field | Value |
|-------|-------|
| **Domain** | Mathematical Physics / ISA Theory |
| **System** | β-deformed G₂ spider at β = 1/7 |
| **Group** | G₂ (broken) → PSL(2,7) (crystallised) |
| **H^k tier** | H² |
| **ISA** | Forge (β near 1/7) |
| **Status** | Theoretical |
| **Opcodes** | BIND |
| **Papers** | Papers 515, 572 |

---

## The standard picture and why it is incomplete

Conventional spontaneous symmetry breaking (SSB): a system in a symmetric phase
(high temperature, disordered) passes through a critical point and enters a broken
phase (low temperature, ordered) with lower symmetry. The order parameter is zero
above the transition and non-zero below.

At the G₂ snap β = 1/7, something different happens: a **continuous** symmetry (G₂)
breaks, but simultaneously a **discrete** symmetry (PSL(2,7)) *crystallises* — it
was not present at generic β and appears only at the critical point and below. The
transition is symmetry breaking *and* symmetry making simultaneously, depending on
which symmetry you are measuring.

---

## What actually happens at β = 1/7

At generic β, the β-deformed G₂ spider has:

- A simple representation category (semisimple; all modules decompose into simples)
- The fundamental 7-dimensional simple module V₇ with quantum dimension [7]\_β ≠ 0
- G₂-equivariant structure: the full continuous G₂ acts on morphisms

At β = 1/7 exactly ([7]\_β = 0):

- V₇ becomes a *ghost*: it still exists algebraically but has zero quantum dimension
  (zero trace in the categorical sense)
- The representation category becomes *non-semisimple*: V₇ has a non-trivial
  self-extension; the indecomposable projective cover P(V₇) emerges
- P(V₇) is a new object not present at generic β: it is the *tilting module* at the
  7th root of unity
- The quotient category (killing the ghost sector) carries an action of PSL(2,7) ≅
  GL(3,𝔽₂) = Aut(Fano plane) ⊂ G₂ that is *absent* at generic β

From the G₂ perspective: symmetry breaking (the 7-rep collapses).
From the PSL(2,7) perspective: symmetry making (a discrete Fano symmetry crystallises).

---

## The order parameter

The order parameter for this transition is [7]\_β = sin(7πβ)/sin(πβ) itself:

- Generic β: [7]\_β ≠ 0 — G₂ phase, continuous symmetry active
- β = 1/7: [7]\_β = 0 — transition point, G₂ collapses, PSL(2,7) forms
- β < 1/7 (toward tropical): [7]\_β oscillates through zero — multiple snap events,
  cascading symmetry-making at each root of unity

This is the ISA analogue of the Landau order parameter, but it measures continuous
symmetry *content* rather than broken symmetry magnitude. Vanishing order parameter
= maximum discrete symmetry, not minimum order.

---

## Spontaneous symmetry making (SSM) in the ISA

Paper 515 (Protein Folding ISA) coined SSM for the H¹ → H² transition in protein
folding: the native fold creates the folding symmetry group G\_fold *de novo* — it
does not break a pre-existing symmetry, it makes a new one.

The G₂ snap at β = 1/7 is the algebraic realisation of the same phenomenon:

| | Protein folding (Paper 515) | G₂ snap (Paper 572) |
|--|---------------------------|---------------------|
| Before transition | H¹ unfolded ensemble | Generic β; continuous G₂ |
| Transition | H¹ → H² step | β → 1/7; [7]\_β → 0 |
| After transition | G\_fold crystallises de novo | PSL(2,7) crystallises |
| Order parameter | Contact map / NOON spectrum | [7]\_β |
| Type | SSM (new symmetry created) | SSM (discrete Fano from continuous G₂) |

The key distinction from SSB: in SSB, the symmetry group of the ordered phase is a
*subgroup* of the disordered phase's symmetry, and it was present (unbroken) in the
Hamiltonian all along. In SSM, the symmetry group of the ordered phase is
*not present* at generic coupling — it only becomes visible at (and below) the
critical point.

---

## Physical instances across domains

| Domain | SSM transition | Symmetry made |
|--------|---------------|---------------|
| Chemistry (β=1/7) | FeMoco coherence transition | PSL(2,7) selection rules |
| Chemistry (β=1/5) | Mott transition | ℤ₂ particle-hole symmetry at NOON=1/2 |
| Chemistry (β=1/3) | Spin-crossover | ℤ₂ HS/LS discrete symmetry |
| QEC (β=1/7) | Steane code threshold | PSL(2,7) transversal gate group |
| QEC (β=1/5) | 5-qubit perfect code | ℤ₅ perfect syndrome symmetry |
| Protein folding | Native fold transition | G\_fold (Paper 515) |
| Turbulence (speculative) | 3D→2D inverse cascade | Planar G₂ symmetry (Paper 613) |

---

## Connection to the non-associative ladder

The SSM at β = 1/7 is the H² analogue of the H¹ SSM in protein folding. The ISA
H^k ladder provides the general framework:

- H⁰ snap: classical phase transition (Ising, Potts) — SSB of discrete symmetry
- H¹ snap: quantum phase transition (Mott, SCO) — SSB of continuous U(1)/SU(2) → SSM of ℤ\_n
- H² snap: exceptional phase transition (G₂ → PSL(2,7)) — SSM of discrete Fano symmetry

The H² snap is exceptional in the technical sense: G₂ is an exceptional Lie group
(not part of the classical ABCD series), and PSL(2,7) is an exceptional simple group
(the second-smallest non-Abelian simple group). Both are related to the Fano plane.
The SSM at β = 1/7 is the meeting point of these two exceptional objects.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/).
See also: [G2-CHEM snap events in chemistry](g2-snap-chemistry.md),
[G2-QEC snap events in QEC](g2-snap-qec.md),
[Paper 572](https://doi.org/10.5281/zenodo.21278538),
[Paper 515](https://doi.org/10.5281/zenodo.20694527).*
