---
layout: default
title: "GS02 — PCA and Subspace Tracking"
parent: ISA Zoo
nav_exclude: true
---

# GS02 — PCA and Subspace Tracking

| Field | Value |
|-------|-------|
| **Domain** | Grassmannian Systems |
| **System** | Top-k eigenspace of n×n data matrix |
| **Group** | U(n) acting on Gr(k, n) |
| **H^k tier** | H⁰ |
| **ISA** | Origami (β → ∞) |
| **Status** | Validated |
| **Opcodes** | ORBIT · SPLIT · SPLAT · LABEL |
| **Papers** | Paper 574, Paper 596 |

---

## Physical system

Principal Component Analysis (PCA) finds the k-dimensional subspace V* ∈ Gr(k, n)
that captures maximum variance in a data matrix X ∈ ℝ^{n×m}. The solution is the
top-k eigenspace of the covariance matrix Σ = XX†/m — the dominant k-plane.
**PCA is an ORBIT to a fixed point on Gr(k, n).**

The subspace V* is the tropical argmax of the variance function
f(V) = tr(V† Σ V): the unique global maximum on the compact manifold Gr(k, n).
Power iteration (repeatedly multiply by Σ and orthogonalise) is the discrete
geodesic flow on Gr(k, n) converging to V*. Oja's rule (online PCA) is the
continuous-time limit — a gradient ORBIT on Gr(k, n) driven by the natural
gradient of the Fisher-Rao metric of the data distribution.

**Connection to alchemi/chemistry**: the NOON spectrum {σ₁²,...,σₖ²} of the
C/T skeleton (C06) is exactly the output of PCA applied to the natural orbital
occupation matrix. CASSCF orbital optimisation (Paper 596) is PCA on the
electronic wavefunction Grassmannian — the OPU (P01) running power iteration.

---

## Target category

**Gr(k, n)** — the Grassmannian as a Riemannian symmetric space U(n)/(U(k)×U(n−k)),
with the Fubini-Study (round) metric. Objects: k-planes V ∈ Gr(k,n). Morphisms:
orthogonal projections P_V: ℝⁿ → V. The variance function f(V) = tr(P_V Σ P_V)
is the LABEL eigenvalue; its gradient flow is the ORBIT; the global maximum V*
is the tropical fixed point (the Schubert cell of the top-k eigenspace).

## Interpretation functor

F: C → Gr(k, n) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Power iteration step: V → orth(ΣV); geodesic on Gr(k,n) toward top-k eigenspace V* |
| SPLIT  | SVD: X = UΣV† (thin); extract left singular vectors U[:,1:k] = the k-plane |
| SPLAT  | Reconstruction: X̂ = UΣV† restricted to top-k; low-rank approximation |
| LABEL  | Eigenvalue σ₁² ≥ σ₂² ≥ ... ≥ σₖ²: the NOON spectrum; encodes fraction of variance explained |

## ISA programme

```
DATA:    LABEL[Sigma = X X† / m | sample covariance]  -- compute covariance
SPLIT:   SPLIT[X = U Sigma V† | SVD]                  -- singular value decomp
NOON:    LABEL[{sigma_i^2} | top-k singular values]   -- NOON spectrum
ORBIT:   ORBIT[V -> orth(Sigma V) | power iteration]  -- geodesic to V*
GAP?:    LABEL[sigma_k^2 / sigma_{k+1}^2 > gap_threshold?]  -- Schubert variety crossing
SNAP:    LABEL[snap if gap >> 1 | beta* condition]    -- top-k subspace stable
SPLAT:   SPLAT[X_hat = U_k Sigma_k V_k†]             -- reconstruct from V*
OUTPUT:  LABEL[V* in Gr(k,n) | top-k eigenspace]      -- the PCA solution
```

## Computable output

- **Top-k eigenspace V*** ∈ Gr(k, n): the ORBIT fixed point. Computable to
  machine precision via SVD in O(n²k) time.
- **Explained variance** Σᵢ σᵢ² / tr(Σ): the LABEL output. The "elbow" in the
  scree plot is the β* snap — the spectral gap σₖ²/σₖ₊₁² that determines the
  natural dimension k.
- **Wedin perturbation bound**: if Σ̃ = Σ + E is a perturbed covariance,
  ‖sin Θ(V*, Ṽ*)‖ ≤ ‖E‖ / (σₖ² − σₖ₊₁²) — the perturbation in the subspace
  (measured by principal angles) is bounded by the noise divided by the spectral
  gap. The gap σₖ² − σₖ₊₁² is the ISA β* snap threshold: when the gap is large,
  the ORBIT converges fast; when it vanishes, the subspace is degenerate (BIND
  obstruction at H²).
- **Principal angles** θᵢ(V₁, V₂) ∈ [0, π/2]: the ORBIT distance between two
  k-planes in Gr(k,n). The chordal distance d_c = √(Σᵢ sin²θᵢ) is the
  Grassmannian metric. Equivalent to the θ_G angle in the alchemi C/T skeleton
  (C06) when applied to the orbital subspace.

## The NOON spectrum connection

The NOON spectrum of the alchemi C/T skeleton (C06) is the PCA output on the
molecular orbital Grassmannian:

| PCA concept | Chemistry concept | ISA |
|-------------|-----------------|-----|
| Data matrix X | CI coefficient matrix | State vector |
| Covariance Σ = XX†/m | 1-RDM (one-body density matrix) | Reduced density |
| Top-k eigenvalue σₖ² | NOON (natural orbital occupation) | LABEL eigenvalue |
| Gap σₖ²/σₖ₊₁² | C/T threshold (C-box vs T-arrow) | β* snap condition |
| V* ∈ Gr(k,n) | Natural orbital basis | ORBIT fixed point |
| Schubert cell of V* | Active space | Positroid cell |

**The CASSCF algorithm (P01, Paper 596) is PCA on the electronic wavefunction
Grassmannian, run iteratively.** The orbital gradient is the Riemannian gradient
of the energy functional on Gr(k,n); the orbital Hessian is the Fisher-Rao
metric; the convergence criterion (σ₁² crossing 0.88 threshold in x596c) is
the Schubert variety crossing = the PCA gap condition.

## Oja's rule and natural gradient

Oja's online PCA rule: dV/dt = (I − VV†)ΣV is the Riemannian gradient of
f(V) = tr(V†ΣV) on Gr(k,n), using the round metric. It converges to V* at
rate proportional to σₖ² − σₖ₊₁² — the spectral gap, the ISA β*. **Oja's rule
is the natural gradient ORBIT on the statistical manifold of data distributions
parametrised by their principal subspace** — the intersection of PCA (GS02)
and information geometry (IG01).

## Validation

- SVD algorithm: Golub & Reinsch (1970). Computes top-k eigenspace to machine
  precision in O(nk²) time. Implemented in LAPACK, NumPy, PyTorch.
- Oja's rule: Oja (1982). Convergence proved; stationary points = top-k eigenspace.
- Wedin's theorem: Wedin (1972). Perturbation bound for eigenspaces; exact.
- Alchemi / NOON spectrum: Papers 588/596; x596a–e PASS 7/7 confirming
  CASSCF convergence = Schubert variety crossing.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
