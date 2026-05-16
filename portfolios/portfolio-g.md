---
layout: default
title: "Portfolio G — Economics & Complex Systems"
parent: Portfolios
nav_order: 7
---

**Primary audience:** Economists, policy modellers, complexity scientists, agent-based modellers

---

## The Thermodynamics of Economic Choice

Portfolio G applies the Maslov-Gibbs Ensemble (MGE) to economics and complex adaptive systems. The central identification is deceptively simple: **rationality is temperature**. The inverse temperature parameter $\beta$ controls the sharpness of agent decision-making, interpolating continuously between maximum-entropy exploration ($\beta = 0$, uniformly random behaviour) and fully rational Nash equilibrium ($\beta \to \infty$, deterministic best response).

This is not a metaphor borrowed from physics. McFadden (1974) derived the Gibbs distribution from economic utility maximisation under Gumbel noise. Sims (2003) rederived it from optimal choice under a Shannon entropy budget (rational inattention). The MGE is the natural object that both lines of work were converging toward. The ASA's contribution is to recognise the Gibbs partition function $Z_\beta = \beta^{-1}\ln\sum_i e^{\beta U_i}$ as the same primitive that governs tropical optimisation, knowledge routing, and gradient dynamics — a thermodynamic information routing universal.

**What this buys the economist:**

- The representative agent of standard DSGE is the degenerate $\beta \to \infty$ limit of the MGE. Policy shocks shift $\beta$ as well as equilibrium positions — a thermodynamic restatement of the Lucas critique.
- Arrow's Impossibility Theorem and the Condorcet paradox do not apply to the MGE: the output is a probability measure, not a preference ranking, and no pairwise tournament is held.
- Mean-field theory gives the Brock-Durlauf (2001) social interactions model exactly. The social multiplier $1/(1 - J\beta)$ diverges at $\beta J = 1$: this is the Schelling segregation tipping point, the Keynesian beauty contest fragility threshold, and every ecological tipping point with a diffusive feedback mechanism, all in one formula.
- Every discrete threshold rule in a standard ABM (if/else, majority vote, min/max) has an MGE equivalent — a smooth Gibbs or SoftMin transition parametrised by $\beta$. The result is an end-to-end differentiable model calibratable by gradient descent (PyTorch/JAX).

**The double cascade** (Hurd 2013) is the running example of Paper 289: the 2008 financial crisis as a non-adiabatic quench — high-$\beta$ markets hit a discontinuous utility shock with insufficient entropy to find the new equilibrium. Central bank QE is entropy injection: temporarily reducing $\beta$ to help the system escape the metastable state. The solvency cascade operates in the standard semiring; the liquidity freeze operates in the tropical (min, +) semiring. The hybrid is SoftMin$_\beta$, the MGE acting on the two cascades simultaneously.

**Companion papers** complete the economics framework: Paper 291 grounds stock-flow consistency (SFC) in discrete gauge theory (double-entry accounting as Noether conservation); Paper 292 analyses policy intervention ordering via non-associative algebra (a CBAM before carbon tax has different outcomes than the reverse); Paper 293 applies thermal Shapley values to attribute systemic risk; Paper 294 unifies all five MGE application domains into the Thermodynamic Information Routing (TIR) framework.

---

## Papers

| # | Paper |
| --- | --- |
| [289](../papers/10.5281-zenodo.20234841/) | The Temperature of Rationality: Maslov-Gibbs Ensemble as a Foundation for Heterogeneous-Agent Economics |

---

## Key Glossary Terms

[MGE](../glossary/#maslov-gibbs-einsum-mge) · [Tropical Limit](../glossary/#tropical-limit--crystallisation) · [Auto-Annealing](../glossary/#auto-annealing)
