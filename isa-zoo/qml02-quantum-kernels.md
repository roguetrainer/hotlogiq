---
layout: default
title: "QML02 — Quantum Kernel Methods"
parent: ISA Zoo
nav_exclude: true
semiring: quantum
---

# QML02 — Quantum Kernel Methods

| Field | Value |
|-------|-------|
| **Domain** | Quantum Machine Learning |
| **System** | Quantum feature map φ: x → \|φ(x)⟩ ∈ ℋ; kernel K(x,x') = \|⟨φ(x)\|φ(x')⟩\|² |
| **Group** | U(2ⁿ) acting on feature Hilbert space |
| **H^k tier** | H⁰ (kernel) / H¹ (feature map) / H² (advantage condition) |
| **ISA** | Meld (β = it) with data-dependent ORBIT structure |
| **Status** | Validated |
| **Opcodes** | ORBIT · LABEL · TWIST(x) · BIND |
| **Papers** | Paper 598, Paper 543, Paper 473 |

---

## Physical system

A **quantum kernel** encodes classical data x ∈ ℝᵈ into a quantum state
\|φ(x)⟩ = U(x)\|0⟩^⊗n via a data-dependent unitary U(x), then computes the
inner product:

```
K(x, x') = |⟨φ(x)|φ(x')⟩|² = |⟨0| U(x)† U(x') |0⟩|²
```

This is used as the kernel in a classical support vector machine (SVM) or kernel
ridge regression. The hope for quantum advantage: if U(x) encodes a feature map
that is hard to compute classically, the kernel K(x,x') gives access to a
classically intractable feature space.

**Expressibility** (Sim et al. 2019): the range of states \|φ(x)⟩ reachable by
U(x) as x varies — the ORBIT of |0⟩ under the data-dependent unitary family.
**Entanglement capability** (Sim et al. 2019): the average entanglement of
\|φ(x)⟩, measured by Meyer-Wallach or entanglement entropy — the H² BIND content.

The **projected quantum kernel** (Huang et al. 2021): instead of the full
Hilbert space inner product, use the reduced density matrix on k qubits:

```
K_proj(x, x') = Tr[ρ_k(x) ρ_k(x')]    ρ_k(x) = Tr_{n-k}[|φ(x)⟩⟨φ(x)|]
```

This is an ORBIT inner product on Gr(2^k, 2^n) — the Grassmannian of k-qubit
reduced states inside the full n-qubit Hilbert space.

---

## ISA reading

| QML concept | ISA translation | Tier |
|---|---|---|
| Feature map U(x)\|0⟩ | ORBIT[x] on Meld ISA: data labels an ORBIT sector | H⁰ |
| Data-encoding gate U(x) | TWIST(x): data enters as TWIST eigenphase | H¹ |
| Kernel K(x,x') = \|⟨φ(x)\|φ(x')⟩\|² | ORBIT inner product: transition amplitude | H⁰ |
| Projected kernel Tr[ρρ'] | ORBIT inner product on Gr(k,n) | H⁰ |
| Expressibility | ORBIT volume: fraction of Gr(2^k,2^n) reached | H⁰ |
| Entanglement capability | BIND count: H² content of \|φ(x)⟩ | H² |
| Quantum advantage condition | σ₁²(x,x') < 1−δ*: Schubert halt on data kernel matrix | H² |
| Data re-uploading | LABEL(x)∘TWIST interleaved: data as opcode argument | H⁰/H¹ |

**Key insight:** the quantum kernel is an **ORBIT inner product on the
Grassmannian**. The classical kernel trick computes inner products in a
reproducing kernel Hilbert space (RKHS); the quantum kernel computes inner
products in a Grassmannian Hilbert space. The ISA makes this precise: the
feature map is an ORBIT, the kernel is its transition amplitude, and quantum
advantage is the Schubert halt condition applied to the kernel Gram matrix.

---

## Target category

**QKernel(n, 𝒳)** — the category of quantum kernels on n qubits over data
domain 𝒳. Objects: data points x ∈ 𝒳 with associated states \|φ(x)⟩ ∈ ℋ_{2^n}.
Morphisms: positive semi-definite kernel matrices K ∈ ℝ^{m×m} for m data points.
The projected quantum kernel factors through the Grassmannian: 𝒳 → Gr(2^k, 2^n)
→ ℝ via the ORBIT map and inner product.

## ISA programme

```
INPUT:    LABEL[x ∈ 𝒳]                           -- classical data point
ENCODE:   TWIST(x) on qubits 0..n-1              -- data-dependent rotation
          BIND(entangling layer)                   -- H² content creation
          TWIST(x) [repeated layers]               -- data re-uploading
STATE:    ORBIT[\|φ(x)⟩ = U(x)\|0⟩]             -- quantum feature state
KERNEL:   LABEL[K(x,x') = \|⟨φ(x)\|φ(x')⟩\|²]  -- ORBIT inner product
PROJECT:  ORBIT[ρ_k(x) ∈ Gr(2^k, 2^n)]          -- projected kernel
CLASSIFY: LABEL[f(x) = Σᵢ αᵢ K(x,xᵢ)]           -- SVM decision function
HALT:     SNAP[σ₁²(K) < 1−δ*]                    -- quantum advantage check
```

---

## β-plane position and the thermal kernel

The standard quantum kernel lives at β = it (Meld ISA, pure quantum). But the
ISA reveals a richer structure: **the kernel has a natural thermal extension**.

Define the **thermal quantum kernel** at inverse temperature β:

```
K_β(x, x') = Tr[e^{-β H(x)} · e^{-β H(x')}] / (Z(x) Z(x'))
```

where H(x) is the data-dependent Hamiltonian and Z(x) = Tr[e^{-βH(x)}] is the
partition function. At β = it this reduces to the standard quantum kernel.
At β real this is a **classical thermal kernel** — computable by MCMC and related
to the Gram matrix of the Gibbs distribution.

```
β-plane positions of the kernel family:

Im(β)
  │  ← Standard quantum kernel K_β at β = it
  │
──┼─────────────────────────── Re(β)
  │  ← Thermal kernel K_β at β real
  │     β→0: uniform kernel (useless)
  │     β=β*: Forge snap — maximum information kernel
  │     β→∞: classical hard kernel (argmax feature map)
```

The **optimal kernel** lives near β* on the real axis: this is the Forge ISA
snap point where the partition function Z(x) has maximum curvature — the
kernel is most discriminative per unit circuit cost. This is the QML analogue
of the 0.234 optimal acceptance rate in MCMC (ST01).

---

## The unified classical-quantum ML model

The ISA provides a single model that contains classical ML and quantum ML as
special cases:

| Regime | β | Model | Training |
|--------|---|-------|----------|
| Classical (hot) | β → 0 | Uniform / max entropy | No learning |
| Classical (Forge) | β real, finite | Energy-based model (EBM) | MCMC / contrastive divergence |
| Classical (Origami) | β → ∞ | Hard decision tree / SVM | Gradient descent |
| Transition | β = β* | Snap event — phase transition | Free energy minimisation |
| Quantum (Meld) | β = it | Quantum kernel / PQC | Parameter shift rule |
| Complex (Forge+Meld) | β = σ + it | Dissipative QML | β-annealing |
| p-adic | β ∈ ℚ_p | Ultrametric kernel | Hensel lifting |

The **unified training trajectory** is a path in the β-plane:

```
1. START:  β real, large (Origami — structured initialisation)
2. WARM:   β → β* (Forge snap — commit to right ORBIT sector)
3. WICK:   β = β* → iβ* (Wick rotation — engage quantum coherence)
4. OPTIMISE: parameter shift on Meld ISA (gradient now O(1))
5. HALT:   SNAP when σ₁²(K) < 1−δ* (quantum advantage confirmed)
```

This eliminates barren plateaus (step 2 commits before step 3 engages),
provides a principled initialisation, and gives a structural criterion for
when quantum advantage is genuine (step 5).

---

## Expressibility and ORBIT volume

Sim et al. (2019) define expressibility as the deviation of the PQC's state
distribution from the Haar measure:

```
Expr = D_KL(P_{PQC}(F) || P_Haar(F))
```

where F = |⟨φ|\|ψ⟩|² is the fidelity between random circuit outputs.

**ISA reading:** expressibility is **ORBIT volume** — the fraction of the
Grassmannian Gr(1, 2^n) ≅ ℂP^{2^n−1} reached by the feature map. High
expressibility = large ORBIT volume = PQC approaches Haar measure. But high
expressibility also means barren plateaus (QML01): the ORBIT is too large to
navigate by gradient descent.

The ISA resolves this tension: high expressibility is valuable for the
**Forge ISA pre-training phase** (large ORBIT = many sectors to explore),
but the circuit should then **snap** to a low-dimensional ORBIT sector
(low expressibility, targeted, gradient-navigable) before Wick-rotating to
the Meld ISA.

---

## Quantum advantage: the Schubert halt theorem applied to kernels

From Paper 598: the OPU halts (achieves quantum advantage) when:

```
σ₁²(Gram matrix) < 1 − δ*
```

Applied to quantum kernels: compute the SVD of the kernel Gram matrix
K ∈ ℝ^{m×m}. If the leading singular value satisfies σ₁² ≥ 1−δ*, the kernel
is in the **H⁰ ORBIT sector** — it can be approximated by a classical kernel
(RBF, polynomial) without quantum overhead. If σ₁² < 1−δ*, the kernel has
genuine **H² BIND content** and a classical approximation requires exponential
resources.

This gives a **pre-screening criterion for quantum kernel methods**:
compute the SVD of K before training. If the Schubert halt condition fails,
switch to a classical kernel — the quantum circuit is unnecessary. If it holds,
quantum advantage is structurally guaranteed.

---

## Validation

- Schuld & Killoran (2019): quantum feature spaces and parameter-shift rule.
  The H¹ TWIST eigenphase gradient is exact.
- Havlíček et al. (2019): quantum kernel SVM with classically intractable
  feature spaces. First experimental demonstration of a quantum kernel on IBM
  hardware.
- Huang et al. (2021): projected quantum kernels — classical shadows give
  efficient approximations when the reduced state ρ_k is in the H⁰ ORBIT sector.
  The ISA: classical shadows succeed when σ₁²(ρ_k) ≥ 1−δ*.
- Sim et al. (2019): expressibility and entanglement capability. These are
  ORBIT volume and BIND count in ISA language.
- Thanasilp et al. (2022): exponential concentration of quantum kernels —
  the kernel values concentrate around 1/2^n exponentially in n, making them
  useless for classification. ISA reading: the kernel has degenerated to the
  Ambient (β → 0), maximum entropy ORBIT.

---

## Connection to ZX calculus

ZX calculus (Coecke & Duncan 2008) is the complete diagrammatic rewriting
system for the stabiliser fragment of the Meld ISA — the β = it, Clifford
(fourth-roots-of-unity) slice. It can represent and simplify any quantum
feature map built from Clifford gates.

However, ZX has no notion of:
- **Temperature β**: two ZX-equal circuits are Gibbs-inequivalent at finite β
- **The kernel's thermal extension**: K_β at real β is invisible to ZX
- **The Schubert halt condition**: quantum advantage requires H² BIND content,
  which ZX cannot detect (ZX lives in the stabiliser H⁰ sector)

The ISA is the thermodynamic extension of ZX that captures all three.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). See also:
[QML01 — Barren Plateaus](qml01-barren-plateau.md) ·
[ML01 — Transformer Attention](ml01-attention-mechanism.md) ·
[β is a coordinate](../core-ideas/beta-plane.md)*
