---
layout: default
title: "D04 — Lorenz Strange Attractor"
parent: ISA Zoo
nav_exclude: true
semiring: probabilistic
---

# D04 — Lorenz Strange Attractor

| Field | Value |
|-------|-------|
| **Domain** | Dynamical Systems |
| **System** | Lorenz system (σ=10, ρ=28, β=8/3) |
| **Group** | ℤ₂ (two-lobe symmetry) |
| **H^k tier** | H¹ |
| **ISA** | Forge (β ≈ β*) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · LABEL |
| **Paper** | Paper 512 |

---

## Physical system

The Lorenz system (1963) is a 3-dimensional ODE system:

```
ẋ = σ(y − x)
ẏ = x(ρ − z) − y
ż = xy − βz
```

At the classical parameter values (σ=10, ρ=28, β=8/3), solutions converge to a
strange attractor with fractal dimension d_f ≈ 2.06. The system has a ℤ₂
symmetry (x,y) → (−x,−y) and exhibits sensitive dependence on initial
conditions (chaos). The butterfly-shaped attractor is the canonical example of
a strange attractor in a dissipative system.

---

## Target category

**Vect(ℝ)³** — the category of flows on ℝ³, with morphisms = smooth conjugacies
between flows. The attractor A ⊂ ℝ³ is the invariant object; its topology is
encoded in the Lorenz template (a branched 2-manifold with a ℤ₂ branch locus).

## Interpretation functor

F: C → Vect(ℝ)³ defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Flow on the attractor: trajectories wind around one lobe, then switch — each completed lobe traversal is one ORBIT cycle |
| TWIST  | Lobe-switching event: trajectory crosses the branch locus of the Lorenz template; H¹ class changes (left-lobe vs right-lobe winding) |
| LABEL  | Symbolic dynamics label: L (left lobe) or R (right lobe) per ORBIT cycle; eigenvalue = Lyapunov exponent λ₁ ≈ +0.906 |

## ISA programme

```
INIT:    LABEL[(x₀,y₀,z₀)]              -- initial condition near attractor
FLOW:    ORBIT[Φ_t(x,y,z)]              -- Lorenz flow for time t
SWITCH:  TWIST[L ↔ R | z < z_saddle]   -- lobe-switch when trajectory crosses branch
SYMBOL:  LABEL[s_n ∈ {L,R}]            -- record symbolic sequence
LYAP:    LABEL[λ₁ = lim(1/t)log|δx(t)/δx(0)|]  -- maximal Lyapunov exponent
```

## Computable output

- **Lyapunov exponent** λ₁ ≈ +0.906 (positive = chaos). This is the eigenvalue
  of the ORBIT+TWIST programme: the rate at which the TWIST lobe-switching
  amplifies initial uncertainty.
- **Fractal dimension** d_f ≈ 2.06 (Kaplan-Yorke formula from Lyapunov
  spectrum). Non-integer dimension = the attractor spans both H⁰ (two fixed
  points, unstable) and H¹ (the two-lobe TWIST cycles) without reaching H²
  (no non-abelian holonomy — the symmetry group is just ℤ₂).
- **Symbolic sequence** {L,R}^ℕ: the complete topological description of the
  attractor. Any bi-infinite sequence is realised by some trajectory (the
  system is topologically conjugate to a subshift of finite type on {L,R}).
- **Predictability horizon**: t* ≈ (1/λ₁) log(Δ₀/ε) where Δ₀ is initial
  uncertainty and ε is forecast tolerance. Beyond t*, ORBIT predictions
  diverge — the symbolic sequence becomes unpredictable.

## Why H¹ (not H⁰ or H²)

- **Not H⁰**: the attractor is not a fixed point or stable limit cycle. ORBIT
  does not close periodically — trajectories never repeat exactly.
- **H¹**: the two lobes are the two generators of π₁ of the Lorenz template.
  The lobe-switching TWIST event is literally a non-contractible loop in the
  attractor's topological template. The ℤ₂ symmetry is the H¹ holonomy group.
- **Not H²**: the symmetry group ℤ₂ is abelian, so no non-abelian BIND is
  needed. A Rössler attractor (genus-1 template, single lobe, no branching) is
  H⁰. The Lorenz attractor's branching makes it H¹. A hypothetical attractor
  with non-abelian monodromy (e.g., a figure-eight knot complement flow) would
  be H².

## Validation

- λ₁ ≈ +0.906: confirmed to 3 significant figures by Tucker (2002) computer-
  assisted proof that the Lorenz attractor exists and is chaotic.
- Tucker's proof is itself an ORBIT fixed-point computation: it constructs a
  trapping region and verifies that the ORBIT (Lorenz flow) maps it to itself.
- Symbolic dynamics {L,R} coding: confirmed by Guckenheimer & Williams (1979)
  geometric Lorenz attractor theory.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
