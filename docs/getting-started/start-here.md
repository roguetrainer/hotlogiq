---
layout: default
title: Start Here
nav_order: 1
description: "What HotLogiQ is, why it matters, and the shortest path to the core ideas — by reader type."
---

# Start Here
{: .no_toc }

*Every interaction — quantum, chemical, biological, economic — is running the same five-opcode programme on different physical hardware.*
{: .fs-5 .fw-300 }

---

## The one-paragraph version

Experts in quantum computing, spectroscopy, financial risk, and molecular biology have independently discovered the same three-tier structure — fixed points, local phase corrections, global topological obstructions — and given it different names in each field. **HotLogiQ** makes the common pattern explicit, computable, and transferable. The five opcodes (RESOLVE 🔬 / PROJECT 🎯 / TWIST 🌀 / FUSE 💎 / FLIP ↩️) are more than analogies: they name the same categorical morphisms in each domain. What that transfers is structure and proof technique — *not* predictions, which direct tests have confirmed do not carry across. The temperature parameter β is the single dial that interpolates between classical (β→∞), statistical (0<β<∞), and quantum (β=it/ℏ) regimes.

The [Pillars](../guides/pillars) page gives the five load-bearing ideas. The [Origami ISA manifesto](https://doi.org/10.5281/zenodo.21428853) (Paper 631) gives the full technical case.

---

## Read these first

Five pages that together cover the core of the framework — in reading order:

1. **[β: The Universal Temperature](/docs/theory/maslov-dequantization)** — the single idea the whole framework rests on: β interpolates classical, statistical, and quantum regimes. Every hard threshold is β→∞ in disguise.
2. **[The β-plane](/docs/theory/forge-meld)** — the full complex-β map: where Forge, Meld, Raven, and Origami live, and how PT-symmetric physics fits in.
3. **[Pillars](/docs/guides/pillars)** — the five load-bearing claims, with the key evidence for each.
4. **[Key Math](/docs/reference/key-structures)** — the six mathematical objects the framework is built from (Grassmannian, Fano plane, Hopf fibration, …).
5. **[Applications](/docs/applications/)** — ten concrete results, each spanning a family of papers.

---

## By reader type

### No specialist background

**[In Praise of Soft Thresholds](https://doi.org/10.5281/zenodo.21373469)** (Paper 597) — the most accessible entry point. Five examples (p-value, credit rating, MCMC, quantum chemistry, climate tipping) showing that every hard threshold is the zero-temperature limit of a soft one. No prerequisites.

**[Planck's Constant in Disguise](https://doi.org/10.5281/zenodo.20752384)** (Paper 443) — six famous equations from six fields are all the same equation, controlled by β. The ML engineer's softmax temperature, the physicist's Planck's constant, and the quant's volatility are the same object.

---

### Quantum computing

1. **[Origami: An Open ISA for Quantum-Classical Systems](https://doi.org/10.5281/zenodo.21428853)** (Paper 631) — the manifesto. Why gate-and-circuit abstraction obscures where quantum advantage actually lives; Shor's algorithm as a case study.
2. **[The H^k Complexity Ladder](https://doi.org/10.5281/zenodo.20773526)** (Paper 420) — H⁰ = classical, H¹ = stabiliser/Clifford, H² = universal QC. A graded alternative to the P=NP question. *(the χ-based routing algorithm in 420 is unsound — χ cannot determine the Betti numbers; see [cohomological complexity](/docs/applications/cohomological-complexity.html))*
3. **[The Meld ISA](https://doi.org/10.5281/zenodo.20773563)** (Paper 454) — quantum branch of the framework. QFT as a TWIST 🌀 cascade; FUSE 💎 as the non-Abelian obstruction; why LWE is quantum-resistant.
4. **[Eight Derivations of a Universal Instruction Set](https://doi.org/10.5281/zenodo.20774076)** (Paper 455) — eight independent routes arriving at the same five opcodes. *(The title's "universal" is aspirational: no minimality or completeness proof exists — see [why five opcodes?](/docs/reference/opcodes.html#why-five-opcodes). This is convergent motivation, not a theorem, and it is not comparable to Solovay-Kitaev, which is a specific approximation result with an explicit error bound.)*
8. **[The Cookie-Cutter Lifting Programme: Shor as a Clifford Circuit](https://doi.org/10.5281/zenodo.21219704)** (Paper 472) — Shor's algorithm re-derived as a lifted Clifford circuit; a concrete, checkable flagship result.

---

### PT-symmetry and non-Hermitian physics

1. **[The Non-Hermitian ISA](https://doi.org/10.5281/zenodo.21480491)** (Paper 460) — PT symmetry, exceptional points, and the 38-fold way inside the Origami ISA; the thread's entry point.
2. **[PiTch: A Topological Invariant for PT-Symmetric Systems](https://doi.org/10.5281/zenodo.21509971)** (Paper 678) — a discrete topological invariant distinguishing PT-broken from PT-unbroken phases.
3. **[PT Symmetry and the Amplituhedron](https://doi.org/10.5281/zenodo.21518106)** (Paper 680) — the positive Grassmannian identified as the PT-unbroken phase; connects non-Hermitian physics to scattering-amplitude geometry.

---

### Chemistry and physics

3. **[Weyl–DFT Accelerator](https://doi.org/10.5281/zenodo.21373469)** (Paper 596) — Weyl c₂ as a DFT failure detector (r=0.990); MGE soft router replaces hard CASSCF threshold.
5. **[The Frontier Winding Gap](https://doi.org/10.5281/zenodo.21612627)** (Paper 710) — chemical reactivity traced to a single topological invariant, the frontier winding gap ΔwF.
6. **[Conical Intersections as Hitchin Branch Points](https://doi.org/10.5281/zenodo.21558771)** (Paper 697) — Jahn–Teller and related conical intersections identified with branch points of a Hitchin spectral curve.
7. **[Cobalamin and the Three-Oxidation-State Metal](https://doi.org/10.5281/zenodo.21613228)** (Paper 713) — vitamin B12's radical/nucleophilic switching explained via winding-shell analysis; a concrete biological test case.
8. **[Shell Genus as the 2-Skeleton of the Orbital Simplex](https://doi.org/10.5281/zenodo.21630155)** (Paper 719) — torus knots, 6j symbols, and tetrahedral numbers unified in atomic shell structure.

---

### Biology

3. **[The Topological Heat Engine (FMO)](https://doi.org/10.5281/zenodo.20400638)** (Paper 325) — broken-Fano topology is the unique 7-node graph with positive Carnot efficiency; η=0.1825 from crystal structure alone.

---

### Finance and economics

1. **[The Topology of Risk: A Primer](https://doi.org/10.5281/zenodo.20642983)** (Paper 398) — H⁰/H¹/H² from scratch using the 2008 crisis. No prerequisites beyond knowing what a credit exposure is.
2. **[Systemic Risk as H²](https://doi.org/10.5281/zenodo.20642908)** (Paper 397) — the 2008 crisis as a topological event; H¹ cycles become globally inconsistent at the H² snap.
3. **[H^k Pricing](https://doi.org/10.5281/zenodo.21158959)** (Paper 478) — H⁰=spot, H¹=options/yield curves, H²=CDO²/correlation; post-2008 regulation as H¹-complete/H²-incomplete.

---

### Mathematics

1. **[Eight Derivations](https://doi.org/10.5281/zenodo.20774076)** (Paper 455) — eight routes to the same five generators, connecting spectroscopy (Racah 1942), categorical QM (Abramsky-Coecke 2004), and quantum computing (Boykin 1999) in one vocabulary.
2. **[ISA Khovanov Complex](https://doi.org/10.5281/zenodo.21278536)** (Paper 571) — C^k = ⊕ A^{⊗c(v)}, ∂²=0 from the Frobenius axiom, ISA homology recovers Khovanov's categorification of the Jones polynomial.
5. **[Non-Associative Information Geometry](https://doi.org/10.5281/zenodo.20076498)** (Paper 221) — the Fano-Fisher metric decomposition theorem on G₂; extends information geometry to the non-associative setting.

---

[All papers →](../guides/papers.md) · [Zenodo community →](https://zenodo.org/communities/hotlogiq/) · [ISA Family →](/docs/guides/pillars)

