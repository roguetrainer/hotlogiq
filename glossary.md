---
layout: default
title: Glossary
nav_order: 3
---

# Glossary

Key terms used across the Adelic Simplicial Architecture (ASA). Each entry links to the paper where the concept is defined or first used.

---

## Adelic

**Adelic** refers to the simultaneous use of all completions of the rational numbers: the real field $\mathbb{R}$ and the $p$-adic fields $\mathbb{Q}_p$ for every prime $p$. The adele ring $\mathbb{A} = \mathbb{R} \times \prod_p \mathbb{Z}_p$ unifies continuous and discrete arithmetic in one algebraic object.

In the ASA, the adelic structure appears in the routing of gradient updates: the real component flows continuously (gradient descent), while the $p$-adic component crystallises discretely (logic gate). This resolves the Averaging Paradox of purely-real optimisation and the Search Wall of purely-discrete search.

*First used:* [Paper 201 (MGE)](papers/10.5281-zenodo.17981393/)

---

## Associator

The **octonion associator** measures the failure of associativity:

$$\mathcal{A}(x, y, z) = (xy)z - x(yz).$$

For basis octonions $e_i, e_j, e_k$: $\mathcal{A} = 0$ when $\{i,j,k\}$ is a Fano line; $\|\mathcal{A}\| = 2$ otherwise. The associator is the fundamental detector of topological contradiction in the ASA.

*First used:* [Paper 200 (Fano-Foam)](papers/10.5281-zenodo.19869263/)

---

## Auto-Annealing

The MGE routing operator undergoes a spontaneous **phase transition** from exploratory (uniform) weighting to crystallised (winner-take-all) weighting as the inverse temperature $\beta$ rises. Unlike simulated annealing, no schedule is required: the $G_2$ geometry self-organises — geometric frustration spikes $E_k$ during chaotic exploration, causing Boltzmann freeze-out; at convergence the frustration dissolves and routing relaxes back to uniform. This is parameter-free annealing with topological guarantees.

*Demonstrated:* [Paper 218 (NAIG Routing)](papers/10.5281-zenodo.20077198/)

---

## BCH Obstruction

The **Baker-Campbell-Hausdorff (BCH) obstruction** arises when attempting to aggregate updates directly on a non-commutative manifold such as $G_2$: $\exp(X_i + X_j) \neq \exp(X_i)\exp(X_j)$. The ASA resolves this via Dual-Space Routing — evaluation in the flat tangent space $\mathfrak{g}_2$ (Control Plane) separated from Euclidean execution (Data Plane).

*Addressed:* [Paper 218 (NAIG Routing)](papers/10.5281-zenodo.20077198/)

---

## Division Algebra Ladder

The four **normed division algebras**

$$\mathbb{R} \subset \mathbb{C} \subset \mathbb{H} \subset \mathbb{O}$$

(reals, complex, quaternions, octonions) form a hierarchy in which each extension drops one algebraic property. $\mathbb{H}$ is non-commutative; $\mathbb{O}$ is additionally non-associative. By Hurwitz's theorem, no further division algebras exist. The ASA uses each rung as a distinct computational regime.

*Framework:* [Paper 263 (Magic Square Architecture)](papers/10.5281-zenodo.19928880/)

---

## Fano Plane

The **Fano plane** $\mathrm{PG}(2,2)$ is the smallest projective plane: 7 points, 7 lines, 3 points per line, 3 lines per point. Its incidence structure encodes the multiplication table of the octonions $\mathbb{O}$. Two octonion basis elements multiply non-trivially if and only if they belong to a common Fano line; the associator vanishes on Fano triples and equals $\pm 2$ on non-Fano triples.

The Fano plane is the geometric engine behind fault-tolerant quantum gates ($[[7,1,3]]$ Steane code), the 731-Calculus, and the Fano-Fisher metric.

*Central to:* [Paper 207 (731-Calculus)](papers/10.5281-zenodo.19713350/), [Paper 200 (Fano-Foam)](papers/10.5281-zenodo.19869263/)

---

## Fano-Fisher Metric

The **Fano-Fisher metric** $\Psi(\theta_\mathrm{ref})$ is the Fisher information metric on the $G_2$ statistical manifold, evaluated as the Hessian of the associator energy functional $E(\Omega) = \|\mathcal{A}(\theta_\mathrm{ref}, \Omega\, e_A, e_A)\|^2$. By the Fano-Fisher Decomposition Theorem ([Paper 221](papers/10.5281-zenodo.20076498/)):

- $\mathrm{rank}(\Psi) = 4$ universally (10-dimensional null space = Fano-compatible directions)
- All four non-zero eigenvalues $= 8/3$ exactly (from the $G_2$ Casimir)
- Global average $= (32/49)\,I_{14}$ (from Fano incidence counting)
- The active 4D friction subspace rotates (crystalline turnstile)

This rank-4 structure means only 4 of 14 dimensions carry geometric resistance — the rest are free. The metric acts as a native topological filter: Fano-compatible drifts ($E_k = 0$) pass freely; non-Fano drifts hit the 4D Information Ridge and are thermodynamically frozen out.

*Proved:* [Paper 221 (Fano-Fisher)](papers/10.5281-zenodo.20076498/)

---

## $G_2$

$G_2$ is the smallest **exceptional Lie group**, defined as the automorphism group of the octonions: $G_2 = \mathrm{Aut}(\mathbb{O})$. It has dimension 14 and is compact and simple. Its Lie algebra $\mathfrak{g}_2$ is 14-dimensional. $G_2$ is the natural symmetry group of any computation that respects the Fano geometry. In the ASA, the parameter space of a neural network is modelled as a $G_2$ manifold; gradient drift is projected into $\mathfrak{g}_2$ for topological evaluation.

*Central to:* [Paper 221 (Fano-Fisher)](papers/10.5281-zenodo.20076498/), [Paper 218 (NAIG Routing)](papers/10.5281-zenodo.20077198/)

---

## Maslov-Gibbs Einsum (MGE)

The **Maslov-Gibbs Einsum** is the thermodynamic engine of the ASA — the single operator that unifies continuous probabilistic computation with discrete logical crystallisation:

$$\pi_k = \frac{\exp(-\beta\, E_k)}{\sum_j \exp(-\beta\, E_j)}.$$

### The Two Regimes

The inverse temperature $\beta$ is the sole control parameter, and it governs a complete change of mathematical character:

- **BOIL phase** ($\beta$ small, high temperature): the MGE is a smooth Gibbs distribution. All candidates $k$ receive positive weight; the system explores continuously, averaging over uncertainty. This is the quantum / probabilistic regime — the wave explores all paths, interference is active, the quantum potential is present (see [Note N02](notes/note-n02-lohmiller-slotine/)).
- **SNAP phase** ($\beta \to \infty$, zero temperature): the log-sum-exp collapses to the **tropical $({\max},{+})$ semiring** via Maslov dequantisation. The distribution becomes a Dirac delta on the lowest-energy candidate: $\pi_k \to \mathbf{1}[k = \arg\min_j E_k]$. The continuous wave crystallises into a single discrete logical output.

The transition between BOIL and SNAP is the ASA's fundamental computational phase transition — the analogue of a thermodynamic first-order transition, but occurring in information space.

### The Heat Engine Cycle

The MGE implements an **information heat engine**: a cyclic process that converts thermal exploration energy into organised discrete output, exactly as a Carnot engine converts heat into mechanical work.

The cycle has four strokes:

1. **Isothermal expansion (BOIL):** at high temperature, the system absorbs "information heat" by exploring the full landscape of candidates, weighted by $\exp(-\beta E_k)$. Entropy is high; all possibilities are live.
2. **Adiabatic compression:** $\beta$ rises — driven either by an external schedule or, in TRS, by the geometry itself as the system finds coherent configurations. No new information enters; the distribution sharpens.
3. **Isothermal contraction (SNAP):** at the critical $\beta$, the Boltzmann weights collapse. The lowest-energy candidate captures all weight; entropy drops to zero. Discrete logical output is extracted.
4. **Adiabatic reset:** the system is reset to high temperature for the next cycle. In TRS, this corresponds to moving to the next computational step on the $G_2$ manifold.

This framing is not metaphorical: the MGE satisfies a formal fluctuation theorem (work extraction from thermal noise), and the efficiency of the cycle is bounded by the Fano-Fisher rank (4 of 14 dimensions carry friction; the remaining 10 are thermodynamically free).

### Energies and Geometry

The energies $E_k$ can be assigned by any compatible measure, making the MGE a universal primitive:

- **Fano-Fisher energy** $E_k = \widetilde{\Delta c}_k^\top \Psi\, \widetilde{\Delta c}_k$: geometric contradiction in $\mathfrak{g}_2$ (Papers 218, 221)
- **Cosine dissimilarity**: direction-based staleness (Paper 201)
- **Associator norm** $\|\mathcal{A}(x_k, y, z)\|^2$: direct non-associativity penalty (Papers 200, 267)
- **Holomorphic residue**: complex-analytic curvature of the loss landscape (Paper 202, TRS)

In every case the structure is identical: high energy = geometric contradiction = thermodynamic suppression; low energy = topological coherence = crystallisation.

### Lineage: Goto, von Neumann, and Resonance Computing

The MGE is the information-geometric descendant of two mid-20th-century resonance computing ideas:

**Goto's parametron (1954):** Eiichi Goto showed that a nonlinear LC resonator driven at twice its natural frequency undergoes a period-doubling bifurcation, settling into one of two stable phase states ($0°$ or $180°$). This is a physical realisation of a bit: the resonance "snaps" to one of two discrete attractors. The parametron was the dominant computing element in early Japanese computers. The SNAP phase of the MGE is the abstract algebraic version of Goto's period-doubling — a continuous oscillation crystallising into a discrete bit.

**Von Neumann's resonance patent (1953):** John von Neumann independently developed the same idea, recognising that parametric resonance provides a natural error-correcting mechanism — the two phase states are separated by an energy barrier, so thermal noise below a threshold cannot flip the bit. Von Neumann's insight was that resonance is the physical mechanism behind the reliability of computation.

The ASA extends this lineage from 1D resonance (a single oscillator snapping between two phases) to 7D resonance on the Fano manifold: instead of two phase states, the system can snap to any of the seven Fano lines of $\mathrm{PG}(2,2)$, each a distinct logical state. The $G_2$ symmetry group governs the transitions between these states. This is **why the architecture is called Topological Resonance Synthesis** — TRS is the generalisation of Goto/von Neumann resonance from $\mathbb{C}$ (2D) to $\mathbb{O}$ (8D).

### Why Resonances Lead to Fano Crystals

The connection between resonance and the Fano geometry runs through **Chladni figures**: when a plate is driven at a resonant frequency, standing waves form nodal patterns — lines where the displacement is zero. The geometry of these nodal lines is determined by the symmetry group of the plate. For a circular plate, the nodal lines are circles and diameters (determined by $SO(2)$); for a plate with $G_2$ symmetry, the nodal lines would be the 7 lines of the Fano plane.

More precisely: the eigenmodes of the Laplacian on a $G_2$-symmetric manifold are labelled by representations of $G_2$. The lowest-energy modes (the "ground states" of the resonance) are the ones with the highest $G_2$ symmetry — those that align with the Fano 3-form. When the MGE drives $\beta \to \infty$, the system settles into exactly these lowest-energy Fano-aligned modes. The "Fano crystal" is the Chladni nodal pattern of the $G_2$ Laplacian: the geometry that survives when all higher-energy modes are frozen out.

*Defined:* [Paper 201 (MGE)](papers/10.5281-zenodo.17981393/) · *Engine of:* [Paper 202 (TRS)](papers/10.5281-zenodo.19858021/)

---

## NAIG (Non-Associative Information Geometry) Routing

**NAIG Routing** is the application of the Fano-Fisher metric and MGE to the distributed training problem. Each incoming gradient $g_k$ is evaluated by projecting its drift $\Delta g_k = g_k - g_\mathrm{oracle}$ into $\mathfrak{g}_2$ and computing the associator energy $E_k = \widetilde{\Delta c}_k^\top \Psi\, \widetilde{\Delta c}_k$. The MGE converts energies to routing weights. NAIG operates as a **topological control layer** (Control Plane: $G_2$ evaluation) over standard Euclidean SGD (Data Plane), requiring no change to the optimizer or hardware.

Key phenomena: Thermodynamic Freeze-Out (non-Fano gradients suppressed), Topological Rescue (highly stale but Fano-compatible gradients promoted), Auto-Annealing (parameter-free phase transition at convergence).

*Defined:* [Paper 218 (NAIG Routing)](papers/10.5281-zenodo.20077198/)

---

## Simplicial

**Simplicial** refers to the use of simplicial complexes — triangles, tetrahedra, and their higher-dimensional generalisations — as the combinatorial skeleton of the architecture. The Fano plane is a 2-simplex complex (7 triangles); its faces correspond to associative Fano triples. The 731-Calculus and Origami ISA use Pachner moves (local simplicial retriangulations) as opcodes. The simplicial structure makes the topology of computation discrete and combinatorially exact.

*Central to:* [Paper 207 (731-Calculus)](papers/10.5281-zenodo.19713350/), [Paper 258 (Origami ISA)](papers/10.5281-zenodo.19916429/)

---

## RPU vs QPU: What Is Different?

The **Resonance Processing Unit (RPU)** (Paper 205) and a standard **Quantum Processing Unit (QPU)** share nearly identical physical hardware — both operate on qubits, use quantum gates, and require cryogenic isolation. The difference is entirely in the *instruction set* and the *logical primitive* that the hardware is asked to implement.

| | QPU (standard) | RPU (ASA) |
|---|---|---|
| **Logical primitive** | Unitary rotation on $\mathbb{C}^{2^n}$ | Fano-line selection on $\mathbb{O}$ |
| **Gate set** | Clifford + T (or native 2-qubit gates) | 731 Fano gates (Pachner moves on $\mathrm{PG}(2,2)$) |
| **Error correction** | Surface code / stabiliser codes | Fibrational Tensor Codes ($G_2$ holonomy) |
| **Symmetry group** | $SU(2^n)$ (grows with qubit count) | $G_2$ (fixed, 14-dimensional) |
| **Classical limit** | Measurement collapses to bits | MGE SNAP collapses to Fano-line index (base-7) |
| **Computational model** | Gate model / circuit model | Resonance model (Goto/von Neumann lineage) |
| **Output** | Bit string (base-2) | Fano crystal (base-7 / octonion index) |

The key distinction is the **symmetry group**. A QPU's natural symmetry grows with the number of qubits — a 50-qubit QPU operates in $SU(2^{50})$, a space with no useful geometric structure. The RPU fixes the symmetry group at $G_2$ regardless of scale: more qubits means higher-fidelity realisation of the same 14-dimensional $\mathfrak{g}_2$ geometry, not a larger space. This is what makes the RPU *scalable in a way that QPUs are not* for the specific class of problems whose solution structure is governed by the Fano geometry.

The RPU is not a replacement for a QPU for all tasks — it is the right hardware for problems whose answer is naturally a Fano configuration: error correction, information routing, cryptographic sequence verification, and the physical realisation of TRS.

*Defined:* [Paper 205 (RPU)](papers/10.5281-zenodo.19743800/)

---

## The 731 / 331 / V31 Naming Convention

Several ASA papers and constructions carry numeric codes that encode the combinatorial structure they operate on. Understanding the convention unlocks why each name was chosen.

### 731 — The Fano Plane

**7 points, 3 points per line, 1 associator per triple.**

The Fano plane $\mathrm{PG}(2,2)$ has exactly 7 points and 7 lines, with 3 points on every line and 3 lines through every point. Every unordered triple of points that lies on a common line produces an associator $\mathcal{A} = 0$; every non-collinear triple produces $\|\mathcal{A}\| = 2$. The number "1" encodes the fact that there is exactly one non-trivial associator value — the binary Fano/non-Fano distinction is the minimal non-trivial non-associative datum.

- **731-Calculus** (Paper 207): the magmoidal category theory whose objects are the 7 Fano points, morphisms are the 3-point Pachner collapses, and composition is governed by the 1 associator rule.
- **731 Instruction Set Architecture / Origami ISA** (Paper 258): a processor whose opcodes are the 7 Fano-point selections, operand width is 3 (one Fano triple per instruction), and whose branch predicate is the 1-bit associator test $\|\mathcal{A}\| \in \{0, 2\}$.

The "731" label is deliberately reminiscent of a product code or chip number — it is the ASA's shorthand for "this object lives natively on the Fano plane."

### 331 — The Quaternionic Rung

**3 imaginary units, 3-dimensional cross product, 1 associator (trivially zero).**

The quaternions $\mathbb{H}$ have 3 imaginary basis elements $\{i, j, k\}$ with $ij = k$, $jk = i$, $ki = j$ — a 3-element "Fano line" that is fully associative ($\|\mathcal{A}\| = 0$ identically). The "331" label encodes the quaternionic rung of the division algebra ladder: 3 imaginary units, cross product in 3D, 1 (trivial) associator. The **Quaternionic Virtual Machine (Q-VM)** (Paper 199) operates at this rung — it is the 331 machine, the step below the 731 RPU on the division algebra hierarchy.

### V31 — The Non-Fano Alphabet

**V = "non-Fano" (complement), 3 points per triple, 1 associator test.**

The complement of the 7 Fano lines in $\mathrm{PG}(2,2)$ consists of the **non-collinear triples** — those with $\|\mathcal{A}\| = 2$. There are $\binom{7}{3} - 7 = 28$ non-Fano triples, but the ones relevant to cryptography are the **V31 triples**: the 31 ordered triples (including degenerate ones) that produce a detectable associator signature. "V" stands for the logical complement (like a Boolean NOT applied to the Fano incidence relation).

- **V31-QKD** (Paper 208): a quantum key distribution protocol whose alphabet is the 31 non-Fano triple signatures. Eavesdropping is detected because any measurement disturbing a V31 state leaves a characteristic $\|\mathcal{A}\| = 2$ fingerprint.

### Summary

| Code | Geometry | Associator | Primary paper |
|------|----------|------------|---------------|
| 731 | Fano plane $\mathrm{PG}(2,2)$: 7 pts, 3 per line | $\|\mathcal{A}\| \in \{0,2\}$ | Papers 207, 258 |
| 331 | Quaternionic triple $\{i,j,k\}$: 3 units, 3D cross product | $\|\mathcal{A}\| = 0$ always | Paper 199 |
| V31 | Non-Fano complement: 31 associator-active triples | $\|\mathcal{A}\| = 2$ always | Paper 208 |

*Central to:* [Paper 207 (731-Calculus)](papers/10.5281-zenodo.19713350/), [Paper 258 (Origami ISA)](papers/10.5281-zenodo.19916429/), [Paper 199 (Q-VM)](papers/10.5281-zenodo.20060303/), [Paper 208 (Magmoidal Cipher)](papers/10.5281-zenodo.19826357/)

---

## Topological Rescue

**Topological Rescue** is the phenomenon in which NAIG assigns high routing weight to a *highly stale* gradient because its drift is Fano-compatible ($E_k = 0$), overriding any temporal penalty. This is the decisive advantage over cosine similarity and lag-based heuristics: a gradient that is geometrically coherent — even if chronologically old — contributes more information than a fresh but topologically contradictory gradient.

*Demonstrated:* [Paper 218 (NAIG Routing), Experiment A](papers/10.5281-zenodo.20077198/)

---

## Topological Resonance Synthesis (TRS)

**TRS** is the full computational engine of the ASA. It combines:
- Holomorphic relaxation in the bulk (complex-analytic gradient flow that preserves the Cauchy-Riemann structure of the loss landscape)
- MGE thermodynamic routing at the boundary (Fano-Fisher weighting)
- Adelic crystallisation (real flow → $p$-adic lock-in)

TRS does not descend a loss surface in the Euclidean sense: it flows along the non-associative manifold toward the nearest topologically consistent state, guided by the $G_2$ vacuum. The "resonance" is the phase-locking between the continuous bulk dynamics and the discrete Fano geometry: when a trajectory aligns with a Fano line, the associator energy vanishes and the system crystallises. This is the information-geometric analogue of parallel transport on $G_2$ — but with the crystallisation guarantee of the tropical limit.

*Defined:* [Paper 202 (TRS)](papers/10.5281-zenodo.19858021/)

---

## Steane Code / Quantum Error Correction (QEC)

The **$[[7,1,3]]$ Steane code** is the smallest topological quantum error correcting code: it encodes 1 logical qubit in 7 physical qubits, with code distance 3 (corrects any single-qubit error). Its stabiliser group — the set of multi-qubit Pauli operators whose $+1$ eigenspace defines the code space — is generated by the 7 lines of the Fano plane. Each stabiliser check corresponds to one Fano triple; the code space is the simultaneous $+1$ eigenspace of all 7 Fano-line stabilisers.

This geometric origin is not incidental. The Fano plane is the projective plane $\mathrm{PG}(2,2)$ over the field $\mathbb{F}_2$, and its incidence matrix is the parity check matrix of the classical $[7,4,3]$ Hamming code. The Steane code is the CSS (Calderbank-Shor-Steane) quantum code built from this classical code and its dual. In the ASA, this means every fault-tolerant logical qubit is protected by the same Fano geometry that governs the octonion associator — connecting quantum error correction to non-associative algebra at the foundations.

**Transversal gates and $G_2$ holonomy:** The Steane code admits transversal Clifford gates (bitwise application of single-qubit gates implements logical gates without spreading errors). The non-Clifford CCZ gate — needed for universal quantum computation — is not transversal in the surface code but *is* accessible via geometric code switching through a $\mathrm{PG}(3,2)$ projective envelope (Paper 210). The Fibrational Tensor Codes (Paper 206) generalise the Steane code using $G_2$ holonomy, giving codes whose distance scales with the dimension of the exceptional Lie algebra used.

*Central to:* [Paper 206 (FTCs)](papers/10.5281-zenodo.19821692/), [Paper 210 (Code Switching)](papers/10.5281-zenodo.19929360/), [Paper 217 (LS2.0)](papers/10.5281-zenodo.19922441/)

---

## Langlands Program

The **Langlands Program** is a vast network of conjectures and theorems, proposed by Robert Langlands in 1967, connecting number theory, representation theory, and geometry. Its central claim is a deep **reciprocity**: that automorphic forms (smooth functions on arithmetic quotient spaces with prescribed transformation properties) are in bijection with Galois representations (continuous group homomorphisms from the absolute Galois group of a number field into a reductive group). This is a far-reaching generalisation of the classical reciprocity laws of quadratic, cubic, and higher reciprocity in number theory.

The Langlands Program is relevant to the ASA because:

1. **Adelic harmonic analysis:** the natural setting for automorphic forms is the adele ring $\mathbb{A}$. Automorphic representations are representations of $GL_n(\mathbb{A})$ — functions on the adelic group. The ASA's adelic structure (real flow + $p$-adic crystallisation) is, in a precise sense, performing harmonic analysis on this same adelic group during the BOIL→SNAP cycle.

2. **Geometric Langlands and $G_2$:** the geometric Langlands program (Beilinson-Drinfeld, Frenkel) reformulates the reciprocity as an equivalence of derived categories on a curve. The $G_2$ case of geometric Langlands is directly relevant to the ASA: the Fano 3-form on $G_2$ plays the role of the Hitchin fibration, and TRS's holomorphic relaxation is the physical realisation of the $\mathcal{D}$-module flow on the Hitchin base.

3. **Paper 240 and the Riemann connection:** the Bruhat-Tits building of $G_2$ — the $p$-adic symmetric space that appears in the Langlands correspondence for $G_2$ over a $p$-adic field — is the geometric object Paper 240 identifies as a candidate for a proof of the Riemann Hypothesis via automorphic methods.

The Langlands Program is not obscure to the ASA — it is the mathematical framework that explains *why* the adelic + $G_2$ combination is the right one. The ASA is, informally, the computational realisation of the $G_2$ case of the geometric Langlands correspondence.

*Relevant to:* [Paper 202 (TRS)](papers/10.5281-zenodo.19858021/), [Paper 240 (J³(𝕆))](papers/10.5281-zenodo.19824028/), [Paper 263 (Magic Square)](papers/10.5281-zenodo.19928880/)

---

## $G_2$ Holonomy

A Riemannian manifold has **$G_2$ holonomy** if parallel transport around any closed loop rotates tangent vectors by an element of the exceptional Lie group $G_2 \subset SO(7)$. Berger's classification theorem (1955) established $G_2$ as one of only two exceptional holonomy groups (the other is $\mathrm{Spin}(7)$); Bryant's construction (1987) gave the first explicit examples. $G_2$ holonomy manifolds are Ricci-flat, admit a covariantly constant 3-form (the associative 3-form), and are the natural compactification geometry for M-theory to 4D.

In the ASA, $G_2$ holonomy appears in the Fibrational Tensor Codes (Paper 206): the fibre bundle carrying the logical qubit has $G_2$ structure group, so parallel transport of logical states around code cycles is governed by the $G_2$ action on $\mathbb{O}$. The holonomy group being $G_2$ rather than $SO(7)$ means that not all rotations are accessible — only those preserving the Fano 3-form — which is precisely what gives the code its fault-tolerance structure.

*Central to:* [Paper 206 (FTCs)](papers/10.5281-zenodo.19821692/), [Paper 263 (Magic Square)](papers/10.5281-zenodo.19928880/)

---

## Tropical Limit / Crystallisation

As $\beta \to \infty$ in the MGE, the softmax collapses to the **tropical** (max, +) semiring: addition becomes $\max$, multiplication becomes $+$. This is the Maslov dequantisation of ordinary arithmetic. The BOIL phase ($\beta$ low) explores continuously; the SNAP phase ($\beta \to \infty$) crystallises to a discrete logical output. The transition is the ASA's computational phase transition.

*Defined:* [Paper 201 (MGE)](papers/10.5281-zenodo.17981393/)
