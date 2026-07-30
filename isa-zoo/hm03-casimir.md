---
layout: default
title: "HM03 — Casimir Effect (PROPAGATE Without EMIT)"
parent: ISA Zoo
nav_exclude: true
semiring: quantum
---

# HM03 — Casimir Effect

| Field | Value |
|-------|-------|
| **Domain** | Quantum Electrodynamics / Vacuum Physics |
| **System** | Two parallel perfectly conducting plates |
| **Group** | U(1) × translation symmetry |
| **H^k tier** | H³ (PROPAGATE loop, no EMIT) |
| **ISA** | Hum (β = it/ℏ) |
| **Status** | Validated |
| **Opcodes** | ORBIT · FLOW · PROPAGATE |
| **Papers** | [Paper 620](https://doi.org/10.5281/zenodo.21416912) |

---

## Physical system

Two parallel perfectly conducting plates separated by distance d attract
each other with a force per unit area

F/A = −π²ℏc / (240 d⁴)

arising purely from the zero-point fluctuations of the electromagnetic field.
The modes between the plates are restricted to wavelengths λ = 2d/n (standing
waves); modes outside have no such restriction. The difference in zero-point
energy densities produces a net attractive force.

Casimir predicted this in 1948. The first precision measurement (Lamoreaux
1997, PRL) confirmed the formula to 5% at d ∼ 1 μm. Modern measurements
agree to < 1%.

## ISA interpretation

The Casimir effect is a **pure PROPAGATE loop without EMIT**.

The fine-structure constant α and the electron charge e are entirely absent
from the formula E/A = −π²ℏc/(720 d³). There is no vertex coupling, no
particle emission, no EMIT opcode. The force arises from the field's
propagation structure (PROPAGATE) summed over vacuum modes constrained
by the plates (ORBIT on the mode space).

This is the ISA diagnostic for EMIT-independence: if α is absent, no
particle-field coupling occurred. The Casimir effect is H³ but does not
require the particle-number-changing EMIT primitive — it is the vacuum's
geometry, not its activity.

In the Grassmannian basis (HM07), PROPAGATE dissolves into ORBIT; the
Casimir effect would then be a boundary-constrained ORBIT on the
positive geometry of the constrained mode space. This is an open problem
(x620d').

## ISA programme

```
PROGRAM Casimir_energy [plates at z=0 and z=d]

; Mode spectrum between plates: k_z = n*pi/d, n=1,2,...
; Mode spectrum outside plates: k_z continuous

ORBIT(photon_modes_inside,  k_z = n*pi/d)   ; discrete standing waves
ORBIT(photon_modes_outside, k_z continuous)  ; unrestricted modes

; Zero-point energy: E_0 = hbar*omega/2 per mode
; Sum via zeta regularisation: FLOW(zeta) over mode index n
FLOW(zeta_regularisation):
    PROPAGATE(photon, k, x->x)   ; self-energy of each mode
    ; Result: E_Casimir/A = -pi^2 * hbar*c / (720 * d^3)

; Force per unit area
OUTPUT F/A = -pi^2 * hbar*c / (240 * d^4)   ; attractive
```

## Computable output

Energy per unit area: E/A = −π²ℏc / (720 d³)

Force per unit area: F/A = −π²ℏc / (240 d⁴)

At d = 1 μm: F/A = 1.30 mPa (validated by script x620d; PASS).

| d (nm) | F/A (Pa) |
|--------|----------|
| 10 | 1.30 × 10³ |
| 100 | 1.30 × 10⁻¹ |
| 1000 | 1.30 × 10⁻³ |

**Key diagnostic**: α and e absent → EMIT-free. The force is a property
of ℏ and c only — the structure of the field propagator, not the
electron-photon coupling.

## Connections

- **HM01** (Lamb shift): the Lamb shift requires EMIT (α³ coupling);
  the Casimir effect does not (α absent). This is the clearest ISA
  contrast between H³-with-EMIT and H³-without-EMIT.
- **HM07** (Amplituhedron): in the Grassmannian basis, PROPAGATE
  dissolves into ORBIT. The Casimir effect in the Grassmannian basis
  = boundary-constrained ORBIT on mode space (open: x620d').
- **G03** (Higgs): the Casimir effect and the Higgs mechanism both arise
  from the vacuum's mode structure. The Casimir force is the geometric
  (non-symmetry-breaking) version; the Higgs VEV is the symmetry-breaking version.

## Validation

- Casimir (1948), Proc. Kon. Ned. Akad. Wetensch. 51, 793: analytic prediction.
- Lamoreaux (1997), PRL 78, 5: first precision measurement at d ∼ 1 μm,
  agreement to 5%.
- Mohideen & Roy (1998), PRL 81, 4549: 1% agreement.
- Modern: Decca et al. (2003), agreement to 0.5%.

---

*Part of the [ISA Zoo](/isa-zoo/).
Hum ISA reference: [Paper 620](https://doi.org/10.5281/zenodo.21416912).*
