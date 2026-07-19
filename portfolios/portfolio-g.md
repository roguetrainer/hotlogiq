---
layout: default
title: "Portfolio G — Economics & Complex Systems"
parent: Portfolios
nav_order: 7
nav_exclude: true
---

**Primary audience:** Economists, policy modellers, complexity scientists, agent-based modellers

---

## The Thermodynamics of Economic Choice

Portfolio G applies the Gibbs ensemble of statistical mechanics to economics and complex adaptive systems. The central identification is deceptively simple: **rationality is temperature**. The inverse temperature parameter $\beta$ controls the sharpness of agent decision-making, interpolating continuously between maximum-entropy exploration ($\beta = 0$, uniformly random behaviour) and fully rational Nash equilibrium ($\beta \to \infty$, deterministic best response).

This is not a metaphor borrowed from physics. McFadden (1974) derived the Gibbs distribution from economic utility maximisation under Gumbel noise. Sims (2003) rederived it from optimal choice under a Shannon entropy budget (rational inattention). The Gibbs ensemble is the natural object that both lines of work were converging toward. The ASA's contribution is to recognise the Gibbs partition function $Z_\beta = \beta^{-1}\ln\sum_i e^{\beta U_i}$ as the same primitive that governs tropical optimisation, knowledge routing, and gradient dynamics — a thermodynamic information routing universal.

**What this buys the economist:**

- The representative agent of standard DSGE is the degenerate $\beta \to \infty$ limit of the Gibbs ensemble. Policy shocks shift $\beta$ as well as equilibrium positions — a thermodynamic restatement of the Lucas critique.
- Arrow's Impossibility Theorem and the Condorcet paradox do not apply to the Gibbs ensemble: the output is a probability measure, not a preference ranking, and no pairwise tournament is held.
- Mean-field theory gives the Brock-Durlauf (2001) social interactions model exactly. The social multiplier $1/(1 - J\beta)$ diverges at $\beta J = 1$: this is the Schelling segregation tipping point, the Keynesian beauty contest fragility threshold, and every ecological tipping point with a diffusive feedback mechanism, all in one formula.
- Every discrete threshold rule in a standard ABM (if/else, majority vote, min/max) has a Gibbs-ensemble equivalent — a smooth Gibbs or SoftMin transition parametrised by $\beta$. The result is an end-to-end differentiable model calibratable by gradient descent (PyTorch/JAX).

**The double cascade** (Hurd 2013) is the running example of Paper 289: the 2008 financial crisis as a non-adiabatic quench — high-$\beta$ markets hit a discontinuous utility shock with insufficient entropy to find the new equilibrium. Central bank QE is entropy injection: temporarily reducing $\beta$ to help the system escape the metastable state. The solvency cascade operates in the standard semiring; the liquidity freeze operates in the tropical (min, +) semiring. The hybrid is SoftMin$_\beta$, the Gibbs ensemble acting on the two cascades simultaneously.

**Companion papers** complete the economics framework: Paper 291 grounds stock-flow consistency (SFC) in discrete gauge theory (double-entry accounting as Noether conservation); Paper 292 analyses policy intervention ordering via non-associative algebra (a CBAM before carbon tax has different outcomes than the reverse); Paper 293 applies thermal Shapley values to attribute systemic risk; Paper 294 unifies all five Gibbs-ensemble application domains into the Thermodynamic Information Routing (TIR) framework.

---

## Papers

| # | Paper |
| --- | --- |
| [289](../papers/10.5281-zenodo.20234841/) | The Temperature of Rationality: Maslov-Gibbs Ensemble as a Foundation for Heterogeneous-Agent Economics |
| [291](../papers/10.5281-zenodo.20234853/) | The Topology of Conservation: Stock-Flow Consistency as Discrete Gauge Theory on the Pacioli Manifold |
| [292](../papers/10.5281-zenodo.20234870/) | Beyond DAGs: Non-Associative Policy Algebra and the Curvature of Climate Intervention Sequences |
| [293](../papers/10.5281-zenodo.20236870/) | Thermal Attribution: Differentiable Shapley Values, Latent Bottlenecks, and the Tropical Limit of Cooperative Game Theory |
| [294](../papers/10.5281-zenodo.20237288/) | Thermodynamic Information Routing: A Unified Framework for Gibbs Aggregation Across Economics, Computation, and Knowledge Retrieval |
| [295](../papers/10.5281-zenodo.20242355/) | Currency Bundles on the Pacioli Manifold: Foreign Exchange as Gauge Theory |
| [296](../papers/10.5281-zenodo.20244445/) | Term Structure Bundles: Interest Rates as Temporal Connections on the Pacioli Manifold |
| [300](../papers/10.5281-zenodo.20259495/) | Economic Gauge Theory: Stock-Flow Consistency, Thermodynamic Constraints, and Climate Risk on the Pacioli Manifold |
| [301](../papers/10.5281-zenodo.20259505/) | A Primer on Economic Gauge Theory |
| [305](../papers/10.5281-zenodo.20261945/) | Differentiable Agent-Based Macroeconomics: A Stock-Flow Consistent ABM with Automatic Differentiation |
| [306](../papers/10.5281-zenodo.20262070/) | Pacioli Combinator Library: A Conservation-Enforcing DSL for Differentiable Financial Computation |
| [311](../papers/10.5281-zenodo.20291646/) | The Climate Hazard Yield Surface: A Geometric Framework for the Economics of Climate Action |
| 312 | Stochastic Tipping Points and the Option Value of Early Climate Investment |
| 313 | Thermal Economics: Implicit Differentiation Through Fixed Points as a Unifying Schema |
| 314 | SoftLeontief: Differentiable Input-Output Analysis and Supply-Chain Reverse Stress Testing |
| 315 | Differentiable Nash Equilibria: QRE as Implicit Differentiation Through a Game-Theoretic Fixed Point |
| 316 | EconIAC: MONIAC for the 21st Century — Differentiable Macroeconomics via the Gibbs Ensemble |

---

## Key Glossary Terms

[MGE](../glossary/#maslov-gibbs-einsum-mge) · [Tropical Limit](../glossary/#tropical-limit--crystallisation) · [Auto-Annealing](../glossary/#auto-annealing) · [Pacioli Manifold](../glossary/#pacioli-manifold) · [TIR](../glossary/#thermodynamic-information-routing-tir)
