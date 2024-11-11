# Poseidon Noir

Similar to [Poseidon in Circom](../poseidon), we can also prove Poseidon in Noir using our [implementation on github](https://github.com/TaceoLabs/noir-poseidon).

To quickly get started, we provide a bash script that runs the Poseidon circuit
using co-circom. After cloning the repository, navigate to the
`/co-noir/examples` directory and execute the following command:

```bash
sh run_full_poseidon.sh
```

The script will execute all the necessary steps to generate a proof for the
Poseidon circuit. We can inspect the script to understand the steps involved in
generating a proof for the Poseidon circuit.

```bash
# split input into shares
cargo run --release --bin co-noir -- split-input --circuit test_vectors/poseidon/poseidon.json --input test_vectors/poseidon/Prover.toml --protocol REP3 --out-dir test_vectors/poseidon
# run witness extension in MPC
cargo run --release --bin co-noir -- generate-witness --input test_vectors/poseidon/Prover.toml.0.shared --circuit test_vectors/poseidon/poseidon.json --protocol REP3 --config configs/party1.toml --out test_vectors/poseidon/poseidon.gz.0.shared &
cargo run --release --bin co-noir -- generate-witness --input test_vectors/poseidon/Prover.toml.1.shared --circuit test_vectors/poseidon/poseidon.json --protocol REP3 --config configs/party2.toml --out test_vectors/poseidon/poseidon.gz.1.shared &
cargo run --release --bin co-noir -- generate-witness --input test_vectors/poseidon/Prover.toml.2.shared --circuit test_vectors/poseidon/poseidon.json --protocol REP3 --config configs/party3.toml --out test_vectors/poseidon/poseidon.gz.2.shared
wait $(jobs -p)
# run proving in MPC
cargo run --release --bin co-noir -- build-and-generate-proof --witness test_vectors/poseidon/poseidon.gz.0.shared --circuit test_vectors/poseidon/poseidon.json --crs test_vectors/bn254_g1.dat --protocol REP3 --hasher KECCAK --config configs/party1.toml --out proof.0.proof --public-input public_input.json &
cargo run --release --bin co-noir -- build-and-generate-proof --witness test_vectors/poseidon/poseidon.gz.1.shared --circuit test_vectors/poseidon/poseidon.json --crs test_vectors/bn254_g1.dat --protocol REP3 --hasher KECCAK --config configs/party2.toml --out proof.1.proof &
cargo run --release --bin co-noir -- build-and-generate-proof --witness test_vectors/poseidon/poseidon.gz.2.shared --circuit test_vectors/poseidon/poseidon.json --crs test_vectors/bn254_g1.dat --protocol REP3 --hasher KECCAK --config configs/party3.toml --out proof.2.proof
wait $(jobs -p)
# Create verification key
cargo run --release --bin co-noir -- create-vk --circuit test_vectors/poseidon/poseidon.json --crs test_vectors/bn254_g1.dat --hasher KECCAK --vk test_vectors/poseidon/verification_key
# verify proof
cargo run --release --bin co-noir -- verify --proof proof.0.proof --vk test_vectors/poseidon/verification_key --hasher KECCAK --crs test_vectors/bn254_g2.dat

```