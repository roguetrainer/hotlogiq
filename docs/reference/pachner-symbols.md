---
layout: default
title: "Pachner Moves and Quantum Symbols"
parent: Theory
nav_order: 10
description: "How the 6j, 15j, and higher recoupling symbols arise as transition amplitudes of Pachner moves, and why the Biedenharn-Elliott identity proves topological invariance."
---

# Pachner Moves and Quantum Symbols

The recoupling symbols of angular momentum theory (6j, 15j, ...) are not merely
algebraic bookkeeping devices. Each one is the **transition amplitude** of a
specific Pachner move — the quantum weight of the higher-dimensional simplex that
move sweeps out. This page makes that mapping explicit.

---

## Background: What a Pachner Move Does

A Pachner move is a local replacement that changes the triangulation of an
$n$-dimensional manifold without changing its topology. Every such move works by:

1. Removing a set of $k$ simplices sharing a common face
2. Replacing them with the complementary $\ell$ simplices that share the same boundary

The key insight is that the **before** and **after** configurations together form
the complete boundary of an $(n+1)$-dimensional simplex. The quantum amplitude
for that move is the state-sum weight of that $(n+1)$-simplex.

---

## The 6j Symbol: Sweeping out a Tetrahedron

**Context:** 2D triangulations; 3D bulk gravity (Ponzano-Regge model).

**The move (2-2 in 2D):** Two triangles sharing an edge form a quadrilateral.
The 2-2 Pachner move deletes the shared edge and inserts the opposite diagonal —
one triangulation of the quadrilateral replaced by the other.

**In the dual spin network:** The two triangles are two trivalent vertices in an
`>--<` shape. The 2-2 move changes the fusion channel from $s$-channel to
$t$-channel. This is exactly the $F$-matrix recoupling operation of a fusion
category — the associator $\alpha_{A,B,C}$.

**The swept simplex:** Place the before-quadrilateral and after-quadrilateral in
3D space and connect their corresponding vertices. The 3D volume enclosed between
them is a tetrahedron. That tetrahedron has **6 edges**, which carry the 6 angular
momentum labels $\{j_1, j_2, j_3, j_4, j_5, j_6\}$ of the $6j$ symbol.

$$\begin{Bmatrix} j_1 & j_2 & j_3 \\ j_4 & j_5 & j_6 \end{Bmatrix}
= \text{amplitude of the 2-2 Pachner move} = \text{weight of the tetrahedron}$$

**ISA placement:** The $6j$ symbol is an **H³ primitive** — a 3-cocycle evaluated
on a 3-simplex. The FUSE opcode (H²) is the *associator* that the 2-2 move enacts;
the $6j$ symbol is the *scalar amplitude* of that move, which lives one cohomological
degree higher. See [opcodes.md](opcodes.md) for the FUSE / RECOUPLE distinction.

---

## The 15j Symbol: Sweeping out a 4-Simplex

**Context:** 3D triangulations; 4D bulk gravity (Crane-Yetter / Ooguri models).

**The move (2-3 in 3D):** Two tetrahedra glued at a shared triangular face.
The 2-3 Pachner move replaces them with three tetrahedra arranged around a single
shared internal edge. (Two become three; the inverse 3-2 move is also valid.)

**In the dual spin network:** The network connecting the 5 tetrahedra (2 before,
3 after) requires **15 distinct angular momentum links** to fully contract the
tensor network of 4-valent intertwiners.

**The swept simplex:** The 4D hypervolume enclosed between the 2 initial and 3
final tetrahedra is a 4-simplex (pentachoron). A 4-simplex has **10 triangular
2-faces** and **10 edges** — its full amplitude is the $15j$ symbol.

$$\{15j\} = \text{amplitude of the 2-3 Pachner move} = \text{weight of the 4-simplex}$$

**ISA placement:** H⁴ — outside the current Origami / Frog ISA. Appears in
Crane-Yetter and Barrett-Crane spin-foam models of 4D quantum gravity.

---

## The Master Identity: Biedenharn-Elliott

The recursion between dimensions is governed by the **Biedenharn-Elliott identity**,
which states that the amplitude of a 3D Pachner move (which sweeps out a 4-simplex)
factors into a sum over products of 6j amplitudes:

$$\sum_{x} d_x
  \begin{Bmatrix} \cdot & \cdot & \cdot \\ \cdot & \cdot & x \end{Bmatrix}
  \begin{Bmatrix} \cdot & \cdot & \cdot \\ \cdot & x & \cdot \end{Bmatrix}
  \begin{Bmatrix} \cdot & \cdot & \cdot \\ x & \cdot & \cdot \end{Bmatrix}
=
  \begin{Bmatrix} \cdot & \cdot & \cdot \\ \cdot & \cdot & \cdot \end{Bmatrix}
  \begin{Bmatrix} \cdot & \cdot & \cdot \\ \cdot & \cdot & \cdot \end{Bmatrix}$$

(schematically: product of two $6j$ symbols = sum over product of three $6j$ symbols,
matching the 2-3 Pachner move structure).

**What this means for the ISA:**

- Proving that a spin-foam model satisfies Biedenharn-Elliott is equivalent to
  proving it is invariant under 3D Pachner moves — i.e., that it is a
  well-defined topological invariant.
- In ISA terms: the $15j$ symbol (H⁴) decomposes into a circuit of $6j$ symbols
  (H³/RECOUPLE gates). This is why the $15j$ is not a new opcode but a depth-2
  RECOUPLE circuit.
- By the same logic, the $9j$ symbol (which describes LS↔jj recoupling of four
  angular momenta) decomposes by Mac Lane coherence into a sum over products of
  three $6j$ symbols — it is a RECOUPLE circuit of depth 3, not an irreducible
  primitive.

---

## The Complete Ladder

| Dimension | Pachner move | Swept simplex | Quantum symbol | ISA tier | Opcode |
| --------- | ------------ | ------------- | -------------- | -------- | ------ |
| 1D (edges) | 1-1 (identity) | edge (1-simplex) | — | H¹ | TWIST |
| 2D (triangles) | 2-2 | tetrahedron (3-simplex) | $6j$ | H³ | RECOUPLE *(proposed)* |
| 3D (tetrahedra) | 2-3 | 4-simplex (pentachoron) | $15j$ | H⁴ | *(Crane-Yetter; not proposed)* |

Note: the Clebsch-Gordan / $3j$ symbol is the amplitude of a **single triangle**
(2-simplex), not a Pachner move — it is an H² object (FUSE tier), the vertex
amplitude before any move is executed.

---

## Why 9j Is Not a Simplex

The $9j$ symbol has 9 angular momentum labels and describes the recoupling of four
angular momenta (LS↔jj coupling in two-electron atoms). Despite involving four
particles, it does **not** correspond to any simplex in the Pachner hierarchy:

- A tetrahedron has 6 edges → $6j$
- A 4-simplex has 10 edges → $15j$ (not $9j$; the mismatch is exact)
- No simplex has 9 edges

The $9j$ symbol is instead a **graph amplitude** — it corresponds to a specific
Yutsis diagram (a graph with 9 edges connecting 6 nodes) that decomposes
algebraically into a sum over products of three $6j$ symbols. It is a RECOUPLE
circuit, not a RECOUPLE primitive.

---

## Key References

- **Ponzano and Regge (1968)** — first identified the $6j$ symbol as the
  tetrahedral amplitude in 3D quantum gravity; the Ponzano-Regge model.
- **Turaev and Viro (1992)** — rigorous state-sum invariant of 3-manifolds using
  $6j$ symbols; the $6j$ as a 3-cocycle on a 3-simplex.
- **Crane and Yetter (1993)** — 4D state-sum model using $15j$ symbols; the
  $15j$ as the 4-simplex amplitude.
- **Biedenharn and Louck (1981)** — *Angular Momentum in Quantum Physics*;
  comprehensive treatment of $6j$, $9j$, and their identities.
- **Kauffman and Lins (1994)** — *Temperley-Lieb Recoupling Theory and Invariants
  of 3-Manifolds*; graphical calculus for $6j$ symbols.
- **Barrett and Crane (1998)** — relativistic spin-foam model; $15j$ amplitude
  as a Lorentzian 4-simplex weight.
- **Paper 719** — orbital simplex: total torus-knot genus of atomic shell $n$
  equals $\binom{n}{3}/2$; the $6j$ as the H³ primitive of the extended Origami ISA.

---

## JLV diagrams, spin networks, and where Pachner moves actually apply

Three vocabularies describe the same objects, and conflating them causes real
confusion. Worth stating explicitly.

### JLV diagrams *are* spin networks

The Yutsis–Levinson–Vanagas graphical method (1960) and Penrose's spin networks
(1971) are **the same mathematical object**: a graph with SU(2) irrep labels on
edges and $3jm$ intertwiners at trivalent nodes. Penrose arrived independently,
from a different motive:

| | year | what it was for |
|---|---|---|
| **JLV** | 1960 | a calculational tool for atomic and nuclear spectroscopy |
| **Penrose spin networks** | 1971 | a foundational proposal about combinatorial spacetime |

Same diagrams, opposite intentions. The atomic-physics literature and the
quantum-gravity literature developed the identical formalism largely unaware of
each other for years.

### Spin networks do *not* need Pachner moves — spin foams do

This is the distinction that matters, and it is easy to get wrong:

| object | is | role | its moves |
|---|---|---|---|
| **spin network** | a labelled graph | a **state** (kinematics) | JLV rewrites: node sign change, arrow reversal, separation, cutting |
| **spin foam** | a 2-complex whose boundary is a spin network | a **history** (dynamics) | **Pachner moves** on the triangulation |

So: recoupling a spin network requires only the JLV moves. Pachner moves enter
when one asks about *evolution* — when the triangulation itself may change.

### And that is exactly why the two coincide

The bridge is the content of this page read backwards:

$$	ext{Pachner 2--3} \;=\; 	ext{Biedenharn–Elliott} \;=\; 	ext{the pentagon relation on } 6j$$

with Pachner 1–4 corresponding to the orthogonality relation. So a Pachner move
on a triangulation, a $6j$ identity in angular-momentum theory, and the
associativity coherence of a fusion category are **one fact in three
vocabularies** — topological, spectroscopic, and categorical.

That is why JLV's rewrite rules and the Pachner moves are not competing
formalisms. JLV manipulates a network at fixed combinatorial structure; Pachner
changes the structure; and the coherence conditions that make either
well-defined are the same $6j$ identities.

### Consequence for the ISA

The Origami ISA's Frobenius structure is *not* a synonym for JLV, despite the
overlap. JLV is generated by a single self-dual trivalent node with no unit or
counit; a Frobenius PROP has four generators and distinguishes multiplication
from comultiplication. The honest relation is that **SU(2) recoupling is an
instance of the Frobenius structure**, with the $3jm$ node as its fusion
multiplication — so JLV inherits the general theory's theorems rather than
duplicating them.

**References for this section**

- **Yutsis, Levinson and Vanagas (1962)** — *Mathematical Apparatus of the
  Theory of Angular Momentum*; the graphical method.
- **Penrose (1971)** — "Angular Momentum: an Approach to Combinatorial
  Spacetime"; spin networks.
- **El Baz and Castel (1972)** — *Graphical Methods of Spin Algebras*.

