## Reference

```txt
Builds the proving key and evaluates the prover algorithm for the specified circuit and witness share in MPC

Usage: co-noir build-and-generate-proof [OPTIONS]

Options:
      --config <CONFIG>              The path to the config file
      --witness <WITNESS>            The path to the witness share file
      --circuit <CIRCUIT>            The path to the circuit file, generated by Noir
      --crs <CRS>                    The path to the prover crs file
      --protocol <PROTOCOL>          The MPC protocol to be used [possible values: REP3, SHAMIR]
      --hasher <HASHER>              The transcript hasher to be used [possible values: POSEIDON, KECCAK]
      --out <OUT>                    The output file where the final proof is written to. If not passed, this party will not write the proof to a file
      --public-input <PUBLIC_INPUT>  The output JSON file where the public inputs are written to. If not passed, this party will not write the public inputs to a file
  -t, --threshold <THRESHOLD>        The threshold of tolerated colluding parties [default: 1]
  -h, --help                         Print help (see more with '--help')
```
