---
layout: default
title: "G02 — Amplituhedron (N=4 SYM Scattering)"
parent: ISA Zoo
nav_exclude: true
---

# G02 — Amplituhedron (N=4 SYM Scattering)

| Field | Value |
|-------|-------|
| **Domain** | Gauge Theory |
| **System** | Positive Grassmannian Gr⁺(k, n) in twistor space |
| **Group** | GL(k) acting on Gr(k, k+4) |
| **H^k tier** | H² |
| **ISA** | Meld (β → 0) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · BIND |
| **Papers** | Paper 574, Paper 520 |

---

## Physical system

The **amplituhedron** (Arkani-Hamed & Trnka 2013) is a geometric object in the
Grassmannian Gr(k, k+4) whose **volume form** computes the n-particle, k-th
NMHV scattering amplitude in planar N=4 supersymmetric Yang-Mills theory — the
most symmetric quantum field theory in four dimensions. The amplitude is not
derived from a Lagrangian or Feynman diagrams: it *is* the volume of the
amplituhedron. This reframes scattering amplitudes as a problem in positive
geometry: the amplitude = ∫_{amplituhedron} Ω, where Ω is a canonical
logarithmic form on Gr(k, k+4).

**The Grassmannian structure**: the amplituhedron is the image of the positive
Grassmannian Gr⁺(k, n) — the subspace of Gr(k, n) where all Plücker coordinates
are positive — under the map Z: Gr⁺(k, n) → Gr(k, k+4) defined by the
external kinematic data (momentum twistors Z_i ∈ ℙ³). Physical poles correspond
to boundaries of the amplituhedron where the Plücker coordinate vanishes;
spurious poles (from individual BCFW diagrams) cancel between diagrams because
they are interior boundaries that cancel in the volume form.

---

## Target category

**PosGr(k, n)** — the category of positive Grassmannians with canonical boundary
stratification. Objects: positroid cells C_f ⊂ Gr⁺(k, n) labelled by
decorated permutations f ∈ S_n. Morphisms: boundary maps ∂: C_f → ∑ C_{f'}.
The amplituhedron is the pushforward of PosGr(k, n) along the Z-map; its
boundary stratification encodes the factorisation properties of amplitudes
(BCFW recursion).

## Interpretation functor

F: C → PosGr(k, k+4) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | BCFW recursion step: amplitude A_n = Σ_i A_L(i) × A_R(i) via on-shell splitting; geodesic on Gr(k,k+4) in twistor metric |
| TWIST  | Loop momentum phase: at L loops, each loop integral contributes a TWIST holonomy around a momentum-space cycle; H¹ = rational function poles |
| BIND   | Spurious pole cancellation: individual BCFW terms have poles at z_i = 0 (interior boundaries of amplituhedron); these cancel in the sum because the H² class ∫_{boundary} Ω = 0; BIND = this topological cancellation |

## ISA programme

```
KINEM:  LABEL[Z_i in P^3 | n momentum twistors]     -- encode external kinematics
POSMAP: ORBIT[Z: Gr+(k,n) -> Gr(k,k+4)]             -- Z-map to amplituhedron
BCFW:   ORBIT[A_n = sum_i A_L(i) * A_R(i)]          -- BCFW recursion (geodesic sum)
PHASE:  TWIST[loop holonomy | L-loop phase integral] -- H1 phase accumulation
CANCEL: BIND[sum spurious poles = 0]                 -- H2 topological cancellation
VOLUME: BIND[A_n = int_{amplituhedron} Omega]        -- amplitude as geometric volume
OUTPUT: LABEL[A_n^{NkMHV} | k, n, L]               -- the scattering amplitude
```

## Computable output

- **Tree-level amplitudes** A_n^{NkMHV}: the volume of the k-th amplituhedron
  in Gr(k, k+4). For k=0 (MHV), this is the Parke-Taylor formula — a single
  term, no BCFW recursion needed. For k=1 (NMHV), the amplituhedron is a
  5-simplex in Gr(1,5) = ℙ⁴; volume = sum of 5 terms. Tree-level validated
  to all multiplicity n (Arkani-Hamed & Trnka 2013).
- **Spurious pole cancellation**: BCFW diagrams individually have poles at
  unphysical momenta (z_i = 0 for the BCFW shift parameter). These cancel
  between diagrams. The ISA explanation: they are interior boundaries of the
  amplituhedron — H² classes that bound, hence ∫_{interior boundary} Ω = 0
  by Stokes. Each BCFW diagram = one positroid cell; the sum = the full
  amplituhedron; cancellation = boundary of boundary = 0.
- **Physical poles**: at physical factorisation channels (p_I² = 0), the
  amplitude factorises as A_L × 1/p_I² × A_R. These are exterior boundaries
  of the amplituhedron — the ORBIT boundaries where the positroid cell
  degenerates. The residue at each physical pole is the product of two lower-
  point amplitudes (SPLIT/SPLAT opcode in the factorisation channel).

## Connection to the ISA framework (Paper 574)

**The amplituhedron is an OPU (P01) in twistor space.** The Grassmannian Gr(k, n)
is the same object in the amplituhedron and in the Grassmannian Computing Unit
(Paper 598): the difference is the domain (scattering amplitudes vs molecular
orbital geometry) and the group action (Z-map from twistors vs CASSCF orbital
gradients). The θ_G angle in Paper 574 is the Grassmannian coordinate of the
bonding system; in the amplituhedron, the analogous coordinate is the Plücker
coordinate measuring "how non-MHV" the amplitude is.

**Spurious poles = BIND snap events.** The BPST instanton (G01) has Q ∈ ℤ as its
H² invariant; the amplituhedron's spurious-pole cancellation is the same
structure — an H² class that is a boundary (hence zero) in the volume form.
Both are examples of BIND: a topological invariant that vanishes by a global
argument (Stokes / Bianchi identity) even though individual terms are non-zero.

**Loop amplitudes (conjectured):** at L loops, the amplituhedron generalises to
a 4k+4L-dimensional object in a larger Grassmannian. The loop momentum variables
are additional Grassmannian coordinates. The conjecture (Arkani-Hamed & Trnka)
is that the all-loop amplitude in N=4 SYM = volume of the (generalised) loop
amplituhedron. This remains unproven for L ≥ 2; status is conjectured.

**The soliton/instanton duality (Paper 543 §1):** the amplituhedron lives at
β → 0 (Meld ISA, twistor / Euclidean signature). Its β → ∞ (Origami) limit
would be the tropical Grassmannian — the piecewise-linear shadow of Gr⁺(k,n)
in the tropical sense. Tropical scattering amplitudes (Cachazo-He-Yuan in the
tropical limit) are the H⁰ Origami version of the amplituhedron. The full
complex β-plane interpolates between tropical (Origami, classical limit) and
twistor (Meld, quantum).

## H^k structure of amplitudes

| H^k tier | Amplitude structure | Geometric object |
|----------|--------------------|--------------------|
| H⁰ | MHV (k=0) Parke-Taylor | Single term; positive orthant of Gr(0,4) |
| H¹ | NMHV (k=1); rational function with spurious poles | 5-simplex in Gr(1,5) = ℙ⁴ |
| H² | N²MHV (k=2) and beyond; spurious pole cancellation is non-trivial BIND | Full amplituhedron in Gr(2,6) |
| All-loop | L-loop correction; loop momentum TWIST phases | Loop amplituhedron (conjectured) |

## Validation

- Tree-level MHV: Parke-Taylor formula (1986). Validated to all multiplicity.
- Tree-level NMHV: Drummond, Henn, Korchemsky, Sokatchev (2010). Validated
  by comparison with Feynman diagram calculations.
- Positive Grassmannian / amplituhedron: Arkani-Hamed & Trnka (2013). The
  volume formula reproduces known tree-level results for n ≤ 8, k ≤ 3.
- Spurious pole cancellation: verified algebraically for all tree-level cases
  checked; the BIND = boundary-of-boundary proof is rigorous at tree level.
- Loop amplituhedron: conjectured; 1-loop results agree with direct calculation;
  2-loop untested at the geometric level.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
