---
layout: default
title: "Why Blood is Red, Leaves are Green, and B12 is Pink"
parent: Explainers
nav_exclude: true
tags: [porphyrin, haem, chlorophyll, cobalamin, b12, blue-copper, hitchin-geometry, affine-geometry, metal-selectivity, entatic-state, soret-band, pat-2, macrocycle-catalysis, origami-isa]
portfolio: A
---

## Why Blood is Red, Leaves are Green, and B12 is Pink

*Plain-language explainer for [doi:10.5281/zenodo.21613237](https://doi.org/10.5281/zenodo.21613237) (#705)*

---

## The molecule evolution keeps reaching for

Blood is red because of haem. Leaves are green because of chlorophyll. Vitamin B12 is pink because of cobalamin. These three molecules look completely different on the surface — and they carry out completely different jobs — but they are built around the same underlying scaffold: a ring of four nitrogen atoms arranged in a square, gripping a metal ion at the centre.

This scaffold is called a porphyrin (or a close variant of one). Evolution discovered it approximately three billion years ago and has been using it ever since. It shows up wherever life needs to do something demanding with electrons: grab oxygen from the air, capture a photon, shuttle electrons down a respiratory chain, generate a radical to rearrange a molecule. The question the paper asks is: why this scaffold, and why does each job require a specific metal?

---

## The geometry hiding inside the ring

Four nitrogen atoms in a square. Six ways to draw a line between any two of them. Three ways to pair them into two non-intersecting pairs.

If you have encountered the Fano plane — the seven-point projective geometry that keeps appearing in mathematics — this structure will look familiar. It is the Fano plane with three points removed. Specifically, it is what mathematicians call AG(2,2): the affine plane of order two. Mathematicians say you get AG(2,2) by taking the Fano plane and deleting its "line at infinity."

The paper argues that this is not a coincidence. When a metal ion drops into the centre of a porphyrin ring, it is — in a precise geometric sense — occupying the position of the deleted line. The act of metal binding *is* the removal of the line at infinity. The four nitrogens are the four "affine points" left behind.

The paper calls this PAT-2: a Projective-to-Affine Transition of order 2. It is a general framework: take a projective geometry, remove a line, and you have exposed an affine structure that can do useful chemistry.

---

## The critical energy: one number rules them all

Each metal ion has a characteristic energy called its Hitchin critical energy — ε_crit, measured in electron-volts (eV). This number reflects how easy it is to push the metal's electronic state across a threshold: too easy and the metal is dangerously reactive; too hard and the metal is catalytically useless.

The porphyrin scaffold provides what the paper calls an ε-window: a range of ε_crit values (roughly 1.0 to 2.2 eV) within which a metal can be catalytically competent. Metals whose ε_crit falls below 1.0 eV are toxic — they cross their threshold spontaneously, producing uncontrolled chemistry. Metals above 2.2 eV are inert — they cannot be pushed across at all under biological conditions.

The paper tests this against eleven metals that chemists have experimentally inserted into porphyrin rings. All eleven are correctly classified — no fitting parameters, just the ionic radius of the metal and the geometry of the ring.

| Metal | ε_crit (eV) | Outcome |
|-------|-------------|---------|
| Fe²⁺ | 1.09 | Haem — oxygen binding |
| Mg²⁺ | ≈2.01 | Chlorophyll — photon capture |
| Co³⁺ | 2.15 | Cobalamin — radical chemistry |
| Zn²⁺ | 1.93 | Viable zinc chlorophylls |
| Pb²⁺ | 0.71 | Toxic (displaces Mg in plants) |
| Hg²⁺ | 0.82 | Toxic (enzyme inhibitor) |
| Cd²⁺ | 0.91 | Toxic (displaces Zn, inactivates) |

Lead, mercury, and cadmium are in the bottom three. Their ionic radii are large — they sit too loosely in the porphyrin cavity — and their ε_crit falls well below 1.0 eV. When they muscle into a porphyrin ring (which they do, because thermodynamics allows it), the resulting complex crosses its threshold spontaneously and generates uncontrolled reactive chemistry. Heavy-metal toxicity, in this picture, is branch-point poisoning.

---

## Why haem uses iron and chlorophyll uses magnesium

Fe²⁺ has ε_crit = 1.09 eV. That is well within the ε-window, but on the low side: it sits in the thermal-activation regime, where ordinary molecular motion at body temperature is enough to nudge the system toward the threshold. Oxygen binding nudges it the rest of the way. The result is a finely controlled reaction: the haem cycles back and forth across the branch point each time it picks up and releases O₂. This is precisely what haemoglobin needs.

Now ask why Fe²⁺ would fail in chlorophyll. In chlorophyll, the crossing must be triggered by a photon — nothing else. An iron porphyrin at ε_crit = 1.09 eV cannot be reliably held below threshold by thermal fluctuations alone. It would cross spontaneously, wasting the photon's energy before it could be used. Iron chlorophyll would be a leaky capacitor.

Mg²⁺ has ε_crit ≈ 2.0 eV in water, dropping to about 1.78 eV inside the macrocycle. That is high enough that room-temperature fluctuations cannot budge it — but low enough that a red photon (1.82 eV) can push it across cleanly. Magnesium chlorophyll is photon-gated in exactly the way the plant requires. No other common divalent cation sits in this narrow sweet spot. Zinc is the only backup (ε_crit ≈ 1.93 eV), and some cyanobacteria do use zinc chlorophyll when magnesium runs low — but with a slightly smaller safety margin.

---

## The Soret band: why porphyrins are so intensely coloured

If you have ever made a cup of tea with a bag that leaked, you have seen the reddish-brown of haem. Porphyrins are extraordinarily good at absorbing light — the Soret band (the intense absorption peak around 400 nm, at the blue-violet edge of the visible spectrum) is one of the strongest absorptions in all of biochemistry.

The paper identifies the Soret band as twice the critical energy of the porphyrin ring's own π-electron system: E_Soret = 2ε_crit(π). For haem b, ε_crit(π) = 1.562 eV, giving a predicted Soret energy of 3.124 eV — observed at 3.10 ± 0.05 eV (400 nm). Less than 1% error.

The standard explanation for porphyrin spectra — the Gouterman four-orbital model, developed in 1961 — identifies four frontier orbitals responsible for the absorption pattern. That model works, but it is empirical. The paper shows the four-orbital structure emerges as a corollary of the spectral-curve geometry: the four orbitals are just the two sheets of the spectral curve, each with two branches. The Gouterman model is the shadow of a deeper geometry.

---

## Blue copper proteins: the strained intermediary

Plastocyanin and azurin — the "blue copper" proteins of photosynthesis and bacterial respiration — are neither square-planar (which Cu²⁺ prefers) nor regular tetrahedral (which Cu⁺ prefers). They sit in an awkward distorted tetrahedral geometry that neither oxidation state wants. The protein spends conformational energy to hold the copper there.

This unusual geometry has a name: the entatic state, coined by Vallee and Williams in 1968. The idea is that the protein pre-strains the metal site to make it catalytically ready. But why this particular geometry?

The paper gives the geometric answer. Regular square-planar Cu²⁺ has ε_crit ≈ 2.2 eV — too high to cross easily. Regular tetrahedral Cu⁺ has ε_crit ≈ 0.8 eV — too low, it crosses spontaneously. The distorted tetrahedral geometry of the entatic state lands at ε_crit ≈ 1.6 eV — right at the branch point for physiological electron-transfer rates. The protein is doing exactly what a good engineer would do: holding the reactive centre at the point of maximum sensitivity. The strain energy the protein spends is recovered as speed — the entatic copper transfers electrons far faster than either of its resting geometries could manage.

---

## Cobalamin: the weakest bond in biology is a feature, not a bug

Vitamin B12 (adenosylcobalamin) has a cobalt-carbon bond with a dissociation energy of about 130 kJ/mol — roughly a third of an ordinary C–C bond. This fragility is the whole point. Enzymes using B12 snap this bond homolytically to generate a carbon radical, which then drives difficult rearrangements in metabolism.

The corrin ring in B12 is a close cousin of porphyrin with a subtle difference: one methine bridge is absent and one pyrrole ring is reduced, cutting the ring's π-electron count from 18 to 14. This reduction in conjugation raises ε_crit(π) for the corrin ring relative to a porphyrin. The consequence: Co³⁺ in corrin sits just below the threshold for Co–C bond homolysis. The enzyme active site needs only a small conformational push — about 0.10 eV — to tip the bond over the edge.

A cobalt porphyrin (with the full 18π ring) would require a different, closed ring that locks Co³⁺ further from the Co–C threshold. To achieve the same radical chemistry, biology would need a reductant strong enough to provide about -0.95 V — outside the range of any biological electron donor. The corrin ring, with its 22% ring vacancy, shifts ε_crit just enough that the Co³⁺/Co(I) couple sits at -0.61 V, within reach of ordinary cellular reductants. Nature chose corrin over porphyrin for B12 because of a topological calculation, even if it did not know that is what it was doing.

---

## What this unifies

Before this paper, the rules governing metal selection in biological macrocycles were described as a collection of separate mechanisms: ligand-field theory for transition metals, hard-soft acid-base rules for selectivity, Marcus theory for electron-transfer rates, and photophysics for light harvesting. Each framework is correct within its domain. None of them explains why Fe²⁺ and Mg²⁺ use the same ring scaffold for completely different purposes.

The PAT-2 picture gives a single answer: the porphyrin ring is a four-nitrogen affine geometry with a tunable ε-window. The metal selects the sub-task. The ring periphery and axial ligands fine-tune the window. The protein scaffold pins the metal at exactly the right position within the window for the required catalytic function. The diversity of porphyrin biology — oxygen transport, photosynthesis, electron relay, radical generation, methanogenesis — is the diversity of what can be accomplished within a single geometric framework by varying one parameter.

---

*See also:*

- [PG→AG Bonding Theory](https://doi.org/10.5281/zenodo.21535906) (#688) — chemical bonds as line-at-infinity removal; the framework this paper applies
- [PAT-3 as Universal Biological Catalyst Scaffold](https://doi.org/10.5281/zenodo.21536621) (#689) — thirteen-atom active sites from PG(2,3); PAT-3 at the CcO oxygen-reduction site
- [The ε-cycle](https://doi.org/10.5281/zenodo.21569564) (#700) — the microscopic Carnot engine at the Hitchin branch point
- [The OEC as a PAT-3 Maxwell Demon](https://doi.org/10.5281/zenodo.21613233) (#704) — four-electron water oxidation as four sequential ε-crossings

*For the full technical treatment, see [doi:10.5281/zenodo.21613237](https://doi.org/10.5281/zenodo.21613237)*
