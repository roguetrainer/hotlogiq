---
layout: default
title: "The Non-Hermitian ISA: PT Symmetry and the 38-Fold Way"
parent: Explainers
nav_exclude: true
tags: [pt-symmetry, exceptional-points, non-hermitian, 38-fold-way, az-symmetry, origami-isa, label-failure, snap-threshold, topological-phases]
portfolio: A
---

## Ten Classes Were Never Enough

*Plain-language explainer for [doi:10.5281/zenodo.21480491](https://doi.org/10.5281/zenodo.21480491) (#460)*

---

## The Altland-Zirnbauer tenfold way

Altland and Zirnbauer (1997) classified all Hermitian topological phases by asking: which combinations of time-reversal T, particle-hole conjugation C, and chiral symmetry S = TC can a Hamiltonian H = H† have? The answer gives exactly 10 symmetry classes, organised by whether each symmetry is present and whether it squares to +1 or −1. This is the "tenfold way" — the complete periodic table of topological insulators and superconductors.

Kawabata, Shiozaki, Ueda, and Sato (2019) extended this to non-Hermitian Hamiltonians and found **38 symmetry classes**. The extra 28 arise because for H ≠ H†, Hermitian conjugation (†) and transposition (T) are independent operations — the standard identification H* = H^T fails. This doubles the set of anti-unitary symmetries available.

---

## How PT symmetry fits in

The AZ classification uses T (anti-unitary time reversal), C (anti-unitary particle-hole), and S (unitary chiral). PT symmetry introduces a fourth symmetry: **𝒫** (unitary spatial parity). The combined operation 𝒫𝒯 is anti-unitary and squares to +1, placing it in a class with no AZ counterpart.

The AZ operator T and the PT operator 𝒯 are the same anti-unitary operator — they agree on their action on H. The difference is the context: AZ imposes T on a Hermitian Hamiltonian; PT imposes 𝒫𝒯 jointly on a non-Hermitian one. The parity 𝒫 is the genuinely new ingredient.

---

## Two new ISA phenomena

The main contribution of this paper is translating the 38-fold way into the Origami ISA opcode language. This reveals two phenomena that have no Hermitian counterpart:

**LABEL failure (PT phase transition).** The LABEL opcode projects a state onto a definite symmetry sector — a definite parity, charge, or spin quantum number. In Hermitian systems, symmetry sectors are always orthogonal and LABEL always works. In PT-symmetric systems, as the system approaches an exceptional point, the 𝒫𝒯 eigenstates rotate from real (orthogonal sectors) to complex-conjugate pairs (non-orthogonal sectors). At the EP itself, the two sectors coalesce: LABEL becomes undefined. This is the ISA description of the PT phase transition.

**Exceptional point at the H¹/H² tier boundary.** In the PT-unbroken phase, the system lives in the H¹ tier: real eigenvalues, well-defined eigenstates, Berry phase accumulation, TWIST operates correctly. At the exceptional point, the eigenstates coalesce into a Jordan block — the eigenbundle is ill-defined, TWIST cannot be performed, and SNAP↑ fires. The system crosses into the H² tier (PT-broken phase): complex eigenvalues, gain-loss dynamics, dissipation dominant. The EP is the β*₁₂ snap threshold of the ISA.

---

## Reading the 38 classes in ISA language

Each of the 38 non-Hermitian symmetry classes corresponds to a different combination of which ISA opcodes remain well-defined:

- Classes where LABEL works but TWIST approaches failure: near-EP classes in the H¹ tier, approaching the snap threshold
- Classes where LABEL fails (PT-broken): in the H² tier, past the snap threshold
- Classes where both LABEL and TWIST are well-defined throughout parameter space: topologically protected, no EP accessible via smooth deformation
- Classes with additional structure (C symmetry, chiral symmetry): the Hermitian AZ classes embedded in the non-Hermitian landscape

The ISA provides a dictionary between symmetry class (abstract algebra — which anti-unitary symmetries are present and how they compose) and computational capability (which opcodes fire and which fail).

---

## See also

- [PiTch](/papers/10.5281-zenodo.21509972/) — counting EP crossings via the PiTch number
- [PtSurvey](/papers/10.5281-zenodo.21480284/) — why EPs appear in six unexpected domains
- [PT Symmetry & Exceptional Points](/docs/theory/pt-symmetry) — the full theory page
