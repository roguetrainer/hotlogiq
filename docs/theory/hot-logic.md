---
layout: default
title: Why Hot Logic?
parent: Theory
nav_order: 1
description: "Boolean logic is zero-temperature. Every LLM, DNN, and voice assistant runs at finite temperature. Hot Logic is the missing formal language that unifies them — via the inverse-temperature parameter β."
tags: [hot-logic, temperature, boolean, softmax, llm, mge, beta, gibbs, tropical, unification]
portfolio: B
---

# Why Hot Logic?
{: .no_toc }

*Boolean logic is zero-temperature. Every LLM, every DNN, every Siri and Alexa
runs at finite temperature. Hot Logic is the formal language that unifies them.*
{: .fs-5 .fw-300 }

---

## Contents
{: .no_toc }

1. TOC
{:toc}

---

## The inconvenient truth about AI

Every practical AI system running today operates at a non-zero temperature.

When a language model generates text, it samples from a probability distribution
parameterised by a **temperature** τ (equivalently, an inverse temperature β = 1/τ).
Set τ = 0 and the model degenerates to argmax — it always picks the most probable
token, producing repetitive, brittle output. Every deployed LLM runs at τ > 0.

This is not a quirk of language models. It is universal:

| System | Where temperature appears |
|--------|--------------------------|
| LLMs (GPT, Claude, Gemini, ...) | Softmax temperature τ at every layer and at sampling |
| Deep neural networks | Softmax in classification heads; dropout as stochastic regularisation |
| Diffusion models | Noise schedule = explicit temperature annealing |
| Reinforcement learning | Entropy regularisation; Boltzmann exploration (ε-greedy is β→∞ limit) |
| Voice assistants (Siri, Alexa, ...) | Beam search with temperature; confidence thresholds |
| Recommender systems | Softmax over item embeddings; temperature scaling for calibration |
| AlphaFold / protein structure | Temperature in the diffusion prior; energy landscape sampling |
| Quantum computing hardware | Physical temperature of the qubit; T₁/T₂ decoherence |

Not one of these systems is zero-temperature. Not one of them is Boolean.

---

## The gap in the foundations

Classical computer science is built on zero-temperature abstractions:

- **Boolean algebra** — AND/OR/NOT; each gate is deterministic
- **Turing machines** — the tape head is always in a definite state
- **Circuit complexity** — P, NP, #P — all defined over {0,1}
- **Logic** — propositional and first-order; a formula is true or false

These are the right tools for the β→∞ limit: cold, hard, crystalline computation
where every bit is determined and every gate is reversible or irreversible in a
clean, discrete sense.

But the moment you add temperature — the moment the system has to *choose* under
uncertainty, balance competing pressures, or anneal toward a solution — you leave
the domain of these tools entirely. You are now doing **thermodynamic computation**,
and classical CS theory has almost nothing to say about it formally.

This is not a new observation. The unification of logical and probabilistic
reasoning has a rich prior history — Domingos's Markov Logic Networks weight
logical rules by real numbers and embed them in factor graphs; his "Master
Algorithm" thesis (Basic Books, 2015) argues for a single learning framework
unifying logic, statistics, and neural networks. That programme is the right
instinct. What has been missing is the formal thermodynamic scaffolding: a
language where temperature is not a hyperparameter bolted on after the fact,
but a first-class geometric object with its own algebra.

---

## The unification: β as a first-class parameter

Hot Logic is built on one observation: **cold logic and hot logic are the same
programme evaluated at different β**.

The inverse temperature β is not a hyperparameter. It is a coordinate on the
**β-plane** — the complex plane whose real axis interpolates classical (β→∞)
through thermodynamic (finite β) computation, and whose imaginary axis is quantum
mechanics (β = it, the Wick rotation).

| β regime | Name | What it computes |
|----------|------|-----------------|
| β → ∞ | Origami ISA | Tropical / Boolean; argmax; deterministic |
| 0 < β < ∞ | Forge ISA | Gibbs / softmax; probabilistic; thermodynamic |
| β = it | Meld ISA | Quantum amplitudes; interference; entanglement |
| β ∈ ℂ | Raven ISA | PT-symmetric; complex temperature; exceptional points |

Every LLM softmax layer is a **Forge ISA** computation at finite β. Every
classical Boolean circuit is an **Origami ISA** computation at β→∞. Every
quantum gate is a **Meld ISA** computation at β = it. They are not three
different paradigms — they are three points on the same geometric object.

The five ISA opcodes (RESOLVE / PROJECT / FLIP / TWIST / FUSE) are the same
at every temperature. Only the semiring changes:

| β regime | Semiring | RESOLVE computes |
|----------|----------|-----------------|
| β → ∞ | (ℝ∪{-∞}, max, +) tropical | argmax fan-out |
| finite β | (ℝ₊, +, ×) Gibbs | softmax fan-out |
| β = it | (ℂ, +, ×) complex | amplitude fan-out |

This is why the same neural network architecture — attention, which is
RESOLVE followed by PROJECT — appears in protein folding, language modelling,
image recognition, and drug discovery. It is not a coincidence or an
analogy. It is the same categorical morphism running at finite β over
different data modalities.

---

## The snap threshold β*

Between cold (Boolean) and hot (probabilistic) computation lies a sharp
boundary — the **snap threshold** β*.

At β*, the system undergoes a phase transition: the Gibbs distribution
collapses from a broad thermal distribution to a sharply peaked one.
Below β* (hotter), many states are accessible — the system explores.
Above β* (colder), the system freezes into a definite configuration —
the system exploits.

This is simultaneously:
- The **softmax collapse** in neural networks (overconfident predictions
  when temperature is too low)
- The **spin-crossover transition** in chemistry (high-spin ↔ low-spin)
- The **BKT transition** in condensed matter (vortex binding/unbinding)
- The **grokking transition** in machine learning (sudden generalisation
  after memorisation)

In every case, the same β* snap is firing. Hot Logic gives it a name,
a categorical description (a SNAP 2-cell between ISA tiers), and a
computable signature (the TWIST opcode failure at β* = ½ in the SU(2)_q
family).

---

## The Maslov-Gibbs Einsum: thermodynamic discipline

The router that manages the transition between hot and cold regimes is
the **Maslov-Gibbs Einsum (MGE)**. It is the thermodynamic discipline
that Domingos's programme lacked: a formal mechanism for computing
*at* any temperature, *transitioning* between temperatures, and
*detecting* the snap threshold.

The MGE is a semiring-polymorphic contraction: it accepts an ISA
programme and a β value, and routes to the appropriate arithmetic
units — tropical (max,+) near β→∞, Gibbs (+,×) at finite β,
complex FMA at β = it.

In practical terms: every attention mechanism in every transformer is
an MGE contraction at finite β. Making β explicit and learnable —
rather than fixing it as a hyperparameter — is the engineering
programme that follows from Hot Logic.

See [The β-plane](forge-meld.md) for the full geometry, and
[The MGE](../reference/key-structures.md) for the formal definition.

---

## Why this matters for AI

The practical consequences of taking Hot Logic seriously:

**1. Temperature is not a hyperparameter — it is a geometric coordinate.**
Training an LLM with a fixed softmax temperature is like computing a Fourier
transform with a fixed frequency and calling it done. The β-plane tells you
where you are; the MGE snap threshold tells you when to change regime.

**2. The cold limit is the right inductive bias.**
Boolean logic and tropical arithmetic are the β→∞ limit of Gibbs computation.
Regularisation, dropout, and weight decay are all mechanisms for *preventing*
the network from collapsing to the cold limit prematurely. Hot Logic makes
this precise: they are mechanisms for keeping β finite.

**3. Quantum advantage has a thermodynamic signature.**
The Meld ISA (β = it) is not just "probabilistic computation with complex
numbers." It is computation at an imaginary temperature — where interference
replaces thermal fluctuation as the source of uncertainty. The boundary
between Forge (finite β) and Meld (β = it) is the boundary between classical
probabilistic and quantum computation, and it is the same β-plane.

**4. The snap threshold predicts phase transitions in learning.**
Grokking — the sudden generalisation that occurs long after training loss
has plateaued — is a β* snap. The network is exploring (hot) for a long
time, then crystallises (cold) around the correct generalising solution.
The snap threshold is computable from the MGE; predicting it is a
concrete research programme.

---

## Prior work and what is new

The unification of logic and probability has been pursued seriously since
at least Nilsson's probabilistic logic (1986) and Halpern's work on
uncertainty (2003). Domingos's Markov Logic Networks (Richardson & Domingos
2006) and the "Master Algorithm" (2015) are the most direct predecessors
of the Hot Logic programme. We owe that work a clear acknowledgement.

**What is new here** is not the unification thesis but the *mechanism*:

| Prior work | HotLogiQ |
|-----------|----------|
| Weight logical rules by real numbers | β is a geometric coordinate on the β-plane |
| Factor graphs as the unifying formalism | Monoidal categories (ISA opcodes) as the foundation |
| Temperature appears implicitly in Boltzmann weights | Temperature is an explicit first-class parameter |
| No formal notion of tier or phase transition | H^k cohomological tier; β* snap threshold |
| Unification is a learning problem | Unification is a geometric fact (same opcodes, different β) |

The claim is not that Hot Logic subsumes Markov Logic. The claim is that
the β-plane provides a *geometric* foundation for the unification that
the probabilistic-logic programme has always needed but never had.
