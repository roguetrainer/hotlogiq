---
layout: default
title: "Orbital Knots: The Torus-Knot Assignment for Atomic Orbitals"
parent: Theory
nav_order: 11
description: "Every hydrogen-like orbital (n,ℓ) is assigned the torus knot T(ℓ+1, n-ℓ) on the Fock 3-sphere. This page tabulates those assignments, their genera, and their chemical consequences."
tags: [orbital-knots, torus-knots, fock-sphere, winding-number, periodic-table, knot-topology, seifert-genus, trefoil, hopf-link, kelvin-tait]
---

# Orbital Knots: The Torus-Knot Assignment for Atomic Orbitals
{: .no_toc }

*Every hydrogen-like orbital (n,ℓ) traces a torus knot T(ℓ+1, n−ℓ) on the Fock 3-sphere S³. This page tabulates those assignments through n=6, derives the pattern rules, and explains the chemical consequences.*
{: .fs-5 .fw-300 }

---

## Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## The assignment

Vladimir Fock showed in 1935 that the bound-state wave functions of the hydrogen atom are related by a unitary transformation to functions on the 3-sphere S³. In that picture, the momentum-space wavefunction for principal quantum number n lives on S³ as a hyperspherical harmonic.

A torus knot T(p,q) is a closed curve that winds p times around the central hole of a torus and q times through the hole. Torus knots are the simplest knots that can be drawn on the surface of a torus, and they all live naturally on S³ — the 3-sphere — as the orbits of specific periodic flows.

The winding-shell assignment (Papers 657, 709) maps each hydrogen-like orbital with quantum numbers (n, ℓ) to a torus knot T(p, q) on S³ by:

- **p = ℓ + 1** (the number of times around the hole — set by angular momentum ℓ)
- **q = n − ℓ** (the number of times through the hole — set by the radial quantum number)

So orbital (n, ℓ) → **T(ℓ+1, n−ℓ)**.

This is not merely a labelling device. The winding number w = p + q − 1 = n, recovering the principal quantum number as a topological invariant. The knot type encodes the topological complexity of the orbital on the Fock sphere; its Seifert genus encodes how much topological work is needed to fill the knot with an orientable surface.

---

## Knot types: trivial, link, genuine knot

Before the table, three cases must be distinguished:

**Unknot.** T(p,q) is the unknot (topologically trivial, genus 0) when min(p,q) = 1 — that is, when either p = 1 or q = 1. The curve winds around the torus once in one direction, so it never self-links.

**Torus link.** T(p,q) splits into d = gcd(p,q) components when gcd(p,q) > 1. Each component is a copy of T(p/d, q/d). A link with more than one component is not a knot; its "knot group" is a product, and the Seifert genus is zero per component in the simplest examples (though the link itself can carry topological information through its linking numbers). The Hopf link T(2,2) is the archetypal example: two unknotted circles, linked once.

**Genuine torus knot.** T(p,q) is a genuine knot (one component, non-trivially knotted) when gcd(p,q) = 1 and both p ≥ 2 and q ≥ 2. The Seifert genus is

g(T(p,q)) = (p−1)(q−1) / 2

This formula (Milnor 1975, generalising earlier work of Seifert) gives the minimum genus of any orientable surface bounded by the knot. Genus zero means unknotted; genus 1 is the trefoil, the simplest genuine knot.

---

## Complete orbital table (n = 1 through n = 6)

All hydrogen-like orbitals with n ≤ 6. The table uses the conventions p = ℓ+1, q = n−ℓ, gcd = gcd(p,q), genus from Milnor's formula (set to 0 for links and unknots).

| Orbital | n | ℓ | T(p,q) | gcd | Components | Type | Genus |
|---------|---|---|--------|-----|------------|------|-------|
| 1s | 1 | 0 | T(1,1) | 1 | 1 | unknot | 0 |
| 2s | 2 | 0 | T(1,2) | 1 | 1 | unknot | 0 |
| 2p | 2 | 1 | T(2,1) | 1 | 1 | unknot | 0 |
| 3s | 3 | 0 | T(1,3) | 1 | 1 | unknot | 0 |
| 3p | 3 | 1 | T(2,2) | 2 | 2 | Hopf link | 0 |
| 3d | 3 | 2 | T(3,1) | 1 | 1 | unknot | 0 |
| 4s | 4 | 0 | T(1,4) | 1 | 1 | unknot | 0 |
| 4p | 4 | 1 | T(2,3) | 1 | 1 | trefoil (3₁) | 1 |
| 4d | 4 | 2 | T(3,2) | 1 | 1 | trefoil (3₁) | 1 |
| 4f | 4 | 3 | T(4,1) | 1 | 1 | unknot | 0 |
| 5s | 5 | 0 | T(1,5) | 1 | 1 | unknot | 0 |
| 5p | 5 | 1 | T(2,4) | 2 | 2 | 2-component link | 0 |
| 5d | 5 | 2 | T(3,3) | 3 | 3 | 3-component link | 0 |
| 5f | 5 | 3 | T(4,2) | 2 | 2 | 2-component link | 0 |
| 5g | 5 | 4 | T(5,1) | 1 | 1 | unknot | 0 |
| 6s | 6 | 0 | T(1,6) | 1 | 1 | unknot | 0 |
| 6p | 6 | 1 | T(2,5) | 1 | 1 | cinquefoil (5₁) | 2 |
| 6d | 6 | 2 | T(3,4) | 1 | 1 | torus knot (8₁₉) | 3 |
| 6f | 6 | 3 | T(4,3) | 1 | 1 | torus knot | 3 |
| 6g | 6 | 4 | T(5,2) | 1 | 1 | torus knot | 2 |
| 6h | 6 | 5 | T(6,1) | 1 | 1 | unknot | 0 |

{: .note }
> **Reading the table.** "Type" gives the standard knot name or category. "Genus" is the Seifert genus from Milnor's formula — meaningful only for genuine knots (gcd = 1, both p,q ≥ 2); for unknots and links it is listed as 0 but carries different meaning (unknots have zero genus by definition; links have per-component genus, which for the Hopf link and its relatives is 0 for each circle, though the linking number is non-zero).

---

## Pattern rules by orbital family

### s orbitals (ℓ = 0): always unknotted

s orbitals have ℓ = 0, so p = 1. T(1, q) = unknot for every q. The curve winds just once around the hole of the torus — it cannot self-link, and the resulting closed curve is always the unknot.

**s orbitals are topologically trivial at every shell.** Their chemistry is determined entirely by energy (the winding number w = n) and radial extent, never by knot-theoretic obstruction. This is why 1s, 2s, 3s, ... electrons behave chemically similarly (spherically symmetric, no angular nodes from the knot type) while differing only in size and energy.

### p orbitals (ℓ = 1): T(2, n−1)

The p-family sweeps through T(2,q) as n increases:

| Shell | Orbital | T(p,q) | Type |
|-------|---------|--------|------|
| n=2 | 2p | T(2,1) | unknot |
| n=3 | 3p | T(2,2) | Hopf link (2 components) |
| n=4 | 4p | T(2,3) | trefoil (3₁), genus 1 |
| n=5 | 5p | T(2,4) | 2-component link |
| n=6 | 6p | T(2,5) | cinquefoil (5₁), genus 2 |
| n=7 | 7p | T(2,6) | 2-component link |
| n=8 | 8p | T(2,7) | torus knot (7₁), genus 3 |

The pattern alternates: T(2, odd) = genuine torus knot (the (2,odd)-torus knots are exactly the 2-bridge twist knots 3₁, 5₁, 7₁, ...); T(2, even) = 2-component link. The first genuine knot in the p-block appears at 4p.

### d orbitals (ℓ = 2): T(3, n−2)

| Shell | Orbital | T(p,q) | Type |
|-------|---------|--------|------|
| n=3 | 3d | T(3,1) | unknot |
| n=4 | 4d | T(3,2) | trefoil (3₁), genus 1 |
| n=5 | 5d | T(3,3) | 3-component link |
| n=6 | 6d | T(3,4) | torus knot (8₁₉), genus 3 |
| n=7 | 7d | T(3,5) | torus knot, genus 4 |

The 4d orbital and 4p orbital are both trefoils — distinct orbital families that share the same knot type. This coincidence underlies the chemical similarity between the 4p region (post-Zn) and the 4d transition metals in their bonding complexity. The 5d orbital at T(3,3) is a 3-component link: topologically a much more intricate object than the 5p 2-component link, consistent with the greater relativistic and correlation effects in 5d chemistry.

### f orbitals (ℓ = 3): T(4, n−3)

| Shell | Orbital | T(p,q) | Type |
|-------|---------|--------|------|
| n=4 | 4f | T(4,1) | unknot |
| n=5 | 5f | T(4,2) | 2-component link |
| n=6 | 6f | T(4,3) | torus knot, genus 3 |
| n=7 | 7f | T(4,4) | 4-component link |

The 4f orbital is the unknot. This single fact has large chemical consequences (see below). The 5f and 6f orbitals, by contrast, have non-trivial link and knot structure — matching the well-known chemical distinction between the inert 4f lanthanides and the reactive 5f/6f actinides.

### g and h orbitals (ℓ = 4 and ℓ = 5)

g orbitals (ℓ = 4) begin at n = 4: T(5,1) = unknot. They first become knotted at 6g = T(5,2), genus 2. No g-orbital elements exist in nature (they would require n ≥ 4, Z ≥ 121 or higher).

h orbitals (ℓ = 5) always produce T(6, n−5). The n = 6 case, T(6,1), is the unknot; n = 7 gives T(6,2), a 2-component link. In all cases the q = 1 term appears first, so the first h orbital encountered is always the unknot. h-orbital elements would require Z ≥ 138 and are not found in nature.

**The boundary rule.** For any orbital at the top of its block — the highest ℓ at a given n — we have q = n − ℓ = n − (n−1) = 1, giving T(p,1) = unknot. The outermost orbital of each shell is always topologically trivial.

---

## Key chemical consequences

### Why s-block chemistry is topologically featureless

All s orbitals are unknots. An s electron on the Fock sphere traces a curve with no self-linking, no topological obstruction to moving freely on S³. Whatever chemical richness s-block elements display — alkali reactivity, alkaline-earth coordination — it comes purely from energetics and electrostatics, not from any topological complexity in the orbital itself. The winding number w = n discriminates the shells; the knot type is uniformly trivial.

This is the topological explanation for a fact that quantum chemists know empirically: DFT (which is a topologically flat, H⁰ approximation in the ISA hierarchy) describes s-block chemistry extremely well. There is no topological obstruction to describe.

### The trefoil threshold: onset of d-block richness

The first topologically non-trivial knots appear at 4p = T(2,3) and 4d = T(3,2), both trefoils of genus 1. The trefoil is the simplest genuine knot — the minimal knot, in the sense that no knot has smaller crossing number (3 crossings) or smaller Seifert genus (1).

The transition metal series begins at the 3d orbital (n=3, ℓ=2), which is the unknot T(3,1). The 4d orbital (n=4, ℓ=2) is the first d orbital that is a genuine knot. This topological step corresponds to the well-known qualitative difference between 3d and 4d transition metal chemistry: the 4d metals (Zr, Nb, Mo, ...) display more varied oxidation states, stronger covalency, and more complex orbital participation in bonding than their 3d counterparts (Ti, V, Cr, ...).

The 3p orbital (n=3, ℓ=1) is the Hopf link T(2,2): two components, topologically non-trivial as a link but with zero knot genus per component. The 4p orbital (n=4, ℓ=1) is T(2,3), a trefoil: one component, genus 1. This is a sharp topological step — from a 2-component link to a genuine knot — coinciding with the qualitative difference in chemistry between 3p elements (Al, Si, P, S, Cl, Ar — second-row main-group with incomplete 3p filling) and 4p elements (Ga, Ge, As, Se, Br, Kr — post-transition, with richer hybridisation and heavier-atom effects).

### Why 4f is the unknot: lanthanide inertness

The 4f orbital maps to T(4,1) = unknot, genus 0. An unknot has no topological obstruction to contraction — the curve on S³ can be smoothly deformed to a point. The 4f electrons sit in an orbital with zero knot complexity.

This is the deepest topological explanation for the chemical inertness of the lanthanide 4f series. Lanthanides (La through Lu) are chemically almost identical: they differ in ionic radius by tiny amounts (the lanthanide contraction), all form +3 ions, and their 4f electrons are effectively spectators in bonding. The 4f orbital lies below the 5s and 5p levels energetically, shielded by them, and contributes negligible overlap with ligand orbitals. No topological obstruction forces the 4f electrons to engage with neighboring atoms.

By contrast, the 5f actinide series corresponds to T(4,2) — a 2-component link — and 6f would be T(4,3), a genuine torus knot of genus 3. Actinides (Th through Lr) are chemically much more diverse: U, Np, and Pu show variable valence (+3 through +6), participate in covalent bonding, and have 5f electrons that genuinely mix into the bonding. The topological complexity increases step-by-step: 4f = unknot, 5f = link, 6f = genuine knot.

### Bouquets, not single knots

The Kelvin-Tait programme (1867–1895) proposed that atoms are knotted vortex tubes in the luminiferous ether, with each element corresponding to a single knot. The programme failed when the ether was disproved — but the underlying topological instinct was right in the wrong arena.

The winding-shell assignment gives each element not a single knot but a **bouquet** of torus knots — one torus knot per occupied orbital. The chemical character of an element is the collective topological signature of all its filled orbitals.

Some example bouquets:

**Hydrogen** (1s¹): {T(1,1)} = {unknot}. One orbital, trivial knot.

**Carbon** (1s² 2s² 2p²): {T(1,1), T(1,2), T(2,1)}. Three distinct orbitals, all unknots. Carbon's rich chemistry comes entirely from energy differences (the 2s/2p gap) and from the directional structure of the 2p orbitals, not from any topological complexity in the orbital knots themselves.

**Iron** (1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²): bouquet includes T(2,2) = Hopf link from 3p, T(3,1) = unknot from 3d, and T(1,4) = unknot from 4s. The 3d orbital at n=3 is still an unknot — the 3d shell of iron carries no topological knot genus. This matches the well-known difficulty of describing iron with DFT in hard cases (the Mott-insulating regime of FeO, for instance) as arising from strong correlations (H² effects in the ISA hierarchy) rather than topological orbital complexity per se.

**First trefoil-bearing element in the d-block.** The first d-block element to have a trefoil in its bouquet is the first element to fill the 4d orbital: Yttrium (Y, Z=39), which adds 4d¹ and thus gains T(3,2) = trefoil as its first genuinely knotted orbital.

**First trefoil-bearing element in the p-block.** The first p-block element to fill the 4p orbital is Gallium (Ga, Z=31), which adds T(2,3) = trefoil.

---

## The link between genus and chemical hardness

The Seifert genus g measures the minimum topological complexity of a surface bounded by the orbital knot. In the ISA framework, genus is related to the cohomological tier of the computation needed to describe the corresponding physics:

- **g = 0** (unknot): H⁰ approximations (DFT, Hartree-Fock at mean-field level) typically sufficient
- **g = 1** (trefoil, genus 1): H¹ corrections important; CCSD and related methods needed
- **g ≥ 2** (higher torus knots): H² methods (CASSCF, MRCI, DMRG) required for accuracy

This hierarchy is not a precise theorem but a structural principle: higher genus orbital knots are more topologically complex, and their chemistry tends to require higher-tier computational methods to describe accurately. The correlation is not perfect (correlation energy and topological genus are related but not identical), but it provides an organising principle for understanding why the d- and f-block elements are computationally harder.

---

## Knot table in standard notation

For reference, the named torus knots appearing through n = 6:

| T(p,q) | Standard name | Crossing number | Seifert genus | First orbital |
|--------|---------------|-----------------|---------------|---------------|
| T(2,3) | Trefoil (3₁) | 3 | 1 | 4p |
| T(3,2) | Trefoil (3₁) | 3 | 1 | 4d |
| T(2,5) | Cinquefoil (5₁) | 5 | 2 | 6p |
| T(5,2) | Cinquefoil (5₁) | 5 | 2 | 6g |
| T(3,4) | Torus knot (8₁₉) | 8 | 3 | 6d |
| T(4,3) | Torus knot | 8 | 3 | 6f |

Note that T(2,3) and T(3,2) are the same knot — the trefoil — because T(p,q) and T(q,p) are always equivalent as knot types (they are mirror images, and the trefoil is chiral, but the knot TYPE is the same). Similarly, T(2,5) and T(5,2) are both cinquefoils.

---

## Key references

- **Paper 657 — Knotted Orbitals (Kelvin-Tait revival):** doi:[10.5281/zenodo.21480634](https://doi.org/10.5281/zenodo.21480634) — introduces the torus-knot assignment for atomic orbitals; Hopf fibres on S³; connection to Kelvin-Tait vortex atoms.
- **Paper 709 — Filling by Winding (Periodic Table as S³ shadow):** doi:[10.5281/zenodo.21608229](https://doi.org/10.5281/zenodo.21608229) — derives the winding number w = n from the S³ geometry; explains the Madelung filling rule topologically; tabulates orbital knots through n = 7.
- **Paper 719 — Orbital Simplex / Shell Genus:** doi:[10.5281/zenodo.21630155](https://doi.org/10.5281/zenodo.21630155) — shows that the total torus-knot genus of shell n equals a combinatorial number (related to C(n,3)); relates orbital simplices to 6j symbols as H³ primitives.
- **Fock (1935)** — V.A. Fock, *Zur Theorie des Wasserstoffatoms*, Z. Phys. 98, 145–154. The original S³ map for hydrogen wave functions.
- **Milnor (1975)** — J. Milnor, *On the 3-dimensional Brieskorn manifolds M(p,q,r)*, in *Knots, Groups, and 3-Manifolds*, Ann. Math. Studies 84. Contains the Seifert genus formula for torus knots.

---

*See also:
[Knots, Spiders & the ISA](/docs/theory/knot-topology) — how the Kuperberg G₂ spider, Khovanov homology, and torus knots connect to the ISA opcode algebra ·
[The ISA Opcodes](/docs/reference/opcodes) — the Valence ISA extension where orbital knots meet JOIN and CLEAVE ·
[Pachner Moves and Quantum Symbols](/docs/reference/pachner-symbols) — how the 6j symbol (the H³ primitive) relates to the orbital simplex construction of Paper 719*
