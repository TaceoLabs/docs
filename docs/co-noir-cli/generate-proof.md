## Reference

```txt
Cli arguments for `generate_proof`

Usage: co-noir generate-proof [OPTIONS]

Options:
      --config <CONFIG>              The path to the config file
      --proving-key <PROVING_KEY>    The path to the shared proving_key file
      --protocol <PROTOCOL>          The MPC protocol to be used [possible values: REP3, SHAMIR]
      --hasher <HASHER>              The transcript hasher to be used [possible values: POSEIDON, KECCAK]
      --out <OUT>                    The output file where the final proof is written to. If not passed, this party will not write the proof to a file
      --public-input <PUBLIC_INPUT>  The output JSON file where the public inputs are written to. If not passed, this party will not write the public inputs to a file
  -t, --threshold <THRESHOLD>        The threshold of tolerated colluding parties [default: 1]
  -h, --help                         Print help (see more with '--help')
```
