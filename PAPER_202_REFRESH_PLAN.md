# Paper 202 (TRS) Refresh Plan

## Current state

**Paper 202: "Topological Resonance Synthesis"** is a 2024 foundational manifesto laying out the TRS computational framework. It's published on Zenodo (10.5281/zenodo.19858021) with explainer + README but no full LaTeX in the repo.

**Assessment** (from audit): The paper is ambitious and visionary, but uses outdated terminology and makes claims that need sharpening given what we've learned in Papers 640-642.

---

## Key issues to address

### 1. **Opcode names are stale**

Paper 202 uses old terminology (SPLIT, SPLAT, FLOP, etc.). Current standard is five canonical opcodes:
- ORBIT 🔄 (replaced SPLIT in the combinatorial sense)
- LABEL 🏷️ (replaced SPLAT)
- FLIP 👁️ (replaced FLOP)
- TWIST 🌀 (Berry phase, monodromy)
- BIND 💎 (non-Abelian holonomy)

**Fix**: Update explainer to use ORBIT/LABEL/FLIP/TWIST/BIND. Mention legacy names only in footnote (opcodes.md line 41-46 explains the mapping).

### 2. **Missing tier structure framing**

Paper 202 talks about "resonance," "vortons," "holomorphic relaxation" without connecting to H⁰/H¹/H² tiers.

**Fix**: Reframe TRS explicitly as:
- **H⁰ layer (ORBIT)**: Finding global minima via relaxation in the energy landscape
- **H¹ layer (TWIST)**: Avoiding local traps using Maslov index / Berry phase (via MGE)
- **H² layer (BIND)**: Topological defects (vortons) as non-Abelian objects on Gr(k,n)

### 3. **Adiabatic limit / β* snap connection is fuzzy**

Paper 202 mentions "cooling curves" and "cracking like glass" but doesn't connect to the rigorous β* snap framework from Papers 640+.

**Fix**: Make explicit that:
- Optimal cooling schedule should be designed to cross β* at precisely the right rate
- Too fast → "glass cracking" (quenching, frozen-in error)
- Too slow → infinite time cost
- β* is *computable* from the Grassmannian structure (Papers 596+)

### 4. **Vorton dynamics needs geometric clarity**

Current language: "vortons as localized topological defects that navigate through imaginary dimensions" — poetic but imprecise.

**Fix**: Vortons are:
- Critical points on the Grassmannian Gr(k,n)
- Move via symplectic parallel transport (respecting the Fubini-Study metric)
- Interact via non-Abelian fusion rules (BIND opcode)
- "Imaginary dimensions" = phase space (complex continuation, not literally imaginary)

### 5. **BSS machine claim needs audit**

Paper 202 claims TRS "realizes the BSS machine" and bypasses P≠NP via continuous computation.

**Concern**: BSS computes over ℝ with exact arithmetic (unphysical). Real TRS operates with noise.

**Fix**: 
- Soften claim: "inspired by" not "realizes"
- Clarify noise tolerance vs BSS exactness
- Cite complexity-theoretic work (pour-El et al., Blum-Shub, etc.)
- Move to section 6 (risks/limitations)

### 6. **Palmer / p-adic claims are speculative**

Paper 202 hints at Palmer's ISI (intense scale invariance) and p-adic structure but doesn't develop it.

**Status**: Papers 513 (Palmer ISP) and 469-470 (magic taxonomy) now exist.

**Fix**: 
- Move to appendix or future-work section
- Clarify that p-adic structure is *not essential* for basic TRS
- Link to Papers 513, 469 for readers interested in that direction

### 7. **Spectral gap / convergence guarantee oversimplified**

Paper 202 claims "uniform spectral gap λ₁ > 0" ensures convergence, but this breaks down at H¹/H².

**Fix**: Explain that spectral gap is tier-dependent:
- H⁰: Classical eigenvalue spacing
- H¹: Avoided crossings can reduce gap
- H² (topological): Obstructions can make gap zero

---

## Proposed refresh schedule

### **Phase 1: Quick refresh (3–4 days, do now while Paper 640 experiments run)**

1. **Explainer update** (1 day):
   - Replace SPLIT/SPLAT/FLOP with ORBIT/LABEL/FLIP/TWIST/BIND
   - Add brief H⁰/H¹/H² tier framing
   - Clarify that vortons are critical points on Gr(k,n)
   - Soften BSS claim slightly

2. **README refresh** (2 days):
   - Add explicit β* snap / adiabatic limit connection
   - Rewrite vorton section with precise language
   - Add comparison to simulated annealing (why TRS is better)
   - Update references to link to Papers 640+

3. **Commit** to repo with note: "Paper 202 refresh: update terminology (ORBIT/LABEL/FLIP/TWIST/BIND), add tier framing, link to Papers 640-642"

### **Phase 2: Full v2.0 rewrite (2–3 weeks, defer to 2027)**

- Write full LaTeX paper (15-20 pages) with:
  - New opcode language throughout
  - Complete H⁰/H¹/H² tier structure
  - Rigorous β* snap derivation
  - Precise Grassmannian / vorton geometry
  - Clear comparison to simulated annealing / MCMC
  - Risk/limitation discussion (BSS machine, noise, scaling)
  
- Target: Resubmit as "Paper 202 v2.0" or integrated into "The TRS Manifesto v2" after Papers 640-641 published

---

## Why refresh now vs later?

**Refresh now (3–4 days):**
- Papers 640-642 will cite Paper 202 as foundation
- If 202 is inconsistent, 640-642 citations look sloppy
- Quick terminological update is easy; no risk of breaking anything

**Defer full v2.0 (2027):**
- After 640-641 published, momentum builds for trilogy
- Reader feedback on 640-641 informs how to position 202
- Have time to write clean v2.0 LaTeX (not rushed)
- Better to have solid 640-641 first, then anchor back to 202

---

## Checklist: Paper 202 Quick Refresh (Phase 1)

### Explainer.md changes:
- [ ] Line 31: "vorton" definition → "critical point on Grassmannian Gr(k,n)"
- [ ] Line 31: "imaginary dimensions" → "complex phase space (symplectic structure)"
- [ ] Add §1.1 (new): Explain ORBIT/LABEL/FLIP/TWIST/BIND (2 paragraphs, reference opcodes.md)
- [ ] Soften BSS claim (line 26): "inspired by" instead of "realization of"
- [ ] Add line after "Adiabatic Limit" section: "This corresponds to the β* snap threshold in ISA language..."
- [ ] Final paragraph: Add reference to Papers 640-642

### README.md changes:
- [ ] Abstract: Add "via Grassmannian optimization on Gr(k,n)"
- [ ] Add section: "How TRS improves on simulated annealing" (3 paragraphs)
- [ ] Update related papers: Add 640, 641, 596 when published
- [ ] Clarify H⁰/H¹/H² tiers (1 paragraph under Abstract)

### Supporting changes:
- [ ] Add internal links: Paper 202 → Papers 201, 205, 596, 640+ when available
- [ ] Update papers.csv audit note: "Pre-stabilisation, refresh Phase 1 complete. Full v2.0 LaTeX pending 2027."

---

## Decision: Start now or later?

**My recommendation: Do Phase 1 (quick refresh) this week.**

- **Effort**: 3–4 days, low risk
- **Benefit**: Coherence when Papers 640-642 reference 202
- **Timing**: Can start Monday while Paper 640 experiments run (no blocking dependencies)
- **Payoff**: 202 becomes solid foundation for the trilogy, not liability

**Then**: Defer Phase 2 (full v2.0) to Q2 2027 when we have published 640-641 and gathered reader feedback.

