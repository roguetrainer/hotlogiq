---
layout: default
title: "Chemistry"
parent: Applications
nav_order: 1
description: "Where the framework touches chemistry: active-space selection, the correlation angle, and the winding-shell rule — with what each one does and does not claim."
tags: [chemistry, casscf, active-space, correlation, dft, quantum-computing]
---

# Chemistry
{: .no_toc }

*The expensive part of simulating a molecule is deciding which electrons matter.
That decision is currently made by expert judgement. This is the part of the
framework that addresses it.*
{: .fs-5 .fw-300 }

---

## Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## The bottleneck

Cheap simulation — [density functional theory](../reference/glossary.md#dft-density-functional-theory),
DFT — assumes electrons behave roughly independently. That assumption holds for most of chemistry and fails precisely
where the interesting things happen: bond breaking, transition-metal centres,
spin-state crossings, the moment a catalyst does its work.

The accurate methods handle those cases, at exponential cost in the number of
orbitals treated exactly. So somebody has to choose the [**active space**](../reference/glossary.md#active-space) —
which handful of orbitals gets the expensive treatment. Choose too few and the answer
is qualitatively wrong; too many and it never finishes.

That choice is made by intuition. It takes years to learn, and the people who do
it well are few. Automating it is the practical problem this work is aimed at.

---

## What the framework offers

### A correlation angle

θ_G is the Grassmannian angle between a correlated wavefunction and its
mean-field reference — the geodesic distance from Hartree–Fock. It is computable
from cheap second-order Møller–Plesset (MP2) occupation numbers, and it moves sharply where strong correlation
sets in: crossing threshold at 1.50 Å for H₂ and H₂O bond stretching, and at
U/t ≈ 2 for the Hubbard model, in real pyscf calculations.

**What it does**: flags where a single-reference method is about to fail.
**What it does not do**: it is a monotone function of the occupation numbers, so
it selects the same orbitals as plain occupation-number thresholding. It is a
reformulation of a standard criterion, not a better one.

### A parameter-free active-space rule

Every automated active-space method — AVAS, AutoCAS, AEGISS — rests on a
human-chosen threshold: an occupation-number cutoff, an entropy threshold, a
projection tolerance. The winding-shell rule takes a different route: it selects
shells by quantum number alone, with no fitted parameter, using
*w*(n, ℓ) = n + ℓ + 1 and the window {w₀−1, w₀, w₀+1}.

**What it does**: for single-metal complexes and open-shell organics, the space
conventional practice selects is contained in the rule's window, across 20
catalogued systems. A guaranteed-complete active space, chosen without an expert.

**What it does not do**: three things, each worth stating plainly.

- It gives a *larger* space than the expert's, not a smaller one. The expert
  choice is a **subset**. On a quantum computer, where qubits scale with
  orbitals, that costs rather than saves.
- It is **single-metal only**. Applied blind to FeMoco, it excludes the Mo 4d
  orbitals entirely — *w*(4d) = 7 falls outside the window centred on the
  iron-dominated *w*₀ = 5. Taking a union of per-metal windows restores them and
  then spans 82–99% of all valence orbitals, which is not a selection rule.
- The "20 out of 20" figure describes a subshell **containment check**, not a
  computational benchmark. No [CASSCF](../reference/glossary.md#casscf-complete-active-space-self-consistent-field) is run in it.

---

## What this does not solve

Worth being explicit, because the field's own account of its bottleneck differs
from ours.

Practitioners working on quantum chemistry for quantum computers name two
limiting factors, and active-space selection is neither: **non-Clifford gate
count** (a 10¹⁰-Toffoli algorithm is days of runtime for a single energy point)
and **the overlap problem** (phase estimation only works if the classically
prepared starting state overlaps the true ground state, and that overlap decays
exponentially for exactly the strongly correlated systems a quantum computer is
supposed to help with).

A contribution to active-space selection is a reduction in **problem size**. It
is not an attack on the stated bottleneck, and should not be presented as one.

There is a connection worth investigating: a poor active space aggravates the
overlap problem by construction, since a reference missing the right orbitals has
poor overlap by definition. That link is quantifiable and, as far as we know,
untested.

---

## Where the interesting targets are

Three catalysts motivate this work, and the honest position on each differs.

**Nitrogenase (FeMoco)** is the field's flagship benchmark, and heavily
occupied — Reiher *et al.* (2017), Lee *et al.* (2021) at 5.3 × 10⁹ Toffoli
gates, and Li *et al.* (2025) at about 3.4 × 10⁸ on ~1137 logical qubits.
Estimates are not comparable across different active spaces, which is itself an
argument for taking the selection problem seriously.

**RuBisCO** has never been costed. There is no published resource estimate,
qubit count or algorithm design targeting its oxygenase transition state. The
methodology to produce one is public; the missing step is a defensible active
space, which requires the [DMRG](../reference/glossary.md#dmrg-density-matrix-renormalisation-group)
entanglement analysis nobody has pointed at this target.

**Battery cathodes** are partly covered — Toffoli counts exist for Li-excess
cathodes and for Li₂FeSiO₄ — but an algorithm tailored to the Mn³⁺ Jahn–Teller
distortion, which is the actual degradation mechanism, is sparse.

---

## Further reading

- [Diagrammatic Chemistry](../theory/diagrammatic-chemistry.md) — which parts of
  chemistry are combinatorial, and which need a Hamiltonian.
- [Correlation on the Grassmannian](grassmannian-universality.md) — θ_G and the
  geometry of correlated wavefunctions.
- Reiher, Wiebe, Svore, Wecker & Troyer, *PNAS* **114**, 7555 (2017) — the FeMoco
  resource estimate that defined the benchmark.
