---
layout: default
title: "C07 — Chemical Bonding as a PG→AG Transition"
parent: ISA Zoo
nav_exclude: true
semiring: tropical
---

# C07 — Chemical Bonding as a PG→AG Transition

| Field | Value |
|-------|-------|
| **Domain** | Chemistry |
| **System** | Any spd-block (q=3) covalent bond |
| **Group** | PGL(3,3) on PG(2,3) → AGL(2,3) on AG(2,3) after bonding |
| **H^k tier** | H² |
| **ISA** | Meld (full 8-opcode set) |
| **Status** | Validated (x707c, x707d) |
| **Opcodes** | FUSE · CLEAVE · FLIP · SNAP · RESOLVE · TWIST · THERMAL · HALT |
| **Papers** | [doi:10.5281/zenodo.21534988](https://doi.org/10.5281/zenodo.21534988) (Paper 688), [doi:10.5281/zenodo.21562294](https://doi.org/10.5281/zenodo.21562294) (Paper 699), Paper 707 |

---

## Physical system

A covalent bond between two spd-block atoms is the selection of a bond axis,
which singles out one direction in the orbital space PG(2,GF(3)) (13 points,
13 lines) and designates it as the line at infinity ℓ∞. The projective orbital
plane is thereby reduced to an affine plane AG(2,GF(3)) (9 points, 12 lines,
4 parallel classes). The 4 parallel classes are the bonding channels: σ, π, δ,
and non-bonding.

This is not a model of bonding — it is a description of what bonding *is*,
geometrically. The bond axis choice is the FUSE opcode; bond breaking is CLEAVE.
All subsequent chemistry (conformational change, spectroscopy, catalysis) is
executed by the remaining 6 opcodes acting within AG(2,3).

---

## Target category

**PGL(3,3)-Set** before bonding; **AGL(2,3)-Set** after bonding.

The full symmetry group of PG(2,3) is PGL(3,3), order 5616. It has **8
conjugacy classes** on the 13-point set — one per unoriented ISA operation type.

When a bond forms (FUSE fires), the system's symmetry breaks to the stabiliser
of ℓ∞:

$$\text{PGL}(3,3) \xrightarrow{\text{FUSE}} \text{AGL}(2,3) = \text{Stab}(\ell_\infty), \quad |432| \subset |5616|$$

AGL(2,3) has **9 conjugacy classes** on the 9-point affine set — the ISA
operations within the bond. The symmetry breaking is spontaneous: FUSE selects
one of the 13 lines as ℓ∞, reducing the 5616-element symmetry to a 432-element
subgroup.

**Uniqueness (Veblen-Young theorem, 1908):** PG(2,3) is the unique projective
plane of order 3. Therefore PGL(3,3) = Aut(PG(2,3)) is unique. No other group
gives this 8-class structure on 13 points. The ISA at H² is not a choice — it
is forced by the geometry of spd-block orbital physics.

---

## Interpretation functor

Two-level structure, reflecting the pre-bond and post-bond regimes:

### Level 1 — Pre-bond: PGL(3,3) on PG(2,3)

| PGL(3,3) class | Cycle type on 13 pts | Unoriented ISA type |
|----------------|----------------------|---------------------|
| identity | (1¹³) | null |
| order-2, 5 fixed pts | (1⁵,2⁴) | FLIP / SNAP (merged on 13 pts) |
| order-3, 4 fixed pts | (1⁴,3³) | RESOLVE-sub |
| order-3, 1 fixed pt | (1,3⁴) | RESOLVE |
| order-4, 1 fixed pt | (1,2²,4²) | TWIST |
| order-6, 2 fixed pts | (1²,2,3,6) | THERMAL / SNAP×RESOLVE |
| order-8, 1 fixed pt | (1,4,8) | HALT |
| order-13, 0 fixed pts | (13) | Singer cycle |

The Singer cycle (order-13 class, 1728 elements) is the full cyclic permutation
of all 13 points — it has no analogue in AGL(2,3) and is a PGL-only operation
corresponding to a global phase rotation of the entire orbital configuration.

### Level 2 — Post-bond: AGL(2,3) on AG(2,3)

| AGL(2,3) class | Fingerprint (Ord, FP, FC) | ISA opcode |
|----------------|--------------------------|------------|
| (1⁹) | (1, 9, 4) | identity |
| (3,3,3) | (3, 0, 1) | RESOLVE |
| (1,1,1,2,2,2) | (2, 3, 2) | FLIP |
| (1,2,2,2,2) | (2, 1, 4) | SNAP |
| (1,1,1,3,3) | (3, 3, 1) | RESOLVE(sub) |
| (1,4,4) | (4, 1, 0) | TWIST |
| (1,2,6) | (6, 1, 1) | THERMAL |
| (3,6) | (6, 0, 2) | SNAP×RESOLVE (compound) |
| (1,8) | (8, 1, 0) | HALT |
| T ≅ Z₃² | (3, 0, 0) | FUSE/CLEAVE (undirected) |

Fingerprint = (order, fixed-point count, fixed-class count). Each fingerprint
is unique — the bijection between classes and opcodes is forced, not labelled.

---

## The FUSE/CLEAVE orientation problem

FUSE (bond formation) and CLEAVE (bond breaking) are group-theoretically
identical: a permutation and its inverse always share the same cycle type and
are therefore always conjugate in any symmetric group. No group — not T, not
AGL(2,3), not PGL(3,3) — can distinguish them.

The distinction is **categorical, not algebraic**. FUSE and CLEAVE are an
adjoint functor pair (monad/comonad). The bond direction is an arrow in the
category; the group captures operation types but not directions.

This has a self-referential consequence:

> **FUSE is the operation that creates the orientation needed to distinguish
> FUSE from CLEAVE.**

Before FUSE fires, PG(2,3) has no preferred ℓ∞ and no bond direction. After
FUSE fires, ℓ∞ is designated, AGL(2,3) becomes the symmetry group, and CLEAVE
is now the directed reverse of FUSE. The ISA bootstraps its own directionality.

---

## ISA programme (generic covalent bond, spd-block)

```
-- Pre-bond: full PGL(3,3) symmetry on PG(2,3)
RESOLVE[orbital configuration]      -- read parallel-class occupancies
TWIST[ε vs ε_crit]                -- check branch-point position
-- Bond formation
FUSE[ℓ∞ ← bond axis]             -- remove ℓ∞; PGL→AGL symmetry breaking
                                  -- 4 parallel classes emerge: σ π δ non-bonding
-- Within bond: AGL(2,3) operations
FLIP[occupancy]                   -- invert σ/π occupancy
SNAP[sheet exchange]              -- exchange Hitchin spectral sheets
RESOLVE[parallel classes]           -- cycle through σ→π→δ→... conformations
THERMAL[ε perturbation]           -- phonon/photon forcing of branch point
HALT[permanent SSB]               -- covalent arrest; no return to SSM
-- Bond breaking
CLEAVE[ℓ∞ restored]               -- restore PG(2,3); AGL→PGL symmetry recovery
```

**The full 8-opcode ISA is necessary and sufficient** for spd-block (q=3)
bonding chemistry. Remove any one and a class of reactions becomes unreachable
(RESOLVE: no conformational cycling; HALT: no permanent bonds; FUSE: no bond
formation; etc.).

---

## Computable output

- **Bond symmetry breaking**: ΔG of FUSE = spectral gap of PG(2,3) at
  the weakened line = 2ε_crit(bond type); measured by Hitchin period matrix
  Im(B) (Papers 697–699).
- **Bond order**: number of parallel classes in SSB state = σ only → order 1;
  σ+π → order 2; σ+π+δ → order 3.
- **Trans influence**: Re(w_BP) for the bond's branch-point parameter; larger
  Re(w_BP) = stronger σ-donor; confirmed for 12 Pt(II) complexes (Paper 699
  x699c, r = 0.94).
- **Bond dissociation energy**: 2ε_crit for the weakest parallel class in SSB;
  Co–C in B12 predicted 1.35–1.40 eV (Paper 705 x705d, planned).

## Validation

- **x707c** (5/5): AGL(2,3) has exactly 9 conjugacy classes; 8 non-trivial
  classes biject with ISA opcodes by forced geometric fingerprint.
- **x707d** (5/5): PGL(3,3) has exactly 8 conjugacy classes on PG(2,3);
  Stab(ℓ∞) = AGL(2,3) of order 432; every AGL class embeds into a PGL class.
- **Paper 688** (x688a–e, 5/5): bond = PG→AG transition confirmed for H₂,
  N₂, benzene, FeMoCo, B12.
- **Paper 699** (x699a–d, 5/5): bond = Hitchin branch point; trans influence
  from Re(w_BP); Madelung anomalies from branch-point interference.
- **Veblen-Young (1908)**: PG(2,3) unique → PGL(3,3) unique → ISA at H²
  is the canonical and only faithful representation.

---

## Relation to other zoo entries

- [C01 — Nitrogen Fixation](c01-nitrogen-fixation.md): FUSE fires at E₄
  state; the N≡N bond is a PAT-3 triple-HALT state
- [C05 — PSII O–O Bond Formation](c05-psii-oo.md): FUSE at S₄→S₀ transition;
  O–O bond = PAT-3 FUSE with Ca as the orientation-fixing cofactor
- [C06 — C/T Skeleton](c06-ct-skeleton.md): pre-screening identifies which
  pairs are near the FUSE threshold (T-arrows = bonds near ε_crit)
- [GA02 — FeMoCo Galois](ga02-femoco-galois.md): FUSE as Galois field
  extension — complementary algebraic description of the same transition

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/).
Foundational ISA: [Paper 591](https://doi.org/10.5281/zenodo.21309088).
PAT-q bonding: Papers 688, 699. AGL(2,3) bijection: Paper 707.*
