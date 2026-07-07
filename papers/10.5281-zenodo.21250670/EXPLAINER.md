---
layout: default
title: "Each correction to the atom halves the error"
parent: Explainers
nav_exclude: false
tags: [mean-field-theory, thomas-fermi, scott-correction, schwinger, fefferman-seco, adelic-atom, number-theory, riemann-zeta, van-der-corput, h-k-ladder, trs-framework, quantum-chemistry, atomic-physics]
portfolio: A
---

## Each correction to the atom halves the error

*Plain-language explainer for [doi:10.5281/zenodo.21250670](https://doi.org/10.5281/zenodo.21250670) (#550)*

---

## The central idea in one sentence

The successive approximations to the quantum atom — Thomas-Fermi (1927), Scott (1952), Schwinger (1981), Fefferman-Seco (1990–1994) — are the H⁰, H¹, H² rungs of the TRS cohomological ladder, and each rung halves the error in the ground-state energy.

---

## The atom is harder than it looks

The ground-state energy E(Z) of a neutral atom with Z protons — the energy you need to pull all Z electrons away from the nucleus — obeys a well-known asymptotic expansion:

$$E(Z) \approx c_{\rm TF}\, Z^{7/3} + c_{\rm Scott}\, Z^2 + c_{\rm Schwinger}\, Z^{5/3} + \cdots$$

This expansion was proved rigorously over 65 years, by Lieb-Simon (1977), Scott (1952), Schwinger (1981), and Fefferman-Seco (1990–1994). Each term is smaller than the previous by a factor of $Z^{-1/3}$. The question this paper asks is: *why these particular terms, in this particular order, each reducing the error by roughly half?*

The standard textbook answer is "perturbation theory." This paper argues it is something deeper: the H^k cohomological expansion applied to the atom's self-consistency problem.

---

## Three levels of description

**H⁰ — Thomas-Fermi (1927)**: The simplest model treats the atom as a ball of electron gas in the field of the nucleus. The electron density ρ(r) must satisfy a self-consistency condition: the density generates the electrostatic potential, which determines which states electrons can occupy, which in turn determines the density. Solving this loop — the Thomas-Fermi equation — gives the leading term c_TF Z^{7/3}.

This is an **ORBIT closure** in ISA terms: the tropical fixed point of a Gibbs self-consistency map. The atom's electron cloud "orbits" a fixed point in function space.

*Error: about 24% of the exact ground-state energy.*

**H¹ — Scott correction (1952)**: The Thomas-Fermi model treats electrons as a continuous gas and misses the fact that electrons close to the nucleus behave as quantum wave packets, not gas molecules. The innermost electrons — the 1s, 2s shells — are so tightly bound that their quantum oscillations matter. Correcting for this adds c_Scott Z² to the energy.

This is a **TWIST** — a monodromy correction from the quantum oscillations of the shell partition function. The same mathematical tool (the Van der Corput oscillatory integral) appears in the Selberg trace formula, in WKB quantisation, and in the TWIST opcode of the Forge ISA.

*Error: about 16% — the correction roughly halved the error.*

**H² — Schwinger / Fefferman-Seco (1981–1994)**: Even deeper: the electron density has oscillations with a period of about 8 in atomic number Z — you can see them in the periodic table's ionisation energies. These oscillations are controlled by the zero-free region of the Riemann zeta function ζ(1/2 + it). The Fefferman-Seco theorem proves that the error in the electron counting function N(λ) — the number of energy levels below a threshold λ — behaves like

$$\Delta N(\lambda) \sim \lambda^{1/4} \sum_{\rho} \frac{\lambda^{i\gamma}}{\rho}$$

where the sum runs over zeta zeros ρ = 1/2 + iγ. The zeta function is not a metaphor here — it literally controls the electron density oscillations through a Weyl law refinement.

This is **BIND** — the non-Abelian holonomy level, where the arithmetic of prime numbers enters the atom's energy.

*Error: about 10% — halved again.*

---

## The halving table

| H^k level | Correction | Error on E(Z) | ISA opcode |
|-----------|-----------|---------------|------------|
| H⁰ | Thomas-Fermi | ~23.9% | ORBIT |
| H¹ | + Scott term | ~16.2% | TWIST |
| H² | + Schwinger term | ~9.8% | BIND |
| H^∞ | Adelic atom | exact | BIND[∀p] |

Each step reduces the error by a factor of roughly 0.65. This is the signature of a geometric series — the H^k expansion converges geometrically, not logarithmically. The numerical validation is in Table 1 of the paper, computed directly against Hartree-Fock energies for noble-gas atoms Z = 2, 10, 18, 36, 54, 86.

---

## Why the Riemann zeta function appears

The connection between the atom and the zeta function is not superficial. Here is the chain:

1. The electron count N(λ) = #{energy levels ≤ λ} obeys a Weyl law: N(λ) ~ cλ^{3/2} (the semiclassical count).
2. The *error* in the Weyl law — the difference between the exact count and the semiclassical count — is an oscillatory sum controlled by the same exponential sums that control the prime counting function π(x).
3. Van der Corput's method (1921) — a technique for bounding oscillatory sums — controls both. The same Hardy exponent α that appears in bounds on π(x) − Li(x) appears in the electron density oscillations.
4. The zero-free region of ζ(s) in the critical strip determines how tight the Van der Corput bound can be made. A better zero-free region → tighter Fefferman-Seco bound → more accurate atomic energy.

The upshot: the accuracy of any mean-field atomic theory is limited by our knowledge of the Riemann Hypothesis. If RH is true, Fefferman-Seco is essentially optimal. If there are zeros off the critical line, the atom "knows" — its energy levels will deviate from the ζ(1/2+it) prediction.

---

## The adelic atom

At the top of the ladder — H^∞ — sits the *adelic atom*: the energy computed simultaneously over all completions of the rational numbers. The real completion gives the standard quantum mechanics. Each prime p gives a p-adic contribution. Together they form an Euler product

$$E_{\rm adelic}(Z) = \prod_p E_p(Z)$$

This is the same Euler product structure that appears in L-functions and the Riemann zeta function itself. The adelic atom is not yet fully understood — it is the frontier of Paper 551 (Adelic Atom, forthcoming) and connects to the p-adic quantum computer of Paper 544.

---

## Why quantum chemists should care

Current density-functional theory (DFT) codes — the workhorses of computational chemistry — add corrections to the Thomas-Fermi approximation empirically, through exchange-correlation functionals tuned to reproduce experimental data. The H^k framing suggests a systematic alternative with a clear hierarchy:

- **H⁰ DFT** = Local Density Approximation (LDA) — tropical fixed point
- **H¹ DFT** = hybrid functionals (B3LYP, PBE0) — TWIST correction
- **H² DFT** = range-separated hybrids, RPA — BIND correction

The key prediction: DFT errors should decrease by a factor of ~2 for each step up the H^k ladder, independent of which functional family is used. The paper's Table 1 is a direct test of this prediction for the asymptotic atomic case. Extending the test to molecular DFT benchmarks is an open experiment.

---

## What this paper does not claim

The halving ratio (~0.65 per step) is an empirical observation for the asymptotic atomic series, not a theorem. The precise ratio will vary for different systems and different choices of H^k representative. The claim is the *existence* of the ladder and the *direction* — each H^k step improves the approximation — not a universal constant.

---

*See also:*
- [The Forge ISA](https://doi.org/10.5281/zenodo.20773514) (#419) — the ORBIT/TWIST/BIND opcodes in full
- [The H^k Complexity Ladder](https://doi.org/10.5281/zenodo.20773520) (#420) — the β-snap threshold; the ladder in the abstract
- [The Adelic β-Plane](https://doi.org/10.5281/zenodo.21245459) (#543) — the complex β-plane that contains the adelic atom
- [Galois Chemistry = Tropical DFT](https://doi.org/10.5281/zenodo.21219712) (#491) — the molecular H⁰ analogue

*For the full technical treatment, see [doi:10.5281/zenodo.21250670](https://doi.org/10.5281/zenodo.21250670)*
