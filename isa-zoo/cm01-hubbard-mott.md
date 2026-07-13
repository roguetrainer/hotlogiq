---
layout: default
title: "CM01 — Hubbard Model Mott Transition"
parent: ISA Zoo
nav_exclude: true
---

# CM01 — Hubbard Model Mott Transition

| Field | Value |
|-------|-------|
| **Domain** | Condensed Matter |
| **System** | Hubbard model at half-filling |
| **Group** | SU(2) (spin rotation) |
| **H^k tier** | H¹ |
| **ISA** | Forge (β ≈ β*) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · BIND · LABEL |
| **Papers** | Paper 563 |

---

## Physical system

The Hubbard model is the minimal model of interacting electrons on a lattice:

H = −t Σ_{⟨ij⟩,σ} c†_{iσ} c_{jσ} + U Σ_i n_{i↑} n_{i↓}

The hopping term t allows electrons to delocalise (ORBIT across the lattice);
the on-site repulsion U penalises double occupancy (two electrons on the same
site). At half-filling (one electron per site on average), the competition
between t and U drives the **Mott metal-insulator transition** at a critical
ratio U_c/t:

- **U/t ≪ 1 (metallic)**: electrons delocalise freely; Fermi liquid; ORBIT
  dominates; band theory applies.
- **U/t ≈ U_c/t ≈ 1.8** (critical, β* snap): double occupancy collapses;
  spectral weight transfers from quasiparticle peak to Hubbard bands; the
  Fermi surface topology changes.
- **U/t ≫ 1 (Mott insulator)**: electrons localise; one per site; charge
  gap 2U opens; spin physics described by Heisenberg antiferromagnet with
  J = 4t²/U; BIND dominates (superexchange = ring exchange = H² holonomy).

**x563c experiment** (Paper 563, SHA 174927e): Galerkin solver confirmed
the Mott β* snap at U/t ≈ 1.8 via double-occupancy collapse — directly
validating the ISA snap condition for the Hubbard model.

---

## Target category

**FermiLat(N)** — the category of fermionic lattice models on N sites with
SU(2) spin symmetry. Objects: N-site Fock spaces ⊗ᵢ (|0⟩, |↑⟩, |↓⟩, |↑↓⟩).
Morphisms: particle-hole symmetric unitaries preserving the half-filling
constraint ⟨n⟩ = 1. The Mott insulator is the terminal object in the
U/t → ∞ limit: a product state of localised spins with no charge fluctuations.

## Interpretation functor

F: C → FermiLat(N) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Hopping: c†_{jσ} c_{iσ} moves an electron from site i to site j; the kinetic ORBIT on the lattice; generates the Fermi sea in the non-interacting limit |
| TWIST  | Exchange: virtual hopping c†_{iσ} c_{jσ} c†_{jσ'} c_{iσ'} creates a Berry phase in the spin sector; generates the Heisenberg exchange J = 4t²/U in the Mott limit; the H¹ spin correlation |
| BIND   | Superexchange ring: four-site ring exchange t⁴/U³ term; generates the four-spin BIND interaction; becomes important near the Mott transition where ring exchange corrections to Heisenberg model are O(t/U)² |
| LABEL  | Double occupancy D = ⟨n_{i↑} n_{i↓}⟩: the order parameter; D ≈ 0.25 (free) → D ≈ 0 (Mott); the β* snap is D collapsing from ~0.15 to ~0.02 at U_c/t ≈ 1.8 (x563c) |

## ISA programme

```
INIT:     LABEL[half-filling: <n> = 1 per site]         -- constraint
FREE:     ORBIT[t * c†_j c_i | hopping, U=0 limit]      -- Fermi sea (H0)
INTERACT: LABEL[U * n_up * n_dn | on-site repulsion]    -- H0 energy penalty
DOUBLOCC: LABEL[D = <n_up n_dn> | double occupancy]     -- order parameter
SNAP?:    LABEL[D collapsing? | U/t near 1.8]           -- beta* test (x563c)
EXCHANGE: TWIST[J = 4t^2/U | spin exchange in Mott limit]  -- H1 spin physics
RING:     BIND[K = 4t^4/U^3 | ring exchange]            -- H2 correction
OUTPUT:   LABEL[metal if U<Uc, Mott insulator if U>Uc]  -- phase label
```

## Computable output

- **Double occupancy D(U/t)**: computed by x563c (Galerkin solver) for the
  1D Hubbard chain. D decreases monotonically from D = 0.25 (U=0, free fermions)
  through D ≈ 0.15 (U/t = 1) to D ≈ 0.02 (U/t = 4). The **β* snap at U/t ≈ 1.8**
  is where dD/d(U/t) is maximum — the sharpest change in double occupancy,
  the ISA snap condition. Validated against exact Bethe ansatz results (Lieb-Wu
  1968) for 1D; DMFT for infinite dimensions.
- **Mott gap** Δ = U − W (U large): charge gap that opens in the insulating phase.
  For U ≫ t: Δ ≈ U − 2zt where z is the coordination number. The two Hubbard
  bands (lower: singly-occupied; upper: doubly-occupied) are LABEL eigenvalues
  separated by Δ. In 1D (Bethe ansatz): Δ = 0 for all U > 0 (no true Mott
  transition in 1D at T=0), but D still shows the crossover.
- **Heisenberg exchange** J = 4t²/U in the Mott limit: the TWIST output.
  Néel temperature T_N ∝ J; spin-wave velocity v_s = J√2 (square lattice).
  Confirmed in cuprate parent compounds (La₂CuO₄: J ≈ 130 meV, U/t ≈ 8).
- **Spectral weight transfer**: in ARPES, the quasiparticle peak at the Fermi
  energy loses spectral weight Z as U increases; Z → 0 at the Mott transition
  (Brinkman-Rice theory). Z is the ORBIT amplitude — it measures how much of
  the electron propagation is coherent (ORBIT-like) vs incoherent (blocked by U).

## The Mott transition as β* snap

The Mott transition is the archetype of a **correlation-driven β* snap**: it
is not driven by symmetry breaking (no order parameter in the Landau sense for
the charge sector at half-filling in the paramagnetic Mott state) but by the
change in the ORBIT topology of the Fermi surface.

In the ISA framework:
- **Metallic phase** (U < U_c): the Fermi surface is a large ORBIT enclosing
  half the Brillouin zone (Luttinger theorem). ORBIT is the dominant opcode;
  TWIST gives spin fluctuations; BIND is perturbative.
- **At U_c** (β* snap): the quasiparticle residue Z → 0; the ORBIT coherence
  collapses; spectral weight transfers from quasiparticle peak to incoherent
  Hubbard bands. The Fermi surface topology changes from a large electron Fermi
  surface to (in the Mott state) no Fermi surface at all.
- **Mott insulating phase** (U > U_c): no ORBIT (charge is localised); TWIST
  dominates (spin exchange J = 4t²/U via virtual hopping); BIND appears as
  ring exchange corrections K = 4t⁴/U³.

The snap condition from x563c: **double occupancy D collapses at U/t ≈ 1.8**
for the Hubbard chain. This is the ISA snap: D is the ORBIT overlap (probability
of two electrons sharing a site), and it measures the coherence of the hopping
ORBIT. When D → 0, ORBIT is suppressed and TWIST takes over.

## Connection to cuprate superconductivity

The cuprate high-temperature superconductors (La₂CuO₄, YBa₂Cu₃O₇, ...) are
doped Mott insulators — they sit at U/t just above the Mott transition, doped
with holes that can move through the localised spin background. The ISA story:

| Doping level | Phase | ISA |
|-------------|-------|-----|
| 0 (undoped) | Mott antiferromagnet | TWIST (Heisenberg J) |
| Under-doped | Pseudogap | TWIST + partial ORBIT (doped holes) |
| Optimal doped | d-wave superconductor | BIND (Cooper pairs via spin fluctuation exchange) |
| Over-doped | Conventional metal | ORBIT (Fermi liquid recovers) |

The superconducting dome is the region where BIND (Cooper pairing from TWIST
spin fluctuations) wins over ORBIT (Fermi liquid). The pseudogap is the TWIST-
dominated regime where spin correlations persist but charge order is absent.
The Mott transition at U_c is the β* snap that makes all of this possible —
without it, cuprates would be ordinary metals.

## Cold-atom validation

The Hubbard model has been realised exactly in ultracold fermionic atoms
(⁴⁰K or ⁶Li) in optical lattices, where U/t is tunable via Feshbach resonances
and lattice depth:

- Jördens et al. (2008), Nature 455, 204: Mott insulating state observed at
  half-filling via double-occupancy suppression — directly measuring D ≈ 0
  in the Mott phase. The ISA LABEL output (D → 0) confirmed.
- Greif et al. (2013), Science 340, 1307: short-range spin correlations (TWIST,
  Heisenberg exchange J) measured via spin-sensitive imaging.
- Mazurenko et al. (2017), Nature 545, 462: long-range antiferromagnetic order
  (TWIST ordering) imaged directly at U/t ≈ 7.

## Validation

- Lieb & Wu (1968): exact Bethe ansatz solution for 1D Hubbard chain; no true
  Mott gap in 1D at T=0, but D(U/t) exactly computed.
- x563c (Paper 563, SHA 174927e): Galerkin solver; β* snap at U/t ≈ 1.8
  confirmed numerically.
- DMFT (Georges et al. 1996, Rev. Mod. Phys.): exact solution in d=∞;
  Mott transition at U_c/t = 2.9√2; Z → 0 confirmed analytically.
- Cuprates: J ≈ 130 meV in La₂CuO₄ from neutron scattering (Coldea et al.
  2001); consistent with J = 4t²/U at U/t ≈ 8.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
