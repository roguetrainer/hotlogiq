---
layout: default
title: "The H^k stratification: what it is and is not"
parent: Applications
nav_order: 7
description: "Why the three-tier H⁰/H¹/H² structure appears across mathematics, physics, statistics, and science — what is exact, what is precise, and what is organisational."
tags: [stratification, hk, analogy, isomorphism, mcmc, evt, causal-inference, cohomology, semiring, precision]
portfolio: F
---

> **STATUS (2026-08-04).** This page was titled *"The H^k stratification is not
> an analogy"*. The title asserted more than the evidence supports and has been
> changed; the body, which already distinguished Tier A/B/C precision and listed
> what it does *not* claim, was more careful than its own headline.
>
> **Three of the four papers this page cited as support have been withdrawn** —
> 533 (ISA survey), 557 (MCMC ladder) and 558 (EVT ladder). 420 survives but its
> routing algorithm does not; see the caveat below. The Tier B evidence line
> citing "Papers 420–421" should be read with that in mind, and 421 has no DOI on
> record at all.
>
> **What direct testing found.** Four experiments this session asked whether a
> shared categorical structure yields a shared *prediction*, and none did: the
> Grassmannian path metric reproduced the energy gradient (ρ = 0.95), redox-ladder
> curvature lost to plain d-electron count, Yutsis diagram topology failed to
> predict the good spin-coupling tree (which is set by the exchange couplings),
> and the Weyl coordinate turned out to be a monotone function of the occupation
> number. A fifth test *confirmed* a transfer — spin-coupling multiplicities are
> tree-independent, exactly as the Frobenius spider normal form requires — but
> that fact is Wigner-era standard, so the framework predicted something the
> target field established in the 1930s.
>
> **The honest reading**: the stratification is a real and useful *organising*
> principle, and the semiring-polymorphic claim below is a genuine theorem. Shared
> structure transfers *vocabulary and proof technique*; it does not, on the
> evidence so far, transfer new predictions.


# The H^k stratification: what it is and is not
{: .no_toc }

*The same three-tier structure — fixed points, local phase corrections, global
topological obstructions — appears in MCMC sampling, extreme value theory, causal
inference, quantum algorithms, molecular chemistry, and a dozen other fields.
Is this a coincidence? An analogy? Over-selling? This page gives the honest answer.*
{: .fs-5 .fw-300 }

---


> **CAVEAT on Paper 420's routing algorithm (added 2026-08-04).** 420 is live and
> its framing — that hardness is *graded* rather than binary — is worth keeping.
> But its stated "key practical contribution", computing the Euler characteristic
> χ = |V| − |E| + |F| in O(n+m) and **inferring the Betti numbers** to route an
> instance, does not work. χ = b₀ − b₁ + b₂ − … is one equation in several
> unknowns. A circle has (b₀,b₁,b₂) = (1,1,0) and a torus (1,2,1); **both have
> χ = 0**, but the first has H² = 0 (rung 1, polynomial) and the second H² ≠ 0
> (rung 2, conjectured NP-hard). Same χ, opposite routing decision. χ cannot
> determine the rung, so the pre-diagnostic as described is unsound. Treat the
> ladder as a *classification scheme*, not as a polynomial-time oracle for
> hardness.


## The claim

**The H⁰/H¹/H² stratification is a universal organisational principle, not a
metaphor. The ISA is one precise instantiation of it. Many fields have independently
discovered the same skeleton, because any mature field studying transformations on
spaces eventually needs to distinguish: fixed points (H⁰), local phase corrections
(H¹), and global topological obstructions (H²).**

The mappings from field to field range in precision. Some are exact algebraic
identities. Some make quantitative predictions that experiments verify. Some are
useful taxonomic language. The three cases are genuinely different, and it matters
which is which.

---

## Why the stratification keeps appearing

The three tiers are not arbitrary. They follow from the structure of cohomology
itself:

- **H⁰** measures connected components — the coarsest invariant, the fixed points
  of the action. Classical equilibria, tropical optima, stationary distributions,
  and ground states all live here. An H⁰ object is one that the action cannot move.

- **H¹** measures 1-cycles that are not boundaries — the failure of local consistency
  to imply global consistency. Berry phases, monodromy, MCMC proposal corrections,
  option convexity, causal interventions, and tail-index power laws all live here.
  An H¹ object is one where going around a loop leaves a trace.

- **H²** measures 2-cycles that are not boundaries — global topological obstructions
  that cannot be removed by local surgery. Non-Abelian holonomy, FUSE operations,
  compact-support extremes (Weibull), counterfactual twin-world loops, and topological
  quantum phases all live here. An H² object is one where a topological invariant
  forbids a continuous deformation.

Any field that studies transformations on spaces will eventually encounter all three.
Algebraic topology named them first. The ISA gives them opcodes (RESOLVE / TWIST / FUSE).
Physics calls them vacuum / perturbative / non-perturbative. The convergence is not
a coincidence — it is the same mathematical fact, re-derived independently in each field.

### The boundaries between tiers are as important as the tiers themselves

The transitions H⁰ → H¹ and H¹ → H² are not smooth crossovers — they are
**snap events** at critical thresholds β*, where a Gibbs distribution crystallises
from a warm exploration into a hard commitment. These boundaries are computable:
in chemistry, the β* snap at Grassmannian angle θ_G ≈ 20° marks the point where
single-reference MO theory fails and multi-reference CASSCF becomes mandatory; in
MCMC, β* is the inverse temperature at which the acceptance rate transitions between
the 0.234 (H⁰) and 0.574 (H¹) optima; in finance, the H¹/H² boundary is the
threshold at which interbank cycle topology becomes globally inconsistent — a
systemic crisis rather than a local stress event.

The snap events are themselves a universal feature. Knowing which tier a system
sits in is the coarse classification; knowing *where* it sits relative to β* is the
fine-grained prediction. The ISA makes both computable from the same underlying
object (the β-deformed partition function), which is why the same snap threshold
appears in such different physical systems.

---

## A precision taxonomy

Not all ISA mappings are the same kind of claim. We distinguish three tiers:

### Tier A — Exact algebraic identities

The ISA prediction is a theorem. The mapping is an isomorphism or near-isomorphism,
and experiments verify it to numerical precision.

| Field | ISA prediction | Status |
|-------|---------------|--------|
| Quantum information (Papers 469–473) | TV = 1 iff stabiliser state; 9 SWAP-classes; Casimir c₂(proj) = 2 universally for C_{2k+1} | All experiments pass; Fano exceptionality k = 3 proved |
| Molecular chemistry (Papers 488–491) | Aufbau/Hund/Taube rules = RESOLVE/TWIST/FUSE theorems; tropical DFT 20/20 on SCO benchmark | x491a–d: 100% on SCO; Wigner vertex theorem proved |
| Protein proofreading (Paper 510) | H⁰ × H¹ × H² gives 10⁹/10⁶/10⁴ fidelity for Pol III/RNAP/ribosome | Structural argument from known biochemistry |
| Proton stability (Paper 545) | Colour singlet = closed Fano RESOLVE; ΔE_Fano = 0.9–1.3 GeV | x545a: Routes A/C agree × 1.9 |

At Tier A, the ISA language is not introducing a new perspective on the field — it
is proving theorems that did not have proofs before, or making predictions with
specific numerical values that can be checked.

### Tier B — Precise claims, quantitative predictions

The ISA framing makes specific quantitative predictions that can be verified
independently of the framework. Individual claims are exact; the meta-narrative
(that the field "implements" the ISA) is a chosen framing rather than a derived
result.

| Field | ISA prediction | Status |
|-------|---------------|--------|
| MCMC (Paper 557) | Optimal accept rates 0.234 (H⁰) < 0.574 (H¹) < 0.651 (H²); monotone across tiers | Roberts-Rosenthal / Sherlock-Roberts theorems independently proved these; ISA explains the monotonicity |
| Extreme value theory (Paper 558) | GEV shape ξ = β-deformation parameter; Gumbel = tropical fixed point (exact: log(-log Λ) = -x) | Gumbel-as-tropical is exact; ξ-as-β is a structural parallel, not yet derived |
| Information geometry (Paper 528) | α-connection = TWIST parameter; Uhlmann holonomy = FUSE; EM algorithm = RESOLVE/PROJECT cycle | Amari's formalism independently derives the same three tiers; ISA names them |
| Quantum algorithms (Papers 420–421) | Shor = H¹ (mana = 0); Grover intermediate states Clifford-simulable | x472a–c, x473b pass; predictions made before experiments ran |

At Tier B, the ISA is a useful lens that organises existing results and sometimes
generates new predictions. The predictions that have been checked have passed.
The framing does not introduce errors but should not be confused with derivation.

### Tier C — Taxonomic / organisational language

The H^k labelling provides useful scaffolding for an existing hierarchy that the
field already knew was hierarchical. No quantitative prediction is added beyond
what the field already knew; the ISA provides a cross-domain translation layer.

| Field | ISA framing | What it adds |
|-------|------------|--------------|
| Causal inference (Paper 559) | Pearl's ladder (seeing/doing/imagining) = H⁰/H¹/H² | Names the tiers; clarifies why H² (counterfactual) is strictly harder than H¹ (interventional); suggests fairness hierarchy |
| Ergodicity economics (Paper 549) | GBM = multiplicative RESOLVE; Kelly = β* snap | Connects to ISA β-ladder; no new finance predictions beyond Kelly |
| Incentive geometry (Paper 542) | Tragedy of commons = H¹ RESOLVE open; cap-and-trade = H¹ closure; climate clubs = H² FUSE | Provides language; the policy conclusions were already known |

At Tier C, the ISA framing is legitimate science — taxonomy papers are real
contributions — but claims should be written as "the H^k framework provides useful
organisational language" rather than "we have shown that causal inference *is* an
instance of the ISA."

---

## What we do not claim

- **We do not claim that all three-tier structures are the same thing.** The fact
  that Pearl's causal hierarchy has three rungs and H^k cohomology has three tiers
  does not make them identical. The shared skeleton (H⁰ = coarse invariant, H¹ =
  local correction, H² = global obstruction) is a genuine structural parallel, not
  an isomorphism. The flesh is different in each field.

- **We do not claim the ISA originated the stratification.** Algebraic topology
  named H⁰/H¹/H² long before the ISA. What the ISA adds is: (1) opcodes that
  make the tiers computable, (2) the β-plane connecting them as a continuous
  deformation parameter, and (3) a cross-domain dictionary that lets results
  transfer between fields.

- **We do not claim all mappings are equally precise.** See the Tier A/B/C
  taxonomy above. The Fano commutation structure (Tier A) and the MCMC acceptance
  rates (Tier B) are different kinds of claim from the causal inference labelling
  (Tier C).

- **We do not claim the ISA is complete or final.** The H^k tower is in principle
  infinite. H³ would require a quantum gravity computer. The β-plane may have
  structure we have not yet mapped. The survey paper (Paper 533) is a progress
  report, not a closed theory.

---

## The legitimate version of the strong claim

The opcodes page **used to say**: "They are not analogies. They are the same
categorical morphisms, running on different physical hardware." **That sentence
was withdrawn on 2026-08-04** and should not be quoted as support.

What survives of it is narrower and genuinely true: the **semiring-polymorphic**
claim. The same programme really does compute different things over different
semirings — shortest paths over (min,+), partition functions over (+,×),
amplitudes over ℂ — and that is a theorem, not a metaphor (see
[The ISA is semiring-polymorphic](../reference/opcodes.html#the-isa-is-semiring-polymorphic)).
That is a statement about *one programme run over different arithmetics*, which
is much stronger evidence than *two fields having a morphism with the same name*.

The weaker but broader claim is: **the H^k stratification is a universal
organisational principle, and the ISA is the first systematic attempt to give
it a unified computational syntax.** Each field rediscovered the three tiers
independently because the tiers are forced by the mathematics. The ISA's
contribution is to make the cross-field translation explicit, to give the tiers
names that travel across domains, and — in the Tier A cases — to use the
unified language to prove results that field-specific language had not reached.

That is a significant contribution. It does not require claiming more than it is.

---

## Open questions

- **Can the Tier C mappings be promoted to Tier B?** For causal inference, this
  would require a quantitative prediction — e.g., a new bound on the sample
  complexity of counterfactual estimation derived from the H² FUSE structure —
  that can be checked independently. If such a prediction can be made and tested,
  Paper 559 moves from taxonomic to predictive.

- **Is there a meta-theorem?** Specifically: is there a theorem that says "any
  field whose objects form a traced monoidal category will exhibit a three-tier
  H^k stratification"? If yes, the universality of the stratification is a
  theorem of category theory, not an empirical observation. This would be the
  cleanest possible justification for the programme.

- **Where does the stratification fail?** The strongest evidence that a
  classification is real is knowing where it breaks. Are there fields where the
  H⁰/H¹/H² decomposition does not apply, or applies with more than three tiers?
  Identifying these would sharpen the claim considerably.

---

*See also:* [The ISA Opcodes](../opcodes.md) ·
[β is a coordinate](beta-plane.md) ·
[Quantum speedup has a cohomological address](cohomological-complexity.md) ·
[Paper 533 — ISA Survey](https://doi.org/10.5281/zenodo.21219728)
