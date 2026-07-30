---
layout: default
title: "HM01 — Lamb Shift (H⁰ → H³ Cross-Tier Coupling)"
parent: ISA Zoo
nav_exclude: true
semiring: quantum
---

# HM01 — Lamb Shift

| Field | Value |
|-------|-------|
| **Domain** | Quantum Electrodynamics |
| **System** | Hydrogen atom, 2S½ and 2P½ levels |
| **Group** | U(1) gauge symmetry of QED |
| **H^k tier** | H⁰ → H³ (cross-tier coupling) |
| **ISA** | Hum (β = it/ℏ) |
| **Status** | Validated to < 1% |
| **Opcodes** | ORBIT · EMIT · FLOW · ERASE |
| **Papers** | [Paper 620](https://doi.org/10.5281/zenodo.21416912) |

---

## Physical system

The Lamb shift is the 1058 MHz splitting between the 2S½ and 2P½ levels
of hydrogen. Dirac's equation — which correctly describes all H¹-tier atomic
structure — predicts exact degeneracy between these levels. The observed
splitting arises entirely from virtual photon emission and reabsorption:
the electron couples to the zero-point fluctuations of the electromagnetic
field differently in the 2S (spherical, non-zero contact density |ψ(0)|²)
and 2P (vanishing contact density) states.

Willis Lamb and Robert Retherford measured the shift in 1947 using microwave
spectroscopy. Hans Bethe calculated it within a week using non-relativistic
QED. The Lamb shift was the first precision test of quantum field theory and
the experimental result that launched renormalisation as a serious programme.

## ISA interpretation

The Lamb shift is the **minimal experiment that requires the H³ tier**.

In the ISA grading, orbital wavefunctions are H⁰ objects (ORBIT opcode:
occupancy without phase). The electron-photon vertex is H³ (EMIT opcode:
particle-field coupling at the field-theoretic tier). The Lamb shift arises
from an H⁰ → H³ cross-tier coupling: the contact density |ψ(0)|² (an H⁰
quantity) feeds into the EMIT vertex amplitude (an H³ process), creating an
orbital-dependent shift that is invisible at H¹ (the tier where Dirac works).

**Without EMIT, the shift is zero.** The Hum ISA makes this explicit: the
Lamb shift is the first observable that cannot be computed without the new
H³ primitive.

## ISA programme

```
PROGRAM Lamb_shift_1loop
; Input: hydrogen atom in 2S or 2P orbital
ORBIT(electron, n=2, l=0, j=1/2)   ; 2S state (l=1 for 2P)

; Virtual photon loop: emit, propagate (self-energy), reabsorb
FOR k IN photon_modes:              ; FLOW(beta=it/hbar) — Wick-rotated sum
    EMIT(electron, photon, k, e)
    PROPAGATE(photon, k, x->x)     ; self-energy: same spacetime point
    ABSORB(electron, photon, k)    ; ABSORB = EMIT-dagger

; The H0->H3 cross-tier coupling: contact density selects S vs P
; 2S: |psi(0)|^2 != 0  ->  delta_E != 0
; 2P: |psi(0)|^2  = 0  ->  delta_E  = 0

RENORM(Sigma_bare)                 ; subtract free-electron self-energy
OUTPUT delta_E(2S) - delta_E(2P)  ; predicted: ~1058 MHz
```

## Computable output

Bethe's formula (Rydberg units, n=2, 2S state):

δE(2S) = (4α³/3π) · (2/n³) · Ry · B

where B = ln(2/α²) − ⟨ln(ΔE/Ry)⟩ = 10.534 − 2.811 = 7.723
(using Bethe 1947 Table I for the 2S geometrically-averaged excitation energy).

With α = 1/137.036, Ry = 13.606 eV: **δE(2S) = 1047.5 MHz**.

- vs Bethe original (~1040 MHz): 0.7% agreement
- vs experiment (1057.845 MHz): 1.0% agreement
- Residual (~10 MHz): relativistic corrections (Kroll-Lamb 1949)

Validated by script x620a\_bethe\_lamb\_shift.py (PASS).

## Connections

- **MO01** (Motive ISA): EMIT is the one new primitive that extends MO01 to QFT.
  Without EMIT, δE = 0 (Dirac's result); with EMIT, δE ≠ 0.
- **HM07** (Amplituhedron): in the Grassmannian basis, EMIT survives but
  PROPAGATE and RENORM dissolve. The Lamb shift in the Grassmannian basis
  would be a single ORBIT on the appropriate positive geometry — an open problem.
- **PT01** (PT-symmetric system): the Lamb shift β* (operating frequency
  1058 MHz / c) is not the Motive ISA β*, but the coupling hierarchy
  α → α³ is the same "three IMAGINE steps to reach H³" structure.

## Validation

- Lamb & Retherford (1947), Phys. Rev. 72, 241: measurement, 1058 MHz.
- Bethe (1947), Phys. Rev. 72, 339: non-relativistic calculation, ~1040 MHz.
- Kroll & Lamb (1949), Phys. Rev. 75, 388: relativistic correction, closing
  the 10 MHz gap.
- Modern value: 1057.8446 ± 0.0029 MHz (CODATA 2018).

---

*Part of the [ISA Zoo](/isa-zoo/).
Hum ISA reference: [Paper 620](https://doi.org/10.5281/zenodo.21416912).*
