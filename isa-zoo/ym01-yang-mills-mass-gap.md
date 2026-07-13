---
layout: default
title: "YM01 — Yang-Mills Mass Gap"
parent: ISA Zoo
nav_exclude: true
semiring: Clifford
---

# YM01 — Yang-Mills Mass Gap

| Field | Value |
|-------|-------|
| **Domain** | Millennium Problems |
| **System** | Pure SU(N) Yang-Mills gauge theory in 4 dimensions |
| **Group** | SU(N) (gauge group; N=2 for the minimal case) |
| **H^k tier** | H² |
| **ISA** | Meld (β→0) |
| **Status** | Conjectured |
| **Opcodes** | ORBIT · TWIST · BIND · LABEL |
| **Papers** | Paper 536, Paper 523, Paper 543 |

---

## Physical system

**Pure Yang-Mills theory** in 4 Euclidean dimensions is defined by the action:

S[A] = (1/2g²) ∫ tr(F_μν F^μν) d⁴x

where A_μ is the SU(N) gauge connection, F_μν = ∂_μA_ν − ∂_νA_μ + [A_μ, A_ν]
is the field strength, and g is the coupling constant.

The theory is classically scale-invariant (no dimensionful parameters), yet
quantum mechanically the **renormalisation group generates a scale** Λ_{YM}:

Λ_{YM} = μ exp(−8π²/b₀g²(μ)) (asymptotic freedom: g(μ)→0 as μ→∞)

where b₀ = 11N/3 for SU(N) gauge theory. This is **dimensional transmutation**:
a dimensionless coupling g produces a dimensionful scale Λ_{YM} by the ORBIT
running of g under renormalisation group flow.

The **mass gap problem**: does the Yang-Mills quantum theory on ℝ⁴ have a
strictly positive mass gap Δ > 0? Equivalently, does the Hamiltonian H of
the gauge theory have a spectral gap between its ground state (the vacuum) and
the first excited state (the lightest glueball)?

This is a Millennium Problem because a rigorous mathematical construction of
4d Yang-Mills as a quantum field theory (satisfying the Wightman or Osterwalder-
Schrader axioms) has not been given, let alone a proof that its spectrum has a
gap.

**Physical evidence**: QCD (SU(3) Yang-Mills coupled to quarks) has been studied
for 50 years; glueballs are predicted with masses ~1.5–2.5 GeV and no massless
strongly-interacting particles are observed. Lattice gauge theory (L01/L02)
confirms the mass gap numerically.

---

## Target category

**GlueBall(SU(N))** — the category of gauge-invariant operators in the SU(N)
Yang-Mills Hilbert space, with objects being the glueball states (bound states
of gluons with definite J^{PC} quantum numbers) and morphisms being operator
insertions. The vacuum |0⟩ is the unique ground state (H⁰ ORBIT fixed point);
the mass gap Δ = m_{0^{++}} − 0 is the LABEL eigenvalue of the lightest glueball.

## Interpretation functor

F: C → GlueBall(SU(N)) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Gauge field propagation: A_μ^a(x) propagates as a massless gluon in perturbation theory; the perturbative ORBIT is the H⁰ regime (g→0); the vacuum-to-vacuum ORBIT = the Yang-Mills partition function Z = ∫ DA exp(−S[A]) |
| TWIST  | Gluon interaction: the cubic and quartic vertices [A_μ,A_ν]F^μν and [A_μ,A_ν]² give perturbative TWIST corrections; the running coupling g(μ) decreasing as μ→∞ (asymptotic freedom) = TWIST flowing to H⁰ in the UV |
| BIND   | Instanton: a self-dual connection F_μν = *F_μν with topological charge Q = (1/16π²) ∫ tr(F∧F) ∈ ℤ; contributes exp(−8π²Q/g²) non-perturbatively; instantons are H² BIND events (they require the full H² of S⁴ = the one-point compactification of ℝ⁴) |
| LABEL  | Mass gap Δ: the lowest eigenvalue of H above the vacuum; predicted by lattice as Δ = m_{0^{++}} ≈ 1.5 GeV for SU(3); Δ ∝ Λ_{YM} exp(−8π²/b₀g²) from the instanton BIND; dimensionless Δ/Λ_{YM} is the LABEL eigenvalue to prove |

## ISA programme

```
ACTION:   LABEL[S[A] = (1/2g^2) int tr(F^2) | Yang-Mills action]
PTURB:    ORBIT[A_mu propagator = 1/p^2 | massless gluon, g->0 limit]
RG:       TWIST[g(mu) -> 0 as mu -> inf | asymptotic freedom, UV ORBIT]
INSTANTON:BIND[F = *F, Q in Z | self-dual, topological charge, H2 BIND]
SCALE:    LABEL[Lambda_YM = mu exp(-8pi^2/b0 g^2) | dimensional transmutation]
LATTICE:  ORBIT[A_mu on Z^4 lattice | L01 Wilson plaquette discretisation]
GAP?:     LABEL[Delta = m_lightest glueball > 0? | the Millennium conjecture]
GLUEBALL: LABEL[0^{++} state at Delta ~ 1.5 GeV | lattice prediction (SU(3))]
```

## Computable output

- **Instanton action** S_inst = 8π²/g² and contribution to vacuum energy:
  Z ∼ exp(−8π²/g²) per instanton. For SU(2) in the 't Hooft approximation:
  the one-instanton amplitude is ∝ exp(−8π²/g²) μ^{b₀} (exactly calculable).
  This is the leading H² BIND contribution to the vacuum energy — non-perturbative,
  invisible to any finite order in perturbation theory.

- **Lattice mass gap** (numerical LABEL): for SU(3) pure gauge theory on a
  32⁴ lattice at β_{lat} = 6/g²≈6.0 (Morningstar & Peardon 1999; Bali et al.):
  - m_{0^{++}} = 1710 ± 50 ± 80 MeV (lightest scalar glueball)
  - m_{2^{++}} = 2390 ± 30 ± 120 MeV (tensor glueball)
  - Mass gap ratio: m_{0^{++}}/√σ ≈ 3.6 (in units of string tension √σ ≈ 440 MeV)
  The lattice ORBIT (L01) confirms the gap exists numerically; the analytic proof
  is the Millennium problem.

- **Gluon condensate** ⟨α_s/π tr(F²)⟩ = (0.012 ± 0.006) GeV⁴ (SVZ sum rules,
  Shifman-Vainshtein-Zakharov 1979): the vacuum expectation value of the gauge
  field strength squared; a non-perturbative BIND condensate. Its existence
  (non-zero value) implies non-perturbative physics dominates the vacuum —
  consistent with a mass gap. This is the LABEL eigenvalue of the vacuum BIND.

- **String tension** σ ≈ 0.18 GeV² (from quenched lattice QCD): the coefficient
  of the linear potential V(r) ≈ σr between static colour charges at large r.
  Non-zero string tension is equivalent to a mass gap (confinement = all physical
  states are colour singlets; colour charges cannot be separated to infinity
  without creating a string of field energy). The ORBIT of a colour charge cannot
  close in isolation — it must BIND with an anti-charge.

## The mass gap as non-perturbative BIND

The deepest ISA content: the Yang-Mills mass gap is a **non-perturbative BIND
event** that is invisible to any finite order of perturbation theory.

**Perturbative ORBIT** (g→0): massless gluon propagator; no mass gap; the
spectrum starts at E=0 continuously. Every finite-order Feynman diagram gives
a massless state. The perturbative ORBIT never closes with a gap.

**Non-perturbative BIND** (instanton, g finite): the instanton contribution
exp(−8π²/g²) is non-analytic in g (it has an essential singularity at g=0);
it is invisible to all orders of the Taylor series in g. The instanton BIND
modifies the vacuum structure, breaking the naive degeneracy and generating
a mass gap Δ ∝ Λ_{YM}.

In β-plane language: the perturbative ORBIT is at β→∞ (Origami), while the
instanton BIND is at β→0 (Meld). The mass gap exists precisely because the
Meld BIND is non-zero — the β* snap from Origami to Meld (asymptotic freedom)
is what creates the scale Λ_{YM} and hence the gap. The gap is the LABEL
eigenvalue of the Meld regime.

**The ISA prediction**: Δ/Λ_{YM} is a pure number (dimensionless ratio) that
should follow from the H² BIND geometry of instantons on ℝ⁴. The lattice
gives Δ/Λ_{YM} ≈ O(10); the analytic computation of this number from instanton
BIND is an open problem (it requires controlling the dilute instanton gas in
the strongly coupled regime, where instantons are no longer dilute).

## Why H² (the topological charge is essential)

- **Instanton topological charge** Q = (1/16π²) ∫ tr(F∧F) ∈ ℤ is the H² BIND
  invariant — the second Chern class c₂(P) of the gauge bundle P → S⁴. It
  classifies principal SU(N)-bundles over S⁴ via π₃(SU(N)) = ℤ.
- The **θ-vacuum** |θ⟩ = Σ_n e^{inθ}|n⟩ (sum over topological sectors n ∈ ℤ)
  is a non-trivial H² superposition — it cannot be constructed in perturbation
  theory (H⁰/H¹).
- **Confinement** (non-zero string tension) is an H² statement: the area law
  for Wilson loops ⟨W_C⟩ ∝ exp(−σ Area(C)) requires a non-Abelian holonomy
  (BIND) that grows with the enclosed area — a codimension-2 (H²) observable.

## Connections to other entries

- **G01 (Yang-Mills instantons)**: YM01 is the existence/gap problem; G01 is
  the instanton BIND structure that generates the gap; G01 provides the H²
  BIND content that YM01 conjectures is sufficient for Δ>0
- **L01/L02 (Lattice gauge)**: the lattice discretisation provides numerical
  evidence; L01 (Wilson plaquette) is the ORBIT of YM01; L02 (deconfinement)
  is the β* snap at T_c — a finite-temperature phase transition where the BIND
  (string tension) vanishes above T_c
- **D03 (Kolmogorov turbulence)**: the mass gap conjecture for YM and the
  NS regularity problem (D03 blow-up) are structurally analogous: both ask
  whether a non-linear field theory (gauge vs fluid) remains controlled at all
  scales; the answer in both cases requires controlling H² non-perturbative effects
- **LA01 (Geometric Langlands)**: Kapustin-Witten showed that geometric Langlands
  = S-duality of 4d N=4 SYM; the mass gap of N=0 SYM (pure YM) is the strongly-
  coupled version of the same β* snap, without the supersymmetric protection

## Validation

- Wilson (1974): lattice gauge theory introduced; area law for Wilson loops
  confinement criterion; discrete ORBIT approximation to YM action.
- 't Hooft (1976): instanton calculation; θ-vacuum; non-perturbative BIND
  contribution to mass gap; U(1)_A problem solved by instantons.
- Morningstar & Peardon (1999), Phys. Rev. D 60: quenched glueball masses;
  m_{0^{++}} = 1710 MeV; mass gap confirmed numerically (lattice).
- Shuryak (1982): instanton liquid model of QCD vacuum; gluon condensate;
  string tension from instanton BIND confirmed.
- Jaffe & Witten (2000): official Millennium Problem statement; existence and
  mass gap simultaneously required; axiomatic QFT setting.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
