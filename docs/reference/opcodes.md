---
layout: default
title: The ISA Opcodes
nav_order: 3
description: "The canonical opcodes of the Origami ISA: RESOLVE/PROJECT/TWIST/FUSE/FLIP/SNAP/JOIN/LINK — cohomological role, categorical structure, and incarnations across domains. Legacy names ORBIT/LABEL/BIND/MERGE and older SPLIT/SPLAT/FLOP shown for reference."
tags: [isa, opcodes, resolve, project, fuse, twist, flip, cup, join, link, orbit, label, bind, merge, split, splat, flop, category-theory, string-diagrams, completeness]
portfolio: B
---

# The ISA Opcodes
{: .no_toc }

*Five opcodes. Every temperature. One language — for quantum circuits, living cells, financial crises, and unsolved problems in mathematics.*

> **Name change (2026):** This document uses the current canonical names.
> Mapping from previous names: **ORBIT → RESOLVE**, **LABEL → PROJECT**, **BIND → FUSE**, **MERGE → JOIN**.
> FLIP, TWIST, CUP, LINK, SNAP, HALT, THERMAL unchanged.
> Published papers use the previous names; the legacy mapping table at §[Full opcode table](#the-full-opcode-table) preserves all prior names.

## Contents
{: .no_toc }

1. TOC
{:toc}

---

## The opcodes

**Opcode symbols:** each canonical opcode has a formal symbol (used in LaTeX papers) and an outreach emoji.

| Opcode | Formal | Emoji | Categorical morphism | Abstract role |
|--------|--------|-------|---------------------|---------------|
| RESOLVE | △ | 🔬 | Comultiplication $\Delta: A \to A \otimes A$ · trace $\mathrm{tr}(\theta_A): \mathbf{1} \to \mathbf{1}$ | 1-to-many diagonalisation; spectral decomposition |
| PROJECT | ▼ | 🎯 | Multiplication $\mu: A \otimes A \to A$ · unit $\eta: \mathbf{1} \to A$ | Many-to-1 evaluation; sector selection |
| FLIP | † | ↩️ | Dagger $(-)^\dagger$ · counit $\varepsilon_A: A^* \otimes A \to \mathbf{1}$ (CUP sub-role) | Orientation reversal; time-reversal; duality |
| TWIST | ∮ | 🌀 | Ribbon element $\theta_V: V \to V$; topological spin | Phase / monodromy; 1-to-1 with memory |
| FUSE | ⋈ | 💎 | Associator $\alpha_{A,B,C}: (A \otimes B) \otimes C \xrightarrow{\sim} A \otimes (B \otimes C)$; $F$-matrix | Non-associative fusion; recoupling; entanglement |

**Graphical calculus legend:**
🕷️ present in ZX calculus · 🕷️\* partial (related ZX construct, not full ISA semantics) ·
🐸 present in 731 Frog Calculus · unmarked = ISA-native (no dedicated graphical symbol).

**RESOLVE is intentionally unmarked.** It is a closed scalar loop `𝟏 → 𝟏` — a trace, not a vertex.
In ZX it appears as a disconnected bubble (no named spider); in the Frog Calculus it is a closed triangulation loop
with no interior vertex. Neither calculus assigns RESOLVE a node: RESOLVE *closes* a loop rather than *opening* one.

The **Frobenius identity** PROJECT∘RESOLVE = id (evaluate after diagonalising = identity) is the spider identity. FLIP∘CUP = id (reverse an arrow, then close it = identity, compact closure) — where CUP is the counit sub-role of FLIP; see §[CUP](#cup--flip-fermion-sub-role--formerly-flop) below.

---

## The H^k tiers

Every opcode lives at a specific **cohomological degree** — the superscript k in
H^k is not a power but a degree in the de Rham / sheaf cohomology sequence.
The technical names:

- **H⁰** — zeroth cohomology: global sections, conserved quantities, classical observables
- **H¹** — first cohomology: connections, Berry phases, obstructions to global triviality
- **H²** — second cohomology: characteristic classes, Chern numbers, genuine topological charges

**In one sentence: H⁰ is counting (RESOLVE/PROJECT/FLIP), H¹ is interference (TWIST), H² is entanglement (FUSE).**

| Tier | Opcodes | One-word meaning | Technical meaning |
| ---- | ------- | ---------------- | ----------------- |
| **H⁰** | RESOLVE, PROJECT, FLIP | Counting | Global sections; classical observables; no phase |
| **H¹** | TWIST | Interference | Berry phase; connection; obstruction to triviality |
| **H²** | FUSE | Entanglement | Chern class; non-Abelian holonomy; topological charge |

The ladder H⁰ → H¹ → H² is literally the de Rham sequence with d∘d = 0.
This is also why FUSE∘TWIST ≠ 0 but FUSE∘FUSE = 0 in the ISA — the chain
complex structure of the opcodes is the same object as the cohomology sequence.
(See Theorem 3 below.)

The tier of a physical system is its **minimum opcode requirement** — the lowest
H^k needed to describe it exactly:

| Tier | Chemistry | Quantum computing |
| ---- | --------- | ----------------- |
| H⁰ only | DFT works fine | Clifford circuits; classically simulable |
| H¹ enters | CCSD sufficient | Still Clifford + cheap corrections |
| H² enters | DFT fails; need CASSCF | Gottesman-Knill breaks down; need magic states |

The deeper point: DFT and Clifford simulation both fail at the H¹→H² boundary
because they are both H⁰/H¹ approximations meeting the same H² obstruction.
The cohomological degree is what makes that precise — see
[Weyl Chamber Homology](papers/10.5281-zenodo.21345107/) for the proof that
the chemistry Grassmannian and the quantum-computing Weyl chamber carry the
same Bredon H² class (Euler characteristic 2).

> **Terminology note — legacy opcode names:** Earlier papers and drafts use a twelve-opcode
> vocabulary. The current five-opcode names (PROJECT / RESOLVE / TWIST / FUSE / FLIP) consolidate
> those as follows: SPLAT → LABEL → **PROJECT**, SPLIT → ORBIT → **RESOLVE**,
> FLOP → CUP (FLIP fermion sub-role, name unchanged), BIND → **FUSE**, MERGE → **JOIN**.
> The sections below retain the legacy name FLOP where it clarifies categorical structure
> (especially the FLIP/FLOP distinction in the AZ tenfold way); treat CUP as the canonical
> name for that sub-role.

---

## Opcode incarnations across domains

The same abstract opcode appears with different in/out counts depending on the
domain. Each row is a physical domain; each column is one of the five canonical
opcodes. Within each cell, the two sub-roles separated by · correspond to the
legacy SPLIT/ORBIT sub-roles (RESOLVE column), SPLAT/LABEL sub-roles (PROJECT column),
and FLIP/CUP sub-roles (FLIP column). Read across a row to see how a domain
implements the full ISA; read down a column to see the same abstract operation
across completely different fields.

**Domain coordinate table** — the three structural axes that determine which ISA a domain uses, plus whether its symmetry group is Abelian (if ✓, 6j symbols collapse to trivial phase factors and FUSE is weak or absent; if ✗, genuine recoupling and non-trivial FUSE). The suggested ISA follows from these axes. **Most domains are Forge** — this is the point: finite-β thermodynamic computation is the generic case; Boolean logic (Origami) and quantum mechanics (Meld) are the cold and imaginary limits of the same framework.

| Domain | Semiring | Symmetry group | Abelian? | β-regime | Suggested ISA |
| ------ | -------- | -------------- | -------- | -------- | ------------- |
| **3-manifold** | ℤ / ℝ₊ | SU(2) / G₂ | ✗ | β→∞ (combinatorial) | Origami / Frog (if G₂) |
| **Spectroscopy** | ℝ | SU(2) / SO(3) | ✗ | finite β | Forge |
| **Quantum info** | ℂ | U(2ⁿ) | ✗ | β=it | Meld |
| **Chemistry** | ℝ → ℂ at CI | point group ⊂ G₂ | ✗ | finite β → β=it at conical intersection | Forge → Raven at CI |
| **Nuclear** | ℝ | G₂ (always H²) | ✗ | finite β | Forge + Frog (tensor force mandatory) |
| **Finance** | ℝ₊ | GL(n) / U(1) | ✓ | finite β | Forge |
| **Condensed matter** | ℂ / ℤ₂ | U(1) → SU(2) → G₂ | ✓/✗ (phase-dependent) | β=it → β* snap | Forge → Meld (phase-dependent) |
| **Turbulence** | ℝ | SDiff(ℝ³) | ✗ | finite β | Forge |
| **Biology** | ℝ → ℂ | point group ⊂ G₂ | ✗ | β ≈ β* (physiological) | Forge |
| **Statistics / ML** | ℝ₊ | GL(n) | ✓ | finite β | Forge |
| **MCMC / sampling** | ℝ₊ | — | ✓ | finite β | Forge |
| **Causal inference** | ℝ₊ | DAG automorphisms | ✓ | finite β | Forge |
| **Dynamical systems** | (max,+) → ℝ | Diff(M) | ✗ | β→∞ → finite β | Origami → Forge |
| **Number theory** | ℚ_p · ℂ · 𝔸 | GL(n) / G₂ | ✗ | all β | Rising Sea |

---

| Domain | RESOLVE 🔬 | PROJECT 🎯 | FLIP ↩️ | TWIST 🌀 | FUSE 💎 |
| ------ | --------- | --------- | -------- | --------- | ------- |
| **3-manifold** | 1 tet → 4 tets · closed triangulation loop | 4 tets → 1 tet · face/edge colouring | 1 tri → 3 tris · 3 tris → 1 tri | Dehn twist | non-Pachner obstruction |
| **Spectroscopy** | 1 rep → CG irreps · closed G-orbit on weight lattice | CG sum → 1 rep (3j) · quantum number assignment | raising $J_+$ · lowering $J_-$ | CG phase $(-1)^j$ | Racah recoupling (6j) — *H³ in extended ISA* |
| **Quantum info** | 1 qubit → register · feedback in quantum circuit | many states → 1 outcome · stabiliser projection | dagger / time-reversal · cup / partial trace | Berry phase / ribbon | $F$-matrix; non-Abelian anyon |
| **Chemistry** | CASSCF diagonalisation; NOON decomposition · G-walk / Galois step; CASSCF macro-iteration | 3j/CG projection to density · orbital symmetry label; spin-state; point-group irrep | time-reversal; particle-hole; raising · Born rule for density; lowering | Berry phase on reaction path; Maslov index at conical intersection | tensor force; strongly-correlated bond; FeMoco; DFT failure |
| **Nuclear** | shell-model diagonalisation; Nilsson basis · closed shell (magic number); Nilsson orbit | 9j evaluation; nuclear matrix element · $J$, $T$, parity quantum numbers | time-reversal; parity doubling · particle-hole in shell model | spin-orbit coupling (strong; mandatory); nuclear CG phase | **tensor force $S_{12}$; mandatory in every nucleus** |
| **Finance** | 1 exposure → risk factor legs · closed risk cycle | risk factor legs → net P&L · scenario / regime selection | long ↔ short position · Born rule on exposure | convexity correction; drift | H² snap event (systemic crisis) |
| **Condensed matter** | Bogoliubov transform; band diagonalisation · hopping on lattice; Fermi sea orbit | 3j / spectral projection · double occupancy $D$; order parameter; symmetry sector | particle-hole conjugation $C$ · fermionisation (Jordan-Wigner) | Berry phase; Chern number; BKT vortex | Mott transition (U/t snap); superexchange ring; topological order |
| **Turbulence** | large eddy → two smaller eddies · Kolmogorov cascade $k \to 2k$; inertial range | two sub-eddies dissipate at Kolmogorov scale · pressure Leray projector enforcing $\nabla\cdot u = 0$ | — | vortex stretching $\omega \to \omega + (\omega\cdot\nabla)u\,\delta t$ | blow-up conjecture: RESOLVE fails to close (NS unsolved) |
| **Biology** | CASSCF-like active-site diagonalisation · RESOLVE on Ramachandran torus; protein fold search; metabolic cycle | projection to electron density; tertiary fold evaluation · point-group label of active site; spin-state; cofactor oxidation state | time-reversal of reaction; particle-hole in redox · Born rule on conformational ensemble | Berry phase on reaction path; Maslov index at TS; spin-orbit (RuBisCO SOC problem) | chaperone-assisted H² fold; proofreading QEC; FeMoco (nitrogen fixation) |
| **Statistics / ML** | E-step (marginalise joint → conditional); multi-head projection · EM iteration (Fisher-Rao geodesic); Markov chain RESOLVE; attention token orbit | M-step (reconstruct parameters); head aggregation · convergence criterion ($\beta^*$ snap); energy eigenvalue; attention entropy | dagger on sufficient statistic · trace over latent variables; Born rule on posterior | $\alpha$-connection correction (curved exponential family); softmax Berry phase | multimodal posterior; phase transition in learning (grokking); non-Abelian Fisher tensor |
| **MCMC / sampling** | Markov chain step $x \to x'$; ergodic average over $\pi$ | energy evaluation $U(x)$; accept/reject eigenvalue | Metropolis accept/reject: $\alpha = \min(1, e^{-\beta\Delta U})$ | HMC leapfrog: symplectic integrator accumulating momentum phase | NUTS U-turn criterion: H² snap when Hamiltonian trajectory doubles back |
| **Causal inference** | DAG marginalisation $P(Y) = \sum_X P(Y\vert X)P(X)$ · observational RESOLVE; Markov blanket boundary | observational distribution fixed point · DAG structure label; backdoor criterion; instrumental variable sector | time-reversal of causal arrow · trace over latent confounders | do-calculus: graph surgery $\mathrm{do}(X=x)$ mutilates edges | counterfactual: $P(Y_{X=x}=y \vert X=x', Y=y')$ — two parallel worlds, non-local FUSE |
| **Dynamical systems** | soliton emergence: smooth hump → $n$ solitons (Lax eigendecomposition) · quasi-periodic orbit on $\mathbb{T}^n$; Lorenz lobe winding | soliton collision and re-emergence; Marchenko reconstruction · Lax eigenvalue $\kappa_n$; Lyapunov exponent; rotation number | time-reversal symmetry; Lax pair adjoint | resonance: KAM island chains; lobe-switching in Lorenz; Rankine-Hugoniot shock speed | cantorus at last KAM torus destruction $\varepsilon^*$; strange attractor (RESOLVE fails to close) |
| **Number theory** | spectral decomposition of $L^2(G(\mathbb{Q})\backslash G(\mathbb{A}))$; Hecke eigendecomposition · Apéry recurrence; rational points on $E(\mathbb{Q})$; $\pi_1(C)$ monodromy | L-function evaluation $L(s,\pi)$; Euler product · Hecke eigenvalue $a_p(E)$; quantum number of automorphic rep $\pi$ | Langlands duality $G \leftrightarrow G^\vee$ · Abelian reciprocity ($GL_1$); class field theory | Tate twist; monodromy of local system; Selmer group $\mathrm{Sel}_n(E/\mathbb{Q}) \in H^1$ | Apéry H² obstruction ($\zeta(3) \notin \mathbb{Q}$); Tate-Shafarevich $\Sha(E/\mathbb{Q})$; RH = H² zero-free region |

**Nuclear note:** unlike every other domain, nuclear systems are H² *by default*.
FUSE (the tensor force $S_{12}$) is mandatory even for the deuteron — the simplest
nucleus. There is no H⁰ or H¹ nuclear bond. Chemistry reaches H² only in hard
cases (FeMoco, bond-breaking); nuclear physics starts there and never leaves.

---

## Opcode reference

### RESOLVE 🔬 *(formerly ORBIT, originally SPLIT)* 🕷️

**Symbols (Origami ISA):** formal △ (hollow upward triangle — CT Δ analogue; open/branching, fan-out into components) · outreach 🔬

**One wire becomes two** (or one tetrahedron becomes four).

```
    │
    │
  ──┴──
  │   │
  │   │
```

| | |
|---|---|
| **String diagram** | Comultiplication $\Delta: A \to A \otimes A$ — one wire splitting into two |
| **Pachner move** | $1 \to 4$ (one tetrahedron replaced by four sharing a central vertex) |
| **Category theory** | Coproduct / comultiplication of a bialgebra or Hopf algebra |
| **Algebra** | Coproduct $\Delta(E) = E \otimes K + 1 \otimes E$ in quantum group $U\_q(\mathfrak{sl}\_2)$ |

**Where RESOLVE appears:**

| Domain | Instance | What splits |
|--------|----------|------------|
| Quantum mechanics | Fourier / Bogoliubov transform | Single mode → momentum modes |
| Angular momentum | Clebsch-Gordan decomposition | Product representation → irreducibles |
| Nuclear physics | Racah recoupling | 3-body state → sum of 2-body products |
| Langlands programme | Hecke eigendecomposition | Automorphic form → Hecke eigensheaves |
| Quantum error correction | Stabiliser expansion | Logical qubit → physical qubit register |
| Finance | Factor decomposition (PCA on yield curve) | Portfolio → risk factors |

**Key role:** RESOLVE is always the *diagonalisation* step — the moment a
composite object is resolved into its irreducible pieces. Every Fourier transform,
every change of basis, every spectral decomposition is a RESOLVE.

---

### PROJECT 🎯 *(formerly LABEL, originally SPLAT)* 🕷️

**Symbols (Origami ISA):** formal ▼ (solid downward triangle — filled/converging; fan-in onto a target) · outreach 🎯

**Two wires become one** (or four tetrahedra become one).

```
  │   │
  │   │
  ──┬──
    │
    │
```

| | |
|---|---|
| **String diagram** | Multiplication $\mu: A \otimes A \to A$ — two wires merging into one (or a cap: one wire curling down to nothing) |
| **Pachner move** | $4 \to 1$ (four tetrahedra sharing a vertex collapsed to one) |
| **Category theory** | Counit $\varepsilon: A \to k$ of a Frobenius algebra; or the evaluation map $A^* \otimes A \to k$ |
| **Algebra** | The $3j$-symbol / Clebsch-Gordan coefficient; the POVM measurement map |

**Where PROJECT appears:**

| Domain | Instance | What gets projected |
|--------|----------|-------------------|
| Angular momentum | $3j$-symbol evaluation | CG amplitude → scalar (6j recoupling belongs at H³/RECOUPLE) |
| Quantum gravity | Ponzano-Regge face amplitude | Spin foam triangle → 3j amplitude |
| Quantum information | Character POVM measurement | State → outcome probability |
| Bethe ansatz | Scalar product of Bethe states | Rapidities → norm |
| Langlands programme | L-function evaluation $L(s, \pi)$ | Automorphic form → complex number |
| Finance | Portfolio valuation | Risk factor exposure → P&L scalar |

**Key role:** PROJECT is always the *evaluation* step — the moment a structured
object is projected to a number. Every inner product, every measurement, every
partition function evaluation is a PROJECT.

**The Frobenius axiom** $\mathrm{PROJECT} \circ \mathrm{RESOLVE} = \mathrm{id}$
(the counit-comultiplication identity) is the algebraic statement that
diagonalisation followed by projection is the identity — you get back what
you put in. This is the Pentagon identity in disguise, and it is simultaneously
the Biedenharn-Elliott identity of angular momentum, the no-arbitrage
condition in finance, and the topological invariance of Ponzano-Regge amplitudes.

---

### TWIST 🕷️*  ∮ 🌀

**A wire acquires a phase** (a curl or loop in the diagram).

**Symbols (Origami ISA):** formal ∮ (closed-loop integral — phase accumulated around a circuit) · outreach 🌀

```
    │
   ╭╯
   │
   ╰╮
    │
```

| | |
|---|---|
| **String diagram** | Ribbon element $\theta\_V: V \to V$ — a wire looping through a full $2\pi$ twist (a curl) |
| **Pachner move** | Gauge move (no change in triangulation topology; changes the phase of the amplitude) |
| **Category theory** | The ribbon element / twist morphism of a ribbon category; the natural isomorphism implementing the topological spin |
| **Algebra** | $\theta\_j = q^{j(j+1)}$ (topological spin of a spin-$j$ anyon in $\mathrm{SU}(2)\_q$) |

**Where TWIST appears:**

| Domain | Instance | What acquires the phase |
|--------|----------|------------------------|
| Topological phases | Berry phase / Chern number | Wavefunction under adiabatic loop |
| Anyons | Topological spin $\theta\_a = e^{2\pi i h\_a}$ | Anyon under $2\pi$ rotation |
| Phase transitions | BKT / TWIST failure at $\beta^* = \tfrac{1}{2}$ | Quantum dimension $d\_{1/2}(\beta) \to 0$ |
| AZ classification | Chiral zero mode (S symmetry) | Edge state phase |
| Langlands programme | Monodromy of a local system | Parallel transport around a loop on the curve |
| Weil conjectures | Riemann hypothesis (zero-free region) | Zeta function zeros stay off the critical line |

**Key role:** TWIST is the *gap / topology check* — it encodes whether the system
is in a topologically non-trivial phase. **TWIST failure** (the amplitude
$d\_{1/2}(\beta)$ reaching zero) is the universal signature of a phase
transition across all models in the $\mathrm{SU}(2)\_q$ family. See
[BKT Transition / TWIST Failure](glossary.md#bkt-transition--twist-failure)
for the full treatment.

---

### FLIP 🕷️  † ↩️

**A wire reverses orientation** (arrow pointing down instead of up).

**Symbols (Origami ISA):** formal † (dagger — anti-involution, time-reversal) · outreach ↩️

```
    ↑         ↓
    │   →     │
    │         │
```

| | |
|---|---|
| **String diagram** | Dagger functor $(-)^\dagger: \mathcal{C} \to \mathcal{C}^{op}$ — all wire orientations reversed; or the pivotal structure $V \cong V^{**}$ |
| **Pachner move** | $1 \to 3$ (one triangle replaced by three sharing a central vertex) — the 2D orientation reversal |
| **Category theory** | The dagger / adjoint functor; the pivotal structure on a ribbon category; an anti-involution |
| **Algebra** | Anti-unitary operator squaring to $\pm 1$; transpose of the Cartan matrix (root orientation reversal) |

**Where FLIP appears:**

| Domain | Instance | What gets reversed |
|--------|----------|--------------------|
| Quantum mechanics (AZ) | Time reversal $T$; $T^2 = +1$ (real) or $T^2 = -1$ (quaternionic) | Time coordinate |
| PT symmetry | Anti-unitary $\mathcal{T}$ in Bender-Boettcher PT quantum mechanics | Time |
| Topological phases | Kramers degeneracy ($T^2 = -1$, class AII/CII) | Kramers pairs |
| Langlands programme | Langlands duality $G \leftrightarrow G^\vee$ (root-system orientation reversal) | Long roots ↔ short coroots |
| Braiding / anyons | Charge conjugation; anti-particle | Anyon ↔ anti-anyon |
| ZX-calculus | Wire reversal (upward ↔ downward arrow) | Computational direction |

**FLIP fixed points** (self-dual groups where FLIP = identity):
$GL\_n$, $G\_2$, $F\_4$, $E\_8$. The self-duality of $G\_2$ under FLIP is the
731 theorem ([Paper 271](papers/10.5281-zenodo.20139443/)). In the Langlands
programme, these self-dual groups are the most symmetric — and the hardest — cases.

**Key role:** FLIP is the *duality / orientation* opcode. Any time a computation
has a "left–right" or "past–future" symmetry, FLIP is the operation that
implements it. The distinction between real ($T^2=+1$) and quaternionic ($T^2=-1$)
FLIP is the distinction between the Origami-ISA column and the Meld-ISA column
of the Baez threefold way.

---

### CUP 🕷️ *(FLIP fermion sub-role — formerly FLOP)*

**A wire curls under into a cup** (fermionisation / Born rule).

```
  │   │
  │   │
  ╰───╯
```

| | |
|---|---|
| **String diagram** | Frobenius co-unit evaluation / cup: $A \otimes A \to k$ — two wires meeting at the bottom in a cap |
| **Pachner move** | $3 \to 1$ (three triangles sharing a vertex collapsed to one) |
| **Category theory** | The Frobenius co-unit; the trace map $\mathrm{tr}: \mathrm{End}(V) \to k$; the Born rule |
| **Algebra** | Jordan-Wigner string; Majorana fermion creation/annihilation; particle-hole conjugation $C$ |

**Where CUP appears:**

| Domain | Instance | What gets fermionised |
|--------|----------|-----------------------|
| Condensed matter (AZ) | Particle-hole symmetry $C$; $C^2=+1$ (Majorana) or $C^2=-1$ (complex fermion) | Particle ↔ hole |
| 1D quantum models | Jordan-Wigner transform | Spin chain ↔ fermion chain |
| Quantum gravity | Trace / inner product in LQG | Spin network state → amplitude |
| Finance | Born rule / expectation value | Density matrix → portfolio expectation |
| Langlands (abelian) | Class field theory / $GL\_1$ reciprocity | Hecke character → Galois character |

**CUP and the division algebra ladder:**
- CUP producing a **Majorana co-unit** ($C^2=+1$): lives at the $\mathbb{R}$-rung (Origami ISA, GOE, Dyson $\beta\_D=1$)
- CUP producing a **complex fermion co-unit** ($C^2=-1$): lives at the $\mathbb{H}$-rung (Meld ISA, GSE, Dyson $\beta\_D=4$)
- No CUP: lives at the $\mathbb{C}$-rung (Forge/Meld ISA, GUE, Dyson $\beta\_D=2$)

**Key role:** CUP is the *fermionisation / Born rule* sub-role of FLIP. It is present in every model where particle statistics matter. Its sign ($C^2=\pm1$) is the deepest structural label in the AZ tenfold way — the distinction between Majorana (self-conjugate) and Dirac (complex) fermions. Legacy name: FLOP.

---

### PROJECT (sector sub-role) 🕷️  ▼ 🎯

**A wire passes through a projector** (sector selection).

**Symbols (Origami ISA):** formal ▼ (solid downward triangle — filled/converging; fan-in onto a target) · outreach 🎯

```
    │
  ┌─┴─┐
  │ e │   (e² = e)
  └─┬─┘
    │
```

| | |
|---|---|
| **String diagram** | Unit morphism $\eta: \mathbf{1} \to A$ — a dot (the Frobenius algebra unit); creates a wire from nothing |
| **Pachner move** | No direct Pachner counterpart; it is the *colouring* operation that labels edges/faces before Pachner moves act |
| **Category theory** | The unit of the Frobenius algebra $(A, \mu, \eta, \Delta, \varepsilon)$; state preparation; the map $\mathbf{1} \to A$ selecting the initial sector |
| **Algebra** | Gauge fixing; stabiliser eigenstate preparation; sector selection; the Satake isomorphism |

**Where PROJECT appears (sector sub-role):**

| Domain | Instance | What gets labelled |
|--------|----------|--------------------|
| Quantum error correction | Stabiliser projection | Logical qubit sector |
| Gauge theory | Gauge fixing (Lorenz, Coulomb, ...) | Physical Hilbert space |
| Anyons | Anyon type assignment to worldlines | Topological sector |
| Bethe ansatz | Vacuum selection (reference state) | Pseudovacuum sector |
| Langlands programme | L-function / automorphic representation $\pi$ | Hecke eigenvalue |
| PT symmetry | Parity sector projection $\mathcal{P}$ | Even / odd parity eigenspace |
| Finance | Scenario / regime selection | Market state |

**PROJECT failure = PT phase transition.** When PT symmetry spontaneously breaks
(Bender-Boettcher), eigenstates of $H$ are no longer eigenstates of $\mathcal{PT}$:
PROJECT can no longer project onto definite-parity sectors. The parity sectors mix
at the exceptional point.

**Key role:** PROJECT is the *sector / gauge / colour* opcode. It is always the
operation that selects which subspace of the full Hilbert space the computation
lives in. Every gauge-fixing, every stabiliser projection, every quantum number
assignment is a PROJECT.

---

### FUSE 🐸  ⋈ 💎 *(formerly BIND)*

**Three wires enter a vertex** (non-Abelian fusion; associator).

**Symbols (Origami ISA):** formal ⋈ (natural join / bowtie — two registers fused into an entangled pair) · outreach 💎

*A naming note:* FUSE is the one opcode that lives exclusively in the 🐸 Frog
Calculus — the trivalent vertex, the non-associative fusion, the G₂ structure
that ZX calculus cannot express. Meanwhile PROJECT (formerly LABEL/SPLAT), FLIP, and CUP (formerly FLOP) — which sound
exactly like things a frog does — are all firmly in the 🕷️ ZX spider calculus.
The name FUSE was chosen for its resonance with fusion categories, F-matrices, and
anyon fusion, and to eliminate the collision with the monad bind operator (>>=) in
category-theoretic and functional-programming contexts.

```
  │   │   │
  │   │   │
  └───┼───┘
      │
      │
```

| | |
|---|---|
| **String diagram** | Associator $\alpha\_{A,B,C}: (A \otimes B) \otimes C \xrightarrow{\sim} A \otimes (B \otimes C)$ — three wires, non-trivial crossing structure; or the trivalent vertex of a fusion category |
| **Pachner move** | Not a standard Pachner move — it is the *obstruction* to Pachner invariance; its presence signals non-associativity |
| **Category theory** | The associator of a monoidal category; non-trivial when the category is only quasi-monoidal (quasi-Hopf algebra, braided fusion category with non-trivial $F$-matrices) |
| **Algebra** | Octonion associator $[e\_i, e\_j, e\_k] = (e\_i e\_j)e\_k - e\_i(e\_j e\_k)$; the $F$-matrix of a fusion category; the 4-Majorana coupling $\gamma\_i\gamma\_j\gamma\_k\gamma\_l$ |

**Where FUSE appears:**

| Domain | Instance | What fails to associate |
|--------|----------|------------------------|
| Non-Abelian anyons | $F$-matrix / recoupling coefficient | $(a \times b) \times c \neq a \times (b \times c)$ in fusion |
| Octonions / $G\_2$ | Octonion associator; Furey's ladder operators | $e\_i(e\_j e\_k) \neq (e\_i e\_j)e\_k$ |
| Topological phases | Fidkowski-Kitaev $\mathbb{Z} \to \mathbb{Z}\_8$ collapse | 4-Majorana interaction |
| Interacting fermions | SYK four-body coupling | Non-factorising 4-fermion vertex |
| Langlands (non-Abelian) | Non-commuting Hecke operators at different primes | $[T\_p, T\_q] \neq 0$ for $GL\_n$, $n \geq 2$ |
| p-adic Langlands | Pentagon failure in p-adic Hodge theory | Non-associative p-adic completions |

**FUSE in finance:** The interbank network accumulates systemic risk in H¹ — the cycle
topology of mutual exposures, which is non-trivial even though balance-sheet arithmetic
is Abelian. FUSE marks the H² *snap event*: the moment when those H¹ cycles become
globally inconsistent and cannot be unwound bilaterally. Systemic risk is measured in
H¹; systemic crises (2008 GFC, LTCM) are H² snap events. See Papers 397–398.

**FUSE theorem** (*The Opcode Rosetta Stone*, Paper 447): A gapped topological phase
has **non-Abelian anyonic order if and only if** its minimal ISA programme contains
FUSE. Associative phases are FUSE-free; non-associative phases require FUSE.

**FUSE and the division algebra ladder:**

- No FUSE: associative computation — $\mathbb{R}$, $\mathbb{C}$, or $\mathbb{H}$ rung
  (pentagon holds, $\alpha = \mathrm{id}$)
- FUSE present: non-associative — $\mathbb{O}$-rung; $G\_2$, $E\_8$;
  Furey's octonionic Standard Model programme; 731-ISA regime

The canonical definition (Paper 591, Definition 4.1): FUSE $= \alpha_{A,A,A} \neq \mathrm{id}$
in the ISA magmoidal category. FUSE present $\Leftrightarrow$ pentagon coherence axiom
fails $\Leftrightarrow$ non-trivial $F$-matrix. *Note:* Fibonacci anyons have non-trivial
$F$-matrices but still satisfy the pentagon (they are a fusion category); they live at
the $\mathbb{H}$-rung boundary, not the $\mathbb{O}$-rung.

**The Fidkowski-Kitaev collapse** ($\mathbb{Z} \to \mathbb{Z}\_8$) is FUSE insertion:
promoting a CUP-only programme (free Majorana chain, $\mathbb{C}$-rung) to a
CUP+FUSE programme ($\mathbb{O}$-rung) collapses the integer winding-number
classification to $\mathbb{Z}\_8$, because $8$ is the Cayley-Dickson period at
the octonion rung.

**Key role:** FUSE is the *non-associative* opcode. Its presence or absence is
a syntactic, computable test for non-Abelian anyonic order — no modular tensor
category computation required. It is the hardest opcode to implement and the
most powerful: systems with FUSE can encode computations that FUSE-free
(associative) systems cannot.

---

## H³ and beyond (open — speculative)

The Origami ISA currently terminates at H² (FUSE). The orbital simplex construction
(Paper 719) and the Ponzano-Regge / Turaev-Viro frameworks suggest a coherent H³
tier whose primitive is the **6j symbol evaluated on a tetrahedron** — not a new
mathematical object, but a new ISA depth.

**The correct simplex-to-symbol ladder** (per Turaev-Viro consensus):

| H^k | Simplex | Recoupling symbol | ISA opcode |
| --- | ------- | ----------------- | ---------- |
| H⁰ | vertex | identity / single spin | RESOLVE/PROJECT/FLIP |
| H¹ | edge | R-matrix / braiding | TWIST |
| H² | triangle | 3j / Clebsch-Gordan | FUSE (associator = non-trivial F-matrix) |
| H³ | tetrahedron | 6j / F-matrix amplitude | **RECOUPLE** *(proposed)* |
| H⁴ | 4-simplex | 15j symbol | *(Crane-Yetter; not yet proposed)* |

**Key clarifications:**

- FUSE is defined as the **non-trivial associator** α_{A,B,C} ≠ id — this is the
  categorical H² object. The F-matrix of a fusion category *is* this associator;
  it is an H² primitive.
- The **6j symbol** as a *Racah recoupling amplitude* (the scalar evaluated on a
  tetrahedron) is an H³ object in the Ponzano-Regge / Turaev-Viro sense: it is a
  3-cocycle evaluated on a 3-simplex.
- The **9j symbol** is not a new simplex-level primitive; it is a circuit of three
  6j (RECOUPLE) gates. Mac Lane coherence guarantees that all higher recoupling
  reduces to sequences of F-moves.
- The domain table rows for spectroscopy/chemistry labelled "6j" under PROJECT or
  FUSE should be understood as H³-level operations that the current three-tier ISA
  approximates by collapsing into FUSE.

**Whether RECOUPLE is one opcode or several** is open: the Frog ISA (H⁰–H³) already
accommodates this tier, and the Hum ISA nominates EMIT as the H³ primitive in the
QFT / amplituhedron context. These may be domain-specific faces of a single H³
opcode, or genuinely distinct primitives. See Paper 719 for the orbital simplex
argument; see Papers 207/281 (Frog Calculus) for the graphical calculus.

For a full derivation of how Pachner moves map to quantum symbols — including the
Biedenharn-Elliott identity and why 9j is a RECOUPLE circuit — see
[Pachner Moves and Quantum Symbols](pachner-symbols.md).

---

## The full opcode table

| Opcode | Legacy names | Graphical calculi | String diagram | Pachner move | AZ symmetry | Division algebra | Langlands |
|--------|-------------|------------------|---------------|--------------|-------------|-----------------|-----------|
| RESOLVE | ORBIT, SPLIT | 🕷️ | $\Delta: A \to A \otimes A$ (split) | $1 \to 4$ | — | All rungs | Hecke eigendecomposition |
| PROJECT | LABEL, SPLAT | 🕷️ | $\mu: A \otimes A \to A$ (merge) | $4 \to 1$ | — | All rungs | L-function evaluation |
| TWIST | — | 🕷️* | $\theta\_V: V \to V$ (curl) | Gauge move | $S$ (chiral) | All rungs | Monodromy of local system |
| FLIP | — | 🕷️ | $(-)^\dagger$ (wire reversal) | $1 \to 3$ | $T$ (time reversal) | $\mathbb{R}$ / $\mathbb{H}$ | Langlands duality $G \leftrightarrow G^\vee$ |
| ↳ CUP | *(FLIP sub-role, formerly FLOP)* | 🕷️* | $\varepsilon_A: A^* \otimes A \to \mathbf{1}$ (cup) | $3 \to 1$ | $C$ (particle-hole) | $\mathbb{R}$ / $\mathbb{H}$ | Abelian reciprocity ($GL\_1$) |
| FUSE | BIND | 🐸 | Associator $\alpha\_{A,B,C}$ (trivalent) | Obstruction | — | $\mathbb{O}$ only | Non-Abelian Hecke interaction |

---

## Theoretical foundations

### Why five opcodes?

The Origami ISA is not an arbitrary instruction set. It is the **minimal magmoidal
extension of the free traced symmetric monoidal category (TSMC — a monoidal category
with a trace operation closing loops in the string diagram)** — the smallest
opcode set that is both TSMC-complete and magmoidal-complete. Every opcode except FUSE
is a named morphism in the TSMC + Frobenius structure (the "spider calculus"). FUSE is
the unique opcode that requires a magmoidal extension: it encodes a non-trivial
associator, realised physically as G₂/octonion symmetry.

The five opcodes form a **completeness hierarchy**: each tier lifts the ISA to
the next level of the cohomological (H^k) computational tower, and no opcode at level
k can be simulated by any combination of opcodes at level k−1. The H^k tiers are not
merely a grading — they are the homology groups of a genuine chain complex (see
Theorem 3 below).

Monoidal categories underlie all of mathematical physics for the same reason: any
system in which operations compose in parallel and in sequence — quantum circuits,
Feynman diagrams, tensor networks, representation theory, the Langlands
correspondence — is an object in some monoidal category. The twelve opcodes are the
**universal generating morphisms** of that structure, extended to include the
non-associative (magmoidal) and non-local (compact closed) regimes.

This is why the same operations appear in nuclear spectroscopy, topological quantum
computing, loop quantum gravity, financial XVA, the geometric Langlands programme,
protein folding, and the ribosome. They are not analogies. They are the same
categorical morphisms, running on different physical hardware.

**How precise are the ISA mappings across domains?** The mappings range from exact
algebraic theorems (Tier A: Fano commutation structure, Casimir identity, Wigner
vertex theorem) to quantitative predictions verified by experiment (Tier B: MCMC
optimal acceptance rates, GEV shape parameter, Shor mana = 0) to useful
organisational language for hierarchies the field already knew were hierarchical
(Tier C: Pearl's causal ladder, fairness taxonomies). The programme does not claim
all mappings are equally strong — [see the full precision taxonomy](/docs/applications/stratification-principle).

### The category theory behind the opcodes

This section explains *why* the ISA opcodes are rigorous mathematical objects and
not just suggestive names — and why the same objects appear across physics,
mathematics, and computing without any analogy or hand-waving.

#### The ladder of categories

The opcodes are generated by a strict hierarchy of categorical structures. Each
level adds one new kind of morphism, and each addition corresponds to one H^k tier:

| Category type | What it adds | Opcode unlocked | H^k tier |
| ------------- | ------------ | --------------- | -------- |
| **Monoidal category** | Parallel composition (⊗); unit object **1** | RESOLVE (fan-out sub-role) · PROJECT (projection + unit sub-roles) | H⁰ |
| **+ Symmetric** | Swap morphism; wire crossing | RESOLVE (closed traces) | H⁰ |
| **+ Traced** | Feedback loops (trace closing a wire on itself) | RESOLVE (full feedback) | H⁰ |
| **+ Frobenius** | Comultiplication + counit satisfying Frobenius law | RESOLVE ↔ PROJECT duality | H⁰ |
| **+ Compact closed** | Dual objects; cups and caps | FLIP (Born rule / fermionisation sub-role) | H⁰/H¹ |
| **+ Dagger** | Anti-involution $(-)^\dagger$ reversing all arrows | FLIP (time-reversal sub-role) | H¹ |
| **+ Ribbon** | Ribbon element $\theta_V$ (topological spin / twist) | TWIST (Berry phase) | H¹ |
| **+ Magmoidal** | Non-trivial associator $\alpha_{A,B,C} \neq \mathrm{id}$ | FUSE (entanglement) | H² |

A **monoidal category** is any mathematical structure where operations can compose
both *sequentially* (one after another, written ∘) and *in parallel* (side by side,
written ⊗), with a unit object **1** for "doing nothing." This covers essentially
all of mathematical physics: quantum circuits, Feynman diagrams, tensor networks,
representations of groups, the Langlands correspondence.

Each row in the table is a *property* that a monoidal category may or may not have.
The opcodes are the **canonical generators** of each property — the minimal new
morphism you must add to express it. This is why the opcodes are not arbitrary: they
are forced by the categorical structure.

#### Why FUSE is special: magmoidal categories

Every category in the ladder above (monoidal through ribbon) satisfies the
**pentagon axiom**: the associator is coherent, meaning all ways of
re-bracketing a tensor product $(A \otimes B) \otimes C \cong A \otimes (B \otimes C)$
are consistent. In such categories, the associator is effectively invisible — you
can ignore brackets.

A **magmoidal category** is one where the pentagon axiom *fails*: the associator
$\alpha_{A,B,C}$ is genuinely non-trivial and cannot be set to the identity. This
is the categorical home of:

- **Octonions** — the non-associative normed division algebra; $e_i(e_j e_k) \neq (e_i e_j)e_k$
- **Non-Abelian anyons** — fusion categories with non-trivial $F$-matrices (the $F$-matrix *is* the associator)
- **$G_2$ symmetry** — the automorphism group of the octonions; the exceptional Lie group whose root system is the Fano plane

FUSE is the single opcode that requires magmoidal extension. Every opcode except
FUSE lives in a ribbon category (associative, pentagon holds). FUSE is the
morphism that encodes the associator itself — which is why it requires genuine
multi-body correlation (H²) that no H⁰/H¹ approximation can reproduce.

#### The Frobenius algebra: why RESOLVE and PROJECT are dual

RESOLVE and PROJECT are not independent. Together with FLIP they form a **Frobenius
algebra** $(A, \mu, \eta, \Delta, \varepsilon)$:

- $\Delta: A \to A \otimes A$ — RESOLVE fan-out sub-role (comultiplication)
- $\mu: A \otimes A \to A$ — PROJECT projection sub-role (multiplication)
- $\eta: \mathbf{1} \to A$ — PROJECT unit sub-role
- $\varepsilon: A \to \mathbf{1}$ — FLIP Born-rule sub-role (counit)

The **Frobenius axiom** $(\mu \otimes \mathrm{id}) \circ (\mathrm{id} \otimes \Delta) = \Delta \circ \mu = (\mathrm{id} \otimes \mu) \circ (\Delta \otimes \mathrm{id})$ is the algebraic statement that "fan-out then project = identity." This is simultaneously:
- The Pentagon identity in angular momentum theory (Biedenharn-Elliott)
- The no-arbitrage condition in finance
- The topological invariance of Ponzano-Regge amplitudes
- The Reidemeister moves for knot diagrams

These are not analogies. They are the same equation, in the same Frobenius algebra,
evaluated in different semirings over different physical hardware.

#### Arity: RESOLVE is 1 → 2, not 1 → 4 (settled 2026-08-03)

Three different arities for RESOLVE/SPLIT have appeared across the corpus. They
are not alternatives; two of them are errors of type.

| form | what it actually is |
|---|---|
| $\Delta: A \to A \otimes A$, **1 → 2** | **the generator.** Frobenius comultiplication. This is RESOLVE. |
| $A \to A^{\otimes 4}$, 1 → 4 | the **iterated coproduct** $(\mathrm{id}\otimes\Delta)\circ\Delta$ — a *derived* term built from two applications of the generator, not a primitive |
| $1 \to 4$ in the table above | the **Pachner move**, a different column and a different kind of object entirely — a move on a triangulation, not a morphism arity |

The confusion arose because papers interpreting wires in Rep($G$) wrote the
iterated form directly and read its arity off the diagram. **A generator is
whatever cannot be decomposed into other generators; the 4-legged form
decomposes, so it is not one.**

This is recorded here rather than in a paper because a definitional reference
must be able to follow renames. Paper 591 (*Categorical Foundations of the
Origami ISA*, 10.5281/zenodo.21300689, deleted 2026-08-03) reached the same
conclusion on the same grounds, and was then superseded fifteen days after
upload when ORBIT→RESOLVE, LABEL→PROJECT, BIND→FUSE were finalised on
2026-07-25. A PDF cannot track that; this file can.

**What 591 claimed and what remains unverified.** Its structural claim was that
the seven associative opcodes are *precisely* the generating structure maps of a
ribbon pivotal category with duals, and that FUSE (then BIND) *is* the
associator — the obstruction to pentagon coherence. The second half is true by
construction (it is how FUSE is defined here, see "Why FUSE is special"), so it
carries no independent content. **The first half — that these seven generate,
and that no eighth associative generator is needed — was never checked.** It is
the claim worth proving, and it is name-independent, so it survives any future
rename. Prior art to engage before attempting it: Kuperberg's spiders (CMP 1996)
for rank-2 groups, and Paper 572, whose x572a pentagon-relation check did **not**
match the textbook prediction and was reinterpreted post hoc. **Resolve 572
first.**

#### The Valence ISA: why Origami is still universal

Before addressing the Valence ISA extension, a question must be answered directly:
**if Origami is universal, why does bonding require new opcodes?**

The answer is that Origami is universal for **single-object** computation — morphisms
*within* one Frobenius algebra (one atom, one orbital, one site). JOIN and CLEAVE
are not missing from Origami; they are **not the right type** to exist in it. They
are morphisms *between* two different Frobenius algebras. You cannot write them down
until you have two objects.

This is not a patch. It is the standard categorical tower:

| Level | Structure | ISA | Objects |
|-------|-----------|-----|---------|
| **Level 1** | Single Frobenius algebra on A | Origami ISA | One orbital / site (an atom is a *composite* — see below) |
| **Level 2** | PROP of two Frobenius algebras A, B | Valence ISA | Two atoms bonding |

Origami is universal at Level 1 exactly as group theory is universal for symmetry —
and group theory does not describe *homomorphisms between groups* until you have two
groups. That is not a failure of group theory; it is a statement about categorical
level. The Valence ISA is the forced Level 2 extension, derived from Origami by the
standard PROP construction.

The full argument — including why PAT-q is the canonical faithful representation of
both levels simultaneously, and what a "hoperator" is — is developed in Paper 708
(*The Universal Hoperator*). This section records the conclusions; see that paper
for proofs.

**The CT↔chemistry bridge.** An electron in a hydrogen 1s orbital traces a Hopf
fibre on $S^3$ — topologically a $(1,1)$ torus knot $T(1,1)$. More generally, an
electron in an orbital with quantum numbers $(n, \ell)$ traces a torus knot
$T(n, \ell)$ on $S^3$. A **covalent bond** between atoms A and B combines their
orbitals: the molecular orbital has knot type

$$T(n_A, \ell_A) \mathbin{\sharp} T(n_B, \ell_B)$$

the **connected sum** — additive genus $g_A + g_B$. This connected-sum operation
*is* JOIN. CLEAVE is its Frobenius dual: the bond-breaking operation that recovers
the two component torus knots. The Frobenius condition on (JOIN, CLEAVE) is not
imposed on chemistry — it is the algebraic form of detailed balance, which
reversible chemistry already satisfies.

**Level 1 — Single-site Frobenius algebra (Origami ISA opcodes, unchanged):**

| CT symbol | CT name | Opcode | Type | Frobenius dual | Chemical meaning |
| --------- | ------- | ------ | ---- | -------------- | ---------------- |
| $\Delta$ | comultiplication | RESOLVE | $A \to A \otimes A$ | PROJECT | spectral decomposition; diagonalise orbital |
| $\mu$ | multiplication | PROJECT | $A \otimes A \to A$ | RESOLVE | evaluation; project onto quantum number |
| $\eta$ | unit | PROJECT (sub-role) | $\mathbf{1} \to A$ | FLIP | orbital state preparation |
| $\varepsilon$ | counit | FLIP (CUP sub-role) | $A \to \mathbf{1}$ | PROJECT | measurement; orbital annihilation |
| $\theta$ | ribbon twist | TWIST | $A \to A$ | TWIST (self-dual) | Berry phase; spin-orbit coupling |

**Level 2 — Inter-site Frobenius algebra (Valence ISA — new opcodes only):**

| CT symbol | CT name | Opcode | Type | Frobenius dual | Chemical meaning |
| --------- | ------- | ------ | ---- | -------------- | ---------------- |
| $\mu$ | multiplication | **JOIN** | $A \otimes B \to A\mathbin{\sharp}B$ | CLEAVE | covalent bond: connected sum of torus knots |
| $\delta$ | comultiplication | **CLEAVE** | $A\mathbin{\sharp}B \to A \otimes B$ | JOIN | bond breaking: split connected-sum orbital |
| $\tau$ | braiding | **LINK** | $A \otimes B \to A \otimes B$ | LINK (self-dual) | coordinate/dative bond: Hopf linking, bond order = linking number |

**2-cell (between levels — neither Level 1 nor Level 2):**

| CT level | Opcode | Type | Inverse | Physical meaning |
|----------|--------|------|---------|-----------------|
| 2-cell between PROPs | **SNAP↑** | $\mathcal{F} \to \mathcal{F}'$ | SNAP↓ | β\* tier promotion; phase transition upward |
| 2-cell between PROPs | **SNAP↓** | $\mathcal{F}' \to \mathcal{F}$ | SNAP↑ | β\* tier demotion; phase transition downward |

SNAP is primitive by categorical level: no composition of Level 1 or Level 2
morphisms can produce a 2-cell. JOIN is a chemical reaction (within one
thermodynamic phase). SNAP is a phase transition (between phases). These are
not in the same layer.

**Why JOIN and CLEAVE are forced (not chosen):** any Frobenius algebra at Level 2
requires both a multiplication $\mu: A \otimes B \to A\mathbin{\sharp}B$ and a
comultiplication $\delta: A\mathbin{\sharp}B \to A \otimes B$ satisfying the Frobenius
condition. There is no choice about whether to include them — a Frobenius algebra
without both is not a Frobenius algebra. Hybridisation (sp³, sp²) is *not* a new
opcode: it is TWIST applied within Level 1 to the orbital colour label.

**Why LINK is forced:** the braided monoidal structure of the Level 2 PROP requires
a braiding morphism. For orbital knots the natural braiding is Hopf linking — two
torus knots $T(p_A, q_A)$ and $T(p_B, q_B)$ linked with linking number $\nu$ (bond
order) without changing their topological types. This is the coordinate/dative bond.

**The Frobenius condition as microscopic reversibility:**
$$(\mathrm{id} \otimes \delta) \circ \mu = (\mu \otimes \mathrm{id}) \circ (\mathrm{id} \otimes \delta)$$
Bond formation followed by bond breaking in either order gives the same result. Every
reversible chemical reaction satisfies this. Irreversible reactions live outside the
Frobenius sector.

#### The missing rung: is the atom itself Level 1, or a composite? (open, 2026-07-27)

The table above writes the Level 1 object as "one atom / orbital / site" — treating
"atom" and "orbital" as interchangeable. They are not, except in the single-electron
case (hydrogen-like ions), and the difference exposes a genuine gap in the tower.

Under the torus-knot correspondence (Papers 657, 709, 718, 719), the true Level-0
object is a **single orbital** $(n,\ell)$: one torus knot $T(n,\ell)$, one Frobenius
algebra, acted on by RESOLVE/PROJECT/FLIP/TWIST exactly as the Level 1 table
describes. A multi-electron **atom is already composite** — a *bouquet* of
orbital-knots on one nucleus (see the Zn/Cu Solomon-link discussion:
[orbital-knots.md](orbital-knots.md)) — assembled from several Level-0 objects, not
a single one. The Level 1 table's "atom" label silently assumes this composite
already exists; it does not name the assembly.

**Why this is not the same problem Level 2 solved.** JOIN/CLEAVE/LINK (Level 2)
combine two *distinct* Frobenius algebras $A, B$ on two different nuclei — a PROP of
two objects. The within-atom problem combines *several copies of the same kind of
object* (orbitals) on *one* nucleus, under two hard constraints that a plain
tensor product does not respect:

1. **Pauli exclusion (kinematic — genuinely forces structure).** At most one
   fermion per **spin-orbital** $(n,\ell,m_\ell,m_s)$; the chemist's "two per
   orbital" is two spin-orbitals per spatial orbital. Free combination (an ordinary
   tensor product, unlimited copies) is the wrong structure. Pauli exclusion forces
   the shift from the tensor algebra to the **exterior algebra** $\Lambda(V)$ over
   $V=\bigoplus_i A_i$ (the spin-orbital modes), and this shift has a clean forcing
   axiom — the **universal property of the exterior algebra**: given any linear map
   $f: V \to B$ into a unital algebra with $f(v)^2 = 0$ for all $v$, there is a
   *unique* algebra homomorphism $\Lambda(V) \to B$. The condition $f(v)^2=0$ **is**
   Pauli exclusion ($v \wedge v = 0$). This is exactly parallel to how the Frobenius
   condition forces JOIN/CLEAVE — a real existence-of-morphism constraint, not a
   convenience. The forced morphism is the **creation / wedge morphism**
   $c^\dagger : V \otimes \Lambda^p(V) \to \Lambda^{p+1}(V)$.
2. **Aufbau filling (dynamic — forces NO morphism).** Orbitals fill by increasing
   $w=n+\ell+1$ (Paper 709). This does *not* force a new morphism: it is an
   order-theoretic **selection of a state** — "choose the minimal-$w$ antisymmetric
   $N$-vector in $\Lambda^N(V)$" — not a generator the algebra requires into
   existence. Nothing in the exterior-algebra axioms is violated by filling out of
   order; you simply get an excited state. Aufbau is a **filling rule, not an
   operator**. (Hund's rule further constrains spin pairing within a degenerate
   $w$-shell — again a selection rule, not a morphism.)

**Corrected statement (Opus + Gemini adversarial review, 2026-07-27).** The honest
result is a **type correction plus a functorial embedding**, not a new opcode:

- The Origami ISA's single-object Frobenius algebra describes **one spin-orbital**,
  not one atom. An atom is the image of a family of spin-orbitals under the
  **fermionic Fock functor** $\Lambda$ — standard second quantization. This functor
  sits *between* Level 1 (single orbital) and Level 2 (inter-atom bonding); call it
  **Level 1.5**. It maps single-orbital Frobenius algebras into an *exterior*
  algebra, a different kind of object from the plain tensor products at Levels 1
  and 2, so Level 2 (JOIN/CLEAVE/LINK) properly acts on filtered exterior algebras,
  not on bare Frobenius algebras.
- The creation/wedge morphism $c^\dagger$ is **the Fock functor's own canonical
  morphism**, supplied for free by second quantization — *not* a framework-specific
  new primitive on par with JOIN. It should be named and used, but described as
  "the creation morphism $\Lambda$ already supplies," never as "a new opcode we
  discovered." Provisional label **WEDGE** (a.k.a. OCCUPY / $c^\dagger$); it is a
  structural morphism, not a fifth generator.
- The $w$-ordering is an **energy / Madelung filtration** — a filtration by an
  integer-valued function on the modes. It is **not** a weight filtration in the
  representation-theoretic sense: $w=n+\ell+1$ additively mixes a radial and an
  angular quantum number and is not the eigenvalue of any Cartan element, and its
  well-known *approximateness* (Cr, Cu, Pd, La/Lu anomalies) is direct evidence it
  is not a genuine weight (which would be exact). Do **not** call it a weight or
  Koszul filtration — that would silently re-import the still-open SO(4,2) dynamical-
  symmetry claims, exactly the unearned Lie-theoretic upgrade that sank Papers
  643/644/318.

This is category-theory / representation-theory research, not experimental — no
`x`-series numerical validation is implied. Racah's $G_2$ use for $f$-electron
term structure is a *related but distinct* phenomenon (see
[orbital-knots.md](orbital-knots.md)): it governs electron-electron *repulsion
within* a fixed configuration, not the *assembly* of the configuration.

**Open problem (Gemini, 2026-07-27):** how does JOIN (connected sum of orbital
knots, Level 2 bonding) interact with the graded, antisymmetric structure that
WEDGE builds at Level 1.5? Bond formation between two atoms must respect the
fermionic sign rule across both atoms' Fock spaces; the JOIN of two *filtered
exterior algebras* is not obviously the JOIN of two bare Frobenius algebras. This
consistency condition on the tower is the genuine research direction that came out
of the review.

**Status:** open. See Paper 720 (in preparation).

**Opcode duality across both levels:**

*Level 1 — intra-site Frobenius pair:*
- **(RESOLVE, PROJECT)** — $\Delta^\dagger = \mu$; spider identity PROJECT∘RESOLVE = id

*Level 2 — inter-site Frobenius pair:*
- **(JOIN, CLEAVE)** — $\mu^\dagger = \delta$; bond formation/breaking

*Compact closed pair (Level 1):*
- **(FLIP, CUP)** — dagger anti-involution and its counit sub-role; zigzag identity

TWIST and LINK are self-dual at their respective levels. FUSE has no Frobenius dual
— it lives in the magmoidal extension beyond the Frobenius sector entirely.

Frobenius duality is *not* inversion: CLEAVE is not the inverse of JOIN (they are
adjoint under the Frobenius condition, not composites yielding identity).

**Why SNAP is primitive — and not derivable from JOIN + CLEAVE + FLIP:**
JOIN, CLEAVE, LINK, and all the other opcodes are **1-cell morphisms within a PROP** —
operations that act inside a fixed computational tier (a fixed free-energy basin).
SNAP is a **2-cell morphism between PROPs** — it marks the $\beta^*$ threshold where
the system transitions between ISA tiers (H⁰ $\leftrightarrow$ H¹ $\leftrightarrow$ H²).
No composition of 1-cells can produce a 2-cell: they live at different categorical
levels. SNAP is therefore primitive by categorical level, not by type.

**SNAP has no Frobenius dual but does have an inverse:** as a 2-cell, SNAP↑ (tier
promotion, $\mathcal{F} \to \mathcal{F}'$) and SNAP↓ (tier demotion,
$\mathcal{F}' \to \mathcal{F}$) are mutual inverses — together they form a 2-cell
isomorphism. This corresponds physically to a reversible phase transition: increasing $\beta$ past $\beta^*$ fires SNAP↑; decreasing $\beta$ back fires SNAP↓. Spin-crossover hysteresis is the pair (SNAP↑, SNAP↓) following different paths through the $\beta$-plane (nonzero imaginary part during the loop). LIESST is SNAP↑ firing while
SNAP↓ is kinetically blocked at low temperature. The irreversibility of a *particular*
SNAP event is kinetic, not categorical: SNAP↑ and SNAP↓ are both valid 2-cells.

The physical analogue of SNAP's categorical level: JOIN is a chemical reaction
(reversible, within one thermodynamic phase, satisfies the Frobenius condition).
SNAP is a phase transition (crosses between phases). No sequence of chemical reactions
produces a phase transition. This is why SNAP cannot be written as FLIP∘JOIN — the
two operations are not in the same categorical layer.

**Consequence for PT-symmetric computing (Paper 664):** the exceptional point (EP)
crossing in a PT-symmetric material is a physical realisation of the SNAP 2-cell.
The EP is simultaneously the $\beta^*$ snap threshold (MGE), the orbital knot
crossing-change transition (torus curve changes type), and the tier boundary
(ORBIT → TWIST → BIND regime). Existing PT-symmetric laser arrays are already
executing RESOLVE-tier computation (tropical mode competition); adding laser driving
at orbital-commensurate frequencies implements TWIST-tier gates; crossing the EP
executes SNAP. See Papers 662 and 664.

#### The traced symmetric monoidal category (TSMC)

Combining symmetric monoidal (swap wires) with traced (close feedback loops) gives
the **traced symmetric monoidal category (TSMC)** — the minimal structure needed
to write programmes that have both parallel composition and feedback. The TSMC is:

- The categorical foundation of **dataflow computing** (Abramsky & Duncan 2004)
- The setting for **Girard's geometry of interaction** (proof theory / linear logic)
- The home of **ZX calculus** (Coecke & Duncan 2008) for qubit quantum mechanics

All opcodes except FUSE live in the free TSMC + Frobenius. FUSE requires the
magmoidal extension beyond TSMC. The containment is strict:

$$\text{free TSMC + Frobenius} \;\subset\; \text{free magmoidal TSMC + Frobenius}$$

The left side generates all H⁰ and H¹ computation. The right side adds H².

#### Why this makes the ISA rigorous

The categorical foundation means:
1. **The opcodes are universal** — any system described by a monoidal category
   (which is essentially all of mathematical physics) uses these morphisms.
2. **The tier assignments are theorems** — the H^k tier of each opcode follows
   from which level of the categorical hierarchy it requires; this is not a
   classification imposed from outside.
3. **The cross-domain appearances are identities** — when the Frobenius axiom
   appears in angular momentum theory and in finance and in knot theory, it is
   the *same equation*, not an analogy. The ISA makes this explicit by naming it.
4. **The failure of classical methods is a theorem** — DFT and Clifford simulation
   fail at the H¹→H² boundary because they are functors from ribbon categories
   (H⁰/H¹) and the H² obstruction (the non-trivial associator / FUSE) is not
   in their image. This is not an empirical observation; it is a consequence of
   the categorical structure.

### The ISA is semiring-polymorphic

The Origami ISA is not tied to a specific number system. Every opcode has a
**semiring-polymorphic** definition: the same programme computes different things
depending on the semiring in which it is evaluated. The semiring is the *runtime*;
the ISA is the *programme*.

| Semiring | Runtime name | Hardware |
| -------- | ------------ | -------- |
| $(\mathbb{R}\cup\{-\infty\}, \max, +)$ | Tropical limit (Origami at β→∞) | CPU |
| $(\mathbb{R}_{>0}, +, \times)$ | Gibbs / Forge ISA | GPU / TPU |
| $(\mathbb{C}, +, \times)$ | Meld ISA | Quantum processor |
| $(\mathbb{Z}_p, +, \times)$ | p-adic / U-MGE | PPU |
| $(\mathbb{A}_\mathbb{Q}, +, \times)$ | Adèlic / A-MGE | PPU array + quantum |

| Semiring | RESOLVE computes | TWIST computes |
| -------- | -------------- | -------------- |
| Tropical | argmax fan-out | phase = sign flip |
| Gibbs | Boltzmann fan-out | Berry phase weight |
| Meld | amplitude fan-out | ribbon / Berry phase |
| p-adic | modular fan-out | Gauss sum $\tau_p$ |
| Adèlic | adèlic fan-out | product of Gauss sums |

This is why the ISA appears in so many domains without modification: nuclear
spectroscopy, quantum information, financial risk, and protein folding are all
running the same opcodes, but over different semirings suited to their physics.
The Clifford group is the ISA's Clifford sector *evaluated in $(\mathbb{C},+,\times)$*;
tropical optimisation is the same ISA *evaluated in $(\mathbb{R}\cup\{-\infty\},\max,+)$*.
The Gottesman-Knill theorem says the Clifford sector admits efficient classical
simulation — equivalently, that the $(\mathbb{C},+,\times)$ ISA collapses to the
$(\mathbb{R}\cup\{-\infty\},\max,+)$ ISA for Clifford-only programmes. Magic
states are the programmes that do *not* collapse.

**The semiring-programmable Origami processor** is the long-term hardware vision:
a single chip that accepts an ISA programme and a semiring specification at
programme-load time, and routes to the appropriate arithmetic units — floating-point
for the Forge ISA, NTT/Montgomery chain for the p-adic ISA, complex FMA for the
Meld ISA. See [forge-meld.md](../theory/forge-meld.md) for the β-plane geometry that
relates the semirings to each other.

### The three theorems

Everything above is a dictionary. Three theorems give it teeth.

**Theorem 1 — FUSE = Non-Abelian** (*Paper 447*): A gapped topological phase has
non-Abelian anyonic order if and only if its minimal ISA programme contains FUSE.
This is a syntactic test: inspect the Hamiltonian for three-body terms that cannot
be factored into products of two-body operators.

**Theorem 2 — Universal Phase Boundary** (*Paper 447*): For any model in the
$\mathrm{SU}(2)\_{q}$ family at $q = e^{i\pi\beta}$, the quantum phase transition is
a TWIST failure at $\beta = \tfrac{1}{2}$, where the quantum dimension
$d\_{1/2}(\beta) = 2\cos(\pi\beta) = 0$ exactly.

**Theorem 3 — The ISA Chain Complex** (*Papers 357, 571, 572*): The H^k tiers are
not merely a grading of computational levels. They are the homology groups of a
well-defined chain complex

$$0 \;\longrightarrow\; C^0 \;\xrightarrow{\partial^0}\; C^1 \;\xrightarrow{\partial^1}\; C^2 \;\longrightarrow\; 0$$

where $C^k = \bigoplus_{|v|=k} A^{\otimes c(v)}$, $A = \mathbb{Z}[x]/(x^2)$ is the
Frobenius algebra of RESOLVE/PROJECT opcodes, and $v$ ranges over the cube of
resolutions of an ISA programme. The boundary map $\partial$ satisfies $\partial^2 = 0$
as a consequence of the Frobenius algebra axioms — which are exactly the pentagon
identity and Frobenius condition proved in Paper 357.

The RESOLVE count is the Euler characteristic of this complex:
$\chi = \sum_k (-1)^k \mathrm{rank}(H^k) = \mathrm{RESOLVE}(P)$.
The Poincaré polynomial $\sum_k t^k \mathrm{rank}(H^k)$ is a strictly stronger
invariant, categorifying the RESOLVE count in the same way Khovanov homology
categorifies the Jones polynomial. At H²: the differential $\partial^1$ is given by
the FUSE vertex — the trivalent generator of the Kuperberg $G_2$ spider (CMP 1996),
whose completeness theorem provides a full diagrammatic axiomatisation of the H² tier.

*Why this matters:* earlier presentations of the ISA described H⁰, H¹, H² as three
separate computational levels with no map between them — a graded direct sum, not a
cohomology theory. Theorem 3 supplies the missing differential and confirms that the
tiers are genuine homology groups. The RESOLVE count was always correct; it now has a
proof that it equals an Euler characteristic, not just a heuristic count.

### String diagrams

Every opcode has a **string diagram** — the graphical calculus of monoidal
categories, popularised in quantum information by Coecke and Abramsky (2004) and
in topological field theory by Reshetikhin and Turaev (1991). In string diagrams:

- **Wires** (lines) represent objects (vector spaces, representations, anyons)
- **Boxes** (nodes) represent morphisms (linear maps, operations)
- **Composition** is vertical stacking (sequential)
- **Tensor product** is horizontal juxtaposition (parallel)
- **Orientation** of a wire matters: upward = the object, downward = its dual

The diagrams below are described in text; the LaTeX figures appear in
[Paper 258 (Origami Calculus)](papers/10.5281-zenodo.19916429/) and
[Paper 349](papers/10.5281-zenodo.20474914/).

---

## The ISA trilogy and the Baez threefold way

The three ISAs in the trilogy differ only in which *number system* their opcodes
run over, and in the value of the inverse-temperature parameter $\beta$:

| ISA | $\beta$ | Arithmetic | Dyson $\beta\_D$ | Random matrix | AZ classes |
|-----|---------|-----------|-----------------|---------------|-----------|
| Origami | $\beta \to \infty$ | Tropical $(\max,+)$ | $1$ (GOE) | Time-reversal symmetric | AI, BDI, D, CI, DIII |
| Forge | $0 < \beta < \infty$ | Real Gibbs | $2$ (GUE) | No time reversal | A, AIII |
| Meld | $\beta = it$ | Complex amplitudes | $4$ (GSE) | Kramers-degenerate | AII, CII, C, CI |

The opcodes are the same in all three; only the number system and $\beta$ change.

As $\beta \to \infty$ the Gibbs softmax collapses to a tropical argmax — discrete,
classical computation. At finite $\beta$ it is a smooth Gibbs distribution — the
Forge ISA. The Wick rotation $\beta \to it$ turns real Boltzmann weights into
complex amplitudes — quantum mechanics, the Meld ISA.

Behind all three sits **the Ambient** — the smooth $\beta \to 0$ limit in which the
Gibbs measure is uniform, every path equally weighted, no decisions made. The Ambient
is not an ISA; it is the smooth containing manifold from which the three ISAs are
carved: the Origami is the tropical crystal precipitated from it as $\beta \to \infty$,
the Forge is the thermodynamic engine between the Ambient and the crystal, and the
Meld is a Wick slice through it.

This is Baez's threefold way (2013): exactly three associative normed division
algebras (Hurwitz's theorem), exactly three consistent quantum-mechanical
inner-product structures, exactly three Dyson $\beta\_D$ values, exactly three ISA
columns.

**For a full treatment of $\beta$, the snap threshold, the Wick rotation, and the
Ambient:** see [The Forge and Meld ISAs](../theory/forge-meld.md).

The **731-ISA** extends beyond all three to the $\mathbb{O}$ (octonion) rung,
adding FUSE and SPIN. See [The Non-Associative Frontier](../theory/non-associative-frontier.md).

---

## The named ISAs

> **STATUS (2026-08-04).** Seven of the twelve named ISAs below **no longer have
> a live entry-point paper.** Those papers were withdrawn during the August 2026
> corpus audit, and their DOIs no longer resolve. The names are retained here
> because they appear in other documents, but **they should not be cited or
> built upon** until a replacement paper exists.
>
> | ISA | entry paper | status |
> |---|---|---|
> | Origami | 258, 631 | **live** (258 carries a notice) |
> | Forge | 419 | **live** |
> | Meld | 454 | **live** |
> | Frog | 207, 281 | **live** — but see the pentagon finding below; 623 (the octonion extension) was withdrawn |
> | Raven | 615 | ✗ withdrawn |
> | Valence | 708 | ✗ withdrawn |
> | Knot | 618 | ✗ withdrawn |
> | Motive | 619 | ✗ withdrawn |
> | Hum | 722 | ✗ withdrawn |
> | Rising Sea | 621 | ✗ withdrawn |
> | Pentagon | 622 | ✗ withdrawn |
> | Carnot | 619 | ✗ withdrawn (same paper as Motive) |
>
> **On the Frog/non-associative line specifically**: the naive pentagon identity
> *fails* for octonionic labels — verified 2026-08-04, 1176 of 2401 imaginary
> labelings disagree — and the Pachner-prover verification in 207 is vacuous
> (the identical test passes on random signs). That is not fatal to the
> programme: octonions are non-associative, so rebracketing *must* be
> path-dependent. What it means is that the associator has to be supplied as
> explicit data with its own coherence condition (Mac Lane; Kuperberg's spiders),
> which is what FUSE is defined to be here.

The opcode set is fixed. What varies is the *regime* — which β-value, which
physical domain, which specialisation of the abstract opcodes is in play.
Each named ISA is a specific point (or arc) in the β-plane, with a characteristic
physical content, a set of patron thinkers, and a distinct informal name chosen
for what it *feels* like to work in that regime.

| Informal name | Formal name | Entry-point paper | β location | H^k reach | Patron(s) | Hook | IMAGINE count | Algebra | Graphical calculus |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Origami** | Origami ISA | [Paper 631](https://doi.org/10.5281/zenodo.21428853) | all β (umbrella) | H⁰–H² | Weyl, Racah | Five-opcode open standard; tropical at β→∞, quantum at β=it | 1 | ℂ | ZX (spiders, undirected) |
| **Forge** | Forge ISA | [Paper 419](https://doi.org/10.5281/zenodo.20694527) | 0 < β < ∞ (real Gibbs) | H⁰–H² | Boltzmann, Gibbs | Free-energy routing; MGE soft threshold; snap at β* | 1 | ℂ | ZX (weighted) |
| **Meld** | Meld ISA | [Paper 454](https://doi.org/10.5281/zenodo.20773563) | β = it/ℏ (quantum) | H⁰–H² | Shor, Grover | Complex-MGE quantum algorithm discovery; T-gate as octonion obstruction | 1 | ℂ | ZX (weighted) |
| **Raven** | Raven ISA | **[WITHDRAWN — Paper 636 removed 2026-08]** | β = α + iωt (complex) | H⁰–H² | Bender, Boettcher | PT-symmetric computation; complex-β knot-type transitions; EP-enhanced sensing | 1 | ℂ | ZX (weighted) |
| **Valence** | Valence ISA | **[WITHDRAWN — Paper 487 removed 2026-08]** | all β (bonding extension) | H⁰–H² | Kelvin, Tait, Pauling | Covalent bonds as connected-sum JOIN; coordinate bonds as LINK; Frobenius = detailed balance; torus knots as orbital codes | 1 | ℂ | ZX + satellite knots |
| **Knot** | Knot ISA | **[WITHDRAWN — Paper 618 removed 2026-08]** | β → ∞ (imaginary oscillators) | H⁰–H² | Kauffman, Spencer-Brown | Q-calculus; three imaginary marks; Jones polynomial | 3 | ℍ (Q₈) | Directed ZX (oriented wires) |
| **Frog** | Frog ISA | [Paper 207](https://doi.org/10.5281/zenodo.19713350) / [281](https://doi.org/10.5281/zenodo.20139448) *(623 withdrawn)* | β → ∞ (exceptional) | H⁰–H³ | Kauffman (731 Calculus) | Seven imaginary marks; Fano multiplication; non-associative | 7 | 𝕆 (Moufang loop) | 731 Frog Calculus (4-legged tetrahedra + ribbon-legs) |
| **Motive** | Motive ISA | **[WITHDRAWN — Paper 619 removed 2026-08]** | all β (abstract parent) | H⁰–H³ | Carnot, Bender | Carnot cycles = ERASE + FLOW; PT exceptional point; five primitive opcodes | — | — | Laws of Form |
| **Hum** | Hum ISA | **[WITHDRAWN — Paper 722 removed 2026-08]** | β = it/ℏ (imaginary) | H³ | Lamb, Bethe | QFT vacuum; EMIT is the one new primitive; amplituhedron as RESOLVE | — | — | Feynman / amplituhedron |
| **Rising Sea** | Rising Sea ISA | **[WITHDRAWN — Paper 621 removed 2026-08]** | full ℂ_β plane | all | Grothendieck | β-plane fibration of all ISAs; Noether from Aut(P_Motive) | — | — | — |
| **Pentagon** | Pentagon ISA | **[WITHDRAWN — Paper 622 removed 2026-08]** | abstract (coherence) | — | Baez, Mac Lane | Monoidal coherence theorem; five sides = five opcodes | — | — | — |

**Reading the table:**

The IMAGINE-count column follows the **Hurwitz tower**: the only normed division
algebras are ℝ (0 imaginary units), ℂ (1), ℍ (3), and 𝕆 (7). The ISA trilogy
(Origami/Forge/Raven) all live at the ℂ level — one imaginary direction, associative.
The Knot ISA extends to ℍ (three imaginary marks, Q-calculus, Jones polynomial).
The Frog ISA extends to 𝕆 (seven imaginary marks, O-calculus, non-associative
Moufang loop, G₂ exceptional geometry). No ISA beyond Frog is possible: the
Hurwitz theorem ends at 𝕆.

The **graphical calculus column** tracks the ZX hierarchy (from Paper 207):
standard ZX (undirected spiders) works at ℂ; **Directed ZX** (oriented wires,
still spiders) is needed at ℍ because quaternion multiplication is non-commutative
— the Spider Theorem still holds but only if wire direction is respected; the
**731 Frog Calculus** is needed at 𝕆 because the Spider Theorem fails entirely
(associativity is gone). Frogs replace spiders: each frog has exactly 4 legs
(the 4 faces of a tetrahedron), each leg is a ribbon-leg carrying 3 Fano colours
(the 3 vertices of that triangular face). The Fano colour triple specifies which
octonion product eₐ · eᵦ = ±eᵧ fires at each face-weld. No leg may carry more
than 4 connections because a 5-valent spider would silently invoke associativity.

- **Motive ISA** is the abstract parent: its five opcodes {MARK, CROSS, IMAGINE, FLOW,
  ERASE} are what remains when you strip every physical specialisation away.
  Origami, Forge, and Raven are all restrictions of Motive to particular β-values and
  opcode subsets. The name comes from Carnot's *puissance motrice* (motive power) —
  the force that drives thermodynamic computation — and echoes Grothendieck's *motives*
  (universal cohomological avatars), intentionally.

- **Hum ISA** extends Motive by one opcode (EMIT) and rotates β to the imaginary
  axis. Willis Lamb named the regime: he called the Lamb shift "the unmistakable hum
  of empty space." EMIT is the vertex at which a particle couples to a field mode;
  without it, the vacuum is silent.

- **Rising Sea ISA** is the categorical envelope: it shows that every named ISA is
  a *fibre* of a single Grothendieck fibration p: E → ℂ_β over the complex
  β-plane. The phrase comes from Grothendieck's own description of his mathematical
  style — patient, structural, letting the sea rise until the hard problems float.

- **Pentagon ISA** is the coherence machine: it proves that the Motive PROP is
  well-defined (confluent, terminating rewriting system) and that the pentagon
  identity holds strictly. Five sides, five opcodes — an unexpected coincidence
  that Baez would appreciate.

### The containment diagram

```
                          Rising Sea ISA
                    (full ℂ_β fibration; Grothendieck)
                               │
               ┌───────────────┼───────────────┐
               │               │               │
         Motive ISA        Pentagon ISA     (future ISAs)
      (abstract parent;   (coherence proof)
       Carnot / Bender)
               │
      ┌────────┼──────────┐
      │        │          │
  Forge ISA  Raven ISA  Hum ISA          Knot ISA    Frog ISA
  (real β)  (physio β)  (β = it/ℏ)      (ℍ, Q₈)    (𝕆, G₂)
      │                                      │           │
  Origami ISA                         3 IMAGINEs   7 IMAGINEs
  (β → ∞, ℂ)                         (Jones poly) (Fano plane)

Graphical calculus:  ZX spiders (ℂ) → Directed ZX (ℍ) → 731 Frogs (𝕆)
```

The Knot and Frog ISAs are siblings at β→∞ that differ from Origami/Forge/Raven
by their number of active IMAGINE directions: 1 (ℂ), 3 (ℍ), or 7 (𝕆).
The Hurwitz theorem closes the tower at 7 — no eighth imaginary direction is possible
in a normed division algebra.

The horizontal axis inside each ISA is the H^k degree — opcodes at H⁰, H¹, H², H³.
The vertical axis is the β-plane location.
The three operative ISAs (Origami/Forge/Raven) live on the real β-axis;
Hum lives on the imaginary axis; Rising Sea covers the whole plane.

---

## Relationship to other graphical calculi

The ISA opcodes did not emerge from nowhere. Two graphical calculi were the direct predecessors.

**ZX calculus** (Coecke and Duncan, 2008) is a complete graphical language for qubit
quantum mechanics built from two spider generators (Z and X) obeying the Frobenius
equations. It covers RESOLVE (as SPLIT), PROJECT (as SPLAT), FLIP, and the sector
sub-role of PROJECT fully, and handles TWIST partially
(phase gates exist in ZX but the full ribbon/topological twist — Berry phase, anyonic
spin, BKT transition — is not expressible). CUP is partially present as the compact
structure (cups and caps) but the fermion-statistics interpretation ($C^2 = \pm 1$)
is outside ZX's scope. FUSE is entirely absent: ZX is strictly associative.

**The 731 Frog Calculus** extends ZX to the non-associative regime by adding the
*frog vertex* — a trivalent node with a non-trivial associator, realised physically
as $G_2$/octonion symmetry. The frog vertex is exactly the FUSE opcode. The two
foundational papers are:

- [The 731 Frog Calculus, Part 1](https://doi.org/10.5281/zenodo.19713350) (Paper 207) — three-dimensional spin foams, magmoidal category theory, and non-associative topology
- [The 731 Frog Calculus, Part 2](https://doi.org/10.5281/zenodo.20139448) (Paper 281) — two-dimensional frog diagrams, ribbon-leg syntax, and $G_2$ spin foam rewriting rules

The containment is strict:

$$\text{ZX calculus} \;\subset\; \text{731 Frog Calculus} \;\subset\; \text{Origami ISA}$$

ZX lives at H¹ (Clifford/stabiliser regime, $\mathbb{C}$-rung of the division algebra
ladder). The Frog Calculus adds the H² FUSE opcode ($\mathbb{O}$-rung). The full
Origami ISA extends both to all physical domains — spectroscopy, molecular computing,
financial risk, climate economics — running the same categorical morphisms on
different hardware.

---

## Further reading

**The ISA foundations:**

- **[The Origami ISA: Eight Derivations of a Universal Instruction Set](https://doi.org/10.5281/zenodo.20774076)** (Paper 455) — eight independent routes all forced to the same opcodes; why this gate set is universal at a deeper level than Solovay-Kitaev
- **[The Origami Calculus](https://doi.org/10.5281/zenodo.20474914)** (Paper 349) — the diagrammatic framework grounded in the Ponzano–Regge tetrahedron; the mathematical home of the opcode symbols ■ ◇ ▲ △ ↻
- **[The Magmoidal Origami ISA](https://doi.org/10.5281/zenodo.19916429)** (Paper 258) — original definition; FLIP/FLOP/SPLIT/SPLAT/TWIST/SPIN; the symbol logic (filled = creation, hollow = annihilation; 4-sided = stellar move, 3-sided = bistellar move)
- **[The Opcode Rosetta Stone](https://doi.org/10.5281/zenodo.20761260)** (Paper 447) — the same seven opcodes identified across twelve exactly-solvable models (Ising, Heisenberg, Kitaev, XXZ, Hubbard, Bethe ansatz, ...); universal ISA dictionary

**The named ISAs — one entry-point paper each:**

- **[Origami: An Open Instruction Set Architecture for Quantum Computing](https://doi.org/10.5281/zenodo.21428853)** (Paper 631) — the umbrella manifesto; all β
- **[The Forge ISA](https://doi.org/10.5281/zenodo.20694527)** (Paper 419) — temperature-parameterised instruction set; the snap threshold β*
- **[The Meld ISA](https://doi.org/10.5281/zenodo.20773563)** (Paper 454) — complex-MGE quantum algorithm discovery; the T-gate as octonion obstruction
- **The Raven ISA** ~~(withdrawn 2026-08)~~ (Paper 636) — enzymes as molecular programs; PT-symmetric computation at complex β
- **Valence as Orbit Occupancy** ~~(withdrawn 2026-08)~~ (Paper 487) — the entry point for the Valence ISA; Aufbau/Hund/Taube as orbit theorems
- **The Knot ISA** ~~(withdrawn 2026-08)~~ (Paper 618) — Laws of Form, Q-calculus, thermodynamic deformation of logical operators
- **The Frog ISA** ~~(withdrawn 2026-08)~~ (Paper 623) — seven imaginary opcodes; the octonion O-calculus
- **The Motive ISA** ~~(withdrawn 2026-08)~~ (Paper 619) — five opcodes for dissipative thermodynamic systems; the abstract parent
- **The Hum ISA** ~~(withdrawn 2026-08)~~ (Paper 722) — quantum field theory as a six-opcode programme; EMIT
- **The Rising Sea ISA** ~~(withdrawn 2026-08)~~ (Paper 621) — the ISA hierarchy as a fibred Lawvere theory over the β-plane
- **The Pentagon ISA** ~~(withdrawn 2026-08)~~ (Paper 622) — confluence, coherence, and uniqueness for the Carnot ISA

**The graphical calculi:**

- **[The 731 Frog Calculus, Part 1](https://doi.org/10.5281/zenodo.19713350)** (Paper 207) — three-dimensional spin foams, magmoidal category theory, non-associative topology
- **[The 731 Frog Calculus, Part 2](https://doi.org/10.5281/zenodo.20139448)** (Paper 281) — two-dimensional frog diagrams, ribbon-leg syntax, $G_2$ rewriting rules

**The H^k computational tower:**

- **[The Forge and Meld ISAs](../theory/forge-meld.md)** — full treatment of β, the snap threshold β*, the Wick rotation β → it, vortons, and how the same opcodes run over tropical / Gibbs / complex arithmetic
- **[The H^k Complexity Ladder](https://doi.org/10.5281/zenodo.20773526)** (Paper 420) — H⁰ classical / H¹ Clifford / H² magic; TWIST failure as phase boundary; β* snap threshold
- **[FUSE at the octonion rung](../theory/non-associative-frontier.md)** — the Non-Associative Frontier page; division algebra ladder ℝ→ℂ→ℍ→𝕆
- **[BKT Transition / TWIST Failure](glossary.md#bkt-transition--twist-failure)** — TWIST in depth; quantum dimension, $d_{1/2}(\beta)=0$ at $\beta=1/2$

**For number theorists and algebraic geometers:**

- **The Langlands Correspondence for G-Walk Chemistry** ~~(withdrawn 2026-08)~~ (Paper 492) — RESOLVE = Hecke eigendecomposition; PROJECT = L-function evaluation; FUSE = Rankin-Selberg convolution; G-local systems on molecular graphs
