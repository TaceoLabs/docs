# translate-proving-key

## Example

## Reference

```txt
Translates the proving key generated with one MPC protocol to a proving key for a different one

Usage: co-noir translate-proving-key [OPTIONS]

Options:
      --config <CONFIG>
          The path to the config file
      --proving-key <PROVING_KEY>
          The path to the proving_key share file
      --src-protocol <SRC_PROTOCOL>
          The MPC protocol that was used for the witness generation [possible values: REP3, SHAMIR]
      --target-protocol <TARGET_PROTOCOL>
          The MPC protocol to be used for the proof generation [possible values: REP3, SHAMIR]
      --out <OUT>
          The output file where the final witness share is written to
  -h, --help
          Print help (see more with '--help')
```
