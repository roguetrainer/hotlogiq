---
layout: default
title: "PiTch: A Topological Invariant for PT-Symmetric Systems"
parent: Explainers
nav_exclude: true
tags: [pt-symmetry, exceptional-points, topological-invariant, berry-phase, kato-splitting, monodromy, non-hermitian, bender-boettcher, origami-isa]
portfolio: A
---

## When Two Eigenvalues Collide — and How to Count It

*Plain-language explainer for [doi:10.5281/zenodo.21509972](https://doi.org/10.5281/zenodo.21509972) (#678)*

---

## The problem with winding numbers

In a PT-symmetric quantum system, the parameter space is punctured by exceptional points (EPs) — singularities where two or more eigenvalues and their eigenvectors simultaneously coalesce. Encircling an EP once permutes the eigenvalue sheets; the Berry phase jumps by π. This much is well-known.

The standard tool for counting EP encirclements is the **winding number**: how many times does the path loop around a region of parameter space? But the winding number is too coarse. Consider two situations: one path encloses a single 3rd order EP (three sheets coalesce simultaneously); another path encloses three separate 2nd order EPs. Both have winding number 1. But they are physically different — the monodromy groups differ (ℤ₃ vs ℤ₂×ℤ₂×ℤ₂), the Berry phases differ, the Kato splitting exponents differ. Winding number cannot tell them apart.

---

## The PiTch number

We introduce the **PiTch number** S(γ) for a path γ in parameter space:

> S(γ) = Σ (order of EP − 1) over all EPs enclosed or crossed by γ

For a 2nd order EP the contribution is 1; for a 3rd order EP it is 2; for an n-th order EP it is n−1. A path that avoids all EPs has S = 0.

The name carries three meanings: **Pi** (π) from the Berry-phase formula Φ = πS mod 2π; **T** from PT symmetry, which breaks at each EP; and **pitch** from Bender's own description of EPs as "pitchfork bifurcations in the complex-ε plane" — when two eigenvalue sheets collide at a pitchfork, the spectral pitch changes.

---

## Three faces of one invariant

The PiTch number unifies three facts that were previously known separately:

**Eigenvalue sheet permutation.** One loop around an n-th order EP permutes the n sheets by an n-cycle — the generator of ℤₙ. After k loops the permutation is (0 1 … n−1)^k. For a 4th order EP, two loops give the permutation (0 2)(1 3) — the order-2 element of ℤ₄, not the identity. Four loops return to the identity. These group elements are directly observable by tracking which eigenvalue sheet ends up where.

**Berry phase.** For a closed loop, the biorthogonal Berry phase accumulated by each eigenstate is Φ = πS mod 2π. If S is odd, the Berry phase is π (spinorial, half-integer winding); if S is even it is 0 (trivial). This is the PT-symmetric analogue of the Aharonov-Bohm phase.

**Kato splitting.** Near an n-th order EP at ε = 0, the eigenvalue gap scales as |ε|^{1/n} = |ε|^{1/(S+1)}. The Kato exponent is determined by the PiTch number of a small loop around the EP.

All three are confirmed numerically for n = 2, 3, 4 (24/24 checks across four experiments).

---

## Applied to Bender-Boettcher 1998

Bender and Boettcher's famous result — that H = p² + x²(ix)^ε has entirely real, positive spectrum for ε ≥ 0, despite being non-Hermitian — is, in PiTch language, the statement that **every level pair satisfies S = 0 throughout ε ∈ [0, 2]**. All pairs stay in the PT-unbroken phase; none cross their PiTch threshold.

As ε decreases below zero, level pairs cross their individual PiTch thresholds one by one, becoming complex in order of increasing coupling strength. The total PiTch number S(ε) = #{n : ε < ε_n} counts how many pairs have made the transition.

The EP at ε = 0 is the β*₁₂ snap threshold of the ISA — the first PiTch threshold to be crossed as the system enters the PT-broken phase.

---

## The T-count analogy

In fault-tolerant quantum computing, the T-count of a circuit measures its non-Clifford resource cost. The PiTch number is the PT-symmetric analogue: a path with S = 0 stays in one computational tier and can be simulated efficiently within that tier; S > 0 requires tracking eigenvalue sheet permutations across tier boundaries. EP sensors — which achieve anomalous sensitivity δε^{1/n} near an n-th order EP — operate at S = 0, poised at the PiTch threshold without crossing it.

---

## See also

- [PtSurvey](/papers/10.5281-zenodo.21480284/) — why exceptional points appear in five unexpected domains
- [NonHermIsa2](/papers/10.5281-zenodo.21480491/) — PT symmetry and the 38-fold way in ISA language
- [PT Symmetry & Exceptional Points](/docs/theory/pt-symmetry) — the full theory page
