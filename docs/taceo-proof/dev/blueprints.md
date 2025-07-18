# Blueprints and Vouchers
At the heart of TACEO:Proof are *blueprints* — registered circuit definitions that specify everything the network needs to generate a coSNARK proof. A blueprint contains the circuit, proving key, and verification key, and it defines how the proof will be computed.

Developers and projects that want to delegate private proof generation to the network can register on TACEO:Proof and upload their own blueprints. We currently support the following blueprint types:

* **Circom + Groth16**: Upload your Circom circuit along with the `.zkey` and verification key.
* [ark-groth16 based](https://docs.rs/ark-groth16/latest/ark_groth16/): Upload the proving key, constraint matrices, and verification key. (Note: witness extension is not currently supported for these.)

### Uploading & managing blueprints (REST API or Dashboard)

Registered users can upload and manage blueprints either through our API or the web dashboard. Each blueprint includes:

* A unique identifier
* Circuit artifacts (e.g., circuit definition, proving key, verification key)
* Curve specification (e.g., BN254, BLS12-381 for Circom; BLS12-377 for ark-groth16)
* Status (active, paused, revoked)
* Visibility (public or restricted)

> ⚠️ The cryptographic curve is tightly coupled to the uploaded artifacts and cannot be changed after creation.

### Public vs. restricted blueprints

Blueprints can be either public or restricted:

* Public blueprints can be used by any user who knows the identifier—no additional authorization needed.
* Restricted blueprints require a voucher, issued by the blueprint creator, to schedule jobs. This allows for fine-grained access control over who can generate proofs.

Vouchers serve as short-lived, verifiable permits. They authorize the use of a specific blueprint and can include additional constraints such as usage limits or expiration.

### Getting and using vouchers

To use a **restricted blueprint**, users must first obtain **a voucher** from the blueprint creator. This process involves an out-of-band authentication step—TACEO:Proof does not manage or enforce this interaction. It’s entirely up to the application or project to decide how users are verified and approved.

Once a user is deemed eligible, the blueprint creator authenticates with the CCL using their credentials. The CCL then issues a signed voucher, which is returned to the user.

To initiate a proof generation, the user submits the voucher along with their job request to the CCL. The CCL verifies the voucher’s validity and, if accepted, schedules the corresponding coSNARK execution.

