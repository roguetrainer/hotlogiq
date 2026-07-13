---
layout: default
title: "D01 — Figure-Eight 3-Body Choreography"
parent: ISA Zoo
nav_exclude: true
---

# D01 — Figure-Eight 3-Body Choreography

| Field | Value |
|-------|-------|
| **Domain** | Dynamical Systems |
| **System** | Equal-mass 3-body gravitational problem in ℝ² |
| **Group** | D₆ (dihedral symmetry of the figure-eight) |
| **H^k tier** | H⁰ |
| **ISA** | Origami (β → ∞) |
| **Status** | Validated |
| **Opcodes** | ORBIT · LABEL |
| **Paper** | Paper 552 |

---

## Physical system

Three equal masses chase each other around a figure-eight curve in the plane,
discovered numerically by Moore (1993) and proved to exist by Chenciner &
Montgomery (2000). The orbit is periodic with period T ≈ 6.3259 (in units
where G = m = 1) and is the unique (up to symmetry) stable choreography of
three equal masses in ℝ².

---

## Target category

**Symp** — the category of symplectic manifolds and canonical maps. The phase
space is T*ℝ⁶ (positions and momenta of 3 bodies); the choreography is a
closed orbit in the zero-angular-momentum, zero-centre-of-mass submanifold.

## Interpretation functor

F: C → Symp defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Closed periodic trajectory in shape space; eigenvalue = winding number = 1 |
| LABEL  | Symmetry label under D₆: the figure-eight has a unique choreography class |

## ISA programme

```
INIT:    LABEL[q₁, q₂, q₃ | figure-eight IC]  -- Chenciner-Montgomery initial conditions
FLOW:    ORBIT[Φ_t : T*ℝ⁶ → T*ℝ⁶]            -- Hamiltonian flow for time T
CLOSE:   ORBIT[q(T) = q(0)]                   -- check closure (tropical fixed point)
PERIOD:  LABEL[T ≈ 6.3259]                    -- period eigenvalue
```

## Computable output

- **Period** T ≈ 6.3259 (Chenciner-Montgomery, confirmed to 10 significant figures numerically).
- **Winding number** = 1: the ORBIT closes after exactly one traversal — this is
  the definition of an H⁰ tropical fixed point. The figure-eight is the *unique*
  minimum of the action functional on the space of choreographies with D₆ symmetry.
- **H⁰ interpretation**: in the ISA, a closed orbit is a tropical fixed point —
  the β → ∞ limit of a Gibbs distribution over trajectories. The figure-eight
  is the ground state (lowest action) of 3-body choreography space. All other
  choreographies require H¹ TWIST (non-trivial topology) or H² BIND (non-abelian
  holonomy in higher dimensions).

## Validation

- Chenciner & Montgomery (2000) proved existence via variational minimisation of
  the action on the D₆-symmetric path space — exactly the ORBIT fixed-point
  condition.
- Numerically stable: small perturbations return to the orbit (local minimum of
  action), confirming it as a β → ∞ attractor.
- Connection to Paper 552: figure-eight = H⁰ entry point of the choreography
  ISA ladder. H¹ entries include the Lagrange equilateral triangle (TWIST phase)
  and H² = G₂ choreography in ℝ⁷ (see D02).

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
