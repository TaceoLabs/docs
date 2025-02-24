# generate-witness

After the SplitInput command, the computing parties engage in executing the circuit (in our case Poseidon) on the shared input in MPC. Each party thus executes the following command:

## Example

```bash
co-noir generate-witness --input test_vectors/poseidon/Prover.toml.shared --circuit test_vectors/poseidon/poseidon.json --protocol REP3 --config configs/party.toml --out test_vectors/poseidon/poseidon.gz.shared
```

Again, `poseidon.json` is the circuit file from Noir, while `Prover.toml.shared` is one output of SplitWitness and `party.toml` is a [network configuration](../../network-config.md). As MPC protocol we currently only support *REP3* for the Witness extension.

## Reference

```txt
Evaluates the extended witness generation for the specified circuit and input share in MPC

Usage: co-noir generate-witness [OPTIONS]

Options:
      --config <CONFIG>      The path to the config file
      --input <INPUT>        The path to the input share file
      --circuit <CIRCUIT>    The path to the circuit file
      --protocol <PROTOCOL>  The MPC protocol to be used [possible values: REP3, SHAMIR]
      --out <OUT>            The output file where the final witness share is written to
  -h, --help                 Print help (see more with '--help')
```
