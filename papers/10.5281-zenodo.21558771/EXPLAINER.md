---
layout: default
title: "Why Leaves Are Green: Conical Intersections as Branch Points"
parent: Explainers
nav_exclude: true
tags: [conical-intersections, hitchin-system, berry-phase, jahn-teller, spectral-curve, photochemistry, porphyrin, femoco, nitrogenase, enzyme-catalysis, pat-q, period-matrix, algebraic-geometry, origami-isa]
portfolio: A
---

## The Geometry Behind Photosynthesis, Vision, and Enzyme Catalysis

*Plain-language explainer for [doi:10.5281/zenodo.21558771](https://doi.org/10.5281/zenodo.21558771) (#697)*

---

## Why leaves are green

Here is a fact that most people never think to question: plants absorb red and blue light, and reflect green. Why not the other way around? Why not absorb green and reflect red?

The answer runs through one of the strangest corners of quantum mechanics: a place where two energy surfaces of a molecule touch at a single point, like two ice cream cones pressed tip-to-tip. At that contact point — called a **conical intersection** — a molecule can shed energy without emitting a single photon. It just falls through.

In photosynthesis, conical intersections act as ultrafast energy funnels. Absorbed photons excite chlorophyll to a high-energy electronic state. The molecule then hurtles through a conical intersection in a few hundred femtoseconds — far too fast for heat to escape, far too fast for fluorescence — and lands in exactly the right state to drive chemistry. The green wavelength is the one that falls outside the absorption windows shaped by this geometry. Leaves are green because of conical intersections.

The same physics governs vision: the retinal molecule in your eye crosses a conical intersection when a photon hits it, triggering isomerisation in ~200 femtoseconds. It also governs DNA's resilience to ultraviolet light — nucleobases cross conical intersections to dump UV energy harmlessly as heat rather than triggering mutations.

Conical intersections are not exotic. They are everywhere in biology. But until now they lacked a unifying mathematical framework that could connect them to the geometry of enzyme active sites. This paper provides one.

---

## Two surfaces, one point of contact

A molecule has many degrees of freedom — the positions of all its atoms. At any given atomic arrangement, the electrons have energy levels: a ground state, first excited state, second excited state, and so on. As the atoms move, each energy level traces out a surface over the space of atomic positions.

Usually these surfaces avoid each other. There is a theorem — the non-crossing rule — that says two surfaces of the same symmetry cannot cross in one dimension. But in two or more dimensions, they can touch at isolated points. Those touching points are conical intersections.

At a conical intersection, something topologically odd happens to the electronic wavefunction. If you carry the nuclear configuration in a loop around the intersection, the electronic wavefunction does not come back to itself. It picks up a sign change — a factor of −1. This is the **Berry phase** of π.

That sign change is not a curiosity. It governs interference patterns in molecular scattering, controls tunnelling splittings in spectroscopy, and shapes the selection rules for photochemical reactions. The Berry phase is physically measurable. It has been confirmed in dozens of systems.

---

## The Hitchin connection: eigenvalues as a branched cover

This paper's central claim is that the two objects — conical intersections and a well-known construction in mathematical physics called the Hitchin spectral curve — are the same thing, seen from different angles.

Here is the Hitchin picture. Take the molecular Hamiltonian — the matrix of energy and coupling terms for the electrons — and evaluate it as the atomic geometry varies along a complex coordinate w. The Hamiltonian becomes a matrix-valued function of w, and its eigenvalues (the energy levels) trace out sheets over the complex w-plane.

At most values of w, those sheets are distinct and well-separated. But at special points w₀, two sheets coincide — the eigenvalues become equal. Those are the **branch points** of what mathematicians call a branched cover: a multi-sheeted surface sitting over the complex plane, where the sheets swap as you go around a branch point.

The central result of the paper is a theorem: **the conical-intersection locus of the Hamiltonian equals the branch locus of the spectral cover.** And the Berry phase π is the ℤ₂ monodromy of that cover around the branch point — the mathematical statement that going around the branch point swaps the two sheets, which translates directly into the sign change of the wavefunction.

This is confirmed numerically to machine precision.

---

## The surprise: branch points are not real

Here is where the paper produces something genuinely unexpected.

You might expect conical intersections — which are real physical phenomena, occurring at real nuclear configurations — to correspond to real branch points. Points on the real axis of the complex w-plane.

They do not.

For any non-zero physical coupling ε > 0, the branch points are **complex**. In the simplest two-state case, they are purely imaginary: they sit at ±iε on the imaginary axis. Real branch points only occur in the degenerate limit ε = 0, when the coupling is completely switched off.

What does this mean physically? It means conical intersections, properly understood, live in the complexification of nuclear coordinate space. The real geometry we can measure in the lab is the shadow of a richer complex geometry. The Berry phase — the sign change as you encircle a conical intersection on the real axis — is inherited from the monodromy around the complex branch points, and it remains topologically stable as those branch points move off into the complex plane.

This is not just a mathematical redescription. It predicts where the branch points must go when you tune the coupling, and it places them at falsifiable positions in the complex w-plane. For the FeMoco active site of nitrogenase — the iron-molybdenum cofactor that fixes atmospheric nitrogen — the paper predicts that the five PAT-3 branch-point pairs sit at imaginary part ±3/16 in the w-plane. That is a number a future calculation or experiment could test.

---

## What PAT-q means

The paper's second half applies this framework to a specific model of enzyme active sites, called PAT-q.

PAT stands for Projective-to-Affine Transition. The idea is that the geometry of an enzymatic active site — the arrangement of metal ions, ligands, and electron relay pathways — can be encoded in a finite projective plane PG(2,q), where q is a prime power.

The three biologically relevant cases are:

**PAT-1** (q=1): the simplest relay. One electron transfer, one branch-point pair, spectral curve of genus 0 (the simplest possible topology — a sphere). Think of the most basic redox relay in biology.

**PAT-2** (q=2): porphyrins — the ring system at the heart of haem, chlorophyll, and cytochrome c. Spectral curve of genus 1 (a torus). The one-handle of the torus encodes the single coherent quantum mode that makes porphyrins such efficient electron carriers. This is why haemoglobin, chlorophyll, and the cytochromes all use the same molecular scaffold despite their wildly different jobs.

**PAT-3** (q=3): the heavy hitters — the iron-molybdenum cofactor FeMoco (in nitrogenase, the only enzyme that breaks the N≡N triple bond), cytochrome P450 (the liver's detoxification engine), and the oxygen-evolving complex (which splits water in photosynthesis). Spectral curve of genus 8. Eight independent handles, encoding eight independent quantum coherence modes. Twenty-eight branch points, computed exactly from a degree-48 discriminant polynomial.

The genus of the spectral curve is not an abstract invariant. It equals the minimum number of branch-point pairs needed to fully describe the quantum coherence of the active site. A genus-8 surface has 8 independent loop directions — 8 ways of measuring a phase. The 8×8 period matrix B packages all 28 pairwise coherences between those modes. The dominant off-diagonal entry |B₂,₈| = 9.91 encodes a strong cross-coherence between the geometric mode (how the active site distorts) and the electronic mode (how the electrons redistribute). That number is not put in by hand — it comes out of the branch-point computation.

---

## The Jahn-Teller effect as a special case

The Jahn-Teller effect is a venerable phenomenon: a molecule with a degenerate electronic state at a high-symmetry configuration is always unstable and will spontaneously distort to lower its energy. It is named after the 1937 paper by Jahn and Teller.

In the Hitchin picture, a Jahn-Teller distortion is a conical intersection that has been pinned to the real axis by symmetry — a branch point that symmetry forces to stay real and observable. The usual story — the molecule distorts to split the degeneracy — is the static limit. But the paper notes that this misses the essential physics: the Berry phase, the sign change as you encircle the intersection, which governs the quantum dynamics even when time-averaged distortion is zero (the dynamic Jahn-Teller effect, where tunnelling between equivalent distorted configurations restores the full symmetry).

The Hitchin framework captures both: the static distortion as the location of the real branch point, and the dynamic Berry phase as its ℤ₂ monodromy.

---

## The efficiency ceiling

There is a further result that connects to earlier work. The efficiency ceiling of a PAT-q active site — the maximum fraction of absorbed energy that can be usefully converted — satisfies

η_max(PAT-q) = q / (q+1)²

This is the variance of a Bernoulli random variable with success probability q/(q+1). That identity — between an efficiency bound in enzymatic catalysis and a basic object in probability theory — is new, and it is proved algebraically here for the first time.

For PAT-3, η_max = 3/16 = 0.1875. For PAT-2, η_max = 2/9 ≈ 0.222. These are not efficiencies in the loose engineering sense. They are hard topological bounds, set by the algebraic geometry of the active site.

---

## What comes next

The full Riemann matrix Ω = A⁻¹B — the complete quantum coherence structure of the PAT-3 active site — requires a computer-algebra calculation (via Sage's `riemann_surface` package) that remains future work. The B-period matrix, computed here by numerical contour integration, is the imaginary part; the A-period normalisation completes it.

The prediction that stands most clearly open to test: the effective Jahn-Teller coupling of FeMoco places its five branch-point pairs at imaginary part ±3/16. Any computational chemistry study of FeMoco's non-adiabatic dynamics could, in principle, check this.

---

*See also:*

- [PG→AG Bonding](https://doi.org/10.5281/zenodo.21535906) (#688) — PAT-q active sites introduced; the projective-to-affine transition as an opcode
- [PAT-3 Biological Catalysis](https://doi.org/10.5281/zenodo.21536621) (#689) — PAT-3 applied to FeMoco, P450, and the OEC; efficiency ceiling first stated
- [Fock Sphere Chemistry](https://doi.org/10.5281/zenodo.21533520) (#682) — Fock sphere geometry underlying the active-site framework

*For the full technical treatment, see [doi:10.5281/zenodo.21558771](https://doi.org/10.5281/zenodo.21558771)*
