# download-crs

This command can be sued to download the prover CRS with a given number of points.

## Example

```bash
co-noir download-crs --crs ./bn254_g1.dat --num-points 1024
```

## Reference

```txt
Download a CRS with a given number of points

Usage: co-noir download-crs [OPTIONS]

Options:
      --config <CONFIG>          The path to the config file
      --crs <CRS>                The path to the prover crs file
  -n, --num-points <NUM_POINTS>  The number of points to download [default: 1]
  -h, --help                     Print help
```
