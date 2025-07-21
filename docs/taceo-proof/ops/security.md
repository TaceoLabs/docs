# Security Considerations
As a Node Provider, you're entrusted with **secret-shared sensitive data**. While secret sharing ensures that individual shares reveal nothing on their own, it's still essential to follow strict operational and security best practices to safeguard privacy and integrity.

## Key Management Best Practices
Every Node Provider is assigned a unique **key phrase**, which serves as the seed for generating the node’s cryptographic key material. This includes:

* An **encryption key** (used to receive secret shares securely)
* A **signing key** (used to authenticate messages and proofs)

The public parts of these keys are uploaded during initial registration with the TACEO:Proof network.
> ⚠️  TACEO will never ask for your key phrase.  Do not share your key phrase with _anyone_—not even someone claiming to represent TACEO.

The CSE binary enforces a minimum entropy requirement for key phrases to help prevent weak seeds. However, it is your responsibility to:
* Keep the key phrase **strictly local** to your machine.
* Never back it up to cloud services or shared systems.
* Use secure hardware or encrypted storage when possible.

> 🔐 **If your key phrase is compromised, an attacker could impersonate your node and decrypt any shares encrypted under your public key.**

In short: **treat your key phrase like a private key.**. It is the root of trust for everything your node does on the network.