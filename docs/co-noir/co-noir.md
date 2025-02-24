# coNoir

coNoir enables Noir's witness extension and proof generation inside MPC. Intermediate artifacts of Noir's toolchain and coNoir's toolchain may be used interchangeably, i.e. proofs generated with coNoir verify with Noir and vice-versa. We assume you are already familiar with [Noir](https://aztec.network/noir), its package manager [nargo](https://docs.aztec.network/aztec/glossary#nargo) and Aztec's proof system [barretenberg](https://github.com/AztecProtocol/barretenberg).

The following drawing serves as an overview on how coNoir fits into the existing Noir ecosystem.

<img src={require("./figures/co-noir-workflow.png").default} alt="overview drawing"/>
