# Best Practices

This section collects hard-earned best practices we've observed through internal testing and early user feedback. Some of these may depend on your specific setup—blueprint type, client device capabilities, network bandwidth, and so on.

### Local vs MPC witness extension
One of the most important architectural choices is whether to perform **witness extension locally** or to delegate it to the **MPC network**.

**Witness extension** is the process of transforming your initial input into a full witness—essentially, running the circuit logic to produce all intermediate values required by the prover. While this step is trivial in traditional zkSNARK setups, it's a major performance factor in TACEO:Proof due to the communication-heavy nature of running general-purpose circuits inside MPC.

#### Why MPC Witness Extension Is Expensive

When witness extension happens inside the MPC, every step of the circuit execution must be run collaboratively across multiple parties. This creates significant communication overhead. In contrast, Groth16 proof generation itself has constant communication cost and is highly efficient in our MPC setup—as we've shown in our [blog post.](https://core.taceo.io/articles/honest-majority-mpc-for-cosnarks/)

#### Why Local Witness Extension Isn’t Free Either

Computing the witness locally shifts the work to the client:
* End users must run the circuit on their device, which may be a challenge for lower-end mobile hardware.
* You’ll need to implement and maintain witness extension logic client-side.
* The extended witness must be uploaded to the CCL. For a circuit with $2^{16}$ constraints, this means sending **$2^{16}$ field elements** (for input, output, and intermediate wires), which translates to about **1 MiB of encrypted** data—a potential bottleneck on mobile networks.

#### Summary: Trade-offs
                    | Local Witness Extension                        | MPC Witness Extension           |
|--------------------|------------------------------------------------|---------------------------------|
| **Upload to CCL**      | $2^k$ field elements                         | Raw circuit inputs only         |
| **Client-side effort** | Compute witness, secret-share, encrypt, upload | Secret-share input + upload     |
| **Performance**        | Fast proving, heavier upload                   | Lower upload, more MPC overhead |

#### Rule of Thumb
For circuits with up to **$2^{16}$ constraints**, we generally recommend performing local witness extension, assuming:

* You expect your users can handle ~3 MiB uploads.
* You want to minimize proving latency.
* Your client devices can run the circuit reasonably.

For larger circuits, or when targeting low-powered or bandwidth-constrained devices, MPC-side witness extension may be more appropriate despite the increased compute overhead on the network.

### Choosing the Correct MPC-protocol

TACEO:Proof currently supports two MPC protocols:

* **REP3:** Based on replicated secret-sharing, with 3 parties.
* **Shamir:** Based on Shamir’s secret-sharing over 3 parties[^1].

Both protocols are **semi-honest secure** under the **honest majority** assumption. However, recent research—see [this 2025 paper](https://eprint.iacr.org/2025/1026.pdf) — shows that **coSNARKs in the semi-honest setting effectively promote to active security** with negligible overhead, which strengthens confidence in practical deployments.


#### Which Protocol Should You Use?
The choice depends on your use case. Here’s what to consider:
**Use REP3 when...**
* You need MPC-based witness extension. Currently, REP3 is the only supported protocol for circuits where the network performs witness extension.
* You’re optimizing for upload size: REP3 supports an optimization that compresses secret shares by a factor of 3. For example:
    * Uploading a $2^{16}$ witness via **Shamir**: ~3 MiB
    * Uploading the same witness via **REP3**: ~1 MiB
       This results in significantly faster job submission, especially on constrained networks.
> ⚠️ Note: The compression trick used in REP3 slightly weakens the protocol’s security guarantees by preventing the “free promotion” to active security described in the paper.

**Use Shamir when...**
* You’ve already **computed the extended witness** locally and can take the increased upload.
* You want **stronger security guarantees**—the protocol still falls under the assumptions in the referenced paper, resulting in a notion of active security.
* You’re okay with slightly larger uploads and minimal performance gains in return for stricter protocol guarantees.

### Handling Proof Latencies & Fallbacks
When scheduling a coSNARK execution, there are a few practical steps and strategies to help reduce latency and improve robustness in case of failures.

#### Step 1: Fetch Node Provider Keys
Before submitting a job, end-users need to retrieve public key material from randomly selected **Node Providers**:
```ts
// TODO: insert snippet for get_random_nps()
```
This step fetches the public keys you’ll need to encrypt secret shares for each selected Node Provider.
> 💡 If you're submitting multiple proofs at once, you can reuse the same set of Node Providers across jobs. This reduces the number of HTTP calls and enables you to encrypt in parallel.

You may also **cache** the public keys temporarily if you're planning to submit additional proofs soon after. Just be aware that **Node Providers can go offline**—if a cached key is stale, your request will fail at scheduling time.
#### Step 2: Schedule the coSNARK Job
After encrypting your input shares for the selected providers, you include the corresponding Node Provider IDs and submit the job:
```ts
// TODO: insert snippet for scheduleCoSnark()
```
If one or more of the selected Node Providers is offline or unresponsive, the call may fail. In that case, you’ll need to:

1) Fetch a new set of Node Providers.
2) Encrypt the shares again using the new keys.
3) Retry scheduling the job.

### Redundancy & Resilience Strategies
To improve reliability or reduce tail latency, you can **schedule multiple coSNARK executions in parallel** and accept the one that completes first. This is especially useful in latency-sensitive applications.
> ⚠️ Important: If you schedule redundant jobs, you **must perform secret-sharing separately for each**. Even if some Node Providers overlap across jobs, this prevents any leakage and maintains security.

At the moment, redundancy handling needs to be implemented at the **call site**. We're exploring the possibility of **native support for redundant job scheduling** in the future.

[^1]: We use techniques from [DN07](https://iacr.org/archive/crypto2007/46220565/46220565.pdf) and [ATLAS](https://eprint.iacr.org/2021/833.pdf).
