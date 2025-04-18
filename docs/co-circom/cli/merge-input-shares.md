# merge-input-shares

The aim of the `merge-input-shares` command is to take input shares originating from multiple parties and merge them into a single input share file to be used for witness generation.

A use case for this would be to have multiple parties provide different parts of the input to the MPC computation parties.

## Example

```bash
co-circom merge-input-shares --inputs test_vectors/multiplier2/input0.json.0.shared --inputs test_vectors/multiplier2/input1.json.0.shared --protocol REP3 --curve BN254 --out test_vectors/multiplier2/input.json.0.shared
```

The above command takes the two input shares `input0.json.0.shared` and `input1.json.0.shared` (note both are intended for party 0) and combines them into a single input share `input.json.0.shared`.

## Reference

```txt
Merge multiple shared inputs received from multiple parties into a single one

Usage: co-circom merge-input-shares [OPTIONS]

Options:
      --config <CONFIG>      The path to the config file
      --inputs <INPUTS>      The path to the input JSON file
      --protocol <PROTOCOL>  The MPC protocol to be used [possible values: REP3, SHAMIR]
      --curve <CURVE>        The pairing friendly curve to be used [possible values: BN254, BLS12-381]
      --out <OUT>            The output file where the merged input share is written to
  -h, --help                 Print help (see more with '--help')
```
