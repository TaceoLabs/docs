# OnboarSince we're still using a permissioned set of node providers, we can't tackle throughput by sheer amount of online nodes. That's why your setup should support **horizontal scaling**—multiple CSEs running simultaneously.

### Performance requirements
Each CSE should be able to execute our [Groth16 prover](https://github.com/TaceoLabs/co-snarks/tree/main/co-circom/co-groth16) for a circuit of size $2^{16}$ **in under one second**. This is our current baseline for acceptable latency and throughput.

### Networking requirements
All CSEs must be able to: a Node Operator for TACEO:Proof
TACEO:Proof is currently in the early stages of decentralization. At this time, we operate a permissioned network with a vetted set of Node Providers. However, we're actively expanding, and if you're interested in joining as a Node Operator, we’d love to hear from you—reach [out here](mailto:office@taceo.io).



## Hardware & Network Prerequisites
To ensure reliable performance, we expect Node Providers to be able to run **multiple CSEs** in parallel. Running only a single CSE introduces bottlenecks: all jobs assigned to your node would have to queue behind that one instance, slowing down the entire network.

Since we’re still using a permissioned set of node providers, we can’t tackle throughput by sheer amount of online nodes. That’s why your setup should support **horizontal scaling**—multiple CSEs running simultaneously.

### Performance Requirements
Each CSE should be able to execute our [Groth16 prover](https://github.com/TaceoLabs/co-snarks/tree/main/co-circom/co-groth16) for a circuit of size $2^{16}$ **in under one second**. This is our current baseline for acceptable latency and throughput.

### Networking Requirements
All CSEs must be able to:
* Establish outbound and inbound TCP connections with other nodes.
* Maintain stable peer-to-peer communication throughout the lifecycle of a coSNARK job.

In other words: your machine should be publicly reachable via TCP, and capable of sustaining a reliable connection for multi-party computation protocols.

