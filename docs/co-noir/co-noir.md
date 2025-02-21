# co-noir

# Getting Started With Co-Noir

## UltraHonk

Our co-Noir implementation currently supports the UltraHonk prover (with Keccak and Poseidon2 as transcript) from Barretenberg v0.62.0. To get Barretenberg with this version, use the following commands:

```bash
git clone https://github.com/AztecProtocol/aztec-packages.git
cd aztec-packages
git checkout tags/aztec-package-v0.62.0
```

To compile Barretenberg, one can use:

```bash
cd barretenberg/cpp
bash ./scripts/docker_interactive.sh ubuntu
mkdir build
cd build
cmake --preset clang16 -DCMAKE_BUILD_TYPE=RelWithDebInfo ..
cmake --build .
```

Our prover, i.e., ``UltraHonk::prove`` in `src/prover.rs`, is compatible with `UltraProver_<UltraFlavor>/UltraProver_<UltraKeccakFlavor>` (depending on the used transcript hasher) in Barretenberg. Similar, the ``Ultrahnok::verify`` verifier in `src/verifier.rs` is compatible with `UltraVerifier_<UltraFlavor>/UltraVerifier_<UltraKeccakFlavor>` in Barretenberg.

Currently, the circuit builder related code in `co-builder` is only compatible with basic field arithmetic gates from Noir, stay tuned for more features.

## Usage

First, one needs to create the circuit file from a Noir source code. Your Noir project should have the following files/folders:

- `src/main.nr`: Contains the code which should be executed in MPC and/or proven.
- `Nargo.toml`: Similar to Cargo.toml, just for Noir projects.
- `Prover.toml`: The inputs for the main function in `src/main.nr` used in proof generation.

To create the circuit file used in Co-Noir, one needs to install Nargo following the instructions in [https://noir-lang.org/docs/getting_started/quick_start](https://noir-lang.org/docs/getting_started/quick_start). Our prover is compatible with Nargo version 0.33.0.
Then you can just execute the following command:

```bash
nargo compile
```

The resulting circuit file (*.json) is then located in the `target` folder.

Alternatively, if you want to create the extended witness from the input in `Prover.toml`, use

```bash
nargo execute witness
```

This command then stores the resulting circuit file (*.json), alongside the extended witness (`witness.gz`) in the `target` folder.
