# generate-proof

To create a proof in MPC, one needs the extended witness (from GenerateWitness, SplitWitness, or TranslateWitness):

## Example

```bash
cargo run --release --bin co-noir -- build-and-generate-proof --witness test_vectors/poseidon/poseidon.gz.shared --circuit test_vectors/poseidon/poseidon.json --crs test_vectors/bn254_g1.dat --protocol REP3 --hasher POSEIDON --config configs/party.toml --out proof.proof --public-input public_input.json
```

Here, `poseidon.gz.shared` is the share of the witness, `poseidon.json` is the circuit file from Noir, `bn254_g1.dat` is the file storing the prover CRS and `party.toml` is the [network configuration](../../network-config.md). As output, one creates the UltraHonk proof `proof.proof` and the output of the circuit `public_input.json`. The parameter `--hasher POSEIDON` defines that Poseidon2 is used as the transcript hasher, the other implemented option would be Keccak256.

The corresponding Barretenberg command (from `barretenberg/cpp/build/bin`) is:

```bash
bb prove_ultra_honk -b poseidon.json -w poseidon.gz -o proof.proof
```

where poseidon.gz is the witness file created by Noir (which is equivalent to a non-secret-shared variant of `poseidon.gz.shared`). The generated proof key is the same, regardless of using Co-Noir or Barretenberg.
Note: Barretenberg does not require the file for storing the CRS, since Barretenberg automatically downloads it if it is not present.

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
      --recursive                    Generate a recursive friendly proof
      --crs <CRS>                    The path to the prover crs file
  -h, --help                         Print help (see more with '--help')
```
