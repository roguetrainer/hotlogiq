---
layout: default
nav_exclude: true
title: "N03 — Closed Walks on the Fano Plane and OEIS A274975"
parent: Notes
nav_order: 3
---

# N03 — Closed Walks on the Fano Plane and OEIS A274975

**Related paper:** [Paper 271 — The Spin-7 Annihilator and the 731 ISA](../papers/)

---

The integer sequence 3, 2, 6, 11, 26, 57, 129, 289, 650, 1460, ... (OEIS A274975) arises
naturally from the Fano plane incidence structure. This note records the explicit graph-theoretic
interpretation and its connection to the Spin-7 spectral identity proved in Paper 271 §7.8.

---

## 1. The Fano Plane as a Graph

Label the seven points of PG(2,2) as {0, 1, 2, 3, 4, 5, 6}. Define the circulant adjacency
matrix

$$A = I + S + S^{-1},$$

where $S$ is the $7 \times 7$ cyclic shift matrix ($S_{ij} = 1$ iff $j \equiv i+1 \pmod 7$) and
$I$ is the identity. Explicitly:

$$A = \begin{pmatrix}
1&1&0&0&0&0&1\\
1&1&1&0&0&0&0\\
0&1&1&1&0&0&0\\
0&0&1&1&1&0&0\\
0&0&0&1&1&1&0\\
0&0&0&0&1&1&1\\
1&0&0&0&0&1&1
\end{pmatrix}.$$

This is the adjacency matrix of the **Fano cycle graph**: each node is connected to itself
(via $I$) and to its two nearest cyclic neighbours (via $S$ and $S^{-1}$), encoding the
order-3 local structure of each Fano point.

---

## 2. Closed Walks and the Trace Formula

A standard result in algebraic graph theory is that the $(i,j)$ entry of $A^n$ counts the
number of walks of length $n$ from node $i$ to node $j$. Consequently, $\mathrm{tr}(A^n)$
counts **total closed walks of length $n$** — walks that start and end at the same node,
summed over all seven nodes.

Direct computation gives:

$$\mathrm{tr}(A^n) = 7, \; 7, \; 21, \; 49, \; 133, \; 357, \; 987, \; 2765, \ldots$$

The eigenvalues of $A$ decompose into two orbits under the 7-fold cyclic symmetry:

- **Trivial eigenvalue:** $\lambda_0 = 3$ (constant eigenvector), contributing $3^n$ to the trace.
- **Non-trivial eigenvalues:** three pairs $(\alpha_i, \alpha_i)$ from the factorisation
  $\mathrm{char\_poly}(A) = (x-3)(x^3 - 2x^2 - x + 1)^2$.

Therefore:

$$\mathrm{tr}(A^n) = 3^n + 2\,a(n),$$

where $a(n) = \alpha_1^n + \alpha_2^n + \alpha_3^n$ is the Newton power sum of the roots
$\alpha_i$ of $x^3 - 2x^2 - x + 1 = 0$. Rearranging:

$$\boxed{a(n) = \frac{\mathrm{tr}(A^n) - 3^n}{2}.}$$

This is OEIS A274975. The term $a(n)$ is the contribution to the closed-walk count from the
**non-trivial spectral component** of the Fano incidence operator.

---

## 3. The n = 2 Case Explicitly

At $n=2$ we have $A^2_{ii} = 3$ for every node $i$ (by symmetry of the circulant), so
$\mathrm{tr}(A^2) = 21$. Each node contributes exactly 3 closed 2-step walks: leave along
each of the 2 cyclic edges and return, plus the trivial self-loop squared. The trivial
contribution is $3^2 = 9$, leaving $a(2) = (21 - 9)/2 = 6$.

The identity $\mathrm{tr}(A^2) = 21$ is the **Spin-7 spectral identity** proved in Paper 271
§7.8 (Theorem: $\mathrm{tr}(T^2) = 21$ exactly, where $T = I + S + S^{-1}$). It holds
because the 7 nodes each contribute degree 3 = sum of squares of eigenvalues per orbit, and
$7 \times 3 = 21$.

---

## 4. The Characteristic Polynomial and Discriminant

The polynomial $p(x) = x^3 - 2x^2 - x + 1$ has discriminant $\Delta = 49 = 7^2$.

The substitution $x \mapsto x+1$ transforms $p$ into $x^3 + x^2 - 2x - 1$, which is the
minimal polynomial of $2\cos(2\pi/7)$. The roots of $p$ are therefore
$1 + 2\cos(2\pi k/7)$ for $k = 1, 2, 3$ — shifts of the standard heptagonal cosines by 1,
reflecting the $+I$ term in the definition of $A$.

The companion G$_2$ polynomial $q(x) = x^3 - 4x^2 + 3x + 1$ (whose Newton sums appear in
OEIS A215076 / A274220) also has discriminant $49 = 7^2$. Both polynomials share their
origin in the heptagonal symmetry of PG(2,2).

---

## 5. What This Note Does Not Claim

The sequence A274975 counts closed walks on the Fano cycle graph $I + S + S^{-1}$. It does
**not** count:

- Feynman diagram amplitudes (no Lagrangian has been defined)
- Pachner move histories of a simplicial complex (no simplicial complex has been constructed)
- Apéry-type hypergeometric sums (the Apéry numbers satisfy a different and unrelated recurrence)

These would each require independent constructions and proofs. The walk-counting
interpretation is the established, verifiable content.

---

## 6. OEIS Status and Proposed Comment

The sequence is recorded as OEIS A274975 (Kai Wang, 2016). The entry correctly identifies
the polynomial and the trigonometric form of the roots but does not mention the Fano plane
or the walk-counting interpretation. The following comment has been prepared for submission
to OEIS:

> The polynomial $x^3 - 2x^2 - x + 1$ arises as the non-trivial factor of
> $\mathrm{char\_poly}(I + S + S^{-1})$, where $S$ is the $7 \times 7$ cyclic shift matrix.
> The full characteristic polynomial is $(x-3)(x^3 - 2x^2 - x + 1)^2$, so
> $a(n) = (\mathrm{tr}((I+S+S^{-1})^n) - 3^n)/2$ counts closed $n$-step walks on the
> Fano cycle graph attributed to the non-trivial spectral component. The identity
> $\mathrm{tr}((I+S+S^{-1})^2) = 21$ is the Spin-7 spectral identity (see Paper 271,
> Adelic Simplicial Architecture). Both $x^3 - 2x^2 - x + 1$ and the companion G$_2$
> polynomial $x^3 - 4x^2 + 3x + 1$ (A215076) have discriminant $49 = 7^2$, reflecting
> their shared origin in the heptagonal symmetry of the Fano plane PG(2,2).

---

## 7. The Full Trace Sequence: A New OEIS Entry

The sequence $\mathrm{tr}(A^n)$ itself — before subtracting $3^n$ — is:

$$7, 7, 21, 49, 133, 357, 987, 2765, 7861, 22603, 65611, 191891, \ldots$$

A search of OEIS (May 2026) finds **no entry** for this sequence. It satisfies the
order-4 recurrence

$$a(n) = 5a(n-1) - 5a(n-2) - 4a(n-3) + 3a(n-4),$$

whose characteristic polynomial $(x-3)(x^3 - 2x^2 - x + 1)$ is the minimal polynomial of
$A$ as a recurrence generator (the full characteristic polynomial of $A$ is
$(x-3)(x^3 - 2x^2 - x + 1)^2$, but the recurrence degenerates to order 4 because both
factors appear). It equals $3^n + 2 \cdot \text{A274975}(n)$ term by term.

The proposed OEIS submission is:

> **Name:** Total number of closed walks of length n on the Fano cycle graph
> $A = I + S + S^{-1}$ (7 nodes, circulant with self-loops).
>
> **Data:** 7, 7, 21, 49, 133, 357, 987, 2765, 7861, 22603, 65611, 191891, 564571,
> 1668765, 4950239, 14724759, 43891253, 131037809, 391684461, 1171842525
>
> **Formula:** $a(n) = 5a(n-1) - 5a(n-2) - 4a(n-3) + 3a(n-4)$, with
> $a(0)=7, a(1)=7, a(2)=21, a(3)=49$.
> Equivalently, $a(n) = 3^n + 2 \cdot \text{A274975}(n)$.
> G.f.: $7(1 - 4x + 3x^2 + x^3) / ((1-3x)(1 - 2x - x^2 + x^3))$.
>
> **Comments:** $S$ is the $7\times7$ cyclic shift matrix and $A = I + S + S^{-1}$ is the
> adjacency matrix (with self-loops) of the Fano cycle graph PG(2,2). The eigenvalues of
> $A$ are 3 (multiplicity 1) and the six roots of $(x^3 - 2x^2 - x + 1)^2 = 0$
> (three values each with multiplicity 2), giving $\mathrm{char\_poly}(A) =
> (x-3)(x^3 - 2x^2 - x + 1)^2$. The term $a(2) = 21$ is the Spin-7 spectral identity
> (Paper 271, Adelic Simplicial Architecture). Cross-reference: A274975.

---

## 8. Why Triality Does Not Explain the Three Eigenvalue Orbits

The operator $A = I + S + S^{-1}$ has three terms, and its non-trivial eigenvalues come in
three conjugate pairs, prompting the question of whether $D_4$ triality is responsible.
The answer is **no**, for a precise Lie-theoretic reason.

$G_2$ is defined as the fixed-point subgroup of the triality automorphism of
$\mathrm{Spin}(8)$. Triality permutes the three 8-dimensional representations of $D_4$
(the vector $V$ and the two spinors $S^+$, $S^-$), but when restricted to $G_2$ all three
collapse identically to $\mathbf{1} \oplus \mathbf{7}$. Because triality acts trivially on
the $G_2$ subgroup and on its 7-dimensional representation, it cannot permute the
eigenspaces of $A$, which lives inside the $\mathbf{7}$.

The symmetry that **does** permute the three eigenvalue orbits is arithmetic, not
Lie-theoretic:

- **Galois group:** The roots of $x^3 - 2x^2 - x + 1$ live in the totally real cubic
  subfield $\mathbb{Q}(\cos(2\pi/7))$ of the 7th cyclotomic field. The Galois group
  $\mathrm{Gal}(\mathbb{Q}(\cos(2\pi/7))/\mathbb{Q}) \cong \mathbb{Z}/3\mathbb{Z}$ is
  generated by the Frobenius map $\sigma(\alpha) = \alpha^2 - 2$, which cyclically permutes
  the three roots.
- **Fano Frobenius subgroup:** The full automorphism group $\mathrm{Aut}(\mathrm{PG}(2,2))
  \cong PSL(2,7)$ contains the Frobenius subgroup $F_{21} \cong \mathbb{Z}_7 \rtimes
  \mathbb{Z}_3$. The $\mathbb{Z}_7$ factor is generated by the shift $S$; the $\mathbb{Z}_3$
  factor acts by $x \mapsto 2x \pmod 7$, which mirrors the squaring action of the
  cyclotomic Galois group and explicitly permutes the three eigenspaces of $A$.

**Summary:** Triality freezes the Fano plane into existence by fixing $G_2$; the
$\mathbb{Z}/3\mathbb{Z}$ Galois/Frobenius symmetry then permutes the eigenspaces *within*
that frozen plane. They operate on orthogonal axes.

---

## See Also

- [Paper 271 — The Spin-7 Annihilator and the 731 ISA](../papers/)
- [OEIS A274975](https://oeis.org/A274975)
- [OEIS A215076](https://oeis.org/A215076) — companion G₂ sequence
- [OEIS A033304](https://oeis.org/A033304) — A274975 shifted by one term
- [Glossary: Fano Plane](../glossary/#fano-plane)
