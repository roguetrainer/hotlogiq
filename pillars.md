---
layout: default
title: Pillars
nav_order: 2
description: "The four load-bearing ideas of the Thermyon / Origami ISA framework."
---

{% include isa-nav.html %}

# The Four Pillars
{: .no_toc }

*Everything else in the framework is an application of these four ideas.*
{: .fs-5 .fw-300 }

---

## 1. β is a coordinate

Classical logic, statistical mechanics, and quantum mechanics are not three separate theories. They are the same theory evaluated at different values of a single parameter β — the inverse temperature.

| β | Arithmetic | Physics |
|---|------------|---------|
| β → ∞ | (max,+) tropical | Classical logic, discrete optimisation |
| 0 < β < ∞ | Gibbs / ℝ | Statistical mechanics, annealing |
| β = it/ℏ | Unitary / ℂ | Quantum interference, Feynman path integral |
| β = complex | Fibred | Full β-plane; p-adic places at each prime |

The **Maslov–Gibbs Einsum (MGE)** is the operation that makes β a differentiable coordinate: discrete combinatorial models become smooth functions of β, and the snap at β\* is a genuine phase transition — not a metaphor. Planck's constant, viscosity, volatility, softmax temperature, and the quantum-group deformation parameter q = e^{iπβ} are all the same object seen from different fields.

*Key papers: 201 (MGE), 443 (Planck in disguise), 454 (Meld / β=it), 543 (β-plane), 597 (soft thresholds)*

---

## 2. The H^k stratification

Every computation has a cohomological address. The three tiers are not a taxonomy — they are a theorem: the Pentagon identity d² = 0 forces exactly this structure.

| Tier | Cohomology | Opcodes | Character |
|------|------------|---------|-----------|
| H⁰ | Classical / bilateral | LABEL, ORBIT, FLIP | Symmetry sectors, discrete orbits |
| H¹ | Gauge / triangular | + TWIST | Phase accumulation, convexity, stabiliser QC |
| H² | Systemic / entangled | + BIND | Entanglement, correlation, fault-tolerant QC |

The **Pentagon identity** (d² = 0) is simultaneously: the HJM no-arbitrage condition · the Biedenharn–Elliott identity · the MIP\* verifier constraint · the H² = 0 financial stability condition. One equation, four theorems.

Quantum speedup has a cohomological address: problems that admit exponential speedup require H² resources (genuine magic / BIND). Problems solvable with H¹ resources (stabiliser / TWIST) are classically simulable by Gottesman–Knill.

*Key papers: 420 (H^k complexity ladder), 421, 469 (ISA completeness), 470 (hot logic), 472 (Shor lifting), 595 (Weyl chamber homology)*

---

## 3. The five opcodes are universal

Every computation — at any β, in any domain — decomposes into five operations. This is not a design choice; it follows from the structure of Čech cohomology on a sheaf.

| Opcode | Symbol | Cohomological role |
|--------|--------|--------------------|
| LABEL 🏷️ | ⊢ | δ⁻¹: assign a symmetry sector |
| ORBIT 🔄 | 𝒪 | H⁰: enumerate group orbits |
| FLIP 👁️ | ⌁ | Sheaf dualisation / time-reversal |
| TWIST 🌀 | ∮ | H¹: gauge transformation / phase |
| BIND 💎 | ⋈ | H²: Pachner surgery / entanglement |

The same five opcodes describe a ribosome, Shor's algorithm, a yield curve, and an enzyme — at twenty orders of magnitude in physical scale. This is not analogy: the 6j symbol is H¹ of the representation sheaf in every case.

*Key papers: 258, 370, 455 (eight derivations), 631 (Origami open ISA manifesto)*

---

## 4. The Fano crystal is the universal phase detector

Whether an orbit is **closed** (H² = 0, stable) or **open** (H² ≠ 0, unstable) is the single binary that governs:

- Photosynthetic efficiency (FMO: closed orbit = η = 0.1828 Carnot bound)
- Financial contagion (systemic risk: open H² orbit = cascade)
- Quark confinement (QCD: open orbit = confined)
- Quantum error correction (closed orbit = code space preserved)
- Enzyme catalysis (G-step: orbit closure = reaction proceeds)

The Fano plane (7 points, 7 lines, the smallest projective plane) is the minimal structure that realises H² non-trivially. The **β\* snap** — the phase transition at the critical inverse temperature — is the moment an orbit closes. It appears at the same Grassmannian angle θ_G ≈ 20° across all four domains.

*Key papers: 317, 325, 357 (MIP\* = RE), 563, 570, 595, 596, 602*

---

{% include isa-nav.html %}
