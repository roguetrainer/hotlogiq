---
layout: default
title: "Thermodynamic Computing"
parent: Theory
nav_order: 13
description: "Extropic has built probabilistic hardware and a gate-based language for it. What that is, how it differs from quantum computing, and where it leaves work like this one."
tags: [thermodynamic-computing, p-bits, extropic, torx, zx-calculus, markov-categories, beta]
---

# Thermodynamic Computing
{: .no_toc }

*Someone has built the hardware. This page sets out what it does, what it does
not do, and which questions it leaves open — including for the material on this
site.*
{: .fs-5 .fw-300 }

---

## Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## What exists now

Extropic has fabricated chips whose computational primitive is a **probabilistic
bit**: a circuit whose thermal noise is the signal rather than the enemy. A pbit
emits a random telegraph signal whose bias is set by a control voltage, at
energies in the attojoule range. Their X0 test chip carries pbits, pdits
(*d*-state), and continuous Gaussian primitives; their Z1 design hardwires a
degree-16 interaction graph and runs chromatic Gibbs sweeps in silicon.

On top of that they have defined **Parametrized Stochastic Circuits** — a
gate-based intermediate representation — and released `torx`, a JAX library that
builds, executes and differentiates them.

This is a serious piece of work with hardware behind it, and anyone thinking
about computation at finite temperature should know it exists.

---

## It is not quantum computing, and they say so

Their paper devotes an appendix to the distinction, which is worth repeating
because the circuit diagrams look similar.

| | Quantum circuit | Stochastic circuit |
|---|---|---|
| Objects | unitary matrices | column-stochastic matrices |
| Invertible? | always | **no** — reset has rank 1 |
| State | complex amplitudes | a probability distribution |
| Interference | yes — amplitudes cancel | **none** |
| Readout | collapses the state | a sample; leaves it unchanged |

The last row is a genuine capability, and it runs in their favour: you can
measure at any point in a stochastic circuit without disturbing the rest of the
computation. No quantum circuit can do that.

The absence of interference is the sharper limitation. Quantum speedups that
depend on amplitudes cancelling — Shor's period finding, for instance — have no
counterpart here. Probabilistic hardware is not a cheaper quantum computer; it
is a different machine that samples distributions efficiently.

---

## The gate set, and what it can reach

Their elementary gates are given as explicit matrices: `PNOT`, `PSWAP`,
`PCNOT`, `PJUMP`, `PCopy`, `PDEMUX`, `PReset`, `PditShift`, plus
generator-derived kernels like `PIsing(J, h₁, h₂, β, Δt)`.

They list as open work *"a general theory of synthesizing a target kernel from a
fixed gate set"* — the stochastic analogue of universality for quantum gate
sets.

One fragment of that question is settled by classical mathematics. Several of
the gates are convex combinations of the identity with a **permutation**, and by
Birkhoff–von Neumann such combinations are doubly stochastic. Doubly stochastic
matrices are closed under both matrix and Kronecker product, so:

> A circuit built only from permutation-mixture gates can never leave the
> uniform distribution, and therefore can never reach a non-uniform steady
> state.

We checked this numerically: drift from uniform is exactly zero for such
circuits, and 0.61 once `PReset` is included. The useful work in their library
is done by reset, ancillas, and the generator-derived gates — not by the
permutation mixtures.

Worth stating plainly: **this is Birkhoff (1946) applied to their gate list, not
a new theorem.** It is a necessary condition on one fragment. The harder half —
whether reset plus permutation mixtures generate *every* stochastic kernel, and
at what depth — is genuinely open, and the Solovay–Kitaev machinery does not
transfer, because its error contraction needs group commutators
*UVU*⁻¹*V*⁻¹ and stochastic matrices have no inverses.

---

## Relation to the ZX-calculus

Both are graphical calculi for composing processes, but they differ in the way
that matters.

**ZX has rewrite rules and a completeness theorem.** Every true equation between
the processes it describes is derivable from its rules. That is what makes it a
calculus rather than a notation, and it is what allows circuit optimisers to
rewrite mechanically and know they have missed nothing.

**PSCs have composition but no rewrite rules.** Their four operations — series,
parallel, prepare an ancilla, discard a wire — build circuits, but there is no
stated rule set for transforming one circuit into an equal one. The question
"when are two PSCs the same?" cannot yet be posed in their framework, which is
precisely why the synthesis problem is open.

The nearest existing mathematics is not ZX but **Markov categories** (Fritz;
Cho and Jacobs), which give categorical semantics for exactly this structure:
stochastic maps with copying and discarding. Their four operations are a Markov
category's structure in all but name. The connection appears uncited in their
paper, and is the sort of thing that would be worth someone making precise.

---

## Where this leaves the work on this site

Three observations.

**On temperature as a parameter.** Treating β as a real quantity to be tuned
rather than a limit to be taken is common ground — their `PIsing` gate carries β
explicitly and their demonstrations run at β = 1.5. It is not a distinguishing
idea. Extending β into the complex plane formally contains both the thermal
(β real) and unitary (β imaginary) cases, but that is Wick rotation, which is
textbook, and a parameterisation whose two limits are two known theories is a
framing rather than a result. It would need to predict something neither limit
does.

**On instruction sets.** Extropic built a gate-based intermediate representation
because they have a substrate whose native operations *are* those gates. Their
opcodes are matrices you can multiply; that is why a synthesis question can even
be asked about them. An instruction set without a substrate is a naming
convention, and should be described as one.

**On scope.** Their demonstrations are random walks on graphs, discrete
diffusion, max-cut, jump diffusion and Ising rings. Molecular electronic
structure is not an energy-based model over binary variables, and choosing which
electrons need exact treatment is not a sampling problem — so the
[chemistry](../applications/chemistry.md) question is orthogonal to this
hardware rather than addressed by it.

---

## Further reading

- Verdon, Tyrpak, Lockwood, Morton, Neagoe, Sugolov, MacCormack & Amico,
  *A Framework for Stochastic Differentiable Programming*, arXiv:2608.01612
  (2026) — PSCs and `torx`.
- Camsari *et al.*, *Phys. Rev. X* **7**, 031014 (2017) — p-bits and invertible
  logic.
- Birkhoff, *Univ. Nac. Tucumán Revista A* **5**, 147 (1946) — the doubly
  stochastic decomposition.
- Kingman, *Z. Wahrscheinlichkeitstheorie* **1**, 14 (1962) — the embeddability
  problem for Markov chains.
- Fritz, *Adv. Math.* **370**, 107239 (2020) — Markov categories.
- Coecke & Kissinger, *Picturing Quantum Processes* (CUP, 2017) — ZX-calculus
  and its completeness.
