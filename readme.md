# Drop Shop

Backend du projet **Drop Shop** – un service Node.js avec Prisma et PostgreSQL, entièrement conteneurisé avec Docker.

## 🚀 Stack technique

- **Node.js** : v22.19.0  
- **TypeScript** : pour le code source  
- **Prisma** : ORM pour PostgreSQL  
- **PostgreSQL** : base de données  
- **Docker** : pour l’exécution et l’isolation des environnements  
- **Nodemon + ts-node** : hot reload en développement  

---

## 📦 Installation locale (sans Docker)

> ⚠️ Optionnel – recommandé uniquement pour développement rapide.  
> Normalement, tout passe par Docker.

1. Installer Node.js `22.19.0`  
2. Installer les dépendances :  
    ```bash
    npm install
    ```
3. Install dotenvx pour injecter l'environnement

    ```bash
    sudo curl -sfS https://dotenvx.sh/install.sh | sudo sh
    ```

4. Générer Prisma Client :

    ```bash
    npx prisma generate
    ```


5. Lancer en mode dev :
    - créer un fichier `.env.dev` comme [.env.exemple]()    
    ```bash
    dotenvx run -f .env.dev -- npm run start:dev
    ```

## 🐳 Docker

Le projet est prévu pour tourner directement via Docker.

1. Construire l’image

    ```bash
    docker build -t drop-shop .
    ```

2. Lancer un conteneur

    ```bash
    docker run -d \
      --env-file .env.dev \
      -p 8000:5000 \
      --name=container-drop-shop \
      drop-shop
    ```

    - --env-file : fournit les variables d’environnement (exemple `.env.dev`)

    - -p 8000:5000 : mappe le port 5000 du conteneur vers le port 8000 sur la machine hôte

    - --name : donne un nom au conteneur (`container-drop-shop`)

    👉 Après ça, l’API est accessible sur :

    ```bash
    http://localhost:8000
    ```
## ⚙️ Environnements

- Développement :
    - Démarrage avec nodemon et `ts-node`
    - Variables d’environnement dans `.env.dev`
    - Exemple :
    ```bash
    DATABASE_URL="postgresql://user:pass@db:5432/mydb"
    ```
- Production :
    - Code compilé en `dist/`
    - Conteneur plus léger, avec uniquement les dépendances de prod
    - Variables dans `.env.prod`

## Prisma

- Générer le engines binaires et le client prisma
    ```bash
    npx prisma generate
    ```

- Générer uniquement le client prisma
    ```bash
    npx prisma generate --no-engine
    ```

## 🛠 Scripts disponibles

- `npm run start:dev` : lance en mode dev (`nodemon + ts-node`)
- `npm run build` : compile TypeScript vers `dist/`
- `npm run start:prod` : exécute la version compilée

## ✅ Bonnes pratiques

- Toujours lancer npx prisma generate après modification du schema.prisma.
- Ne jamais copier les fichiers .env.* dans l’image Docker → les passer via --env-file ou un secret manager.

## Autre

This is a back end for [this](https://github.com/marioralison/Drop_App) project

The [database conception](https://drive.google.com/file/d/1hnSGUgrMk2PCUbNxZhBGJkvHQSActJXq/view?usp=drive_link)

