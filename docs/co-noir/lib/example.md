# Example

The following is a incomplete example of how to use the `co-noir` lib crate.
For complete and working example see [here](https://github.com/TaceoLabs/co-snarks/tree/main/co-noir/co-noir/examples).

```rust
// connect to network
let network_config = NetworkConfig::new(/* ... */);
let mut net = Rep3MpcNet::new(network_config)?;

// parse constraint system
let program_artifact =
    Utils::get_program_artifact_from_file(dir.join("poseidon/poseidon.json"))
        .context("while parsing program artifact")?;
let constraint_system = Utils::get_constraint_system_from_artifact(&program_artifact, true);

// read the input file
let inputs = co_noir::parse_input(dir.join("poseidon/Prover.toml"), &program_artifact)?;

let recursive = true;

// parse crs
let crs_size = co_noir::compute_circuit_size::<Bn254>(&constraint_system, recursive)?;
let (prover_crs, verifier_crs) =
    CrsParser::<Bn254>::get_crs(dir.join("bn254_g1.dat"), dir.join("bn254_g2.dat"), crs_size)?
        .split();

// create input shares
let mut rng = rand::thread_rng();
let [share0, share1, share2] =
    co_noir::split_input_rep3::<Bn254, Rep3MpcNet, _>(inputs, &mut rng);

// generate witness
let (witness_share, net) = co_noir::generate_witness_rep3(share0, program_artifact, net)?;

// generate proving key and vk
let (pk, net) =
    co_noir::generate_proving_key_rep3(net, &constraint_system, witness_share, recursive)?;
let vk = pk.create_vk(&prover_crs, verifier_crs)?;

// generate proof
let (proof, _) = Rep3CoUltraHonk::<_, _, Poseidon2Sponge>::prove(net, pk, &prover_crs)?;

// verify proof
assert!(UltraHonk::<_, Poseidon2Sponge>::verify(proof, vk).context("while verifying proof")?);
```
