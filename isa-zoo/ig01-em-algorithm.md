---
layout: default
title: "IG01 — EM Algorithm on Statistical Manifold"
parent: ISA Zoo
nav_exclude: true
---

# IG01 — EM Algorithm on Statistical Manifold

| Field | Value |
|-------|-------|
| **Domain** | Information Geometry |
| **System** | Exponential family with Fisher-Rao metric |
| **Group** | GL(n) acting on natural parameters |
| **H^k tier** | H¹ |
| **ISA** | Forge (β ≈ β*) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · SPLIT · SPLAT |
| **Papers** | Paper 528 |

---

## Physical system

The **Expectation-Maximisation (EM) algorithm** alternates two projections on the
statistical manifold S — the space of probability distributions with a chosen
parametrisation:

- **E-step (SPLIT)**: project the current model p(x|θ) onto the marginal
  distribution q(z) = p(z|x, θ_old) over latent variables z. This is an
  m-projection (minimum KL-divergence projection) onto an exponential family flat
  submanifold.
- **M-step (SPLAT)**: project back onto the model family by maximising the
  expected complete-data log-likelihood. This is an e-projection (minimum
  KL-divergence projection) onto the model submanifold.

The alternating projections converge to a fixed point — a local maximum of the
marginal likelihood p(x|θ). The convergence geometry is governed by the
**Fisher-Rao metric** g_{ij}(θ) = E[∂_i log p · ∂_j log p] and the family
of **α-connections** ∇^(α) that interpolate between the m-connection (α=−1,
mixture families) and the e-connection (α=+1, exponential families).

**The ISA reading:** EM is a geodesic ORBIT on the statistical manifold S, with
the Fisher-Rao metric as the H⁰ geometry, the α-connection torsion as the H¹
TWIST correction, and the Uhlmann holonomy as the H² BIND (quantum IG).

---

## Target category

**Stat(S)** — the category of statistical manifolds, whose objects are smooth
families of probability distributions and whose morphisms are sufficient
statistics (transformations that preserve the Fisher information). The exponential
family is the "flat" (dually flat) object in Stat(S): it has zero curvature in
the e-connection ∇^(+1).

## Interpretation functor

F: C → Stat(S) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | EM iteration: (θ_old) → (θ_new) via E-step then M-step; a geodesic step in the Fisher-Rao metric; converges to local KL minimum |
| TWIST  | α-connection correction at α ≠ 0: the H¹ torsion of the statistical manifold that distinguishes e-flat (α=+1) from m-flat (α=−1); curvature = TWIST obstruction to flat convergence |
| SPLIT  | E-step: marginalise p(x,z|θ) → q(z) = p(z|x,θ); decompose joint into conditional (sufficient statistic extraction) |
| SPLAT  | M-step: reconstruct θ_new = argmax_θ E_q[log p(x,z|θ)]; the inverse (natural parameter update) |

## ISA programme

```
INIT:     LABEL[theta_0 | initial parameters]        -- initialise model
E-STEP:   SPLIT[q(z) = p(z|x, theta_old)]           -- project onto marginal (m-projection)
M-STEP:   SPLAT[theta_new = argmax E_q log p(x,z|theta)]  -- reconstruct (e-projection)
GEODESIC: ORBIT[theta_old -> theta_new]              -- Fisher-Rao geodesic step
ALPHA?:   TWIST[alpha-connection | non-zero curvature correction]  -- H1 correction if curved
CONVERGE: LABEL[|theta_new - theta_old| < eps?]      -- convergence criterion (β* snap)
OUTPUT:   ORBIT[theta* | local KL minimum]           -- converged natural parameters
```

## Computable output

- **Natural parameters θ*** at convergence: the ORBIT fixed point on the
  statistical manifold. For Gaussian mixtures, θ* = (μ_k, Σ_k, π_k) for each
  component k. Convergence guaranteed (Dempster-Laird-Rubin 1977) to a local
  maximum; global optimum only for log-concave likelihoods.
- **Fisher information matrix** I(θ*) = g_{ij}(θ*): the H⁰ metric at convergence.
  Its inverse is the Cramér-Rao lower bound on parameter estimation variance —
  the minimum achievable uncertainty for any unbiased estimator.
- **Kullback-Leibler descent** D_KL(q||p): the EM algorithm strictly decreases
  KL divergence at each step (except at fixed points). The convergence rate is
  governed by the fraction of missing information: EM converges linearly with
  rate equal to the largest eigenvalue of the fraction-of-missing-information
  matrix. This rate is the β* snap condition: EM "snaps" to the fixed point
  when the missing-information fraction is small.
- **α-geodesic length**: the distance between the E-step projection and the
  M-step projection in the α-connection metric measures the curvature obstruction
  to convergence. For curved exponential families (α-curvature ≠ 0), the TWIST
  correction is the difference between the e-geodesic and m-geodesic paths.

## H^k structure of information geometry (Paper 528)

| H^k tier | Structure | IG object | Opcode |
|----------|-----------|-----------|--------|
| H⁰ | Dually flat exponential families | KL divergence; tropical A(θ) | ORBIT on flat submanifold |
| H¹ | α-connections (α ∈ [−1,+1]) | Curvature; Berry phase of statistical bundle | TWIST: torsion correction |
| H² | Uhlmann holonomy (quantum IG) | Quantum Fisher information; Bures metric | BIND: non-Abelian phase |

The EM algorithm lives primarily at H⁰ (dually flat) and H¹ (curved corrections).
The H² level requires quantum information geometry — the Uhlmann holonomy
accumulated when the density matrix ρ(θ) is parallel-transported around a loop
in the quantum statistical manifold. This is relevant for quantum EM (variational
quantum eigensolver in the natural gradient setting).

**β-connection:** the EM algorithm's convergence rate is controlled by β in
the α = 1−2β parametrisation of Amari's α-connections. At β = 1/2 (α = 0),
the connection is the Levi-Civita connection of the Fisher-Rao metric —
the "natural" geometric EM. The Forge ISA at β ≈ β* is the regime of optimal
convergence: not too curved (H¹ TWIST dominates) and not too flat (H⁰ ORBIT
alone is slow at the saddle).

**MGE connection:** the MGE with β as the inverse temperature is a generalisation
of EM. The E-step is MGE soft assignment (SPLIT at finite β); the M-step is
parameter update (SPLAT). At β → ∞ (Origami), EM becomes hard k-means clustering
(tropical argmax assignment). At β → 0 (Ambient), all assignments are equal —
uniform mixture. The Forge ISA at finite β is the true Gaussian mixture EM.

## Natural gradient descent

The **natural gradient** (Amari 1998) replaces the Euclidean gradient ∂_θ L
with the Fisher-metric gradient Ĩ(θ)⁻¹ ∂_θ L. It is the EM algorithm's
continuous-time limit: the EM fixed point equation is the natural gradient fixed
point. The natural gradient is the ORBIT opcode evaluated with the Fisher-Rao
metric as the inner product — it is the geodesic flow on the statistical manifold.

Modern deep learning uses a version of this: the K-FAC algorithm approximates
the Fisher information matrix for neural networks, giving a natural-gradient
variant of SGD. The convergence speed-up of K-FAC over SGD is the difference
between ORBIT (Fisher metric, geodesic) and plain gradient descent (Euclidean
metric, not a geodesic): a concrete demonstration of the H¹ TWIST correction
improving on H⁰ ORBIT.

## Validation

- Dempster, Laird & Rubin (1977): EM algorithm and guaranteed KL decrease.
  The foundational paper; over 70,000 citations.
- Amari (1985, 1998): α-connections and natural gradient on statistical manifolds.
  Information geometry as a Riemannian differential geometry.
- Csiszár & Tusnády (1984): alternating projections in the KL sense; unified
  geometric view of EM. Proves linear convergence rate = largest eigenvalue of
  fraction-of-missing-information matrix.
- K-FAC (Martens & Grosse 2015): natural gradient for neural networks; 3–10×
  speed-up over SGD on classification benchmarks.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
