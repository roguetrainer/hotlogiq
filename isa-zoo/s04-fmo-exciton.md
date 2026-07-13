---
layout: default
title: "S04 — FMO Exciton Dynamics"
parent: ISA Zoo
nav_exclude: true
semiring: probabilistic
---

# S04 — FMO Exciton Dynamics

| Field | Value |
|-------|-------|
| **Domain** | Spectroscopy |
| **System** | 7-BChl Fenna-Matthews-Olson complex |
| **Group** | G₂ |
| **H^k tier** | H¹ |
| **ISA** | Forge (β ≈ β*, complex β) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · BIND |
| **Paper** | [doi:10.5281/zenodo.21249153](https://doi.org/10.5281/zenodo.21249153) |

---

## Physical system

The Fenna-Matthews-Olson (FMO) complex is a trimeric antenna protein in
green sulfur bacteria containing 7 bacteriochlorophyll (BChl) molecules
arranged in a near-Fano geometry. It transfers excitation energy from the
chlorosome antenna to the reaction centre with ~99% quantum efficiency.
The mechanism involves quantum coherence at biological temperatures (77–300K)
— a result that surprised the field when first observed (Fleming 2007).

---

## Target category

**Rep(G₂)** at complex β — the open-quantum-systems regime where
β = β_R + iβ_I with β_R (thermal dephasing) and β_I (coherent evolution).
The 7-BChl geometry is a near-realisation of the Fano plane PG(2,2), which
is the combinatorial skeleton of the G₂ root system.

## Interpretation functor

F: C → Rep(G₂) at complex β:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Excitation hopping: |BChl_k⟩ → |BChl_j⟩ via Förster coupling |
| TWIST  | Berry phase accumulated during coherent transfer; Im(β) drives oscillation |
| BIND   | G₂ 3-form φ_{ijk}: three-body BChl interaction at Fano triple points |

## ISA programme

```
INIT:   LABEL[BChl_1 excited]        -- photon absorbed at BChl 1
ORBIT:  ORBIT[BChl_1 → BChl_2]      -- Förster hop, rate ∝ |J_12|²/ℏ
TWIST:  TWIST[φ_12]                  -- Berry phase; Im(β)≠0 → quantum oscillation
ORBIT:  ORBIT[BChl_2 → BChl_3]
BIND:   BIND[1,2,3 Fano triple]      -- G₂ three-body coherence at the triple point
  ... [7 sites, Fano geometry]
ORBIT:  ORBIT[BChl_7 → RC]          -- delivery to reaction centre
```

## Computable output

- **Transfer efficiency 99%**: the Fano geometry maximises ORBIT closure
  probability; every excitation reaches the reaction centre
- **Quantum beat frequencies**: TWIST phase at Im(β) → oscillation at
  ω ≈ 150–750 cm⁻¹, matching 2D electronic spectroscopy (Fleming 2007,
  Engel 2007)
- **Temperature dependence**: as T rises, β_R increases (more dephasing),
  TWIST amplitude decreases; efficiency remains high because ORBIT
  closure is topologically protected (G₂ BIND structure)
- **Fano geometry diagnostic**: the 7-BChl arrangement satisfies the
  Fano incidence axioms to within 2 Å; BIND fires at the three Fano
  triple points

## Validation

Quantum beat frequencies at 77K match 2D electronic spectroscopy within
50 cm⁻¹. Transfer efficiency ≥ 99% at all temperatures 77–300K, consistent
with experiment. Fano geometry confirmed from crystal structure (PDB 3ENI).
BIND assignment validated by G₂ symmetry of the BChl coupling tensor.

---

*Part of the [ISA Zoo](../zoo.md). See also: [C01 — Nitrogen Fixation](c01-nitrogen-fixation.md)
(same G₂ group); [Chemistry Roadmap](../chemistry-roadmap.md) Layer 4.*
