# verify

## Example

```bash
cargo run --release --bin co-noir -- verify --proof proof.proof --vk test_vectors/poseidon/verification_key --hasher POSEIDON --crs test_vectors/bn254_g2.dat
```

Here, `proof.proof` is the proof we want to verify, `verification_key` is the output of CreateVK, and `bn254_g2.dat` is the verifier CRS. Again, `--hasher POSEIDON` defines that Poseidon2 is used as the transcript hasher.

The corresponding Barretenberg command (from `barretenberg/cpp/build/bin`) is:

```bash
./bb verify_ultra_honk -k verification_key -p proof.proof
```

Note: Barretenberg does not require the file for storing the CRS, since Barretenberg automatically downloads it if it is not present.

## Reference

```txt
Verification of a Noir proof

Usage: co-noir verify [OPTIONS]

Options:
      --hasher <HASHER>  The transcript hasher used for the proof [possible values: POSEIDON, KECCAK]
      --config <CONFIG>  The path to the config file
      --proof <PROOF>    The path to the proof file
      --vk <VK>          The path to the verification key file
      --crs <CRS>        The path to the verifier crs file
  -h, --help             Print help (see more with '--help')
```
