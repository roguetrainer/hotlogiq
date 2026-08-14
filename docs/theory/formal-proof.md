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

## The short version

Chemistry divides into two halves. **Which states exist, how they are labelled,
what can couple to what** — that half is settled by symmetry and combinatorics
before any energy is computed. **Which state is lowest, how far apart, how fast
a reaction goes** — that half needs a Hamiltonian and real integrals. The
division is set out in [Diagrammatic Chemistry](diagrammatic-chemistry.md).

A proof assistant is useless for the second half and unusually well suited to
the first. Symmetry arguments are finite, discrete and exact — which is what a
type checker is for.

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

During an audit of this corpus in August 2026, one paper could not be assessed
**at all** — not confirmed, not refuted — because its operator convention could
not be reconstructed from the prose. Three attempts at reading it gave three
different quantities. That is a wasted afternoon that formalisation would have
made impossible.

### 2. Some errors are structural, and a type catches them

Three errors found in that audit were not arithmetic slips. They were claims
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

**It cannot reach the Hamiltonian half.** Bond lengths, energies, barrier
heights and reaction rates come from integrals over real wavefunctions. Nothing
in a proof assistant touches them.

**It is slow.** A result that takes an afternoon in numpy can take a week in
Lean, and the first attempt at anything is mostly learning the library's names.

---

## Is the mathematics even there?

Partly, and the split is informative.

**Present and usable today**: finite groups, permutation and dihedral groups,
representation theory, characters and their orthogonality, tensor products of
representations, binomial coefficients, Young diagrams. That is enough for point
groups, character tables, selection rules and microstate counting — the working
vocabulary of an undergraduate spectroscopy course.

**Absent**: Clebsch–Gordan coefficients, 6*j* symbols, Casimir elements,
octonions. So angular-momentum recoupling — the algebra behind atomic spectra —
would have to be built before it could be taught.

That gap is labour, not a limitation of the tools. Lean can express all of it;
nobody has yet.

---

## A worked set

Six lessons exist, each a single file that compiles, written for a reader who
knows neither the chemistry nor the formal methods:

| lesson | chemistry | what is proved |
|---|---|---|
| Ammonia | NH₃ has six symmetry operations | they form a group, and it is **not** commutative |
| Water | H₂O has four | it **is** commutative — which is why water's spectrum is simpler |
| Characters | what "A₁", "B₂", "E" mean | the label carries the degeneracy; tables have one column per *class* |
| Selection rules | why spectra have gaps | "allowed" means a dimension is nonzero |
| Configurations | how many microstates a d³ ion has | 120 — and d³ and d⁷ agree, by particle–hole symmetry |
| Subspaces | active spaces and error-correcting codes | they are the *same* mathematical object |

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
chemist's judgement. Nothing here changes that.
