## Reference

```txt
Translates the witness generated with one MPC protocol to a witness for a different one

Usage: co-noir translate-witness [OPTIONS]

Options:
      --config <CONFIG>
          The path to the config file
      --witness <WITNESS>
          The path to the witness share file
      --src-protocol <SRC_PROTOCOL>
          The MPC protocol that was used for the witness generation [possible values: REP3, SHAMIR]
      --target-protocol <TARGET_PROTOCOL>
          The MPC protocol to be used for the proof generation [possible values: REP3, SHAMIR]
      --out <OUT>
          The output file where the final witness share is written to
  -h, --help
          Print help (see more with '--help')
```
