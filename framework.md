---
layout: default
title: Framework
nav_order: 3
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

$$\pi_k = \frac{e^{-\beta E_k}}{\sum_j e^{-\beta E_j}}$$

At β → ∞ this is the tropical (min, +) semiring — hard, discrete selection. At finite β it is a smooth Gibbs distribution. The MGE is what makes any discrete model differentiable: replace argmin with this, and gradients flow everywhere.

*→ [Paper 201](https://zenodo.org/records/17981393)*

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

Three instruction sets, one for each temperature regime:

| ISA | β | Arithmetic | Complexity | Paper |
|-----|---|------------|------------|-------|
| **Origami** | β → ∞ | Tropical (min, +) | H⁰ | 258 |
| **Forge** | 0 < β < ∞ | Real Gibbs | H¹ | 419 |
| **Meld** | β = it | Complex amplitudes | H² | 454 |

Each ISA has the same five opcodes — SPLIT, SPLAT, FLIP, FLOP, TWIST — running at a different temperature. The β → it substitution (Wick rotation) turns the Forge ISA into the Meld ISA and turns statistical mechanics into quantum mechanics.

Eight independent mathematical communities have each, working separately, been forced to the same five opcodes. [Paper 455](https://doi.org/10.5281/zenodo.20774076) explains why: Shum's theorem (1994) identifies the free ribbon pivotal category on one self-dual object, whose generators are forced by the topology of framed tangles.

*→ Papers [258](https://zenodo.org/records/19916429), [419](https://doi.org/10.5281/zenodo.20694527), [454](https://doi.org/10.5281/zenodo.20773563), [455](https://doi.org/10.5281/zenodo.20774076)*

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
| [F — Quantum Foundations](/adelic-simplicial-architecture/portfolios/portfolio-f) | Magic, self-tests, paradoxes |
| [G — Finance & Economics](/adelic-simplicial-architecture/portfolios/portfolio-g) | EconIAC, gauge theory, risk |

The adelic structure — using all completions of ℚ simultaneously (real + p-adic) — appears in the routing of gradient updates: the real component flows continuously, the p-adic component crystallises discretely.

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

1. **[Planck's Constant in Disguise](https://doi.org/10.5281/zenodo.20752384)** (Paper 443) — the ⊕_β semiring in one paper; no prerequisites
2. **[In Praise of Tetrahedra](https://doi.org/10.5281/zenodo.20581484)** (Paper 386) — the geometric seed; accessible to anyone
3. **[Eight Derivations](https://doi.org/10.5281/zenodo.20774076)** (Paper 455) — why the five opcodes are inevitable

Then follow the [Start Here](start-here.md) routing page for your field.
