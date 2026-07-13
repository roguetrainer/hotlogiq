---
layout: default
title: "GS03 — Topological Insulators and Chern Bands"
parent: ISA Zoo
nav_exclude: true
---

# GS03 — Topological Insulators and Chern Bands

| Field | Value |
|-------|-------|
| **Domain** | Grassmannian Systems |
| **System** | Occupied band subspace over Brillouin zone |
| **Group** | U(k) acting on Gr(k, 2k) |
| **H^k tier** | H² |
| **ISA** | Forge (β ≈ β*) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · BIND |
| **Papers** | Paper 574 |

---

## Physical system

A **topological insulator** has an energy gap separating k occupied bands from
unoccupied bands at every crystal momentum k ∈ 𝕋^d (the Brillouin zone torus).
The occupied-band subspace V(k) ∈ Gr(k, n) varies smoothly over the Brillouin
zone, defining a vector bundle E → 𝕋^d. Whether the insulator is topologically
trivial or non-trivial depends on the topology of this bundle — specifically its
Chern classes c₁(E), c₂(E), ... ∈ H^{2k}(𝕋^d, ℤ).

**The Chern number** c₁ ∈ ℤ = ∫_{𝕋²} F/2π (where F = dA is the Berry curvature
2-form) is the BIND invariant: the integral of the Berry curvature over the
Brillouin zone 2-torus. The quantised Hall conductance is σ_xy = c₁ e²/h — one
conductance quantum per Chern number unit. This is the TKNN formula (Thouless,
Kohmoto, Nightingale, den Nijs 1982), the first topological invariant in
condensed matter physics.

---

## Target category

**Vect(𝕋^d)** — the category of complex vector bundles over the Brillouin zone
torus 𝕋^d = (S¹)^d, with smooth unitary bundle maps as morphisms. Objects:
occupied-band bundles E → 𝕋^d of rank k. Classification: stable isomorphism
classes of rank-k bundles over 𝕋^d are given by K-theory K̃(𝕋^d); the Chern
character maps K̃(𝕋^d) → H^{even}(𝕋^d, ℚ), and the integer Chern classes are
in H^{2j}(𝕋^d, ℤ).

## Interpretation functor

F: C → Vect(𝕋^d) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Band evolution: V(k) → V(k+dk) as crystal momentum k moves around the Brillouin zone; adiabatic parallel transport of the occupied subspace |
| TWIST  | Berry connection A_μ(k) = i⟨u_n(k)\|∂_{k_μ}\|u_n(k)⟩: the H¹ connection 1-form on the bundle E; Berry phase γ = ∮_C A accumulated around a loop C in the BZ |
| BIND   | Berry curvature F_μν = ∂_μ A_ν − ∂_ν A_μ + [A_μ, A_ν]: the H² curvature 2-form; Chern number c₁ = (1/2π)∫_{𝕋²} tr(F) ∈ ℤ |

## ISA programme

```
BLOCH:   LABEL[H(k) | Bloch Hamiltonian at each k]   -- parametric family over BZ
DIAG:    ORBIT[H(k)|u_n(k)> = E_n(k)|u_n(k)>]       -- eigenvalue problem at each k
SUBSP:   LABEL[V(k) = span{|u_1(k)>,...,|u_k(k)>}]  -- occupied subspace in Gr(k,n)
CONNECT: TWIST[A_mu(k) = i<u|d_k u>]                -- Berry connection (H1)
CURV:    BIND[F = dA + A^A]                          -- Berry curvature (H2)
CHERN:   BIND[c_1 = (1/2pi) int_T2 tr(F)]           -- Chern number (integer)
CONDUCT: LABEL[sigma_xy = c_1 * e^2/h]              -- Hall conductance (LABEL output)
EDGE:    LABEL[n_edge = |c_1| chiral edge modes]     -- bulk-edge correspondence
```

## Computable output

- **Chern number** c₁ ∈ ℤ: the H² BIND invariant. Computable numerically via
  the Fukui-Hatsugai-Suzuki discretisation: divide the BZ into a mesh, compute
  Berry phases around each plaquette, sum the winding numbers. The result is
  always an exact integer (modular arithmetic over ℤ). For the Haldane model
  on honeycomb lattice: c₁ = ±1 in the topological phase, 0 in the trivial phase.
- **Quantised Hall conductance** σ_xy = c₁ e²/h: measured experimentally to
  nine significant figures in quantum Hall systems. The TKNN formula is one of
  the most precisely tested results in condensed matter physics.
- **Chiral edge modes**: by the bulk-edge correspondence (a topological version
  of the BIND closure condition), a system with |c₁| = n has exactly n chiral
  conducting modes at each edge, immune to backscattering. This is the H² output
  that cannot be obtained from H⁰ (band gap) or H¹ (Berry phase along a line)
  alone — it requires the integral over the full 2D Brillouin zone.
- **Z₂ topological invariants** (time-reversal symmetric insulators, Kane-Mele):
  when Kramers degeneracy is enforced, the Chern number vanishes but a ℤ₂
  invariant ν ∈ {0,1} persists. This is the BIND obstruction in the symplectic
  symmetry class — the H² class in real K-theory (KO-theory) rather than complex
  K-theory.

## H^k structure of band topology

| H^k tier | Invariant | Physical signature | ISA |
|----------|-----------|-------------------|-----|
| H⁰ | Band gap E_gap at every k | Insulating bulk | ORBIT (eigenvalue) |
| H¹ | Berry phase γ = ∮ A along loop | Polarisation; Zak phase; WCC | TWIST |
| H² | Chern number c₁ = ∫ F | Hall conductance; edge modes | BIND |
| H³ | Chern-Simons invariant θ | Axion electrodynamics (3D TI) | BIND² |

The H³ level (3D topological insulators, magnetoelectric θ-term) requires a
BIND² opcode — the Chern-Simons form CS = tr(A∧dA + 2/3 A∧A∧A) is the
secondary characteristic class whose boundary is tr(F∧F). This connects to
the Yang-Mills instanton (G01): the topological insulator's θ-term is the
condensed-matter analogue of the QCD θ-vacuum.

## Connection to the Grassmannian framework (Paper 574)

The occupied-band subspace V(k) ∈ Gr(k, n) and the molecular orbital subspace
V ∈ Gr(k, n) in chemistry (C06, P01) are the same mathematical object — a
k-plane varying over a parameter space. The parameter space is the Brillouin
zone 𝕋^d in condensed matter and the nuclear configuration space ℝ^{3N} in
chemistry. The Berry phase (TWIST) and Chern number (BIND) appear in both:

| Chemistry | Condensed matter | ISA |
|-----------|-----------------|-----|
| Molecular Berry phase around conical intersection | Berry phase around Dirac point in BZ | TWIST |
| Non-adiabatic coupling (NAMD) | Inter-band matrix elements | TWIST failure |
| θ_G angle (alchemi) | Principal angle between V(k) and V(k+dk) | ORBIT metric |
| NOON spectrum | Occupation numbers of Bloch bands | LABEL |
| CASSCF convergence = Schubert crossing | Band gap closure = topological transition | β* snap |

The **topological phase transition** — where c₁ changes from 0 to 1 — is a
Schubert variety crossing in Gr(k, n) as a function of Hamiltonian parameters.
The gap closes (σₖ² = σₖ₊₁²) at the transition: this is the same β* snap as
the CASSCF convergence threshold in x596c. Both are instances of the same
categorical event: a k-plane hitting a codimension-1 Schubert variety in
Gr(k, n).

## Validation

- TKNN formula: Thouless, Kohmoto, Nightingale & den Nijs (1982). The original
  proof; Chern number = Hall conductance. Confirmed experimentally in GaAs/AlGaAs
  heterostructures (von Klitzing 1980 Nobel Prize in Physics 1985).
- Haldane model: Haldane (1988). First theoretical model with c₁ = ±1 without
  Landau levels; realised experimentally in cold atoms (Jotzu et al. 2014).
- Kane-Mele ℤ₂ invariant: Kane & Mele (2005). Validated in HgTe quantum wells
  (König et al. 2007); Nobel Prize in Physics 2016 (Haldane, Kosterlitz, Thouless).
- Bulk-edge correspondence: Hatsugai (1993). Exact for Chern insulators; proved
  via K-theory for general symmetry classes (Kitaev 2009 periodic table).

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
