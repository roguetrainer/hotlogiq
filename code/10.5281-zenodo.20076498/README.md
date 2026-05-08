# Code Supplement: Paper 221

**Non-Associative Information Geometry: The Fano-Fisher Metric Decomposition Theorem on $G_2$**

DOI: [10.5281/zenodo.20076498](https://doi.org/10.5281/zenodo.20076498)

## Contents

- `fano_fisher_proof.py` — Empirical proof of the Fano-Fisher Decomposition Theorem via exact analytical Jacobian ($\Psi = 2V^\top V$). Verifies all four claims of Theorem 4.1 to machine precision ($|\varepsilon| < 2 \times 10^{-16}$).

## Requirements

```
torch >= 2.0
numpy
```

## Usage

```bash
python fano_fisher_proof.py
```

Expected output:
```
[Part 1] rank = 4/14  (Fano and non-Fano)
[Part 2] Psi_avg proportional to I_14: True,  c = 0.6530612245
[Part 3] |c - 32/49| < 2e-16  [Q.E.D.]
```

## Author

Ian R. C. Buckley — Adelic Simplicial Architecture (ASA) / Portfolio A
