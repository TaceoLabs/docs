# Example

The following is a incomplete example of how to use the `co-circom` lib crate.
For complete and working example see [here](https://github.com/TaceoLabs/co-snarks/tree/main/co-circom/co-circom/examples).

```rust
// connect to network
let network_config = NetworkConfig::new(/* ... */);
let mut net = Rep3MpcNet::new(network_config)?;

// parse circuit file & put through our compiler
let circuit =
    CoCircomCompiler::<Bn254>::parse(dir.join("circuit.circom"), CompilerConfig::default())?;

// split inputs
let mut input = Input::new();
input.insert("a".to_string(), Value::String("2".to_string()));
input.insert("b".to_string(), Value::String("3".to_string()));
let [share0, share1, share2] = co_circom::split_input::<Bn254>(input, circuit.public_inputs())?;

// parse zkey, without performing extra checks (only advised for zkeys knwon to be valid)
let zkey = Arc::new(Groth16ZKey::<Bn254>::from_reader(
    std::fs::read(dir.join("multiplier2.zkey"))?.as_slice(),
    CheckElement::No,
)?);

// generate witness
let (witness, net) =
    co_circom::generate_witness_rep3::<Bn254>(circuit, share0, net, VMConfig::default())?;
let public_inputs = witness.public_inputs_for_verify();

// generate proof
let (proof, _) = Rep3CoGroth16::prove(net, zkey, witness)?;

// verify proof
let vk = Groth16JsonVerificationKey::<Bn254>::from_reader(
    std::fs::read(dir.join("verification_key.json"))?.as_slice(),
)?;
Groth16::verify(&vk, &proof, &public_inputs)?;
```

