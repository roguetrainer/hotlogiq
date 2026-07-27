---
layout: default
title: "Cannon Balls and Knotted Orbitals: A Hidden Count in Every Atomic Shell"
parent: Explainers
nav_exclude: true
tags: [knot-theory, torus-knots, orbital-topology, 6j-symbols, simplex, tetrahedral-numbers, fano-plane, angular-momentum, clebsch-gordan, oeis, combinatorics, origami-isa]
portfolio: A
---

## The Stacking-Cannon-Balls Number Turns Up Inside Every Atom

*Plain-language explainer for [doi:10.5281/zenodo.21630155](https://doi.org/10.5281/zenodo.21630155) (#719)*

---

## An unexpected encounter

There is a sequence of numbers that medieval mathematicians knew well: the **tetrahedral numbers** — 1, 4, 10, 20, 35, 56, 84, ... Each one counts how many cannon balls you can stack in a triangular pyramid. Three layers (1 + 3 + 6) give you ten. Four layers give twenty. These are among the most natural counting numbers in existence.

They also turn up inside every atom.

This paper proves that if you take every orbital in atomic shell n, compute a topological complexity measure for each one, add them all up, and double the result, you get the n-th tetrahedral number. Exact. No approximations, no fitting parameters. It is a theorem.

---

## What a torus knot is, and why orbitals have them

The companion paper (#657) established a precise assignment: every hydrogen orbital (n, ℓ) corresponds to a torus knot, written T(ℓ+1, n−ℓ). A torus knot is a curve that winds around a doughnut-shaped surface — p times the long way around, q times through the hole — without ever crossing itself.

The simplest torus knot T(2,3) is the trefoil, the three-leaf clover shape. Every torus knot has a **genus**: roughly, how many handles you would need to add to a sphere to let the knot bound a smooth surface. The genus of T(p,q) is exactly (p−1)(q−1)/2.

For orbital (n, ℓ), with p = ℓ+1 and q = n−ℓ, this works out to genus = ℓ(n−ℓ−1)/2.

So each orbital has a topological complexity. The s-orbitals (ℓ=0) always have genus zero — they are unknots, topologically trivial. The d-orbitals and f-orbitals gain positive genus. The deeper you go into the angular structure of a shell, the more complex the associated knot.

---

## The identity

Shell n contains n orbitals, labelled ℓ = 0, 1, 2, ..., n−1. Add up twice the genus of each one:

2 × (genus of orbital 0 + genus of orbital 1 + ... + genus of orbital n−1) = n(n−1)(n−2)/6

The right-hand side is the tetrahedral number C(n,3) — the number of ways to choose 3 objects from n, which is also the number of cannon balls in a pyramid of height n−2.

The proof is a clean bijection. Each unit of torus-knot genus in orbital (n, ℓ) corresponds to one crossing pair in the knot diagram: specifically, a pair (i, j) where i indexes one of ℓ angular nodes and j indexes one of n−ℓ−1 radial nodes. Label this crossing pair by the triple (i, j, ℓ). Count all such triples across all orbitals in the shell. Then notice that each triple maps uniquely to a 3-element subset of {1, 2, ..., n} — and the number of 3-element subsets of an n-element set is exactly C(n,3). The bijection is explicit and one-to-one.

The result: the total topological complexity of a shell is not arbitrary. It is a combinatorial quantity that was waiting in plain sight.

---

## Triangular pyramids and higher-dimensional triangles

Here is another way to see the same fact, which opens up the deeper physics.

Take the n orbitals of shell n and treat them as the n **vertices** of a simplex — the higher-dimensional analogue of a triangle. Two vertices connected: an edge (a pair of orbitals). Three vertices connected: a triangular face. Four: a tetrahedron. And so on.

The number of triangular faces in this simplex is C(n,3). Which, as we just established, equals twice the total torus-knot genus.

This is not a coincidence. It is the content of the theorem. The orbital simplex — call it Δ^{n−1}, since it has n vertices and lives in (n−1) dimensions — encodes the torus-knot topology of the shell in its own face-count.

Each level of the simplex has a physical meaning:

- **Vertices** (n of them): individual orbitals — single-electron occupancy
- **Edges** (C(n,2) of them): orbital pairs — exchange integrals, the energy cost of two electrons being near each other
- **Triangular faces** (C(n,3) of them): angular momentum coupling triangles — the Clebsch-Gordan condition that three angular momenta can be consistently combined; this is also where the torus-knot genus lives
- **Tetrahedra** (C(n,4) of them): this is where it gets remarkable

---

## The 6j symbol is a tetrahedron

The 6j symbol is one of the most important objects in quantum mechanics. It encodes the amplitude for four angular momenta to recouple — the probability amplitude that system A with momentum j₁ combines with system B with momentum j₂, and then re-recouples into a different pairing with systems C and D. The non-zero 6j symbols are exactly those where all four triangular faces of a tetrahedron satisfy the angular momentum triangle inequality.

Put plainly: a 6j symbol is a tetrahedron. A four-body quantum interaction is a tetrahedral face of the orbital simplex.

The count of such tetrahedra in shell n is C(n,4). The full simplex packages the entire hierarchy:

| Simplex level | Count | Physical meaning |
| --- | --- | --- |
| 0-simplex (vertex) | n | Single orbitals |
| 1-simplex (edge) | C(n,2) | Electron pairs, exchange integrals |
| 2-simplex (triangle) | C(n,3) | Angular momentum triangles = torus-knot crossings |
| 3-simplex (tetrahedron) | C(n,4) | 6j symbols, four-body recoupling |
| k-simplex | C(n,k+1) | (k+1)-body interactions |

The torus-knot genus identity is the statement that the **2-skeleton** of the orbital simplex — all the triangular faces — has a total weight equal to twice the total knot complexity of the shell. The identity picks out level 2 as special: this is the level where topology (knots) and combinatorics (simplex faces) meet.

---

## Something exceptional at shell seven

At shell n=7, there are C(7,3) = 35 triangular faces in the orbital simplex — and therefore total torus-knot genus equal to 35/2.

Now 35 is also a significant number in another context. The **Fano plane** — the smallest finite projective geometry, with 7 points and 7 lines — has exactly 7 lines, each a 3-element subset of those 7 points. These 7 lines are the multiplication table of the octonions, the 8-dimensional number system that sits at the root of exceptional Lie algebra G₂.

The Fano plane selects 7 of the 35 triangles in the n=7 orbital simplex — the 7 that satisfy the octonion/G₂ multiplication rule. Within the sea of 35 angular-momentum coupling triangles in the 7th shell, the Fano plane marks out the 7 **exceptional** couplings. The seventh shell of the atom contains, buried inside its angular momentum algebra, the fingerprint of the exceptional symmetry G₂.

---

## Two integer sequences get new lives

The tetrahedral numbers — 0, 0, 0, 1, 4, 10, 20, 35, ... — are catalogued as sequence A000292 in the Online Encyclopedia of Integer Sequences, where they have appeared for decades as a purely combinatorial object.

They now have a second identity: the n-th tetrahedral number is twice the total torus-knot genus of the n-th atomic shell. A famous integer sequence turns out to be encoding atomic topology.

The quarter-square numbers — 0, 0, 1, 2, 4, 6, 9, 12, ... (sequence A002620) — similarly turn out to count twice the **maximum** torus-knot genus achievable within a single shell. The most topologically complex orbital in shell n, the one sitting closest to the middle of the angular-momentum ladder, contributes a genus matching the quarter-square formula.

A new triangle — with entry ℓ(n−1−ℓ) in row n, column ℓ — appears to be genuinely new to the literature. Its row sums reproduce the tetrahedral numbers, its rows are palindromic, and it encodes the genus of every orbital in every shell in a single triangular array.

---

## What the ISA ladder sees

In the Origami ISA framework, quantum operations are graded by cohomological degree:

- **H⁰**: single-orbital operations — vertex-level, stabiliser-class, chemically inert
- **H¹**: pair correlations — edge-level, exchange integrals, single-bond character
- **H²**: three-body angular momentum — triangle-level; this is where the torus-knot genus lives and where the Clebsch-Gordan algebra sits
- **H³** (proposed): tetrahedral recoupling — 6j symbols, the tier that the Ponzano-Regge and Turaev-Viro models of 3D quantum gravity identify with tetrahedral amplitudes

The reason the ISA has historically focused on H⁰ through H² is not arbitrary. Physical chemistry mostly lives below the tetrahedral threshold. The 6j level — H³ — is where multi-reference electronic structure becomes genuinely intractable, and where the orbital simplex has more faces than the standard toolbox can accommodate.

The orbital simplex makes this precise: the ladder H⁰ → H¹ → H² → H³ → ... is the skeleton of Δ^{n−1} one dimension at a time.

---

## The open question

The Euler characteristic of the full orbital simplex is trivially 1 — a simplex is contractible, so its topology is uninteresting. But the **weighted** Euler characteristic, where each k-simplex carries a weight equal to the k-body correlation energy contribution, is not trivial. Whether this weighted characteristic recovers the CASSCF correlation energy is an open question, and the subject of the next paper.

The tetrahedral number identity is the entry point. The simplex is the arena. The physics lives in the weights.

---

*See also:*

- [Knotted Orbitals: Kelvin-Tait Vindicated](https://doi.org/10.5281/zenodo.21480634) (#657) — the torus knot assignment T(ℓ+1, n−ℓ) and its derivation from the Fock sphere
- [Shell Symmetry-Breaking and the Periodic Table](https://doi.org/10.5281/zenodo.21480129) (#650) — the periodic table as a shadow of SO(4,2); Madelung rule from symmetry-breaking
- [ISA Khovanov Complex](https://doi.org/10.5281/zenodo.21479623) (#571) — homological grading of the ISA opcode hierarchy
- [G₂ Spider as BIND Calculus](https://doi.org/10.5281/zenodo.21479617) (#572) — the G₂/octonion structure and its ISA role; the Fano plane in operation

*For the full technical treatment, see [doi:10.5281/zenodo.21630155](https://doi.org/10.5281/zenodo.21630155)*
