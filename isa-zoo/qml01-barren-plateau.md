---
layout: default
title: "QML01 — Barren Plateaus in Variational Quantum Circuits"
parent: ISA Zoo
nav_exclude: true
semiring: quantum
---

# QML01 — Barren Plateaus in Variational Quantum Circuits

| Field | Value |
|-------|-------|
| **Domain** | Quantum Machine Learning |
| **System** | Parameterised quantum circuit (PQC) on n qubits |
| **Group** | U(2ⁿ) acting on n-qubit Hilbert space |
| **H^k tier** | H¹ (TWIST failure at large depth) |
| **ISA** | Meld (β = it) at infinite circuit depth → Haar random |
| **Status** | Validated |
| **Opcodes** | TWIST(θ) · ORBIT · LABEL · SNAP (β*) |
| **Papers** | Paper 597, Paper 598, Paper 543 |

---

## Physical system

A **variational quantum circuit** (VQC) or parameterised quantum circuit (PQC)
is a sequence of unitary gates U(θ) = ∏ᵢ Uᵢ(θᵢ) applied to an initial state
|0⟩^⊗n, followed by a measurement of an observable H:

```
C(θ) = ⟨0| U(θ)† H U(θ) |0⟩
```

The goal of QML is to minimise C(θ) over the parameters θ ∈ ℝᵐ by gradient
descent. The **parameter-shift rule** (Mitarai et al. 2018; Schuld et al. 2019)
gives exact gradients:

```
∂C/∂θᵢ = ½[C(θ + π/2 eᵢ) − C(θ − π/2 eᵢ)]
```

The **barren plateau** (McClean et al. 2018): for a sufficiently deep,
randomly-initialised PQC on n qubits, the gradient variance satisfies:

```
Var[∂C/∂θᵢ] ≤ O(2⁻ⁿ)
```

The gradient is exponentially small in the number of qubits. The cost landscape
is essentially flat everywhere — a "barren plateau" — and gradient-based
optimisation fails exponentially.

---

## ISA reading

**The barren plateau is a maximum-entropy ORBIT.**

A deep random PQC approximates a Haar-random unitary: the ORBIT of |0⟩ under
U(2ⁿ) visits the full Hilbert space uniformly. This is the Meld ISA at β = it
with infinite TWIST depth — the uniform measure on the unitary group.

| QML concept | ISA translation | Tier |
|---|---|---|
| PQC gate layer Uᵢ(θᵢ) | TWIST(θᵢ) on Meld ISA | H¹ |
| Observable expectation ⟨H⟩ | LABEL eigenvalue | H⁰ |
| Parameter-shift gradient | finite difference of TWIST eigenphase | H¹ |
| Haar-random circuit (deep) | ORBIT over full U(2ⁿ) — maximum entropy | H⁰ |
| Barren plateau | ORBIT measure concentration on U(2ⁿ): gradient → 0 | H⁰ failure |
| Expressibility | ORBIT volume fraction of Gr(k,n) reached by the PQC | H⁰ |
| Entanglement capability | H² BIND count of the circuit | H² |
| Local vs global observable | H⁰ LABEL (local) vs H² BIND (global correlations) | H⁰/H² |

The barren plateau is not a pathology of a specific circuit ansatz — it is the
thermodynamic consequence of running the Meld ISA at **β = it, depth → ∞,
without a snap event**. The system reaches maximum entropy in the Hilbert space
before the optimisation can commit to any ORBIT sector.

---

## Target category

**VQC(n, d)** — the category of parameterised quantum circuits on n qubits of
depth d. Objects: unitaries U(θ) ∈ U(2ⁿ). Morphisms: parameter updates
θ → θ + δθ. The barren plateau theorem states that the gradient morphisms
satisfy Var[∂C/∂θᵢ] ≤ O(2⁻ⁿ) for d ≳ poly(n) — the gradient morphisms become
negligibly small.

## ISA programme (current, barren)

```
INIT:     LABEL[|0⟩^⊗n]                         -- initial state
LAYER 1:  TWIST(θ₁) on qubits 0..n-1            -- parameterised rotation layer
ENTANGLE: BIND(CNOT pairs)                        -- entangling layer
  ⋮         ⋮
LAYER d:  TWIST(θ_d)                             -- depth d → Haar random
MEASURE:  LABEL[⟨H⟩ = ⟨ψ|H|ψ⟩]                -- cost function evaluation
GRADIENT: LABEL[∂C/∂θᵢ via parameter shift]     -- gradient: O(2⁻ⁿ) variance
FAIL:     ORBIT[U(2ⁿ)] at max entropy            -- barren plateau
```

## β-plane diagnosis

The barren plateau is a **β-plane pathology**.

The Meld ISA (β = it) runs quantum circuits as pure unitary evolution.
At finite circuit depth d, the PQC samples a restricted subset of U(2ⁿ).
As d → ∞, the PQC approaches the Haar measure — the **Ambient at β = 0**
mapped to the unitary group. This is the worst possible initialisation:
maximum entropy, no committed ORBIT sector, gradient exponentially small.

```
β-plane position of the barren plateau:

Im(β)
  │
  │  ← Meld ISA (β = it): quantum computation
  │
  ●  ← Deep random PQC: approaching the unitary Ambient
  │     (β_eff → 0 along the imaginary axis)
  │
──┼──── Re(β)
  │
```

The fix is not a better ansatz — it is **β-annealing into the quantum regime**:

1. **Start at real β** (Forge ISA): run the circuit as a thermal system with
   finite temperature. The Gibbs distribution concentrates on low-energy sectors
   of the ORBIT — not maximally entropic.
2. **Find β*** (snap event): the cost function undergoes a phase transition from
   exploratory (H¹ Forge) to committed (H⁰ Origami sector).
3. **Wick-rotate to β = it** (Meld ISA): now the circuit is initialised in the
   correct ORBIT sector. The gradient is O(1), not O(2⁻ⁿ).

This is **thermodynamic pre-training**: use the Forge ISA to commit to the right
ORBIT sector, then engage the Meld ISA for quantum speedup. The barren plateau
never forms because the snap event at β* precedes the Wick rotation.

---

## The parameter-shift rule as TWIST eigenphase derivative

The parameter-shift rule states:

```
∂C/∂θ = ½[C(θ + π/2) − C(θ − π/2)]
```

In ISA language: the cost gradient is a **finite difference of TWIST eigenphases**.
The generator of the rotation gate Uᵢ(θ) = exp(−iθGᵢ/2) is the TWIST generator
Gᵢ with eigenvalues ±1. The parameter-shift rule follows from the spectral
decomposition of TWIST — it is the exact finite-difference formula for the
H¹ eigenphase gradient.

This observation generalises: for multi-eigenvalue generators (TWIST with
spectrum {λ₁, …, λₖ}), the generalised parameter-shift rule (Wierichs et al.
2022) involves 2k shift points — each pair corresponding to one TWIST eigenphase.

---

## Quantum advantage condition (OPU halt theorem)

From Paper 598 (Schubert halt theorem): a PQC achieves quantum advantage over
classical simulation exactly when the leading singular value of the CASSCF-like
matrix satisfies:

```
σ₁² < 1 − δ*     (δ* = ISA snap threshold ≈ 0.3)
```

This is the **OPU halt condition**: the Grassmannian geometry of the problem
forces the optimiser off the classical fixed point σ₁² = 1. When σ₁² ≥ 1−δ*,
the problem is in the H⁰ ORBIT sector and a classical algorithm suffices;
quantum advantage is genuine only in the H²-obstructed sector where BIND is
non-trivial.

The QML community has sought quantum advantage empirically (benchmarking circuits
against classical). The ISA answer is structural: quantum advantage exists iff
the data geometry triggers the Schubert halt.

---

## Validation

- McClean et al. (2018): barren plateau theorem — Var[∂C/∂θᵢ] ≤ O(2⁻ⁿ) for
  global observables and deep random circuits.
- Cerezo et al. (2021): local observables give O(2⁻ n/2) variance — slower decay
  but still exponential. Only shallow circuits or problem-specific structure escape.
- Schuld & Killoran (2019): quantum feature maps and the parameter-shift rule.
- Arrasmith et al. (2021): noise-induced barren plateaus — even shallow circuits
  develop barren plateaus under decoherence (the Forge ISA at finite β but with
  dissipation, not annealing).
- Grant et al. (2019): identity block initialisation as a heuristic fix. The ISA
  reading: this initialises the circuit near the H⁰ ORBIT sector (identity = β → ∞
  Origami fixed point), avoiding the maximum-entropy Ambient.

---

## Open questions

- **β-annealing schedule:** what is the optimal path in the β-plane from real β
  (Forge) to imaginary β (Meld) that minimises the total number of circuit
  evaluations? Is it a straight line (linear Wick rotation) or a curved path
  through the complex plane?
- **Forge-complete diagrammatic calculus:** ZX is complete for Clifford (β = it,
  fourth roots of unity). What is the complete diagrammatic rewriting system for
  the Forge ISA at finite real β, where two ZX-equal circuits can be Gibbs-inequivalent?
- **Noise as Forge perturbation:** decoherence moves β from the imaginary axis
  toward the real axis. Can the ISA quantify the optimal decoherence rate for
  thermodynamic pre-training?

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). See also:
[QML02 — Quantum Kernels](qml02-quantum-kernels.md) ·
[ST01 — Metropolis MCMC](st01-metropolis-mcmc.md) ·
[β is a coordinate](../core-ideas/beta-plane.md)*
