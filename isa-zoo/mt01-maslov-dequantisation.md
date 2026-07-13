---
layout: default
title: "MT01 — Maslov Dequantisation"
parent: ISA Zoo
nav_exclude: true
---

# MT01 — Maslov Dequantisation

| Field | Value |
|-------|-------|
| **Domain** | Mathematical Methods |
| **System** | WKB / stationary phase as ℏ → 0 |
| **Group** | Sp(2n, ℝ) (symplectomorphisms of phase space) |
| **H^k tier** | H⁰ |
| **ISA** | Origami (β → ∞) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · LABEL |
| **Papers** | Paper 543, Paper 201, Paper 477 |

---

## Physical system

Maslov dequantisation is the passage ℏ → 0 from quantum wave mechanics to
classical geometric optics, made algebraically precise: complex amplitudes become
tropical quantities (piecewise-linear phase functions), quantum superposition
becomes classical max, and interference becomes argmax. The algebraic transition is:

```
ℏ → 0:  (ℂ, +, ×)  →  (ℝ ∪ {−∞}, max, +)
```

The complex semiring of amplitudes deforms into the tropical semiring of actions.
**This is the MGE in the β → ∞ limit.** The MGE Gibbs weight exp(−βE) tropicalises
to argmax(−E) as β → ∞, selecting the minimum-energy orbit — the classical
ground state.

**In field theory:** Maslov dequantisation explains why QFT path integrals reduce
to classical field equations in the limit ℏ → 0 (saddle-point / stationary-phase
approximation). The classical trajectory is the saddle point of the action; the
quantum amplitude is the sum over all paths weighted by exp(iS/ℏ); as ℏ → 0,
the sum is dominated by the saddle — the tropical maximum.

---

## Target category

**Symp(2n, ℝ)** — the symplectic category whose objects are cotangent bundles
T*Q (phase spaces) and whose morphisms are canonical transformations (Lagrangian
correspondences). The semiclassical limit maps:
- Quantum states (wavefunctions) → Lagrangian submanifolds of T*Q
- Quantum observables → classical Hamiltonians on T*Q
- Quantum time evolution → Hamiltonian flow (symplectomorphism)

## Interpretation functor

F: C → Symp(2n, ℝ) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Classical trajectory: (q(t), p(t)) = flow of Hamilton's equations; the tropical fixed point of the quantum ORBIT |
| TWIST  | Maslov index correction μ ∈ ℤ at caustics: the half-integer phase shift ψ → ψ · e^{iμπ/2} that restores the correct WKB phase when characteristics cross; the H¹ correction to H⁰ |
| LABEL  | Action eigenvalue S[q] = ∫ p dq − H dt: the tropical polynomial whose argmax selects the classical path; caustic locus where ∂²S/∂q² = 0 |

## ISA programme

```
ACTION:   LABEL[S[q] = int(p dq - H dt)]            -- compute action along each path
SADDLE:   ORBIT[delta_S = 0 | Hamilton's eqs]       -- find stationary-phase path
CAUSTIC?: LABEL[det(d^2S/dq^2) = 0?]               -- caustic = stationary phase failure
MASLOV:   TWIST[mu += 1 | per caustic crossing]     -- Maslov index increment
CORRECT:  TWIST[psi *= exp(i mu pi/2)]              -- WKB phase correction
OUTPUT:   ORBIT[psi_WKB = A(q) exp(iS(q)/hbar + i mu pi/2)]  -- corrected amplitude
```

## Computable output

- **Classical trajectory**: the path q(t) solving Hamilton's equations. This is
  the β → ∞ (tropical) output of the MGE: the exact ground state orbit, selected
  by argmin of the action.
- **WKB amplitude**: ψ_WKB(q) = A(q) e^{iS(q)/ℏ + iμπ/2}, where A(q) =
  |det(∂²S/∂q∂q₀)|^{−1/2} is the Van Vleck determinant (the H⁰ density of
  trajectories) and μ is the Maslov index (the H¹ TWIST correction).
- **Maslov index** μ ∈ ℤ: the integer counting the number of caustic crossings
  along the classical path. μ is the topological invariant of the path in Symp:
  it counts how many times the Lagrangian submanifold L = {(q, ∂_q S)} has
  become vertical (∂q/∂p₀ = 0). The Maslov index is the output of the TWIST
  opcode: it is the H¹ winding number of the Lagrangian path in the Lagrangian
  Grassmannian Λ(n) = U(n)/O(n).
- **Semiclassical spectrum**: the Bohr-Sommerfeld quantisation condition,
  corrected by the Maslov index, gives the energy levels:

  ∮ p dq = 2πℏ(n + μ/4),  n ∈ ℤ

  This is the tropical (H⁰) action quantised by the H¹ TWIST correction μ/4.

## The β-plane interpretation (Paper 543)

Maslov dequantisation is **the Origami ISA limit of the Meld ISA**:

| β-plane position | ISA | Physical meaning | Mathematical object |
|-----------------|-----|-----------------|---------------------|
| β = it, t large | Meld | Full quantum | Path integral over all paths |
| β = it → ∞ | Meld → Origami boundary | WKB regime | Stationary phase approximation |
| β → ∞, real | Origami | Classical | Single classical trajectory |
| Caustic | TWIST event | Maslov index | H¹ correction at H⁰ breakdown |

**The Wick rotation and Maslov:** rotating β from the imaginary axis (Meld) to
the real axis (Origami) is Maslov dequantisation. The β = it → β = T (real)
passage corresponds to analytic continuation of the path integral from Minkowski
(oscillatory, quantum) to Euclidean (decaying, classical). The Euclidean saddle
is the instanton (G01); the Minkowski saddle is the classical trajectory. The
soliton (D06) is the β → ∞ (Origami, real) limit; the instanton (G01) is the
β → 0 (Meld, imaginary) limit. The Maslov index is the interpolation.

**Viscosity and ν = 1/β:** the viscous Burgers equation (D07) implements Maslov
dequantisation in fluid dynamics: ν plays the role of ℏ. As ν → 0, the smooth
viscous flow dequantises to the discontinuous shock (tropical). The Rankine-
Hugoniot condition is the fluid-dynamic Maslov index — the H¹ TWIST correction
at the caustic of characteristics.

## Why this entry belongs in the zoo

Maslov dequantisation is not a physical system — it is the **universal meta-
theorem** connecting every Meld-ISA entry to its Origami-ISA limit. But it
deserves a zoo entry because:

1. **It is a concrete, computable object.** The Maslov index is an integer
   computable from the trajectory, not an abstraction. The WKB formula with
   μ correction gives quantitatively accurate energy levels.
2. **It pins down what "β → ∞" means in physics.** The claim that Origami ISA
   is the classical limit of Meld ISA is not a vague analogy; it is the
   WKB theorem with the Maslov correction, proved by Maslov (1965) and made
   rigorous by Hörmander (1971).
3. **It is the source of the TWIST opcode.** The Maslov index is the original
   TWIST: the first known case where a pure H⁰ computation (ORBIT + LABEL)
   fails at a caustic and needs an H¹ correction (TWIST). Every other TWIST
   in the zoo is a descendant of this one.

## Validation

- WKB approximation: Wentzel (1926), Kramers (1926), Brillouin (1926). Gives
  correct energy levels to O(ℏ²) for smooth potentials.
- Maslov index correction: Maslov (1965). Removes the WKB divergence at
  caustics; gives correct half-integer quantum numbers for harmonic oscillator
  (μ = 2 per period → n + ½ levels).
- Lagrangian intersection Floer homology: the Maslov index is the grading in
  Floer theory — the mathematical descendant of the original physics, rigorous
  in infinite dimensions. Floer (1988).
- Hormander's microlocal analysis: the full rigorous version of the WKB theorem
  in any dimension, including the Maslov index as a class in H¹(Λ(n), ℤ).

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
