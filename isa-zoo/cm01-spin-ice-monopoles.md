---
layout: default
title: "CM01 — Spin Ice Magnetic Monopoles"
parent: ISA Zoo
nav_exclude: true
semiring: Tropical → Clifford
---

# CM01 — Spin Ice Magnetic Monopoles

| Field | Value |
|-------|-------|
| **Domain** | Condensed Matter / Frustrated Magnetism |
| **System** | Pyrochlore spin ice Dy₂Ti₂O₇ or Ho₂Ti₂O₇ |
| **Group** | U(1) (emergent gauge field) |
| **H^k tier** | H⁰ (ice rules) → H² (monopole pair creation via BIND) |
| **ISA** | Forge (ice rules) → Origami Valence (monopole dynamics) |
| **Status** | Validated (Castelnovo et al. 2008; Morris et al. 2009) |
| **Opcodes** | ORBIT · LINK · BIND · MERGE · TWIST · FLIP |
| **Papers** | Paper 672 (notes); OC01 (related) |

---

## Physical system

In pyrochlore spin ice (Dy₂Ti₂O₇, Ho₂Ti₂O₇), rare-earth magnetic moments
("spins") sit on a network of corner-sharing tetrahedra. The ice rules — two
spins pointing in, two pointing out per tetrahedron — define the ground state
manifold. Castelnovo, Moessner and Sondhi (2008) showed that **topological
defects in the ice rule are emergent magnetic monopoles**: a tetrahedron with
3-in/1-out carries effective magnetic charge +q; one with 1-in/3-out carries
−q. These charges obey the **Dirac quantisation condition** 2eg = nℏc, just
as Dirac monopoles do.

The monopoles interact via a magnetic Coulomb law V(r) = μ₀q²/4πr, are
connected by **Dirac strings** (chains of reversed spins carrying no energy
in spin ice — the string tension is zero), and have been directly observed
via neutron scattering (Morris et al. 2009, Fennell et al. 2009).

---

## Why this entry requires BIND

This is the **first ISA zoo entry in condensed matter where BIND is
irreducible** — the programme cannot be written using only H⁰/H¹ opcodes.

The reason: monopole pair creation from the vacuum (the ice-rule ground
state) is the Frobenius comultiplication

$$\delta: I \;\longrightarrow\; |\mathrm{mono}^+\rangle \otimes |\mathrm{mono}^-\rangle$$

This maps the vacuum (unit object I) to a two-monopole state. In the ISA,
this is exactly **BIND**: a single state splitting into two entangled objects
with opposite topological charge. No sequence of ORBIT + TWIST + MERGE + LINK
can produce two objects from one — only BIND (δ: A → A⊗A) can, and its
degenerate form (δ: I → A⊗A, creation from vacuum) is the monopole pair
creation event.

Contrast with G01 (Yang-Mills instantons): there, BIND computes the second
Chern class ∫tr(F∧F) — a topological invariant of an *existing* configuration.
Here, BIND *creates* the topological objects themselves.

---

## Target category

**IceGauge** — the emergent U(1) gauge theory of spin ice, whose objects are
monopole charge sectors (charge q ∈ ℤ × q₀) and whose morphisms are
gauge-equivariant spin-flip sequences. The Dirac string is the morphism
connecting +q and −q objects; its length is gauge-dependent (unobservable)
while the endpoint charges are gauge-invariant.

## Interpretation functor

F: Origami ISA → IceGauge defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT | Ice-rule ground state: 2-in/2-out tetrahedron. Eigenvalue = zero magnetic charge. The "orbital" is the tetrahedron's charge sector. |
| BIND | Monopole pair creation: flip a spin to create a 3-in/1-out (+q) and 1-in/3-out (−q) pair from a 2-in/2-out ground state. The two monopoles are entangled — they must be created together (total charge conservation). |
| LINK(+q, −q, ν=1) | Dirac string connecting the monopole pair. Linking number ν = number of reversed spins in the connecting chain. String tension = 0 in spin ice (unlike in a real magnet). |
| TWIST | Extend or reroute the Dirac string — a Reidemeister move on the spin chain. Physical realisation: flipping a spin along the string moves one monopole by one lattice step. |
| MERGE | Monopole annihilation: +q and −q meet and annihilate back to the ice-rule ground state. Frobenius multiplication μ: A⊗A → A (or → I at the vacuum). |
| FLIP | Neutron scattering measurement: project onto a specific monopole charge sector. Readout of the ±q eigenvalue. |
| SNAP↑ | Freeze-out transition: below T* ≈ 1K, monopole pair creation becomes thermally suppressed; the system freezes into the ice-rule manifold. SNAP↑ marks the entry into the monopole-active (H²) regime as T increases above T*. |

## ISA programme

```
-- Monopole pair creation and separation in spin ice

GROUND:   ORBIT[|ice⟩ | charge=0]              -- ice-rule ground state
CREATE:   BIND[|mono+⟩ ⊗ |mono−⟩]             -- pair creation (one spin flip)
STRING:   LINK[mono+, mono−, ν=1]              -- Dirac string (1 reversed spin)
SEPARATE: TWIST × N                             -- N spin flips extend string by N steps
COULOMB:  LABEL[V = μ₀q²/4πr]                 -- magnetic Coulomb potential (r = Nа)
OBSERVE:  FLIP[neutron scattering | ±q sector] -- experimental readout
ANNIHILATE: MERGE[mono+, mono−]                -- pair annihilation → ground state
```

**The full programme is:**
ORBIT → BIND → LINK → TWIST^N → FLIP → MERGE

The minimum programme that cannot be shortened: **BIND is irreducible**.
No rewriting in {ORBIT, TWIST, MERGE, LINK, FLIP} produces |mono+⟩⊗|mono−⟩
from |ice⟩.

## Computable output

- **Monopole charge**: q = ±2|J|/a (J = nearest-neighbour exchange, a =
  pyrochlore lattice constant). For Dy₂Ti₂O₇: q ≈ 4.6 μ_B/Å.
- **Dirac string tension**: exactly zero in nearest-neighbour spin ice (the
  "Coulomb phase"). Non-zero corrections appear from next-nearest-neighbour
  interactions — a Forge soft-threshold effect at finite β.
- **Monopole density**: ρ ∝ exp(−Δ/k_BT) where Δ = energy cost of one BIND
  event (one spin flip out of ice rule). For Dy₂Ti₂O₇: Δ ≈ 4K → ρ peaks
  around T ≈ 2K.
- **Magnetic Coulomb law**: V(r) = μ₀q²/4πr confirmed by neutron diffuse
  scattering (Fennell et al. 2009 Science 326, 415) — direct validation that
  the emergent monopoles are genuine magnetic charges.

## Connection to the ISA framework

**Spin ice monopoles are the only experimental H² condensed-matter system**
where BIND creates topological objects (rather than computing a topological
invariant of an existing field configuration):

| Entry | BIND role | Status |
|-------|-----------|--------|
| G01 (YM instanton) | Computes c₂ = ∫tr(F∧F) | Classical solution |
| G03 (Higgs) | SNAP↑ removes LINK (gauge breaking) | QFT |
| **CM01 (spin ice)** | **Creates |mono+⟩⊗|mono−⟩ from vacuum** | **Experimental ✓** |
| OC01 (Furey) | TWIST within octonionic H² fibre | Algebraic |

**Is this BIND associative or non-associative?** The spin ice monopole BIND
is *associative*: the underlying algebra is ℝ³ (the crystal lattice), and
magnetic charge addition is commutative and associative. The non-associative
octonionic BIND (G₂ 3-form) would require a material with G₂ lattice symmetry
and monopole-monopole-monopole three-body interactions of the form φ_{ijk}.
Such a material is not yet synthesised but is predicted by Paper 672 (§7, G₂
3-form test) to show a qualitatively different phase diagram.

**Relation to Dirac monopoles (OC01 §6):** spin ice monopoles are *emergent*
analogues of Dirac monopoles. The Dirac quantisation condition (LINK linking
number quantisation) holds for both — this is not a coincidence but the same
categorical statement (c₁ of the U(1) bundle ∈ ℤ) realised on different
substrates: fundamental (Dirac) vs emergent (spin ice).

**MGE connection:** the Forge ISA (finite β) describes the thermal
fluctuations of the ice-rule ground state — the partition function at
temperature T = 1/β. The spin ice phase transition at T* is a Forge
β* snap: below T* the system is frozen in H⁰ (ice rules dominate), above
T* it is active in H² (monopole pair creation BIND events). The hysteresis
of the T* transition maps to the MGE snap hysteresis of Paper 596.

## Validation

- **Pair creation**: Castelnovo, Moessner & Sondhi (2008) Nature 451, 42.
  Showed ice-rule defects carry magnetic charge ±q with Coulomb interactions.
  Exact mapping to Dirac monopoles via emergent U(1) gauge field.
- **Neutron scattering**: Morris et al. (2009) Science 326, 411; Fennell et al.
  (2009) Science 326, 415. Direct observation of monopole diffuse scattering
  and magnetic Coulomb law V(r) ∝ 1/r confirmed.
- **Dirac string**: Giblin et al. (2011) Nature Physics 7, 252. Direct
  visualisation of Dirac strings as chains of reversed spins.
- **Monopole current**: Bramwell et al. (2009) Nature 461, 956. Measurement
  of monopole drift in applied field — confirms charge ±q and mobility.

---

*Part of the [ISA Zoo](/isa-zoo/). See also: [G01 — Yang-Mills Instantons](/isa-zoo/g01-yang-mills-instanton), [OC01 — Furey Fermion Ladder](/isa-zoo/oc01-furey-fermion-ladder). Background theory: Paper 672 (where H² begins).*
