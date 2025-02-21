# API

## Types

## Functions

This is a collection of all commonly used public facing functions that are also used by the cli.
All functions that take the network by value, also return it again in a tuple.
This makes internal code a lot simple because we dont have to care about lifetimes.

### split-input-rep3

Split input into `REP3` shares

```rust
pub fn split_input_rep3<P: Pairing, N: Rep3Network, R: Rng + CryptoRng>(
    initial_witness: BTreeMap<String, PublicMarker<GenericFieldElement<P::ScalarField>>>,
    rng: &mut R,
) -> [BTreeMap<String, Rep3AcvmType<P::ScalarField>>; 3]
```

### merge-input-shares

Merge multiple `REP3` input shares

```rust
pub fn merge_input_shares<P: Pairing>(
    input_shares: Vec<BTreeMap<String, Rep3AcvmType<P::ScalarField>>>,
) -> Result<BTreeMap<String, Rep3AcvmType<P::ScalarField>>>
```

### split-witness-rep3

Split a witness into `REP3` shares

```rust
pub fn split_witness_rep3<F: PrimeField, R: Rng + CryptoRng>(
    witness: Vec<PubShared<F>>,
    rng: &mut R,
) -> [Vec<Rep3AcvmType<F>>; 3]
```

### split-witness-shamir

Split a witness into `SHAMIR` shares

```rust
pub fn split_witness_shamir<F: PrimeField, R: Rng + CryptoRng>(
    witness: Vec<PubShared<F>>,
    degree: usize,
    num_parties: usize,
    rng: &mut R,
) -> Vec<Vec<ShamirAcvmType<F>>>
```

### generate-witness-rep3

Generate a witness from a program and `REP3` input shares

```rust
pub fn generate_witness_rep3<N: Rep3Network>(
    input_share: BTreeMap<String, Rep3AcvmType<ark_bn254::Fr>>,
    compiled_program: ProgramArtifact,
    net: N,
) -> Result<(Vec<Rep3AcvmType<ark_bn254::Fr>>, N)>
```

### translate-witness

Translate a `REP3` shared witness to a `SHAMIR` shared witness

```rust
pub fn translate_witness<
    P: Pairing,
    NA: Rep3Network + RepToShamirNetwork<NB>,
    NB: ShamirNetwork,
>(
    witness_share: Vec<Rep3AcvmType<P::ScalarField>>,
    net: NA,
) -> Result<(Vec<ShamirAcvmType<P::ScalarField>>, NB)>
```

### build-proving-key-rep3

Generate a `REP3` shared proving key

```rust
pub fn generate_proving_key_rep3<N: Rep3Network>(
    net: N,
    constraint_system: &AcirFormat<ark_bn254::Fr>,
    witness_share: Vec<Rep3AcvmType<ark_bn254::Fr>>,
    recursive: bool,
) -> Result<(Rep3ProvingKey<Bn254, N>, N)>
```

### build-proving-key-shamir

Generate a `SHAMIR` shared proving key

```rust
pub fn generate_proving_key_shamir<N: ShamirNetwork>(
    net: N,
    threshold: usize,
    constraint_system: &AcirFormat<ark_bn254::Fr>,
    witness_share: Vec<ShamirAcvmType<ark_bn254::Fr>>,
    recursive: bool,
) -> Result<(ShamirProvingKey<Bn254, N>, N)>
```

### split-proving-key-rep3

Split a proving key into `REP3` shares

```rust
pub fn split_proving_key_rep3<P: Pairing, R: Rng + CryptoRng, N: Rep3Network>(
    proving_key: PlainProvingKey<P>,
    rng: &mut R,
) -> Result<[Rep3ProvingKey<P, N>; 3]>
```

### split-proving-key-shamir

Split a proving key into `SHAMIR` shares

```rust
pub fn split_proving_key_shamir<P: Pairing, R: Rng + CryptoRng, N: ShamirNetwork>(
    proving_key: PlainProvingKey<P>,
    degree: usize,
    num_parties: usize,
    rng: &mut R,
) -> Result<Vec<ShamirProvingKey<P, N>>>
```

### translate-proving-key

Translate a `REP3` shared proving key to a `SHAMIR` shared proving key

```rust
pub fn translate_proving_key<
    P: Pairing,
    NA: Rep3Network + RepToShamirNetwork<NB>,
    NB: ShamirNetwork,
>(
    proving_key: Rep3ProvingKey<P, NA>,
    net: NA,
) -> Result<(ShamirProvingKey<P, NB>, NB)>
```

### generate-proof

Generate a proof with a `Poseideon2Sponge` or `Keccak256` transcript hasher

```rust
impl<
        P: HonkCurve<TranscriptFieldType>,
        H: TranscriptHasher<TranscriptFieldType>,
        N: Rep3Network,
    > Rep3CoUltraHonk<N, P, H>
{
    pub fn prove(
        net: N,
        proving_key: ProvingKey<Rep3UltraHonkDriver<N>, P>,
        crs: &ProverCrs<P>,
    ) -> eyre::Result<(HonkProof<TranscriptFieldType>, N)>
}
```

### generate-vk

Generate a verification key

```rust
pub fn generate_vk<P: Pairing>(
    constraint_system: &AcirFormat<P::ScalarField>,
    prover_crs: Arc<ProverCrs<P>>,
    verifier_crs: P::G2Affine,
    recursive: bool,
) -> Result<VerifyingKey<P>>
```

### verify

Verify a proof with a `Poseideon2Sponge` or `Keccak256` transcript hasher

```rust
impl<P: HonkCurve<TranscriptFieldType>, H: TranscriptHasher<TranscriptFieldType>> UltraHonk<P, H> {
    pub fn verify(
        honk_proof: HonkProof<TranscriptFieldType>,
        verifying_key: VerifyingKey<P>,
    ) -> HonkVerifyResult<bool>
}
```












