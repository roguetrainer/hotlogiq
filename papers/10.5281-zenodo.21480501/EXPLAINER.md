---
layout: default
title: "Raven on Existing Hardware: Simulating PT Symmetry Today"
parent: Explainers
nav_exclude: true
tags: [pt-symmetry, exceptional-points, raven-isa, naimark-dilation, lindblad, postselection, reweighting, ibm, ionq, quantinuum, hardware, ep-sensing]
portfolio: A
---

## You Don't Need New Hardware

*Plain-language explainer for [doi:10.5281/zenodo.21480501](https://doi.org/10.5281/zenodo.21480501) (#639)*

---

## The access problem

The Raven ISA operates in the complex-β plane: β = σ + it/ℏ with σ ≠ 0. This is PT-symmetric, non-Hermitian quantum mechanics. Every quantum computer built today operates on the imaginary-β axis: unitary evolution e^{−iH₀t} with β = it/ℏ exactly. The non-Hermitian dynamics — where exceptional points live, where EP sensing works, where gain-loss competition creates the H¹/H² tier boundary — appear to be inaccessible.

This paper proposes three practical routes to simulate Raven ISA dynamics on standard qubit hardware, with honest resource accounting.

---

## The β landscape

| β value | Physics | ISA tier | Accessible on QC? |
|---------|---------|----------|-------------------|
| β → ∞ (real) | Classical, argmax | H⁰ ORBIT | Yes (classical) |
| β finite, real | Thermal/MGE | H¹ TWIST | Partial |
| β = it/ℏ | Quantum mechanics | H¹ TWIST | Yes (all QC) |
| β = σ + it, σ ≠ 0 | PT-symmetric / Raven | H² | Proposed here |

---

## Three paths

**Path A — Lindblad + postselection**

Couple the n-qubit system to an ancilla qubit. Evolve the joint system unitarily via a Hamiltonian engineered so that tracing out the ancilla gives the desired non-Hermitian evolution on the system. Postselect on the ancilla outcome that corresponds to "no jump" — the trajectory where the non-Hermitian evolution occurred.

Success probability: exp(−‖Γ‖t) where ‖Γ‖ is the gain-loss strength and t is time. For strong dissipation or long times, this is exponentially small.

✓ Works on any hardware today. ✓ Exactly correct (not approximate).  
✗ Exponential overhead. ✗ Not scalable beyond short times.

**Path B — Naimark dilation**

Embed the n-qubit non-Hermitian Hamiltonian H into a 2n-qubit Hermitian Hamiltonian H̃ via Stinespring dilation. The PT-symmetric dynamics run in the physical subspace; the ancilla n qubits are the "bath" degrees of freedom. The exceptional point structure is preserved in the dilation.

✓ Polynomial overhead (doubles qubit count). ✓ Full state vector is accessible.  
✗ Requires 2× qubit count. ✗ Naimark embedding can be non-trivial to construct.

**Path C — Classical probability reweighting (advocated)**

Run standard unitary circuits. For each shot, multiply the measured energy E by the Boltzmann-like weight w = exp(−σ · E) and renormalise classically. This recovers the non-Hermitian expectation value ⟨O⟩_{β=σ+it} without additional qubits or postselection. Works for any observable O that can be measured on the Hermitian circuit.

✓ Works today on IBM, IonQ, Quantinuum. ✓ No qubit overhead. ✓ Scalable.  
✗ Gives observables only, not the full non-Hermitian state. ✗ Statistical noise scales as exp(2σ·‖E‖)/N_shots — requires more shots for large σ or large energy range.

---

## Hardware roadmap

| Year | Capability | Raven ISA tier |
|------|-----------|---------------|
| 2026 | Classical reweighting on 100-qubit systems | S = 0 EP sensing |
| 2027 | Naimark dilation on 20+20 qubits | S = 1 tier crossing |
| 2028 | Native Lindblad control (trapped ion) | Full Raven ISA |
| 2030 | PT-symmetric photonic + classical hybrid | HPU-P substrate |
| 2035 | Dedicated non-Hermitian processor | Autonomous Raven |

---

## The 5-qubit example

A 5-qubit transverse-field Ising model with complex transverse field h = h₀ + iγ (where γ is the gain-loss rate) was simulated via Path C on a classical simulator. The exceptional point at γ = h₀ was located by tracking eigenvalue coalescence as (h₀, γ) varied.

PiTch number S = 1 confirmed: one loop around the EP in (h₀, γ)-space exchanges the two lowest eigenvalue sheets. Full resource accounting: 200 shots at each of 50 (h₀, γ) grid points. Reweighting recovered EP location to within 2% of exact.

---

## The postselection caveat

Path A's exponential postselection cost is the same overhead that cancels the claimed EP search speedup (see [PtEpSearch](/papers/10.5281-zenodo.21480499/)). This paper makes no claim that Raven ISA provides query complexity advantages — the argument is purely about simulation fidelity. EP sensing in the classical regime (no postselection) remains valid.

---

## See also

- [PtEpSearch](/papers/10.5281-zenodo.21480499/) — ⚠️ why PT speedup claims for search are wrong
- [PtSurvey](/papers/10.5281-zenodo.21480284/) — the six domains where PT EPs appear
- [PiTch](/papers/10.5281-zenodo.21509972/) — the invariant used to locate EPs in the 5-qubit example
- [PT Symmetry & Exceptional Points](/docs/theory/pt-symmetry) — the full theory page
