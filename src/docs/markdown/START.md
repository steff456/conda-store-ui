# Getting Started

Hello, welcome to our getting started guide! This guide aims to be the current best way to get `conda-store-ui` up and running!

## Local Deployment

For a local deployment, we recommend that you use our provided docker compose file. The docker compose file contains _both_ conda-store and conda-store-server, so it is perfect for a playground!

------------------------

### 1) Clone the repository and `cd` into the root

```bash
git clone https://github.com/conda-incubator/conda-store-ui.git
cd conda-store-ui
```

### 2) Start Docker Compose

```bash
docker compose up --build
```

### 3) Access conda-store-ui, running at [localhost](https://localhost)

Since this Dockerfile came bundled with conda-store, all that's left to worry about is authenticating to the server.

### 4) Login by locating the login icon, and clicking on it.

**Note** The default login combination is `username/password`
