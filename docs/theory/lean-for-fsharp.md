---
layout: default
title: "Lean for F# and OCaml Programmers"
parent: Theory
nav_order: 15
description: "What ML-family experience buys you in Lean, where it stops helping, and the six things it does not prepare you for — written from the errors actually hit while building the lessons."
tags: [lean, fsharp, ocaml, functional-programming, proof-assistant, dependent-types]
---

# Lean for F# and OCaml Programmers
{: .no_toc }

*If you already write ML-family code, the first afternoon is easy and the
second one is not. This page is about the discontinuity.*
{: .fs-5 .fw-300 }

---

## Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Who this is for

You know F#, OCaml, or another ML-family language. You want to know whether that
helps with Lean, and what it does not cover.

This is deliberately **not** a Lean tutorial. [Functional Programming in
Lean](https://lean-lang.org/functional_programming_in_lean/) is the tutorial,
it is free and good, and it is written for readers who may never have used a
functional language — so an F# programmer spends its early chapters being told
things they know. This page is the short document that book does not contain:
*which of your habits transfer, and which mislead.*

## The good news, briefly

Lean 4's syntax is ML-family, and the resemblance is not superficial. Algebraic
data types, pattern matching, recursion, currying, immutability by default,
`let` binding, functions as values, type classes in the Haskell sense — all
present, all roughly where you would expect.

```lean
inductive Shape where
  | circle : Float → Shape
  | rect   : Float → Float → Shape

def area : Shape → Float
  | .circle r  => 3.14159 * r * r
  | .rect w h  => w * h
```

If that reads naturally, you have a genuine head start over someone arriving
from an object-oriented language, who must acquire all of the above before
reaching anything Lean-specific.

Now the part where the head start runs out.

---

## Six things F# does not prepare you for

### 1. Types contain programs, and programs compute types

This is the one genuinely new idea, and everything else follows from it.

In F#, `int list` is a type and `3` is a value, and the two live in separate
worlds. In Lean the barrier is gone: a type can be *computed*, and it can depend
on a value.

```lean
def Vect (n : Nat) (α : Type) := { l : List α // l.length = n }

def vhead {α : Type} {n : Nat} (v : Vect (n + 1) α) : α := ...
```

`vhead` takes a vector whose length is *known in the type* to be at least one.
There is no `None` case, no exception, no runtime check — the type has excluded
the empty list. F#'s type system cannot express this, so there is no habit to
carry across. This is the reason to learn Lean and the reason it takes a while.

### 2. Totality is enforced, not encouraged

In F# this compiles and hangs:

```fsharp
let rec loop n = loop (n + 1)
```

In Lean it does not compile at all:

```
error: fail to show termination for loop
failed to infer structural recursion
possible solutions: use `termination_by` to specify a
different well-founded relation
```

Every Lean function must be shown to terminate. Usually the compiler works it
out from a structurally decreasing argument; when it cannot, **you must supply
the argument that it terminates** — which is a proof, in the middle of what you
thought was ordinary programming.

For most code this is invisible. When it is not, it is a wall, and it arrives
without warning.

### 3. There is a second language, and you will spend most of your time in it

An F# programmer writes a function and is finished. In Lean you often write the
function and then write a *proof about* the function — in tactic mode, which is
a separate language with separate idioms:

```lean
theorem countdown_length (n : Nat) : (countdown n).length = n + 1 := by
  induction n with
  | zero => rfl
  | succ k ih => simp [countdown, ih]
```

Nothing in ML experience prepares you for `induction ... with`, `simp`, `omega`,
`ring`, or `exact?`. This is where the real learning is, and where the head
start has fully run out. Budget accordingly: the syntax takes an afternoon, the
tactics take much longer.

### 4. Do not guess library names — ask the prover

This is the most practical item on the page, and it was learned the expensive
way.

Getting one short lesson to compile took **four wrong guesses**:
`Submodule.finrank_le` (correct name, missing import), `finrank_bot`,
`Module.finrank_bot` — before the actual lemma,
`Module.finrank_eq_zero_of_subsingleton`, was found. Three greps through the
library had already failed.

What found it in seconds was asking Lean:

```lean
example : ... := by exact?
```

`exact?` searches the library for something closing the current goal. `apply?`
and `rw?` do the same for their situations, and `simp?` shows you what `simp`
actually used.

In F# you find a function by knowing its name or browsing the module. Mathlib
has over 200,000 theorems with a systematic but unguessable naming convention.
**Ask, do not guess** — the habit transfer here is negative, and it costs real
hours.

### 5. The elaborator is not a type checker

F# errors say a type does not match. Lean errors are frequently about
*elaboration* — the process of turning what you wrote into fully explicit terms,
inferring implicit arguments, and inserting coercions. When that fails, the
message is about unification, and it may point somewhere other than the mistake.

The compensation: Lean is genuinely interactive. Put the cursor anywhere in a
proof and the editor shows the goal state — what remains to be proved, with
every hypothesis in scope. There is no F# equivalent, and it changes how you
work. You do not read a proof; you step through it.

### 6. The toolchain has its own failure modes

Not intellectual, but it will cost you an afternoon if unprepared. From the
actual setup log for this project:

- `lean` and `lake` were on `PATH` but errored with *"no default toolchain
  configured"*. Two toolchains were installed and neither was default;
  `elan default leanprover/lean4:v4.32.1` fixed it.
- **Match your project's `lean-toolchain` to Mathlib's own**, or the prebuilt
  cache will not download and you will compile Mathlib from source.
- `lake exe cache get` pulls ~8,600 prebuilt files and saves hours. Run it
  before anything else.

`elan` is `rustup`; `lake` is `cargo`. If you have used those, the model is
familiar even though the failure messages are not.

---

## What a type checker catches that a reviewer does not

One example, because it is the best argument for the whole exercise and it came
from a compile error rather than from insight.

A theorem about spectroscopic selection rules refused to compile. A count of
allowed transitions is a natural number; the character scalar product lives in a
field; Lean would not equate them.

The refusal was **correct, and chemically meaningful**. In characteristic *p*, a
count of exactly *p* independent transitions would cast to zero — so the
arithmetic would declare a transition forbidden while the transitions plainly
exist. The fix is a `CharZero` hypothesis. It costs nothing in practice, because
chemistry works over ℂ. But no textbook states it, because prose lets you skip
the step where you would have noticed.

That is the class of thing this tooling is for. Not speed — Lean is slower than
F# for anything you could have written in F#. What you get is that a certain
kind of unstated assumption becomes impossible to leave unstated.

---

## Honest summary

**What transfers**: syntax, algebraic data types, pattern matching, recursion,
type classes, immutability, the habit of thinking in total functions. Perhaps
the first day.

**What does not**: dependent types, tactic-mode proving, library navigation,
termination obligations, and the elaborator's error vocabulary. That is the
other 95%, and an F# background makes it *faster to start* rather than *easier
to finish*.

**Worth knowing before you commit**: for writing programs, Lean is a
well-designed ML with an unusually good type system, and F# is more practical
for almost any production task. The reason to learn Lean is the proving — and
proving is the part your F# experience does not touch.

If that is what you want, the head start is real. Just do not expect it to last
past the first afternoon.

---

## Where to go

- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)
  — the tutorial. Skim the first chapters; you know them.
- [Theorem Proving in Lean 4](https://lean-lang.org/theorem_proving_in_lean4/)
  — the proving half, which is what you actually came for.
- [Mathlib](https://leanprover-community.github.io/) — the library. Use
  [Loogle](https://loogle.lean-lang.org/) and `exact?` rather than grep.
- [Why formalise chemistry?](formal-proof.md) — what this was used for here,
  including the errors it caught and the one it did not.
