---
layout: default
title: "Why Four Vertices Call the Shots: The 6j Symbol as the First Cohomological Obstruction"
parent: Explainers
nav_exclude: false
tags: [sheaf-cohomology, 6j-symbol, quantum-foundations, economics, gauge-theory, origami-isa, interest-rates, systemic-risk]
portfolio: F|G|B
---

## Why Four Vertices Call the Shots

*Plain-language explainer for [doi:10.5281/zenodo.20635479](https://doi.org/10.5281/zenodo.20635479)*

---

## The central idea in one sentence

The Wigner–Racah 6j symbol — the quantity that governs spectral line intensities, quantum computing magic, gravitational amplitudes, interest rate convexity, and option prices — is not a complicated formula: it is the *first obstruction to making local data globally consistent*, and that is why it appears everywhere.

---

## The puzzle

Every interaction in quantum physics is a vertex in a diagram. The most common kind is the **3-vertex**: three lines meeting at a point. In atomic spectroscopy, it is the coupling of two angular momenta; in quantum computing, it is a two-qubit gate; in finance, it is a bilateral contract between two parties. These are everywhere.

The **4-vertex** — two 3-vertices connected by an internal line — is far less common. It carries the Wigner–Racah 6j symbol. And yet, whenever you want to calculate something physically observable — a spectral line intensity, a decay rate, a scattering amplitude, an option price — the 6j symbol is what you actually need. The 3-vertex only tells you whether an interaction is *permitted*. The 6j symbol tells you *how much*.

Why does the rarer object govern the physics?

---

## The answer: $H^0$ versus $H^1$

The answer is a single idea from a branch of mathematics called **cohomology** — a tool for asking whether locally consistent data can be assembled into a globally consistent whole.

**$H^0$ is local data.** A 3-vertex is a local statement: it says what happens at one interaction point. You can always assign valid data at a single vertex. $H^0$ is always non-trivial; the local problem is always solvable.

**$H^1$ is the first obstruction to global consistency.** The question of whether the local data at all vertices can be assembled into a single globally consistent description is harder. When it can be — when there is no obstruction — $H^1 = 0$, and local data is sufficient. When it cannot — when there is a topological obstruction — $H^1 \neq 0$, and the obstruction has a value. That value is the 6j symbol.

In plain English: the 6j symbol measures the *price of global consistency*. You need it everywhere physics actually happens — because physics is always global.

---

## The triangle is the key

Take three institutions: a bank, an asset manager, and a money market fund. Each pair has a bilateral price (an interest rate, a credit spread, a discount factor). Each price is locally reasonable.

Now ask: do these three bilateral prices compose consistently around the triangle? Does the rate from the bank to the asset manager, composed with the rate from the asset manager to the fund, equal the direct rate from the bank to the fund?

In a deterministic world: yes. Local data extends globally. $H^1 = 0$.

In a stochastic world — where interest rates are random, correlations are non-zero, and Itô's lemma applies — the answer is *no*. The three bilateral prices are individually reasonable but collectively inconsistent. The inconsistency is the **convexity adjustment**: the $\frac{1}{2}\sigma^2$ term in the HJM drift condition. It is not a modelling choice. It is the $H^1$ class of the discount factor sheaf on the triangle.

The $\frac{1}{2}$ in the Itô correction and the $\frac{1}{2}$ in the Maslov index (the geometric quantisation correction) have the same origin: they are both the curvature of a prequantum bundle evaluated on the elementary triangle. One equation, two communities, same obstruction.

---

## The unhedgeability theorem

This has an immediate and important financial consequence.

A bilateral instrument — a forward, a swap, a single-name CDS — covers one *edge* of the interaction diagram. No matter how many bilateral instruments you assemble, you only cover edges. You never cover the *faces* (the triangles).

The $H^1$ class of the pricing sheaf lives on the faces, not the edges. It is invisible to any portfolio of bilateral instruments.

**Theorem:** A financial risk is hedgeable with bilateral instruments if and only if its $H^1$ class is trivial.

This gives a precise mathematical definition of what *complex derivative* means:

| Risk type | Class | Instruments | Examples |
| --- | --- | --- | --- |
| **Bilateral risk** | $H^0$ | Forwards, futures, swaps | Delta, DV01 |
| **Triangular risk** | $H^1$ | Options, swaptions, CDOs | Convexity, basis, smile, XVA |
| **Systemic risk** | $H^2$ | CCPs, central banks | Contagion, cascade, SIFI |

Options exist because $H^1 \neq 0$. They are the instruments designed to cover triangular risk that bilateral contracts structurally cannot reach. This is not a practical limitation about market incompleteness — it is a topological theorem.

**Corollary:** Basis risk, convexity risk, volatility smile risk, and CDO correlation risk are all $H^1$ classes. They are permanently unhedgeable with bilateral instruments, regardless of how many you hold.

---

## Five fields, one theorem

The same theorem appears in five different fields, because all five have the same mathematical structure:

| Field | What $H^0$ is | What $H^1$ is | What $H^2 = 0$ means |
| --- | --- | --- | --- |
| Nuclear spectroscopy | Selection rules (Clebsch-Gordan) | Spectral line intensities (Racah 6j) | Biedenharn–Elliott identity |
| Quantum computing | Pauli syndromes | Magic valence (orbit label) | Pentagon identity |
| Quantum gravity | Vertex amplitudes | Ponzano–Regge 6j | Pachner move invariance |
| Interest rates | Bilateral discount factors | Convexity adjustment (HJM) | HJM no-arbitrage |
| Information pricing | Conditional expectations | Bayesian updating coefficient | Tower property |

These are not analogies. They are the same theorem — the 6j symbol is $H^1$ of the relevant sheaf on the interaction diagram — instantiated for five different sheaves on five different diagrams. The Pentagon identity ($H^2 = 0$) is Mac Lane's coherence axiom, which all five inherit.

Racah discovered the 6j symbol for spectroscopy in 1942. Mac Lane wrote down the Pentagon identity for category theory in 1963. Heath, Jarrow and Morton rediscovered the same identity as the HJM no-arbitrage condition in 1992. Three communities, fifty years, one equation.

---

## What the Origami ISA computes

The Origami ISA opcodes — SPLIT, SPLAT, FLIP, FLOP, TWIST — have an exact interpretation as cohomology operations:

- **SPLIT** ($1 \to 4$ Pachner move): the coboundary map $\delta: H^0 \to H^1$ — takes a global state and produces its $H^1$ obstruction class
- **SPLAT** ($4 \to 1$ Pachner move): integration over the fibre $H^1 \to H^0$ — collapses a 1-cocycle back to a global value
- **TWIST**: gauge transformation on $H^1$ — changes local conventions without changing the global class
- **Pentagon identity**: $d^2 = 0$ — the standard cohomology axiom that all five fields share

This gives the Origami ISA a basis-independent, canonical formulation. Running an Origami ISA programme on an interaction diagram is computing the cohomology of the relevant sheaf.

---

## The Penrose transform as the archetype

This structure was understood first in twistor theory. Roger Penrose, Michael Eastwood, and colleagues showed in 1981 that:

$$\{\text{massless fields on spacetime}\} \cong H^1(\mathbb{CP}^3,\, \mathcal{O}(\ldots))$$

Physical fields *are* $H^1$ classes — not functions, but cohomology classes on twistor space. The Penrose transform is the statement that the correct arena for physics is cohomology, not pointwise data.

The present paper is the interaction-diagram analogue of the Penrose transform: physical observables and financial prices are $H^1$ classes on interaction diagrams, not values at individual vertices. The twistor transform is the continuous version over $\mathbb{C}$; this paper is the discrete version over simplicial complexes.

---

## The bridge to systemic risk

The framework extends naturally to $H^2$ — the second cohomological obstruction — which governs systemic financial risk. Individual institution risk is $H^1$. The question of whether different institutions' $H^1$ risks are mutually consistent is $H^2$. When $H^2 \neq 0$, the financial system is topologically fragile: shocks amplify rather than absorb.

The 2008 crisis was an $H^2$ event. No regulator was computing $H^2$. That story is developed in the companion paper [doi:10.5281/zenodo.20642908](https://doi.org/10.5281/zenodo.20642908).

---

## What to read next

- [Systemic Risk as $H^2$](https://doi.org/10.5281/zenodo.20642908) — *the companion paper: cohomological stress testing, the SIFI theorem, 2008 as an $H^2$ event*

- [The Topology of Risk: A Primer](https://doi.org/10.5281/zenodo.20642983) — *tutorial for practitioners with no prior topology: three-bank running example, $H^0$/$H^1$/$H^2$ from first principles*

- [Term Structure Bundles on the Pacioli Manifold](https://doi.org/10.5281/zenodo.20244445) — *interest rates as temporal connections; the discount factor sheaf*

- [The Origami ISA as Nature's Universal Computer](https://doi.org/10.5281/zenodo.20543454) — *the five opcodes across 20 orders of magnitude*

- [Projective Geometry as the Mother Tongue of Quantum Mechanics](https://doi.org/10.5281/zenodo.20634729) — *the Brody–Hughston $\mathbb{CP}^n$ programme and its connection to the Fano discrete programme; the Penrose transform context*

---

*For the full technical treatment, see [doi:10.5281/zenodo.20635479](https://doi.org/10.5281/zenodo.20635479).*
