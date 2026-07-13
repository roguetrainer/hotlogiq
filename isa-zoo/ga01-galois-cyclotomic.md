---
layout: default
title: "GA01 — Galois Action on Cyclotomic Fields"
parent: ISA Zoo
nav_exclude: true
semiring: Boolean
---

# GA01 — Galois Action on Cyclotomic Fields

| Field | Value |
|-------|-------|
| **Domain** | Galois Theory |
| **System** | Gal(ℚ(ζ_n)/ℚ) acting on nth roots of unity |
| **Group** | (ℤ/nℤ)× (multiplicative group of units mod n) |
| **H^k tier** | H¹ |
| **ISA** | Origami (β→∞) |
| **Status** | Validated |
| **Opcodes** | ORBIT · TWIST · LABEL · FLIP |
| **Papers** | Paper 492, Paper 469 |

---

## Physical system

The **cyclotomic field** ℚ(ζ_n) is the field obtained by adjoining a primitive
nth root of unity ζ_n = e^{2πi/n} to the rationals ℚ. Its Galois group —
the group of field automorphisms that fix ℚ — is:

Gal(ℚ(ζ_n)/ℚ) ≅ (ℤ/nℤ)×

where (ℤ/nℤ)× = {a : 1 ≤ a ≤ n, gcd(a,n) = 1} is the multiplicative group
of units modulo n, with |Gal| = φ(n) (Euler totient function).

The action is: σ_a(ζ_n) = ζ_n^a for each a ∈ (ℤ/nℤ)×. This sends each nth
root of unity to another nth root of unity — an **ORBIT on the set of primitive
nth roots**. The whole theory of cyclotomic fields is the prototypical example
of class field theory, which is the **Abelian case of the Langlands programme**:
every abelian extension of ℚ is a subfield of some ℚ(ζ_n) (Kronecker-Weber
theorem).

This entry is the H¹ version of the Langlands programme — no BIND needed for
Abelian extensions. LA01 and LA02 add the non-Abelian BIND content.

---

## Target category

**GalSet(n)** — the category of Gal(ℚ(ζ_n)/ℚ)-sets: finite sets X with an
action of (ℤ/nℤ)×. Objects are nth roots of unity; morphisms are (ℤ/nℤ)×-
equivariant maps. The Galois ORBIT of a root ζ_n^k (for gcd(k,n)=1) is the
full set of primitive nth roots — a single transitive (ℤ/nℤ)× ORBIT.

The **minimal polynomial** of ζ_n over ℚ is the nth cyclotomic polynomial:

Φ_n(x) = ∏_{gcd(k,n)=1} (x − ζ_n^k)

This is the LABEL eigenvalue of the Galois ORBIT — the polynomial whose roots
are precisely one ORBIT.

## Interpretation functor

F: C → GalSet(n) defined by:

| Opcode | F(opcode) |
|--------|-----------|
| ORBIT  | Galois action: σ_a : ζ_n^k ↦ ζ_n^{ak mod n}; the group (ℤ/nℤ)× acts by multiplication on the exponent; the orbit of ζ_n (a primitive root) is the set of all φ(n) primitive nth roots of unity |
| TWIST  | Kummer extension: √[n]{α} for α ∈ ℚ*/(ℚ*)^n; generates a degree-n cyclic extension with Galois group ℤ/nℤ; the TWIST adds a geometric phase (nth root extraction) that winds once around the origin in ℂ |
| LABEL  | Frobenius element: for a prime p ∤ n, the Frobenius Frob_p ∈ Gal is the unique element satisfying σ_{Frob_p}(ζ_n) = ζ_n^p; equivalently, Frob_p = [p] ∈ (ℤ/nℤ)×; the L-function eigenvalue at p |
| FLIP   | Complex conjugation: σ_{-1}(ζ_n) = ζ_n^{-1} = ζ̄_n; the FLIP exchanging ζ_n and its conjugate; generates a ℤ/2ℤ subgroup of Gal |

## ISA programme

```
SETUP:   LABEL[n | choose modulus; n=5 gives 4th-degree extension]
ROOTS:   ORBIT[zeta_n^k for gcd(k,n)=1 | primitive nth roots]
GALOIS:  ORBIT[sigma_a(zeta_n) = zeta_n^a | Galois action, a in (Z/nZ)^*]
FROB:    LABEL[Frob_p = [p] in (Z/nZ)^* | Frobenius at prime p]
POLY:    LABEL[Phi_n(x) = prod(x - zeta_n^k) | cyclotomic polynomial]
KUMMER:  TWIST[adjoin n-th root of alpha | cyclic degree-n extension]
CONJ:    FLIP[sigma_{-1}(zeta_n) = zeta_n^{-1} | complex conjugation]
CLASS:   LABEL[Artin map: p -> Frob_p | prime -> Galois element]
OUTPUT:  LABEL[L(s, chi) = prod_p (1 - chi(p)p^{-s})^{-1} | Dirichlet L-function]
```

## Computable output

- **Cyclotomic polynomial** Φ_n(x): the minimal polynomial of ζ_n over ℚ,
  with degree φ(n). The ORBIT has exactly φ(n) elements — the primitive nth roots.
  Examples: Φ_5(x) = x⁴+x³+x²+x+1 (degree 4, (ℤ/5ℤ)× ≅ ℤ/4ℤ); Φ_12(x) = x⁴−x²+1
  (degree 4, (ℤ/12ℤ)× ≅ (ℤ/2ℤ)²). Computed for all n; coefficients known to
  be ±1 for n = p, 2p, p² but can be large for n with many factors.

- **Frobenius eigenvalue** Frob_p = [p mod n]: for any prime p ∤ n, the
  Frobenius element is [p] ∈ (ℤ/nℤ)×. Explicitly: ζ_n^{Frob_p} = ζ_n^p.
  This is the LABEL output of the Galois ORBIT at each prime. The **quadratic
  reciprocity law** follows: (p/q) = (q/p)×(−1)^{(p−1)(q−1)/4} is a consequence
  of the Frobenius element in Gal(ℚ(ζ_{pq})/ℚ).

- **Dirichlet L-function** L(s,χ) = Σ_{n≥1} χ(n) n^{−s} = ∏_p (1−χ(p)p^{−s})^{−1}:
  the LABEL eigenvalue of the Frobenius ORBIT. For a character χ: (ℤ/nℤ)× → ℂ×,
  the Euler product expresses L(s,χ) as a product over primes — each factor
  1/(1−χ(Frob_p)p^{−s}) is the LABEL contribution of prime p to the L-function.
  L(1,χ) ≠ 0 for χ ≠ 1 (Dirichlet's theorem: primes in arithmetic progressions).

- **Artin map** p ↦ [p]: the explicit isomorphism Gal(ℚ(ζ_n)/ℚ) ≅ (ℤ/nℤ)× is
  the simplest instance of the Artin reciprocity map — the kernel of the Langlands
  correspondence for GL_1. The class field theory statement: every abelian extension
  K/ℚ is determined by its conductor n and a subgroup H ⊂ (ℤ/nℤ)×, with Gal(K/ℚ) ≅
  (ℤ/nℤ)×/H. This is the H¹ Langlands correspondence (GL_1 case).

## Why H¹ (Abelian Langlands = H¹ Langlands)

The Galois group (ℤ/nℤ)× is **Abelian**. In the ISA H^k ladder:

- **H⁰ (Origami)**: fixed points of Galois = ℚ itself; the rational subfield;
  ORBIT count = 1 (only ℚ is fixed); no Galois action
- **H¹ (Forge)**: cyclotomic extensions; Abelian Galois group (ℤ/nℤ)×; one-
  dimensional Galois representations χ: Gal → ℂ×; TWIST = Kummer extensions;
  class field theory = Abelian Langlands; L-functions = Hecke/Dirichlet L-functions
- **H² (Meld)**: non-Abelian extensions (GL_2, GL_n Langlands); Galois representations
  ρ: Gal → GL_n(ℚ̄_ℓ); automorphic forms; L-functions = automorphic L-functions
  (see LA01, LA02)

Cyclotomic fields are H¹ because their Galois groups are Abelian — the
one-dimensional representations χ of (ℤ/nℤ)× are the TWIST content (Dirichlet
characters), and the L-function is a LABEL eigenvalue of the TWIST. The Kummer
TWIST generates cyclic extensions; complex conjugation is the FLIP.

The passage H¹ → H² requires **non-Abelian** Galois groups (e.g., S_n for
irreducible polynomials of degree n ≥ 5, or GL_2(𝔽_p) for modular forms).
The BIND content of H² is the non-commutativity of the Galois action.

## Connection to Langlands (LA01/LA02)

GA01 is the foundation for both LA entries:
- **LA01 (Geometric Langlands)**: generalises from curves over ℚ to curves over
  𝔽_q; the cyclotomic character χ_ℓ: Gal → ℤ_ℓ× is the proto-Langlands
  correspondence for GL_1 over a curve
- **LA02 (Artin/Taniyama-Shimura)**: the GL_1 Artin map (GA01) lifts to
  GL_2 (elliptic curves, modular forms); Wiles's FLT proof = GL_2 Langlands
  for elliptic curves over ℚ = two-dimensional non-Abelian extension of GA01

## Connection to Galois chemistry (Paper 488/492)

**GA02 (FeMoco Galois computer)** is the molecular realisation of GA01: the
G₂ symmetry of FeMoco acts on the 7 iron d-orbital states as a 7-dimensional
Galois representation of the FeMoco Galois group. The "Frobenius at prime p"
becomes the "spin-orbit coupling at each Fe site" — the orbital counterpart of
the number-theoretic Frobenius element.

## Validation

- Gauss (1801), Disquisitiones Arithmeticae: cyclotomic construction of regular
  17-gon; Frob_p = [p mod 17] explicitly computed; quadratic reciprocity proved.
- Kronecker-Weber theorem (Hilbert, 1896): every abelian extension of ℚ is
  cyclotomic; the complete classification of H¹ Langlands over ℚ.
- Dirichlet (1837): primes in arithmetic progressions; L(1,χ) ≠ 0 proved;
  Frobenius density confirmed (Dirichlet density = φ(n)^{-1} per coset).
- Class field theory (Artin 1927, Chevalley 1940): Artin reciprocity map;
  abelian Langlands for all number fields; Hecke L-functions = LABEL eigenvalues.

---

*Part of the [ISA Zoo](/adelic-simplicial-architecture/isa-zoo/). Categorical foundations: [Paper 591](https://doi.org/10.5281/zenodo.21309088).*
