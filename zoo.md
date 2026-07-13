---
layout: default
title: ISA Zoo
nav_order: 6
has_children: true
---

A catalogue of physical, chemical, biological, and mathematical processes
expressed as programmes in the Origami Instruction Set Architecture.

Each entry names the symmetry group, specifies the interpretation functor,
gives the explicit opcode sequence, and produces a computable output.
Entries marked **validated** have computed outputs confirmed against
experiment or established theory.

---

<div id="zoo-filters" style="margin: 1.5rem 0 0.75rem;">
  <span class="zoo-filter-label">Domain:</span>
  <button class="zoo-btn active" data-filter="domain" data-value="all">All</button>
  <button class="zoo-btn" data-filter="domain" data-value="Chemistry">Chemistry</button>
  <button class="zoo-btn" data-filter="domain" data-value="Biology">Biology</button>
  <button class="zoo-btn" data-filter="domain" data-value="Spectroscopy">Spectroscopy</button>
  <button class="zoo-btn" data-filter="domain" data-value="Nuclear Physics">Nuclear Physics</button>
  <button class="zoo-btn" data-filter="domain" data-value="Quantum Computing">Quantum Computing</button>
  <button class="zoo-btn" data-filter="domain" data-value="Condensed Matter">Condensed Matter</button>
  <button class="zoo-btn" data-filter="domain" data-value="Lattice Gauge Theory">Lattice Gauge</button>
  <button class="zoo-btn" data-filter="domain" data-value="Cryptography">Cryptography</button>
  <button class="zoo-btn" data-filter="domain" data-value="Finance">Finance</button>
  <button class="zoo-btn" data-filter="domain" data-value="Mathematics">Mathematics</button>
  <button class="zoo-btn" data-filter="domain" data-value="f-Element Chemistry">f-Elements</button>
</div>

<div id="zoo-filters-tier" style="margin: 0.4rem 0 0.4rem;">
  <span class="zoo-filter-label">Tier:</span>
  <button class="zoo-btn active" data-filter="tier" data-value="all">All</button>
  <button class="zoo-btn" data-filter="tier" data-value="H0">H⁰ — Tropical</button>
  <button class="zoo-btn" data-filter="tier" data-value="H1">H¹ — Clifford</button>
  <button class="zoo-btn" data-filter="tier" data-value="H2">H² — Magic</button>
</div>

<div id="zoo-filters-trilogy" style="margin: 0.4rem 0 0.4rem;">
  <span class="zoo-filter-label">ISA:</span>
  <button class="zoo-btn active" data-filter="trilogy" data-value="all">All</button>
  <button class="zoo-btn" data-filter="trilogy" data-value="Origami">Origami (β→∞)</button>
  <button class="zoo-btn" data-filter="trilogy" data-value="Forge">Forge (β≈β*)</button>
  <button class="zoo-btn" data-filter="trilogy" data-value="Meld">Meld (β→0)</button>
</div>

<div id="zoo-filters-status" style="margin: 0.4rem 0 1.25rem;">
  <span class="zoo-filter-label">Status:</span>
  <button class="zoo-btn active" data-filter="status" data-value="all">All</button>
  <button class="zoo-btn" data-filter="status" data-value="validated">Validated</button>
  <button class="zoo-btn" data-filter="status" data-value="conjectured">Conjectured</button>
  <button class="zoo-btn" data-filter="status" data-value="speculative">Speculative</button>
</div>

<p id="zoo-count" style="font-size:0.8rem;color:#666;margin-bottom:0.75rem;"></p>

<div id="zoo-table-wrap" style="overflow-x:auto;">
<table id="zoo-table">
  <thead>
    <tr>
      <th class="zoo-sortable" data-col="id">ID <span class="zoo-sort-icon">↕</span></th>
      <th class="zoo-sortable" data-col="name">Name <span class="zoo-sort-icon">↕</span></th>
      <th class="zoo-sortable" data-col="domain">Domain <span class="zoo-sort-icon">↕</span></th>
      <th class="zoo-sortable" data-col="group">Group</th>
      <th class="zoo-sortable" data-col="tier">Tier <span class="zoo-sort-icon">↕</span></th>
      <th class="zoo-sortable" data-col="trilogy">ISA <span class="zoo-sort-icon">↕</span></th>
      <th class="zoo-sortable" data-col="status">Status <span class="zoo-sort-icon">↕</span></th>
    </tr>
  </thead>
  <tbody id="zoo-body"></tbody>
</table>
</div>

<style>
.zoo-filter-label {
  font-size: 0.8rem;
  font-weight: 600;
  margin-right: 0.4rem;
  color: #555;
}
.zoo-btn {
  display: inline-block;
  margin: 0.1rem 0.15rem;
  padding: 0.18rem 0.55rem;
  font-size: 0.78rem;
  border: 1px solid #bbb;
  border-radius: 3px;
  background: #f5f5f5;
  cursor: pointer;
  transition: background 0.12s, border-color 0.12s;
}
.zoo-btn:hover { background: #e0e0e0; }
.zoo-btn.active { background: #1f6feb; border-color: #1f6feb; color: #fff; }

#zoo-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}
#zoo-table th, #zoo-table td {
  padding: 0.45rem 0.7rem;
  border-bottom: 1px solid #e0e0e0;
  text-align: left;
  white-space: nowrap;
}
#zoo-table th {
  background: #f8f8f8;
  font-weight: 600;
  font-size: 0.8rem;
  color: #333;
}
#zoo-table th.zoo-sortable { cursor: pointer; user-select: none; }
#zoo-table th.zoo-sortable:hover { background: #efefef; }
#zoo-table th.sort-asc .zoo-sort-icon::after { content: " ▲"; }
#zoo-table th.sort-desc .zoo-sort-icon::after { content: " ▼"; }
#zoo-table tr:hover td { background: #f5f8ff; }
#zoo-table td a { color: #1f6feb; text-decoration: none; font-weight: 500; }
#zoo-table td a:hover { text-decoration: underline; }

.zoo-tier {
  display: inline-block;
  font-size: 0.72rem;
  padding: 0.05rem 0.4rem;
  border-radius: 3px;
  font-weight: 600;
}
.zoo-tier-H0 { background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; }
.zoo-tier-H1 { background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; }
.zoo-tier-H2 { background: #fdf4ff; color: #7e22ce; border: 1px solid #e9d5ff; }

.zoo-status {
  display: inline-block;
  font-size: 0.72rem;
  padding: 0.05rem 0.4rem;
  border-radius: 3px;
}
.zoo-status-validated   { background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; }
.zoo-status-conjectured { background: #fffbeb; color: #92400e; border: 1px solid #fde68a; }
.zoo-status-speculative { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; }

.zoo-trilogy {
  display: inline-block;
  font-size: 0.72rem;
  padding: 0.05rem 0.4rem;
  border-radius: 3px;
  background: #f8f8f8;
  border: 1px solid #ddd;
  color: #444;
}
</style>

<script>
(function() {
  var entries = {{ site.data.zoo | jsonify }};
  var active = { domain: "all", tier: "all", trilogy: "all", status: "all" };
  var sortCol = "id";
  var sortDir = 1;

  function baseurl(path) { return "{{ site.baseurl }}" + path; }

  function tierLabel(t) {
    var map = { H0: "H⁰", H1: "H¹", H2: "H²" };
    return map[t] || t;
  }

  function render() {
    var visible = entries.filter(function(e) {
      if (!e || !e.id) return false;
      return (active.domain  === "all" || e.domain  === active.domain)
          && (active.tier    === "all" || e.tier    === active.tier)
          && (active.trilogy === "all" || e.trilogy === active.trilogy)
          && (active.status  === "all" || e.status  === active.status);
    });

    visible.sort(function(a, b) {
      var av = String(a[sortCol] || "").toLowerCase();
      var bv = String(b[sortCol] || "").toLowerCase();
      if (av < bv) return -sortDir;
      if (av > bv) return  sortDir;
      return 0;
    });

    var tbody = document.getElementById("zoo-body");
    var count = document.getElementById("zoo-count");
    count.textContent = visible.length + " entr" + (visible.length !== 1 ? "ies" : "y");

    tbody.innerHTML = visible.map(function(e) {
      var href = baseurl("/isa-zoo/" + e.slug);
      var tierCls = "zoo-tier zoo-tier-" + e.tier;
      var stCls   = "zoo-status zoo-status-" + e.status;
      return "<tr>"
        + "<td><code>" + e.id + "</code></td>"
        + "<td><a href='" + href + "'>" + e.name + "</a></td>"
        + "<td>" + e.domain + "</td>"
        + "<td><code>" + e.group + "</code></td>"
        + "<td><span class='" + tierCls + "'>" + tierLabel(e.tier) + "</span></td>"
        + "<td><span class='zoo-trilogy'>" + e.trilogy + "</span></td>"
        + "<td><span class='" + stCls + "'>" + e.status + "</span></td>"
        + "</tr>";
    }).join("");
  }

  // Filter buttons
  ["zoo-filters","zoo-filters-tier","zoo-filters-trilogy","zoo-filters-status"].forEach(function(barId) {
    var bar = document.getElementById(barId);
    if (!bar) return;
    bar.addEventListener("click", function(e) {
      var btn = e.target.closest(".zoo-btn");
      if (!btn) return;
      bar.querySelectorAll(".zoo-btn").forEach(function(b) { b.classList.remove("active"); });
      btn.classList.add("active");
      active[btn.dataset.filter] = btn.dataset.value;
      render();
    });
  });

  // Sortable column headers
  document.querySelectorAll("th.zoo-sortable").forEach(function(th) {
    th.addEventListener("click", function() {
      var col = th.dataset.col;
      if (sortCol === col) { sortDir = -sortDir; }
      else { sortCol = col; sortDir = 1; }
      document.querySelectorAll("th.zoo-sortable").forEach(function(h) {
        h.classList.remove("sort-asc","sort-desc");
      });
      th.classList.add(sortDir === 1 ? "sort-asc" : "sort-desc");
      render();
    });
  });

  render();
})();
</script>
