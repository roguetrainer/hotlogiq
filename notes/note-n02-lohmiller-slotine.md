---
layout: default
nav_exclude: true
title: "N02 — Lohmiller-Slotine, Vattay, and the MGE"
parent: Notes
nav_order: 2
---

# N02 — Lohmiller-Slotine, Vattay, and the MGE: Classical Paths, the Quantum Potential, and Maslov Dequantisation

**Related papers:** [Paper 201 (MGE)](../papers/10.5281-zenodo.17981393/) · [Paper 211 (Non-Associative Calculus)](../papers/10.5281-zenodo.20025384/) · [Paper 199 (Q-VM)](../papers/10.5281-zenodo.20060303/) · [Paper 206 (FTCs)](../papers/10.5281-zenodo.19821692/)

**External references:** [Lohmiller & Slotine (2024), arXiv:2405.06328](https://arxiv.org/abs/2405.06328) · [Vattay (2025), arXiv:2605.02621](https://arxiv.org/abs/2605.02621)

---

## The Dispute

Lohmiller & Slotine (2024) claimed that the Schrödinger equation can be solved *exactly* from classical least action alone, without any semiclassical approximation, by combining a multi-valued classical action $\phi$ with the classical position density $\rho$. They presented this as a simpler computational alternative to Feynman path integrals, using only a minimal subset of classical paths.

Vattay (2025) identified a foundational error: Lohmiller & Slotine silently dropped the spatial derivatives of the probability density amplitude $\sqrt{\rho}$, which is precisely the **quantum potential** — the term identified by Madelung (1926) and emphasised by Bohm (1952):

$$Q = -\frac{\hbar^2}{2m} \frac{\nabla^2 \sqrt{\rho}}{\sqrt{\rho}}.$$

Without $Q$, the construction is not exact quantum mechanics but the standard semiclassical (WKB) approximation, valid only in the $\hbar \to 0$ limit. Each of Lohmiller & Slotine's illustrative examples either belongs to a special class where $Q$ vanishes identically (free particle, harmonic oscillator), or imports the correct quantum result through quantum eigenfunctions hidden in the initial conditions.

The ASA **agrees with Vattay's rebuttal** but goes further: it provides the mathematical framework that makes precise *why* the quantum potential cannot be dropped, and how the correct quantum-to-classical transition actually works.

---

## 1. The Quantum Potential is the MGE Temperature

Vattay's core critique is that the quantum potential encodes the wave's ability to feel its own curvature and produce interference. Without it, particles follow classical Newtonian geodesics — which is exactly the tropical limit.

The ASA formalises this duality in **Paper 201 (MGE)**. The inverse temperature $\beta$ is the bridge between the quantum and classical regimes:

$$\pi_k = \frac{\exp(-\beta\, E_k)}{\sum_j \exp(-\beta\, E_j)}$$

- **Finite $\beta$:** the MGE performs smooth Gibbs-weighted averaging over all paths. The system explores the full manifold; interference is active; the quantum potential is present. This is the quantum regime.
- **$\beta \to \infty$ (Maslov dequantisation):** the log-sum-exp collapses to the tropical $({\max}, +)$ semiring. The continuous wave crystallises onto the single least-action path; the quantum potential vanishes. This is the classical regime.

Lohmiller & Slotine were implicitly working in the $\beta \to \infty$ tropical limit while claiming to describe the finite-$\beta$ quantum regime. The ASA prevents this error by making the phase transition an explicit, named object — the BOIL→SNAP transition — with a precise algebraic characterisation. Dropping the quantum potential is not a minor oversight; it is the act of taking $\beta \to \infty$ without declaring it.

The quantum potential $Q \propto \nabla^2\sqrt{\rho}/\sqrt{\rho}$ is, in the ASA language, a measure of the *curvature of the probability amplitude* — exactly what the Fano-Fisher metric $\Psi = 2V^\top V$ captures geometrically. When $\Psi \neq 0$ (non-Fano direction, active friction subspace), the wave feels resistance and interference dominates. When $\Psi = 0$ (Fano-compatible null space), the path is geodesically free and the classical approximation is exact. The vanishing of $Q$ in Lohmiller & Slotine's examples is the vanishing of $\Psi$ for those special geometries — not a general result.

---

## 2. Path Integrals Cannot Be Bypassed — They Must Be Upgraded

Lohmiller & Slotine explicitly aim to replace Feynman path integrals with a "minimal subset of classical paths," avoiding zig-zag paths and time-slicing. The ASA's position is that this shortcut is not merely incomplete — it is categorically wrong for problems with non-trivial topology.

**Paper 211 (Non-Associative Calculus)** constructs the **Octonionic Path Integral**, in which the integration measure is governed by the $G_2$ monopole field rather than the flat Lebesgue measure. In this framework, the "zig-zag paths" that Lohmiller & Slotine discard are precisely the paths that pass through non-Fano topologies — where the associator $\mathcal{A}(x,y,z) \neq 0$ generates geometric friction. Discarding them is discarding the interference structure of the problem.

The correct statement is: classical paths are sufficient *if and only if* the problem has Fano-compatible topology (associator = 0 along all trajectories). For the hydrogen atom, double slit, and harmonic oscillator, this holds — which is exactly why Lohmiller & Slotine's examples work. For problems with non-trivial $G_2$ holonomy (braided paths, topological defects, non-simply-connected configuration spaces), the zig-zag paths are load-bearing and cannot be omitted.

---

## 3. Spinors Are Not Hidden Variables

Lohmiller & Slotine attempt to salvage EPR determinism by proposing that the "hidden variable" is a complex spinor attached to each particle. This is essentially a return to a de Broglie–Bohm pilot wave picture with a spinorial guide wave.

The ASA rejects the "hidden variable" framing on structural grounds. In **Paper 199 (Q-VM)** and **Paper 206 (FTCs)**, spinors are not parameters attached to particles — they are the *geometric fabric of the manifold itself*. The quaternionic and octonionic spin groups $\mathrm{Spin}(4) \cong SU(2) \times SU(2)$ and $G_2 \subset \mathrm{Spin}(7)$ are the structural constraints that determine which paths are topologically allowed to exist. There is nothing hidden: the spinor is the geometry, and the geometry is observable through the associator.

More precisely: in the EPR experiment, the correlations that violate Bell's inequalities arise because the two particles share a Fano-compatible entangled state (associator = 0 on the joint system). The non-local correlation is not transmitted by a hidden variable — it is the statement that the two measurement events belong to the same Fano line in the $G_2$ vacuum. The "determinism" Lohmiller & Slotine seek is recovered in the ASA not through hidden variables but through the topological rigidity of the Fano geometry: Fano-line membership is a geometric fact about the state, not a parameter to be inferred.

---

## Summary

| | Lohmiller-Slotine | Vattay | ASA |
| --- | --- | --- | --- |
| Quantum potential | Dropped (error) | Required (correct) | Identified with MGE finite-$\beta$ curvature |
| Classical limit | Claimed as exact | Actually WKB only | Exact as $\beta \to \infty$ (Maslov dequantisation) |
| Path integrals | Can be replaced | Not addressed | Must be upgraded to Octonionic PI (Paper 211) |
| EPR hidden variable | Complex spinor | Not addressed | Spinor = manifold geometry, not a hidden parameter |
| Phase transition | Not modelled | Not modelled | Explicit BOIL→SNAP; makes the error impossible |

Lohmiller & Slotine had the correct physical intuition — quantum and classical mechanics *are* two expressions of the same underlying structure — but lacked the mathematical machinery of tropical geometry and Maslov dequantisation to execute the transition correctly. Vattay correctly identified the error. The ASA resolves the debate: quantum mechanics is the continuous, finite-temperature ($\beta < \infty$) evaluation of the manifold; classical mechanics is the tropical, infinite-temperature ($\beta \to \infty$) crystallisation of that same manifold. The quantum potential is the price of staying in the quantum regime, and the MGE makes that price explicit.

---

## See Also

- [Paper 201 — The Maslov-Gibbs Einsum (MGE)](../papers/10.5281-zenodo.17981393/)
- [Paper 211 — Non-Associative Calculus](../papers/10.5281-zenodo.20025384/)
- [Paper 199 — The Quaternionic Virtual Machine (Q-VM)](../papers/10.5281-zenodo.20060303/)
- [Paper 206 — Fibrational Tensor Codes (FTCs)](../papers/10.5281-zenodo.19821692/)
- [Glossary: MGE](../glossary/#maslov-gibbs-einsum-mge)
- [Glossary: Tropical Limit](../glossary/#tropical-limit--crystallisation)
- [Glossary: Auto-Annealing](../glossary/#auto-annealing)
- [Portfolio A — Core Engine](../portfolios/portfolio-a/)
