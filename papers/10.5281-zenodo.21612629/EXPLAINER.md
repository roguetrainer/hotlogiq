---
layout: default
title: "One Rule to Count Them All"
parent: Explainers
nav_exclude: true
tags: [molecular-orbital-theory, electron-counting, octet-rule, huckel-rule, 18-electron-rule, walsh-diagrams, jahn-teller, casscf, active-space, winding-number, so4, point-groups, branching-rules, chemical-bonding, origami-isa]
portfolio: A
---

## One Rule to Count Them All

*Plain-language explainer for [doi:10.5281/zenodo.21612629](https://doi.org/10.5281/zenodo.21612629) (#711)*

---

## Four rules. One source.

Every chemistry student learns four rules for when electrons are "happy":

- **Noble-gas rule** — atoms are stable with 2, 8, 18, or 32 electrons (the noble-gas configurations)
- **Octet rule** — main-group atoms in molecules want 8 electrons in their valence shell
- **Hückel 4n+2 rule** — aromatic rings are stable when the number of π electrons is 2, 6, 10, 14, ...
- **18-electron rule** — transition-metal complexes are stable with exactly 18 electrons

These are presented as separate empirical discoveries, named after different people, taught in different chapters. The noble-gas rule comes from Mendeleev's periodic table. The octet rule dates to Lewis in 1916. Hückel derived his rule for aromatics in 1931. The 18-electron rule was crystallised in the 1950s for organometallic chemistry.

This paper shows they are all the same statement.

---

## The story so far: atoms on S³

The companion paper (#709) established that atomic orbital filling follows a single topological invariant called the winding number, written w = n + ℓ + 1, where n and ℓ are the familiar quantum numbers. This winding number is not just arithmetic — it counts how many times an electron's path winds around the 3-sphere S³ that Fock identified as hydrogen's momentum space in 1935.

Orbitals with the same winding number form a **winding shell**. The w=4 shell contains the ns and np orbitals together (capacity 8). The w=6 shell contains the nd, (n+1)p, and (n+2)s orbitals together (capacity 18). These groupings feel familiar — they are exactly the valence electrons that chemists have always treated as belonging together — but until now the reason for that grouping was not explained.

The question this paper asks is: atoms bond into molecules. What happens to the winding-shell structure when that happens?

---

## Branching: from atom to molecule

When atoms combine into a molecule, the full rotational symmetry of the isolated atom gets broken down to the smaller symmetry of the molecule's shape. A perfectly spherical atom in isolation has the symmetry SO(3) — it looks the same from every direction. A water molecule has only the symmetry C₂ᵥ — a two-fold rotation axis and two mirror planes.

There is a mathematical procedure for tracking what happens to a symmetry representation when you move to a subgroup: the **branching rule** (or restriction functor, in the formal language). You take the orbital type — say, a p orbital, which has three components that rotate into each other — and ask which subsets of those components stay linked by the molecule's smaller symmetry.

The winding-shell branching theorem in this paper chains three levels together:

SO(4) → SO(3) → G

where G is the molecular point group. The SO(4) level is labelled by the winding number w. The SO(3) level is labelled by angular momentum ℓ. The point group G level assigns the familiar symmetry labels (a₁, t₂g, e₁g, ...) that appear in MO diagrams.

The central result: **molecular orbital symmetry labels are exactly the G-sub-labels obtained by branching the winding shells of the constituent atoms, and the total electron capacity is conserved at every step in the chain**.

That last part is what unifies the four counting rules.

---

## Why all four rules are the same

The w=4 shell has a capacity of 8 electrons — always, under any molecular symmetry. When you branch it to C₂ᵥ (the symmetry of water or ammonia), the 8 slots split into sub-labels, but there are still 8 of them. When you branch it to T_d (tetrahedral), still 8. The number is a property of the winding shell, not of the shape.

The w=6 shell has a capacity of 18 electrons — always, under any molecular symmetry. Branch it to O_h (octahedral, like a classic metal complex), the d orbitals split into t₂g and e_g, the p orbitals become t₁ᵤ, the s orbital becomes a₁g — and the total is still 18.

So:

| Rule | Winding shell | Molecular symmetry G | Capacity |
|---|---|---|---|
| Noble-gas rule | highest-ℓ subshell full | SO(3), no branching | 2, 8, 18, 32, ... |
| Octet rule | w = 4 | Cₙᵥ or T_d | 8 |
| Hückel 4n+2 | π w-shell | D_nh (ring symmetry) | 4m+2 |
| 18-electron rule | w = 6 | O_h or T_d | 18 |

A closed winding shell under G is electronically stable. That is the one sentence behind all four rules. The different rules are simply this sentence applied to four different choices of G.

The octet rule in particular has not previously been stated this way. It follows from the w=4 capacity by exactly the same argument as the 18-electron rule follows from w=6.

---

## Walsh diagrams for free

In 1953, Arthur Walsh published correlation diagrams showing how the energy of each molecular orbital in AH₂ molecules (BeH₂, BH₂, CH₂, NH₂, OH₂) changes as the bond angle θ varies from 90° to 180°. From these diagrams he could predict which molecules are bent (water, H₂O at 104°) and which are linear (beryllium hydride, BeH₂ at 180°). It was elegant but required careful qualitative arguments about orbital overlaps at each angle.

The branching chain gives the same result in one step.

When you read the branching table for the w=4 shell going from C₂ᵥ to D∞h (bent to linear), each MO gets a symmetry label in both geometries. The label in the linear geometry tells you immediately whether the MO energy rises or falls as you straighten the molecule:

- Bonding MOs (σg⁺ labels) fall in energy toward linear — they gain from sp hybridisation
- Antibonding MOs (σu⁺ labels) rise steeply toward linear — they become A-H antibonding
- Nonbonding MOs (πu labels) are flat or weakly rising

Any two MOs with opposite trends must cross somewhere between 90° and 180°. Not because of any numerical calculation — because one is going up and the other is going down, and by a basic mathematical fact (the intermediate value theorem), they must meet.

The bent-or-linear question becomes: is the strongly-rising antibonding MO (3a₁) occupied? If you have four electrons or fewer, it is empty and the molecule relaxes to linear. If you have six or more, it is filled and the molecule bends to avoid the energy penalty at 180°. Water has eight valence electrons, fills 3a₁, and bends. Beryllium hydride has four, leaves 3a₁ empty, and stays linear.

Walsh knew all of this. He derived it through careful overlap arguments. The branching chain gives the same answer by reading a table.

---

## Jahn-Teller distortions explained

The Jahn-Teller theorem (1937) says that a molecule with a degenerate electronic ground state will always distort to break the degeneracy. It is one of the most quoted results in chemical physics, and it is provably true. What was less clear is why certain molecules have degenerate states, and which way they distort.

The winding-shell picture answers both.

A degenerate state arises when a multi-dimensional G-irrep is only partly filled. Cyclobutadiene (a square ring of four carbons) has a π w-shell that branches under D₄h symmetry into a two-dimensional irrep eu with exactly two electrons in it — half-filled. The resulting degeneracy forces distortion. The molecule has no choice: it distorts to lower symmetry D₂h, stretching into a rectangle, splitting the eu degeneracy.

The branching table predicts not just that distortion occurs, but which symmetry the distorted molecule has (the subgroup G' ⊂ G that splits the offending irrep), and which vibrational mode drives the distortion (the symmetric product of the irrep with itself, minus the fully symmetric piece).

For Mn³⁺ in octahedral coordination, the w=6 d-shell branches to give an eg irrep with one electron. The prediction: distortion to D₄h via an eg vibrational mode. Experiment agrees. For benzene, the π w=4 shell is completely full (6 π electrons, full complement under D₆h). No distortion predicted. Experiment: benzene is stable and perfectly hexagonal. For water, the entire w=4 shell is full. No Jahn-Teller distortion. Correct.

---

## A better compass for quantum chemistry calculations

There is a practical consequence that matters for computational chemists.

When you run a quantum chemistry calculation on a molecule, you often have to make a choice: which orbitals to include in the "active space" — the set of orbitals that are allowed to participate in multi-electron effects. Too small an active space and you get the wrong answer. Too large and the calculation becomes intractable. Currently this choice is made by experience and intuition, which means different practitioners get different results.

The winding-shell framework gives a principled rule: the active space consists of all orbitals within ±1 winding shell of the HOMO. Orbitals two or more winding shells away can be frozen without qualitative error, because the energy denominators that govern mixing grow with the shell gap.

For first-row transition metals, this picks out the 3d, 4s, and 4p orbitals — all at w=6 — which is exactly what experienced practitioners choose, but now for a stated topological reason rather than accumulated intuition. For aromatic molecules, it picks out the π and π* orbitals within the same w-shell. For actinides, it picks out both the 5f and 6d orbitals, which are near-degenerate in winding number — explaining why actinide chemistry is so much more complex than lanthanide chemistry.

The goal stated in this paper: make active space selection fully automatic, replacing practitioner art with a topological calculation that can be run before the quantum chemistry begins.

---

## The three-paper arc

This paper is the middle of a three-paper sequence:

- **Paper #709** derived atomic filling from S³ geometry: why shells exist and why they fill in Madelung order
- **Paper #711** (this paper) extends the framework to molecules: why molecular orbital counts and geometries follow from the same SO(4) structure
- **Paper #710** maps the frontier between filled and empty shells (the HOMO-LUMO gap in winding-number terms) to chemical reactivity

Together they argue that the winding number w = n+ℓ+1 is the organising invariant of all of electronic structure chemistry — from the periodic table, through molecular geometry, to the edge of where single-determinant quantum chemistry breaks down.

---

*See also:*

- [Filling by Winding: Periodic Table from S³ Geometry](https://doi.org/10.5281/zenodo.21608229) (#709) — the atomic companion; winding shells derived from topology
- [The Frontier Winding Gap](https://doi.org/10.5281/zenodo.21612627) (#710) — reactivity and the Hückel/18e rules from the HOMO-LUMO winding gap
- [Active Space Selection from Finite Geometry](https://doi.org/10.5281/zenodo.21534394) (#683) — the active-space selection problem addressed from a finite-geometry angle

*For the full technical treatment, see [doi:10.5281/zenodo.21612629](https://doi.org/10.5281/zenodo.21612629)*
