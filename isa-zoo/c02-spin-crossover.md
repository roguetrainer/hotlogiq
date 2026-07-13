---
layout: default
title: "C02 — Fe(II) Spin Crossover"
parent: ISA Zoo
nav_exclude: true
semiring: tropical
---

# C02 — Fe(II) Spin Crossover

| Field | Value |
|-------|-------|
| **Domain** | Chemistry |
| **System** | [Fe(L)₄(NCS)₂] class |
| **Group** | SU(2) |
| **H^k tier** | H⁰ |
| **ISA** | Forge (β ≈ β*) |
| **Status** | Validated |
| **Opcodes** | ORBIT · LABEL |
| **Paper** | [doi:10.5281/zenodo.21224107](https://doi.org/10.5281/zenodo.21224107) |

---

## Physical system

Fe(II) spin-crossover (SCO) complexes switch reversibly between a low-spin
(LS, S=0) and high-spin (HS, S=2) state under temperature, pressure, or light.
The transition is sharp (first-order in many cases) and occurs at a critical
temperature T* that depends on the ligand field strength Δ_oct.

---

## Target category

**Rep(SU(2))** — the ribbon category of angular momentum representations.
ORBIT labels are the spin-state quantum numbers S=0 (LS) and S=2 (HS).

## Interpretation functor

F: C → Rep(SU(2)) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| LABEL  | Spin-state assignment: S=0 (LS) or S=2 (HS) |
| ORBIT  | G-orbit on the d-shell: t₂g⁶ (LS) or t₂g⁴eg² (HS) |

## ISA programme

```
INIT:  LABEL[S=0, t2g^6]          -- low-spin ground state at T < T*
SNAP:  ORBIT[t2g^4 eg^2, S=2]     -- β* snap at T = T*; orbit label switches
OUT:   LABEL[S=2]                  -- high-spin product
```

**Programme length**: 3 opcodes. The snap event is a β* transition in the
MGE — the free energy surfaces of LS and HS cross at T*.

## Computable output

- **T* prediction**: β* = Δ_oct / (k_B ln(g_HS/g_LS)) where g is the
  degeneracy of each spin state. Matches experiment to within 5K for the
  [Fe(phen)₂(NCS)₂] benchmark.
- **20/20 SCO benchmark**: ORBIT label (LS or HS ground state) correctly
  assigned for all 20 test complexes in Paper 488; DFT correct on 14/20.
- **Gate interpretation**: each SCO complex is a bistable bit; the β* snap
  is the switching event. Arrays of SCO complexes are classical H⁰ memory.

## Validation

ORBIT label (spin-state assignment) validated against experiment for 20 SCO
complexes. T* from β* formula validated against differential scanning calorimetry
for [Fe(phen)₂(NCS)₂] (T* = 176 K experimental, 181 K predicted).

---

*Part of the [ISA Zoo](../zoo.md). See also: [Chemistry Roadmap](../chemistry-roadmap.md) Layer 0.*
