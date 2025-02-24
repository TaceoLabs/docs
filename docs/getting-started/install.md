# Installation

This section will help you setup the co-circom toolchain.

## Prerequisites

To use co-circom, you need to install Rust, circom, and snarkJS. Here's a brief overview of why each tool is necessary:

- **Rust:** Required for building and running components of co-circom.
- **Circom:** Needed to compile a circuit into a .r1cs file.
- **SnarkJS:** Used to create the proving and verification keys.

Follow these steps to install the required tools:

- **Install Rust**: Visit the official [Rust site](https://www.rust-lang.org/tools/install) for detailed installation instructions.
- **Install circom and snarkJS**: Refer to the [circom documentation](https://docs.circom.io/getting-started/installation/) for guidance on installing circom and snarkJS.

These resources will provide the necessary information to get your environment set up for using co-circom.

## Compile from Source

- coCircom

```bash
cargo install --git https://github.com/TaceoLabs/co-snarks --branch main co-circom
```

- coNoir

```bash
cargo install --git https://github.com/TaceoLabs/co-snarks --branch main co-noir
```

## Download Binary from Release

1. You can find the latest release
   [here](https://github.com/TaceoLabs/collaborative-circom/releases/latest).
2. Download the binary for your operating system.

3. Extract the binary from the archive

    ```bash
    tar xf co-circom-YOUR_ARCHITECTURE.tar.gz
    ```

4. Make the binary executable (if necessary):

    ```bash
    chmod +x co-circom
    ```
