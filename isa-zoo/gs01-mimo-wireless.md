---
layout: default
title: "GS01 — MIMO Wireless Capacity"
parent: ISA Zoo
nav_exclude: true
semiring: probabilistic
---

# GS01 — MIMO Wireless Capacity

| Field | Value |
|-------|-------|
| **Domain** | Grassmannian Systems |
| **System** | k transmit beams in n-antenna channel |
| **Group** | U(n) acting on Gr(k, n) |
| **H^k tier** | H¹ |
| **ISA** | Forge (β ≈ β*) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · LABEL |
| **Papers** | Paper 574 |

---

## Physical system

A MIMO (Multiple-Input Multiple-Output) wireless system uses n_T transmit and
n_R receive antennas. The channel is an n_R × n_T complex matrix H drawn from
an isotropic distribution. The transmitter chooses k beams (spatial directions)
from the n_T-dimensional transmit space — a point V ∈ Gr(k, n_T). Capacity
depends only on the singular values of HV, not on the unitary rotation of V
within Gr(k, n_T): the channel capacity is a function on the Grassmannian.

**Zheng and Tse (2002)** established the diversity-multiplexing tradeoff: at
SNR ρ, a MIMO channel with n_T transmit, n_R receive antennas achieves
- **multiplexing gain** r = k (spatial streams = dimension of V ∈ Gr(k, n_T))
- **diversity gain** d(r) = (n_T − r)(n_R − r) (number of independent fading paths)

The tradeoff d(r) is the Schubert calculus intersection number of two Schubert
varieties in Gr(k, n_T + n_R): it counts the dimension of the set of channels H
where exactly k beams are supported. **Capacity = volume of Gr(k, n_T) in the
Fisher-Rao metric of the channel distribution.**

---

## Target category

**Ch(n_T, n_R)** — the category of MIMO channels with n_T × n_R complex matrices
as objects and unitary beam-forming transformations as morphisms. The optimal
beam-former V* is the point in Gr(k, n_T) that maximises mutual information
I(x; y) = log det(I + ρ/k · H V V† H†). The capacity-achieving V* is the
leading k-dimensional eigenspace of H†H — the same object as the PCA subspace (GS02).

## Interpretation functor

F: C → Ch(n_T, n_R) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Beam update: V → exp(tX)·V for X ∈ u(n_T); geodesic on Gr(k,n_T) toward capacity-maximising subspace; implements gradient ascent of mutual information |
| TWIST  | Phase coherence: the H¹ Berry phase φ = i∮⟨V\|dV⟩ accumulated as the beam rotates through the channel; determines coherent vs non-coherent capacity gap |
| LABEL  | Singular value λ_i(HV): the eigenvalue of each beam's effective channel gain; capacity = Σ_i log(1 + ρ λ_i²) |

## ISA programme

```
CHANNEL: LABEL[H | n_R x n_T complex fading matrix]   -- observe channel
SVD:     ORBIT[H = U Sigma V† | singular value decomp] -- ORBIT to eigenspace
BEAMS:   LABEL[V* = top-k columns of V]               -- optimal Gr(k,n_T) point
PHASE:   TWIST[phi = i oint <V|dV>]                   -- coherent beam phase (H1)
CAPACITY:LABEL[C = sum_i log(1 + rho * sigma_i^2)]    -- Shannon capacity (LABEL eigenvalue)
TRADEOFF:LABEL[d(r) = (n_T - r)(n_R - r)]             -- diversity-multiplexing tradeoff
```

## Computable output

- **Shannon capacity** C = Σ_i log₂(1 + ρ σ_i²(HV)) bits/s/Hz: the ORBIT
  output. Validated against the Telatar (1999) formula; exact for i.i.d. Rayleigh
  fading channels.
- **Diversity-multiplexing tradeoff** d(r) = (n_T − r)(n_R − r): the Schubert
  intersection number. For a 2×2 MIMO: d(0)=4, d(1)=1, d(2)=0. This is the
  H¹ TWIST content of the channel: how many independent fading paths support each
  multiplexing gain level.
- **Grassmannian code distance**: the minimum chordal distance between codewords
  in a Grassmannian code is d_c(V_i, V_j) = √(k − ‖V_i†V_j‖_F²) — the ORBIT
  geodesic distance on Gr(k,n). Optimal Grassmannian codes (packings in Gr(k,n))
  maximise this distance; they are ORBIT-maximally-separated points, analogous
  to sphere packing.
- **Coherent vs non-coherent gap**: the TWIST phase φ distinguishes coherent
  reception (channel known, H¹ TWIST computed) from non-coherent reception
  (channel unknown, only H⁰ ORBIT magnitude available). The coherent capacity
  advantage is exactly the H¹ Berry phase correction to the H⁰ power gain.

## Grassmannian Systems context

MIMO is the engineering entry point to Grassmannian computation: it is the first
application where working engineers routinely think in terms of subspaces, SVD,
and Grassmannian geometry — often without using those words. The optimal
beam-former is a point in Gr(k, n_T); beamforming codebooks (3GPP Type I/II)
are Grassmannian codes; massive MIMO (n_T → ∞) is the large-n limit of the
Grassmannian. Modern 5G and 6G systems are, in operational practice, Grassmannian
computing systems running an implicit OPU (P01) with H⁰ and H¹ opcodes.

## Validation

- Telatar (1999): MIMO capacity formula for i.i.d. Rayleigh fading. The
  foundational result; exact.
- Zheng & Tse (2002): diversity-multiplexing tradeoff d(r) = (n_T−r)(n_R−r).
  Proved rigorously; matches simulation.
- Grassmannian codes: Love, Heath & Strohmer (2003) — systematic construction
  of Grassmannian codebooks achieving the Hamming-Rankin bound on chordal distance.
- 3GPP standards: LTE/5G NR codebooks are standardised Grassmannian packings in
  Gr(k, 32) (32-antenna base station). Deployed globally.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
