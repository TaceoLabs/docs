## Reference

```txt
Build the proving key for the specified circuit and witness share in MPC

Usage: co-noir build-proving-key [OPTIONS]

Options:
      --config <CONFIG>        The path to the config file
      --witness <WITNESS>      The path to the witness share file
      --circuit <CIRCUIT>      The path to the circuit file, generated by Noir
      --crs <CRS>              The path to the prover crs file
      --protocol <PROTOCOL>    The MPC protocol to be used [possible values: REP3, SHAMIR]
      --out <OUT>              The output file where the final proving key is written to
  -t, --threshold <THRESHOLD>  The threshold of tolerated colluding parties [default: 1]
  -h, --help                   Print help (see more with '--help')
```