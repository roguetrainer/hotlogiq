---
layout: default
title: "Disagreement (JSD)"
parent: Theory
nav_exclude: true
description: "The Jensen-Shannon divergence as a measure of information lost when sources are combined."
---

# Disagreement: the Jensen–Shannon divergence

**Status**: foundational tool, but narrower than the MGE. Added 2026-08-01.

The [Maslov–Gibbs Einsum](maslov-dequantization.md) says how to *combine* things
at a temperature. This page is about a different question: when several sources
are combined, **how much information is lost in the combining**?

---

## The quantity

For a set of distributions $p_1,\dots,p_k$ with weights $w_i$:

$$\mathrm{JSD} \;=\; H\!\left(\textstyle\sum_i w_i p_i\right) \;-\; \sum_i w_i\,H(p_i)$$

the entropy of the mean, minus the mean of the entropies. It is non-negative by
Jensen's inequality (entropy is concave), which is where the name comes from —
Jensen and Shannon.

Equivalently, it is the **mutual information between "which source" and "which
outcome"**. That is the precise sense in which it is second-order: it does not
measure the answer, it measures whether *who you asked* changes the answer.

## The decomposition

$$\underbrace{H(\bar p)}_{\text{total uncertainty}} \;=\; \underbrace{\overline{H(p_i)}}_{\text{nobody knows}} \;+\; \underbrace{\mathrm{JSD}}_{\text{they disagree}}$$

This is exact — verified to $0$ at machine precision over 2000 random ensembles
in `x628a`. Total uncertainty splits cleanly into shared ignorance plus
disagreement.

## Why it matters: the case first-order pooling cannot see

| case | sources | pooled belief | JSD |
|---|---|---|---|
| **A** confident, disagreeing | $(0.9, 0.1)$ and $(0.1, 0.9)$ | $(0.5, 0.5)$ | **0.368** |
| **B** both unsure | $(0.5, 0.5)$ and $(0.5, 0.5)$ | $(0.5, 0.5)$ | 0.000 |
| **C** confident, agreeing | $(0.9, 0.1)$ and $(0.9, 0.1)$ | $(0.9, 0.1)$ | 0.000 |

A and B have **identical pooled beliefs** and demand **opposite actions** — A
should be escalated as contested, B needs more evidence. Any aggregator that
returns only a pooled distribution collapses them.

**This is not fixed by choosing a better pooling rule.** Linear pooling (the
m-geodesic midpoint) and logarithmic pooling (the e-geodesic midpoint) both give
$(0.5,0.5)$, and so does an MGE contraction at every $\beta$. The reason is a
symmetry argument, not a tuning failure: A and B are symmetric under exchange of
the two outcomes, so *any* map from the ensemble to a single distribution must
return the symmetric answer.

**The conclusion is structural**: an aggregator must report a **pair** —
(pooled belief, disagreement) — and the second component is not recoverable from
the first.

## Where it applies, and where it does not

The test is whether a construction has **multiple sources whose disagreement
carries information**. With one stream, JSD is identically zero.

| use | JSD | why |
|---|---|---|
| agent consensus | **essential** | the A/B distinction is the whole point |
| distributed training | **essential** | stale gradients from different workers are an ensemble; JSD asks whether they disagree or are merely noisy |
| peer review | **essential** | referees *are* an ensemble; "reviewers disagree" and "reviewers are all unsure" are currently collapsed into one score |
| hot memory | partial | a single stored fact has no ensemble — unless multiple readings are retained |
| MGE routing | partial | routing selects one branch; JSD says whether the choice was contested |
| hot/cold composition | **not applicable** | a single stream crossing a boundary is not an ensemble |
| SAT thawing | different use | the ensemble is over *solutions*, not sources; JSD would measure solution-space fragmentation |

So the JSD is foundational for three of these and decorative in others. It
should not be presented as universal.

## Generalisations: what is standard, and what is open

**Standard, and not ours.** Replacing Shannon entropy with Rényi entropy of
order $\alpha$ gives the $\alpha$-JSD, a well-studied one-parameter family:

| $\alpha$ | JSD(A) | JSD(B) |
|---|---|---|
| 0.5 | 0.223 | 0 |
| 1.0 (Shannon) | 0.368 | 0 |
| 2.0 | 0.495 | 0 |
| 5.0 | 0.562 | 0 |

**Open, and possibly ours.** Note that Rényi's $\alpha$ and the MGE's $\beta$
deform *different objects*:

- $\alpha$ deforms the **entropy functional**;
- $\beta$ deforms the **semiring addition** (log-sum-exp → min).

Both approach a tropical limit, but on different structures. That raises a
question with no standard answer: **is there a disagreement measure defined over
the MGE semiring itself** — combining expert energies with $\oplus_\beta$ rather
than with an ordinary sum? A first numerical probe shows the resulting quantity
does separate the A/B cases at large $\beta$ and collapses at $\beta = 1$, which
is suggestive but not yet a definition.

That is the one genuinely open generalisation here, and it should be treated as
a research question rather than a result.

## A caution before building on this

The decomposition into "data uncertainty" ($\overline{H}$) and "knowledge
uncertainty" (JSD) is **standard in Bayesian deep learning** — see Depeweg et
al. and Malinin & Gales on ensemble uncertainty decomposition. Anything written
here should engage that literature rather than rediscover it. The corpus's
cannot represent second-order beliefs), not the statistic.

## References

  construction that can represent what $H^1$ cannot.
- `experiments/x628_second_order_beliefs/x628a_disagreement_decomposition.py` —
  4/4 PASS; establishes the negative (no pooling rule separates A from B) and
  the exact decomposition.
- [Maslov dequantization](maslov-dequantization.md) — the companion tool, for
  combination rather than disagreement.

---

## Arity: the JSD is an H¹ quantity, not an H² one

A natural next step is to assume the JSD carries the H¹/H² distinction —
two-party disagreement at H¹, irreducible three-party disagreement at H². It
does not, and the correction matters because the intuition is right about
*something else*.

**Tested** (`x628d`, 4/4): can two three-party ensembles have identical pairwise
JSD signatures but different triple JSD? Over 400,000 random ensembles, **no
counterexample was found**. The evidence is that for three outcomes the JSD is
**pairwise-determined** — it is an H¹ quantity throughout, however many parties
are involved.

**What does carry irreducible three-way structure** is **co-information**,

$$I(X;Y;Z) = I(X;Y) - I(X;Y \mid Z)$$

which splits three-party structure by *sign*:

| sign | name | meaning |
|---|---|---|
| positive | **redundancy** | the parties repeat each other |
| negative | **synergy** | the triple says what no pair can |

**XOR is the proof.** With $Z = X \oplus Y$ and $X, Y$ independent, every
pairwise mutual information is exactly zero while the triple is perfectly
determined: $I(X;Y) = 0$, $I(X;Y;Z) = -1$ bit. No pairwise measurement can see
it. That is the genuine H¹ → H² step.

So the ladder is:

| tier | quantity | what it detects |
|---|---|---|
| H⁰ | H(mean) | total uncertainty |
| H¹ | **JSD** | disagreement — *however many parties* |
| H² | **co-information** | synergy and redundancy: structure no pair reveals |

Co-information, synergy and redundancy are standard (McGill 1954; Bell 2003;
Williams & Beer 2010 for the partial information decomposition that refines
them). What is recorded here is only the correction: **do not identify the JSD
with the H² tier.**

