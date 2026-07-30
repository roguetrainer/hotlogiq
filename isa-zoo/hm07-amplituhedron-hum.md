---
layout: default
title: "HM07 — Amplituhedron as Single ORBIT (Hum ISA)"
parent: ISA Zoo
nav_exclude: true
semiring: quantum
---

# HM07 — Amplituhedron as ORBIT: Eliminating RENORM

| Field | Value |
|-------|-------|
| **Domain** | Gauge Theory / Positive Geometry |
| **System** | N=4 super-Yang–Mills scattering amplitudes |
| **Group** | GL(k) acting on Gr⁺(k, k+4) |
| **H^k tier** | H³ |
| **ISA** | Hum (β = it/ℏ) — Grassmannian basis |
| **Status** | Validated (tree level); conjectured (all loop) |
| **Opcodes** | ORBIT · EMIT · FLOW |
| **Papers** | [Paper 620](https://doi.org/10.5281/zenodo.21416912), [Paper 520](https://doi.org/10.5281/zenodo.21219738) |

---

## Physical system

Tree-level and all-loop scattering amplitudes in planar N=4 super-Yang–Mills
are the volume of a positive region in the Grassmannian:

A_{n,k,L}(Z) = ∫_{𝒜_{n,k,L}} Ω_{n,k,L}

where Ω_{n,k,L} = ∏_i dα_i/α_i is a pure dlog canonical form,
and 𝒜_{n,k,L} ⊂ Gr⁺(k, k+4; L) is the amplituhedron
(Arkani-Hamed & Trnka 2013).

The canonical form is UV-finite on the interior of the amplituhedron
by construction — no renormalisation is needed or possible.
At L loops, each loop momentum is a "hidden particle pair" — a 2-plane
D^{(i)} in the (n−k)-dimensional complement of the external data C,
subject to positivity conditions. Loops add positivity constraints, not
new opcodes.

## ISA interpretation

**RENORM is absent. PROPAGATE dissolves. EMIT remains.**

In the Feynman basis, the same amplitude requires:
ORBIT × n (external states), EMIT × n (vertices), PROPAGATE × (internal
lines), RENORM (counterterms at loop level) — a programme of length ≥ 7
at tree level, ≥ 10 at one loop.

In the Grassmannian basis, the amplitude is a single:
ORBIT(Gr⁺(k, k+4; L), positive cell, Z)

One opcode at any loop order. The opcode ratio Feynman/amplituhedron is
≥ 5:1 at tree level, ≥ 8:1 at one loop.

**Why RENORM disappears**: the Feynman basis forces a local, particle-by-particle
expansion. Locality introduces arbitrarily high-energy virtual modes (k → ∞)
whose contributions diverge. RENORM removes these artefacts. The amplituhedron
never introduces them: the amplitude is a single global object (a volume),
and the UV modes are not individual entities.

**Why PROPAGATE dissolves**: "virtual particles" in the Feynman basis are
hidden positivity constraints in the amplituhedron basis. At L loops, the
L loop momenta are L hidden pairs of columns — geometry of the same ORBIT,
not separate propagation steps.

**Why EMIT survives**: EMIT specifies the coupling constant e and the particle
content. The amplituhedron still requires the external kinematic data Z_i and
the theory specification. EMIT is the ISA's representation of "which theory
are we computing in?" Without it, the Hum ISA describes free fields — no
interaction, no amplitude.

## ISA programme

```
PROGRAM Amplituhedron_amplitude [n particles, k = NMHV degree, L loops]

; Specify theory and kinematics
EMIT(particles, theory=N4SYM, coupling=g, n=n, k=k)  ; theory input

; The amplitude is a single ORBIT on the positive Grassmannian
ORBIT(Gr+(k, k+4; L), amplituhedron_region, Z)        ; L=0: tree level
                                                        ; L>0: positivity constraints added

; Output: the canonical volume form
OUTPUT A_{n,k,L}(Z) = volume(amplituhedron)
; UV-finite by construction (dlog form); no RENORM step
```

## Opcode count comparison

| Level | Feynman basis | Count | Grassmannian basis | Count | Ratio |
|-------|--------------|-------|-------------------|-------|-------|
| Tree (4-gluon) | ORBIT×4, EMIT×4, PROPAGATE×2 | 10+ | ORBIT(Gr(2,4)) | 1 | 10:1 |
| 1-loop | above + loop sum + RENORM | ≥ 14 | ORBIT(Gr(2,4;L=1)) | 1 | ≥ 14:1 |

## Grassmannian quantisation (HM08 preview)

The amplituhedron proposes a third quantisation paradigm (see HM08):
first quantisation = L=0 external data only; second quantisation = L>0
loop positivity. Both emerge from a single ORBIT — no Fock space, no
canonical quantisation, no path integral.

## Connections

- **G02** (Amplituhedron, Origami ISA view): G02 treats the amplituhedron
  in the H² BIND language of the Origami ISA (spurious pole cancellation as
  boundary-of-boundary). HM07 adds the Hum ISA perspective: RENORM and
  PROPAGATE absent in the Grassmannian basis.
- **HM01** (Lamb shift): in the Feynman basis, the Lamb shift requires RENORM.
  In the Grassmannian basis, it would be computed via a boundary-constrained
  ORBIT — an open problem (x620f).
- **P01** (OPU): the Grassmannian computing unit (Paper 598) runs ORBIT on
  Gr(k,n) for molecular orbital geometry. The amplituhedron is the QFT
  realisation of the same ORBIT — the OPU extended to scattering amplitudes.

## Validation

- Tree-level amplitudes: Arkani-Hamed & Trnka (2013), JHEP 2014:30.
  Canonical form Ω_{n,k} = ∏ dα_i/α_i verified for n ≤ 8, k ≤ 3.
- dlog UV-finiteness: verified algebraically at tree level. The interior of the
  amplituhedron has no poles in the canonical form; poles occur only on boundaries
  (physical factorisation channels).
- Loop amplituhedron: conjectured for all L; 1-loop results reproduce known
  direct calculations. Status: validated at L=1, conjectured for L ≥ 2.

---

*Part of the [ISA Zoo](/isa-zoo/).
Hum ISA reference: [Paper 620](https://doi.org/10.5281/zenodo.21416912).
See also: [G02 — Amplituhedron (Origami ISA view)](g02-amplituhedron.md).*
