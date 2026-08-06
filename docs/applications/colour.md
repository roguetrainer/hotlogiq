---
layout: default
title: "Where Colour Comes From"
parent: Applications
nav_order: 2
description: "Almost every colour in the mineral world is a d-electron transition, and the algebra that predicts it is Racah's recoupling theory — whose central object, the 6j symbol, is a tetrahedron."
tags: [colour, spectroscopy, racah, tanabe-sugano, 6j, crystal-field, tetrahedra]
---

# Where Colour Comes From
{: .no_toc }

*Ruby and emerald contain the same coloured ion. The difference between them is
one number — and that number is predicted by an algebra of four-object
recoupling whose central symbol is a tetrahedron.*
{: .fs-5 .fw-300 }

---

## Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## The observation

Ruby is red. Emerald is green. Both get their colour from **the same impurity**:
a Cr³⁺ ion, sitting in a lattice of otherwise colourless host material —
Al₂O₃ for ruby, beryl for emerald. Remove the chromium and both are clear.

The same ion produces two different colours because the *surroundings* differ.
This is not a chemical difference — the chromium is in the same oxidation state,
with the same three d-electrons, in both. It is a difference in how strongly the
neighbouring oxygens split the d-orbital energies.

That splitting has a name, 10*Dq*, and it is essentially the only parameter that
changes between the two gemstones.

| | 10*Dq* (cm⁻¹) | Broad absorption | Colour transmitted |
|---|---|---|---|
| **Ruby** (Cr³⁺ in Al₂O₃) | ≈ 18,000 | ≈ 556 nm — green | red |
| **Emerald** (Cr³⁺ in beryl) | ≈ 16,300 | ≈ 613 nm — orange | green |

A 9% change in one number moves the absorption band by 57 nm, and that is the
whole difference between the two most famous gemstones in the world.

---

## Why this covers most of the colours you see

Transition-metal d-electron transitions, and the closely related
charge-transfer transitions, account for the colour of a remarkable fraction of
the inorganic world:

- **Gemstones** — ruby, emerald, sapphire (Fe/Ti charge transfer), alexandrite,
  turquoise, peridot, garnet
- **Pigments** — cobalt blue, chrome green, cadmium yellow, Prussian blue,
  ultramarine, the ochres and umbers
- **Biology** — the red of haemoglobin and the green of chlorophyll are
  porphyrin π→π* transitions modulated by a central metal (Fe, Mg); the blue of
  haemocyanin is Cu
- **Glass and glaze** — essentially all traditional colouring is a
  transition-metal oxide
- **Rust, verdigris, patina** — the visible chemistry of weathering

The exceptions are real but bounded: organic dyes work by extended π
conjugation, and structural colour (butterfly wings, opal, peacock feathers) is
interference rather than absorption.

---

## The algebra behind it

Here is the part that connects to everything else on this site.

A d³ ion like Cr³⁺ has three electrons distributed over five d-orbitals. The
question *"what are the allowed energy levels?"* is a question about **coupling
angular momenta** — each electron carries orbital and spin angular momentum, and
they must be combined into total states.

Combining two angular momenta is the Clebsch–Gordan problem, solved in the 1930s.
Combining *three* is still unambiguous. But as soon as you ask how the answer
changes when you **couple them in a different order**, you need a new object: the
amplitude relating one coupling scheme to another.

That amplitude is **Wigner's 6j symbol**, and Racah built the systematic theory
of atomic spectra on it between 1942 and 1949.

### Why it is a tetrahedron

A 6j symbol has six arguments. They are not six independent things — they are
the **six edges of a tetrahedron**, whose four faces are the four triangle
conditions the arguments must satisfy:

```
        j₁ ────── j₂
         │ ╲    ╱ │
         │  j₁₂  │        six edges  = six arguments
         │ ╱    ╲ │        four faces = four triangle conditions
        j₃ ────── j
```

The 6j symbol's 24 symmetries are exactly the symmetries of the tetrahedron.
This is why the same object appears in Ponzano–Regge quantum gravity as the
amplitude for a spacetime tetrahedron, and in Racah's theory as the amplitude
for recoupling four angular momenta. **It is the same symbol.**

**Four is the threshold.** Two objects combine trivially. Three combine
associatively, with no choice to make. Four is where recoupling becomes a real
question with a non-trivial answer — and where a tetrahedron appears to carry it.

---

## Does it actually predict the number?

Yes, and this is checkable in a few lines.

For a d³ ion, the ²E state — the one responsible for ruby's sharp red
fluorescence line, the transition that made the first laser work — has a term
energy given in the strong-field limit by

$$E(^2E) = 9B + 3C - \frac{24B^2}{10Dq}$$

where *B* and *C* are the **Racah parameters**: two numbers that summarise all
the electron–electron repulsion within the d-shell. They are combinations of
Slater–Condon integrals, and the reason there are exactly two of them is a
group-theoretic fact about SO(3) recoupling.

Using published values for Cr³⁺ in Al₂O₃ (*B* = 640, *C* = 3250,
10*Dq* = 18,000 cm⁻¹):

$$E(^2E) = 14{,}964 \text{ cm}^{-1} \quad\Rightarrow\quad 668 \text{ nm}$$

The observed ruby R₁ line is at **14,403 cm⁻¹, or 694 nm** — an error of
**3.9%**, from an algebraic formula with two fitted parameters and no
wavefunction calculation at all.

---

## The Tanabe–Sugano diagram

Tanabe and Sugano's 1954 diagrams plot every term energy of a d^n ion against
10*Dq*/*B*. They remain in every inorganic chemistry textbook, and they are pure
recoupling algebra — no Hamiltonian is solved, no integral is evaluated
numerically.

One feature deserves attention. Most terms slope steeply with 10*Dq*: change the
ligand field and the energy moves. But the d³ ²E term is **almost flat**. Its
energy barely depends on the crystal field at all, which is why ruby's R-line is
sharp where the other absorptions are broad — and why it works as a laser
transition.

That flatness is visible in the formula above: 10*Dq* enters only through a
small correction term, while *B* and *C* dominate. The geometry of the diagram
encodes which spectroscopic features will be sharp and which broad, before any
computation.

---

## What this does and does not show

**What it shows.** A substantial part of visible chemistry is governed by
recoupling algebra rather than by solving the Schrödinger equation. The
allowed levels, the selection rules, the sharp-versus-broad character of each
transition, and the term energies to a few percent all follow from group theory
plus two empirical parameters.

**What it does not show.** The Racah parameters *B* and *C* are **fitted to
experiment**, not derived. Predicting them from first principles requires real
integrals over real wavefunctions — the Hamiltonian half of chemistry. So the
algebra tells you the *structure* of the spectrum and gets the numbers close;
it does not give you the numbers for free.

This is the general pattern set out in
[Diagrammatic Chemistry](../theory/diagrammatic-chemistry.md): symmetry fixes
which states exist and how they are labelled, and a computation is still needed
to say where they sit.

---

## Further reading

- Racah, *Phys. Rev.* **61**, 186 (1942); **62**, 438 (1942); **63**, 367
  (1943); **76**, 1352 (1949) — the four papers that built the theory.
- Tanabe & Sugano, *J. Phys. Soc. Japan* **9**, 753 and 766 (1954) — the
  diagrams.
- Sugano, Tanabe & Kamimura, *Multiplets of Transition-Metal Ions in Crystals*
  (Academic Press, 1970) — the standard reference, source of the ruby
  parameters used above.
- Burns, *Mineralogical Applications of Crystal Field Theory* (CUP, 2nd ed.
  1993) — the colour of minerals, comprehensively.
- Nassau, *The Physics and Chemistry of Colour* (Wiley, 2nd ed. 2001) — all
  fifteen causes of colour, of which this page covers two.
- Varshalovich, Moskalev & Khersonskii, *Quantum Theory of Angular Momentum*
  (World Scientific, 1988) — the 6j symbol and its tetrahedral symmetry.
