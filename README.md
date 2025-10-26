# BACK END OF [DROP SHOP]() PROJECT

## Prerequisites

Before getting started, make sure you have the following installed:

- [Docker](https://www.docker.com/get-started) (recommended for containerized execution)
- [Node.js](https://nodejs.org/) (v16 or higher)

> **Note**: Using **Docker is strongly recommended** to avoid dependency issues.

---

## Development Setup

- **Clone the repository**

```bash
git clone https://github.com/TsitouhRanjafy/back-end-drop-shop.git
cd back-end-drop-shop
```

- **Run with Docker (recommended)**

```bash
docker compose up
```

> This will:
>
>   - Build the Docker image    
>   - Install dependencies  
>   - Start the server on http://127.0.0.1:8080 (or the configured port)

- **(Optional) Run locally without Docker**

```bash
cd source
```

> - create a `.env.dev` first (referenced by the `.env.exemple`)

```bash
touch .env.dev      # edit this file by the reference
```

> - install [**dotenvx**](https://dotenvx.com/docs/install#shell)

```bash
curl -sfS https://dotenvx.sh | sh
```

or 

```bash
wget -qO- https://dotenvx.sh | sh
```

> - run project

```bash
rm -r node_modules  # remove the node_modules installed by docker
npm ci              
npm run start:dev
```



