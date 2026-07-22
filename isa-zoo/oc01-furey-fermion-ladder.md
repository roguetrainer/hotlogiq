---
layout: default
title: "OC01 — Furey Fermion Ladder"
parent: ISA Zoo
nav_exclude: true
semiring: Clifford
---

# OC01 — Furey Fermion Ladder

| Field | Value |
|-------|-------|
| **Domain** | Algebraic quantum field theory / Standard Model |
| **System** | Complexified octonions ℂ⊗𝕆, minimal left ideal of Cℓ(6) |
| **Group** | G₂ (automorphisms of 𝕆) ⊃ SU(3) × U(1) |
| **H^k tier** | H² (octonionic Hopf fibre) |
| **ISA** | Origami (Valence extension) |
| **Status** | Validated (one generation) |
| **Opcodes** | ORBIT · TWIST · MERGE · FLIP |
| **Papers** | Furey 2018 (EPJ C 78, 375); Furey 2016 (PhD thesis) |

---

## Physical system

Cohl Furey constructs one generation of Standard Model fermions from the
minimal left ideal **S** of the Clifford algebra Cℓ(6) ≅ ℂ⊗𝕆, the
complexification of the octonions. The key structure is a pair of nilpotent
ladder operators

$$\omega = e_1 e_3 e_5, \qquad \omega^\dagger = e_5 e_3 e_1,$$

built from octonion basis elements e₁, e₃, e₅, satisfying

$$\omega^3 = 0, \qquad \omega^\dagger{}^3 = 0, \qquad
\{\omega,\,\omega^\dagger\} = 1.$$

The nilpotency ω³ = 0 produces exactly **three grades** of the minimal left
ideal, which Furey identifies with the three colour states of a quark (grades
0, 1, 2) and the colourless lepton (grade 3, annihilated by ω).

The SU(3) colour symmetry acts on the fibre via the G₂ automorphism group of
𝕆: the Lie algebra of G₂ contains SU(3) as the subgroup that fixes the
preferred octonion unit e₇. The U(1) hypercharge Y is the diagonal generator
that distinguishes quark grades from the lepton.

One full generation (8 Weyl fermions: 3 quark colours + 1 lepton, each in two
chiralities) = one traversal of the minimal left ideal by the ω/ω† ladder.

---

## Why this lives in H², not H⁰ or H¹

The octonion algebra 𝕆 underlies the **third Hopf fibration** S¹⁵ → S⁸,
whose structure group is Spin(7) ⊃ G₂. This is the full H² tier of the ISA
(see §9 of the Hopf ISA paper). Furey's ω and ω† navigate the internal
structure of this fibre — they are intra-tier operators, moving between grades
*within* H².

Compare:
- **SNAP↑**: the 2-cell that *enters* H² from H¹ (e.g. crossing the magic
  threshold in quantum computation, or passing through an exceptional point in
  a PT-symmetric laser). SNAP changes which tier the computation lives in.
- **TWIST (Furey ω)**: a 1-cell that moves *within* H² by a discrete
  crossing change — changing the grade of the minimal ideal without leaving
  the octonionic sector.

Furey never uses SNAP. Her entire programme is intra-H².

---

## Target category

**Mod(Cℓ(6))** — the category of left Cℓ(6)-modules, with the minimal left
ideal **S** as the distinguished object. Morphisms are Cℓ(6)-module maps.
The G₂ automorphism group acts by outer automorphisms.

## Interpretation functor

F: Origami ISA → Mod(Cℓ(6)) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT | Set up the minimal left ideal **S** in its grade-0 state (vacuum = no quarks). The eigenvalue is the G₂ representation label. |
| TWIST | Apply ω: grade k → grade k+1 within **S**. One TWIST = one colour charge unit. Reverse TWIST applies ω†. |
| MERGE | Project two grades to a singlet via ω ∧ ω†: the Frobenius multiplication μ collapsing two ideal grades into one colourless state. |
| FLIP  | Read out the hypercharge Y eigenvalue: the FLIP counit extracts the U(1) quantum number of the current grade. |

Note: BIND (entanglement between two distinct minimal ideals) would describe
**two-generation mixing** — a natural extension but not Furey's focus.

## ISA programme

```
-- One generation of Standard Model fermions

SETUP:   ORBIT[S | grade=0, G₂-rep=octonion]   -- vacuum: empty minimal ideal
QUARK1:  TWIST[ω | grade 0→1]                   -- first colour (e.g. red quark)
QUARK2:  TWIST[ω | grade 1→2]                   -- second colour (green quark)
QUARK3:  TWIST[ω | grade 2→3]                   -- third colour (blue quark)
LEPTON:  MERGE[ω∧ω† | singlet projection]       -- colourless lepton (neutrino/electron)
READOUT: FLIP[Y | hypercharge eigenvalue]        -- measure U(1) charge
```

The nilpotency ω³ = 0 means a fourth TWIST would annihilate the state —
there is no fourth colour. The programme terminates naturally after three
TWIST steps.

**Three generations:** applying the programme to three independent minimal
left ideals (one per generation) and then BIND-ing them gives the full
three-generation lepton-quark structure. The BIND opcode here encodes the
CKM/PMNS mixing — the entanglement between generation-labelled ideals.

## Computable output

- **Quantum numbers of one generation**: after running the programme,
  FLIP yields the hypercharge Y = −1/3 (quarks, per grade) and Y = +1
  (lepton). The SU(3) colour representation is 3 (quarks) + 1 (lepton),
  matching the Standard Model exactly.
- **Nilpotency = generation count**: ω³ = 0 gives exactly 3 quark colours.
  This is a *prediction* of the octonionic structure, not an input.
- **G₂ as the symmetry group of BIND at H²**: the 14-dimensional Lie algebra
  of G₂ = the automorphism group of 𝕆 = the symmetry group of the BIND
  opcode's Frobenius algebra at H². This connects Furey's derivation of
  SU(3) colour to the ISA's statement that H² BIND has G₂ symmetry.

## Connection to the ISA framework

**Furey's ω is TWIST at H².** The crossing-change interpretation:

- Each TWIST step applies one Reidemeister move to the octonionic knot
  living on the Hopf torus T² ⊂ S¹⁵. Grade k corresponds to a torus knot
  T(k+1, 3−k) on the octonionic Hopf torus.
- Three TWIST steps exhaust the three non-trivial grades (k = 0 → 1 → 2 → 3),
  after which ω³ = 0 kills further progression. The lepton is the grade-3
  state where the knot has been fully unknotted — the colourless singlet.
- The SU(3) symmetry = the group of Reidemeister moves that preserve the
  knot type within each grade. Colour = knot label within H².

**Relation to other H² zoo entries:**

| Entry | H² object | BIND computation |
|-------|-----------|-----------------|
| G01 (YM instanton) | c₂ ∈ ℤ of SU(2) bundle | ∫tr(F∧F) over S⁴ |
| G02 (Amplituhedron) | Volume form on Gr(k,n) | BCFW recursion = BIND tree |
| G03 (Higgs mechanism) | Goldstone sector of G/H | SNAP↑ removes LINK |
| **OC01 (Furey ladder)** | Minimal ideal of Cℓ(6) | Three TWIST steps within 𝕆-fibre |

All four are H² computations; they differ in which aspect of the octonionic
Hopf bundle they access.

## Validation

- **One-generation spectrum**: Furey (2018) derives the correct U(1) × SU(3)
  quantum numbers for one generation of quarks and leptons from the
  minimal left ideal of Cℓ(6). No free parameters.
- **Nilpotency → 3 colours**: ω³ = 0 follows from the octonion multiplication
  table, not from SU(3) representation theory. That it gives exactly 3 is
  a derivation, not an assumption.
- **G₂ ⊃ SU(3) ⊃ U(1)**: the exceptional Lie group G₂ = Aut(𝕆) contains
  SU(3) as the subgroup preserving a chosen octonion unit — a classical result
  (Cartan 1914). Furey's SU(3) colour = this subgroup acting on the minimal
  ideal.
- **Open**: three-generation structure (why ω acts three times on *distinct*
  ideals) and mass spectrum require additional structure beyond the basic
  octonionic construction. The BIND extension (two-ideal entanglement) is
  the natural ISA framework for this open problem.

---

*Part of the [ISA Zoo](/isa-zoo/). See also: [G01 — Yang-Mills Instantons](/isa-zoo/g01-yang-mills-instanton), [§9 of the Hopf ISA paper — three Hopf fibrations and the ISA tier ladder].*
