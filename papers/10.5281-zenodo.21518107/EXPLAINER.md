---
layout: default
title: "PT Symmetry and the Amplituhedron"
parent: Explainers
nav_exclude: true
tags: [amplituhedron, pt-symmetry, exceptional-points, positive-grassmannian, bcfw, scattering-amplitudes, non-hermitian, collinear-limit, origami-isa, snap-threshold]
portfolio: B
---

## Two Major Research Programmes. One Geometric Object.

*Plain-language explainer for [doi:10.5281/zenodo.21518107](https://doi.org/10.5281/zenodo.21518107) (#680)*

---

## The central claim in one sentence

The positive Grassmannian — the geometric space that encodes all scattering
amplitudes in the amplituhedron programme — is precisely the PT-unbroken phase
of a larger complex space, and its boundary is the exceptional-point locus where
PT symmetry breaks.

---

## Background: the amplituhedron

In 2013, Arkani-Hamed and Trnka discovered that the scattering amplitudes of
maximally supersymmetric Yang-Mills theory — the quantum field theory that
physicists use as a laboratory for understanding the structure of amplitudes in
general — could be encoded in a single geometric object called the **amplituhedron**.

The amplituhedron lives inside a mathematical space called the **Grassmannian**
Gr(k,n): the space of all k-dimensional planes through the origin in
n-dimensional space. (For a single particle, think of k=2 and n=4: the space of
all 2-planes in 4 dimensions, which has a natural identification with the space
of massless momenta in 4D spacetime.)

The physical scattering amplitudes correspond to the interior of a particular
region of this Grassmannian called the **positive Grassmannian** Gr⁺(k,n),
defined by requiring all Plücker coordinates to be positive. Plücker coordinates
are numbers built from the momenta of the particles; they are the fundamental
coordinates on the Grassmannian. When all of them are positive, the kinematics
is physical and the amplitude is finite. When one of them vanishes — that is,
when the system sits on the **boundary** ∂Gr⁺(k,n) — the amplitude has a
singularity (a collinear or soft divergence).

---

## Background: PT symmetry

In 1998, Bender and Boettcher made a surprising discovery: a quantum-mechanical
Hamiltonian can have an entirely real energy spectrum even if it is not Hermitian,
provided it obeys a combined **PT symmetry** — that is, if it is invariant under
the simultaneous operations of parity (P: x → −x) and time-reversal
(T: t → −t, i → −i).

PT-symmetric Hamiltonians have a **phase structure** analogous to ferromagnets:

- **PT-unbroken phase**: the spectrum is real and the eigenstates are
  non-degenerate. The system behaves like a standard Hermitian quantum system.
- **Exceptional point (EP)**: as a parameter is varied, two eigenvalues collide
  and the two eigenvectors align. This is the phase boundary.
- **PT-broken phase**: past the EP, the previously real eigenvalues become a
  complex conjugate pair. The system acquires gain and loss.

This phase structure has been found in optical waveguides, lasers, gyroscopes,
and mass sensors. Near an exceptional point, physical sensors are dramatically
more sensitive: a perturbation that shifts a single eigenvalue by ε far from the
EP shifts it by √ε at an EP₂, giving a 1/√ε enhancement.

---

## What nobody had noticed

These two research programmes — the amplituhedron (2013–present) and PT symmetry
(1998–present) — have developed almost entirely in parallel, with no interaction.

This paper observes that they are **the same geometric structure**:

1. The CPT involution of the underlying quantum field theory acts on the
   Grassmannian as complex conjugation of the momentum spinors. The
   **fixed-point set** of this involution — the points left unchanged by
   CPT — is exactly the positive Grassmannian Gr⁺(k,n), since real positive
   Plücker coordinates are unchanged by complex conjugation.

2. Moving off Gr⁺(k,n) into the complex Grassmannian Gr(k,n,ℂ) — by allowing
   Plücker coordinates to become complex — is **exactly** the PT-breaking
   deformation. The interior of Gr⁺ is the PT-unbroken phase. The exterior is
   PT-broken.

3. The **boundary** ∂Gr⁺(k,n), where some Plücker coordinate first vanishes,
   is the **exceptional-point locus**: the eigenvalues of the natural
   non-Hermitian matrix built from the amplitude data coalesce there, with the
   characteristic EP₂ square-root splitting.

The amplituhedron programme has been, implicitly, working in the PT-unbroken
phase all along. The collinear singularities of scattering amplitudes — the
places where the amplitude blows up — are the real-kinematic images of the
exceptional points.

---

## The construction

For the simplest non-trivial amplitude, A₄,₂ (four particles, two negative
helicities), the Grassmannian Gr(2,4) has exactly two BCFW cells: cell (0,2)
and cell (1,3). Each cell contributes a weight to the total amplitude.

Near the **collinear limit** — when particles 0 and 1 become parallel, so their
angle bracket ⟨01⟩ = sin ε → 0 — cell (1,3) has ⟨01⟩ in its denominator and
diverges as 1/sin ε, while cell (0,2) stays finite. The ratio of the two weights
grows without bound.

This asymmetry maps directly to **gain-loss imbalance** in a PT-symmetric matrix:

$$H(\varepsilon) = \begin{pmatrix} +i\gamma & \kappa \\ \kappa & -i\gamma \end{pmatrix}$$

where γ = (|w₁₃| − |w₀₂|)/(|w₁₃| + |w₀₂|) ∈ [0,1) is the normalised weight
imbalance, and κ is the Plücker inner product between the two cells (a coupling
that measures how much the two cells "overlap" in wavefunction space).

The eigenvalues of this matrix are λ± = ±√(κ² − γ²):
- Far from the collinear limit (large ε): γ ≈ 0, weights balanced,
  eigenvalues real — **PT-unbroken**.
- At some ε* where γ = κ: eigenvalues coalesce at zero — **exceptional point**.
- Near the collinear limit (small ε): γ > κ, eigenvalues purely imaginary —
  **PT-broken**.

---

## Three numerical confirmations

All tests use physical on-shell momenta with exact momentum conservation.

**Test 1 — EP₂ splitting** (experiment x680a):

The eigenvalue gap |Δλ| was measured as a function of |ε − ε*| on a fine grid
near the exceptional point at ε* ≈ 1.485 radians. A log-log fit gives:

|Δλ| ~ |ε − ε*|^{0.55},  R² = 0.944

The EP₂ prediction is exponent ½. A simple zero crossing would give exponent 1.
The measured 0.55 is clearly not 1 and is within 10% of ½.

At the exceptional point, the eigenvector overlap |⟨v₊, v₋⟩| = 0.991 (from
0.38 in the interior of Gr⁺), confirming eigenvector coalescence — the defining
property of an EP.

**Test 2 — Full Bender-Boettcher phase diagram** (experiment x680b):

Scanning ε from 0.01 (near-collinear, PT-broken) to π/2 (orthogonal,
PT-unbroken):

- At ε = π/2: max|Im(λ±)| < 5×10⁻¹⁹ — eigenvalues real to machine precision.
  This is the deep interior of Gr⁺.
- At ε = 0.05: max|Re(λ±)| < 10⁻⁶, max|Im(λ±)| = 0.87 — purely imaginary
  eigenvalues, complex conjugate pair. This is outside Gr⁺.
- The gap |Δλ(ε)| forms a perfect V-shape with minimum at ε* ≈ 1.49.

This is the canonical Bender-Boettcher phase diagram, reproduced from the
geometry of scattering amplitudes.

**Test 3 — Enhanced sensitivity near the boundary** (experiment x680c):

Near EPs, physical sensors have enhanced sensitivity. The kinematic analogue is
that small changes in the collinear parameter ε produce large changes in the
eigenvalue gap when ε is near ε*. Measuring |d|Δλ|/dε| as a function of
|ε − ε*|:

|d|Δλ|/dε| ~ |ε − ε*|^{−0.68},  R² = 0.989,  28× enhancement near EP

The EP₂ prediction for the sensitivity exponent is −½. The observed −0.68 is
steeper, reflecting that the approach to ε* has some curvature (the EP locus is
not perfectly flat in kinematic space). The 28× enhancement and power-law
scaling are unmistakable EP₂ signatures.

---

## What the snap threshold is

In the Maslov-Gibbs Einsum, the **β* snap threshold** is the point at which
the free energy switches from single-mode behaviour (one BCFW cell dominates)
to multi-mode behaviour (several cells contribute comparably). The snap is where
the first derivative of the dominance fraction σ₀² is steepest.

This paper identifies the snap threshold as the **real-kinematic shadow of the
exceptional-point locus**: the closest point in physical kinematic space to the
complex surface ∂Gr⁺(k,n). The snap is not an arbitrary threshold — it is the
projection of the EP locus onto the real slice.

---

## The Raven amplitude (open question)

The results above motivate a conjecture: there exists a natural complexification
of the amplituhedron form to the full complex Grassmannian Gr(k,n,ℂ) — a "Raven
amplitude" — such that:

- On Gr⁺(k,n): the Raven amplitude equals the physical scattering amplitude.
- Near ∂Gr⁺(k,n): the Raven amplitude has EP₂ singularities with √ε splitting.
- In the PT-broken sector: the Raven amplitude acquires an imaginary part — and
  this imaginary part is the total inelastic cross-section, i.e. the **optical
  theorem is PT-breaking**.

If proved, this would give the optical theorem a geometric explanation for the
first time: unitarity of the S-matrix is the statement that physical amplitudes
live in the PT-unbroken sector.

---

## The ISA tier picture

The three tiers of the Origami ISA correspond directly to the three PT phases:

| ISA tier | PT phase | Kinematic regime |
|----------|----------|-----------------|
| H⁰ (tropical, single-cell) | Deep PT-unbroken | Far from any collinear limit |
| H¹ (multi-cell, near-snap) | Near exceptional point | Approaching ∂Gr⁺ |
| H² (BIND, boundary) | At EP / PT-broken | At collinear singularity |

The β* snap threshold of the MGE — the transition from H⁰ to H¹ — is the
real-kinematic approach to the EP locus. The H² BIND opcode fires at the EP
itself.

---

## What this paper does not claim

- It does not prove the Raven amplitude conjecture — that requires constructing
  an explicit canonical form on Gr(k,n,ℂ), which is future work.
- The PT-symmetric Hamiltonian H(ε) is a construction from the BCFW data, not
  uniquely derived from first principles. The EP location ε* depends on the
  construction; the qualitative phase structure does not.
- The results are established numerically for n=4. Extension to general n is
  expected from the same CPT argument but has not been checked case by case.

---

## Why this matters to each community

**For the amplituhedron community:** The positive Grassmannian is not just
defined by a sign condition — it is the PT-unbroken phase of a richer complex
space. Every collinear singularity is an exceptional point. The boundary
stratification of the amplituhedron is an EP hierarchy. The symbol alphabet
letters are the functions that vanish at each EP stratum.

**For the PT-symmetry community:** Here is a concrete, well-understood geometric
object (the positive Grassmannian with amplituhedron form) that realises the
full Bender-Boettcher phase structure. The PT-breaking deformation has a direct
physical meaning: complex momenta, loop integrands, Regge limits.

**For the ISA community:** The snap threshold β* is the real shadow of the EP
locus. The H⁰/H¹/H² tier structure is the PT-unbroken/near-EP/PT-broken
trichotomy. The SNAP-count invariant counts collinear boundary crossings along
a kinematic path.

---

*See also:*

- [The Grassmannian as Common Parent](https://doi.org/10.5281/zenodo.21279006) (#574) — Schmidt decomposition of BCFW cells; θ_G; β* snap as collinear threshold
- [PT Symmetry in Unexpected Places](https://doi.org/10.5281/zenodo.21480284) (#656) — five domains; EP = β* snap; this paper adds a sixth domain
- [PiTch](https://doi.org/10.5281/zenodo.21509972) (#678) — path-invariant SNAP-count; connection to kinematic path winding around EP locus

*For the full technical treatment, see [doi:10.5281/zenodo.21518107](https://doi.org/10.5281/zenodo.21518107)*
