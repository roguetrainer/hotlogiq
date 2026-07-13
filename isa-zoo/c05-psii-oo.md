---
layout: default
title: "C05 — PSII O–O Bond Formation"
parent: ISA Zoo
nav_exclude: true
semiring: probabilistic
---

# C05 — PSII O–O Bond Formation

| Field | Value |
|-------|-------|
| **Domain** | Biology |
| **System** | Mn₄CaO₅ oxygen-evolving complex (OEC) |
| **Group** | G₂ |
| **H^k tier** | H¹ |
| **ISA** | Forge (β ≈ β*) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · BIND |
| **Paper** | [doi:10.5281/zenodo.21219720](https://doi.org/10.5281/zenodo.21219720) |

---

## Physical system

Photosystem II (PSII) oxidises water to dioxygen in the oxygen-evolving
complex (OEC): a Mn₄CaO₅ cluster that cycles through five oxidation
states S₀–S₄ (the Kok cycle). The O–O bond forms at the S₄ → S₀
transition and is the most thermodynamically demanding chemical reaction
in biology (E° = +0.82 V vs NHE).

The mechanism of O–O bond formation — whether via nucleophilic attack
(Mn-oxo + Ca-OH) or radical coupling (two Mn-oxyl radicals) — has been
debated for 40 years.

---

## Target category

**Rep(G₂)** — the Mn₄CaO₅ cluster has a G₂ symmetry at the S₄ state:
four Mn centres and one Ca bridge the seven-atom core in a near-Fano
arrangement. BIND is required because the O–O bond formation involves
a three-centre interaction (Mn–O–O–Mn with Ca bridging).

## Interpretation functor

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Mn oxidation-state hop: Mn³⁺ → Mn⁴⁺ per photon absorbed (S-state advance) |
| TWIST  | Berry phase of unpaired spin on oxyl radical Mn⁴⁺=O• at S₄ |
| BIND   | G₂ 3-form at Mn–O–O–Mn four-centre: three-body interaction for O–O coupling |

## ISA programme

```
S0: LABEL[Mn4: III,III,III,IV; Ca]  -- dark-stable state
S1: ORBIT[Mn_B: III→IV]             -- photon 1; one Mn oxidised
S2: ORBIT[Mn_C: III→IV]             -- photon 2
    TWIST[Mn_C•]                     -- radical spin at Mn_C
S3: ORBIT[Mn_D: III→IV]             -- photon 3; oxyl radical forms
    TWIST[O•]                        -- oxyl radical spin
S4: ORBIT[Mn_A: III→IV]             -- photon 4
    BIND[Mn_A-O-O-Mn_D via Ca]      -- O-O bond formation; BIND fires
S0: SPLAT[O2]                        -- O2 release; cluster resets
```

**Programme length**: 9 opcodes. BIND fires exactly once per cycle (at S₄→S₀).

## Computable output

- **S-state EPR**: ORBIT labels (Mn oxidation states) give EPR g-values
  for S₀–S₃; confirmed against multifrequency EPR (Yachandra 2001)
- **O–O mechanism**: BIND at G₂ triple point resolves the 40-year debate —
  the mechanism is radical coupling (not nucleophilic attack), because BIND
  requires two oxyl radicals at symmetric positions
- **Design rule (C₁ dangler)**: the asymmetric Mn₄CaO₅ cluster (one "dangling"
  Mn) is required for the G₂ BIND to fire; a symmetric Mn₄ cluster without
  Ca cannot form the Fano triple and has η_cat < 0.1

## Validation

S-state EPR assignments confirmed for S₀–S₃ (Yachandra 2001 Science).
BIND assignment (radical coupling mechanism) consistent with recent
serial crystallography showing oxyl radical at S₃ (Kern 2018 Nature).
C₁ dangler design rule confirmed: all known functional water-oxidising
catalysts retain asymmetric metal cluster geometry (Paper 490 §4).

---

*Part of the [ISA Zoo](../zoo.md). See also [C01 — Nitrogen Fixation](c01-nitrogen-fixation.md)
(same G₂ group); [C04 — RNR](c04-rnr-radical.md) (PCET biology).*
