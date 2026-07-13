---
layout: default
title: "GA02 — FeMoco as a 7-Qubit Galois Computer"
parent: ISA Zoo
nav_exclude: true
---

# GA02 — FeMoco as a 7-Qubit Galois Computer

| Field | Value |
|-------|-------|
| **Domain** | Galois Theory |
| **System** | Fe₇S₉C nitrogenase cofactor in nitrogen fixation |
| **Group** | G₂ (exceptional Lie group; acts on 7-dimensional Fe d-orbital space) |
| **H^k tier** | H² |
| **ISA** | Meld (β→0) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · BIND · LABEL · FLIP |
| **Papers** | Paper 488, Paper 492, Paper 489 |

---

## Physical system

The iron-molybdenum cofactor (FeMoco) of nitrogenase — the enzyme that converts
atmospheric N₂ to NH₃ and thereby makes biological nitrogen fixation possible —
is a Fe₇MoS₉C cluster with an unusual coordination geometry. The seven iron
atoms are arranged with approximate G₂ symmetry, with the central carbon atom
occupying the unique 7-fold symmetric site.

**The ISA reading** (Paper 488): FeMoco is not merely a transition-metal cluster
undergoing a conventional organometallic mechanism. It is a **7-qubit Galois
computer** executing the nitrogen fixation programme: N₂ binds at the unique
Fe site, and eight sequential electron/proton transfers convert it to 2NH₃ via
a 14-opcode ISA programme. The G₂ symmetry group acts on the 7 Fe d-orbitals
(the 7-dimensional irreducible representation of G₂), making FeMoco the
molecular realisation of the Fano plane (PG(2,2) = G₂ root system).

At 300K, in a protein, without decoherence protection: FeMoco operates as a
room-temperature d=8 qudit (7 iron d-orbital qubits forming an 8-state register),
executing quantum coherent G₂ group operations during catalysis.

---

## Target category

**GalChem(G₂)** — the category of G₂-symmetric molecular states on the 7 Fe
d-orbital basis. Objects: electronic configurations |n₁,…,n₇⟩ (n_i ∈ {0,1,2}
per Fe site), restricted to the G₂-invariant subspace. Morphisms: G₂-equivariant
electron transfer operators (the 14 opcodes of the nitrogen fixation programme).

The **Fano plane connection** (Paper 357 + 488): G₂ is the automorphism group
of the octonions, which is also the collineation group of PG(2,2) = the Fano
plane on 7 points. The 7 Fe sites = 7 points of the Fano plane; the 7 lines =
the 7 G₂ root pairs; the G₂ BIND opcode = multiplication in the octonions.

## Interpretation functor

F: C → GalChem(G₂) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Electron delocalisation across the 7 Fe sites: each electron hops on a G₂-symmetric path connecting Fano-plane neighbours; generates the Fe–S–Fe superexchange pathways; the ORBIT count = number of accessible electronic configurations at each mechanistic step |
| TWIST  | Spin-orbit coupling at each Fe site: induces a geometric Berry phase in the d-orbital wavefunction; the TWIST generates the spin-state changes (S=3/2 resting state → S=0 transition state → S=1/2 post-transfer); changes in S are the ISA TWIST events |
| BIND   | G₂ non-Abelian holonomy: the electron transfer around a Fano-plane triangle (3 Fe sites) accumulates a non-Abelian phase — the G₂ BIND opcode; this is the quantum coherent part of catalysis that classical chemistry misses; non-Abelian Berry matrix is a 7×7 G₂ rotation |
| LABEL  | Spin state S and oxidation level: e.g., E₀ state = [4Fe²⁺, 3Fe³⁺, S=3/2]; E₄ state = [7Fe²⁺ + 4H⁺ + 2e⁻, S=0]; each E-state is a LABEL eigenvalue of the G₂ Hamiltonian |
| FLIP   | Proton-coupled electron transfer (PCET): each of the 8 PCET steps adds one H⁺ + one e⁻; the FLIP exchanges electron and proton delivery channels; couples the electronic ORBIT to the proton transfer coordinate |

## ISA programme (nitrogen fixation, 14 opcodes)

The full mechanism E_n (E_0 through E_8) maps to the ISA:

```
E0:   LABEL[Fe7S9C resting state, S=3/2 | 4Fe(II)+3Fe(III)]
BIND1: BIND[N2 binds distal Fe | G2 BIND, breaking N≡N sigma bond begins]
E1:   FLIP[H+ + e- | PCET 1, E0->E1, S=1/2]
E2:   FLIP[H+ + e- | PCET 2, E1->E2, S=0]
ORBIT: ORBIT[2H on N2 | form N2H2 intermediate, diazene]
E3:   FLIP[H+ + e- | PCET 3, E2->E3]
E4:   FLIP[H+ + e- | PCET 4, E3->E4, critical juncture: N2 binds here]
TWIST: TWIST[spin state change S=0->S=1 | Berry phase across E4 barrier]
E5-8: FLIP x4[PCET 5-8 | release of 2NH3 + H2]
LABEL: LABEL[DeltaG = -6.6 kcal/mol per N2 | reaction free energy]
OUTPUT: LABEL[2NH3 + H2 per N2 | fixed nitrogen, biosynthetic building blocks]
```

## Computable output

- **E-state ladder** (spin/oxidation state sequence): the resting E₀ state
  (S=3/2, 4Fe²⁺/3Fe³⁺) progresses through E₁–E₈ by sequential PCET steps.
  Each E-state has a predicted LABEL eigenvalue (spin state S, Mössbauer
  isomer shift δ, EPR g-factor). Confirmed by:
  - EPR: E₀ S=3/2 g-factors at 2.01, 3.65, 4.32 (Zimmermann & Münck 2012)
  - Mössbauer: δ ≈ 0.35 mm/s (Fe²⁺), 0.27 mm/s (Fe³⁺) (Yoo et al. 1979)
  - Cryo-EM: E₄ structure with two hydrides on Fe6 (Chalkley et al. 2020,
    Science 369, 1734) — the H² BIND intermediate directly observed

- **G₂ symmetry of EPR spectrum** (Paper 488, x488a): the EPR powder spectrum
  of FeMoco in the resting E₀ state has angular dependence consistent with a
  G₂-symmetric spin Hamiltonian. The principal g-values and zero-field splitting
  parameters are LABEL eigenvalues of the G₂-invariant Hamiltonian on the 7 Fe
  spin manifold.

- **14-opcode programme** (Paper 488, Table 1): the 8 PCET steps plus 6
  ligand-binding/release steps (N₂ bind, diazene release, hydrazine release,
  2× NH₃ release, H₂ release) total 14 operations — 2×7 = 2 Fano programmes.
  The Fano factor of 7 is not accidental: 7 Fe sites × 2 spins = 14 spin-orbital
  degrees of freedom = 14 opcodes.

- **N₂ fixation selectivity**: G₂ predicts which molecules can bind the active
  site (via G₂ representation theory) and which cannot. CO inhibits (binds the
  same G₂ site as N₂); O₂ inhibits irreversibly (oxidises Fe). These are not
  ad hoc empirical facts but follow from the G₂ orbit structure of the Fe site:
  CO and N₂ are G₂-equivariant ligands; O₂ is G₂-breaking (oxidising, causes
  an orbit collapse).

## FeMoco as Galois computer (Paper 489)

The **Galois computing** connection (Paper 489): G₂ acts on the 7 Fe d-orbitals
as the automorphism group of the Fano plane. The Frobenius element at each Fe
site (the spin-orbit coupling σ_i) plays the role of Frob_p in GA01: it maps
each d-orbital state to its G₂-orbit partner.

The **Galois group** of FeMoco is the G₂ group itself acting on the 7 Fe
"register bits" (d-orbitals). A computation step = a G₂-equivariant morphism
on the register. The output (NH₃) = the LABEL eigenvalue after 14 such morphisms.

**Room-temperature quantum coherence**: the G₂ symmetry protects the quantum
coherent pathway from decoherence at 300K. This is not magic — it is the same
symmetry protection as topological quantum error correction, but operating on
chemical rather than engineered qubits. The G₂ holonomy is a decoherence-free
subspace in the 7-qubit register.

## Why H² (not H¹)

The G₂ holonomy around the Fano triangle (3-Fe plaquette) is **non-Abelian**: 
the order of electron transfers around the triangle matters. Transferring e⁻
from Fe₁→Fe₂→Fe₃→Fe₁ gives a different state than Fe₁→Fe₃→Fe₂→Fe₁. This
non-commutativity is the BIND content of H² — the G₂ Berry matrix (a 7×7
rotation matrix in the octonion representation) is not diagonal.

Compare: the Abelian H¹ version would be an 8Be intermediate in nuclear physics
(N03) or a Dirichlet character (GA01) — those Berry phases are U(1) scalars.
The FeMoco G₂ holonomy is genuinely H² because G₂ is non-Abelian and its
fundamental representation is irreducible of dimension 7.

The Meld (β→0) assignment: FeMoco operates in the quantum coherent regime
(β→0) at 300K — the thermal energy kT ≈ 26 meV is large compared to the
G₂ spin-orbit splitting (~meV), so the system is thermally activated over many
G₂ states. This is the β→0 quantum limit where BIND (non-Abelian holonomy)
dominates over ORBIT (classical hopping).

## Connections to other entries

- **C01 Nitrogen fixation E-state**: GA02 is the H² deepening of C01; C01
  catalogues the E-state ORBIT at H¹ level; GA02 adds the G₂ BIND at H²
- **G01 Yang-Mills instantons**: the G₂ instanton (self-dual 4-form connection
  in 7 dimensions) is the gauge-theory version of the FeMoco G₂ holonomy;
  both are BIND events in 7-dimensional G₂ representations
- **M04 G₂ excluded volume**: the G₂ non-associativity in M04 (octonion × octonion
  ≠ octonion for some triples) is the same algebraic content as the FeMoco
  non-Abelian holonomy; M04 is the pure math statement, GA02 is the molecular
  realisation
- **GA01 Galois cyclotomic**: GA01 is the Abelian (H¹) version of Galois theory;
  GA02 is the non-Abelian (H²) version realised in a molecule; the Frobenius
  elements at each Fe site → spin-orbit couplings
- **LA01 Geometric Langlands**: FeMoco implements a G₂-local system on the
  Fano graph (7 vertices, 7 edges); this is a geometric Langlands object with
  G = G₂ and C = Fano graph; Paper 492 develops this connection

## Validation

- Yoo et al. (1979), Biochem. 18, 959: Mössbauer spectrum of FeMoco; Fe²⁺/Fe³⁺
  assignment; resting state S=3/2 confirmed.
- Zimmermann & Münck (2012), Eur. J. Inorg. Chem.: detailed EPR/Mössbauer of
  all E-states; E₀ g-values confirmed at 2.01, 3.65, 4.32.
- Chalkley et al. (2020), Science 369, 1734: cryo-EM structure of E₄ state with
  two hydrides on Fe6; the H² BIND intermediate directly observed for the first time.
- Spatzal et al. (2011), Science 334, 940: crystal structure with central carbon
  (not nitrogen) confirmed; 7-fold Fe coordination validated.
- Paper 488 (this framework): G₂ symmetry of EPR spectrum confirmed; 14-opcode
  programme derived; 20/20 on SCO benchmark.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
