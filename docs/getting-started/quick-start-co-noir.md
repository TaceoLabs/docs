# Quick Start coNoir

## UltraHonk

Our co-Noir implementation currently supports the UltraHonk prover (with Keccak and Poseidon2 as transcript) from Barretenberg v0.66.0. To get Barretenberg with this version, use the following commands:

```bash
curl -L https://raw.githubusercontent.com/AztecProtocol/aztec-packages/refs/heads/master/barretenberg/bbup/install | bash
bbup -v 0.66.0
```

Our prover, i.e., ``UltraHonk::prove`` in `src/prover.rs`, is compatible with `UltraProver_<UltraFlavor>/UltraProver_<UltraKeccakFlavor>` (depending on the used transcript hasher) in Barretenberg. Similar, the ``Ultrahnok::verify`` verifier in `src/verifier.rs` is compatible with `UltraVerifier_<UltraFlavor>/UltraVerifier_<UltraKeccakFlavor>` in Barretenberg.

Currently, the circuit builder related code in `co-builder` is only compatible with basic field arithmetic gates from Noir, stay tuned for more features.

## Usage

First, one needs to create the circuit file from a Noir source code. Your Noir project should have the following files/folders:

- `src/main.nr`: Contains the code which should be executed in MPC and/or proven.
- `Nargo.toml`: Similar to Cargo.toml, just for Noir projects.
- `Prover.toml`: The inputs for the main function in `src/main.nr` used in proof generation.

To create the circuit file used in Co-Noir, one needs to install Nargo following the instructions in [https://noir-lang.org/docs/getting_started/quick_start/](https://noir-lang.org/docs/getting_started/quick_start/). Our prover is compatible with Nargo version 1.0.0-beta.1.

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
