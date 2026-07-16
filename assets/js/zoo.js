var active = { domain: "all", tier: "all", trilogy: "all", status: "all", tags: "all", backends: "all", confidence: "all", ec_class: "all", cofactor: "all", rate_limit: "all" };
var sortCol = "id";
var sortDir = 1;
var BASEURL = "/adelic-simplicial-architecture";

function serialiseFilters() {
  var parts = [];
  Object.keys(active).forEach(function(k) {
    if (active[k] !== "all") parts.push(encodeURIComponent(k) + "=" + encodeURIComponent(active[k]));
  });
  if (sortCol !== "id") parts.push("sort=" + encodeURIComponent(sortCol) + "&dir=" + (sortDir === 1 ? "asc" : "desc"));
  return parts.join("&");
}

function parseUrlFilters() {
  var search = window.location.search.slice(1);
  if (!search) return;
  search.split("&").forEach(function(pair) {
    var kv = pair.split("=");
    if (kv.length !== 2) return;
    var k = decodeURIComponent(kv[0]);
    var v = decodeURIComponent(kv[1]);
    if (k in active) {
      active[k] = v;
    } else if (k === "sort") {
      sortCol = v;
    } else if (k === "dir") {
      sortDir = v === "desc" ? -1 : 1;
    }
  });
}

function tierLabel(t) {
  var map = { H0: "H⁰", H1: "H¹", H2: "H²" };
  return map[t] || t;
}

function zooRender() {
  var entries = window.ZOO_ENTRIES || [];
  var visible = entries.filter(function(e) {
    if (!e || !e.id) return false;
    var tagsMatch = active.tags === "all"
      || (e.tags || "").split(/[\s,]+/).indexOf(active.tags) !== -1;
    var backendsMatch = active.backends === "all"
      || (e.backends || "").split(/[\s,]+/).indexOf(active.backends) !== -1;
    var confidenceMatch = active.confidence === "all"
      || (e.confidence || "T1") === active.confidence;
    var ecMatch = active.ec_class === "all"
      || (e.ec_class || "").split(/[\s,]+/).indexOf(active.ec_class) !== -1;
    var cofactorMatch = active.cofactor === "all"
      || (e.cofactor || "").split(/[\s,]+/).indexOf(active.cofactor) !== -1;
    var rateLimitMatch = active.rate_limit === "all"
      || (e.rate_limit || "") === active.rate_limit;
    return (active.domain  === "all" || e.domain  === active.domain)
        && (active.tier    === "all" || e.tier    === active.tier)
        && (active.trilogy === "all" || e.trilogy === active.trilogy)
        && (active.status  === "all" || e.status  === active.status)
        && tagsMatch
        && backendsMatch
        && confidenceMatch
        && ecMatch
        && cofactorMatch
        && rateLimitMatch;
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
  if (!tbody) return;
  if (count) count.textContent = visible.length + " entr" + (visible.length !== 1 ? "ies" : "y");
  var rows = "";
  for (var i = 0; i < visible.length; i++) {
    var e = visible[i];
    var href = BASEURL + "/isa-zoo/" + e.slug;
    var tierCls = "zoo-tier zoo-tier-" + e.tier;
    var stCls   = "zoo-status zoo-status-" + e.status;
    var nameCell = e.has_page === "true"
      ? "<a href='" + href + "'>" + e.name + "</a>"
      : e.name;
    rows += "<tr>"
      + "<td><code>" + e.id + "</code></td>"
      + "<td>" + nameCell + "</td>"
      + "<td>" + e.domain + "</td>"
      + "<td><code>" + e.group + "</code></td>"
      + "<td><span class='" + tierCls + "'>" + tierLabel(e.tier) + "</span></td>"
      + "<td><span class='zoo-trilogy'>" + e.trilogy + "</span></td>"
      + "<td><span class='" + stCls + "'>" + e.status + "</span></td>"
      + "</tr>";
  }
  tbody.innerHTML = rows;
}

function syncActiveButtons() {
  Object.keys(active).forEach(function(key) {
    var bar = document.querySelector("[id^='zoo-filters']");
    document.querySelectorAll(".zoo-btn[data-filter='" + key + "']").forEach(function(btn) {
      btn.classList.toggle("active", btn.getAttribute("data-value") === active[key]);
    });
  });
}

function zooInit() {
  parseUrlFilters();
  var bars = ["zoo-filters","zoo-filters-tier","zoo-filters-trilogy","zoo-filters-status","zoo-filters-tags","zoo-filters-backends","zoo-filters-confidence","zoo-filters-ec","zoo-filters-cofactor","zoo-filters-ratelimit"];
  bars.forEach(function(barId) {
    var bar = document.getElementById(barId);
    if (!bar) return;
    bar.addEventListener("click", function(ev) {
      var btn = ev.target;
      while (btn && !btn.classList.contains("zoo-btn")) btn = btn.parentElement;
      if (!btn) return;
      bar.querySelectorAll(".zoo-btn").forEach(function(b) { b.classList.remove("active"); });
      btn.classList.add("active");
      active[btn.getAttribute("data-filter")] = btn.getAttribute("data-value");
      var qs = serialiseFilters();
      history.replaceState(null, "", window.location.pathname + (qs ? "?" + qs : ""));
      zooRender();
    });
  });
  document.querySelectorAll("th.zoo-sortable").forEach(function(th) {
    th.addEventListener("click", function() {
      var col = th.getAttribute("data-col");
      if (sortCol === col) { sortDir = -sortDir; }
      else { sortCol = col; sortDir = 1; }
      document.querySelectorAll("th.zoo-sortable").forEach(function(h) {
        h.classList.remove("sort-asc","sort-desc");
      });
      th.classList.add(sortDir === 1 ? "sort-asc" : "sort-desc");
      var qs = serialiseFilters();
      history.replaceState(null, "", window.location.pathname + (qs ? "?" + qs : ""));
      zooRender();
    });
  });
  syncActiveButtons();
  zooRender();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", zooInit);
} else {
  zooInit();
}
window.addEventListener("load", function() {
  var tbody = document.getElementById("zoo-body");
  if (tbody && !tbody.innerHTML) zooInit();
});
setTimeout(function() {
  var tbody = document.getElementById("zoo-body");
  if (tbody && !tbody.innerHTML) zooInit();
}, 300);
