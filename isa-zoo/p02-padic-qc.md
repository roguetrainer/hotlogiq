---
layout: default
title: "P02 — p-adic Quantum Computer (Padit Architecture)"
parent: ISA Zoo
nav_exclude: true
---

# P02 — p-adic Quantum Computer (Padit Architecture)

| Field | Value |
|-------|-------|
| **Domain** | Computing Architectures |
| **System** | n-padit register over ℚ_p |
| **Group** | PGL(2, ℚ_p) / Bruhat-Tits automorphisms |
| **H^k tier** | H² |
| **ISA** | Meld (β → it, over ℚ_p) |
| **Status** | Speculative |
| **Opcodes** | ORBIT · TWIST · BIND · LABEL |
| **Papers** | Paper 544, Paper 543 |

---

## Physical system

The **padit** (*p-adic digit*) is the p-adic generalisation of the qubit: a unit
vector in the Hilbert space L²(ℤ/pⁿℤ) — square-integrable functions on the ring
of integers modulo pⁿ, with Haar measure. An n-padit register has pⁿ dimensions:
the same exponential growth as a qubit register, but base p instead of base 2.

**Qubits are 2-adic 1-padits.** Standard quantum computing is the p=2 special
case. For p=3, a 1-padit is a qutrit. The padit computer generalises the qubit
computer while keeping the same categorical structure.

The key claim (Paper 544): the **Number Theoretic Transform (NTT)** over
ℤ/pⁿℤ is the exact p-adic quantum Fourier transform. Shor's algorithm on a
p-adic quantum computer uses the NTT instead of the QFT — with no floating-point
phase errors, and computation exact to any desired p-adic precision.

---

## Target category

**p-Hilb** — the category of finite-dimensional Hilbert spaces over the
p-adic field ℂ_p (the completion of the algebraic closure of ℚ_p). Objects are
L²(ℤ/pⁿℤ); morphisms are p-adic unitary operators in U(pⁿ, ℂ_p). The Clifford
sector is simulated classically by the U-MGE (Paper 543 §11); the magic sector
requires physical p-adic hardware.

## Interpretation functor

F: C → p-Hilb defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Geodesic on Bruhat-Tits tree 𝒯_p: vertex → p+1 children or parent; Schubert cell = p-adic coset; winding = p-adic valuation v_p |
| TWIST  | p-adic Berry phase: Gauss sum τ_p(χ) = Σ_{x∈𝔽_p} χ(x) e^{2πix/p}; H¹ phase around p-adic torus |
| BIND   | NTT as p-adic QFT: F_{pⁿ}|k⟩ = (1/√pⁿ) Σ_j ω^{jk}|j⟩, ω = primitive pⁿ-th root of unity; H² class = second Chern number on tree |
| LABEL  | p-adic Clifford/magic discriminant: v_p(amplitude) ≥ 0 ↔ Clifford (classically simulable); v_p(amplitude) < 0 ↔ magic |

## ISA programme

```
INIT:     LABEL[|0⟩^⊗n | n-padit register at |0...0⟩]  -- initialise n padits
CLIFFORD: ORBIT[p-adic Pauli gates | Heisenberg-Weyl over Z/p^n Z]  -- H¹ sector (simulable)
QFT:      BIND[F_{p^n} | NTT over Z/p^n Z]             -- p-adic quantum Fourier transform (exact)
MAGIC:    TWIST[T_p | order-(p+1) rotation in C_p]      -- p-adic T-gate; H² resource
MEASURE:  LABEL[Born rule P(k) = |<k|psi>|_p^2]        -- rational probability, exact
CERTIFY:  LABEL[|tau_p(chi)| = sqrt(p) exactly?]        -- Gauss-sum certificate (H² output)
```

## Computable output

- **Rational Born probabilities**: P(k) = |⟨k|ψ⟩|_p² takes values in p^ℤ ∩ [0,1].
  Probabilities are positive rationals — exact, no floating-point error. This is
  a qualitative difference from standard quantum computing, where Born rule
  probabilities are generically irrational.
- **NTT as exact QFT**: the p-adic QFT on n padits is the Number Theoretic
  Transform, an algorithm already in production use for lattice-based
  post-quantum cryptography (Kyber, Dilithium). No floating-point phase errors;
  the transform is exact modulo pⁿ.
- **Gauss-sum certificate**: the H² topological certificate for the p-adic
  computation is |τ_p(χ)| = √p exactly (Gauss's theorem on quadratic Gauss sums).
  This is a hardware-verifiable integer condition — the p-adic analogue of the
  winding number certificate in real ISA computations.
- **p-adic Gottesman-Knill**: any circuit on n padits using only p-adic Pauli
  preparation, p-adic Clifford gates (entries in 𝒪_{ℂ_p}, the p-adic integers),
  and p-adic Pauli measurement can be classically simulated in O(n²) time by the
  U-MGE (Paper 543 §11). **The padit architecture has the same Clifford/magic
  distinction as the qubit architecture**, with p-adic integrality replacing
  Wigner non-negativity as the simulability criterion.

## The p-adic Clifford/magic distinction

| Quantity | Standard qubit | p-adic padit |
|----------|---------------|-------------|
| Clifford group | Entries in ℤ[ζ_8] | Entries in 𝒪_{ℂ_p} (p-adic integers) |
| Magic resource | Wigner negativity | p-adic non-integrality: v_p(amplitude) < 0 |
| Classical simulation | Stabiliser formalism | U-MGE on PPU |
| QFT | Approximate (FP phases) | NTT (exact, modular) |
| Born probabilities | Generically irrational | Positive rationals (p^ℤ) |
| Topological certificate | Winding number ∈ ℤ | Gauss sum |τ_p| = √p |

The **adèlic Clifford group** is the intersection of all p-adic Clifford groups:
𝒞_adèlic = 𝒞_ℝ ∩ ⋂_p 𝒞_{ℚ_p} — the universally simulable gate set across all
completions simultaneously.

## The Bruhat-Tits tree as computational tape

The Bruhat-Tits tree 𝒯_p is the p-adic analogue of the Poincaré half-plane:
a (p+1)-regular tree whose automorphism group is PGL(2, ℚ_p). The padit
register's computational state traces a path in 𝒯_p:

- Each **vertex** at depth n = one p-adic digit of precision
- Each **edge** = one p-SPLIT (one coset choice in ℤ/pℤ)
- **Halting** = Schubert variety crossing in 𝒯_p = p-adic snap condition
  v_p(β) ≥ v_p(ΔE)
- **Boundary** ∂𝒯_p = ℙ¹(ℚ_p) = Cantor set with ultrametric structure =
  Palmer's invariant set I_U (Paper 543 §9)

**The p-adic QC is an OPU (P01) running on the Bruhat-Tits tree** rather than
on the Grassmannian. The Schubert stratification of Gr(k,n) (P01) becomes the
coset stratification of PGL(2,ℚ_p)/B (Bruhat decomposition, which is the
algebraic source of the tree). They are the same categorical structure over
different fields (ℂ vs ℂ_p).

## Proposed physical architectures

| Architecture | Description | Status |
|--------------|-------------|--------|
| Holographic QC on 𝒯_p | Qudits on tree vertices; boundary = Cantor set I_U | Theoretical |
| Software p-adic QC | Standard hardware, NTT gate alphabet | Near-term feasible |
| Spin glass with RSB | Parisi matrix = p-adic order parameter | Speculative |

**The Software p-adic QC is near-term feasible**: use existing superconducting
or trapped-ion hardware, but restrict the gate alphabet to NTT gates and p-adic
Clifford gates. The classical simulation (U-MGE on a PPU) is exact; the magic
sector requires standard non-Clifford gates whose matrix entries happen to be
p-adically non-integral. No new hardware needed for the Clifford sector.

## Connection to the ISA framework

**The NTT = BIND.** The p-adic QFT (NTT) is the BIND opcode at the p-adic rung:
it implements the H² holonomy of the p-adic torus, wrapping the padit register
around a 2-cycle in the Bruhat-Tits building. The Gauss-sum certificate |τ_p| = √p
is the H² topological invariant — the p-adic second Chern number.

This makes the padit architecture the p-adic column in the RPU family table (P01):

| XPU | Tape manifold | Group | β regime | QFT |
|-----|--------------|-------|----------|-----|
| QPU | CP^{2ⁿ⁻¹} | U(2ⁿ) | β = it | Hadamard + phase |
| OPU | Gr(k,n) | U(n) | finite β | CASSCF orbital rotation |
| **PPU / padit QC** | **𝒯_p** | **PGL(2,ℚ_p)** | **β_p = it_p** | **NTT (exact)** |
| A-QC | 𝔸_ℚ | Adèlic group | adèlic β | Product formula |

## Validation status

**Speculative** — no physical padit system has been demonstrated. However:
- NTT hardware is in production (PQC accelerators: Kyber, Dilithium)
- p-adic Gottesman-Knill theorem follows directly from standard proof (substitute
  p-adic integers for Gaussian integers)
- The NTT = p-adic QFT identification is a mathematical fact (Vladimirov-Volovich
  1989; explicit in Paper 543 §14)
- Rational Born probabilities and Gauss-sum certificate are analytically derived

The speculative claim is that a *physical* system realises p-adic amplitudes.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
