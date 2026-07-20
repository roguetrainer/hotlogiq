---
layout: default
title: Chemistry Roadmap
nav_order: 7
nav_exclude: true
---

# Chemistry Roadmap

How the ISA framework approaches chemistry — from first principles to reaction mechanisms,
without fitting parameters.

---

## The problem with the standard picture

Computational chemistry hands you a menu: Hartree-Fock, DFT, CCSD, CASSCF, FCI.
Each method makes different approximations. Choosing the right one requires
specialist expertise, and for the hardest systems — transition-metal complexes,
bond-breaking, catalytic transition states, biological electron transfer — every
commonly used method either fails silently or is prohibitively expensive.

The ISA framework does not replace these methods. It tells you *which stratum
each electron pair belongs to* before you compute anything, so you use the right
method on the right pairs automatically.

---

## The four layers

### Layer 0 — Topology: the sCeleTon

**What it is.** Given a molecule (atoms and connectivity only), draw the C/T graph:

- A **C-box** for every frozen electron pair — ionic bonds, lone pairs, core electrons.
  These pairs are closed to correlation. DFT or Hartree-Fock is exact here.
- A **T-arrow** for every active correlated pair — covalent bonds with partial
  character, resonance, multi-reference systems.
  These pairs are open and must be treated with correlated methods.

**What it costs.** Nothing beyond the Lewis structure. No basis set, no SCF
convergence, no functional.

**What it tells you.** How many T-arrows = the minimum active space size for
CASSCF. All C-boxes = H⁰, DFT is fine. A few T-arrows = H¹, CCSD will handle
it. Many T-arrows, or T-arrows with G₂ structure = H², CASSCF essential.

**The tool.** [`alchemi`](https://github.com/roguetrainer/alchemi) — builds the
sCeleTon from a molecular geometry and recommends the active space.

**Papers.** [doi:10.5281/zenodo.21300667](https://doi.org/10.5281/zenodo.21300667)
(Topological Active Space, Paper 588).

---

### Layer 1 — Geometry: θ_G and the Weyl coordinate

**What it is.** Run a cheap MP2 calculation. From the Natural Orbital Occupation
Numbers (NOONs), compute two quantities for each T-arrow pair:

- **θ_G** — the Grassmannian angle. Measures how far the ground-state wavefunction
  has moved from the single-determinant (Hartree-Fock) reference on the manifold
  Gr(n_e, n_orb). Small θ_G = ionic / weakly correlated. Large θ_G = covalent /
  strongly correlated / multi-reference.

  θ_G = 2 arccos(√(n_g / 2))

  where n_g is the NOON of the bonding orbital in the pair.

- **Weyl c₂** — the second Weyl chamber coordinate. Predicts DFT error with
  correlation r = 0.990 across all tested systems. If c₂ < δ (threshold), DFT
  or CCSD is reliable. If c₂ ≥ δ, CASSCF is required.

**What θ_G replaces.** Pauling electronegativity is a fitted table with no
geometric foundation. θ_G is a coordinate on a Riemannian manifold (the
Fubini-Study metric on the Grassmannian), computable from first principles,
that recovers the polarity ordering — LiF more ionic than HF, H₂ more covalent
than LiF — without any fitting.

**The β* snap.** At θ_G ≈ 20°, the MGE routing switches from H¹ to H².
This is the ionic → covalent crossover geometry: the point at which
NaCl transitions from Na⁺Cl⁻ to Na·Cl under bond stretching, or where
an Fe spin-crossover complex switches spin state under temperature.
The snap position is predicted, not fitted.

**Papers.** [doi:10.5281/zenodo.21277821](https://doi.org/10.5281/zenodo.21277821)
(Universal Bonding Theory, Paper 570).

---

### Layer 2 — Energetics: automatic method routing

**The routing table.** Once Layer 1 is done, each electron pair has a
stratum assignment. The router sends it to the right method:

| Stratum | θ_G | Weyl c₂ | Method | Why |
|---------|-----|---------|--------|-----|
| H⁰ (C-box) | < 5° | — | Freeze / DFT | Single-determinant exact |
| H¹ | 5°–20° | < δ | CCSD | Single-reference correlation sufficient |
| H² | > 20° | ≥ δ | CASSCF | Derivative discontinuity; DFT fails |

**The routing guarantees:**
- No silent failure (you know when DFT breaks before running it)
- No over-convergence (you don't CCSD pairs that need CASSCF)
- Minimal cost (you don't CASSCF pairs that CCSD can handle)

**Papers.** [doi:10.5281/zenodo.21373469](https://doi.org/10.5281/zenodo.21373469)
(Weyl-DFT Accelerator, Paper 596).

---

### Layer 3 — Mechanism: H² phase transitions

**What it is.** Once you know which pairs are H², look for **G₂ structure**
in the active space. The presence of G₂ geometry (a 14-dimensional subspace
of SU(n)) predicts *which mechanism* the reaction takes.

**Example: Spin crossover.** Iron complexes with unpaired d-electrons undergo
spin-state transitions. In the sCeleTon language, this is the H⁰→H¹→H² cascade
as temperature lowers:
- Above T_c: all pairs are H⁰ (spin-free)
- Near T_c: active pairs move to H¹ (intermediate spin)
- Below T_c: H² structure locks in (low-spin)

The H² tier predicts the cooperativity and hysteresis of the transition.

**Papers.** [doi:10.5281/zenodo.21373477](https://doi.org/10.5281/zenodo.21373477)
(G-Step CO₂ Fixation, Paper 603); [doi:10.5281/zenodo.21345099](https://doi.org/10.5281/zenodo.21345099)
(Protein Folding ISA, Paper 515).

---

## Which paper for which use case?

Choose your question to find the most relevant papers.

### "I want to understand enzyme kinetics"

1. **[Paper 515: Protein Folding ISA](https://doi.org/10.5281/zenodo.21345099)**
   - Spontaneous symmetry making (SSM) as the H¹→H² transition
   - Chaperones as quantum error correction (H² QEC)
   - Validated on protein stability prediction (AUC=0.981)
   - **Start here if:** You want to understand how proteins pick a fold

2. **[Paper 510: Kinetic Proofreading as QEC](https://doi.org/10.5281/zenodo.21345099)**
   - Proofreading IS quantum error correction
   - H⁰×H¹×H² gives 10⁹/10⁶/10⁴ fidelity for Pol III/RNAP/ribosome
   - **Start here if:** You want enzyme accuracy without invoking "selection pressures"

3. **[Paper 447: Opcode Rosetta Stone](https://doi.org/10.5281/zenodo.21219710)**
   - Chemical reactions as PROP morphisms
   - Composite reactions from simple opcode sequences
   - **Start here if:** You want to code up enzyme pathways

---

### "I want to predict transition metal complex properties"

1. **[Paper 488: Galois Chemistry](https://doi.org/10.5281/zenodo.21373477)**
   - DFT as H² computation (quantum group structure from spin)
   - Why transition metals need non-abelian treatment
   - **Start here if:** You have TM complexes and want to know when DFT fails

2. **[Paper 596: Weyl-DFT Accelerator](https://doi.org/10.5281/zenodo.21373469)**
   - Weyl c₂ as DFT failure detector (r=0.990)
   - MGE soft routing replaces hard CASSCF threshold
   - H¹↔H² snap at β* is a genuine phase transition
   - **Start here if:** You want a quantitative rule for "when to CASSCF"

3. **[Paper 563: Hubbard/Mott ISA](https://doi.org/10.5281/zenodo.21300671)**
   - Hubbard model as H² computation
   - Strongly correlated systems stratified by U/t ratio
   - **Start here if:** You work with heavy fermion systems

4. **[Paper 570: Universal Bonding Theory](https://doi.org/10.5281/zenodo.21277821)**
   - θ_G (Grassmannian angle) predicts bond order without fitting
   - Lewis, MO, and VB theories unified via ISA tiers
   - Validated on benzene resonance energy (54.5 vs 57.4 mEh)
   - **Start here if:** You want a geometric foundation for bonding

---

### "I want to design a new enzyme"

1. **[Paper 490: Galois Protein Design](https://doi.org/10.5281/zenodo.21277821)**
   - Forward: AlphaFold → ISA tier stratification → design constraints
   - Inverse: desired H² property → ProteinMPNN → candidate sequences
   - Validated on RNR, PSII, hemoglobin cooperativity
   - **Start here if:** You want to design with thermodynamic control, not trial-and-error

2. **[Paper 515: Protein Folding ISA](https://doi.org/10.5281/zenodo.21345099)**
   - SSM theorem: G_fold is created by H¹→H² transition, not pre-existing
   - Chaperones perform H² error correction
   - **Start here if:** You want to understand protein folding dynamics

---

### "I think my system might be topological"

1. **[Paper 565: FQHE ISA](https://doi.org/10.5281/zenodo.21219756)**
   - Fractional quantum Hall effect as H² topology
   - Laughlin wavefunction as ISA-tier structure
   - **Start here if:** You have 2D electrons in strong B field

2. **[Paper 414, 416, 420: Chiral & Topological Chemistry](https://zenodo.org/communities/thermyon/)**
   - Chiral molecules as H¹/H² topological objects
   - Topological insulators as chemistry with decoherence
   - **Start here if:** You suspect topological protection

3. **Contact us** — H³ (affine Kac-Moody) in chemistry is frontier research.
   If you suspect it, let's talk.

---

## FAQ

### Q: Is my simple organic molecule H¹ or H²?

**A:** Use the sCeleTon (Layer 0). If your molecule has only σ bonds and no transition metals / radicals → mostly H⁰/H¹. If it has aromaticity (resonance) or open-shell character → H¹–H² boundary. If it has a transition metal → definitely H². Use Layer 1 (θ_G, Weyl c₂) to know exactly.

---

### Q: Does ISA replace DFT?

**A:** No. ISA tells you **which tier** your system is in. It then tells you which computational method is appropriate for that tier. DFT is an H² method (it assumes single-determinant ground state; breaks at H² derivative discontinuity). Use ISA to know when DFT will fail silently, *before* you run it. Then use CCSD (H¹) or CASSCF (H²) as appropriate.

---

### Q: My system has strong correlation. Should I just use CASSCF?

**A:** Not necessarily. CASSCF is H² (best for systems with real topological obstruction). If your system is H¹ (single-reference but correlated), CCSD is cheaper and often accurate. Use Layer 1 (Weyl c₂, θ_G) to know the difference. The routing table tells you the right method.

---

### Q: Can H³ (affine Kac-Moody) appear in chemistry?

**A:** Unknown. We predict it appears in topological materials. Experiments I & J (knot theory, differentiable-tropical-networks) show H³ exists in nature. Whether it appears in *chemistry* is an open question. You might discover it first! If you suspect topological structure beyond standard H¹/H², reach out.

---

### Q: Where's the formal mathematical proof of H³/H⁴?

**A:** Coming in **Paper 622 (July 2026)**: "The Hum ISA as a Monoidal PROP." For now:
- **Theory:** Papers 619–621 ground H⁰–H² rigorously in category theory
- **Experiments:** Experiments A–J (knot theory) validate H³/H⁴ empirically (virtual knots 2.64×, loop braids 6.5×)
- **Paper 622:** Will formally verify H³/H⁴ fit into the monoidal PROP structure

This is not weakness — it's how science works. We've theorised, predicted, and experimented. Paper 622 will complete the proof.

---

### Q: How do I cite this framework in a paper?

**A:** Cite the Origami ISA manifesto:

```
@article{buckley2024origami,
  title={Origami: An Open ISA for Quantum-Classical Systems},
  author={Buckley, Ian R. C.},
  journal={Zenodo},
  doi={10.5281/zenodo.21428853},
  year={2024}
}
```

For chemistry-specific applications, also cite:
- Paper 570 (Universal Bonding Theory)
- Paper 596 (Weyl-DFT Accelerator)
- Paper 488 (Galois Chemistry)
- Paper 490 (Galois Protein Design)

---

## Related Resources

- **[Opcodes Reference](opcodes.md)** — The five generators (LABEL, ORBIT, TWIST, BIND, FLIP) and their categorical meaning
- **[β-Plane Geometry](forge-meld.md)** — How Forge and Meld ISAs relate via Wick rotation
- **[ISA Hierarchy](reference/isa-hierarchy.md)** (coming soon) — Family tree: Carnot → Origami/Forge/Raven/Hum
- **[Categorical Rigor](reference/categorical-rigor.md)** (coming soon) — What's proven vs experimental vs predicted
- **[All Papers](papers.md)** — Full bibliography with Zenodo DOIs

---

*Last updated: 2026-07-20*  
*Questions? [Contact us](mailto:contact@thermyon.ca)*
