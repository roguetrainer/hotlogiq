---
layout: default
title: "CA01 — Cauchy Integral Theorem and Cauchy-Riemann Equations"
parent: ISA Zoo
nav_exclude: true
---

# CA01 — Cauchy Integral Theorem and Cauchy-Riemann Equations

| Field | Value |
|-------|-------|
| **Domain** | Complex Analysis |
| **System** | Holomorphic functions on ℂ |
| **Group** | U(1) (phase rotations of ℂ) |
| **H^k tier** | H¹ |
| **ISA** | Origami (β → ∞) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · LABEL |
| **Papers** | Paper 543, Paper 477 |

---

## What this entry is about

This is the cleanest possible H⁰/H¹/H² example — accessible from first-year
university calculus, but carrying the full weight of the ISA framework. No
physics required: just functions of a complex variable.

**The punchline in one sentence:** the Cauchy-Riemann equations are the H¹
flatness condition. A function that satisfies them is holomorphic — its contour
integral around any loop in a simply-connected domain is zero. When the domain
has a hole, the integral can be nonzero — and that nonzero value is the H¹
TWIST winding number. That is the entire ISA story, in one paragraph of calculus.

---

## Physical system

Write z = x + iy and f(z) = u(x,y) + iv(x,y). The **Cauchy-Riemann equations**
are:

∂u/∂x = ∂v/∂y    and    ∂u/∂y = −∂v/∂x

These are the condition that f is **holomorphic** — complex-differentiable at
every point. They look like two real equations, but they encode one complex
constraint: df/dz̄ = 0 (f does not depend on z̄ = x − iy, only on z = x + iy).

**Cauchy's integral theorem**: if f is holomorphic on a simply-connected domain
D, then for any closed loop C inside D:

∮_C f(z) dz = 0

If D has a hole — say D = ℂ\{0}, the plane with the origin removed — then loops
that wind around the hole can give nonzero integrals. The canonical example:

∮_{|z|=1} dz/z = 2πi

The function 1/z is holomorphic everywhere except z = 0; the value 2πi is the
H¹ winding number of the loop around the singularity. This is the TWIST.

---

## Target category

**Hol(D)** — the category of holomorphic functions on a domain D ⊂ ℂ. Objects:
pairs (D, f) where f: D → ℂ is holomorphic. Morphisms: conformal maps between
domains. The simply-connected domains are the "H⁰-flat" objects — they have no
holes, so every closed 1-form (every holomorphic 1-form) is exact. Domains with
holes have H¹ ≠ 0; each hole contributes one generator of H¹(D, ℤ) = ℤ.

## Interpretation functor

F: C → Hol(D) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Analytic continuation: extend f from one region of D to another along a path; the ORBIT fixed point is the value f(z) at a point, uniquely determined by continuity |
| TWIST  | Winding number: n(C, z₀) = (1/2πi) ∮_C dz/(z−z₀) ∈ ℤ; the H¹ count of how many times the loop C winds around the point z₀; nonzero only when z₀ ∉ D |
| LABEL  | Cauchy's integral formula value: f(z₀) = (1/2πi) ∮_C f(z)/(z−z₀) dz; the eigenvalue extracted from the loop integral |

## ISA programme

```
DOMAIN:  LABEL[D subset C | domain of f]             -- specify domain (simply connected?)
C-R:     TWIST[df/dzbar = 0? | C-R equations]        -- check H1 flatness (is f holomorphic?)
LOOP:    ORBIT[C | closed loop in D]                  -- choose contour
WIND:    TWIST[n(C,z0) = (1/2pi i) oint dz/(z-z0)]  -- winding number (H1 invariant)
CAUCHY:  LABEL[oint_C f(z)dz = 0 if simply connected] -- Cauchy theorem (H1=0 case)
EXTRACT: LABEL[f(z0) = (1/2pi i) oint f(z)/(z-z0) dz] -- Cauchy formula (LABEL output)
```

## The H⁰/H¹/H² ladder in one example

Take D = ℂ\{0} (the plane minus the origin). Consider the question: does 1/z
have an antiderivative on D?

**H⁰ answer (ORBIT):** locally, yes. Near any point z₀ ≠ 0, we can write
∫ dz/z = log z in a small disk around z₀. The function log z is the local
antiderivative — the ORBIT fixed point.

**H¹ answer (TWIST):** globally, no. If we try to continue log z all the way
around the origin (ORBIT along a loop), we return with value log z + 2πi —
not the value we started with. The multi-valuedness is the H¹ obstruction:
the winding number n(C, 0) = 1 for a loop around the origin, and

∮_{|z|=1} dz/z = 2πi ≠ 0.

The TWIST opcode "sees" the hole at the origin. Simply-connected domains
(no holes) have H¹ = 0: every holomorphic 1-form is exact, and every
antiderivative is single-valued.

**H² answer (BIND):** the origin itself — the singularity — is a H² BIND
obstruction. The function 1/z does not extend to z = 0 at all; it has a pole
there. The residue Res(1/z, 0) = 1 is the H² invariant (→ CA02).

**This is the ISA framework in three lines of calculus:**
- H⁰: local antiderivative exists (ORBIT)
- H¹: global antiderivative fails to single-valued due to winding (TWIST)
- H²: pole at the singularity; residue is the obstruction (BIND → CA02)

## Why the Cauchy-Riemann equations are a flatness condition

In differential geometry language: the 1-form ω = f(z) dz is closed (dω = 0)
if and only if the Cauchy-Riemann equations hold. Closed means the integral
around any contractible loop is zero. Exact means there is a global antiderivative.

On a simply-connected domain: closed = exact (Poincaré lemma). Every holomorphic
1-form has an antiderivative.

On a domain with holes: closed ≠ exact. The failure of exactness is measured by
H¹(D, ℂ) — one generator per hole. **The generators are the winding numbers
around each hole.** In ISA language: the TWIST opcode counts the generators of
H¹; one TWIST per hole.

This is why the Cauchy-Riemann equations are H¹ flatness: they say ω is closed.
Whether ω is also exact — whether the antiderivative is single-valued — depends
on H¹(D), which measures the topology of the domain. The C-R equations are local;
the ISA tier is global.

## Connection to the β-plane (Paper 543)

The imaginary axis of the β-plane (β = it) is precisely where complex analysis
lives: the Meld ISA with β = it gives complex amplitudes e^{−itE}, and the
Cauchy-Riemann equations are the condition that these amplitudes are holomorphic
as functions of the complex parameter z = x + iy = β.

The Wick rotation (β real → β imaginary) rotates from statistical mechanics
(Boltzmann weights, real exponentials) to quantum mechanics (complex amplitudes,
holomorphic functions). The Cauchy-Riemann equations are the condition that this
rotation is well-defined — that the function of β is holomorphic at the rotation
point. When C-R fail (the function is not holomorphic), there is a singularity
on the real axis: a phase transition.

**Phase transitions are poles of the partition function in the complex β-plane.**
The Lee-Yang theorem (1952) proves that the zeros of the grand canonical partition
function Z(z) (as a function of fugacity z = e^{βμ}) approach the real axis in
the thermodynamic limit, and the phase transition is the accumulation point of
these zeros. The poles are H² BIND events (CA02); the approach to the real axis
is the Wick rotation from imaginary β (complex analysis) to real β (statistical
mechanics).

## Validation

- Cauchy (1825): integral theorem for holomorphic functions. One of the
  foundational results of mathematics; taught universally in second-year analysis.
- Cauchy-Riemann equations: independently derived by Cauchy (1814) and Riemann
  (1851); equivalent to complex differentiability.
- Winding number: homotopy invariant of π₁(ℂ\{0}) = ℤ; the generator of the
  first fundamental group. Classical topology.
- Poincaré lemma: closed = exact on contractible domains. Standard differential
  topology; foundation of de Rham cohomology.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
