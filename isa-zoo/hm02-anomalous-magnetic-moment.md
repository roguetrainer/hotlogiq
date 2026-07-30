---
layout: default
title: "HM02 — Anomalous Magnetic Moment (g−2)"
parent: ISA Zoo
nav_exclude: true
semiring: quantum
---

# HM02 — Anomalous Magnetic Moment (g−2)

| Field | Value |
|-------|-------|
| **Domain** | Quantum Electrodynamics |
| **System** | Electron in a magnetic field |
| **Group** | U(1) gauge symmetry × SU(2) spin |
| **H^k tier** | H³ |
| **ISA** | Hum (β = it/ℏ) |
| **Status** | Validated to 12 significant figures |
| **Opcodes** | ORBIT · EMIT · PROPAGATE · FLOW |
| **Papers** | [Paper 620](https://doi.org/10.5281/zenodo.21416912) |

---

## Physical system

Dirac's equation predicts the electron gyromagnetic ratio g = 2 exactly.
The measured value is g = 2.00231930436256 ± 0.00000000000035 (Hanneke et al.
2008). The deviation a_e = (g−2)/2 = α/2π + O(α²) arises from virtual
photon loops dressing the electron-photon vertex.

Schwinger (1948) computed the one-loop result a_e = α/2π ≈ 0.00116,
the first precision QED prediction confirmed by experiment.

## ISA interpretation

The anomalous magnetic moment is a one-loop **EMIT ∘ PROPAGATE ∘ EMIT†**
programme applied to the spin-flip vertex.

In the Hum ISA:
- The electron interacts with the external magnetic field via its ORBIT (H⁰ spin state)
- EMIT creates a virtual photon
- PROPAGATE carries the virtual photon in a self-energy loop
- EMIT† (ABSORB) reabsorbs the photon at the spin-flip vertex
- The loop integral (FLOW at imaginary β) shifts the magnetic moment by α/2π

The one-loop result involves one EMIT vertex, one PROPAGATE loop, and one
FLOW over the loop momentum. No RENORM is needed at this order (the vertex
correction is UV-finite after mass and charge renormalisation).

## ISA programme

```
PROGRAM g_minus_2 [electron in external field B]

ORBIT(electron, spin=+1/2)           ; initial spin state

; One-loop vertex correction
EMIT(electron, virtual_photon, k, e) ; emit virtual photon at vertex
PROPAGATE(virtual_photon, k, x->y)  ; virtual photon loop
FLOW(imaginary_beta):
    INTEGRATE(k, 0, Infinity)        ; loop momentum integration
ABSORB(electron, virtual_photon, k) ; reabsorb at same vertex

; The spin-flip matrix element shifts by alpha/(2*pi)
OUTPUT a_e = (g-2)/2 = alpha/(2*pi) + O(alpha^2)
; = 0.001159652... (Schwinger 1948, one loop)
; = 0.001159652181643 (QED, 5 loops, 2022)
```

## Computable output

| Loop order | a_e contribution | Cumulative | Agreement |
|-----------|-----------------|-----------|-----------|
| 1-loop (Schwinger) | α/2π = 0.001161 | 0.001161 | 0.04% |
| 2-loop | −0.328 α²/π² | 0.001159 | 0.002% |
| 5-loop (2022) | — | 0.001159652181 | 10⁻¹² |

Five-loop QED calculation agrees with experiment to 12 significant figures —
the most precisely tested prediction in science.

## Connections

- **HM01** (Lamb shift): both are one-loop QED radiative corrections.
  The Lamb shift is an H⁰→H³ coupling (orbital contact density); g−2
  is a pure H³ spin-flip vertex correction. Both require EMIT; neither
  requires the Grassmannian basis to eliminate RENORM at one loop.
- **HM07** (Amplituhedron): in the Grassmannian basis, the vertex
  correction that gives g−2 would be expressed as a boundary term of the
  1-loop amplituhedron — an open problem (x620g).

## Validation

- Schwinger (1948), Phys. Rev. 73, 416: one-loop result α/2π.
- Hanneke, Fogwell, Gabrielse (2008), PRL 100, 120801: measurement to 10⁻¹³.
- Aoyama et al. (2012, 2019, 2022): five-loop QED calculation.
- Agreement to 12 significant figures — the most precise test in physics.

---

*Part of the [ISA Zoo](/isa-zoo/).
Hum ISA reference: [Paper 620](https://doi.org/10.5281/zenodo.21416912).*
