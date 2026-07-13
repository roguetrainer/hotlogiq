---
layout: default
title: "PT01 — PT-Symmetric Non-Hermitian System"
parent: ISA Zoo
nav_exclude: true
semiring: probabilistic
---

# PT01 — PT-Symmetric Non-Hermitian System

| Field | Value |
|-------|-------|
| **Domain** | Non-Hermitian Physics |
| **System** | Gain-loss balanced optical waveguide pair |
| **Group** | PT (parity-time symmetry group) |
| **H^k tier** | H¹ |
| **ISA** | Forge (β ≈ β*) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · LABEL |
| **Papers** | Paper 543, Paper 460 |

---

## Physical system

A PT-symmetric system has a non-Hermitian Hamiltonian H satisfying
[H, PT] = 0, where P is parity (x → −x) and T is time-reversal (i → −i).
Despite H ≠ H†, the spectrum is real in the **PT-unbroken phase** — an
apparently impossible result that follows from the PT symmetry constraining
eigenvalues to come in complex conjugate pairs, which are forced real when
PT symmetry is unbroken.

The canonical experimental realisation (Rüter et al. 2010): a pair of coupled
optical waveguides, one with gain (amplification, Im(n) < 0) and one with
loss (absorption, Im(n) > 0), with equal magnitudes. The coupling κ between
waveguides and the gain/loss rate γ set the two control parameters.

**The exceptional point (EP)** at γ = κ is the β* snap: for γ < κ (PT-unbroken),
eigenvalues are real; at γ = κ they coalesce into a degenerate pair; for γ > κ
(PT-broken) they split into a complex conjugate pair. The EP is a branch point
of the eigenvalue surface — not a crossing but a coalescence where two
eigenvalues *and* their eigenvectors become identical.

---

## Target category

**PT-Hilb** — the category of finite-dimensional Hilbert spaces with a PT-inner
product ⟨φ|ψ⟩_{PT} = ⟨φ|PT|ψ⟩ (indefinite metric, not positive definite).
Objects: PT-symmetric Hamiltonians H on ℂⁿ. Morphisms: PT-preserving
similarities S with SHS⁻¹ Hermitian. In the PT-unbroken phase, the PT-inner
product is positive definite and PT-Hilb ≅ standard Hilbert space. At the EP
the metric becomes degenerate — this is the TWIST failure event.

## Interpretation functor

F: C → PT-Hilb defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | PT-symmetric time evolution: U(t) = e^{−iHt}; in the unbroken phase this is unitary with respect to the PT-inner product; eigenstates propagate with real eigenfrequencies |
| TWIST  | Berry phase around the exceptional point: encircling the EP in parameter space (γ, κ) applies a geometric phase that **swaps** the two coalescing eigenvalues; one full loop returns eigenvalue 1 to eigenvalue 2 and vice versa — a half-integer TWIST requiring two loops to return to identity |
| LABEL  | Eigenvalue pair (E₊, E₋): real in PT-unbroken phase (E± = ±√(κ²−γ²)); purely imaginary in PT-broken phase (E± = ±i√(γ²−κ²)); coalesce at EP (E± = 0, γ=κ) |

## ISA programme

```
PARAMS:  LABEL[kappa, gamma | coupling and gain/loss rates]
PHASE?:  LABEL[gamma < kappa? | PT-unbroken vs broken]
EIGEN:   LABEL[E_pm = pm sqrt(kappa^2 - gamma^2) | real eigenvalues]
EVOLVE:  ORBIT[U(t) = exp(-i H t) | PT-symmetric evolution]
WIND:    TWIST[encircle EP in (gamma,kappa) plane]
SWAP:    TWIST[E_+ <-> E_- after one loop | half-integer Berry phase]
SNAP:    LABEL[gamma = kappa | exceptional point, EP, beta* snap]
BROKEN:  LABEL[E_pm = pm i sqrt(gamma^2 - kappa^2) | complex eigenvalues]
```

## Computable output

- **Eigenvalue coalescence** at γ = κ: E± = 0. At the EP, both eigenvalues
  and both eigenvectors become identical — the Hamiltonian is not diagonalisable
  but only Jordanisable: H = λI + N where N² = 0 (Jordan block). This is the
  LABEL degeneracy; the response function near an EP diverges as 1/(γ−κ)^{1/2}
  rather than the Lorentzian 1/(γ−κ) of a normal degeneracy.
- **Eigenvalue swap under encirclement**: encircling the EP once in the
  (γ,κ) parameter plane causes E₊ → E₋ and E₋ → E₊. Two encirclements restore
  the original labelling. This is a TWIST with winding number 1/2 — a
  **spinorial Berry phase**. Measured experimentally in: microwave cavities
  (Doppler et al. 2016, Nature), optical systems (Rüter et al. 2010), and
  acoustic resonators.
- **PT-broken mode growth**: for γ > κ, one eigenvalue has Im(E) < 0 giving
  exponential growth in the cavity mode. The amplified output power grows as
  e^{2|Im(E)|t}. Measured in gain-loss waveguide pairs to match theory.
- **Unidirectional invisibility**: near the EP, the scattering matrix becomes
  non-reciprocal — a wave incident from the left is partially reflected while
  the same wave from the right passes through invisibly. This is an ORBIT
  asymmetry (the forward/backward propagation ORBITs are not time-reversal
  images of each other), arising from the PT-broken gauge connection.

## The β-plane interpretation (Paper 543 §1)

The β-plane gives an exact home for PT-symmetric systems. Writing β = σ + it:

| β-plane region | Physical regime | Spectrum |
|---------------|----------------|---------|
| σ = 0 (imaginary axis) | Standard Hermitian QM | Real (always) |
| σ > 0 small (right half-plane, small) | PT-unbroken phase | Real (PT symmetry protects) |
| σ = σ* (EP locus) | Exceptional point | Degenerate real |
| σ > σ* (right half-plane, large) | PT-broken phase | Complex conjugate pairs |
| σ < 0 (left half-plane) | Gain-dominated | Growing modes |

The PT phase transition — EP at γ = κ — is a **phase boundary on the β-plane**
at fixed |β|, varying arg(β). It is the arg(β) analogue of the BKT transition
(which is at fixed arg(β), varying |β|). Both are β* snap events, just on
different axes.

**The TWIST half-integer winding around the EP** is the β-plane version of the
TWIST opcode: the eigenvalue surface is a Riemann sheet with a branch point at
the EP, and the branch cut is the PT phase boundary. The half-integer winding
(two loops needed to return) is the β-plane TWIST at a branch point of order 2
— exactly the structure of a √z Riemann surface.

## Why H¹ and not H²

The EP is a degeneracy of eigenvalues, not a topological charge. The Berry phase
from encircling an EP is geometric (depends on the path) but not quantised to an
integer — it is π (half-integer), not 2π (integer). The H¹ assignment reflects:
- The TWIST winding number is ½ (spinorial), consistent with H¹ (half-integer
  windings are H¹ in the ℤ₂ cohomology of the parameter space)
- No H² BIND is needed: the EP has no associated second Chern class; it is a
  branch point (codimension-2 feature) of the H¹ eigenvalue bundle
- The exceptional point is a TWIST failure event (the H¹ bundle becomes
  non-trivial), not a BIND event (which would require a non-Abelian holonomy)

Compare to Yang-Mills instantons (G01), which are genuinely H² — the Chern
number Q ∈ ℤ requires a full 4-manifold integral. The EP is H¹ because the
relevant cohomology group is H¹(ℂ\{EP}, ℤ) = ℤ, with the single generator
being the winding around the branch point.

## Connections to other entries

- **Paper 543 §1** (β-plane): PT-symmetric QM lives at β = σ + it with σ > 0;
  EP is the PT phase boundary in the β-plane; explicitly in the §1 table
- **G03 Higgs mechanism**: the electroweak phase transition is an analogous
  snap — the order parameter (Higgs VEV) goes through a real→complex transition
  at T_c, just as PT eigenvalues go real→complex at γ = κ
- **SC02 Abrikosov vortex**: the vortex core is a localised region where the
  superconducting order parameter passes through zero — the same H¹ TWIST
  structure as the EP encirclement
- **CA02 Residue theorem**: the EP is a branch point of the eigenvalue surface
  E(γ,κ), analogous to a pole of a meromorphic function; the half-integer
  winding is the residue-theorem H² content of the branch cut

## Validation

- Bender & Boettcher (1998), PRL 80, 5243: first proof that PT-symmetric
  Hamiltonians can have real spectra. The foundational theoretical paper.
- Rüter et al. (2010), Nature Physics 6, 192: first experimental observation
  of PT symmetry and its spontaneous breaking in coupled optical waveguides.
  EP observed at balanced gain/loss.
- Doppler et al. (2016), Nature 537, 76: encirclement of EP in microwave
  cavity; eigenvalue swap (TWIST half-integer winding) directly observed.
- Asymmetric state switching: Xu et al. (2016), Nature 537, 80: EP
  encirclement gives non-reciprocal mode switching in optomechanical system.
- Review: Özdemir et al. (2019), Nature Materials 18, 783.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
