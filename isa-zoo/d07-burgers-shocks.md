---
layout: default
title: "D07 — Burgers Equation and Shock Formation"
parent: ISA Zoo
nav_exclude: true
---

# D07 — Burgers Equation and Shock Formation

| Field | Value |
|-------|-------|
| **Domain** | Dynamical Systems |
| **System** | Viscous Burgers equation on ℝ (ν → 0 limit) |
| **Group** | ℝ (translation symmetry) |
| **H^k tier** | H⁰ |
| **ISA** | Origami (β → ∞) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · LABEL |
| **Papers** | Paper 512, Paper 543 |

---

## Physical system

The viscous Burgers equation is:

∂_t u + u ∂_x u = ν ∂_x² u

where ν > 0 is kinematic viscosity. It is the simplest nonlinear PDE exhibiting
shock formation — the prototype for all of fluid dynamics, including the
Navier-Stokes equation. The crucial structure: as ν → 0 (the inviscid limit),
smooth initial data develops a singularity in finite time — a **shock wave** where
the velocity gradient ∂_x u → −∞. After the shock forms, the solution continues
as a distributional (weak) solution with a jump discontinuity, propagating at
speed s = ½(u_L + u_R) (the Rankine-Hugoniot condition).

**ν is β in the ISA framework.** Kinematic viscosity plays exactly the role of
inverse temperature 1/β in the MGE: large ν (high "temperature") smoothes the
flow; ν → 0 (β → ∞) freezes it into the tropical / discontinuous shock regime.
This is not an analogy — the Hopf-Cole transformation maps Burgers exactly to the
heat equation with diffusion constant ν, which is the Euclidean Schrödinger
equation at imaginary time with ℏ = ν. The β-plane rotation t → iτ takes
ν = ℏ (quantum) to ν = 1/β (viscous): **viscosity and temperature are the same
parameter, Wick-rotated.**

---

## Target category

**Hyp(ℝ)** — the category of hyperbolic conservation laws on ℝ, whose objects are
Sobolev-class solutions to ∂_t u + ∂_x f(u) = 0 and whose morphisms are
entropy-satisfying weak solutions (Lax-Oleinik condition). The shock solution is
the unique morphism satisfying the Lax entropy condition: characteristics impinge
on the shock from both sides.

## Interpretation functor

F: C → Hyp(ℝ) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Characteristic propagation: solution constant along dx/dt = u(x₀,0) until characteristics cross |
| TWIST  | Rankine-Hugoniot correction at shock: s = ½(u_L + u_R); the H¹ phase correction that restores conservation |
| LABEL  | Shock position x_s(t): eigenvalue of the Lax-Oleinik functional; discontinuity locus |

## ISA programme

```
INIT:     LABEL[u(x,0) | smooth initial data]        -- set initial condition
CHARS:    ORBIT[x(t) = x₀ + u(x₀,0)·t]             -- propagate along characteristics
CROSS?:   LABEL[t* = min over x₀ of -1/u'(x₀,0)]   -- find first characteristic crossing time
SHOCK:    LABEL[x_s(t) | Rankine-Hugoniot]           -- shock position after t > t*
ENTROPY:  TWIST[s = (f(u_L) - f(u_R))/(u_L - u_R)]  -- RH speed (H¹ correction)
ENTROPY?: LABEL[u_L > s > u_R?]                      -- Lax entropy condition (unique solution)
OUTPUT:   ORBIT[u(x,t) | entropy solution]           -- propagate piecewise ORBIT, joined at LABEL
```

## Computable output

- **Shock formation time** t* = −1/min_x u'(x,0): the β* snap event in fluid
  dynamics. Before t*, the solution is smooth (Forge ISA). At t*, the gradient
  blows up. After t*, the solution lives in the tropical (Origami) regime —
  piecewise constant, joined by the shock at x_s(t).
- **Shock speed** s = ½(u_L + u_R) for Burgers (quadratic flux): the TWIST
  Rankine-Hugoniot correction. This is the H¹ correction that makes the weak
  solution conservative — without it, the H⁰ characteristics alone would
  violate mass conservation at the crossing point.
- **Entropy solution uniqueness**: the Lax entropy condition u_L > s > u_R
  selects the unique physically relevant weak solution among all distributional
  solutions. This is a LABEL eigenvalue condition — the entropy solution is the
  orbit-closed (ORBIT-closed) element of the solution space.
- **N-shock solution**: N shocks form at N crossings, then merge when adjacent
  shocks meet. This is the tropical analogue of the KdV soliton interaction
  (D06): instead of elastic SPLIT+SPLAT, shocks merge irreversibly via ORBIT
  contraction. The difference: KdV is dispersive (H⁰ soliton = elastic), Burgers
  is dissipative (H⁰ shock = inelastic). Dispersion vs dissipation = different
  signs of the β-deformation.

## Connection to the β-plane (Paper 543)

**Viscosity ν = 1/β.** The three regimes of Burgers' equation correspond directly
to the three points on the β-plane:

| ν regime | β-plane position | ISA | Physical behaviour |
|----------|-----------------|-----|-------------------|
| ν → ∞ (high viscosity) | β → 0 (Ambient) | Ambient | Linear heat equation; all disturbances diffuse away |
| ν = ν* (Burgers balance) | β = β* (Forge snap) | Forge | Shock formation; gradient steepening balanced by diffusion; β* snap event |
| ν → 0 (inviscid) | β → ∞ (Origami) | Origami | Discontinuous shock; tropical dynamics; piecewise ORBIT |

The **Hopf-Cole transformation** u = −2ν ∂_x log θ linearises Burgers exactly to
the heat equation ∂_t θ = ν ∂_x² θ. This is the MGE in disguise: θ is the
partition function Z(β) = Σ_k e^{−βE_k} with ν = 1/β, and u = −∂_x log Z is the
MGE mean energy. **The Burgers velocity field is the gradient of the MGE free energy.**

**Maslov dequantisation connection (MT01):** The inviscid Burgers equation
(ν → 0) has the **method of characteristics** as its exact solution before
the shock. This is stationary phase in the β → ∞ limit — exactly Maslov
dequantisation applied to the Burgers semigroup. The shock (caustic in the
characteristic geometry) is precisely where stationary phase fails: multiple
characteristics reach the same point x at time t, and the WKB approximation
breaks down. The Rankine-Hugoniot condition is the Maslov index correction that
resolves the caustic — the TWIST opcode applied to a Burgers shock.

**Navier-Stokes connection (D03):** The Kolmogorov turbulence cascade (D03) is
the multi-dimensional, statistically averaged version of Burgers shock formation.
The −5/3 Kolmogorov spectrum is the Fourier signature of an ensemble of Burgers
shocks. Burgers turbulence (1D Navier-Stokes in disguise) is the exactly solvable
H⁰/H¹ prototype for the H¹ cascade of D03. The unsolved Navier-Stokes problem
(Tao undecidability) is the question of whether the Burgers shock mechanism
persists in 3D with vortex stretching — an ORBIT failure (D03) rather than an
ORBIT closure (D07).

## Validation

- Hopf (1950) and Cole (1951): exact analytical solution via Hopf-Cole. The
  transformation is exact for all ν > 0; the ν → 0 limit gives the entropy
  solution via the Lax-Oleinik formula.
- Shock speed: Rankine-Hugoniot condition s = [f(u)]/[u] = ½(u_L + u_R) for
  Burgers — classical result, confirmed experimentally in shock tube experiments.
- Entropy solution uniqueness: Oleinik (1957) one-sided condition; Kruzkov
  (1970) entropy condition for general scalar conservation laws.
- N-wave: the long-time attractor of Burgers with compactly supported data is
  the N-wave (two shocks, triangular profile) — computed exactly via Hopf-Cole.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
