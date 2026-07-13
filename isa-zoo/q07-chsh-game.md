---
layout: default
title: "Q07 — CHSH Game and Bell Inequality Violation"
parent: ISA Zoo
nav_exclude: true
semiring: Clifford
---

# Q07 — CHSH Game and Bell Inequality Violation

| Field | Value |
|-------|-------|
| **Domain** | Quantum Computing |
| **System** | Two-party game with shared entanglement vs shared randomness |
| **Group** | SU(2) × SU(2) (Alice's and Bob's local quantum strategies) |
| **H^k tier** | H² |
| **ISA** | Meld (β→0) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · BIND · LABEL |
| **Papers** | Paper 421, Paper 469, Paper 325 |

---

## Physical system

The **CHSH game** (Clauser-Horne-Shimony-Holt 1969 inequality; game formulation
by Tsirelson 1980) is a cooperative two-player game testing whether nature is
classical or quantum:

- A referee sends Alice input bit x ∈ {0,1} and Bob input bit y ∈ {0,1},
  each uniformly random
- Alice outputs bit a ∈ {0,1}; Bob outputs bit b ∈ {0,1}
- **Win condition**: a ⊕ b = x ∧ y (XOR of outputs = AND of inputs)
  - Alice and Bob win if (x=1 and y=1 and a≠b) or (otherwise and a=b)
- No communication allowed after inputs are received

**Classical bound**: any classical strategy (shared randomness allowed) wins
with probability at most 3/4 = 0.75.

**Quantum bound** (Tsirelson): with a shared Bell pair and optimal local
measurements, Alice and Bob win with probability cos²(π/8) = (2+√2)/4 ≈ 0.854.

**Tsirelson's bound is tight**: no quantum strategy (no matter how much
entanglement) can exceed cos²(π/8). This is the ISA β* snap: the quantum
advantage is precisely bounded by the geometry of the BIND (entangled state)
and the TWIST (measurement angles).

The CHSH inequality violation (observed first by Aspect et al. 1982) is the
experimental proof that nature cannot be explained by local hidden variable
theories — the BIND (quantum entanglement) is real and irreducible to any
classical H⁰/H¹ description.

---

## Target category

**GameCat(CHSH)** — the category of non-signalling correlation matrices
p(a,b|x,y) for the CHSH game. Objects:
- **Classical strategies**: convex combinations of deterministic strategies;
  form the local polytope ℒ; best win probability 3/4
- **Quantum strategies**: correlations from measurements on entangled states;
  form the quantum set 𝒬; best win probability cos²(π/8) ≈ 0.854
- **Non-signalling strategies**: all correlations consistent with no
  communication; allow "super-quantum" (PR box) correlations; best win probability 1

The CHSH game maps to the I₃₃₂₂ Bell inequality; its violation certifies BIND.
Morphisms are local operations (Alice acts on her subsystem; Bob on his).

## Interpretation functor

F: C → GameCat(CHSH) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| BIND   | Bell pair resource: |Φ⁺⟩ = (|00⟩+|11⟩)/√2; the shared entangled state; the H² BIND is what separates quantum from classical; without it, the classical bound 3/4 cannot be exceeded |
| ORBIT  | Alice's qubit rotation: Alice measures in basis {cos(α)|0⟩+sin(α)|1⟩, −sin(α)|0⟩+cos(α)|1⟩}; she rotates by α₀ = 0 if x=0 or α₁ = π/4 if x=1; the ORBIT angle determines her output correlations |
| TWIST  | Bob's qubit rotation: Bob measures in basis {cos(β)|0⟩+sin(β)|1⟩, …}; optimal angles β₀ = π/8 if y=0, β₁ = −π/8 if y=1; the TWIST angle is π/8 relative to Alice; the TWIST-ORBIT angle difference = π/8 is the ISA β* snap |
| LABEL  | Win probability: p_win = cos²(angle/2) where angle = |α_x − β_y| for each (x,y) pair; averaged over inputs: p_win = (3 + cos(π/4))/4 = (2+√2)/4 ≈ 0.854; the LABEL eigenvalue of the optimal quantum strategy |

## ISA programme

```
PREPARE: BIND[|Phi+> = (|00>+|11>)/sqrt(2) | shared entanglement]
INPUT_A: LABEL[x in {0,1} | Alice's bit from referee]
INPUT_B: LABEL[y in {0,1} | Bob's bit from referee]
ROTATE_A:ORBIT[Alice measures at angle alpha_x: 0 if x=0, pi/4 if x=1]
ROTATE_B:TWIST[Bob measures at angle beta_y: pi/8 if y=0, -pi/8 if y=1]
CORREL:  LABEL[E(x,y) = <A_x B_y> = cos(alpha_x - beta_y) | correlator]
CHSH:    LABEL[S = E(0,0)+E(0,1)+E(1,0)-E(1,1) <= 2sqrt(2) | Tsirelson]
WIN:     LABEL[p_win = (2+sqrt(2))/4 ~ 0.854 | quantum win rate]
CLASSIC: LABEL[p_win <= 3/4 | classical upper bound, no BIND]
```

## Computable output

- **Quantum win probability**: cos²(π/8) = (2+√2)/4 ≈ 0.8536. This is the
  ISA LABEL eigenvalue of the optimal quantum strategy. It exceeds the classical
  bound 3/4 = 0.75 by 0.1036 — the "quantum advantage margin."

- **CHSH correlator** S = E(0,0)+E(0,1)+E(1,0)−E(1,1) where E(x,y) = ⟨a_x⊗b_y⟩:
  - Classical bound: S ≤ 2 (CHSH inequality)
  - Quantum optimum: S = 2√2 ≈ 2.828 (Tsirelson bound)
  - No-signalling PR box: S = 4 (super-quantum, unrealised in nature)
  
  The Tsirelson bound S = 2√2 is the ISA β* snap: it is the maximum correlation
  achievable with BIND but without non-local signalling. The factor √2 = cos(π/4)
  arises from the optimal angle difference π/8 = π/(4·2) between Alice's and Bob's
  measurement bases — a TWIST at exactly 22.5°.

- **Device-independent certification**: if Alice and Bob observe S > 2 (classical
  violation), they can certify that their shared state contains genuine BIND
  (entanglement), without trusting their devices. This "device-independent" LABEL
  output is the foundation of quantum cryptography: a violation of S > 2 proves
  that eavesdroppers cannot have copied the BIND (no-cloning theorem enforces it).

- **Loophole-free Bell test** (Hensen et al. 2015): S = 2.42 ± 0.20 observed
  in loophole-free test at 1.3 km separation (NV centres in diamond). The
  detection-loophole and locality-loophole were simultaneously closed; the
  classical explanation is ruled out with p < 0.039. The BIND (entanglement)
  is confirmed as irreducibly non-local.

## Why H² (not H¹)

The CHSH violation is the *defining* H² signature:

- **Classical strategies** (H⁰): shared randomness (a pre-agreed function
  a=f(x), b=g(y)) achieves at most 3/4. No ORBIT or TWIST is needed — just
  H⁰ LABEL (a classical correlation table). The CHSH inequality is the H⁰
  bound.
  
- **H¹ strategies** (shared Clifford / stabiliser): a stabiliser state (e.g.,
  |+⟩|+⟩ = product state, or a stabiliser entangled state with classical Bell
  correlations) achieves at most 3/4. Clifford operations + Pauli measurements
  on stabiliser states cannot exceed the classical bound — H¹ TWIST is not
  sufficient. This is the Gottesman-Knill theorem for correlations: stabiliser
  circuits are classically simulable, so their correlations lie in the local
  polytope.
  
- **H² (Bell pair BIND)**: the |Φ⁺⟩ Bell pair is a non-stabiliser entangled
  state with a non-trivial BIND holonomy. The optimal CHSH measurement at angle
  π/8 requires a rotation that is *not* a Clifford gate (π/8 = half the T gate
  angle π/4; the T gate is the TWIST gate that generates magic). The Tsirelson
  bound cos²(π/8) is achievable only with genuine H² BIND — the Bell pair
  entanglement is a magic-class resource (in the language of Paper 469/470).

**The magic connection**: the π/8 optimal CHSH angle is the T gate angle
divided by 2. The T gate (π/8 rotation on the Bloch sphere) is the generator
of the H² magic resource (Paper 469). The CHSH violation is thus a direct
measurement of the H² BIND content of the Bell pair — winning cos²(π/8) ≈ 0.854
requires exactly the same non-Clifford resource as the T gate that elevates
stabiliser computation to universal quantum computation.

## The β-plane interpretation

The CHSH game sweeps through the β-plane as the measurement angle θ varies:

| Angle θ (Alice–Bob difference) | S = CHSH correlator | β-plane | ISA |
|-------------------------------|--------------------|----|-----|
| θ = 0 | S = 4 (PR box, non-physical) | β→0 (full Meld) | |
| θ = π/8 (optimal) | S = 2√2 (Tsirelson) | β* snap | BIND eigenvalue |
| θ = π/4 (Clifford) | S = 2√2·sin(π/4)=2 | β=1 | classical boundary |
| θ = π/2 | S = 0 | β→∞ (Origami) | uncorrelated |

The Tsirelson bound **S = 2√2 at θ = π/8 is the β* snap**: it is the maximum
of S(θ) = 2√2 cos(2θ), achieved at θ* = 0 for the reduced correlator but at
θ* = π/8 for the full CHSH game structure. The β* snap occurs at the measurement
angle where the BIND resource is most efficiently converted into a classical
observable (the winning probability).

**Paper 597 (Soft Thresholds) connection**: the Tsirelson bound is another
instance of the MGE soft threshold. The CHSH correlator S(θ) = 2√2 cos(2θ)
is a soft function with maximum at θ=0 and β* snap where dS/dθ = 0 → the
classical threshold S=2 is the β=∞ "frozen" limit, and the quantum optimum
S=2√2 is the Meld β→0 limit of the same MGE saddle point.

## Connections to other entries

- **Q05 Teleportation** / **Q06 Superdense coding**: all three use the same
  Bell pair BIND resource; CHSH tests its non-classicality; Q05/Q06 use it
  for communication tasks
- **Paper 469 (ISA Completeness)**: the T gate is the generator of magic (H²);
  CHSH at θ=π/8 requires exactly this T gate resource; CHSH violation ↔ magic
  state (TV < 1 in the language of Paper 470)
- **Paper 470 (Hot Logic)**: the Tsirelson bound cos²(π/8) is a dark-magic
  threshold: stabiliser (H¹) achieves ≤ 3/4; dark-magic states can exceed 3/4
  but may not reach the Tsirelson bound; genuine magic (Bell pair BIND) achieves
  exactly cos²(π/8)
- **K01/K04 (Cryptography)**: device-independent quantum key distribution
  (DI-QKD) uses CHSH violation as a security certificate; the LABEL output
  S > 2 guarantees that eavesdroppers hold no information about the key

## Validation

- CHSH (1969): original Bell inequality; classical bound 2; measurement setting.
- Tsirelson (1980): quantum bound 2√2; optimal strategy proved; angle π/8.
- Aspect, Grangier & Roger (1982): first loophole-free (in practice) photonic
  Bell test; S = 2.697±0.015; classical explanation ruled out.
- Hensen et al. (2015), Nature 526, 682: loophole-free Bell test; NV centres
  1.3 km apart; S = 2.42±0.20; detection + locality loopholes closed simultaneously.
- Giustina et al. (2015), PRL 115, 250401: photonic loophole-free; S > 2 with
  p < 3.74×10⁻³¹.
- Shalm et al. (2015), PRL 115, 250402: NIST loophole-free; multiple entangled
  photon pairs; S > 2 with p < 2.3×10⁻⁷.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
