---
layout: default
title: "HM08 — Grassmannian Quantisation (Third Paradigm)"
parent: ISA Zoo
nav_exclude: true
semiring: quantum
---

# HM08 — Grassmannian Quantisation

| Field | Value |
|-------|-------|
| **Domain** | Positive Geometry / Scattering Amplitudes |
| **System** | Massless scattering in N=4 SYM |
| **Group** | GL(k) × GL(n−k) acting on Gr⁺(k, n) |
| **H^k tier** | H³ |
| **ISA** | Hum (β = it/ℏ) — Grassmannian basis |
| **Status** | Conjectural (conceptual framework) |
| **Opcodes** | ORBIT · EMIT |
| **Papers** | [Paper 620](https://doi.org/10.5281/zenodo.21416912) |

---

## Physical system

There are two standard quantisation paradigms:

1. **Canonical quantisation** (first quantisation): fixed particle number,
   Hilbert space ψ, operators acting on ℋ. Replace Poisson brackets with
   commutators. The ISA grading: H¹ (quantum phases, interference, no EMIT).

2. **Path-integral quantisation** (second quantisation): variable particle
   number, Fock space ⊕_N ℋ^{⊗N}, field operators ψ̂(x) creating/destroying
   quanta. The ISA grading: H³ Feynman basis (EMIT + PROPAGATE + RENORM).

The amplituhedron proposes a third:

3. **Grassmannian quantisation**: classical scattering data (n particles,
   helicities k, external momenta Z) maps to a positive region
   𝒜_{n,k,L}(Z) ⊂ Gr⁺(k, k+4; L). The amplitude is the volume of this
   region. No Fock space, no Lagrangian, no virtual particles.

## ISA interpretation

In ISA language, Grassmannian quantisation replaces the Fock-space tower
⊕_N ℋ^{⊗N} with the positive Grassmannian — a real manifold with boundary,
not a complex vector space.

First and second quantisation emerge as limits:
- **First quantisation** = L=0 (external data Z only; no loop variables)
- **Second quantisation** = L > 0 (loop positivity constraints = virtual effects)

The Hum ISA opcode programme is:
1. EMIT: specify the theory (n, k, coupling g, particle content)
2. ORBIT(Gr⁺(k, k+4; L)): compute the volume

That is all. PROPAGATE and RENORM do not appear — they are Feynman-basis
artefacts of the second-quantisation expansion.

## The three quantisation paradigms as ISA programmes

| Paradigm | ISA basis | Key opcodes | Fock space? | RENORM? |
|----------|-----------|-------------|-------------|---------|
| Canonical (1st) | Origami/Motive | ORBIT, TWIST | No | No |
| Feynman (2nd) | Hum (Feynman) | EMIT, PROPAGATE, RENORM | Yes | Yes |
| Grassmannian (3rd) | Hum (Grassmannian) | EMIT, ORBIT | No | No |

The third paradigm has no standard name in the QFT literature.
"Positive geometry quantisation" (Arkani-Hamed) and "amplituhedron
quantisation" have been used informally.

## The distinction between real and virtual particles

In the Feynman basis: external (real) particles are ORBIT entries; internal
(virtual) particles are PROPAGATE steps. The distinction is fundamental —
real particles are on-shell (p² = m²), virtual particles are off-shell.

In the Grassmannian basis: both real and virtual particles are columns in the
(n+2L) × (k+4) matrix (Z_1, ..., Z_n, D^{(1)}, ..., D^{(L)}). Real particles
= visible columns Z_i; virtual particles = hidden columns D^{(i)} subject to
positivity. The real/virtual distinction is not fundamental — it is a labelling
of which columns are "visible" (given as input data) vs "hidden" (integrated over).

This dissolves the on-shell/off-shell distinction that underlies the need for
PROPAGATE and RENORM.

## Connections

- **HM07** (Amplituhedron): HM07 is the concrete realisation; HM08 is the
  conceptual framework. HM07 gives the opcode count (1 vs ≥ 10); HM08
  explains why (Fock space vs positive Grassmannian).
- **P01** (OPU): the Orbit Processing Unit (Paper 598) runs ORBIT on Gr(k,n)
  for molecular orbitals. Grassmannian quantisation = QFT running on the OPU.
  The two applications are: chemistry (orbital geometry) and scattering amplitudes.
- **RS01** (Rising Sea ISA, future): the Rising Sea ISA (Paper 621) shows that
  the β-plane fibration contains Grassmannian quantisation as the β=it/ℏ fibre.
  The "third paradigm" is not a new foundation but a specific fibre in the
  categorical fibration.

## Open questions

1. **Gravity at H³**: the m=6 generalised amplituhedron (Arkani-Hamed, post-2013)
   suggests graviton amplitudes live at H³ in the Grassmannian basis. If so,
   non-renormalisability of perturbative gravity is a Feynman-basis artefact
   at any loop order.

2. **Grassmannian Lamb shift**: the Lamb shift in the Grassmannian basis would
   be a boundary-constrained ORBIT. What is the positive geometry? (x620f, open)

3. **ℤ/4ℤ closure**: IMAGINE⁴ = MARK (Paper 621, x621d). Does Grassmannian
   quantisation extend to ℤ/8ℤ (Bott periodicity)? Is there an 8-periodic
   positive geometry?

---

*Part of the [ISA Zoo](/isa-zoo/).
Hum ISA reference: [Paper 620](https://doi.org/10.5281/zenodo.21416912).*
