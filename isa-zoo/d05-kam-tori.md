---
layout: default
title: "D05 — KAM Tori and Chaos Onset"
parent: ISA Zoo
nav_exclude: true
semiring: probabilistic
---

# D05 — KAM Tori and Chaos Onset

| Field | Value |
|-------|-------|
| **Domain** | Dynamical Systems |
| **System** | Nearly-integrable Hamiltonian systems |
| **Group** | 𝕋ⁿ (n-torus, action-angle symmetry) |
| **H^k tier** | H⁰ / H¹ / H² |
| **ISA** | Forge (β ≈ β*) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · BIND · LABEL |
| **Paper** | Paper 512 |

---

## Physical system

A nearly-integrable Hamiltonian H(I, θ) = H₀(I) + ε H₁(I, θ), where (I, θ)
are action-angle variables on ℝⁿ × 𝕋ⁿ and ε ≪ 1 is the perturbation strength.
The KAM theorem (Kolmogorov 1954, Arnold 1963, Moser 1962) guarantees that most
invariant tori of H₀ survive the perturbation, provided the frequency vector
ω(I) = ∂H₀/∂I satisfies a Diophantine non-resonance condition. As ε increases,
resonant tori break first (Poincaré-Birkhoff theorem), then the last KAM torus
at ε = ε* (Greene's criterion), beyond which global chaos appears.

---

## Target category

**Symp** — the category of symplectic manifolds, with objects = Liouville-
integrable systems (𝕋ⁿ fibrations over ℝⁿ) and morphisms = symplectic
conjugacies. The H^k grading is by the fate of each torus under perturbation.

## Interpretation functor

F: C → Symp defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Quasi-periodic motion on a KAM torus: the flow Φ_t winds around 𝕋ⁿ with frequency vector ω. Closed (H⁰) iff ω is rationally dependent; dense (H¹) iff Diophantine |
| TWIST  | Resonance: ω·k = 0 for some k ∈ ℤⁿ; the torus breaks into a chain of islands (Poincaré-Birkhoff fixed points) with a non-trivial H¹ holonomy |
| BIND   | Last KAM torus destruction at ε*: the H² obstruction class (cantorus) forms — a Cantor set remnant of the broken torus with non-zero flux |
| LABEL  | Action variable I: eigenvalue of ORBIT = winding number ratio ω₁/ω₂ (rotation number) |

## ISA programme

```
INTEGR:  ORBIT[Φ_t on 𝕋ⁿ | ε=0]            -- unperturbed quasi-periodic orbit (H⁰)
PERTURB: TWIST[H₁(I,θ) | ε small]           -- resonance zones open (H¹ islands)
THRESH:  LABEL[ε* | Greene residue = 1/4]   -- critical perturbation (β* snap)
CANTORUS: BIND[cantorus flux Φ_flux]         -- last torus breaks → H² obstruction
CHAOS:   ORBIT fails to close               -- global diffusion above ε*
```

## Computable output

- **Rotation number** ρ = ω₁/ω₂: rational ρ = p/q → periodic orbit (H⁰);
  irrational Diophantine ρ → KAM torus (H⁰ dense); noble number
  ρ = (√5−1)/2 (golden mean) → last surviving torus.
- **Critical perturbation** ε*: computed by Greene's residue criterion —
  the residue R of the period-q approximants to the last torus converges to
  1/4 at ε = ε*. Computable to arbitrary precision.
- **Cantorus flux** Φ_flux(ε > ε*): the H² obstruction class surviving after
  the last torus breaks. Quantifies the rate of Arnold diffusion through the
  broken torus. Φ_flux = 0 at ε = ε* (torus just breaks), grows as (ε − ε*)^α
  for some exponent α.
- **The H⁰/H¹/H² ladder is exact**:

| Stratum | ε range | Physical state | ISA |
|---------|---------|---------------|-----|
| H⁰ | 0 ≤ ε ≪ ε* | Integrable tori survive | ORBIT closes |
| H¹ | ε near resonances | Island chains (Poincaré-Birkhoff) | TWIST |
| H² | ε ≥ ε* | Last torus breaks → cantorus | BIND (H² obstruction) |

## Validation

- KAM theorem: Kolmogorov (1954), Arnold (1963), Moser (1962) — rigorous
  existence proof for Diophantine tori.
- Greene's residue criterion: ε* computed numerically for the standard map
  (Chirikov-Taylor map) to 10 significant figures. The critical golden-mean
  torus breaks at K* ≈ 0.971635 (K = ε in standard map notation).
- Cantorus flux: MacKay, Meiss & Percival (1984) confirmed Φ_flux ∝ (K−K*)^α
  with α ≈ 3.01 for the golden-mean cantorus.
- **β* correspondence**: ε* is exactly the β* snap event in the ISA — the
  critical inverse temperature at which the Gibbs distribution over orbits
  crystallises from a KAM torus (ordered, H⁰) to a cantorus (H² obstruction)
  to global chaos. The KAM theorem is a finite-temperature (finite-β) stability
  result: tori survive for β > β*.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
