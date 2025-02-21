# API

## Types

## Functions

This is a collection of all commonly used public facing functions that are also used by the cli.
Most are generic over a pairing-friendly curve `P` (`BN254` and `BLS12-381`).
All functions that take the network by value, also return it again in a tuple.
This makes internal code a lot simple because we dont have to care about lifetimes.

### split-input

Split the input into `REP3` shares.

```rust
pub fn split_input<P>(
    input: Input,
    public_inputs: &[String],
) -> color_eyre::Result<[Rep3SharedInput<P::ScalarField>; 3]>
where
    P: Pairing + CircomArkworksPairingBridge,
    P::BaseField: CircomArkworksPrimeFieldBridge,
    P::ScalarField: CircomArkworksPrimeFieldBridge,
```

### merge-input-shares

Merge multiple REP3 shared inputs into one.

```rust
pub fn merge_input_shares<F: PrimeField>(
    mut inputs: Vec<Rep3SharedInput<F>>,
) -> color_eyre::Result<Rep3SharedInput<F>>
```

### split-witness-rep3

Split a witness into `REP3` shares.

```rust
pub fn split_witness_rep3<P: Pairing>(
    r1cs: &R1CS<P>,
    witness: Witness<P::ScalarField>,
    compression: Compression,
) -> [CompressedRep3SharedWitness<P::ScalarField>; 3]
```

### split-witness-shamir

Split a witness into `SHAMIR` shares.

```rust
pub fn split_witness_shamir<P: Pairing>(
    r1cs: &R1CS<P>,
    witness: Witness<P::ScalarField>,
    threshold: usize,
    num_parties: usize,
) -> Vec<ShamirSharedWitness<P::ScalarField>>
```

### translate-witness

Translate the `REP3` shared witness into a `SHAMIR` shared witness.

```rust
pub fn translate_witness<P>(
    witness: CompressedRep3SharedWitness<P::ScalarField>,
    net: Rep3MpcNet,
) -> color_eyre::Result<(ShamirSharedWitness<P::ScalarField>, ShamirMpcNet)>
where
    P: Pairing + CircomArkworksPairingBridge,
    P::BaseField: CircomArkworksPrimeFieldBridge,
    P::ScalarField: CircomArkworksPrimeFieldBridge,
```

### generate-witness-rep3

Generate a witness for the given circuit and input

```rust
pub fn generate_witness_rep3<P>(
    circuit: CoCircomCompilerParsed<P::ScalarField>,
    input: Rep3SharedInput<P::ScalarField>,
    net: Rep3MpcNet,
    config: VMConfig,
) -> color_eyre::Result<(Rep3SharedWitness<P::ScalarField>, Rep3MpcNet)>
where
    P: Pairing + CircomArkworksPairingBridge,
    P::BaseField: CircomArkworksPrimeFieldBridge,
    P::ScalarField: CircomArkworksPrimeFieldBridge,
```

### rep3-groth16-prove

Generate a Groth16 proof for a `REP3` shared witness

```rust
impl<P: Pairing, N: Rep3Network> Rep3CoGroth16<P, N> {
    /// Create a [`Groth16Proof`].
    pub fn prove(
        net: N,
        zkey: Arc<ZKey<P>>,
        witness: Rep3SharedWitness<P::ScalarField>,
    ) -> Result<(Groth16Proof<P>, N)>
    where
        P: CircomArkworksPairingBridge,
        P::BaseField: CircomArkworksPrimeFieldBridge,
        P::ScalarField: CircomArkworksPrimeFieldBridge,
}
```

### rep3-plonk-prove

Generate a Plonk proof for a `REP3` shared witness

```rust
impl<P: Pairing, N: Rep3Network> Rep3CoPlonk<P, N> {
    /// Create a [`PlonkProof`]
    pub fn prove(
        net: N,
        zkey: Arc<ZKey<P>>,
        witness: Rep3SharedWitness<P::ScalarField>,
    ) -> eyre::Result<(PlonkProof<P>, N)>
    where
        P: Pairing + CircomArkworksPairingBridge,
        P::BaseField: CircomArkworksPrimeFieldBridge,
        P::ScalarField: CircomArkworksPrimeFieldBridge,
}
```

### shamir-groth16-prove

Generate a Groth16 proof for a `SHAMIR` shared witness

```rust
impl<P: Pairing, N: ShamirNetwork> ShamirCoGroth16<P, N> {
    /// Create a [`Groth16Proof`].
    pub fn prove(
        net: N,
        threshold: usize,
        zkey: Arc<ZKey<P>>,
        witness: ShamirSharedWitness<P::ScalarField>,
    ) -> Result<(Groth16Proof<P>, N)>
    where
        P: CircomArkworksPairingBridge,
        P::BaseField: CircomArkworksPrimeFieldBridge,
        P::ScalarField: CircomArkworksPrimeFieldBridge,
}
```

### shamir-plonk-prove

Generate a Plonk proof for a `SHAMIR` shared witness

```rust
impl<P: Pairing, N: ShamirNetwork> ShamirCoPlonk<P, N> {
    /// Create a [`PlonkProof`]
    pub fn prove(
        net: N,
        threshold: usize,
        zkey: Arc<ZKey<P>>,
        witness: ShamirSharedWitness<P::ScalarField>,
    ) -> eyre::Result<(PlonkProof<P>, N)>
    where
        P: Pairing + CircomArkworksPairingBridge,
        P::BaseField: CircomArkworksPrimeFieldBridge,
        P::ScalarField: CircomArkworksPrimeFieldBridge,
}
```

### groth16-verify

Verify a Groth16 proof

```rust
impl<P: Pairing> Groth16<P> {
    /// Verify a Groth16 proof.
    pub fn verify(
        vk: &JsonVerificationKey<P>,
        proof: &Groth16Proof<P>,
        public_inputs: &[P::ScalarField],
    ) -> Result<(), VerificationError>
    where
        P::ScalarField: CircomArkworksPrimeFieldBridge,
        P: Pairing + CircomArkworksPairingBridge,
        P::BaseField: CircomArkworksPrimeFieldBridge,
}
```

### plonk-verify

Verify a Plonk proof

```rust
impl<P: Pairing> Plonk<P> {
    /// Verifies a circom PLONK proof. The method uses the same interface as snarkjs and it can verify
    /// proofs generated by snarkjs and by this project.
    pub fn verify(
        vk: &JsonVerificationKey<P>,
        proof: &PlonkProof<P>,
        public_inputs: &[P::ScalarField],
    ) -> Result<(), VerificationError>
    where
        P: Pairing,
        P: CircomArkworksPairingBridge,
        P::BaseField: CircomArkworksPrimeFieldBridge,
        P::ScalarField: CircomArkworksPrimeFieldBridge
}
```