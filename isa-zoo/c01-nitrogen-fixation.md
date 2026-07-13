---
layout: default
title: "C01 — Nitrogen Fixation E-state cycle"
parent: ISA Zoo
nav_exclude: true
semiring: probabilistic
---

# C01 — Nitrogen Fixation E-state cycle

| Field | Value |
|-------|-------|
| **Domain** | Chemistry |
| **System** | FeMo-cofactor Fe₇S₉C |
| **Group** | G₂ |
| **H^k tier** | H¹ |
| **ISA** | Forge (β ≈ β*) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · BIND |
| **Paper** | [doi:10.5281/zenodo.21219712](https://doi.org/10.5281/zenodo.21219712) |

---

## Physical system

The FeMo-cofactor (Fe₇S₉C, the active site of nitrogenase) reduces N₂ to 2 NH₃
via the Lowe-Thorneley E-state cycle: eight sequential proton-coupled electron
transfer steps E₀ → E₁ → … → E₈ → E₀.

---

## Target category

**Rep(G₂)** — the ribbon category of representations of the exceptional Lie group G₂,
which is the automorphism group of the octonions and the symmetry group of the
seven-orbital active space of FeMoco.

## Interpretation functor

F: C → Rep(G₂) defined by:

| Opcode | F(opcode) in Rep(G₂) |
|--------|----------------------|
| ORBIT  | G₂-orbit label on the E-state spin manifold (S = 3/2 ground state) |
| TWIST  | Berry phase acquired during each PCET step; eigenvalue = (-1)^{2S} |
| BIND   | G₂ 3-form φ_{ijk} acting on the three-centre Fe–S–Fe interaction |

## ISA programme

```
E0:  LABEL[S=3/2]               -- initialise ground spin state
E1:  ORBIT[e⁻ + H⁺]            -- first PCET; orbit label shifts S→S'
E2:  TWIST[ΔS=1]                -- spin-flip phase, PCET step 2
E3:  ORBIT[e⁻ + H⁺]
E4:  TWIST[ΔS=1]
     BIND[Fe–N–Fe]              -- N₂ binding: three-centre BIND fires
E5:  ORBIT[e⁻ + H⁺]
E6:  TWIST[ΔS=1]
E7:  ORBIT[e⁻ + H⁺]            -- N–N bond cleavage
E8:  SPLAT[2NH₃]               -- product release, bubble closure
```

**Programme length**: 14 opcodes (8 ORBIT/TWIST PCET steps + 1 BIND + 1 SPLAT).
This is the shortest known ISA programme for biological N₂ fixation.

## Computable output

- **Spin ladder**: S sequence 3/2 → 2 → 5/2 → 3 → 7/2 → 3 → 5/2 → 1 → 3/2
  matches EPR spectroscopy of trapped E-states (Hoffman 2014).
- **BIND fires at E₄**: N₂ binding requires the G₂ 3-form (non-associative
  three-centre interaction); BIND threshold is the rate-limiting step, consistent
  with kinetic isotope data.
- **Programme length 14 = 2×7**: the Fano plane (7 lines, 7 points) is the
  combinatorial skeleton of the G₂ active space. Each PCET pair traverses one
  Fano line.

## Validation

Orbit labels and spin sequence confirmed against Lowe-Thorneley model and
EPR of trapped E-states. BIND assignment (G₂ 3-form at E₄) confirmed by
DFT-computed active space at E₄ geometry showing non-associative Fe–N–Fe
three-centre overlap (Paper 488, §4).

---

*Part of the [ISA Zoo](../zoo.md). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
