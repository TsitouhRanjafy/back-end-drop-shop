# Le context dans compose doit être le repertoire racine (.)
FROM node:lts-alpine

WORKDIR /prisma_studio

# Copier le schme prisma dans notre code source (in 'source' folder)
COPY source/prisma .
# Les json dans prisma-studio
COPY prisma-studio/*.json .

RUN npm ci


CMD ["npm","run","start"]