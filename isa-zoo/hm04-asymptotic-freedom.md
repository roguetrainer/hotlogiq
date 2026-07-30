---
layout: default
title: "HM04 — Asymptotic Freedom (FLOW Fixed Point at g=0)"
parent: ISA Zoo
nav_exclude: true
semiring: quantum
---

# HM04 — Asymptotic Freedom

| Field | Value |
|-------|-------|
| **Domain** | Quantum Chromodynamics |
| **System** | QCD coupling α_s at high energy |
| **Group** | SU(3) colour gauge symmetry |
| **H^k tier** | H³ (RG FLOW fixed point) |
| **ISA** | Hum (β = it/ℏ; RG as FLOW) |
| **Status** | Validated (Nobel Prize 2004) |
| **Opcodes** | FLOW · ORBIT · EMIT |
| **Papers** | [Paper 620](https://doi.org/10.5281/zenodo.21416912) |

---

## Physical system

In quantum chromodynamics (QCD), the strong coupling constant α_s decreases
at high energy (short distance) and increases at low energy (long distance).
At high energy, quarks behave as free particles — this is **asymptotic freedom**
(Gross, Politzer, Wilczek 1973, Nobel 2004). At low energy, quarks are
permanently confined in hadrons.

The RG β-function (the rate of change of the coupling with energy scale Λ):

β_QCD(g) = dg/d ln Λ = −(11N_c − 2N_f)/(48π²) · g³ + O(g⁵)

For SU(3) with N_c=3 colours and N_f ≤ 16 flavours: β_QCD(g) < 0.
The negative sign means g decreases as Λ increases: UV fixed point at g*=0.

## ISA interpretation

In the Hum ISA, the RG β-function is **FLOW at the UV scale**:

FLOW(Λ → Λ−δΛ): g(Λ) → g(Λ) + β_QCD(g) · δΛ/Λ

The UV fixed point g*=0 is the Hum ISA's FLOW fixed point — the β* snap
at infinite UV scale. FLOW(Λ→∞) drives g→0: ORBIT(quarks) approaches
free-field ORBIT (no coupling).

Contrast with QED: β_QED(α) > 0. FLOW(Λ→∞) drives α→∞ (Landau pole):
ORBIT(electrons) becomes infinitely coupled at the UV. QED is not UV-complete
in the Hum ISA sense.

**FLOW phase portrait:**

| Theory | β_RG sign | UV behaviour | FLOW fixed point |
|--------|-----------|--------------|-----------------|
| QCD (SU(3), N_f ≤ 16) | negative | α_s → 0 | g* = 0 (UV-free) |
| QED | positive | α → ∞ (Landau) | none below cutoff |
| N=4 SYM | zero | α fixed | g* = any (conformal) |

N=4 SYM (the amplituhedron theory, HM07) has β_RG = 0 exactly: FLOW is
the identity, the theory is scale-invariant, and the ORBIT on the
amplituhedron is defined without any FLOW parameter.

## ISA programme

```
PROGRAM Asymptotic_freedom [QCD, SU(3), N_f flavours]

; RG flow: FLOW as energy-scale deformation
FOR Λ FROM Lambda_IR TO Lambda_UV:
    FLOW(Λ → Λ + dΛ):
        g(Λ+dΛ) = g(Λ) + beta_QCD(g) * dΛ/Λ
        ; beta_QCD(g) = -(11*3 - 2*N_f)/(48*pi^2) * g^3

; UV fixed point
LABEL[g* = 0 | FLOW fixed point at Λ → ∞]

; IR confinement (open: ORBIT fails to close)
LABEL[alpha_s(Λ_QCD ~ 200 MeV) ~ 1 | strong coupling regime]
; At this scale, ORBIT[quarks] no longer closes individually:
; quarks are confined to BIND[H2] structures (hadrons)
```

## Connections

- **HM05** (Confinement): asymptotic freedom and confinement are two faces
  of the same FLOW trajectory. At UV: g → 0, quarks are free (ORBIT closes).
  At IR: g → ∞, ORBIT[quark] fails to close alone — confinement.
- **HM07** (Amplituhedron): N=4 SYM has β_RG = 0 (scale-invariant);
  the amplituhedron is defined without a FLOW parameter. Asymptotic freedom
  is QCD's non-conformal version of the same Grassmannian structure.
- **ST01** (Metropolis): the RG β-function is the Hum ISA analogue of the
  MGE routing function p(β, ΔF) in the Forge ISA (Paper 597). Both are
  FLOW fixed-point equations; both have a β* snap (UV fixed point / accept rate).

## Validation

- Gross & Wilczek (1973), PRL 30, 1343; Politzer (1973), PRL 30, 1346:
  calculation of β_QCD < 0 for SU(N_c) gauge theory.
- Nobel Prize in Physics 2004 (Gross, Politzer, Wilczek).
- α_s measurements: PARTICLE DATA GROUP average α_s(M_Z) = 0.1180 ± 0.0009
  (Z-boson mass scale); α_s(1 TeV) ≈ 0.08 (running confirmed to LHC scales).

---

*Part of the [ISA Zoo](/isa-zoo/).
Hum ISA reference: [Paper 620](https://doi.org/10.5281/zenodo.21416912).*
