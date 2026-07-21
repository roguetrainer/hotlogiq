# Spectroscopy and Bonding as Dual Functors: The Spec ⊣ Lan Adjunction in Molecular Chemistry

**Paper 640** | Working title | Target: *Journal of Chemical Physics* or *Accounts of Chemical Research*

---

## Outline (Draft)

### §0. Abstract (TBD — write last)

The variational principle and spectral decomposition are dual operations in quantum chemistry, yet taught separately. This paper makes the duality explicit using category theory: spectroscopy (Spec = limit = Gelfand spectrum) and bonding (Lan = colimit = left Kan extension) are related by a fundamental adjunction Spec ⊣ Lan. The unit of the adjunction is the Rayleigh-Ritz variational principle; the counit is spectral completeness. We demonstrate this duality across three molecules of increasing complexity: **H₂** (where the adjunction is exact), **N₂ dissociation** (where it breaks down, necessitating H¹ corrections), and **Fe(II) spin-crossover** (where it guides the choice between competing ground states). The ISA tier structure — H⁰ (ORBIT), H¹ (TWIST), H² (BIND) — emerges as a classification of when the duality persists (H⁰ exact, H¹ adds obstructions, H² causes instability). This reframes computational chemistry as a geometric optimization on the Grassmannian Gr(k,n), with profound implications for method selection and active-space design.

---

### §1. Introduction

#### 1.1 The disconnect in chemistry pedagogy

Standard quantum chemistry textbooks present two seemingly unrelated problems:
- **Problem A (spectroscopy):** Diagonalize the electronic Hamiltonian. Output: eigenvalues E₁ ≤ E₂ ≤ ... and eigenvectors ψ₁, ψ₂, ...
- **Problem B (bonding):** Minimize ⟨ψ|H|ψ⟩/⟨ψ|ψ⟩ over trial wavefunctions. Output: ground-state energy E₀ and wavefunction ψ₀.

These are taught independently, with no mention of their relationship. Yet they are deeply connected:
- Problem A directly outputs Problem B's answer (the ground state is ψ₁, the lowest eigenstate).
- Problem B can be inverted: from the optimal ψ, spectral completeness tells you the eigenspectrum.

**The duality is invisible because textbooks treat these as algorithms, not geometric objects.**

#### 1.2 Category theory makes the duality explicit

We make three claims:

1. **Spectroscopy is a limit** in the category of Hilbert spaces: it finds the most general object that maps into all eigenspaces simultaneously.

2. **Bonding is a colimit** (left Kan extension): it finds the most general wavefunction that all trial wavefunctions map into.

3. **They are adjoint functors:** Spec ⊣ Lan. The unit η is Rayleigh-Ritz; the counit ε is completeness.

This perspective reveals:
- Why these problems are dual, not separate
- When the duality breaks (H¹ obstructions)
- How to generalize beyond H₂ (Grassmannian geometry)
- Why FeMoco needs H² (BIND), not just H⁰ + H¹

#### 1.3 Why this matters for chemistry

**Current practice:** Chemists choose computational methods (HF, CCSD, CASSCF, DFT) by trial-and-error or empirical rules.

**ISA perspective:** The adjunction structure tells you what you need:
- If Spec ∘ Lan ≈ identity → single-reference methods (HF) sufficient
- If Spec ∘ Lan breaks → multi-reference (CASSCF) necessary
- If H¹ corrections become large → method must capture Berry phases (QMC, CI)
- If H² enters → genuine entanglement / non-Abelian effects (FeMoco, FMO)

#### 1.4 Roadmap

We demonstrate the Spec ⊣ Lan duality across three molecules:
- **H₂** (§3): Perfect example. Spectrum and bonding are exact duals. Gr(1,2) is 1D circle.
- **N₂ dissociation** (§4): The adjunction breaks at bond-breaking. H¹ corrections grow. Shows when single-reference fails.
- **Fe(II) spin-crossover** (§5): Two competing ground states on Gr(k,n). ISA shows why both LS and HS are "right" — one dominates depending on thermal and field conditions.

---

### §2. Category-Theoretic Setup

#### 2.1 Limits, colimits, and adjoints (for chemists)

*Minimal jargon, maximum intuition.*

**Limit (Spec):** Given a diagram of eigenspaces, the limit is the most general object that projects into all of them simultaneously. Example: an eigenspace of H is the equaliser {ψ : Hψ = λψ}.

**Colimit (Lan):** Given a diagram of trial vectors, the colimit is the most general object that they all project into. The ground-state wavefunction is the colimit: it is the unique point on Gr(k,n) that no trial wavefunction can exceed in energy.

**Adjoint functors:** Two functors F ⊣ G (read "F left-adjoint to G") satisfy:
$$\text{Hom}_\mathcal{D}(F(X), Y) \cong \text{Hom}_\mathcal{C}(X, G(Y))$$

For chemistry:
- F = Lan (bonding): takes a trial wavefunction to an energy value
- G = Spec (spectroscopy): takes an eigenvalue to an eigenstate
- The isomorphism is: "minimizing energy is equivalent to projecting onto eigenstates"

#### 2.2 The Grassmannian Gr(k,n)

The space of all k-dimensional subspaces of ℂⁿ.

**In chemistry:** If you have n active orbitals, the ground state lives on Gr(k,n), where k is the number of electrons (or rank of the variational ansatz).

**Metric:** The Fubini-Study metric dθ² makes Gr(k,n) a Riemannian manifold. Bond stretching traces curves on Gr(k,n); Berry phases are solid angles swept.

**Stratification:** H⁰ = Gr(k,n) itself; H¹ = 1-forms (Berry connection); H² = 2-forms (Chern class, curvature).

#### 2.3 The ISA tier structure (review)

| Tier | Opcode | Meaning | Cohomology | When it appears |
| --- | --- | --- | --- | --- |
| H⁰ | ORBIT | Eigenspace, fixed point | Global sections | Always (spectral theorem) |
| H¹ | TWIST | Berry phase, obstruction | 1-forms on Gr(k,n) | When Spec ∘ Lan ≠ id |
| H² | BIND | Non-Abelian holonomy, entanglement | 2-forms, Chern classes | When multiple active spaces couple |

**Key insight:** The moment H¹ is needed, you *know* single-reference (HF) fails. The moment H² appears, you need BIND-level methods.

#### 2.4 The adjunction Spec ⊣ Lan

**Precise statement (chemistry version):**

Let $\mathcal{C}$ = category of finite-dim Hilbert spaces with G-symmetry.
- **Lan: Trial vectors → Energy values** (optimization functor)
- **Spec: Eigenvalues → Eigenvectors** (spectral functor)

**Unit:** $\eta_\psi = \text{Rayleigh-Ritz}$
$$\eta: \psi \mapsto \min_{\phi \in \text{trial}} \langle \phi | H | \phi \rangle / \langle \phi | \phi \rangle$$

**Counit:** $\varepsilon_\lambda = \text{Completeness}$
$$\varepsilon: \lambda \mapsto \sum_{n} (\text{proj}_n) | n \rangle \langle n |$$

**The isomorphism:** $\varepsilon_\psi \circ \eta_\psi = \text{id}$ iff ψ is an exact eigenstate.

**When does it break?** When H¹ corrections become large: $\eta \circ \varepsilon \neq \text{id}$.

---

### §3. Example 1: H₂ Molecule (Perfect Case, H⁰ only)

#### 3.1 Setup

Two H atoms at distance R. Two 1s atomic orbitals: φ₁ (on nucleus 1), φ₂ (on nucleus 2).

Hamiltonian acts on 2D space: $H \in M_2(\mathbb{C})$ (2×2 matrix).

#### 3.2 The spectrum side (Spec)

Diagonalize:
$$H = \begin{pmatrix} E_0 & t \\ t & E_0 \end{pmatrix}$$

(where $t$ = resonance integral, $E_0$ = atomic orbital energy)

Eigenvalues: $E_- = E_0 - t$ (bonding), $E_+ = E_0 + t$ (antibonding)

Eigenvectors: 
$$\psi_- = \frac{\phi_1 + \phi_2}{\sqrt{2}}, \quad \psi_+ = \frac{\phi_1 - \phi_2}{\sqrt{2}}$$

**ORBIT opcode:** The eigenvalue decomposition is the H⁰ ORBIT operation.

#### 3.3 The bonding side (Lan)

Minimize Rayleigh-Ritz over trial vectors:
$$E(\theta) = \frac{\langle \psi(\theta) | H | \psi(\theta) \rangle}{\langle \psi(\theta) | \psi(\theta) \rangle}$$

where $\psi(\theta) = \cos(\theta) \phi_1 + \sin(\theta) \phi_2$ (a point on $\text{Gr}(1,2) = \mathbb{RP}^1 \cong S^1/\sim$).

**Computation:**
$$E(\theta) = E_0 - t \cos(2\theta)$$

Minimum at $\theta = 0$ (or $\pi/2$ in the other direction): $E_{\min} = E_0 - t = E_-$.

**Optimal wavefunction:** $\psi_{\text{opt}} = \phi_1 + \phi_2$ (to leading order) = $\psi_-$ ✓

**The Grassmannian:** Gr(1,2) = S¹. The bonding curve traces the energy surface on this circle; the ground state is the lowest point.

#### 3.4 The adjunction in action

**(Spec → Lan, unit η):** 
Given spectrum {E₋, E₊}, Rayleigh-Ritz tells you: "The optimal trial vector is ψ₋, achieving energy E₋."

**(Lan → Spec, counit ε):**
Given optimal ψ_opt = (φ₁ + φ₂)/√2, decompose using completeness:
$$\psi_{\text{opt}} = c_- \psi_- + c_+ \psi_+$$

At the ground state: c₋ = 1, c₊ = 0 (exact alignment).

**The circle closed:** Spectrum → optimal vector → back to spectrum. No loss.

#### 3.5 H¹ corrections (absent here)

The H¹ correction measures mismatch between ψ_opt and the true ground state. For H₂ exact: H¹ correction = 0.

**Why?** Because Gr(1,2) is 1-dimensional. There are no "loops" on S¹ to create Berry phases. Berry phase π = Berry phase 3π? No — winding number makes it intrinsic. But for a *single* wavefunction, no closed loop.

(H¹ appears when you have competing ground states or when you move around Gr(k,n) and accumulate phase.)

---

### §4. Example 2: N₂ Dissociation (H⁰ → H¹ Transition)

#### 4.1 Physical setup

Two N atoms approaching from infinity (R → ∞) to equilibrium (R ≈ 1.1 Å) to dissociation (R → ∞ again with separated atoms).

**Active space:** 2 nitrogen 2p orbitals (σ, σ*), 4 electrons (two pairs).

**Key phenomenon:** At large R, the single-reference Hartree-Fock ground state becomes wrong. Two determinants become equally important.

#### 4.2 Single-reference picture (R small, HF valid)

HF ground state: $| \psi_0^{HF} \rangle = \psi_-^{HF} |\uparrow\downarrow\rangle$ (both electrons in bonding orbital with opposite spins).

Spectrum (HF): $\psi_-^{HF}$ is lowest eigenstate of HF Hamiltonian.

Bonding (HF Lan): Minimize over single-determinant trial vectors → finds $\psi_-^{HF}$.

**Adjunction exact:** Spec ∘ Lan ≈ id. The HF solution is correct.

#### 4.3 The avoided crossing (R intermediate, HF begins to fail)

At R ≈ 1.1 Å, two electronic states cross:
- **State A:** Both electrons in σ (single-reference HF picture)
- **State B:** One electron in σ, one in σ* (ionic configuration)

In the exact full-CI spectrum, these avoid crossing (curve-crossing rule for same symmetry).

**Problem for HF:** HF finds a single Slater determinant. It cannot simultaneously describe A and B. At the crossing, HF gives a *wrong* answer because it's not on the optimal point on Gr(k,n).

**H¹ corrections enter:** The Berry phase accumulated along the avoided crossing (the loop that goes up one state and down the other) is exactly the obstruction that makes Spec ∘ Lan ≠ id.

#### 4.4 Multi-reference picture (CASSCF, Gr(k,n) properly explored)

CASSCF optimizes over the *full* 2-electron configurations on Gr(2,4):

$$\psi_{\text{CASSCF}}(R) = c_A(R) |\sigma^2\rangle + c_B(R) |\sigma \sigma^*\rangle$$

where c_A and c_B depend on R and are optimized by CASSCF.

**Spectrum (exact):** Diagonalize full CI matrix → two roots E₀^{CI}(R), E₁^{CI}(R).

**Bonding (CASSCF):** Minimize ⟨ψ|H|ψ⟩ over all linear combinations on Gr(2,4) → finds the lowest eigenstate exactly.

**Adjunction restored:** Spec ∘ Lan = id. CASSCF recovers the exact ground state because Gr(2,4) is large enough.

#### 4.5 Berry phase at the avoided crossing

**Geometric picture:** As R increases through the crossing, the ground-state wavefunction traces a curve on Gr(2,4). At the avoided crossing, this curve is a closed loop (or loops around another state).

**Berry phase:** Parallel transport of the ground state around this loop gives a phase exp(iγ), where γ is the solid angle swept on Gr(2,4).

**Chemical meaning:** This Berry phase is the H¹ correction. For N₂, it's O(1), making HF severely wrong.

**ISA language:** TWIST (H¹ Berry phase) is now essential. You cannot use H⁰ alone (ORBIT).

#### 4.6 Why this matters: Method selection

- **R < 1 Å (HF valid):** Spec ⊣ Lan is nearly exact. H¹ small. Use HF.
- **R ≈ 1.1 Å (crossover):** H¹ becomes O(1). Use CASSCF.
- **R > 2 Å (dissociation):** HF completely wrong. CASSCF essential.

**The ISA predicts when methods fail:** The β* snap threshold (where ORBIT's fixed point becomes unstable) occurs exactly at the avoided crossing.

---

### §5. Example 3: Fe(II) Spin-Crossover (H⁰, competing states, method selection)

#### 5.1 Physical setup

Fe(II) complexes with 6 d-electrons. Two competing ground states:
- **Low spin (LS):** t₂g⁶ eg⁰, S = 0 (singlet), ~140 cm⁻¹ above excited state
- **High spin (HS):** t₂g⁴ eg², S = 2 (quintet), ~140 cm⁻¹ below LS at T=0

**Thermal crossover:** Around T_spin ≈ 50–150 K (depending on ligands), the system switches from LS to HS.

**The chemistry:** Spin-crossover is useful for molecular switches, memory, sensors. But computational prediction is hard because small energy differences matter.

#### 5.2 Spectrum side (Spec)

Diagonalize electronic Hamiltonian (with spin-orbit coupling and ligand field):

**Root 1 (LS):** E_LS, wavefunction ψ_LS (mostly t₂g⁶)

**Root 2 (HS):** E_HS, wavefunction ψ_HS (mostly t₂g⁴ eg²)

Energy difference: ΔE ≈ E_HS - E_LS (should be ≲ 1000 cm⁻¹ to get interesting spin-crossover).

**Key challenge:** Both roots are "correct" — neither is fundamentally wrong. The spectrum is bimodal.

#### 5.3 Bonding side (Lan) — the Grassmannian search

Now we ask: **Which trial wavefunction minimizes the energy?**

The trial space is not just Gr(1,n). It's a union of two Grassmannians:
- Gr_LS: space of single-determinant wavefunctions consistent with LS (all 6 electrons in t₂g)
- Gr_HS: space of single-determinant wavefunctions consistent with HS (4 in t₂g, 2 in eg)

**Rayleigh-Ritz optimization:**
$$E(\theta, \text{orbitals}) = \min_{\psi \in \text{trial}} \langle \psi | H | \psi \rangle / \langle \psi | \psi \rangle$$

At T=0 in zero field, this search typically finds LS (lower energy).

#### 5.4 Why both minima exist: ISA perspective

The Grassmannian has two **separate basins** in the energy landscape:
- One minimum in Gr_LS (LS ground state)
- One local minimum in Gr_HS (metastable until temperature increases)

**Spectrum side (Sec 5.2):** Two eigenvalues. The lower eigenvalue corresponds to the LS basin.

**Bonding side (Sec 5.3):** Two minima on Gr. The lower minimum also corresponds to LS.

**Adjunction:** For each basin separately, Spec ⊣ Lan is (approximately) satisfied. The adjunction is "locally" exact in each basin.

**But globally?** If you try to smoothly deform from ψ_LS to ψ_HS on Gr, you must cross a saddle point (barrier). This crossing is NOT accounted for by local Spec ⊣ Lan duality. **H¹ obstructions appear here too.**

#### 5.5 Computational validation

**Input data (assumed, or cite your x588 work):**
- Fe(II)(NCS)₂(L)₄ complex (various L)
- DFT LS energy, HS energy, LS/HS gap
- Experimental LS/HS gap (calorimetry, Mössbauer, magnetometry)

**Predictions using ISA:**

1. **CASSCF(6,5)** active space (6 electrons, 5 d-orbitals):
   - Both LS and HS minima found on Gr(6,5)
   - Energy difference ΔE_CASSCF ≲ 500 cm⁻¹ (close to expt)

2. **Spin-orbit coupling** (H¹ TWIST):
   - Calculated using second-order perturbation theory
   - LS-HS gap shifts by ~100–200 cm⁻¹
   - Barrier to interconversion appears

3. **Thermal distribution** (β* snap):
   - Above T_spin, thermal energy kT ≳ ΔE
   - System explores both basins
   - χ_T(T) shows characteristic S-shape (experimental signature)

#### 5.6 Why the ISA helps here

**Without ISA:** You have two HF determinants (LS and HS), no principled way to choose or mix them.

**With ISA:** 
- H⁰ (ORBIT): Both LS and HS are eigenspaces of the Hamiltonian. The Grassmannian has two minima.
- H¹ (TWIST): Spin-orbit coupling creates a barrier between them.
- Method choice: CASSCF for both, possibly DFT with XC functional tuned to get gap right.

**Pedagogical gain:** Students learn that "two competing ground states" is not an anomaly or a failure of theory — it's a feature of the Grassmannian geometry. Both states are "on the manifold." The adjunction Spec ⊣ Lan is locally satisfied in each basin.

---

### §6. Comparison Across All Three Examples

#### 6.1 Table: Grassmannian dimension, Spec ⊣ Lan status, method needed

| Molecule | Active space | Gr dim | Adjunction status | H¹ present? | Method |
| --- | --- | --- | --- | --- | --- |
| H₂ | σ, σ* (2 e⁻) | Gr(2,2) = point | Exact | No | HF sufficient |
| N₂ (eq.) | σ, σ*, π, π* (4 e⁻) | Gr(4,4) = point | Exact | No | HF or CASSCF |
| N₂ (disso.) | σ, σ*, π, π* (4 e⁻) | Gr(4,4) but 2-config | ~Exact | Yes (at crossing) | CASSCF |
| Fe(II)-SCO | t₂g, eg (6 e⁻) | Gr(6,5) | Locally exact, barrier | Yes (SOC) | CASSCF + SOC |

**Key observation:** As Gr dimension increases and you move away from points, H¹ obstructions grow. The adjunction becomes "locally true" but globally has barriers.

#### 6.2 Energy landscape visualization

*Sketch (conceptual):*

```
H₂: Gr = circle (S¹), one minimum
     E
     |     ___
     |    /   \    (unique minimum)
     |___/     \___
      0  π/2  π   θ

N₂ (eq.): Gr = higher-dim, one deep well
     E
     |       
     |    ___
     |   /   \
     |__/     \___
         stable

N₂ (disso.): Gr = two wells separated by barrier
     E
     |    ___        ___
     |   /   \      /   \  
     |__/     \____/     \__
        LS     barrier   HS

Fe-SCO: Gr = two wells, small barrier, temperature-dependent
     E
     |    ___        ___
     |   /   \  /\  /   \  
     |__/     \/  \/     \__
        LS    small    HS
               barrier
```

#### 6.3 Lessons

1. **H₂ is special:** Gr is 0-dimensional (a point). No geometric complexity. Spectrum and bonding are literally the same thing.

2. **N₂ teaches a lesson:** Gr grows. The avoided crossing is a genuine geometric feature. HF misses it because it only looks in a subspace of Gr. CASSCF explores the full Gr and finds both roots.

3. **Fe-SCO is realistic:** Multiple basins with barriers. Thermal effects matter. Both states are "correct" depending on context. Method choice depends on which basin you want.

4. **General principle:** The tier structure (H⁰, H¹, H²) emerges from Gr geometry:
   - H⁰ = counting paths/eigenvalues in Gr
   - H¹ = Berry phases, loops on Gr, barriers
   - H² = entanglement, non-Abelian effects, fusion rules

---

### §7. Connection to FeMoco (preview, not detailed)

**Why we don't cover FeMoco in detail here:**

FeMoco = Fe₇S₉C with 55 active electrons on Gr(55, ~70). This Grassmannian is so high-dimensional that:
- Multiple H¹ obstructions
- Genuine H² (BIND) effects from non-Abelian active-space structure
- Method needs to capture not just Berry phases but non-Abelian holonomy

**Sketch:** N₂ and Fe-SCO are H⁰ + H¹. FeMoco is H⁰ + H¹ + H² (genuine three-tier system). A dedicated paper (separate from this one) should develop FeMoco using the same Spec ⊣ Lan language.

---

### §8. Implications for Computational Chemistry

#### 8.1 Method selection flowchart

```
Problem: Given a molecule, which computational method?

1. Is Spec ⊣ Lan exact? (Check: does single-ref HF give right spectrum?)
   YES → Use HF or DFT
   NO  → Proceed to 2

2. Is H¹ large? (Check: are there loops on Gr? Berry phases?)
   NO  → Grassmannian is "simple" (low-dim, few loops)
   YES → Use CASSCF + CI or QMC

3. Is H² nonzero? (Check: is entanglement in the active space non-Abelian?)
   NO  → Continue with CASSCF/CI
   YES → Use tensor-network / TQFT-inspired methods
```

#### 8.2 Active-space design

**ISA guidance:**
- Start with minimal Gr (smallest k and n such that both LS and HS/relevant states fit).
- Check β* snap: where does the adjunction break?
- Expand Gr until Spec ⊣ Lan is restored.

**Example (Fe-SCO):**
- Try CASSCF(6,3) [5d + 1 extra orbital]: too small, misses eg.
- Try CASSCF(6,5) [5d orbitals]: captures both LS (t₂g⁶) and HS (t₂g⁴ eg²). Good.
- Try CASSCF(6,7) [5d + 2 others]: overkill, computational cost ↑↑↑.

#### 8.3 When DFT fails and why

**ISA perspective:** DFT is fundamentally H⁰-only (ORBIT). It finds a single eigenstate and its energy. It cannot:
- Treat excited states (Spec needs multiple roots)
- Handle competing ground states (Grassmannian needs multiple basins)
- Capture Berry phases (H¹ TWIST)

**When does this matter?** Exactly at the β* snap: when Spec ⊣ Lan breaks down. At that moment, DFT begins to fail systematically.

---

### §9. Discussion

#### 9.1 Why category theory?

Standard chemistry never mentions limits, colimits, or adjoints. Why introduce them?

**Answer:** They make precise what physicists/chemists feel intuitively: "spectrum and bonding are somehow dual." Category theory is the *language* that makes this duality rigorous and generalizable.

**Payoff:** Once you see Spec ⊣ Lan, you recognize it in:
- QEC (syndrome measurement ↔ recovery)
- Finance (spot price ↔ forward contract)
- Number theory (Galois reps ↔ automorphic forms)

This is not a chemistry problem. It's a fundamental structure.

#### 9.2 Limitations of this approach

- **Not a black box:** Understanding the adjunction requires learning category theory. It's not plug-and-play.
- **Computational cost:** Finding the exact ground state on Gr(k,n) is still NP-hard for large k,n. The ISA doesn't solve that; it just clarifies the problem.
- **FeMoco is still hard:** Even with the ISA framework, FeMoco requires careful active-space selection and robust CI solver.

#### 9.3 Next steps

This paper should:
1. Convince chemists that Spec ⊣ Lan is a real thing.
2. Show it works on three concrete examples (H₂, N₂, Fe-SCO).
3. Predict when it breaks (β* snap, entry of H¹).
4. Point toward a follow-up paper on FeMoco (H⁰ + H¹ + H²).

---

### §10. Conclusion (TBD — write last)

Placeholder: Summarize Spec ⊣ Lan, emphasize universality across chemistry/QEC/other domains, call for next-generation textbooks that teach spectrum and bonding as dual operations, not separate problems.

---

## Computational work (to be done or referenced)

### Experiments needed:

**H₂:**
- x640a: Rayleigh-Ritz minimization on Gr(1,2) for H₂ at various R. Plot E(θ) and overlay HF/FCI energies.

**N₂:**
- x640b: CASSCF(4,4) dissociation curve. Extract: LS/HS character as function of R, Berry phase at avoided crossing.

**Fe-SCO:**
- x640c: CASSCF(6,5) LS and HS minima. Energy difference, geometry distortion LS vs HS.
- x640d: Spin-orbit coupling effect on LS-HS gap.
- x640e: Thermal population (Boltzmann distribution) T vs χ_T (magnetic susceptibility).

### Figures needed:

1. **Conceptual:** Adjoint functor diagram (Spec and Lan as arrows).
2. **H₂:** Energy curve E(θ) on Gr(1,2); spectrum vs. trial vectors.
3. **N₂:** Dissociation curve showing HF failure and CASSCF recovery; avoided crossing geometry.
4. **Fe-SCO:** Gr(6,5) energy landscape showing two basins; LS and HS structures.
5. **Comparison table:** Active spaces, method choices, H¹ status.
6. **Thermal:** χ_T(T) curve for Fe-SCO showing spin-crossover.

---

## Timeline estimate

- **§§1-2 (intro + category theory):** 2–3 pages, ~1 week
- **§3 (H₂):** 2–3 pages, ~1 week (mostly existing work)
- **§4 (N₂):** 3–4 pages, ~2 weeks (need to run/analyze CASSCF)
- **§5 (Fe-SCO):** 4–5 pages, ~3 weeks (reference your x588 work, add SOC, thermal)
- **§§6-10 (comparison, implications, conclusion):** 3–4 pages, ~1 week

**Total:** ~8–10 weeks, 12–15 pages target.

---

## Notes for the author

- **Tone:** Accessible to computational chemists; not assume prior category theory knowledge.
- **Citations:** Cite Paper 578 (Spec ⊣ Lan explainer), Papers 570/574/575/577 (Grassmannian bonding), Papers 488/490 (Fe chemistry).
- **Novelty:** Emphasize that framing *variational principle as a Kan extension* is new to quantum chemistry. This is not in any textbook.
- **Impact:** If successful, this paper could change how computational chemistry is taught and practiced.

---

## Decision points (author to decide)

1. **Include N₂ dissociation?** It illustrates the β* snap and H¹ entering. Yes → paper longer but more complete. No → focus on H₂ + Fe-SCO (9–10 pages instead of 12–15).

2. **How much category theory?** Currently: minimal (Sec 2.1–2.4 is ~2 pages). Could reduce to 1 page (more hand-wavy) or expand to 4 pages (fully rigorous). Recommendation: keep at 2 pages.

3. **Computational or purely theoretical?** Should x640a/b/c/d/e be actual calculations, or illustrative sketches? Recommendation: actual calculations make it much stronger.

4. **Target journal?** *JCP* (technical, likes theory). *Accounts* (review-style). *Nature Chemistry* (if impact is high enough). Recommendation: *JCP* or *Accounts*.

