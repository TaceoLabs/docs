# translate-witness

This command can be used to translate extended witnesses (outputs of GenerateWitness or SplitWitness) from REP3 to 3-party Shamir secret sharing.

## Example

```bash
cargo run --release --bin co-noir -- translate-witness --witness test_vectors/poseidon/poseidon.gz.shared --src-protocol REP3 --target-protocol SHAMIR --config configs/party.toml --out test_vectors/poseidon/shamir_poseidon.gz.shared
```

Here, `poseidon.gz.shared` is the REP3 input share, `shamir_poseidon.gz.shared` the Shamir output share, and `party.toml` is a network configuration.

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
