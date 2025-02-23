# coNoir

coNoir enables Noir's witness extension and proof generation inside MPC. Intermediate artifacts of Noir's toolchain and coNoir's toolchain may be used interchangeably, i.e. proofs generated with coNoir verify with Noir and vice-versa. We assume you are already familiar with [Noir](https://aztec.network/noir), its package manager [nargo](https://docs.aztec.network/aztec/glossary#nargo) and Aztec's proof system [barretenberg](https://github.com/AztecProtocol/barretenberg).

The following drawing serves as an overview on how coNoir fits into the existing Noir ecosystem, and only relevant differences introduced by coNoir are highlighted. This drawing uses the three-party sharing protocol REP3.

<img src={require("./figures/co-noir-workflow.png").default} alt="overview drawing" width="90%"/>

Every coNoir generate-proof node computes the final proof and the corresponding public input, therefore only one node is required to provide the outputs (redundant dataflow denoted by dotted lines).

The drawing shows that you can choose between generating the witness in MPC using coNoir or in plain using Noir's toolchain. Witness extension is the bottleneck at the moment, since witness extension is based on general purpose computations in MPC which are inefficient right now in coNoir. The proving steps are more efficient in MPC as they are mostly based on linear operations (FFTs, MSMs). coNoir is still in its early stages and requires further optimization, and coNoir is slower than Noir at the moment. 

The rest of this section is split into two subsections, where the [first page](./cli/cli.md) goes into detail on using coNoir on the command line, whereas the [second page](./lib/lib.md) explains how to use coNoir as a library in your project. The [coNoir Quick Start](../getting-started/quick-start-co-noir.md) page helps you jumping into using the toolchain straight away!
