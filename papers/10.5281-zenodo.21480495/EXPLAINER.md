---
layout: default
title: "PT Lifting: Speedup from Symmetry"
parent: Explainers
nav_exclude: true
tags: [pt-symmetry, exceptional-points, quantum-algorithms, speedup, berry-phase, fourier, random-walk, hamiltonian-simulation, conditions-a-b-c]
portfolio: A
---

## One Language, Two Mechanisms

*Plain-language explainer for [doi:10.5281/zenodo.21480495](https://doi.org/10.5281/zenodo.21480495) (#635)*

---

## The central question

Every claimed quantum advantage can be described as a speedup over classical computation. But *why* do quantum algorithms speed things up? The standard answers — Fourier-transform phase cancellation for Shor, amplitude amplification for Grover — are correct but not unified. They look like accidents of the specific algorithm.

This paper argues that PT symmetry provides the correct unified language. Two families of quantum algorithms speed things up for genuinely different reasons, and PT lifting makes the distinction precise.

---

## Two mechanisms

**Mechanism 1 — Fourier paradigm (Condition A + Condition C)**

Shor's algorithm works because the quantum Fourier transform concentrates amplitude on the period of a function. The key algebraic structure is that the group ℤ_N acts on the computational basis by translation, and the Fourier transform diagonalises this action. The PT-symmetric formulation makes this explicit: the translation-invariant Hamiltonian is PT-symmetric, with the parity operator 𝒫 being the group reflection x ↦ N−x and the time-reversal 𝒯 being complex conjugation. The speedup arises because PT symmetry forces eigenvalues to be real (or come in complex conjugate pairs), which constrains where amplitude can accumulate.

**Condition A** (for Fourier-paradigm lifting): the function being computed must be periodic under a group G that acts by a unitary representation on the Hilbert space. Shor satisfies this; Grover does not.

**Mechanism 2 — Walk paradigm (Condition B + Condition C)**

Quantum walks speed up search because interference between paths at amplitude level is faster than probability mixing in classical random walks. The quadratic speedup (Grover: O(√N) vs O(N)) comes from destructive interference annihilating non-solution paths. The PT-symmetric formulation: the walk Hamiltonian is PT-symmetric on the graph, with 𝒫 being the graph automorphism and 𝒯 the reversal of walk direction. The quadratic speedup = the EP₂ scaling ε^{1/2}: walking near an EP₂ gives sensitivity to the solution that scales as the square root of the gap.

**Condition B** (for walk-paradigm lifting): the underlying graph must support a PT-symmetric walk Hamiltonian — the graph must have a reflection symmetry that commutes with the walk dynamics.

**Condition C** (both paradigms): the target computational problem must not be in the stabiliser sector. If the solution can be reached by a sequence of Clifford gates, the PT-symmetric speedup collapses to the classical result. Condition C is the non-trivial magic requirement.

---

## What PT lifting is not

The paper explicitly drops the earlier claim (from draft notes) that PT lifting gives a speedup for *all* quantum algorithms iff the Hamiltonian is PT-symmetric. That "iff" was too strong. The Fourier paradigm needs Condition A; the walk paradigm needs Condition B; both need Condition C. Hamiltonian simulation — evolving e^{−iHt} for an arbitrary Hermitian H — does NOT satisfy Condition A or B generically, and so PT lifting does not predict BQP-wide speedup from PT symmetry alone.

This is an important correction to overenthusiastic earlier statements. PT symmetry is necessary but not sufficient.

---

## The exceptional point connection

Each speedup mechanism reaches its maximum near an EP. For the Fourier paradigm, the EP is in the periodicity-breaking parameter: at the EP, the Fourier basis exactly diagonalises the translation action with no residual error. For the walk paradigm, the EP is the amplitude-concentration singularity: at the EP, the solution amplitude grows as ε^{1/2} relative to the non-solution amplitude, giving the Grover speedup.

The PiTch number S counts these EP contributions. A single Grover search has S = 0 (single EP, approached but not crossed); Shor's algorithm has S = 0 on each coset (single Fourier basis, PT-symmetric, EP at the period itself). Algorithms with S > 0 — path integrals crossing multiple EPs — are predicted to give super-Grover speedups, subject to Conditions A or B and C.

---

## See also

- [PiTch](/papers/10.5281-zenodo.21509972/) — the invariant that counts EP contributions to the speedup
- [PtEpSearch](/papers/10.5281-zenodo.21480499/) — ⚠️ when EP-based speedup claims are wrong
- [PtSurvey](/papers/10.5281-zenodo.21480284/) — the Snap Theorem connecting EPs to MGE transitions
- [PT Symmetry & Exceptional Points](/docs/theory/pt-symmetry) — the full theory page
