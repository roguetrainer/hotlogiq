---
layout: default
title: "D06 — Solitons and KdV Inverse Scattering"
parent: ISA Zoo
nav_exclude: true
semiring: tropical
---

# D06 — Solitons and KdV Inverse Scattering

| Field | Value |
|-------|-------|
| **Domain** | Dynamical Systems |
| **System** | Korteweg-de Vries equation on ℝ |
| **Group** | ℝ (translation symmetry) |
| **H^k tier** | H⁰ |
| **ISA** | Origami (β → ∞) |
| **Status** | Validated |
| **Opcodes** | ORBIT · SPLIT · SPLAT · LABEL |
| **Paper** | Paper 512 |

---

## Physical system

The KdV equation ∂_t u + 6u ∂_x u + ∂_x³ u = 0 governs shallow water waves,
ion-acoustic plasma waves, and lattice dynamics (Toda lattice continuum limit).
Its key feature: localised initial conditions decompose into a finite number of
solitons — stable, particle-like waves that travel at constant velocity and
collide elastically, emerging from collisions unchanged in shape and speed. The
soliton velocities are the eigenvalues of the Lax operator L = −∂_x² + u.

---

## Target category

**Symp_∞** — the infinite-dimensional symplectic manifold of Schwartz-class
initial data for KdV, with action-angle variables given by the inverse
scattering transform (IST). Objects at each soliton sector: the n-soliton
manifold M_n ≅ ℝⁿ × 𝕋ⁿ (velocities × phases).

## Interpretation functor

F: C → Symp_∞ defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Soliton propagation: u(x,t) = u(x − ct); a single soliton is a tropical fixed point of the KdV flow |
| SPLIT  | Soliton emergence: a smooth initial hump decomposes into n separate solitons (eigenvalue decomposition of L) |
| SPLAT  | Soliton collision and recombination: two solitons pass through each other and re-emerge — SPLIT then SPLAT |
| LABEL  | Lax eigenvalue κₙ: encodes soliton velocity cₙ = 4κₙ² and amplitude 2κₙ² |

## ISA programme

```
SCATTER: LABEL[κₙ | Lu = −κₙ²u, n=1…N]    -- solve Lax eigenvalue problem (direct scattering)
EVOLVE:  ORBIT[κₙ(t) = κₙ(0)]             -- eigenvalues are constants of motion
PHASE:   LABEL[δₙ(t) = 8κₙ³t + δₙ(0)]    -- phase evolution (trivial ORBIT)
INVERT:  SPLIT + SPLAT                     -- reconstruct u(x,t) via Marchenko equation
OUTPUT:  ORBIT[u(x,t) = −2∂_x² log det(I+K)] -- N-soliton solution
```

## Computable output

- **Soliton velocities** cₙ = 4κₙ²: extracted exactly from initial data via
  the Lax spectrum. N solitons emerge from any initial condition with N bound
  states.
- **N-soliton solution**: exact closed-form determinantal formula. For N=2:

  u(x,t) = −2∂_x² log[1 + e^{2η₁} + e^{2η₂} + A₁₂²e^{2η₁+2η₂}]

  where ηₙ = κₙ(x − 4κₙ²t) − δₙ and A₁₂ = (κ₁−κ₂)/(κ₁+κ₂).

- **Phase shift** after collision: Δxₙ = (1/κₙ) log|A₁₂| — the soliton is
  displaced but not destroyed. This is the SPLAT output: two objects enter,
  two objects exit, total invariants preserved.
- **Tropical connection**: a soliton is a tropical curve — the graph of a
  piecewise-linear function in the (x, t) plane. The ORBIT fixed-point
  condition (∂_t u = 0 in the moving frame) is exactly the tropical
  polynomial equation max(0, κx) = c for the soliton profile. KdV solitons
  are the β→∞ limit of dispersive wave packets.

## Validation

- N-soliton formula: verified by Gardner, Greene, Kruskal & Miura (1967) —
  the founding paper of the inverse scattering transform. Exact for all N.
- Elastic collision: observed in shallow water wave experiments (Zabusky &
  Kruskal 1965 numerical experiment that discovered solitons).
- Toda lattice: N-particle Toda lattice has exact N-soliton solution via
  the same Lax pair; validated numerically for N up to 10³.
- Tropical limit: the piecewise-linear (tropical) soliton profile is the
  β→∞ limit of the exact sech² profile — confirmed analytically.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
