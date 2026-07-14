#!/usr/bin/env python3
"""
csv_to_zoo_js.py
================
Generate assets/js/zoo-data.js from _data/zoo.csv.

Usage:
    python scripts/csv_to_zoo_js.py

The CSV is the master record. Edit zoo.csv, then run this script to
regenerate zoo-data.js for the website filter/sort table.
"""

import csv
import json
from pathlib import Path

ROOT = Path(__file__).parent.parent
CSV_PATH  = ROOT / "_data" / "zoo.csv"
OUT_PATH  = ROOT / "assets" / "js" / "zoo-data.js"

def main():
    rows = []
    with open(CSV_PATH, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            rows.append({k: (v.strip() if v else "") for k, v in row.items()})

    js = "var ZOO_ENTRIES = " + json.dumps(rows, ensure_ascii=False) + ";\n"
    OUT_PATH.write_text(js, encoding="utf-8")
    print(f"Written {len(rows)} entries to {OUT_PATH}")

if __name__ == "__main__":
    main()
