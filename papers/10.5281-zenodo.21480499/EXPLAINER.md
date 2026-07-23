---
layout: default
title: "PT EP Search: Sensing vs Speedup"
parent: Explainers
nav_exclude: true
tags: [pt-symmetry, exceptional-points, quantum-speedup, grover, postselection, ep-sensing, bbbv, naimark-dilation, zeng-2025]
portfolio: A
---

## ⚠️ The Speedup Claim Was Wrong

*Plain-language explainer for [doi:10.5281/zenodo.21480499](https://doi.org/10.5281/zenodo.21480499) (#636)*

---

## The original claim

An n-th order exceptional point has eigenvalue splitting that scales as ε^{1/n} — much sharper than the ε^1 scaling of an avoided crossing. For an EP₂, this gives a square-root improvement in sensitivity: measuring a small perturbation ε near an EP₂ requires only √ε rather than ε of signal to resolve.

The original claim was: run Grover search on a database of N items via a non-Hermitian (PT-symmetric) oracle with an EP₂ at the solution. The anomalous sensitivity gives a speedup beyond Grover: O(N^{1/4}) query complexity instead of O(√N). For large N, this would beat the quantum lower bound.

---

## What actually happens

Three independent groups in 2023–2025 showed this claim is wrong:

**Balytskyi et al. (2023)**: The EP sensitivity enhancement is real, but measuring it requires postselecting on the ancilla qubit used to implement the non-Hermitian dynamics. The success probability of postselection scales as ε^1 — exactly cancelling the ε^{1/2} sensitivity gain. Net speedup: exactly zero.

**Zeng et al. (2025)**: Formal proof using the BBBV adversary method that any non-Hermitian oracle with PT symmetry, when embedded in a valid quantum circuit via Naimark dilation or Lindblad + postselection, satisfies the same lower bound as a Hermitian oracle. The EP structure does not confer query complexity advantages.

**Chaduteau et al. (2025)**: Experimental confirmation in a photonic system: the EP₂ sensor achieves ε^{1/2} sensitivity in signal-to-noise, but after accounting for the reduction in photon count from postselection (or the optical loss equivalent), the sensitivity is identical to a standard interferometer.

The postselection cancellation is not a detail — it is exact and unavoidable. It follows from the unitarity of Naimark dilation: the full dilated system is unitary, so BBBV applies.

---

## What remains valuable

This does not mean PT symmetry is useless for quantum information. Two applications survive:

**Sensing (not search).** EP sensors in the classical regime (microwave cavities, optical cavities, mechanical oscillators) do achieve ε^{1/2} sensitivity enhancement — because in the classical regime there is no postselection cost. The sensor outputs are classical probabilities, not quantum amplitudes. The enhancement is real and experimentally confirmed for transduction (measuring weak forces, small perturbations to resonator frequency). The claim is false only for quantum *search*; classical EP sensing is fine.

**Topology of parameter space.** The PiTch number S(γ) is a well-defined topological invariant of paths in PT-symmetric parameter space regardless of speedup claims. Characterising the EP structure of a system (which symmetry class it belongs to, how many EPs it has, what the monodromy group is) is scientifically valuable independent of any computational speedup.

---

## The N > 16 threshold — a retraction

Early versions of this work predicted that EP₂ search beats Grover for N > 16, after accounting for Naimark overhead. The 2025 literature shows this threshold was computed incorrectly: the postselection overhead was counted only once, not per oracle query. When counted correctly, the threshold disappears and no N gives a quantum speedup.

This retraction is included prominently in the paper.

---

## ISA implications

In the Origami ISA, the PT-broken tier H² is NOT a computational resource for query complexity. It is a resource for sensing (classical), for geometric phase characterisation, and for open-system simulation. The SNAP opcodes (SNAP↑/SNAP↓) that mark tier transitions are physically meaningful but do not reduce the number of oracle calls required to solve a search problem.

---

## See also

- [PtLifting](/papers/10.5281-zenodo.21480495/) — where PT speedup *does* work (Fourier/walk paradigms, with conditions)
- [PiTch](/papers/10.5281-zenodo.21509972/) — the invariant that correctly characterises EP topology
- [PtSurvey](/papers/10.5281-zenodo.21480284/) — the Snap Theorem and correct applications of PT EPs
- [PT Symmetry & Exceptional Points](/docs/theory/pt-symmetry) — the full theory page
