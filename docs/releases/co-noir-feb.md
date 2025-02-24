# Update to coNoir (February 2025)

## Summary

The most recent release of coNoir updates the compatibility to Noir 1.0.0-beta.3 with Barrettenberg v0.72 and contains support for a few additional black box function calls.

## New features

### Generation of recursive-friendly proofs

Generated UltraHonk proofs are now recursively verifiable.

### Basic support for RAM and ROM gates

The MPC proving backend as well as the MPC version of the brillig VM now support basic operations that involved secret array indices, powered by MPC lookup tables.
Like in normal ZK, operations involving secret array accesses add considerable runtime overhead and should be avoided if possible.

### Blackbox Functions

This release has support for three more black-box functions: AND, XOR and Poseidon2, enabling logic operations on Noir data types and supporting accelerated hashing in the proving system backend.

### Upgrade to arkworks 0.5

All arkworks crates are updated to v0.5, bringing a few usability and performance improvements.

## Compatibility

CoNoir is **compatible with the Noir version 1.0.0-beta.3**. That means, our UltraHonk prover is also compatible with Barretenberg v0.72.0.
