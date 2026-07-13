---
layout: default
title: "ML01 — Transformer Self-Attention"
parent: ISA Zoo
nav_exclude: true
---

# ML01 — Transformer Self-Attention

| Field | Value |
|-------|-------|
| **Domain** | Machine Learning |
| **System** | Scaled dot-product multi-head attention |
| **Group** | U(d_model) acting on token embeddings |
| **H^k tier** | H¹ |
| **ISA** | Forge (β ≈ β*) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · SPLIT · SPLAT · LABEL |
| **Papers** | Paper 598, Paper 205 |

---

## Physical system

The transformer attention mechanism (Vaswani et al. 2017) computes, for each
query token, a weighted sum of value vectors where weights are determined by
query-key similarity. For a single head with queries Q, keys K, values V ∈
ℝ^{n×d_head}:

```
Attention(Q,K,V) = softmax(QKᵀ / √d_head) · V
```

The full multi-head operation:

```
head_i  = Attention(Q W_i^Q,  K W_i^K,  V W_i^V)
MHA(Q,K,V) = Concat(head_1, …, head_h) W^O
```

The **temperature parameter** β = 1/√d_head is the ISA β: it controls the
sharpness of the attention distribution. At the optimal operating point β ≈ β*,
the softmax is neither collapsed (argmax) nor uniform (max entropy) but produces
a non-trivial mixture — the H¹ Forge regime.

The **induction head phase transition** (Olsson et al. 2022): at a specific
training step (not epoch — a sharp transition), certain attention heads snap
from diffuse multi-token attention (H¹) to sharp single-token attending
(induction heads, H⁰). This is a β* snap directly observable in training
dynamics.

---

## Target category

**GrassAttn(h, d, n)** — the product of h Grassmannian points in Gr(d_head,
d_model): the h attention heads each project into a d_head-dimensional subspace
of the d_model-dimensional embedding space. Objects are multi-head attention
configurations; morphisms are weight updates (gradient descent steps). The
optimal attention configuration for a given task is a Schubert variety in the
product Grassmannian — the subspace arrangement that minimises loss.

The token sequence of length n is a point on Gr(n, seq_len) ⊂ ℝ^{n×n}
(the attention matrix); the softmax maps this to a stochastic matrix on the
attention simplex Δ^{n-1}.

## Interpretation functor

F: C → GrassAttn(h, d, n) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Token similarity: QKᵀ_{ij} = ⟨q_i, k_j⟩ — the inner product of query i with key j; an ORBIT on the token manifold; each token moves to its closest neighbour in the query-key metric |
| TWIST  | Softmax Berry phase: the attention weight a_{ij} = exp(s_{ij}/β) / Z_i imparts a TWIST to the attention distribution; non-uniform a_{ij} gives a non-trivial geometric phase when tokens are rearranged (permutation equivariance); H¹ TWIST = the off-diagonal correlations between tokens |
| SPLIT  | Multi-head projection: SPLIT[d_model → h × d_head] via W^Q_i, W^K_i, W^V_i; decomposes the embedding into h parallel subspaces each attending independently |
| SPLAT  | Head aggregation: Concat + W^O merges the h head outputs back into d_model; the inverse of SPLIT; SPLIT+SPLAT = multi-head bottleneck |
| LABEL  | Attention entropy H(a_i) = −Σ_j a_{ij} log a_{ij}: the LABEL eigenvalue at each query position i; low H = sharp attending (β* snap to H⁰); high H = diffuse attending (H²) |

## ISA programme

```
SPLIT:   SPLIT[x -> (Q,K,V) via W^Q,W^K,W^V | project into QKV spaces]
ORBIT:   ORBIT[s_ij = dot(q_i, k_j) / sqrt(d) | token similarity matrix]
LABEL:   LABEL[beta = 1/sqrt(d_head) | inverse temperature of softmax]
ATTN:    TWIST[a_ij = softmax(s_ij) | attention distribution, H1 regime]
SNAP?:   LABEL[H(a_i) near 0? | beta* snap to induction head]
AGG:     SPLAT[o_i = sum_j a_ij v_j | weighted value aggregation]
SPLAT:   SPLAT[Concat(heads) @ W^O | multi-head merge]
OUTPUT:  LABEL[o = MHA(Q,K,V) | contextualised token representations]
```

## Computable output

- **Attention entropy** H(a_i) = −Σ_j a_{ij} log a_{ij}: ranges from H=0
  (hard attend to single token) to H=log(n) (uniform). Measured per head per
  layer. Early layers: high H (diffuse, attending to syntax neighbours); middle
  layers: intermediate H (semantic attention); specific induction heads: H ≈ 0
  (sharp attending, β* snap). This is the primary LABEL eigenvalue.

- **Induction head formation**: during training of two-layer transformers on
  random token sequences, Olsson et al. (2022) observe a sharp loss drop
  correlated with the simultaneous formation of a "previous-token head" (attends
  to position i−1) and an "induction head" (attends to the token that followed
  a similar context previously). This is a β* snap: the attention distribution
  collapses from H¹ diffuse to H⁰ sharp at a specific training step (~10⁸
  tokens). The snap is abrupt, not gradual — the ISA β* signature.

- **Optimal β = 1/√d_head**: Vaswani et al. chose this empirically; the ISA
  explains why. For a token sequence with typical QK inner product variance
  σ² ≈ d_head (random initialisation), the pre-softmax logits have std ≈ √d_head.
  Without the 1/√d_head normalisation, softmax saturates (β→0 uniform or
  β→∞ argmax). The 1/√d_head is exactly the β* calibration that keeps the
  distribution in the H¹ Forge regime — the same optimality condition as the
  Metropolis 0.234 acceptance rate (ST01) and the MGE soft router (Paper 597).

- **Grassmannian capacity**: the attention head subspace in Gr(d_head, d_model)
  has a minimum volume element vol = d_head(d_model − d_head). For GPT-3
  (d_model=12288, d_head=128, h=96): each head spans a 128-dimensional subspace
  of 12288; the product of 96 heads samples Gr(128, 12288)^{96}. The mutual
  information between different heads' attention patterns is the TWIST overlap
  between their Schubert cells — heads that attend to similar features lie
  in nearby Schubert strata.

## The β-plane interpretation

Attention lives on the **real β-axis** of the β-plane with β = 1/√d_head:

| β regime | Attention behaviour | ISA |
|---------|--------------------|----|
| β → 0 (d_head → ∞, or high-T softmax) | Uniform attention; a_{ij} = 1/n; max entropy; useless | H² (Meld, diffuse) |
| β ≈ β* = 1/√d_head (standard) | Non-trivial mixture; Forge regime; contextual information flows | H¹ (Forge, functional) |
| β → ∞ (low-T softmax, argmax) | Hard attend to argmax key; a_i = e_{j*}; retrieval | H⁰ (Origami, induction head) |

The β* snap during training = the formation of induction heads = the transition
from H¹ diffuse to H⁰ sharp attention. The Vaswani 1/√d_head is the a priori
calibration; induction head formation is the learned β* snap at the optimal
operating point for in-context learning.

**Connection to Paper 597 (Soft Thresholds)**: the 1/√d_head normalisation
is the same saddle-point optimum as the Metropolis 0.234 accept rate, the
p-value 0.05 threshold, and the MGE β_eff calibration. All are β* snap points
that maximise the information content of a discrete threshold. The transformer
"discovered" the MGE optimal β by gradient descent.

## Why H¹ and not H⁰ or H²

**H⁰ would be**: hard attention / argmax attention — a nearest-neighbour
retrieval system. No TWIST, no geometric phase; each token attends to exactly
one other. This is what induction heads become (H⁰ snap from H¹).

**H¹ is standard attention**: the softmax creates a non-trivial probability
distribution over tokens — a TWIST in the attention distribution. The TWIST
content is measured by the attention entropy H(a_i); it is non-zero in functional
heads and drops to zero at the induction head β* snap.

**H² would be**: a fully quantum superposition of all token-pair attentions —
this would require entanglement between tokens, not just correlated attention
weights. Classical attention cannot reach H² because the softmax weights are
computed independently per query (no non-Abelian holonomy). Quantum attention
(BIND via quantum circuit on token states) would be H².

## Connections to other entries

- **GS02 PCA subspace tracking**: multi-head attention = h simultaneous
  subspace tracking steps; the W^Q, W^K projections are points on Gr(d_head,
  d_model); training = gradient descent on the Grassmannian product
- **P01 Orbit Processing Unit**: the OPU uses the same Grassmannian structure
  (Gr(k,n) tape) as multi-head attention's d_head-dimensional subspaces; the
  attention mechanism is a learnable OPU with h heads
- **ST01 Metropolis MCMC**: the 1/√d_head temperature calibration is the
  same β* saddle-point as the Metropolis 0.234 optimal acceptance rate — both
  are MGE operating points at the H¹ Forge regime (Paper 597)
- **IG01 EM algorithm**: the E-step (expectation over hidden variables) is
  structurally identical to the attention aggregation step: both compute a
  soft assignment (SPLIT+SPLAT via a probability distribution)
- **CM01 Hubbard Mott**: the induction head β* snap in transformers is the
  same kind of coherence collapse as the Mott transition (D → 0): a sharp
  transition from delocalised (H¹) to localised (H⁰) at a critical coupling

## Validation

- Vaswani et al. (2017), NeurIPS: original transformer paper; 1/√d_head
  normalisation; attention entropy measured across heads.
- Olsson et al. (2022), Anthropic: "In-context Learning and Induction Heads";
  phase transition in attention formation at ~10⁸ tokens; β* snap confirmed.
- Clark et al. (2019), "What Does BERT Look At?": attention head specialisation
  measured; entropy varies from near-0 (induction/syntactic) to near-log(n).
- Elhage et al. (2021), Anthropic: "A Mathematical Framework for Transformer
  Circuits"; induction heads formalised as composition of previous-token + copy
  head circuits; H¹ → H⁰ snap in circuit terms.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
