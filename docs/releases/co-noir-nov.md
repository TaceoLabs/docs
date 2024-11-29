# Major update coNoir

## Summary

We’ve made significant progress to bring coSNARKs to Noir. It is now possible with the coNoir CLI tool to **build simple zkApps that leverage private shared state or private proof delegation** (provided you have the necessary MPC nodes in place)

Speaking of nodes, in case you missed it, we previously launched our coSNARKs [alphanet](https://blog.taceo.io/devcon-demo/). One of the **next steps is to integrate coNoir into the alphanet**. This will allow select developers to use coNoir to experiment with private shared state and private proof delegation.

Example: We are currently **supporting** the Private Shared State Grantee **Hashcloak** for their private machine learning proof-of-concept (some code snippets below).

## New features

First, let’s look back at the status quo from zkSummit (early Oct.). At this point coNoir was “only” supporting basic field arithmetic, thus coNoir programs could just use the field datatype and simple operations, like additions and multiplications (see [A First Look at Collaborative Noir | TACEO Blog](https://blog.taceo.io/co-noir-intro/)). This has changed drastically, so let’s give some update:

### Range checks

We implemented the functionality required for range checks in MPC. These range checks now enable users of coNoir to use more than just the field datatype -- **u64, u16, ect. are now also supported**.

Example: https://github.com/TaceoLabs/co-snarks/blob/main/co-noir/co-noir/examples/test_vectors/mul3u64/src/main.nr

For those interested, this mainly required us to implement decomposing field elements to smaller chunks and an oblivious sorting algorithm in MPC.

### Asserts

CoNoir users can now add asserts to their code (as long as the statement inside the assert is also supported):

Example: https://github.com/TaceoLabs/co-snarks/blob/main/co-noir/co-noir/examples/test_vectors/add3_assert/src/main.nr

### Part of Brillig VM

Context: A lot of features from Noir are evaluated as unconstrained functions. Whenever an unconstrained function is encountered the Brillig VM is invoked in the background.

In the last weeks we worked hard to also implement a **first version of the Brillig VM in MPC**!

The Brillig VM in general requires a fully functional MPC-VM, so don’t expect that everything works out of the box at the moment. But what works is already very powerful:

- **Comparisons** (see, e.g., https://github.com/TaceoLabs/co-snarks/blob/main/co-noir/co-noir/examples/test_vectors/approx_sigmoid/src/main.nr)
- **Simple if-statements** (same example)
- **Byte decomposition** (see, e.g., https://github.com/TaceoLabs/co-snarks/blob/main/co-noir/co-noir/examples/test_vectors/get_bytes/src/main.nr)
- **Casts between fields and rings of different types** (used, e.g., by the byte decomposition example above)
- **Simple integer divisions** (divisions where the result is rounded down) where we divide private values by public powers-of-two)
- **Simple forward jumps as used in branching** (required, e.g., by is_zero gadgets, which is used, e.g., in not-equal comparison: https://github.com/TaceoLabs/co-snarks/blob/main/co-noir/co-noir/examples/test_vectors/poseidon_assert/src/main.nr)

## Compatibility

CoNoir is **compatible with the Noir version 1.0.0-beta.0**. That means, our UltraHonk prover is also compatible with Barretenberg v0.63.0.

## Feedback

As we are starting to give more regular updates, we’d **love to hear your feedback** what is useful, what is missing, etc.; Also if you know from any projects that want to work on private shared state or thinking about private proof delegation as an option, we are more than happy to support them.
