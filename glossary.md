---
layout: default
title: Glossary
nav_order: 3
---

# Glossary

Key terms used across the Adelic Simplicial Architecture (ASA). Each entry links to the paper where the concept is defined or first used.

---

## Adelic

**Adelic** refers to the simultaneous use of all completions of the rational numbers: the real field $\mathbb{R}$ and the $p$-adic fields $\mathbb{Q}_p$ for every prime $p$. The adele ring $\mathbb{A} = \mathbb{R} \times \prod_p \mathbb{Z}_p$ unifies continuous and discrete arithmetic in one algebraic object.

In the ASA, the adelic structure appears in the routing of gradient updates: the real component flows continuously (gradient descent), while the $p$-adic component crystallises discretely (logic gate). This resolves the Averaging Paradox of purely-real optimisation and the Search Wall of purely-discrete search.

*First used:* [Paper 201 (MGE)](papers/10.5281-zenodo.17981393/)

---

## Associator

The **octonion associator** measures the failure of associativity:

$$\mathcal{A}(x, y, z) = (xy)z - x(yz).$$

For basis octonions $e_i, e_j, e_k$: $\mathcal{A} = 0$ when $\{i,j,k\}$ is a Fano line; $\|\mathcal{A}\| = 2$ otherwise. The associator is the fundamental detector of topological contradiction in the ASA.

*First used:* [Paper 200 (Fano-Foam)](papers/10.5281-zenodo.19869263/)

---

## Auto-Annealing

The MGE routing operator undergoes a spontaneous **phase transition** from exploratory (uniform) weighting to crystallised (winner-take-all) weighting as the inverse temperature $\beta$ rises. Unlike simulated annealing, no schedule is required: the $G_2$ geometry self-organises — geometric frustration spikes $E_k$ during chaotic exploration, causing Boltzmann freeze-out; at convergence the frustration dissolves and routing relaxes back to uniform. This is parameter-free annealing with topological guarantees.

*Demonstrated:* [Paper 218 (NAIG Routing)](papers/10.5281-zenodo.20077198/)

---

## BCH Obstruction

The **Baker-Campbell-Hausdorff (BCH) obstruction** arises when attempting to aggregate updates directly on a non-commutative manifold such as $G_2$: $\exp(X_i + X_j) \neq \exp(X_i)\exp(X_j)$. The ASA resolves this via Dual-Space Routing — evaluation in the flat tangent space $\mathfrak{g}_2$ (Control Plane) separated from Euclidean execution (Data Plane).

*Addressed:* [Paper 218 (NAIG Routing)](papers/10.5281-zenodo.20077198/)

---

## Division Algebra Ladder

The four **normed division algebras**

$$\mathbb{R} \subset \mathbb{C} \subset \mathbb{H} \subset \mathbb{O}$$

(reals, complex, quaternions, octonions) form a hierarchy in which each extension drops one algebraic property. $\mathbb{H}$ is non-commutative; $\mathbb{O}$ is additionally non-associative. By Hurwitz's theorem, no further division algebras exist. The ASA uses each rung as a distinct computational regime.

*Framework:* [Paper 263 (Magic Square Architecture)](papers/10.5281-zenodo.19928880/)

---

## Fano Plane

The **Fano plane** $\mathrm{PG}(2,2)$ is the smallest projective plane: 7 points, 7 lines, 3 points per line, 3 lines per point. Its incidence structure encodes the multiplication table of the octonions $\mathbb{O}$. Two octonion basis elements multiply non-trivially if and only if they belong to a common Fano line; the associator vanishes on Fano triples and equals $\pm 2$ on non-Fano triples.

The Fano plane is the geometric engine behind fault-tolerant quantum gates ($[[7,1,3]]$ Steane code), the 731-Calculus, and the Fano-Fisher metric.

*Central to:* [Paper 207 (731-Calculus)](papers/10.5281-zenodo.19713350/), [Paper 200 (Fano-Foam)](papers/10.5281-zenodo.19869263/)

---

## Fano-Fisher Metric

The **Fano-Fisher metric** $\Psi(\theta_\mathrm{ref})$ is the Fisher information metric on the $G_2$ statistical manifold, evaluated as the Hessian of the associator energy functional $E(\Omega) = \|\mathcal{A}(\theta_\mathrm{ref}, \Omega\, e_A, e_A)\|^2$. By the Fano-Fisher Decomposition Theorem ([Paper 221](papers/10.5281-zenodo.20076498/)):

- $\mathrm{rank}(\Psi) = 4$ universally (10-dimensional null space = Fano-compatible directions)
- All four non-zero eigenvalues $= 8/3$ exactly (from the $G_2$ Casimir)
- Global average $= (32/49)\,I_{14}$ (from Fano incidence counting)
- The active 4D friction subspace rotates (crystalline turnstile)

This rank-4 structure means only 4 of 14 dimensions carry geometric resistance — the rest are free. The metric acts as a native topological filter: Fano-compatible drifts ($E_k = 0$) pass freely; non-Fano drifts hit the 4D Information Ridge and are thermodynamically frozen out.

*Proved:* [Paper 221 (Fano-Fisher)](papers/10.5281-zenodo.20076498/)

---

## $G_2$

$G_2$ is the smallest **exceptional Lie group**, defined as the automorphism group of the octonions: $G_2 = \mathrm{Aut}(\mathbb{O})$. It has dimension 14 and is compact and simple. Its Lie algebra $\mathfrak{g}_2$ is 14-dimensional. $G_2$ is the natural symmetry group of any computation that respects the Fano geometry. In the ASA, the parameter space of a neural network is modelled as a $G_2$ manifold; gradient drift is projected into $\mathfrak{g}_2$ for topological evaluation.

*Central to:* [Paper 221 (Fano-Fisher)](papers/10.5281-zenodo.20076498/), [Paper 218 (NAIG Routing)](papers/10.5281-zenodo.20077198/)

---

## Maslov-Gibbs Einsum (MGE)

The **Maslov-Gibbs Einsum** is the core routing operator of the ASA:

$$\pi_k = \frac{\exp(-\beta\, E_k)}{\sum_j \exp(-\beta\, E_j)}.$$

At low $\beta$ (high temperature) it reduces to uniform averaging (Hogwild!). At high $\beta$ (low temperature) it reduces to winner-take-all tropical routing $\pi_k \to \mathbf{1}[\arg\min_k E_k]$. The energies $E_k$ are derived from the Fano-Fisher metric, giving the MGE topological rather than Euclidean meaning. The BOIL→SNAP phase transition at the critical $\beta$ is the ASA's analogue of simulated annealing — but driven by geometry, not a schedule.

*Defined:* [Paper 201 (MGE)](papers/10.5281-zenodo.17981393/)

---

## NAIG (Non-Associative Information Geometry) Routing

**NAIG Routing** is the application of the Fano-Fisher metric and MGE to the distributed training problem. Each incoming gradient $g_k$ is evaluated by projecting its drift $\Delta g_k = g_k - g_\mathrm{oracle}$ into $\mathfrak{g}_2$ and computing the associator energy $E_k = \widetilde{\Delta c}_k^\top \Psi\, \widetilde{\Delta c}_k$. The MGE converts energies to routing weights. NAIG operates as a **topological control layer** (Control Plane: $G_2$ evaluation) over standard Euclidean SGD (Data Plane), requiring no change to the optimizer or hardware.

Key phenomena: Thermodynamic Freeze-Out (non-Fano gradients suppressed), Topological Rescue (highly stale but Fano-compatible gradients promoted), Auto-Annealing (parameter-free phase transition at convergence).

*Defined:* [Paper 218 (NAIG Routing)](papers/10.5281-zenodo.20077198/)

---

## Simplicial

**Simplicial** refers to the use of simplicial complexes — triangles, tetrahedra, and their higher-dimensional generalisations — as the combinatorial skeleton of the architecture. The Fano plane is a 2-simplex complex (7 triangles); its faces correspond to associative Fano triples. The 731-Calculus and Origami ISA use Pachner moves (local simplicial retriangulations) as opcodes. The simplicial structure makes the topology of computation discrete and combinatorially exact.

*Central to:* [Paper 207 (731-Calculus)](papers/10.5281-zenodo.19713350/), [Paper 258 (Origami ISA)](papers/10.5281-zenodo.19916429/)

---

## Topological Rescue

**Topological Rescue** is the phenomenon in which NAIG assigns high routing weight to a *highly stale* gradient because its drift is Fano-compatible ($E_k = 0$), overriding any temporal penalty. This is the decisive advantage over cosine similarity and lag-based heuristics: a gradient that is geometrically coherent — even if chronologically old — contributes more information than a fresh but topologically contradictory gradient.

*Demonstrated:* [Paper 218 (NAIG Routing), Experiment A](papers/10.5281-zenodo.20077198/)

---

## Topological Resonance Synthesis (TRS)

**TRS** is the full computational engine of the ASA. It combines:
- Holomorphic relaxation in the bulk (complex-analytic gradient flow that preserves the Cauchy-Riemann structure of the loss landscape)
- MGE thermodynamic routing at the boundary (Fano-Fisher weighting)
- Adelic crystallisation (real flow → $p$-adic lock-in)

TRS does not descend a loss surface in the Euclidean sense: it flows along the non-associative manifold toward the nearest topologically consistent state, guided by the $G_2$ vacuum. The "resonance" is the phase-locking between the continuous bulk dynamics and the discrete Fano geometry: when a trajectory aligns with a Fano line, the associator energy vanishes and the system crystallises. This is the information-geometric analogue of parallel transport on $G_2$ — but with the crystallisation guarantee of the tropical limit.

*Defined:* [Paper 202 (TRS)](papers/10.5281-zenodo.19858021/)

---

## Tropical Limit / Crystallisation

As $\beta \to \infty$ in the MGE, the softmax collapses to the **tropical** (max, +) semiring: addition becomes $\max$, multiplication becomes $+$. This is the Maslov dequantisation of ordinary arithmetic. The BOIL phase ($\beta$ low) explores continuously; the SNAP phase ($\beta \to \infty$) crystallises to a discrete logical output. The transition is the ASA's computational phase transition.

*Defined:* [Paper 201 (MGE)](papers/10.5281-zenodo.17981393/)
