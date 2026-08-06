---
layout: default
title: "Diagrammatic Chemistry"
parent: Theory
nav_order: 12
description: "Which parts of chemistry are combinatorial, group-theoretic or topological — and which need a Hamiltonian. Plus a survey of the diagram calculi mathematics has built, and which ones chemistry already uses."
tags: [diagrams, group-theory, topology, combinatorics, hamiltonian, goldstone, yutsis, birdtracks, guga]
---

# Diagrammatic Chemistry
{: .no_toc }

*Where the algebraic skeleton ends and the Hamiltonian begins — and which diagram
calculi already do the work.*
{: .fs-5 .fw-300 }

---

## Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## The dividing line

Chemistry splits cleanly into two halves, and confusing them is the commonest
error in applying mathematics to it.

**The skeleton is combinatorial.** Which states exist, how they are labelled, what
can couple to what, which transitions are forbidden — all of this is fixed by
symmetry and combinatorics before any energy is computed. It is exact, it is
cheap, and it is often the same in every molecule of a given shape.

**The flesh needs a Hamiltonian.** Which of the allowed states is lowest, how big
the gaps are, how fast a reaction goes — none of this follows from symmetry. It
requires solving the Schrödinger equation with real integrals over real
distances.

| Question | Settled by | Needs a Hamiltonian? |
|---|---|---|
| Which orbitals exist for a given *n*? | SO(4) → SO(3) branching | no |
| Which terms arise from a d³ configuration? | Young tableaux, character tables | no |
| Which transitions are allowed? | selection rules, triangle conditions | no |
| How many CSFs in an active space? | Weyl–Paldus dimension formula | no |
| Which point group does a molecule have? | its geometry | no |
| Which orbitals belong in the active space? | **judgement** — see below | partly |
| **Which term is the ground state?** | Hund's rules, then computation | **yes** |
| **What is the bond length?** | energy minimisation | **yes** |
| **What is the barrier height?** | transition-state calculation | **yes** |
| **Is this molecule multireference?** | occupation numbers, not symmetry | **yes** |

The skeleton is why a chemist can tell you the term symbols of an ion in
seconds and cannot tell you its excitation energy without a computer.

### Where the line actually bites

Take FeMoco, the iron–molybdenum cofactor of nitrogenase. Five things make it
hard, and only one is a symmetry problem:

| Difficulty | Symmetry problem? |
|---|---|
| Coupling 7 Fe spins to a total S = 3/2 | **yes** — this is angular-momentum recoupling |
| Active space of ~54 electrons in ~54 orbitals | no — combinatorial size, not structure |
| Dynamic correlation through the sulfur bridges | no — needs real integrals |
| Which Fe is 2+ and which 3+ in each E-state | partly — broken-symmetry DFT is the tool |
| Where N₂ binds; the E₄ Janus intermediate | no — structural and experimental |

One in five. That ratio is worth remembering before proposing that a new
diagrammatic method will crack a catalysis problem.

---

## The diagram calculi, and who already uses them

Mathematics has built a dozen graphical calculi. Chemistry uses several of them,
often under different names, and the ones it does not use are mostly the ones
that answer questions chemistry does not ask.

| Calculus | What it draws | Used in chemistry? |
|---|---|---|
| **Goldstone / Hugenholtz diagrams** | many-body perturbation terms; antisymmetrised vertices handle exchange in one diagram | **yes** — the standard language of MBPT and coupled cluster since the 1950s |
| **Brandow diagrams** | folded diagrams for effective Hamiltonians | **yes** — open-shell and quasi-degenerate PT |
| **Wick contraction diagrams** | operator contraction bookkeeping | **yes** — every CC derivation |
| **GUGA (Graphical Unitary Group Approach)** | the Gel'fand–Tsetlin lattice as a walk on a graph | **yes** — in production MCSCF codes since the 1970s |
| **Yutsis / JLV diagrams** | 3n*j* recoupling of angular momenta | **yes** — molecular magnetism; MAGPACK computes polynuclear cluster spectra with 6*j* and 9*j* symbols |
| **Young tableaux** | irrep labels, branching rules, CSF counts | **yes** — spin eigenfunctions, term symbols |
| **Character tables** | point-group irreps and selection rules | **yes** — undergraduate spectroscopy onward |
| **Tensor-network diagrams** | MPS and PEPS contraction | **yes** — DMRG |
| **Weight and root diagrams** | Lie algebra structure | rarely — implicit in SO(4,2) treatments of the periodic table |
| **Birdtracks** (Cvitanović, Penrose) | Casimirs, irrep dimensions, invariant tensors | **no** — computes things chemists get from tables |
| **Crystal bases** (Kashiwara) | representation theory as coloured graphs at *q* → 0 | **no** — but GUGA is the same poset walked differently |
| **ZX / ZW / ZH** | qubit and fermionic processes | **not yet** — ZW has a fermionic variant with a completeness theorem |
| **Dynkin diagrams** | the classification of simple Lie algebras | **not applicable** — classifies algebras, not states |

### The pattern worth naming

Three times while auditing this corpus, a claim of the form *"chemists do not
have this tool"* turned out to be false:

- **Recoupling.** Yutsis diagrams draw the 6*j*/9*j* algebra that molecular
  magnetism has used since at least 2001.
- **Crystal bases.** GUGA is the graph-walk formulation of the same poset, in
  production codes since the 1970s.
- **Diagrammatics for exchange.** Antisymmetrised Goldstone diagrams have done
  precisely this job since the 1950s.

**The fields whose tools appear absent from chemistry have usually been imported
decades ago under a different name.** Anyone proposing a new diagrammatic method
should search for its chemical alias first.

---

## What is genuinely open

Not the existence of a calculus — the *completeness* of one.

Categorical quantum mechanics has completeness theorems: ZX-calculus is complete
in the sense that every true equation between the processes it describes is
derivable from its rewrite rules. That is what makes it a calculus rather than a
notation, and the theorem came years after the rules.

Goldstone diagrams have no such theorem. Diagram equivalence in MBPT is handled
by symmetry factors and topological equivalence — conventions, not a stated rule
set. Whether the calculus is complete, and whether it is a fragment of the
fermionic ZW-calculus (whose W generator encodes antisymmetry natively), appear
to be open questions.

Two cautions, both real:

- **The linked-cluster theorem already does much of what a completeness result
  would do.** It states exactly which diagrams contribute to a size-extensive
  energy. A categorical theorem here risks restating a 1950s result.
- **Goldstone diagrams are perturbative.** They assume a single dominant
  configuration, which fails precisely in the strongly correlated regime —
  stretched bonds, transition-metal clusters — that makes chemistry hard. A
  completeness theorem would be a result about the well-behaved case.

---

## And what is not open

**The non-perturbative problem is solved, several times over.** Coupled cluster's
exponential ansatz e^T resums infinite classes of diagrams in closed form and has
been the workhorse since the 1960s; DMRG, Green's-function methods and quantum
Monte Carlo are further mature answers. What remains hard is *strong*
correlation, where DMRG is currently the best available tool.

**There is no amplituhedron shortcut.** The amplituhedron is not a general
technique for summing diagrams; it is a statement about planar N = 4
super-Yang–Mills, whose dual conformal and Yangian symmetries are large enough
to fix the answer geometrically. Chemistry has no conformal symmetry (Coulomb
plus fixed nuclei break it), no supersymmetry, no planarity, massive
non-relativistic electrons, and computes an energy rather than an S-matrix
element.

**Two-electron integral sparsity is ordinary angular momentum.** Structural zeros
come from SO(3) triangle conditions and parity, which every code already
exploits. Tested directly: SO(4) accounts for about 0.2% of the structural zeros,
and the zero *pattern* is a property of the basis rather than of the element —
hydrogen and helium in the same basis have identical patterns.

---

## Further reading

- Shavitt & Bartlett, *Many-Body Methods in Chemistry and Physics* (CUP, 2009) —
  the standard reference for Goldstone and Brandow diagrams.
- Paldus, *J. Chem. Phys.* **61**, 5321 (1974) — the unitary group approach.
- Coecke & Kissinger, *Picturing Quantum Processes* (CUP, 2017) — ZX-calculus.
- Cvitanović, *Group Theory: Birdtracks, Lie's, and Exceptional Groups* — the
  birdtrack programme.
- Borrás-Almenar, Clemente-Juan, Coronado & Tsukerblat, *J. Comput. Chem.* **22**,
  985 (2001) — MAGPACK, recoupling for polynuclear clusters.
