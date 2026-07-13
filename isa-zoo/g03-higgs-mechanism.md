---
layout: default
title: "G03 — Higgs Mechanism and Electroweak Symmetry Breaking"
parent: ISA Zoo
nav_exclude: true
semiring: probabilistic
---

# G03 — Higgs Mechanism and Electroweak Symmetry Breaking

| Field | Value |
|-------|-------|
| **Domain** | Gauge Theory |
| **System** | SU(2)×U(1) scalar field with Mexican hat potential |
| **Group** | SU(2)×U(1) breaking to U(1)_EM |
| **H^k tier** | H¹ |
| **ISA** | Forge (β ≈ β*) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · SPLIT · SPLAT · LABEL |
| **Papers** | Paper 536, Paper 543 |

---

## Physical system

The electroweak sector of the Standard Model is a gauge theory with symmetry
group SU(2)_L × U(1)_Y. In the unbroken phase (T > T_c ≈ 100 GeV), all four
gauge bosons (W⁺, W⁻, W⁰, B) are massless — their gauge freedom is a H¹ TWIST
with no preferred vacuum direction. The Higgs field Φ is a complex SU(2) doublet
with a Mexican hat potential:

V(Φ) = −μ²|Φ|² + λ|Φ|⁴,  μ² > 0

The minimum is not at Φ = 0 but on the circle |Φ| = v/√2 where v = μ/√λ = 246 GeV
(the vacuum expectation value, VEV). Choosing any point on this circle breaks
SU(2)×U(1) → U(1)_EM. This is the **β* snap**: the ORBIT fixed point jumps from
the unstable top of the hat (φ = 0, unbroken symmetry) to the stable circle of
minima (|φ| = v/√2, broken symmetry).

**The Higgs mechanism**: the three Goldstone bosons (the angular excitations
around the circle of minima) are not physical particles — they are eaten by the
W⁺, W⁻, Z gauge bosons via a SPLIT+SPLAT operation, becoming the longitudinal
polarisation mode of each massive boson. The photon (the unbroken U(1)_EM
direction) remains massless. The one remaining physical degree of freedom is the
radial Higgs boson at m_H = 125.25 GeV.

---

## Target category

**Bun(G, M⁴)** — the category of principal G-bundles over Minkowski spacetime
M⁴, where G = SU(2)×U(1) in the unbroken phase and G = U(1)_EM in the broken
phase. The symmetry breaking is a **Schubert variety crossing** in the space of
gauge connections: the moduli space of flat G-connections has a stratum where
the Higgs VEV forces the connection to factor through U(1)_EM ⊂ SU(2)×U(1).
Morphisms are gauge transformations; the physical Hilbert space is the quotient
by gauge equivalence.

## Interpretation functor

F: C → Bun(G, M⁴) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Field evolution: Φ(x,t) rolls from the unstable maximum Φ=0 to the circle of minima \|Φ\|=v/√2; the Mexican hat gradient flow; snap from H¹ to H⁰ fixed point |
| TWIST  | Gauge freedom in the unbroken phase: the W/Z/γ gauge connections A_μ carry H¹ Berry phases; massless gauge bosons = flat H¹ bundles with no preferred section |
| SPLIT  | Goldstone decomposition: Φ = (v + h(x))/√2 · exp(iπᵃ(x)Tᵃ/v); split radial mode h (Higgs) from angular modes πᵃ (Goldstone bosons) |
| SPLAT  | Goldstone absorption: unitary gauge rotation removes πᵃ; angular modes become longitudinal polarisations of W±, Z; SPLAT merges Goldstone into gauge field |
| LABEL  | Mass eigenvalues: m_W = gv/2, m_Z = v√(g²+g'²)/2, m_H = v√(2λ); the ORBIT eigenvalues after snap; photon m_γ = 0 (unbroken U(1)_EM direction) |

## ISA programme

```
POTENTIAL: LABEL[V(Phi) = -mu^2|Phi|^2 + lambda|Phi|^4]  -- Mexican hat
UNSTABLE:  ORBIT[Phi=0 | local maximum, unbroken SU(2)xU(1)]  -- false vacuum
SNAP:      ORBIT[|Phi| -> v/sqrt(2) | roll to circle of minima]  -- beta* snap
SPLIT:     SPLIT[Phi = (v+h)/sqrt(2) * exp(i pi^a T^a / v)]  -- Higgs + Goldstones
GAUGE:     TWIST[A_mu -> A_mu + d_mu alpha | SU(2)xU(1) gauge]  -- unbroken TWIST
EAT:       SPLAT[pi^a -> longitudinal W_L^pm, Z_L]  -- Goldstone absorbed
PHOTON:    TWIST[A_mu^gamma | massless, U(1)_EM survives]  -- residual H1
MASSES:    LABEL[m_W=80.4 GeV, m_Z=91.2 GeV, m_H=125.25 GeV, m_gamma=0]  -- outputs
```

## Computable output

All four outputs are validated against experiment to four or more significant
figures — making this one of the most precisely tested entries in the zoo:

- **W boson mass** m_W = gv/2 = **80.377 ± 0.012 GeV** (PDG 2022). The LABEL
  eigenvalue of the W⁺/W⁻ ORBIT after symmetry breaking. Measured at LEP, Tevatron,
  LHC to sub-per-mille precision.
- **Z boson mass** m_Z = v√(g²+g'²)/2 = **91.1876 ± 0.0021 GeV** (PDG 2022).
  The Z is the combination of W⁰ and B that acquires mass; the orthogonal
  combination is the photon (m_γ = 0). The ratio m_W/m_Z = cos θ_W defines
  the Weinberg angle θ_W = 28.17° — the ORBIT angle of the symmetry-breaking
  direction.
- **Higgs boson mass** m_H = v√(2λ) = **125.25 ± 0.17 GeV** (ATLAS+CMS 2022).
  Discovered at LHC in 2012 (Englert-Brout-Higgs Nobel Prize 2013). The radial
  LABEL eigenvalue — the one degree of freedom that is not eaten by the gauge
  bosons. Its mass is not predicted by the Standard Model (λ is a free parameter),
  but once measured, all Higgs couplings to other particles are fixed.
- **Photon mass** m_γ = 0: the unbroken U(1)_EM direction survives as a massless
  TWIST — the residual H¹ after symmetry breaking. Tested to m_γ < 10⁻¹⁸ eV
  (cosmological bounds on photon dispersion).

## The H¹ → H⁰ snap in ISA language

The Higgs mechanism is not merely a mass-generation story — it is a precise
instance of the ISA's β* snap event, mapping H¹ structure onto H⁰ eigenvalues.

**Before the snap** (T > T_c): the gauge group SU(2)×U(1) is unbroken. All
four gauge connections A_μ carry H¹ TWIST freedom — they are flat bundles with
no preferred section. The Higgs field Φ = 0 sits at the top of the Mexican hat;
this is the H¹ regime where TWIST generates the dynamics and masses are zero
(no ORBIT eigenvalue).

**At the snap** (T = T_c ≈ 100 GeV in the early universe, or equivalently
|μ²/λ| = v² in the zero-temperature field theory): the Higgs rolls off the
unstable maximum. The H¹ flat connection is no longer consistent with the
potential minimum — the gauge symmetry must break. This is the Schubert variety
crossing: the moduli space of flat SU(2)×U(1) connections intersects the locus
where |Φ| = v/√2.

**After the snap** (T < T_c): the symmetry is broken to U(1)_EM. Three of the
four H¹ TWIST generators are eaten (SPLIT+SPLAT). Three gauge bosons acquire
LABEL mass eigenvalues. One TWIST survives (the photon). The Higgs boson is the
new H⁰ ORBIT mode — the radial vibration around the fixed point |Φ| = v/√2.

**The Goldstone absorption is SPLIT+SPLAT**: SPLIT decomposes Φ into radial (h)
and angular (πᵃ) modes. SPLAT merges the angular modes into the longitudinal
degree of freedom of the massive gauge bosons. Before SPLAT: 4 massless gauge
bosons + 4 real Higgs components = 8 degrees of freedom. After SPLAT: 3 massive
gauge bosons (3 × 3 polarisations = 9) + 1 massless photon (2 pol.) + 1 Higgs
scalar = 9 + 2 + 1 = 12... wait, the count is:

- Before: 4 gauge bosons × 2 (massless, transverse only) + 4 Higgs real components
  = 8 + 4 = 12 DOF
- After: 3 massive gauge bosons × 3 (transverse + longitudinal) + 1 massless
  photon × 2 + 1 Higgs = 9 + 2 + 1 = 12 DOF ✓

The DOF count is conserved: SPLIT+SPLAT is a BIND-free operation — no new H²
content is created. The Higgs mechanism is entirely H⁰ + H¹, which is why it
is ISA Forge (not Meld): no non-Abelian holonomy is required.

## Connection to the β-plane (Paper 543)

The electroweak phase transition is a **thermal snap event** on the real β-axis
of the β-plane. At inverse temperature β = 1/(k_B T):

- **β small** (T > T_c ≈ 100 GeV, early universe): thermal fluctuations dominate;
  Φ = 0 is the thermally averaged minimum; SU(2)×U(1) unbroken; all gauge bosons
  thermally accessible and massless
- **β = β*** (T = T_c): the Higgs potential develops a new minimum at |Φ| = v/√2;
  the electroweak phase transition; snap event
- **β large** (T ≪ T_c, today): Φ locked at VEV v = 246 GeV; masses fixed;
  U(1)_EM the residual symmetry; Origami regime for the W/Z (their masses freeze
  the ORBIT eigenvalues)

The transition is **first-order or second-order** depending on the Higgs mass:
- m_H < 72 GeV: first-order (discontinuous jump = ORBIT discontinuity at β*)
- m_H > 72 GeV (actual: 125 GeV): crossover (smooth — the snap is not sharp but
  a rapid continuous transition)

At m_H = 125 GeV, the electroweak transition is a smooth crossover, not a phase
transition. In ISA language: the ORBIT rolls smoothly from Φ=0 to |Φ|=v/√2
without a discontinuity; the β* snap is smeared over a range of temperatures.
This has a cosmological consequence: no electroweak baryogenesis from a crossover
(the Sakharov conditions require a first-order transition). The observed Higgs
mass rules out electroweak baryogenesis in the minimal Standard Model — a
physical conclusion that follows directly from the ISA snap condition.

## Connection to other zoo entries

- **G01 Yang-Mills instantons**: instantons are H² BIND events in the gauge
  sector above the electroweak transition; below the transition (in the Higgs
  phase), sphaleron processes (related to instantons) violate baryon number
- **L02 Deconfinement transition**: the QCD phase transition is the analogous
  snap in the SU(3) colour sector at T_QCD ≈ 150 MeV — same ISA structure,
  different group and temperature scale
- **SC01 BCS superconductor**: the Higgs mechanism *is* the relativistic field
  theory version of BCS — the photon acquires a mass inside a superconductor
  (London penetration depth = 1/m_photon) by the same SPLIT+SPLAT mechanism;
  Anderson (1963) showed this connection before Higgs (1964)
- **D05 KAM tori**: the electroweak crossover at m_H = 125 GeV is the Hamiltonian
  analogue of the last KAM torus breaking at the critical coupling ε*; both are
  β* snaps where the ORBIT fixed point changes character

## Validation

- W mass: Arnison et al. (1983), UA1/UA2, CERN. Discovery of W boson at
  m_W = 80.4 GeV; Nobel Prize in Physics 1984 (Rubbia, van der Meer).
- Z mass: measured at LEP (1989–2000) to m_Z = 91.1876 ± 0.0021 GeV via
  1.5×10⁷ Z decays; the most precisely measured boson mass.
- Higgs boson: ATLAS (Aad et al.) and CMS (Chatrchyan et al.), both 2012,
  Science. m_H = 125.25 ± 0.17 GeV; Nobel Prize in Physics 2013 (Englert, Higgs).
- Photon mass bound: Ryutov (2007) m_γ < 10⁻¹⁸ eV from solar wind measurements.
- Electroweak crossover (not first-order) at m_H = 125 GeV: Kajantie et al.
  (1996); Rummukainen et al. (1998); lattice QCD confirmation.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
