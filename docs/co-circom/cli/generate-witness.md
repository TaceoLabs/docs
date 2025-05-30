# generate-witness

The aim of the `generate-witness` command is to generate a secret-shared witness file in MPC using secret shares of the input.

## Example

```bash
co-circom generate-witness --input test_vectors/poseidon/input.json.0.shared --circuit test_vectors/poseidon/circuit.circom --protocol REP3 --curve BN254 --config configs/party1.toml --out test_vectors/poseidon/witness.wtns.0.shared --config test_vectors/poseidon/config.toml
```

The above command takes a shared input file `input.json.0.shared` for the circuit `circuit.circom` with the [network config](../../network-config.md) and outputs the witness share to `test_vectors/poseidon/witness.wtns.0.shared`.

## Reference

```txt
Evaluates the extended witness generation for the specified circuit and input share in MPC

Usage: co-circom generate-witness [OPTIONS]

Options:
      --config <CONFIG>          The path to the config file
      --input <INPUT>            The path to the input share file
      --circuit <CIRCUIT>        The path to the circuit file
      --protocol <PROTOCOL>      The MPC protocol to be used [possible values: REP3, SHAMIR]
      --curve <CURVE>            The pairing friendly curve to be used [possible values: BN254, BLS12-381]
      --out <OUT>                The output file where the final witness share is written to
  -O <SIMPLIFICATION_LEVEL>      The simplification level passed to the circom compiler (0-2) [default: 1]
  -h, --help                     Print help (see more with '--help')
```
