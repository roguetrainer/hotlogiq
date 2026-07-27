---
layout: default
title: "Why Winding Numbers Are Always Integers: A Topological Proof"
parent: Explainers
nav_exclude: true
tags: [twistor-theory, chern-classes, winding-numbers, hydrogen-atom, fock-map, penrose-transform, hybridisation, 18-electron-rule, line-bundles, pat-hierarchy, chemical-bonding, origami-isa, cp3, s3, borel-weil]
portfolio: A
---

## The Question Nobody Asked

*Plain-language explainer for [doi:10.5281/zenodo.21630153](https://doi.org/10.5281/zenodo.21630153) (#718)*

---

## The Question Nobody Asked

When chemists use the rule w = n+ℓ+1 to assign every atomic orbital an integer — the winding number — they generally don't worry about whether that integer *has* to be an integer. Of course it is: n and ℓ are already integers, so n+ℓ+1 must be too. Case closed.

But that is not really an answer. It just restates the question one level up: why must n and ℓ be integers? Quantum mechanics says so — eigenvalue equations force discrete spectra. And why does the universe insist on discrete spectra? This is where most physicists shrug and say it's the nature of quantum mechanics.

This paper gives a deeper answer. The winding number w is an integer because it is a **Chern class** — a topological invariant of a geometric object called a holomorphic line bundle. And Chern classes are *always* integers. That is not a quantum-mechanical fact. It is a theorem of algebraic topology, true for any compact complex manifold regardless of physics.

The integers didn't seep into quantum mechanics by accident. Topology put them there.

---

## A Two-Step Journey: Fock, Then Penrose

The route to this result runs through two great pieces of twentieth-century mathematics, separated by thirty-two years.

**Step 1: Fock's map (1935).** Vladimir Fock discovered something remarkable about the hydrogen atom. If you take an electron in one of hydrogen's bound states and switch to momentum space — describing the electron by its momentum rather than its position — and then perform a particular geometric transformation (a stereographic projection), the state lands on the surface of a four-dimensional sphere S³.

That is already surprising: three dimensions of momentum space, and the wavefunctions live on a *sphere* in four dimensions. But it gets better. On S³, the hydrogen wavefunctions are the natural analogues of the familiar sine and cosine waves on a circle, or the spherical harmonics on a globe. They are the harmonics of S³. And the label that counts their oscillations is exactly n+ℓ — the piece of the winding number one step short of w.

The S³ has a large hidden symmetry: SO(4), the rotational symmetry of four-dimensional space. This is the mathematical reason all the orbitals within a shell n have the same energy: they are different faces of the same SO(4) representation. Fock's sphere makes explicit what was implicit in the 1/n² energy formula.

**Step 2: Penrose's lift (1967).** Roger Penrose was thinking about something apparently unrelated: the geometry of spacetime at the quantum level. He introduced *twistor space* — CP³, the complex projective three-space. In Penrose's framework, every point in spacetime corresponds to a line (a copy of CP¹, the Riemann sphere) sitting inside CP³. The incidence relation ω^A = ix^{AA'}π_{A'} is the precise dictionary between a spacetime point x and its twistor line.

The Penrose transform — worked out in full by Eastwood, Penrose, and Wells in 1981 — says that holomorphic sections of line bundles on CP³ correspond to solutions of field equations in spacetime. The relevant line bundles are the tautological ones, O(d), whose sections are degree-d polynomials. A section of O(d) on CP³ restricts, on the real slice S³, to a harmonic of the corresponding degree.

Now connect the two steps. Fock puts a hydrogen state (n,ℓ) on S³ as a harmonic with degree n+ℓ−1 on the CP¹ fiber. The Penrose lift adds 2 — because the CP¹ fibre inside CP³ carries a canonical twist of degree +2 — bringing the degree on CP³ to (n+ℓ−1)+2 = n+ℓ+1 = **w**.

The winding number is the degree of the line bundle O(w−2) on CP³. The first Chern class of O(d) on any CP^n is d. Therefore:

> **w = c₁(O(w−2))**

---

## What a Chern Class Is, In Plain Terms

Imagine wrapping a rubber band around a cylinder. You can wrap it once, twice, three times, or zero times. You cannot wrap it 1.7 times and close up smoothly. The number of times you wrap is always an integer — the winding number of the band around the cylinder.

A Chern class is the higher-dimensional version of this. It counts how many times a complex line bundle "wraps" around a compact complex manifold. Because wrapping must close up consistently, the count is always an integer. This is not approximate. It is not a consequence of any particular differential equation. It is a topological fact as robust as the fact that you cannot divide a circle into 1.7 equal arcs and close up.

The key insight of this paper is that the winding number w of an atomic orbital is precisely this kind of topological wrapping count — not a consequence of quantum mechanics, but of the geometry of CP³.

---

## The Same Shelf, Not Just the Same Number

Once you see w as a Chern class, a second mystery dissolves: why do orbitals with the same w mix so freely?

The 2p orbital (n=2, ℓ=1) and the 3s orbital (n=3, ℓ=0) both have w=4. They have very different energies — E₂ = −1/8 and E₃ = −1/18 in atomic units, different by a factor of 2.25. By any energy argument, they should not readily mix. And yet in carbon and silicon chemistry, sp hybridisation — the mixing of 2p and 3s into four equivalent tetrahedral bonds — is ubiquitous and freely occurring.

The paper gives the geometric reason. Both 2p and 3s are sections of the **same** line bundle O(2) on CP³. They live on the same geometric shelf. No topological barrier separates them. A molecular field — the potential from nearby atoms — reduces the angular symmetry that distinguishes them, and they mix because there is no topological cost to doing so.

The same argument covers the whole w=6 shelf: the 3d, 4p, and 5s orbitals together. These three subshells hold 10+6+2 = 18 electrons. They are all sections of O(4) on CP³. The 18-electron rule — the chemist's observation that transition metals tend to form stable complexes with 18 electrons in their valence shell — is not numerology. It is the electron capacity of the w=6 line bundle, derived from the Borel-Weil theorem of representation theory.

---

## Bonds, Crossings, and Catalysis

The paper goes further than just proving w is an integer. It reinterprets the whole chemical bonding picture in twistor language.

**Bonds as overlapping sections.** When two atoms A and B approach each other, each contributes sections of O(w−2) on CP³. A bond forms when the overlap integral of these sections — computed on S³ — has non-zero rank. Bond order is the rank of the overlap matrix. H₂ gets bond order 1, N₂ gets 3, He₂ gets 0 (fully occupied, zero vacancy). All confirmed numerically.

**The ε-crossing as tangency.** Earlier papers in this series identified a critical moment in enzyme catalysis: the ε-crossing, where the HOMO (highest occupied orbital) sweeps through a critical energy. At this moment, the enzyme shifts from being an electron donor to an electron acceptor — the chemistry reverses sign.

In twistor terms, this is the moment when two CP¹ lines in CP³ change from being transversely intersecting to being **tangent**. The HOMO section, viewed as a polynomial on CP¹, develops a double zero. Two roots that were distinct (transverse intersection) merge into one (tangency). This is a PAT-2 configuration — a Projective-to-Affine Transition of contact order 2.

The three PAT classes fit cleanly:
- **PAT-1:** lines cross transversely — a simple σ or π bond, an electron relay
- **PAT-2:** lines are tangent — the ε-crossing, a radical intermediate
- **PAT-3:** lines osculate (third-order contact) — a conical intersection, the most violent structural change

Every step of a catalytic cycle is a change of contact order between lines in CP³. The Origami ISA opcodes — FUSE, CLEAVE, RESOLVE, JOIN — correspond to tensor products, short exact sequences, direct sums, and projective joins of line bundles. The chemistry is, in the deepest available language, a calculus on lines in twistor space.

---

## The Hughston Connection

This paper builds explicitly on Hughston's 1979 monograph *Twistors and Particles* (Springer Lecture Notes in Physics 97). Hughston used the same Penrose incidence relation to study free particles and scattering states in particle physics, going from twistors toward the physics of elementary particles.

The direction here is different. The Fock map is used as a bridge: it takes the *bound* states of hydrogen — not free particles — through momentum space and onto S³, where the Penrose machinery can grip them. Then the route goes not toward particle physics but toward chemistry and enzyme mechanisms.

Twistors → particle physics was Hughston's path. Twistors → bound states → chemistry is this paper's path. The two routes use the same incidence relation and the same line bundles; they diverge at the application.

The identification w = c₁(O(w−2)) does not appear anywhere in the prior twistor literature. The mathematical tools were all present — Fock's map, the Penrose transform, the classification of line bundles — but no one had assembled them in this way or pointed them at the periodic table.

---

## What Remains Open

The paper is honest about limits. The bi-twistor structure for multi-centre bonds — where three or more atoms bond simultaneously — is not yet fully worked out. The f-block elements (lanthanides, actinides) with ℓ=3 need the higher Borel-Weil representations of SU(2)_L × SU(2)_R and are deferred to future work. A relativistic extension — incorporating spin-orbit coupling as a deformation of the Chern class — is identified as an important next step.

The conjectured connection to the amplituhedron of Arkani-Hamed and Trnka — the positive Grassmannian G(2,4)₊₀ — is flagged but not proved. The positivity condition that makes the amplituhedron relevant to scattering amplitudes may encode, in the chemical context, the condition that bonding overlaps are energetically favourable. This connection between the boundary of the amplituhedron and the boundary of chemical reactivity is left for future work.

---

## The Short Version

The winding number w = n+ℓ+1 is not an integer because quantum mechanics happens to give integer quantum numbers. It is an integer because it is a topological invariant — the first Chern class of a holomorphic line bundle on twistor space CP³ — and topological invariants of compact complex manifolds are always integers. That fact is older and deeper than quantum mechanics. The Fock-Penrose two-way map makes the connection explicit, and once you see it, a great deal of chemistry follows: hybridisation, the 18-electron rule, the PAT hierarchy of catalytic mechanisms. The integers were always there. Now we know why.

---

*See also:*

- [The Periodic Table as a Shadow of S³](https://doi.org/10.5281/zenodo.21608229) (#709) — the SO(4) symmetry underlying this paper, visualised via the Fock sphere
- [Knotted Orbitals: Kelvin-Tait Vindicated](https://doi.org/10.5281/zenodo.21480634) (#657) — torus knots in S³ and the Madelung rule; a companion geometric picture
- [The Frontier Winding Gap](https://doi.org/10.5281/zenodo.21612627) (#710) — ΔwF = 0 as the catalytic criterion; empirical foundation for the ε-crossing
- [No Shell Game](https://doi.org/10.5281/zenodo.21612846) (#712) — the active-space selection rule AS(w₀) = {w₀−1, w₀, w₀+1} derived from the same framework
- [Conical Intersections as Hitchin Branch Points](https://doi.org/10.5281/zenodo.21558772) (#697) — the predecessor paper that identified ε-crossings; this paper supplies the twistor geometry behind those branch points

*For the full technical treatment, see [doi:10.5281/zenodo.21630153](https://doi.org/10.5281/zenodo.21630153)*
