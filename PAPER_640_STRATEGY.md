# Paper 640 Strategy & Next Steps

## What we have now

**Paper 640: Full outline + §1-2 prose** ✓

- §1 Introduction (1,200 words): pedagogical disconnect → hidden duality → why now → three examples → roadmap
- §2 Category theory (2,500 words): limits/colimits for chemists → adjoints → Grassmannian → Spec ⊣ Lan precise statement → ISA tiers → β* snap → why category theory

**Status of each section:**

| Section | Status | Pages | Experiments |
| --- | --- | --- | --- |
| §1 Introduction | ✓ Draft complete | 3–4 | None |
| §2 Category theory | ✓ Draft complete | 4–5 | None |
| §3 H₂ worked example | Outline ready | 2–3 | x640a |
| §4 N₂ dissociation | Outline ready | 3–4 | x640b |
| §5 Fe-SCO | Outline ready | 4–5 | x640c-e |
| §6 QEC sidebar | Brief outline | 1–2 | None |
| §7 Comparison table | Outline ready | 1–2 | — |
| §8 Implications | Outline ready | 2–3 | — |
| §9 Discussion | Outline ready | 2–3 | — |
| §10 Conclusion | Template | 1–2 | — |
| **Total** | **~60% done** | **12–15 pages** | **5 experiments** |

---

## Immediate next step: prose or experiments?

**Recommendation: BOTH IN PARALLEL**

### Path A (Prose next, experiments follow)
1. Write §3 (H₂ example) this week — pure theory, no computation
2. Parallelize:
   - Continue writing §4-5 while x640a runs
   - Run all 5 experiments while revising early sections

**Advantage:** Prose draft gets done faster; experiments inform revisions

### Path B (Experiments first, prose after)
1. Design and run x640a-e this week
2. Write §3-5 next, using real data from experiments
3. Prose is richer, validated

**Advantage:** Experiments might reveal gaps in theory; prose is stronger

**My recommendation:** Path A (prose + experiments parallel)
- Reason: §3 (H₂) is self-contained and needs no computation; write it while setting up x640a
- §4-5 can reference "results from x640b" while x640b is running

---

## Decision: Experiments priority order

**Start immediately:**
1. **x640a** (H₂ Rayleigh-Ritz): 1–2 days. Simple, clean, no dependencies. Output: plots of E(θ) on Gr(1,2).
2. **x640c** (Fe-SCO CASSCF): 5–7 days. More involved but standard CASSCF. Output: LS and HS energies, structures.

**Start after above succeed:**
3. **x640b** (N₂ dissociation): 10–14 days. Needs CASSCF at multiple R values + Berry phase. Output: dissociation curve, phase calculation.

**Final pass (after main results):**
4. **x640d** (Fe-SCO + SOC): 3–5 days. Add spin-orbit to x640c results.
5. **x640e** (Fe-SCO thermal): 2–3 days. Boltzmann distribution at varying T.

**Total computation time:** ~25–30 days if sequential. Estimated calendar time with parallelization: 3–4 weeks.

---

## Paper 641 & 642 strategy

**Paper 641 (QEC duality):**
- Start detailed outline after Paper 640 §1-2 are finalized
- Plan to write § while Paper 640 is in revision cycle
- Should not delay 640 submission; can be companion paper

**Paper 642 (FeMoco):**
- Only attempt if x640a-e validate the theory cleanly
- Defer to Q4 2026 / Q1 2027 if we want more confidence
- Alternative: publish 640-641, then decide on 642

---

## Success criteria for Paper 640

**Prose quality:**
- Is the adjunction explanation clear to someone with no category theory training?
- Do chemists find the tier structure useful (not just abstract)?
- Does the H₂ → N₂ → Fe-SCO progression build intuition?

**Experimental validation:**
- Does E(θ) on Gr(1,2) match HF/FCI for H₂? (expect yes, trivial)
- Does N₂ avoided crossing line up with β* snap prediction? (expect yes, non-trivial)
- Do Fe-SCO LS-HS results match experimental thermodynamics? (harder, but doable with literature data)

**Universality claim:**
- Is the QEC sidebar credible even to QC non-experts?
- Do readers see the connection as real, not just superficial?

**Impact:**
- Would chemists adopt Spec ⊣ Lan language in active-space selection?
- Would QC community recognize fault-tolerance as β* snap?

---

## Risks and mitigations

**Risk 1: §1-2 is too abstract for chemists**
- Mitigation: Test on 2–3 chemistry colleagues after §3 written. Get feedback.

**Risk 2: Experiments show theory is wrong**
- Mitigation: Modest expectations for x640a-e. They validate narrative, not prove it.
- If x640b (N₂) fails to show Berry phase at avoided crossing, it's still interesting (means our theory is incomplete).

**Risk 3: FeMoco turns out to be necessary for the paper to be "convincing"**
- Mitigation: Paper 640 does NOT promise to handle H². It's about H⁰ → H¹ transition. FeMoco is Paper 642, separate claim.

**Risk 4: Paper is too long (15+ pages)**
- Mitigation: Trim QEC sidebar to 1 page. Combine §7-8. Keep §9-10 brief.

---

## Authorship & timeline

**Week 1-2:** Prose §3-5 + start x640a
**Week 3-4:** Experiments x640b-e in parallel with prose revisions
**Week 5-6:** Integrate experiments into §3-5, write §6-8
**Week 7-8:** Draft §9-10, full revision pass
**Week 9:** Final proof, figures, submit to JCP

**Total: 9 weeks**

---

## Decision framework (go/no-go after Week 4)

**After x640a-b results are in (4 weeks from now):**

Ask:

1. **Is Spec ⊣ Lan narrative holding up?**
   - Yes → Continue to §6-10
   - No → Revise theory or reconsider scope

2. **Do x640a-b validate the tier structure?**
   - Yes (β* snap appears where predicted) → Proceed to Paper 641 planning
   - Partial (some evidence but not clean) → Rewrite §6-8 to hedge; still publishable
   - No (results contradict theory) → Consider abort or radical rethink

3. **Is the time budget realistic?**
   - Yes (running on schedule) → Stay the course
   - Slipping (experiments taking longer) → Drop x640d-e, focus on x640a-c

---

## What you should do now

1. **Read §1-2 draft** — does the pedagogical narrative resonate?
2. **Decide:** prose or experiments first?
3. **Greenlight x640a** — trivial H₂ calculation, should start ASAP
4. **Outline x640b** — N₂ dissociation at multiple R, CASSCF settings, Berry phase calculation method

Then we can start writing §3 in earnest.

