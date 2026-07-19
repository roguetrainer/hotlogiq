---
layout: default
title: Start Here
nav_order: 3
description: "What this project is, why it matters, and the shortest path to the core ideas — by reader type."
---

# Start Here
{: .no_toc }

Every interaction — quantum, chemical, biological, economic, computational — is running the same five-opcode programme on different physical hardware.
{: .fs-5 .fw-300 }

---

## What this project is

Experts in quantum computing, spectroscopy, financial risk, molecular biology, and topology have independently discovered the same three-tier structure — fixed points, local phase corrections, global topological obstructions — and given it different names in each field. This project makes the common pattern explicit, computable, and transferable across domains.

The core claims, in order of increasing strength:

**1. Eight opcodes are universal.**
Any interaction that processes angular momentum, information, or value can be decomposed into eight generators: ORBIT (H⁰, fixed point), TWIST (H¹, phase correction), BIND (H², non-Abelian holonomy), SPLIT and SPLAT (merge/split of channels), LABEL (eigenvalue assignment), FLIP and FLOP (particle-hole and time-reversal). These are not analogies — they are the same categorical morphisms, the generators of the free ribbon pivotal magmoidal category on one self-dual object (Shum 1994), running on different physical substrates.

**2. β is the universal deformation parameter.**
A single complex inverse temperature β connects tropical (classical, β→∞) computation to quantum (β→0) computation in one continuous family. Every phase transition, bond-breaking event, market crisis, and quantum speedup is a *snap event* at a critical β*, where a Gibbs distribution crystallises from warm exploration into a hard commitment. The Metropolis acceptance rate (0.234), the Grassmannian bond-breaking threshold (θ_G ≈ 20°), and the G₂ critical points (β = 1/7, 1/5, 1/3) are all instances of the same snap mechanism.

**3. The H^k tiers form a chain complex.**
The three tiers are not a grading — they are a genuine cohomology theory. The boundary map ∂: C^k → C^{k+1}, assembled from SPLIT and SPLAT via Koszul signs, satisfies ∂² = 0 as a consequence of the Frobenius algebra axiom. This is the same condition as the pentagon identity (Mac Lane coherence), the MIP*=RE self-test, and the Khovanov chain complex for knot invariants. The Euler characteristic of the complex is the ORBIT count; the full Poincaré polynomial is a strictly stronger invariant.

**4. The Grassmannian is the correct geometric substrate.**
The space of all k-dimensional subspaces of an n-dimensional space — the Grassmannian Gr(k,n) — is the common parent of quantum chemistry (CASSCF wavefunctions), scattering amplitudes (the amplituhedron of Arkani-Hamed and Trnka), and nuclear structure (NN wavefunctions). Following a geodesic on Gr(k,n) from the single-reference point to the correlated ground state is the geometric realisation of the original TRS programme: replace gradient descent with parallel transport on a Lie group quotient. The geodesic length θ_G = arccos σ₀ is a basis-independent, computable measure of correlation.

**5. The same structure governs thirteen orders of magnitude.**
The ISA opcodes appear at the chemical scale (~eV, molecular bonding), the nuclear scale (~MeV, tensor force and alpha clustering), and the particle physics scale (~GeV, scattering amplitudes and the amplituhedron) — with the same three tiers, the same β* snap, and G₂ appearing at H² in all three. The framework was discovered by recognising a pattern already partly unified by category theory, but not visible to any single expert community, and making it computable.

---

## For everyone first

These papers require no specialist background. Start with one of them regardless of your field.

**[Planck's Constant in Disguise](https://doi.org/10.5281/zenodo.20752384)** (Paper 443)
Six famous equations from six different fields — Schrödinger, Black-Scholes, Sinkhorn optimal transport, Viterbi, Cole-Hopf, and quantum groups — are all the same equation, controlled by the same algebraic parameter. The ML engineer's softmax temperature, the physicist's Planck's constant, and the quant's volatility are all the same object. No prior knowledge required; every reader will find their own field in the table.

**[In Praise of Tetrahedra](https://doi.org/10.5281/zenodo.20581484)** (Paper 386)
The simplest possible non-trivial simplex — four objects, six edges, four faces — encodes the Ponzano–Regge amplitude, the 6j symbol, the Wigner tetrahedron, and the fundamental unit of the Origami ISA. This is the geometric seed from which everything else grows.

---

## For quantum computing researchers

*Prerequisite: stabiliser states, the Clifford group, T-gates.*

1. **[The Meld ISA: Complex-MGE, Quantum Algorithm Discovery, and the T-Gate as Octonion Obstruction](https://doi.org/10.5281/zenodo.20773563)** (Paper 454)
   The quantum branch of the ISA trilogy. Shor's algorithm as a three-layer Origami/Meld/Origami programme; QFT as a SPLIT-TWIST cascade; T-gate = BIND = Fano associator obstruction; why LWE noise kills the Fourier peak and makes ML-KEM quantum-resistant. The fastest entry point for anyone working on quantum algorithms or hardware simulation.

2. **[Eight Derivations of a Universal Instruction Set](https://doi.org/10.5281/zenodo.20774076)** (Paper 455)
   Eight independent routes — Pachner moves, Wigner-Racah spectroscopy, Mac Lane Pentagon, compact closed categories, Frobenius algebras, Fisher information geometry, Hodge decomposition, quantum gate sets — all landing on the same five opcodes. Explains *why* this gate set is universal at a deeper level than Solovay-Kitaev.

3. **[The H^k Complexity Ladder](https://doi.org/10.5281/zenodo.20773526)** (Paper 420)
   H⁰ = classical (PSPACE), H¹ = statistical (BPP), H² = quantum (BQP). A graded, computable alternative to the P=NP question. The β* snap threshold identifies where on the complexity dial any given algorithm sits.

4. **[The ISA Chain Complex](https://doi.org/10.5281/zenodo.21278536)** (Paper 571)
   The H^k ladder is not just a grading — it is a genuine chain complex with boundary map ∂ satisfying ∂² = 0. Proved from the Frobenius algebra axiom at exact integer-matrix precision. The ORBIT count is the Euler characteristic; the Poincaré polynomial is a strictly stronger knot invariant. Extends to G₂ (Paper 572) via the Kuperberg spider as the complete BIND calculus.

**If you know ZX calculus:** four of the seven core opcodes (SPLIT, SPLAT, FLIP, LABEL) are ZX spiders; TWIST and FLOP are partial; BIND is the one opcode ZX cannot express — it requires the [731 Frog Calculus](https://doi.org/10.5281/zenodo.19713350), the non-associative extension developed here. The [opcodes page](opcodes.md) marks each opcode with 🕷️ (ZX) or 🐸 (Frog Calculus).

**Then, for the ISA foundations:**

- [The Origami ISA](https://doi.org/10.5281/zenodo.19916429) (Paper 258) — the classical β→∞ ISA; FLIP/FLOP/SPLIT/SPLAT/TWIST/SWAP/LABEL; Wigner 6j symbol as H¹
- [The Forge ISA](https://doi.org/10.5281/zenodo.20694527) (Paper 419) — the statistical 0<β<∞ ISA; snap event at β*; vorton architecture; thermodynamic computation
- [Projective Geometry as the Mother Tongue of QM](https://doi.org/10.5281/zenodo.20634729) (Paper 393) — the 3-qubit Pauli group is the Fano plane; Fano orbit decomposition of magic states
- [The Fano Plane is the Right Way to Think About Qubits](https://doi.org/10.5281/zenodo.20667176) (Paper 408) — practitioner primer; stabiliser / standard magic / associamancy hierarchy

**For quantum error correction specifically:**

- [Fano Geometry as a Unifying Language for QEC](https://doi.org/10.5281/zenodo.20541595) (Paper 363) — GHZ generates Steane; orbit decomposition of magic; Fano self-test with C = 7/8
- [Non-Associative Hardware is Necessary for the Non-Abelian HSP](https://doi.org/10.5281/zenodo.20667170) (Paper 405) — PSL(2,7) solved; why associative hardware provably fails
- [Associamancy: A Resource Theory of Non-Associative Quantum Magic](https://doi.org/10.5281/zenodo.20667174) (Paper 407) — the Schur boundary; ν₂ = 0; Freudenthal ladder

---

## For chemists and physicists

*Prerequisite: familiarity with molecular orbital theory, quantum chemistry, or nuclear physics. No prior knowledge of the ISA required.*

The core claim: Lewis electron pairs, molecular orbital bond orders, and valence bond resonance energies are not three different theories of bonding. They are rank-1 and rank-2 approximations to the same geometric object — the Schmidt decomposition of the correlated wavefunction on the Grassmannian Gr(n_e, n_orb). Three computable ISA quantities replace all three classical theories, and the same mathematics governs nuclear bonds and scattering amplitudes.

1. **[A Universal Theory of Chemical Bonding from the Grassmannian](https://doi.org/10.5281/zenodo.21277821)** (Paper 570)
   The chemistry entry point. Three ISA descriptors — Grassmannian angle θ_G (polarity), NOON bond order n_bond (multiplicity), Galerkin coupling H₀₁ (resonance) — validated across nine systems. For benzene, the bridge formula ΔE_res = ½(E₁−E₀)(1−S) gives 54.5 mEh vs experimental 57.4 mEh (5% error). Lewis, MO, and VB theories unified as Schmidt approximations on a single geometric object. Start here.

2. **[Schrödinger's Equation on the Grassmannian](https://doi.org/10.5281/zenodo.21277819)** (Paper 568)
   The correct variational action principle for correlated wavefunctions: the Dirac-Frenkel principle formulated on Gr(n_e, n_orb). The Galerkin inter-channel coupling H₀₁ is the exact, basis-independent quantity that VB theory approximates with the Hückel β integral. The β* snap at θ_G ≈ 20° is a bifurcation of the Grassmannian geodesic flow — the ISA derivation of why DFT fails for strongly correlated systems.

3. **[The Grassmannian as the Common Parent of Bonding and Scattering](https://doi.org/10.5281/zenodo.21279006)** (Paper 574)
   The same Gr(k,n) that parametrises CASSCF wavefunctions in chemistry also parametrises scattering amplitudes in N=4 SYM (the amplituhedron). The ISA bonding descriptors have exact amplitude counterparts: θ_G ↔ momentum twistor coordinate, n_bond ↔ leading singularity, H₀₁ ↔ factorisation channel residue. The tropical limit identifies the Hartree-Fock reference with the leading Parke-Taylor factor. The β* snap is the spurious-pole degeneration at the amplituhedron boundary.

4. **[Nuclear Bonding as H²](https://doi.org/10.5281/zenodo.21279217)** (Paper 575)
   Chemical bonds span H⁰, H¹, and H² depending on correlation strength. Nuclear bonds are always H² (BIND-mandatory) because SU(3) colour is permanently non-Abelian. The tensor force S₁₂ is a trivalent BIND vertex; it arises as (TWIST)² = BIND from pion exchange at second order. The deuteron has θ_G ≈ 13°, n_bond = 1, H₀₁ ≈ −25 MeV — structurally identical to the benzene Kekulé coupling, ×13,000 in energy. The Hoyle state of ¹²C is an ORBIT of three BIND objects.

**For the amplituhedron and tropical geometry connections:**

- [The Condensed Matter Amplituhedron](https://doi.org/10.5281/zenodo.21277815) (Paper 563) — CASSCF wavefunctions trace geodesics on Gr(n_e, n_orb); θ_G from Schmidt SVD; universal β* snap at θ_G ≈ 20° across H₂, H₂O, N₂
- [The Kuperberg G₂ Spider is the BIND Calculus](https://doi.org/10.5281/zenodo.21278538) (Paper 572) — BIND = G₂ trivalent vertex; Fano 3-form dictionary; Kuperberg relations verified numerically; BIND theorem complete

---

## For economists and financial practitioners

*Prerequisite: familiarity with credit exposure, derivatives, or macroeconomic models.*

1. **[EconIAC: A Differentiable Economics Engine — Overview and Reading Guide](https://doi.org/10.5281/zenodo.20679006)** (Paper 409)
   What EconIAC is, why the mathematics matters, and where to start. Maps all published economics papers with hyperlinked DOIs. Read this first.

2. **[The Topology of Risk: A Primer on Cohomology for Financial Practitioners](https://doi.org/10.5281/zenodo.20642983)** (Paper 398)
   Teaches H⁰/H¹/H² from scratch using the 2008 crisis as the running example. No mathematical prerequisites beyond knowing what a credit exposure is. The key distinction: systemic risk accumulates in H¹ (interbank cycle topology); systemic crises are H² snap events (the moment when H¹ cycles become globally inconsistent). Both are present in 2008; they are different aspects of the same topological event.

3. **[A Primer on Economic Gauge Theory](https://doi.org/10.5281/zenodo.20259505)** (Paper 301)
   Why double-entry accounting is a gauge theory; why arbitrage is curvature; why the Pacioli identity is a conservation law. For economists and policy audiences.

**Then, for specific applications:**

- [Systemic Risk as H²](https://doi.org/10.5281/zenodo.20642908) (Paper 397) — the 2008 crisis as a topological event; stress-testing framework
- [Tipping Points Are Topological](https://doi.org/10.5281/zenodo.20653285) (Paper 403) — climate tipping cascades; H¹-corrected social cost of carbon
- [The Origami ISA as Financial Middleware](https://doi.org/10.5281/zenodo.20645695) (Paper 399) — SPLIT and SPLAT as Čech coboundary; model-free XVA

---

## For biologists and biochemists

*Prerequisite: familiarity with molecular biology, structural biochemistry, or biophysics. No quantum mechanics or representation theory required.*

The core claim: every molecular machine that processes angular momentum — a ribosome decoding a codon, the FMO photosynthetic complex funnelling energy, nitrogenase breaking the N≡N triple bond — is running an Origami ISA programme. The same five opcodes that describe quantum circuits describe these biological systems, at the same level of mathematical precision.

1. **[Molecular Machines as Origami ISA Programmes](https://doi.org/10.5281/zenodo.20682101)** (Paper 413)
   The biology entry point. Covers all three molecular machines — ribosome, FMO, nitrogenase — in one paper written for biologists with no quantum computing background. Includes the parameter-free prediction η = 0.1825 for FMO efficiency, the structural evidence for 6/7 Fano topology at the ribosomal A-site, and the G₂ triality mechanism for nitrogen fixation. Start here.

**Then, for each machine in depth:**

2. **[The Decoding Engine](https://doi.org/10.5281/zenodo.20400652)** (Paper 324)
   Full treatment of the ribosome as an Origami ISA programme. The 6j symbol is the codon–anticodon recognition step; 6/7 Fano-line coverage in the cognate state (PDB: 4V9D); connection to kinetic proofreading.

3. **[The Topological Heat Engine](https://doi.org/10.5281/zenodo.20400638)** (Paper 325)
   Full proof that the broken-Fano topology is the unique 7-node graph with positive Carnot efficiency. FMO efficiency η = 0.1825 derived from crystal structure alone. Testable predictions for Tyr16 mutation and DNA origami implementation.

4. **[Virtual Monopoles in the FeMo-Cofactor](https://doi.org/10.5281/zenodo.20346650)** (Paper 318)
   Nitrogenase and the [7Fe-9S-Mo] cluster as a 731 ISA register. G₂ triality and virtual monopoles. Predictions for time-resolved EXAFS and Mössbauer spectroscopy.

**Then, for spectroscopists:**

- [Spiders for Spectra](https://doi.org/10.5281/zenodo.20458996) (Paper 347) — atomic spectra as Origami ISA circuits; diagrammatic angular-momentum calculus for any atom
- [Spiders for Nuclei](https://doi.org/10.5281/zenodo.20490046) (Paper 348) — nuclear spectroscopy; the Pandya transform is the FLIP opcode; ISA programs for shell-model transitions
- [Spectroscopic Circuits Are Small](https://doi.org/10.5281/zenodo.20584560) (Paper 374) — 3–21 qubits suffice to simulate all known nuclear and atomic spectra; ISA circuit sizes for H through Cf

---

## For mathematicians

*Prerequisite: comfortable with representation theory or category theory.*

1. **[Eight Derivations of a Universal Instruction Set](https://doi.org/10.5281/zenodo.20774076)** (Paper 455)
   Eight independent routes — Pachner moves, Wigner-Racah, Mac Lane Pentagon, compact closed categories, Frobenius algebras, Fisher information geometry, Hodge decomposition, quantum gate sets — all forced to the same five generators. Shum's theorem (1994) explains why: the free ribbon pivotal category on one self-dual object has exactly five generators, forced by the topology of framed tangles. Closes an 80-year fragmentation between spectroscopy (Racah 1942), categorical QM (Abramsky-Coecke 2004), and quantum computing (Boykin 1999).

2. **[The ISA Chain Complex](https://doi.org/10.5281/zenodo.21278536)** (Paper 571)
   The H^k ladder is a genuine chain complex: boundary map ∂ assembled from SPLIT/SPLAT via Koszul signs, ∂² = 0 from the Frobenius axiom, ISA homology groups H^k_ISA recover Khovanov's categorification of the Jones polynomial at the sl(2)/H¹ level. Extends to G₂ (Paper 572): the three-term complex C⁰ → C¹ → C² has H²_ISA as a new invariant beyond the classical Khovanov polynomial.

3. **[The Kuperberg G₂ Spider is the BIND Calculus](https://doi.org/10.5281/zenodo.21278538)** (Paper 572)
   Kuperberg's G₂ spider (CMP 1996) is the complete diagrammatic axiomatisation of the BIND opcode. BIND(eᵢ,eⱼ,eₖ) = φᵢⱼₖ (Fano incidence function). Relations R1–R3 verified at exact numerical precision. The BIND theorem (non-Abelian ↔ BIND present) now has its complete proof via Kuperberg's Theorem 6.1.

4. **[The Origami Calculus](https://doi.org/10.5281/zenodo.20474914)** (Paper 349)
   A diagrammatic framework for the representation theory of compact groups, grounded in the Ponzano–Regge tetrahedron. The mathematical foundation for all ISA opcodes.

5. **[In Praise of Qudits](https://doi.org/10.5281/zenodo.20269991)** (Paper 310)
   Why d > 2 quantum systems are natural: the TriQ (d=3) and SevenQ (d=7) registers as the minimal hardware for qudit stabiliser learning and PSL(2,7) Fourier sampling.

6. **[The Unhedgeability Theorem](https://doi.org/10.5281/zenodo.20635479)** (Paper 396)
   A financial risk is hedgeable with bilateral instruments iff its class is trivial in H¹ of the pricing sheaf over an interaction diagram. Convexity, basis risk, and XVA are all H¹ classes — proved directly from the Čech complex, no representation theory required.

**Then, for the frontier:**

- [Associamancy](https://doi.org/10.5281/zenodo.20667174) (Paper 407) — Frobenius-Schur indicators; q ≡ 3 (mod 4) criterion; Freudenthal magic square
- [Non-Abelian StateHSP](https://doi.org/10.5281/zenodo.20667170) (Paper 405) — proof that i√7/2 requires non-associative hardware; Gauss sum identity
- [The 731-Calculus Part 1](https://doi.org/10.5281/zenodo.19713350) (Paper 207) — the magmoidal category; frog vertex (BIND opcode); non-associative string diagrams; the diagrammatic language underlying associamancy
- [The 731 Frog Calculus Part 2](https://doi.org/10.5281/zenodo.20139448) (Paper 281) — G₂ spin foams; octonion diagram rewriting rules; the non-associative Pachner moves

**Or start with the overview:** [The Non-Associative Frontier](non-associative-frontier.md) — a single page covering the division algebra ladder (ℝ→ℂ→ℍ→𝕆), the Freudenthal-Tits magic square, and how the 731-ISA is the computational realisation of the E₈ cell.

**For the historical and philosophical motivation:** [An Adelic Invitation](https://doi.org/10.5281/zenodo.19977475) (Paper 000) — the founding essay asking why the division algebra ladder **ℝ → ℂ → ℍ → 𝕆** is the right organisational principle for a unified theory of physics, computation, and economics. Written before the ISA opcode vocabulary settled; best read after Paper 455 to understand where the framework came from and why.

**If you know complex analysis:** the Cauchy-Riemann conditions are the oldest instance of the H¹=0 pattern in the ASA programme.
The condition $\bar\partial f = 0$ is the Pentagon identity SPLAT∘SPLIT = 0 for the $\bar\partial$ operator.
The three-level ladder — $H^1(\mathbb{C},\mathcal{O})=0$ (Mittag-Leffler), $H^1(\mathbb{C}\setminus\{0\},\mathcal{O})=\mathbb{R}$ (residue theorem), $H^1(\text{genus-}g,\mathcal{O})=\mathbb{C}^g$ (Riemann-Roch) — is the clearest illustration of how $\dim H^1$ counts the number of FLOP corrections needed.
See the remark in §3.6 of [H¹=0 is the Performance Condition](https://doi.org/10.5281/zenodo.20684509) (Paper 415) for the full treatment, and [Hodge Theory is the Smooth Limit](https://doi.org/10.5281/zenodo.20684838) (Paper 417) for the connection to the $\bar\partial$-Neumann problem and Dolbeault cohomology.

---

## The complete paper index

All published papers are indexed in the
[Zenodo ASA Research community](https://zenodo.org/communities/asa-research/records)
and organised by portfolio on the [Portfolios](/adelic-simplicial-architecture/portfolios/) page.

| Portfolio | Theme |
|-----------|-------|
| [A — Core Engine](/adelic-simplicial-architecture/portfolios/portfolio-a) | MGE, TRS, non-associative calculus |
| [B — Foundations](/adelic-simplicial-architecture/portfolios/portfolio-b) | Algebra, topology, category theory |
| [C — Hardware & AI](/adelic-simplicial-architecture/portfolios/portfolio-c) | Origami ISA, registers, QEC |
| [F — Quantum Foundations](/adelic-simplicial-architecture/portfolios/portfolio-f) | Magic, self-tests, paradoxes |
| [G — Finance & Economics](/adelic-simplicial-architecture/portfolios/portfolio-g) | EconIAC, gauge theory, risk |
| [E — Chemistry & Physics](/adelic-simplicial-architecture/portfolios/portfolio-e) | Bonding, nuclear, amplituhedron |
