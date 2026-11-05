# TACEO Documentation

This repository contains the source code for the TACEO documentation website.

The documentation is available at https://docs.taceo.io/.

The website is built using [Docusaurus](https://docusaurus.io/), a static website generator.

## Prerequisites

Before getting started, ensure you have:

- Node.js 18 or later
- npm

## Installation

Clone the repository:

```bash
git clone https://github.com/TaceoLabs/docs.git
cd docs
```

Install dependencies using the existing package lockfile:

```bash
npm ci
```

## Local Development

Start the local development server:

```bash
npm run start
```

Docusaurus starts a local development server and opens the documentation website in your browser.

Most changes are reflected without restarting the server.

## Build

Generate a production build:

```bash
npm run build
```

The generated static website is written to the `build` directory.

## Deployment

The TACEO documentation website is deployed through Cloudflare Pages.

Changes merged into the `main` branch are deployed to:

https://docs.taceo.io/

The deployment process is managed by the project's Cloudflare Pages configuration.

The generic Docusaurus GitHub Pages deployment commands are not required for local development or documentation contributions.

## Contributing

Contributions that improve the documentation are welcome for review.

To propose a change:

1. Fork this repository.
2. Create a branch for your changes.
3. Make and review your changes.
4. Run the production build to check for errors.
5. Open a pull request against the `main` branch.

Please keep pull requests focused and provide a clear description of the changes.
