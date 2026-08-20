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

## The precise relationship: PSCs are channels with the coherence discarded

The contrast above is the useful practical statement, but the two models are not
merely analogous. Stochastic circuits sit *inside* the theory of quantum
channels.

A **CPTP map** (completely positive, trace preserving) describes an open quantum
system's evolution: Φ(ρ) = Σₖ Kₖ ρ Kₖ† with Σₖ Kₖ†Kₖ = I. Restrict attention to
states diagonal in the computational basis, ρ = diag(*p*). A channel taking
diagonal states to diagonal states acts on *p* by a column-stochastic matrix,
and every column-stochastic matrix arises this way.

> **Stochastic maps are exactly the CPTP maps that preserve the diagonal
> subalgebra.** A PSC is what remains of a quantum channel once coherence is
> thrown away.

This is standard — it is what is meant by calling classical probability the
commutative case of quantum theory. The gate-level version is the part worth
writing out.

| PSC gate | Quantum channel | Kraus operators |
|---|---|---|
| `PNOT(p)` | **bit-flip channel** | √(1−p)·I, √p·X |
| `PReset(p)` | **amplitude damping** | [[1,0],[0,√(1−p)]], [[0,√p],[0,0]] |
| `PSWAP(p)` | partial swap | √(1−p)·I⊗I, √p·SWAP |
| `PCNOT(p)` | probabilistic CNOT | √(1−p)·I⊗I, √p·CNOT |
| `PCopy(p)` | **no faithful lift** — see below | — |
| `PIsing(θ)` | Davies generator / thermal Lindbladian | exp(t·ℒ) |
| `POU(γ,D,t)` | quantum Ornstein–Uhlenbeck | Gaussian channel |

Two rows are worth dwelling on.

**`PReset` is amplitude damping.** Their paper singles it out as the exception in
the library, being rank 1 and non-invertible. In the quantum setting it is the
most familiar channel there is — spontaneous emission, a qubit relaxing to |0⟩.
The gate carrying irreversibility is the same operation that makes open quantum
systems open.

**`PCopy` has no faithful quantum lift.** Copying a classical bit is
unproblematic; copying an unknown quantum state is forbidden by no-cloning. The
classical gate lifts only to the CNOT-with-ancilla construction, which copies in
the computational basis and *entangles* on superpositions. This is where Markov
categories and their quantum counterpart part company, and the divergence is
already formalised: Parzygnat (2020) defines quantum Markov categories and
identifies what is lost — the canonical copy map Δ: X → X ⊗ X.

The first two rows were checked numerically rather than assumed: applying the
channel to a diagonal state and reading off the diagonal reproduces the
stochastic gate to 1.1 × 10⁻¹⁶ across the parameter range.

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

The gap is not that the mathematics is missing. Completeness for **mixed-state**
processes is settled: the doubled ZX-calculus is proved sound and complete for
quantum channels (Carette, Jeandel, Perdrix & Vilmart, 2021), building on
Selinger's CP construction. And the classical structure PSCs have — stochastic
maps with copying and discarding — is that of a **Markov category** (Fritz; Cho
and Jacobs).

So the calculi exist on both sides. What is absent is the connection: their four
operations are a Markov category's structure in all but name, and their paper
does not cite that literature.

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
- Salazar, Saxena, Baker, Kwek & Kyaw, *Stabilizer Statistical Mechanics*,
  [arXiv:2608.14798](https://arxiv.org/abs/2608.14798) (2026) — a partition
  function over the Pauli spectrum, and a magic monotone interpolating between
  the stabilizer 2-Rényi entropy and the nullity. Note their caution, which
  applies to any claim that a molecule "has" a given amount of magic: the value
  is **not basis-independent**, and in H₂ the peak position, the
  dissociation-limit behaviour and even the ordering between two geometries all
  change between STO-3G and 6-31G.
- Nielsen & Chuang, *Quantum Computation and Quantum Information* (CUP, 2010),
  §8.2 — Kraus representation; the bit-flip and amplitude-damping channels.
- Wootters & Zurek, *Nature* **299**, 802 (1982) — no-cloning.
- Birkhoff, *Univ. Nac. Tucumán Revista A* **5**, 147 (1946) — the doubly
  stochastic decomposition.
- Kingman, *Z. Wahrscheinlichkeitstheorie* **1**, 14 (1962) — the embeddability
  problem for Markov chains.
- Fritz, *Adv. Math.* **370**, 107239 (2020) — Markov categories.
- Parzygnat, arXiv:2001.08375 (2020) — quantum Markov categories; what
  no-cloning costs.
- Carette, Jeandel, Perdrix & Vilmart, *ACM Trans. Quantum Comput.* **2**(4)
  (2021) — completeness of the doubled ZX-calculus for mixed states.
- Coecke & Kissinger, *Picturing Quantum Processes* (CUP, 2017) — ZX-calculus
  and its completeness.
