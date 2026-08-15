---
layout: default
title: "Why Formalise Chemistry?"
parent: Theory
nav_order: 14
description: "What a proof assistant buys you when the mathematics is combinatorial — written from six months of finding out, including the errors it would have caught and the one it would not."
tags: [lean, formal-methods, proof-assistant, combinatorics, group-theory]
---

# Why Formalise Chemistry?
{: .no_toc }

*A proof assistant will not compute a bond length. What it does instead is
refuse to let you be vague — and vagueness turns out to be the expensive kind of
error.*
{: .fs-5 .fw-300 }

---

## Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Start here, if the words are unfamiliar

*This section assumes no mathematics beyond school. Skip it if terms like
"irreducible representation" are already comfortable.*

### Symmetry is a list of things you can do

Take an ammonia molecule: a nitrogen atom with three hydrogens below it, like a
tripod. Now ask what you can **do** to it that leaves it looking exactly as it
did. You can leave it alone. You can spin it a third of a turn, or two thirds.
And you can reflect it in any of three mirrors, each containing one of the
N–H bonds.

Six operations, and no others. That list is what mathematicians call a
[group](https://en.wikipedia.org/wiki/Group_(mathematics)), and chemists have a
name for this particular one: C₃ᵥ.

Nothing about energy has been mentioned. We have not asked how strong the bonds
are, how long they are, or how much it costs to bend one. The list of six came
from the *shape* alone.

### Why a list of operations predicts anything

Here is the part that is genuinely surprising, and it is the reason any of this
matters.

That list of six constrains what the molecule can *do*. It fixes how many
distinct vibrations there are and which ones share a frequency. It decides which
colours of light the molecule can absorb and which it cannot touch, no matter
how bright the light. Shine a laser at a forbidden transition and nothing
happens — not weakly, but not at all.

Water is a useful contrast. It has only four symmetry operations, and — this is
the crucial difference — **the order in which you apply them does not matter**.
For ammonia it does: spin-then-reflect and reflect-then-spin land you somewhere
different. That single distinction is why water's spectrum is simpler than
ammonia's. Water has no pairs of vibrations forced to share a frequency; ammonia
does.

So counting and comparing symmetry operations tells you real things about a
molecule before you know anything about its energies. That half of chemistry is
*combinatorial* — it is about counting and structure, not about solving
equations.

### What a proof assistant is

A [proof assistant](https://en.wikipedia.org/wiki/Proof_assistant) is a program
that checks mathematical reasoning the way a compiler checks a program. You
state a claim and supply the argument; the machine verifies every step against
its rules and rejects anything not fully justified. It has no intuition and
gives no benefit of the doubt.

The one used here is called [Lean](https://en.wikipedia.org/wiki/Lean_(proof_assistant)),
together with its mathematics library,
[Mathlib](https://leanprover-community.github.io/).

Think of it as a spellchecker for arguments, with one important difference: you
cannot click "ignore". If the machine will not accept a step, either the step is
wrong or you have not said what you meant.

### One error, as an example

An argument in this corpus claimed that a certain operation, applied three times
over, could squash something down to nothing.

But each of those operations was of a kind that **never changes the size of
anything** — like a rotation, which turns things without stretching or
shrinking. Do three rotations in a row and you have still only rotated. Nothing
can vanish.

The claim was fluent, published, and impossible. Spotting it required no
calculation, only noticing what kind of operation was involved — exactly the
kind of check a machine performs automatically and a reader may not think to
make.

The rest of this page is about that: which errors this catches, which it cannot,
and what the mathematics actually costs.

---

## The short version

Chemistry divides into two halves. **Which states exist, how they are labelled,
what can couple to what** — that half is settled by symmetry and combinatorics
before any energy is computed. **Which state is lowest, how far apart, how fast
a reaction goes** — that half needs a Hamiltonian and real integrals. The
division is set out in [Diagrammatic Chemistry](diagrammatic-chemistry.md).

A proof assistant is unusually well suited to the first half: symmetry arguments
are finite, discrete and exact, which is what a type checker is for.

It cannot *decide* the second half — no proof assistant will tell you an energy
is −1.7 kcal/mol. But it can verify the **code** that computes one, which is a
third thing worth distinguishing and is what
[LeanLJ](#other-people-are-doing-this-and-differently) does.

---

## What it buys you, concretely

### 1. Conventions cannot stay implicit

This is the real prize, and it is easy to underrate.

Half the difficulty in checking symmetry arguments is that the conventions live
in the author's head. Which labelling of the Fano plane? Which normalisation of
the Casimir? Which bracketing of a triple product? Prose lets all three stay
unstated, and a reader who guesses differently gets a different answer and
cannot tell whose fault it is.

A formal statement has no such room. The type either says which one you mean or
it does not compile.

One paper in this corpus could not be assessed **at all** — not confirmed, not
refuted — because its operator convention could not be reconstructed from the
prose. Three readings gave three different quantities.

### 2. Some errors are structural, and a type catches them

Three errors found in this corpus were not arithmetic slips. They were claims
that could not have been true, for reasons visible before any calculation:

- a theorem asserted that a certain product of maps had eigenvalue zero. Those
  maps were **isometries** — they preserve length — and a product of isometries
  is an isometry. Zero is not a possible eigenvalue. No labelling convention
  could rescue it.
- a formula for a Casimir invariant was **symmetric in its two arguments**. The
  algebra in question is not symmetric — its two root lengths differ — so no
  symmetric formula can be its Casimir.
- a "correction term" was derived for a gradient that turned out to be linear,
  so the correction was for a different problem entirely.

Each is the kind of error that survives peer review, because it is stated
fluently and the surrounding mathematics is correct. Each would be caught by a
type checker in seconds.

### 3. You find out what you actually assumed

Formalising a known result routinely turns up a hypothesis nobody wrote down.

Writing the selection-rule lesson below, the last theorem refused to compile. A
character's scalar product lives in a field; the count of allowed transitions is
a natural number; Lean would not equate them. The fix is a **characteristic
zero** hypothesis — and the reason is chemically meaningful: in characteristic
*p*, a count of exactly *p* independent transitions would cast to zero, so the
arithmetic would declare a transition forbidden while the transitions plainly
exist.

Chemistry works over the complex numbers, so the hypothesis costs nothing. But
no textbook states it, because prose lets you skip the step where you notice.

---

## What it does *not* buy you

Worth being blunt, because formal methods attract more enthusiasm than they
deserve.

**It cannot tell you whether a claim is interesting.** One of the audited
papers proved its theorem correctly — for a map nobody was using. The
mathematics was sound, the modelling was wrong, and a proof assistant would have
verified it happily. Choosing the right object to reason about remains entirely
human.

**It cannot decide the Hamiltonian half.** Bond lengths, energies, barrier
heights and reaction rates come from integrals over real wavefunctions. No proof
assistant will tell you an energy is −1.7 kcal/mol.

*But it can verify the code that computes one* — see the next section. An
earlier version of this page said formalisation "cannot reach the Hamiltonian
half" full stop. That was too strong, and other people's work shows why.

**It is slow.** A result that takes an afternoon in numpy can take a week in
Lean, and the first attempt at anything is mostly learning the library's names.

---

## Other people are doing this, and differently

Worth knowing, because it marks out a third thing formalisation is good for that
this page originally missed.

**LeanLJ** (Ugwuanyi, Jones, Velkey & Josephson, UMBC,
[arXiv:2505.09095](https://arxiv.org/abs/2505.09095)) implements Lennard-Jones
energy calculations in Lean 4 *with proofs of correctness*, reproducing NIST
benchmark values. Their claim is that software errors in the calculation can be
eliminated by construction.

That is a different target from the lessons on this page, and the distinction is
worth stating plainly:

| | what is proved | the failure it prevents |
|---|---|---|
| **LeanLJ** | the program matches its specification | *"did I code the formula correctly?"* |
| **this page** | a claim about symmetry is true or false | *"is the formula right at all?"* |

Both use the same tool against different mistakes. Numerical chemistry codes are
large and their bugs are hard to find; symmetry arguments are short and their
errors are structural. Neither approach subsumes the other.

LeanLJ is not alone. The same group at UMBC has mechanised classical chemical
derivations — Langmuir and BET adsorption — and
[PhysLean](https://physlean.com/) is digitalising physics in Lean 4, though it
skews toward foundational and high-energy topics and has no character tables or
molecular point groups.

So: formal methods in chemistry is small but not empty. It is also easy to
*over*estimate, which is a failure this page committed and documents in the
next section.

---

## Is the mathematics even there?

Partly, and the split is informative.

**Present and usable today**: finite groups, permutation and dihedral groups,
representation theory, characters and their orthogonality, tensor products of
representations, binomial coefficients, Young diagrams. That is enough for point
groups, character tables, selection rules and microstate counting — the working
vocabulary of an undergraduate spectroscopy course.

**Absent**: Clebsch–Gordan coefficients, 6*j* symbols, Casimir elements,
octonions — and, more surprisingly, **crystallographic groups**. The 32 point
groups and the 230 space groups are finite, enumerable objects of exactly the
kind formalisation suits, and no proof assistant has them.

So angular-momentum recoupling — the algebra behind atomic spectra — would have
to be built before it could be taught.

That gap is labour, not a limitation of the tools. Lean can express all of it;
nobody has yet.

### A retraction, and what it cost to find out

An earlier version of this section said Clebsch–Gordan *had* been formalised
elsewhere, citing [arXiv:2605.20440](https://arxiv.org/abs/2605.20440). **That
was wrong, and the error was mine.**

A literature survey reported that paper as containing "a zero-sorry Lean 4
formalisation of the Wigner–Eckart theorem and algebraic Clebsch–Gordan
proofs". I recorded it, rewrote the plans around it, and published it here —
without reading the paper. Reading it a day later: it formalises a 600-line
algebra of group-equivariant tensor operations, applies it to finite groups up
to order 24, and lists complete Wigner–Eckart decomposition as *future work*.
It contains no Clebsch–Gordan coefficients and no 6*j* symbols.

The irony is exact. This page argues that fluent, plausible, structurally wrong
claims survive review — and a fluent, plausible summary of a paper I had not
opened went straight onto it. A machine checker would not have caught this
either: it is not a mathematical error but a sourcing one, the kind that only
reading the primary source catches.

Worth stating plainly because the failure mode generalises: **a summary of a
source is not the source.** The survey was doing what surveys do, and the error
entered when its confident paraphrase was treated as verified fact.

---

## A worked set

Nine lessons exist, each a single file that compiles, written for a reader who
knows neither the chemistry nor the formal methods:

| lesson | chemistry | what is proved |
|---|---|---|
| Ammonia | NH₃ has six symmetry operations | they form a group, and it is **not** commutative |
| Water | H₂O has four | it **is** commutative — which is why water's spectrum is simpler |
| Characters | what "A₁", "B₂", "E" mean | the label carries the degeneracy; tables have one column per *class* |
| Selection rules | why spectra have gaps | "allowed" means a dimension is nonzero |
| Configurations | how many microstates a d³ ion has | 120 — and d³ and d⁷ agree, by particle–hole symmetry |
| Subspaces | active spaces and error-correcting codes | they are the *same* mathematical object |
| Ladder | why angular momentum comes in whole steps | the rungs are evenly spaced, the top is a whole number, and there are exactly 2*j*+1 |
| Standard triple | "take the standard basis of sl₂" | that it *is* one — a statement Mathlib could not previously make |
| G₂ asymmetry | why a published formula could not be right | the pairing is not symmetric, so no symmetric formula describes it |

The **standard triple** is the one that gives something back. Mathlib defines
the sl₂ commutation relations abstractly and defines the 2×2 trace-zero
matrices concretely, but nothing connected the two — so the phrase every physics
text opens with was not available as a term. It now is. Small, but it was
missing, and it was still missing when rechecked after the Clebsch–Gordan
surprise above.

None asserts anything the reader must take on trust. Every claim is checked by
the machine, and the axioms used are the standard three.

---

## The honest summary

Formalisation is not a route to new chemistry. It is a discipline that makes a
particular class of mistake impossible — the class where an argument is fluent,
plausible, internally consistent, and wrong for a structural reason nobody
looked for.

That class is more common than it should be, and it is exactly the class that
prose review is worst at catching. If a body of work rests on combinatorial and
group-theoretic claims, having them machine-checked is worth the slowness.

The parts that need a Hamiltonian still need a computer, a basis set, and a
chemist's judgement. What formalisation can add there is a guarantee that the
code implements what it claims to — which is what LeanLJ demonstrates, and a
different job from the one this page is about.
