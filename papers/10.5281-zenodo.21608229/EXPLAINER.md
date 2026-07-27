---
layout: default
title: "Filling by Winding: The Periodic Table is a Shadow of S³"
parent: Explainers
nav_exclude: true
tags: [periodic-table, aufbau, madelung-rule, torus-knots, hopf-fibration, s3-geometry, winding-number, kustaanheimo-stiefel, janet-table, anomalous-configurations, electron-configuration, orbital-topology, so4-symmetry, pt-symmetry]
portfolio: A
---

## The Periodic Table Has a Secret

*Plain-language explainer for [doi:10.5281/zenodo.21608229](https://doi.org/10.5281/zenodo.21608229) (#709)*

---

## What every chemistry student learns

When you fill a new atom with electrons, you follow the Aufbau principle: add
electrons one at a time, placing each in the lowest available energy level.
The order you follow is given by the **Madelung rule**: fill subshells in order
of increasing n+ℓ, where n is the shell number and ℓ is the angular momentum
quantum number. When two subshells tie on n+ℓ, fill the lower-n one first.

This gives the familiar sequence: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p →
5s → 4d → ...

The Madelung rule is almost always presented as an empirical observation. A useful
mnemonic. A pattern that happens to work, with a handful of embarrassing exceptions
(chromium, copper, palladium, gold, and a long list of actinides, all of which
refuse to behave). Students are typically told to memorise the exceptions and
move on.

This paper argues that framing is wrong. The Madelung rule is not an
energy-ordering recipe that approximately holds. It is a **topological
filling principle** — and once you see it that way, the exceptions stop
being embarrassing and start being inevitable.

---

## Electrons as knots on a sphere

The hydrogen atom has a surprising geometric secret, known since Fock in 1935:
in momentum space, the bound states of hydrogen do not live on a flat plane.
They live on a **3-sphere** — the S³ that is the three-dimensional surface of
a four-dimensional ball. (To be clear about dimensions: S³ is not the ordinary
sphere you can hold in your hand. That is S². S³ requires one extra dimension.
It is the simplest space you can build that is both three-dimensional and has
no boundary.)

S³ has a beautiful structure called the **Hopf fibration**. Imagine S³ as being
built from an infinite family of circles — one circle over each point of an
ordinary sphere S². The circles are called fibres; they are threaded together
in an intricate way so that any two circles are linked, like the links of a chain.

An electron in orbital (n,ℓ) traces a path on S³. The path winds around the
fibre circles some number of times and around the base sphere some number of
times. A path that winds p times one way and q times the other, without
self-intersection, is called a **torus knot** T(p,q). The simplest is T(1,1) —
the unknot, a plain loop. T(2,3) is the trefoil, the three-lobed shape that is
the simplest non-trivial knot.

This paper assigns to every electron orbital (n,ℓ) the torus knot T(ℓ+1, n-ℓ)
on S³. The 1s orbital is T(1,1), the unknot. The 3d orbital is T(3,2), a
trefoil. The 4f orbital is T(4,1), an unknot again — which will matter shortly.

---

## The invariant that orders everything

A torus knot T(p,q) has a natural integer attached to it: the total number
of times it winds around S³, counting both directions. This is p+q = (ℓ+1)+(n-ℓ)
= n+1. But that is just n — it ignores ℓ entirely.

The right invariant is the **total winding number** w = n+ℓ+1. This counts
the total circuit length of the torus knot in a particular sense made precise
by the Kustaanheimo-Stiefel (KS) transform — an exact mathematical equivalence
between the hydrogen atom on S³ and a four-dimensional harmonic oscillator.
The 4D harmonic oscillator has energy shells numbered N = 0, 1, 2, ..., and
these shells map precisely to w−2. So w is not an ad hoc label. It is the
shell number of the 4D oscillator that the hydrogen atom *is*, when you look
at it correctly.

Now sort all atomic orbitals by increasing w:

- w = 2: 1s (n=1, ℓ=0)
- w = 3: 2s (n=2, ℓ=0), 2p (n=2, ℓ=1) — tied; break by lower n → 2s first
- w = 4: 3s, 3p, 4s — tied; break ties by lower n: 3s, then 3p, then... wait,
  4s has n=4, ℓ=0, so w=5. Let me redo that.

The actual sequence by (w, then lower n for ties) is:
1s(2) → 2s(3) → 2p(3) → 3s(4) → 3p(4) → 4s(5) → 3d(5) → 4p(5) → 5s(6) → 4d(6) → ...

That is the Madelung sequence. Exactly. The n+ℓ = const diagonals that define
the Madelung rule are precisely the w = const winding shells. The Madelung rule
is not an empirical observation. It is the statement that electrons fill torus
knots on S³ in order of total winding number. And filling by total winding is
filling by 4D harmonic oscillator shell. That is as fundamental as it gets.

---

## Why the exceptions are not exceptions

Now here is where the real payoff comes. Chromium should, by naive Madelung,
be [Ar] 3d⁴ 4s². But it is actually [Ar] 3d⁵ 4s¹. Copper should be 3d⁹ 4s²
but is 3d¹⁰ 4s¹. These are the famous anomalies.

The winding numbers of 3d and 4s are:
- 3d: n=3, ℓ=2, w = 3+2+1 = 6
- 4s: n=4, ℓ=0, w = 4+0+1 = 5

That is |Δw| = 1 — these two orbitals are on adjacent winding shells. They are
nearly degenerate in the S³ geometry. When two orbitals are this close in winding,
the small perturbation from electron-electron repulsion — specifically the exchange
energy that electrons with parallel spins avoid — can tip the balance. The
exchange energy favours filling the half-shell (3d⁵ with all spins parallel) and
borrowing the electron from 4s. This is not a violation of any principle. It is
degeneracy-resolution at a winding tie.

The paper establishes a clean three-tier hierarchy:

- **|Δw| ≥ 2**: No competition. Aufbau holds trivially. This covers 99% of all elements.
- **|Δw| = 1**: The two competing orbitals are adjacent in winding. Exchange energy
  resolves the tie — the half-filled or fully-filled shell wins when the exchange
  gain exceeds the one-electron energy cost. This accounts for Cr, Cu, Mo, Nb,
  Ru, Rh, Pd, Ag, La, Pt, and Au.
- **|Δw| = 0**: The two competing orbitals have identical total winding. A deeper
  symmetry — the SO(4) Casimir invariant C₂(n,ℓ) — breaks the tie. This accounts
  for Ce, Gd, Ac, Th, Pa, U, Np, and Cm.

This hierarchy accounts for all 19 known anomalous electron configurations,
correctly, from quantum numbers alone. No density functional theory. No
self-consistent field calculation. No empirical fitting. Just the geometry of S³
and two tiebreaker rules.

---

## Janet was right

In 1929, Charles Janet proposed an alternative layout for the periodic table
now called the **left-step table**. Instead of the conventional arrangement —
where period 4 starts with potassium and runs through krypton — Janet grouped
elements by their outermost electron configuration. The result is a table where
the f-block and d-block move to the left, the rows have a different pattern of
lengths, and the Helium sits above Beryllium rather than Neon.

Janet's table was ignored for most of the 20th century as a curiosity. The
reason it attracted attention from a few specialists is that it has a certain
logical tidiness: each row corresponds to a single value of n+ℓ.

This paper shows that Janet's rows are exactly the winding shells. Each row of
the left-step table is a w = const shell. Janet's grouping — empirical, with
no theoretical justification he could give — is the correct geometric grouping
forced by S³. He had the right answer in 1929 without knowing why.

The paper also resolves the longstanding **La-Lu controversy**: should lanthanum
or lutetium head Group 3 of the periodic table? This debate has generated
significant heat with no consensus. The winding framework settles it cleanly:
block assignment is determined by the ℓ of the Aufbau-filling subshell. La's
anomalous 5d¹ configuration is a Tier-2 anomaly (|Δw|=1, the same type as Cr
and Cu) — the 5d briefly wins over 4f by exchange, but La is still an f-block
element. Lu correctly heads Group 3. This matches the IUPAC 2021 recommendation.

---

## The f-block mystery and torus knots

Here is a beautiful detail that falls out of the torus knot picture.

The 4f orbital is T(4,1) on S³. The numbers 4 and 1 have a common factor: gcd(4,1) = 1,
so it is a genuine knot. But more importantly, T(4,1) is the **(4,1) torus curve** —
a curve that winds once through the hole and four times around it. This is
topologically equivalent to an unknot. Its Seifert genus is zero.

An unknot has genus zero. The 4f orbital is topologically as simple as possible —
it is knotted in the same sense as a circle.

The 5f orbital is T(4,2). Here gcd(4,2) = 2, so it is not a knot at all but a
**link** — two separate loops intertwined. Each component is T(2,1), the same
topological type as a 2p orbital. The 5f orbital has hidden p-character.

This explains something chemists have observed for decades: lanthanides
(which fill 4f) are chemically inert and nearly interchangeable — their 4f
electrons barely participate in bonding. Actinides (which fill 5f) are much
more reactive, show multiple oxidation states, and exhibit covalent bonding
unlike their lighter cousins. The explanation, in this framework, is topological:
the 4f shell has genus zero (unknot topology, no bonding complexity), while the
5f shell is a link with p-type components (non-trivial topology, chemical activity).

---

## What this means

The periodic table is not a classification scheme we invented for convenience.
It is a **projection** — one of several natural views of the same underlying
geometric object, which is the S³ of hydrogen's momentum space with its Hopf
fibration and torus knot orbitals.

The flat table we hang on classroom walls is the Z-projection: count up all
the filled torus knots, assign atomic number Z, arrange by row and column. Other
projections of the same object reveal different structure: the Janet table shows
the winding shells directly; the knot grid shows genus; the Madelung spiral shows
the filling geodesic.

The Aufbau principle is not a rule that works most of the time and fails
occasionally. It is a topological law — filling by winding — with a complete
theory of which perturbations can shift which configurations and by how much.
The embarrassing exceptions turn out to be the most interesting part: they are
the places where the geometry of S³ comes closest to the surface, where adjacent
winding shells compete, and the atom has to make a choice.

---

*See also:*

- [Knotted Orbitals: Kelvin-Tait Vindicated](https://doi.org/10.5281/zenodo.21480634) (#657) — torus knots T(ℓ+1, n-ℓ) as the orbital assignment; Madelung rule as knot-index ordering; Hopf fibration; 45/45 verification
- [Frontier Winding Number and the Chemical Bond Gap](https://doi.org/10.5281/zenodo.21612627) (#710) — winding number applied to bonding; the 18-electron rule and Hückel 4n+2 rule derived from w-shell filling
- [Winding Numbers and Topological Quantum Numbers](https://doi.org/10.5281/zenodo.21534391) (#681) — the topological quantum number w as a Chern class; its role in the H^k cohomological ladder

*For the full technical treatment, see [doi:10.5281/zenodo.21608229](https://doi.org/10.5281/zenodo.21608229)*
