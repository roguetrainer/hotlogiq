---
layout: default
title: "Q05 — Quantum Teleportation"
parent: ISA Zoo
nav_exclude: true
---

# Q05 — Quantum Teleportation

| Field | Value |
|-------|-------|
| **Domain** | Quantum Computing |
| **System** | Bell pair + 2-qubit measurement + classical correction |
| **Group** | SU(2) × SU(2) (local operations on two-qubit system) |
| **H^k tier** | H¹ |
| **ISA** | Forge (β ≈ β*) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · BIND · LABEL · FLIP · FLOP |
| **Papers** | Paper 421, Paper 325 |

---

## Physical system

Quantum teleportation (Bennett et al. 1993) transfers an arbitrary qubit state
|ψ⟩ = α|0⟩ + β|1⟩ from Alice to Bob using:

1. A pre-shared Bell pair (entangled resource)
2. Alice's Bell measurement on her qubit + the input qubit (2 classical bits output)
3. Bob's conditional Pauli correction based on Alice's 2-bit measurement result

**No quantum channel is used** after the Bell pair is distributed — only 2
classical bits travel from Alice to Bob. The quantum information (α, β) is
teleported without physically moving any quantum system carrying it.

The protocol succeeds with probability 1 and perfectly reconstructs |ψ⟩ at Bob's
location, regardless of α and β (which need not be known to Alice).

**Standard circuit**:
```
Alice: |ψ⟩ ──●── H ──[M_z]── c₁  ──────────────────
              │                                      
Bell:  |0⟩ ──X ── [M_z]────── c₂  ──────────────────
              
Bob:   |0⟩ ─────────────────── X^{c₂} ── Z^{c₁} ──|ψ⟩
```

---

## Target category

**TeleportCat** — the category of quantum channels from Alice's lab to Bob's lab
that can be implemented using only shared entanglement and classical communication
(LOCC: Local Operations + Classical Communication). Objects are two-qubit states;
morphisms are LOCC protocols. Teleportation is the canonical morphism in TeleportCat:
it implements the identity channel id: ℒ(ℂ²) → ℒ(ℂ²) using one Bell pair and
2 bits of classical communication.

The impossibility of superluminal communication follows from the structure of
TeleportCat: Alice's measurement result is uniformly random (LABEL gives 00, 01,
10, 11 with equal probability 1/4); Bob cannot reconstruct |ψ⟩ without receiving
the classical bits, so no information travels faster than the classical channel.

## Interpretation functor

F: C → TeleportCat defined by:

| Opcode | F(opcode) |
|--------|-----------|
| BIND   | Bell pair preparation: |Φ⁺⟩ = (|00⟩+|11⟩)/√2; the entangled resource; H² BIND between Alice's qubit A and Bob's qubit B; non-separable state that cannot be written as |a⟩⊗|b⟩; the BIND is the core resource |
| ORBIT  | CNOT (CX) gate in Bell measurement circuit: the input qubit |ψ⟩ controls Alice's Bell-pair qubit; creates a 3-qubit entangled state before measurement |
| TWIST  | Hadamard in Bell measurement: rotates the input qubit by π/2 in the Bloch sphere, transforming |ψ⟩'s ORBIT trajectory into the Bell basis; the TWIST aligns |ψ⟩ with the Bell measurement eigenstates |
| LABEL  | Bell measurement outcome: Alice measures in the Bell basis; result ∈ {|Φ⁺⟩, |Φ⁻⟩, |Ψ⁺⟩, |Ψ⁻⟩} gives 2 classical bits (c₁, c₂); each outcome with probability 1/4 regardless of |ψ⟩ |
| FLIP   | Bob's X correction: if c₂=1, Bob applies X (bit-flip) to his qubit; corrects the σ_x component of the teleportation error |
| FLOP   | Bob's Z correction: if c₁=1, Bob applies Z (phase-flip) to his qubit; corrects the σ_z component; after FLIP+FLOP Bob holds |ψ⟩ exactly |

## ISA programme

```
PREPARE: BIND[|Phi+> = (|00> + |11>)/sqrt(2) | Bell pair, Alice qubit A + Bob qubit B]
INPUT:   ORBIT[|psi> = alpha|0> + beta|1> | arbitrary input qubit at Alice]
ENTANGLE:ORBIT[CNOT(|psi>, A) | 3-qubit state: alpha|0>|Phi+> + beta|1>|Psi+>]
ROTATE:  TWIST[H on |psi> register | Bell basis rotation]
MEASURE: LABEL[Bell measure on (|psi>, A) | 2-bit outcome (c1,c2), uniform]
SEND:    LABEL[c1,c2 sent classically to Bob | 2 classical bits, no superluminal]
FIX_X:  FLIP[if c2=1: Bob applies X | bit-flip correction]
FIX_Z:  FLOP[if c1=1: Bob applies Z | phase-flip correction]
OUTPUT:  ORBIT[Bob holds |psi> exactly | teleportation complete]
```

## Computable output

- **Fidelity F = 1**: teleportation achieves unit fidelity for any |ψ⟩ — Bob's
  state after correction is exactly |ψ⟩. This is the primary LABEL output.
  Compare: the no-cloning theorem forbids copying |ψ⟩; teleportation is not
  cloning because Alice's qubit is destroyed in the Bell measurement.

- **Classical communication cost**: exactly 2 bits per teleported qubit. This is
  the LABEL eigenvalue of the TeleportCat morphism. Below 2 bits is impossible
  (Holevo bound: cannot transmit more than 1 qubit of quantum information per
  classical bit, so 1 qubit needs ≥ 1 bit; but the quantum part requires 2 for
  the Pauli correction). The 2-bit cost = the TWIST content of aligning Alice's
  measurement to Bob's correction.

- **Entanglement cost**: exactly 1 ebit (one Bell pair) per teleported qubit.
  This is the BIND cost. The entanglement is consumed (the Bell pair is destroyed
  by Alice's measurement); to teleport again, a fresh Bell pair is needed.

- **Bell state discrimination** (LABEL): the four Bell states |Φ±⟩ = (|00⟩±|11⟩)/√2,
  |Ψ±⟩ = (|01⟩±|10⟩)/√2 correspond to the four Pauli corrections {I, X, Z, XZ}.
  Alice's measurement result (2 bits) indexes which Pauli correction Bob needs —
  this is the LABEL-to-FLIP/FLOP map.

- **Experimental fidelity** (from Bouwmeester et al. 1997): F = 0.82 ± 0.01 for
  teleportation of photon polarisation states (limited by detector efficiency and
  partial Bell measurement). Furusawa et al. (1998): F > 0.58 threshold (classical
  limit for coherent states). Pan et al. (2012): F = 0.89 for free-space 143km.
  Current best: trapped-ion teleportation at F > 0.999 (Nölleke et al. 2013).

## Why H¹ (not H²)

The Bell pair (BIND) is H², but the **teleportation protocol** operates at H¹:
- The BIND (Bell pair) is prepared once and used as a static resource; the
  dynamic protocol then only uses ORBIT (CNOT), TWIST (Hadamard), LABEL (measure),
  FLIP/FLOP (Pauli corrections)
- The Pauli corrections X^{c₂} Z^{c₁} are H¹ (Clifford operations — they are
  elements of the Pauli group, the H¹ TWIST group)
- The only H² content is the Bell pair itself; once prepared, the remaining
  protocol is entirely H¹. This is why teleportation uses 1 ebit (H² BIND)
  but only classical + Clifford operations (H¹) afterwards.

Compare to Q03 (Steane code): the syndrome measurement uses H¹ Clifford
operations, and the error is the H² content being detected. Teleportation has
the same structure: the BIND (Bell pair, H²) is the resource; the protocol (H¹)
uses it up.

## The teleportation identity in ISA

The fundamental identity that teleportation implements:

FLIP[c₂] ∘ FLOP[c₁] ∘ LABEL[Bell] ∘ TWIST[H] ∘ ORBIT[CNOT] ∘ BIND = id

This is the ISA statement that the protocol composed with the Bell pair equals
the identity channel — perfect quantum state transfer. The composition is exact
(not approximate) — teleportation is the canonical example of an ISA programme
that achieves a perfect outcome at H¹ using one H² resource.

## Connections to other entries

- **Q06 Superdense coding**: the exact dual protocol; teleportation sends 1 qubit
  using 1 ebit + 2 bits; superdense coding sends 2 bits using 1 ebit + 1 qubit;
  same Bell pair resource, dual information-theoretic direction
- **Q07 CHSH game**: the Bell pair (BIND) in teleportation is the same entangled
  resource used in the CHSH strategy; CHSH measures the non-classicality of the
  BIND; teleportation uses the BIND for communication
- **Q03 Steane 7-qubit code**: teleportation is the primitive operation for fault-
  tolerant quantum computing; logical state teleportation is how magic states
  (H²) are injected into a stabiliser (H¹) code
- **QH01 Trapped-ion MS gate**: the Bell pair preparation uses the MS gate (QH01);
  teleportation on trapped-ion platforms uses QH01 for the BIND + TWIST

## Validation

- Bennett et al. (1993), PRL 70, 1895: original teleportation protocol; proved
  unit fidelity; 2-bit classical communication lower bound.
- Bouwmeester et al. (1997), Nature 390, 575: first photonic teleportation;
  F=0.82; partial Bell measurement (only 2 of 4 Bell states distinguished).
- Furusawa et al. (1998), Science 282, 706: continuous-variable teleportation
  of coherent states; F=0.58 surpassing classical limit.
- Pan et al. (2012): free-space photon teleportation over 143 km (Canary Islands);
  demonstrates feasibility for satellite quantum networks.
- Riebe et al. (2004), Nature 429, 734: deterministic qubit teleportation on
  trapped ions; F=0.75; all 4 Bell states distinguished.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
