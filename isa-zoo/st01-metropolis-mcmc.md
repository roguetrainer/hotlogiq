---
layout: default
title: "ST01 — Metropolis-Hastings MCMC"
parent: ISA Zoo
nav_exclude: true
semiring: probabilistic
---

# ST01 — Metropolis-Hastings MCMC

| Field | Value |
|-------|-------|
| **Domain** | Statistical Methods |
| **System** | Markov chain Monte Carlo on ℝⁿ |
| **Group** | ℝⁿ (continuous state space) |
| **H^k tier** | H⁰ |
| **ISA** | Forge (β ≈ β*) |
| **Status** | Validated |
| **Opcodes** | ORBIT · LABEL · FLIP |
| **Papers** | Paper 557 |

---

## Physical system

The **Metropolis-Hastings algorithm** generates samples from a target distribution
π(x) ∝ exp(−βU(x)) by constructing a Markov chain whose stationary distribution
is π. The chain proceeds:

1. Propose x' ~ q(x'|x) from a proposal distribution (e.g., Gaussian random walk)
2. Accept with probability α = min(1, π(x')q(x|x') / π(x)q(x'|x))
3. If accepted: move to x'. If rejected: stay at x.

The optimal acceptance rate for a random-walk Metropolis chain in ℝⁿ as n→∞
is **0.234** (Roberts, Gelman & Gilks 1997) — a universal constant that does not
depend on the target distribution. This is one of the most precisely known
"magic numbers" in computational statistics.

**The ISA reading:** the Metropolis chain is an ORBIT on the state space ℝⁿ, the
accept/reject decision is a LABEL (eigenvalue test), and the acceptance probability
α is a FLIP (a probabilistic bit-flip controlled by the energy ratio). The
stationary distribution is the β → ∞ limit — the Origami ISA ground state — but
convergence requires β to be in the Forge regime (neither too large nor too small).

---

## Target category

**Markov(ℝⁿ, π)** — the category of Markov chains on ℝⁿ with stationary
measure π = e^{−βU}/Z. Objects: probability distributions μ on ℝⁿ. Morphisms:
Markov kernels K(x, dy) satisfying detailed balance: π(x)K(x,dy) = π(y)K(y,dx).
The Metropolis kernel is the unique minimal Markov morphism satisfying detailed
balance with acceptance rate 0.234 in high dimensions.

## Interpretation functor

F: C → Markov(ℝⁿ, π) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Chain step: x → x' via proposal kernel q(x'\|x); geodesic on the energy landscape under the Fisher-Rao metric of π |
| LABEL  | Energy evaluation: U(x) → U(x'); the eigenvalue that determines the accept/reject decision at each step |
| FLIP   | Metropolis accept: α = min(1, exp(−β(U(x')−U(x)))) · (q(x\|x')/q(x'\|x)); a probabilistic bit-flip of the "accept" flag |

## ISA programme

```
INIT:     LABEL[x_0 | initial state]                -- initialise chain
PROPOSE:  ORBIT[x' ~ q(x'|x)]                       -- propose new state (Gaussian step)
ENERGY:   LABEL[delta_U = U(x') - U(x)]             -- energy difference (LABEL eigenvalue)
ACCEPT:   FLIP[alpha = min(1, exp(-beta * delta_U))] -- Metropolis acceptance (probabilistic)
UPDATE:   LABEL[x <- x' if accepted, else x <- x]   -- update chain state
ORBIT:    ORBIT[x_t | Markov chain trajectory]       -- the full ORBIT (stationary = pi)
OUTPUT:   LABEL[E_pi[f] ~ (1/T) sum f(x_t)]         -- ergodic average
```

## Computable output

- **Ergodic average** (1/T) Σ_t f(x_t) → E_π[f] as T → ∞: the ORBIT output.
  For any integrable function f, the time average converges to the ensemble
  average under π. This is the ORBIT closure condition: the chain visits all
  regions of π in proportion to their probability.
- **Optimal acceptance rate 0.234**: in the n→∞ limit with a random-walk
  Gaussian proposal of variance σ², the optimal σ² satisfies the equation
  2Φ(−|l|√I/√8) = 0.234, where l = optimal step size and I = Fisher information
  of log π. The value 0.234 = 2Φ(−1.065...) is an exact constant of the FLIP
  opcode in high dimensions.
- **Mixing time**: the number of ORBIT steps needed for the chain to reach
  stationarity. For π = N(0, I_n), the optimal Metropolis chain mixes in O(n)
  steps. For distributions with isolated modes (barriers), the mixing time is
  exponential — a BIND obstruction (H² barrier that ORBIT + FLIP cannot cross).

## The H^k MCMC ladder (Paper 557)

Paper 557 establishes that MCMC algorithms form an H^k ladder:

| H^k tier | Algorithm | Accept rate | ISA opcodes |
|----------|-----------|-------------|-------------|
| H⁰ | Metropolis-Hastings | 0.234 | ORBIT + LABEL + FLIP |
| H¹ | Hamiltonian MC (HMC) | 0.651 | ORBIT + TWIST (leapfrog = symplectic TWIST) |
| H² | NUTS (No-U-Turn Sampler) | adaptive | BIND (U-turn = H² snap event) |

The progression from H⁰ to H² reflects increasingly sophisticated use of the
energy geometry:
- **H⁰ (Metropolis)**: only uses energy values U(x) — a scalar LABEL.
- **H¹ (HMC)**: uses the gradient ∇U(x) — momentum as a TWIST, symplectic
  integration as a Berry-phase accumulation along Hamiltonian trajectories.
- **H² (NUTS)**: uses curvature information — the U-turn criterion detects
  when the Hamiltonian trajectory doubles back on itself, which is a BIND event
  (the trajectory's H² holonomy around a closed loop in phase space).

**The 0.234 constant is a thermodynamic saddle point.** Roberts-Gelman-Gilks
(1997) derive it from optimising the effective sample size (ESS) per unit
computational cost. In MGE language: 0.234 is the Forge ISA snap point β* for
the Metropolis chain — the acceptance rate that maximises information extraction
per ORBIT step. This is the canonical example of Paper 597's claim that every
hard threshold (0.234) is a β* saddle point of a cost-accuracy tradeoff.

**The HMC 0.651 and NUTS:** HMC's optimal acceptance rate 0.651 (Beskos et al.
2013) is the H¹ analogue of 0.234 — the snap point of the symplectic integrator's
leapfrog TWIST. NUTS's U-turn criterion is the H² snap: the Hamiltonian trajectory
has accumulated enough BIND holonomy to have completed a "loop" in phase space,
and further steps would reduce ESS. These three snap points (0.234 / 0.574 / 0.651)
are the β* values for H⁰, H¹, H² MCMC respectively.

## Connection to the β-plane

**β is the inverse temperature of the target distribution.** The Metropolis chain
samples from π(x) ∝ exp(−βU(x)):
- At β → 0 (Ambient): π is uniform over all x; chain mixes instantly but gives no
  information about U.
- At β = β* (Forge snap): the chain mixes efficiently; the optimal acceptance rate
  0.234 is achieved; ESS is maximised per step.
- At β → ∞ (Origami): π concentrates at the minimum of U; the chain is stuck in
  the ground state; acceptance rate → 0 (no proposed moves accepted).

Simulated annealing is the β-scheduling version: start at β = 0 (Ambient), slowly
increase to β → ∞ (Origami), and at each β run enough ORBIT steps to equilibrate.
The annealing schedule is a path in the β-plane from the origin to the positive
real axis.

## Validation

- Metropolis et al. (1953): original algorithm for nuclear physics sampling.
  The first MCMC algorithm; 70+ year pedigree.
- Hastings (1970): generalisation to asymmetric proposals.
- Roberts, Gelman & Gilks (1997): optimal acceptance rate 0.234 in n→∞.
  Proved analytically; confirmed by simulation for n ≥ 5.
- Beskos et al. (2013): HMC optimal acceptance 0.651. The H¹ analogue.
- Hoffman & Gelman (2014): NUTS. The H² snap event (U-turn criterion) derived
  from first principles as the optimal stopping rule for HMC.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
