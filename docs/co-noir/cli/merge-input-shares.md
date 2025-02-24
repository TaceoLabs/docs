# merge-input-shares

The aim of the `merge-input-shares` command is to take input shares originating from multiple parties and merge them into a single input share file to be used for witness generation.

A use case for this would be to have multiple parties provide different parts of the input to the MPC computation parties.

## Example

```bash
cargo run --release --bin co-noir -- merge-input-shares --inputs test_vectors/poseidon_input2/Prover1.toml.0.shared --inputs test_vectors/poseidon_input2/Prover2.toml.0.shared --protocol REP3 --out test_vectors/poseidon_input2/Prover.toml.0.shared
```

The above command takes the two input shares `Prover1.toml.0.shared` and `Prover2.toml.0.shared` (note both are intended for party 0) and combines them into a single input share `Prover.toml.0.shared`.

## Reference

```txt
Merge multiple shared inputs received from multiple parties into a single one

Usage: co-noir merge-input-shares [OPTIONS]

Options:
      --config <CONFIG>      The path to the config file
      --inputs <INPUTS>      The path to the input JSON file
      --protocol <PROTOCOL>  The MPC protocol to be used [possible values: REP3, SHAMIR]
      --out <OUT>            The output file where the merged input share is written to
  -h, --help                 Print help (see more with '--help')
```
