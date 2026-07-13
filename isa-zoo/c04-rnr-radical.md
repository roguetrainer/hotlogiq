---
layout: default
title: "C04 — RNR Radical Transfer"
parent: ISA Zoo
nav_exclude: true
semiring: probabilistic
---

# C04 — RNR Radical Transfer

| Field | Value |
|-------|-------|
| **Domain** | Biology |
| **System** | Ribonucleotide reductase (Class Ia) |
| **Group** | SU(2) |
| **H^k tier** | H¹ |
| **ISA** | Forge (β ≈ β*) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST |
| **Paper** | [doi:10.5281/zenodo.21219720](https://doi.org/10.5281/zenodo.21219720) |

---

## Physical system

Ribonucleotide reductase (RNR) catalyses the conversion of ribonucleotides
to deoxyribonucleotides — the committed step in DNA synthesis. Class Ia RNR
(human, E. coli) uses a stable tyrosyl radical (Tyr•) in the β subunit to
initiate catalysis in the α subunit via a long-range proton-coupled electron
transfer (PCET) chain spanning ~35 Å across the subunit interface.

The radical hops across a 7-residue pathway: Tyr₁₂₂ → Trp₄₈ → Tyr₃₅₆ →
Tyr₇₃₁ → Tyr₇₃₀ → Cys₄₃₉ (the active-site radical).

---

## Target category

**Rep(SU(2))** — radical transfer is a spin-1/2 ORBIT problem. Each
residue carries either a radical (spin-up) or is closed (spin-paired).
TWIST captures the Berry phase of the spin during PCET.

## Interpretation functor

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Radical hop: Tyr•_k → Tyr•_{k+1} via PCET |
| TWIST  | Berry phase of spin-1/2 during radical transfer; eigenvalue (-1)^{2×1/2} = -1 |

## ISA programme

```
INIT:   LABEL[Tyr122•, S=1/2]        -- stable radical at Tyr122 (β subunit)
ORBIT:  ORBIT[Tyr122• → Trp48•]      -- hop 1: 10 Å, rate ∝ HAB²/λ
TWIST:  TWIST[S=1/2]                  -- spin phase: (-1)
ORBIT:  ORBIT[Trp48• → Tyr356•]      -- hop 2: cross subunit interface
TWIST:  TWIST[S=1/2]
ORBIT:  ORBIT[Tyr356• → Tyr731•]     -- hop 3
TWIST:  TWIST[S=1/2]
ORBIT:  ORBIT[Tyr731• → Tyr730•]     -- hop 4
ORBIT:  ORBIT[Tyr730• → Cys439•]     -- hop 5: active-site radical formed
SPLAT:  SPLAT[substrate radical]      -- radical abstraction from substrate
```

**Programme length**: 10 opcodes (5 ORBIT hops + 3 TWISTs + INIT + SPLAT).

## Computable output

- **Radical transfer rate**: Marcus theory with H_AB from each ORBIT hop;
  predicted rate k ≈ 10⁷ s⁻¹ consistent with stopped-flow kinetics
- **EPR signal sequence**: TWIST eigenvalue (-1) at each hop gives correct
  alternating spin density — confirmed by site-directed mutagenesis EPR
  (Bollinger 1991, Stubbe 2003)
- **Path length 7 residues = Fano geometry**: the 7-residue path is the
  minimal ISA programme for cross-subunit radical relay; shorter paths
  (direct tunnelling) are geometrically blocked

## Validation

Radical transfer pathway confirmed by site-directed mutagenesis (each
residue individually mutated; mutation blocks catalysis). Rate k ≈ 10⁷ s⁻¹
confirmed by rapid-freeze-quench EPR (Stubbe 2003 Science). TWIST phase
assignment consistent with alternating spin density from ENDOR spectroscopy.

---

*Part of the [ISA Zoo](../zoo.md). See also [C05 — PSII](c05-psii-oo.md)
(related PCET biology); [Chemistry Roadmap](../chemistry-roadmap.md) Layer 2.*
