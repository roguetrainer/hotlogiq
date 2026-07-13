---
layout: default
title: "Q06 — Superdense Coding"
parent: ISA Zoo
nav_exclude: true
---

# Q06 — Superdense Coding

| Field | Value |
|-------|-------|
| **Domain** | Quantum Computing |
| **System** | Shared Bell pair + single-qubit encoding + Bell measurement |
| **Group** | SU(2) (local Pauli operations on one qubit) |
| **H^k tier** | H¹ |
| **ISA** | Forge (β ≈ β*) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · BIND · LABEL · FLIP · FLOP |
| **Papers** | Paper 421, Paper 469 |

---

## Physical system

Superdense coding (Bennett & Wiesner 1992) sends 2 classical bits of information
by transmitting a single qubit over a quantum channel, using a pre-shared Bell
pair as the resource.

**The protocol** (sender Alice, receiver Bob, pre-shared |Φ⁺⟩):

| 2 bits to send | Alice applies | Shared state becomes |
|---------------|--------------|---------------------|
| 00 | I (nothing) | |Φ⁺⟩ = (|00⟩+|11⟩)/√2 |
| 01 | X (bit-flip) | |Ψ⁺⟩ = (|01⟩+|10⟩)/√2 |
| 10 | Z (phase-flip) | |Φ⁻⟩ = (|00⟩−|11⟩)/√2 |
| 11 | iY = XZ | |Ψ⁻⟩ = (|01⟩−|10⟩)/√2 |

Alice sends her single qubit to Bob; Bob measures in the Bell basis and recovers
2 bits with certainty.

**The key insight**: Alice encodes 2 bits of classical information into *which*
of the 4 orthogonal Bell states the joint system is in — but the four Bell states
are only distinguishable jointly, not locally. Alice's single-qubit operation
selects among 4 globally distinguishable states using only H¹ local operations
(Pauli gates) applied to her half of the shared BIND (Bell pair).

---

## Target category

**DenseCat** — the dual of TeleportCat (Q05). Objects: two-qubit Bell states
{|Φ±⟩, |Ψ±⟩}; morphisms: single-qubit Pauli operations on Alice's qubit (the
encoding map) and Bell measurements on both qubits (the decoding map). The
superdense coding protocol is the canonical morphism Dense: 𝔽₂² → DenseCat
that sends each 2-bit string to the corresponding Bell state, then recovers it.

**Teleportation/superdense duality**: Q05 and Q06 use the same Bell pair (BIND
resource) in opposite directions:
- Q05 (teleportation): 1 qubit sent → 2 bits consumed; moves quantum information
- Q06 (superdense coding): 2 bits encoded → 1 qubit sent; moves classical information

This duality is not coincidental — it is the adjunction in TeleportCat between
encoding (Q06) and decoding (Q05 Bell measurement). The same BIND (|Φ⁺⟩) mediates
both; the direction of information flow depends on which party applies which operation.

## Interpretation functor

F: C → DenseCat defined by:

| Opcode | F(opcode) |
|--------|-----------|
| BIND   | Bell pair preparation: |Φ⁺⟩ = (|00⟩+|11⟩)/√2; Alice holds qubit A, Bob qubit B; the shared H² BIND resource |
| FLIP   | X encoding: Alice applies X to qubit A; |Φ⁺⟩ → |Ψ⁺⟩; encodes bit 1 in the X-type Bell state |
| FLOP   | Z encoding: Alice applies Z to qubit A; |Φ⁺⟩ → |Φ⁻⟩; encodes bit 1 in the Z-type Bell state |
| ORBIT  | Alice sends qubit A to Bob; this is a single-qubit quantum channel; the physical quantum communication step (the "dense" part: 1 qubit carries 2 bits) |
| TWIST  | Bell measurement rotation: Bob applies CNOT(A,B) then H on A; rotates from Bell basis to computational basis; same TWIST as the inverse of Bell pair preparation |
| LABEL  | Computational-basis measurement: Bob measures both qubits in |0⟩/|1⟩ basis after TWIST; recovers 2 bits (b₁,b₂) with certainty |

## ISA programme

```
PREPARE: BIND[|Phi+> = (|00>+|11>)/sqrt(2) | Bell pair shared]
ENCODE:  FLIP[if bit0=1: X on Alice's qubit A | X-type encoding]
         FLOP[if bit1=1: Z on Alice's qubit A | Z-type encoding]
SEND:    ORBIT[Alice sends qubit A to Bob | 1 qubit over quantum channel]
DECODE1: ORBIT[CNOT(A,B) at Bob | entanglement-breaking CNOT]
DECODE2: TWIST[H on A | Hadamard disentangles]
MEASURE: LABEL[measure both qubits in comp. basis | 2 bits output]
OUTPUT:  LABEL[(b1,b2) = original 2 bits | perfect recovery]
```

## Computable output

- **Channel capacity**: 2 classical bits per qubit channel use (when 1 ebit
  pre-shared). The Holevo bound says a single qubit can carry at most 1 classical
  bit without entanglement. Superdense coding achieves 2 bits — double the
  classical limit — by using the pre-shared BIND. This is the LABEL eigenvalue
  of DenseCat: capacity = 2 × (Holevo bound) when entanglement is available.

- **Bell state distinguishability**: the four Bell states are mutually orthogonal
  (⟨Φ⁺|Ψ⁺⟩ = 0, etc.) — they are the 4 elements of a complete orthonormal
  basis for ℂ²⊗ℂ². Bob's Bell measurement perfectly distinguishes them (unlike
  Alice's partial measurement in Q05, Bob has both qubits and can do the full
  Bell measurement). Output fidelity = 1 for each of the 4 possible inputs.

- **Encoding map** (FLIP × FLOP): the four Pauli operations {I, X, Z, iY} map
  |Φ⁺⟩ to the four Bell states bijectively. Since Alice operates on only one
  qubit (her half of the entangled pair), this requires H¹ local operations —
  no BIND is created by Alice; the existing BIND is used to "spread" Alice's
  local operation into a globally distinguishable state.

- **Experimental realisation** (Mattle et al. 1996, Phys. Rev. Lett. 76, 4656):
  superdense coding demonstrated with photons; 1.58 bits per photon transmitted
  (limited by partial Bell measurement — only 3 of 4 Bell states distinguished
  with linear optics); full 2 bits achievable with complete Bell measurement.

## Why 1 qubit sends 2 bits: the BIND amplification

The apparent paradox — how can 1 qubit carry 2 bits, when Holevo says only 1? —
is resolved by the BIND:

- Without the pre-shared BIND: Alice's qubit has a 2-dimensional Hilbert space;
  Holevo: at most log₂(2) = 1 bit per qubit
- With the pre-shared BIND: Alice's qubit + Bob's qubit form a 4-dimensional
  joint Hilbert space; the 4 Bell states span this space; log₂(4) = 2 bits
  are recoverable at Bob's end when he holds both qubits

The BIND "stores" one bit: it pre-correlates Alice's and Bob's qubits so that
Alice's single-qubit X or Z operation has a 2-bit effect on the joint state.
This is the ISA interpretation: the BIND acts as a "pre-computed" second bit,
and Alice's FLIP/FLOP operations select which of the 4 joint states is realised.

The BIND resource is consumed (the Bell pair is destroyed by Bob's measurement)
— just as in Q05. One ebit enables one superdense coding transmission.

## Teleportation ↔ Superdense duality

The resource trade-off:

| Protocol | Sends | Uses | Uses |
|---------|-------|------|------|
| Q05 Teleportation | 1 qubit | 1 ebit + 2 classical bits | |
| Q06 Superdense | 2 classical bits | 1 ebit + 1 qubit channel | |

These are related by "quantum resource" exchange: classical bits ↔ quantum
channel uses, mediated by entanglement. The duality is an adjunction in
the resource theory of quantum communication — the same BIND (1 ebit) either
"upgrades" 2 classical bits into 1 qubit channel (Q05) or "upgrades" 1 qubit
channel into 2 classical bits (Q06).

In ISA terms: Q05 = BIND × FLIP/FLOP → ORBIT (quantum state transfer);
Q06 = FLIP/FLOP × ORBIT → LABEL (classical bit recovery).

## Connections to other entries

- **Q05 (Teleportation)**: exact dual; same BIND resource, opposite direction;
  together they implement quantum/classical communication exchange
- **Q07 (CHSH game)**: superdense coding wins the "2-bit-from-1-qubit" game
  against any classical strategy; CHSH (Q07) measures the non-classicality of
  the BIND that makes superdense coding possible
- **Q01 (Shor's algorithm)**: superdense coding shows that quantum channels
  can carry twice the classical information when assisted by entanglement;
  this "quantum advantage" is the resource theory basis for quantum speedups
- **K01 (RSA encryption)**: superdense coding is the communication-theoretic
  dual to cryptography: RSA uses classical bits to protect classical bits
  (H¹); superdense coding uses 1 ebit (H²) to double classical throughput

## Validation

- Bennett & Wiesner (1992), PRL 69, 2881: original protocol; 2 bits per qubit
  proved using 1 ebit; Holevo-beating capacity proved.
- Mattle et al. (1996), PRL 76, 4656: first experimental superdense coding with
  photons; 1.58 bits/photon (3-of-4 Bell states); limited by linear-optics
  partial Bell measurement.
- Williams et al. (2017), Phys. Rev. Lett. 118, 050501: complete Bell state
  measurement in atomic ensemble; full 2 bits/photon achieved.
- Quantum capacity theorem (Lloyd 1997; Shor 2002): entanglement-assisted
  classical capacity of a channel = 2 × quantum capacity; superdense coding
  is the canonical protocol achieving this bound.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
