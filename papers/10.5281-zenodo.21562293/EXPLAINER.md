---
layout: default
title: "Bond Formation Is the Violent Event"
parent: Explainers
nav_exclude: true
tags: [chemical-bonding, hitchin-system, spectral-curve, symmetry-breaking, symmetry-making, branch-points, epsilon-crossing, pat-classification, enzymes, catalysis, twistor-chemistry, higgs-field]
portfolio: A
---

## Bond Formation Is the Violent Event

*Plain-language explainer for [doi:10.5281/zenodo.21562293](https://doi.org/10.5281/zenodo.21562293) (#699)*

---

## The intuition we all share — and why it is backwards

Ask anyone what happens when a chemical bond breaks, and they will say: something violent. A bond ruptures, atoms fly apart, energy is released. Breaking feels like the dramatic event. Formation feels quiet, inevitable — two atoms drift together and click.

This paper argues that this intuition has the physics exactly backwards.

Mathematically, **bond formation is a symmetry-breaking event**. Bond breaking is a **symmetry restoration**. The dramatic thing — the thing that creates new structure in the world — is when the bond forms, not when it breaks.

---

## The geometry behind the claim

To see why, you need one piece of mathematics: the idea of a **branch point**.

Take the equation λ² = x. For any positive real number x, there are two solutions: √x and −√x. As x passes through zero, the two solutions collide and become one (zero), then split apart again into two complex numbers as x goes negative. The point x = 0 where the two solutions meet is a **branch point** — a place where the two sheets of the solution surface are connected.

Now consider two atoms approaching each other. As the internuclear separation R decreases, the electrons on each atom begin to feel the other nucleus, and a **hopping integral** t(R) switches on — it measures how easily an electron can tunnel from one atom to the other. When the atoms are far apart, t = 0. When they are at bonding distance, t = t(Rₑ) > 0.

The molecular Hamiltonian can be written in a form that has a spectral curve — the equation that determines its energy eigenvalues:

λ² = w² + t(R)²

This is the equation for the bonding and antibonding energies λ as functions of a complex variable w. Its branch points — the places where the two energy levels touch — sit at w = ±i·t(R).

When the atoms are far apart and t = 0, the branch points sit at w = 0, on the real axis.

When the atoms bond and t > 0, the branch points move off the real axis into the complex plane, displaced by exactly ±i·t(R).

That displacement is the bond.

---

## ε is the bond-order parameter

The quantity ε = t(R) turns out to be a clean, continuous measure of bond order — the "how much of a bond is there?" number.

- **ε = 0**: atoms dissociated, no bond, branch points on the real axis
- **ε = t(Rₑ)**: bond at equilibrium, branch points sitting at ±iε in the complex plane
- **Gap Δ = 2ε**: the bonding–antibonding energy splitting, the energy you would need to break the bond

This is not a new definition of bond order bolted on artificially. It emerges directly from the geometry of the spectral curve. The imaginary part of the branch-point position *is* the bond.

---

## The symmetry story

Now here is the part that inverts the intuition.

The spectral curve λ² = w² + t² has a natural symmetry: λ → −λ. Flip the sign of the energy eigenvalue, and the equation is unchanged. This ℤ₂ symmetry (a two-element symmetry group, like a reflection) is always present in the equation.

But there is a difference between having a symmetry in the equation and having it in the solution.

**When the atoms are dissociated (ε = 0):** The branch points sit at w = 0 on the real axis. The solution respects the ℤ₂ symmetry. The energy levels are symmetric about zero. Symmetry is present everywhere.

**When the atoms bond (ε > 0):** The branch points move into the complex plane to ±iε. The two branch points are related by the reflection ε → −ε, but each individual branch point breaks the ℤ₂ symmetry of the original equation. The bonded state has **spontaneously chosen** one of the two complex branch-point positions — it has broken the symmetry.

This is spontaneous symmetry breaking (SSB), the same phenomenon that underlies the Higgs mechanism in particle physics, magnetic ordering in metals, and superconductivity. The bonded molecule is a symmetry-broken phase. The dissociated atom pair is the symmetric phase.

Bond breaking, conversely, is **spontaneous symmetry making** (SSM): as R → ∞, the branch points coalesce back onto the real axis, and the symmetry is restored. The system goes from broken to unbroken, from less symmetric to more symmetric. Symmetry is made, not broken.

The violent event — the event that creates new structure, new order, new asymmetry in the world — is the bond **forming**.

---

## The ε-crossing and why enzymes work

This framework is not just a reinterpretation of old chemistry. It has predictive teeth in biology.

During a catalytic reaction, an orbital energy passes through ε_crit — the critical threshold at which the spectral curve undergoes its transition. Call this an **ε-crossing**. Each ε-crossing corresponds to one step in the catalytic cycle: one topological event where a branch point moves between the real axis and the complex plane.

The **PAT classification** (Proton-Assisted Transition) counts ε-crossings per mechanism:

- **PAT-1:** one ε-crossing per cycle (simplest enzymes, e.g. many hydrolases)
- **PAT-2:** two ε-crossings (e.g. porphyrins, which must first bind a substrate, then release it)
- **PAT-3:** three ε-crossings (the most complex mechanisms, e.g. nitrogenase fixing N₂)

This is a topological count of irreducible steps. You cannot simplify a PAT-3 mechanism into a PAT-2 without changing the chemistry — the ε-crossings are required by the spectral curve topology, not by accident.

---

## The core of a large programme

This paper (#699) is the theoretical foundation for a cluster of later results:

**Paper 700 (ε-cycle):** Derives the catalytic cycle as a closed loop in ε-space — the enzyme goes around the loop once per substrate molecule processed.

**Paper 703 (replication):** Shows that DNA replication is an ε-cycle. Polymerase fidelity is controlled by how sharply the spectral curve discriminates correct from incorrect base pairing.

**Paper 704 (OEC Maxwell demon):** The oxygen-evolving complex of Photosystem II accumulates four ε-crossings sequentially (the Kok S-state cycle) before releasing O₂ in one concerted step.

**Paper 705 (porphyrins):** The Soret band absorption of porphyrins — the intense violet peak that makes blood red and leaves green — corresponds to the photon energy 2ε_crit(π). It is the spectral signature of the branch-point displacement.

**Paper 706 (Mg²⁺ polymerases):** Explains why DNA/RNA polymerases universally require magnesium and reject calcium. Mg²⁺ sets the right value of ε for the transition-state geometry. Ca²⁺ shifts ε past the critical point, jamming the mechanism.

**Paper 718 (twistor winding):** Provides the deepest foundation. The Hitchin branch point is a tangency between two CP¹ lines in twistor space CP³. Bond formation = branch point moving into the complex plane = the two lines becoming tangent. The spectral curve geometry and the twistor geometry are two views of the same thing.

---

## What this paper actually proves

The paper proves three things that are not immediately obvious:

**First**, that the standard two-centre molecular Hamiltonian, when viewed as a Higgs field on CP¹ (the Riemann sphere), generates a Hitchin spectral curve with precisely this branch-point structure. This is not an approximation — it follows from the algebra.

**Second**, that the bond-order parameter ε = t(R) is continuous and geometric: it interpolates smoothly from zero (no bond) to the full bonding value, tracking the internuclear separation without any discontinuity. There is no sudden jump — bonds form and break smoothly in this picture.

**Third**, that the SSB/SSM narrative is physically meaningful, not just a mathematical coincidence. The symmetry being broken is the particle-hole symmetry λ → −λ of the electronic spectrum. Its breaking at bond formation is the same kind of symmetry breaking that underlies phase transitions throughout physics.

---

## Why this matters

Chemistry has excellent empirical rules — bond orders, hybridisation, molecular orbital theory — but these rules have never been grounded in a clean geometric principle. The statement "a bond is a branch point" is that principle.

It gives a single, coordinate-free answer to the question "what is a bond?": it is a complex branch point of a spectral curve, characterised by a real number ε ≥ 0 that measures how far the branch point has moved off the real axis.

Everything else — bond strength, bond order, catalytic mechanism, enzyme selectivity — becomes a question about branch-point geometry.

---

*See also:*

- [The ε-Cycle: Catalysis as Closed Loop](https://doi.org/10.5281/zenodo.21569564) (#700) — the catalytic cycle as a closed path in ε-space
- [Replication as an ε-Cycle](https://doi.org/10.5281/zenodo.21572546) (#703) — DNA polymerase fidelity from spectral-curve geometry
- [Porphyrin PAT and the Soret Band](https://doi.org/10.5281/zenodo.21613237) (#705) — why porphyrins absorb at exactly 2ε_crit(π)
- [Twistor Winding and Chemical Bonds](https://doi.org/10.5281/zenodo.21630153) (#718) — branch points as CP¹ tangencies in twistor space

*For the full technical treatment, see [doi:10.5281/zenodo.21562293](https://doi.org/10.5281/zenodo.21562293)*
