---
layout: default
title: Framework
nav_order: 4
description: "The five-layer hierarchy of the ASA: MGE, TRS, ISA trilogy, H^k ladder, and the full programme."
---

# The ASA Framework
{: .no_toc }

A map of how the pieces fit together.
{: .fs-5 .fw-300 }

---

The ASA grew in layers, each one built on the last. They are not synonyms.

| Layer | Name | What it is | Origin |
|-------|------|-----------|--------|
| 1 | **MGE** | The core operation: Maslov-Gibbs Einsum | Paper 201 |
| 2 | **TRS** | The β-deformation framework built on MGE | Paper 202 |
| 3 | **ISA trilogy** | Three compilers, one for each temperature | Papers 258, 419, 454 |
| 4 | **H^k ladder** | Complexity and cohomology classification | Papers 396–398, 420 |
| 5 | **ASA** | The full programme: all of the above plus all applications | Paper 219 |

---

## Layer 1 — MGE (Maslov-Gibbs Einsum)

The single operation at the heart of everything:

$$\pi_k(\beta) = \frac{e^{-\beta E_k}}{\sum_j e^{-\beta E_j}}$$

The domain of β is the full **adèlic β-plane** — real, imaginary, negative, complex, and p-adic values each give a different computational regime:

| β | Regime | What it computes |
|---|--------|-----------------|
| 0 | The Ambient | Uniform weights; smooth Hodge theory |
| real, finite | Forge ISA | Gibbs distribution; statistical mechanics |
| real → ∞ | Origami ISA | Tropical (min, +) semiring; hard discrete selection |
| imaginary ($it$) | Meld ISA | Quantum amplitudes; Wick rotation |
| negative | Population inversion | Lasers; anti-Boltzmann weighting |
| p-adic | Ultrametric | p-adic computation; attaches at β = 0 |

Ostrowski's theorem closes the map: every non-trivial absolute value on ℚ is either Archimedean (giving ℝ) or p-adic (giving ℚ_p), so the adèlic β-plane is the *complete* parameter space for the MGE. The MGE is what makes any discrete model differentiable: replace argmin with this, and gradients flow everywhere.

*→ Papers [201](https://zenodo.org/records/17981393) (MGE), [543](https://doi.org/10.5281/zenodo.21245459) (adèlic β-plane)*

---

## Layer 2 — TRS (Topological Resonance Synthesis)

TRS is the β-deformation framework built on MGE. The name describes the underlying picture: Lie groups serve as the tape of a generalised Turing machine. The Chladni resonance patterns on the group manifold encode the computational state; the topology of those nodal lines — their H⁰/H¹/H² skeleton — is the computation. The MGE makes that skeleton differentiable.

- **Topological** — the nodal-line topology of Chladni eigenmodes on the group manifold
- **Resonance** — the Chladni eigenmodes themselves; also Wigner-Racah angular momentum resonances
- **Synthesis** — the compiler that synthesises across classical/statistical/quantum via β

TRS is *not* the same as the ISA trilogy, not the same as the H^k ladder, and not the same as the ASA. It is the specific β-deformation layer.

*→ [Paper 202](https://zenodo.org/records/19858021)*

---

## Layer 3 — The ISA Trilogy

Four temperature regimes, three operative ISAs:

| ISA | β | Arithmetic | Paper |
|-----|---|------------|-------|
| **Ambient** | 0 | Uniform / Hodge theory | 417 |
| **Origami** | β → ∞ | Tropical (min, +) | 258 |
| **Forge** | 0 < β < ∞ | Real Gibbs | 419 |
| **Meld** | β = it | Complex amplitudes | 454 |

Each operative ISA (Origami, Forge, Meld) uses the same five opcodes — SPLIT, SPLAT, FLIP, FLOP, TWIST — running at a different temperature. The β → it substitution (Wick rotation) turns the Forge ISA into the Meld ISA and turns statistical mechanics into quantum mechanics.

The ISAs are not the same as the H^k ladder (Layer 4). The H^k ladder classifies *problem type* by the cohomological obstruction that makes it hard; any ISA can in principle compute any H^k problem, but at different cost. The Origami ISA naturally handles H⁰ problems; the Forge ISA excels at H¹; the Meld ISA is required for H² (quantum) problems. But the correspondence is one of natural fit, not restriction.

Eight independent mathematical communities have each, working separately, been forced to the same five opcodes. [Paper 455](https://doi.org/10.5281/zenodo.20774076) explains why: Shum's theorem (1994) identifies the free ribbon pivotal category on one self-dual object, whose generators are forced by the topology of framed tangles.

*→ Papers [258](https://zenodo.org/records/19916429), [419](https://doi.org/10.5281/zenodo.20694527), [454](https://doi.org/10.5281/zenodo.20773563), [455](https://doi.org/10.5281/zenodo.20774076)*

### The chain complex: H^k is genuine cohomology

The H^k tiers are not merely a grading — they form a genuine chain complex. The boundary map ∂: C^k → C^{k+1} is assembled from the SPLIT and SPLAT opcodes with Koszul signs; it satisfies ∂² = 0 as a direct consequence of the Frobenius algebra axiom (SPLAT∘SPLIT = id). This is the same condition as the Pentagon identity, the MIP*=RE self-test, and Khovanov's categorification of the Jones polynomial. The ORBIT count is the Euler characteristic of the complex; the full Poincaré polynomial is a strictly stronger invariant. At the H² level, BIND = the Kuperberg G₂ spider vertex (CMP 1996) — the complete diagrammatic axiomatisation of non-Abelian holonomy in the ISA.

*→ Papers [357](https://doi.org/10.5281/zenodo.20516899) (Pentagon/MIP*), [571](https://doi.org/10.5281/zenodo.21278536) (chain complex), [572](https://doi.org/10.5281/zenodo.21278538) (G₂ spider = BIND)*

### The 731-ISA: beyond the Pentagon

The three-ISA trilogy operates within the **associative** world — the Pentagon identity SPLAT∘SPLIT = 0 holds throughout. There is a fourth ISA that breaks this:

| ISA | Adds | Breaks | Algebraic home |
|-----|------|--------|---------------|
| Origami / Forge / Meld | — | — | ℝ, ℂ (associative) |
| **731-ISA** | BIND, SPIN | Pentagon identity | 𝕆 (octonions, non-associative) |

**BIND** is the frog vertex — the non-abelian fusion that requires G₂ symmetry and implements the Fano associator obstruction. At j=½ it is the T-gate; at higher spin it accesses genuinely non-associative territory inaccessible to any standard quantum gate set. **SPIN** is the G₂ triality automorphism — the order-3 outer automorphism of Spin(8) that cyclically permutes its three 8-dimensional representations — and is the elementary injection gate for *associamancy* (the fourth level of the quantum resource hierarchy; see [Paper 407](https://doi.org/10.5281/zenodo.20667174)).

A gate set is **triality-complete** if it contains SPIN. The 731-ISA is triality-complete; the Origami/Forge/Meld trilogy is not.

The 731-ISA is the computational realisation of the bottom-right cell of the **Freudenthal-Tits magic square** — the 4×4 table of exceptional Lie algebras built from pairs of division algebras (ℝ, ℂ, ℍ, 𝕆). The diagonal of that table is the division algebra ladder expressed as Lie algebras: G₂, F₄, E₆, E₈. The full non-associative frontier is described in the [Non-Associative Frontier explainer](non-associative-frontier.md).

*→ Papers [207](https://zenodo.org/records/19713350), [258](https://zenodo.org/records/19916429), [263](https://zenodo.org/records/19928880), [407](https://doi.org/10.5281/zenodo.20667174), [405](https://doi.org/10.5281/zenodo.20667170)*

---

## Layer 4 — The H^k Complexity Ladder

The ISAs compute things whose complexity is classified by sheaf cohomology:

| Level | Symbol | Name | Computation | Complexity |
|-------|--------|------|-------------|------------|
| 0 | H⁰ | Islands | Classical / bilateral | PSPACE |
| 1 | H¹ | Flatland | Statistical / triangular | BPP |
| 2 | H² | The Deep | Quantum / tetrahedral | BQP |

H⁰ = problems solvable by looking at each part independently. H¹ = problems requiring triangular (three-party) consistency. H² = problems requiring tetrahedral (four-party) coherence — the level at which quantum algorithms live and at which the 2008 financial crisis became unresolvable.

The snap threshold β* = (3/8)ln(1/(1−ρ)) marks the transition between H⁰ and H¹ regimes for any network with edge density ρ.

*→ Papers [396](https://doi.org/10.5281/zenodo.20635479), [397](https://doi.org/10.5281/zenodo.20642908), [420](https://doi.org/10.5281/zenodo.20773526)*

---

## Layer 5 — The ASA (Adelic Simplicial Architecture)

The full research programme: all five layers plus their applications across quantum computing, nuclear and molecular spectroscopy, financial risk, climate economics, and pure mathematics. Organised into five portfolios:

| Portfolio | Theme |
|-----------|-------|
| [A — Core Engine](/adelic-simplicial-architecture/portfolios/portfolio-a) | MGE, TRS, non-associative calculus |
| [B — Foundations](/adelic-simplicial-architecture/portfolios/portfolio-b) | Algebra, topology, category theory |
| [C — Hardware & AI](/adelic-simplicial-architecture/portfolios/portfolio-c) | ISA trilogy, registers, QEC |
| [E — Chemistry & Physics](/adelic-simplicial-architecture/portfolios/portfolio-e) | Bonding theory, nuclear, amplituhedron |
| [F — Quantum Foundations](/adelic-simplicial-architecture/portfolios/portfolio-f) | Magic, self-tests, paradoxes |
| [G — Finance & Economics](/adelic-simplicial-architecture/portfolios/portfolio-g) | EconIAC, gauge theory, risk |

The adelic structure — using all completions of ℚ simultaneously (real + p-adic) — is captured by the adèlic β-plane ([Paper 543](https://doi.org/10.5281/zenodo.21245459)): the real axis governs the Origami/Forge/Meld ISA trilogy, while the p-adic completions attach at β = 0 (the Ambient). Ostrowski's theorem guarantees this is the complete picture.

*→ [Paper 219](https://zenodo.org/records/19977475) (An Adelic Invitation)*

---

## Where EconIAC fits

[EconIAC](https://roguetrainer.github.io/econiac/) is the Portfolio G application of the ASA. It uses all five layers:

- **MGE** — Gibbs relaxation makes every argmax differentiable; β is the rationality temperature
- **TRS** — the β-deformation of discrete economic models (Nash equilibria, order statistics, Leontief minimum) into smooth, calibratable functions
- **Forge ISA** — the compiler for statistical/probabilistic economic computation at finite β
- **H^k ladder** — H⁰ = bilateral risk (Basel), H¹ = triangular risk (XVA, convexity), H² = systemic risk (2008 crisis, unresolvable cascades)
- **ASA** — the full framework that places the Keynesian multiplier, FMO photosynthesis efficiency, and Shor's algorithm on the same ladder

---

## Reading order

New to the framework? Start here:

1. **[The Maslov-Gibbs Einsum](https://doi.org/10.5281/zenodo.17981393)** (Paper 201) — the single equation; the dodecagon of twelve unified constructs; Turing completeness as a corollary
2. **[Planck's Constant in Disguise](https://doi.org/10.5281/zenodo.20752384)** (Paper 443) — the six classical dualities as β-deformations; no prerequisites
3. **[The Adèlic β-Plane](https://doi.org/10.5281/zenodo.21245459)** (Paper 543) — the complete parameter space: why ℏ, viscosity, volatility, and quantum amplitudes are all the same coordinate
4. **[In Praise of Tetrahedra](https://doi.org/10.5281/zenodo.20581484)** (Paper 386) — the geometric seed; accessible to anyone
5. **[Eight Derivations](https://doi.org/10.5281/zenodo.20774076)** (Paper 455) — why the five opcodes are inevitable

Then follow the [Start Here](start-here.md) routing page for your field.
