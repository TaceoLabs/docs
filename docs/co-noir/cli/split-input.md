# split-input

If you want to calculate the extended witness and the prove from the input file `test_vectors/poseidon/Prover.toml` (i.e., if you want to hash the input ["0", "1", "2", "3", "4", "5", "6", "7"] in MPC and prove the computation), you first have to secret share this input file. This can be done using the SplitInput command:

## Example

```bash
cargo run --release --bin co-noir -- split-input --circuit test_vectors/poseidon/poseidon.json --input test_vectors/poseidon/Prover.toml --protocol REP3 --out-dir test_vectors/poseidon
```

This command uses the *REP3* MPC protocol and produces the shares for 3 MPC in the `test_vectors/poseidon` folder. As input it takes the circuit file `poseidon.json` and the `Prover.toml` file which contains the preimage of the hash which we want to share.

## Reference

```txt
Splits a input toml file into secret shares for use in MPC

Usage: co-noir split-input [OPTIONS]

Options:
      --config <CONFIG>      The path to the config file
      --input <INPUT>        The path to the input JSON file
      --circuit <CIRCUIT>    The path to the circuit file
      --protocol <PROTOCOL>  The MPC protocol to be used [possible values: REP3, SHAMIR]
      --out-dir <OUT_DIR>    The path to the (existing) output directory
  -h, --help                 Print help (see more with '--help')
```
