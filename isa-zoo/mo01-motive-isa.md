---
layout: default
title: "MO01 — Motive ISA (Abstract Parent)"
parent: ISA Zoo
nav_exclude: true
semiring: probabilistic
---

# MO01 — Motive ISA: Five Opcodes for Dissipative Thermodynamic Systems

| Field | Value |
|-------|-------|
| **Domain** | Abstract ISA Theory |
| **System** | Any dissipative thermodynamic system |
| **Group** | Aut(P\_Motive) ≅ (ℝ,+) × U(1) × ℤ/2ℤ |
| **H^k tier** | H⁰–H³ |
| **ISA** | Motive (all β; abstract parent) |
| **Status** | Proved (Theorems 1–3) |
| **Opcodes** | MARK · CROSS · IMAGINE · FLOW · ERASE |
| **Papers** | [Paper 619](https://doi.org/10.5281/zenodo.21416910) |

---

## Physical system

The **Motive ISA** is the abstract parent of the ISA hierarchy: the minimal
instruction set that is sufficient for any dissipative thermodynamic system
with reversible logic, continuous temperature deformation, and irreversible
information erasure.

It is derived from three independent first principles that converge to the
same five opcodes:

1. **Spencer-Brown's Laws of Form** (1969): the calculus of distinctions.
   MARK creates a distinction; CROSS is its inverse; IMAGINE is the imaginary
   extension satisfying i² = −1. These three generate a structure equivalent
   to the quaternion algebra restricted to the generating set {1, i, j, k}.

2. **Kauffman's Q-calculus** (2025): the topological knot-theoretic extension
   of Laws of Form. FLOW is the deformation parameter; ERASE is the
   topological surgery that removes a loop at thermodynamic cost.

3. **Bender's PT-symmetric quantum mechanics**: the exceptional point (EP)
   of the two-level gain-loss Hamiltonian H = [[iγ, g],[g, −iκ]] is a
   fixed point of the Motive programme MARK∘FLOW∘ERASE∘FLOW at
   β* = ln(γ/κ)/ΔE. The EP is the ISA's canonical operating point.

---

## The five opcodes

| Opcode | Abstract role | H^k | Laws of Form | Thermodynamics |
|--------|--------------|-----|--------------|----------------|
| MARK   | Create distinction | H⁰ | The mark ⌐ | State preparation |
| CROSS  | Negate / invert | H⁰ | Crossing the mark | Logical NOT |
| IMAGINE | Phase / oscillation | H¹ | i (imaginary unit) | Berry phase |
| FLOW   | Gibbs weight | H¹ | β-deformation | Boltzmann factor e^{−βΔF} |
| ERASE  | Irreversible collapse | H²| Loop removal | Landauer cost k_BT ln(Ω₊/Ω₋) |

## The three theorems

**Theorem 1 (Minimality):** No four-element subset of {MARK, CROSS, IMAGINE,
FLOW, ERASE} satisfies all five ISA properties simultaneously.
The five properties are: (P1) initialisation, (P2) Q₈ non-abelian structure,
(P3) thermodynamic deformation, (P4) directed error correction, (P5) reversible
sector closure.
Proof: exhaustive check of all C(5,4)=5 four-element subsets — each fails
exactly one property.

**Theorem 2 (ERASE Duality):** cost(ERASE) × benefit(ERASE) = k_BT.
The Landauer bound k_BT ln(Ω₊/Ω₋) = the Hopfield–Ninio proofreading bound
under the substitution Ω₊/Ω₋ = k_forward/k_reverse.
ERASE is the unique non-invertible morphism; all other opcodes generate
invertible (groupoid) morphisms.

**Theorem 3 (EP Fixed Point):** The exceptional point of the PT-symmetric
Hamiltonian H = [[iγ, g],[g, −iκ]] is a fixed point of the Motive programme
at β* = ln(γ/κ)/ΔE. Verified numerically: β* = 0.6920 (numerical) vs
0.6931 = ln 2 (analytical, γ=κ=1, ΔE=1), agreement to 3 s.f.

## ISA programme

```
PROGRAM Motive_cycle [the canonical Motive ISA fixed point]

MARK(state_0)          ; initialise: create a distinction
FLOW(beta)             ; Gibbs weight: e^{-beta * DeltaF}
IMAGINE(phase)         ; Berry phase: e^{i*phase}
ERASE(state_1, Omega)  ; irreversible: cost = k_BT * ln(Omega_+/Omega_-)
FLOW(beta)             ; second Gibbs step: return to thermal equilibrium

; Fixed point condition: beta* = ln(gamma/kappa) / DeltaE
; At beta*: programme minimises dissipation subject to non-unitarity of ERASE
```

## The quotient hierarchy

Every named ISA in the hierarchy is a quotient or specialisation of the Motive ISA:

| ISA | Quotient | β location |
|-----|----------|-----------|
| Origami | FLOW = id, ERASE = id | β → ∞ |
| Q-calculus | FLOW = id, ERASE = id, IMAGINE × 3 | β → ∞ |
| Forge | ERASE = id (approximately) | 0 < β < ∞ |
| Raven | All five; biological β* | β ≈ β* |
| Hum | +EMIT; β = it/ℏ | imaginary axis |

The Motive ISA is the unique minimal parent: no four-opcode set generates
all the above quotients.

## Connections

- **PT01** (PT-symmetric system): the EP β* snap is Theorem 3 of MO01.
  The PT exceptional point is the Motive ISA's canonical operating point.
- **HM01–HM08** (Hum ISA zoo): EMIT extends MO01 to QFT; all eight Hum
  entries are specialisations of the six-opcode set {MARK,CROSS,IMAGINE,FLOW,ERASE,EMIT}.
- **ST01** (Metropolis MCMC): FLOW at fixed β is the Metropolis accept rate;
  β* snap is the MGE saddle point (Paper 597).

## Validation

- Minimality (Theorem 1): exhaustive proof, all 5 four-element subsets.
  Script: x619a\_minimality.md (PASS).
- ERASE duality (Theorem 2): analytical. Script: x619c\_landauer\_hopfield\_ninio.md (PASS).
- EP fixed point (Theorem 3): numerical. Script: x619d\_flow\_fixed\_point.py (PASS);
  β* = 0.6920 vs analytical 0.6931, 3 s.f.

---

*Part of the [ISA Zoo](/isa-zoo/).
Categorical foundations: [Paper 619](https://doi.org/10.5281/zenodo.21416910).*
