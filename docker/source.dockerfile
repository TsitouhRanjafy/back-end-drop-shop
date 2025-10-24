FROM node:lts-alpine

WORKDIR /app

COPY source/*.json .
COPY source/prisma .
COPY source/.env.dev .env.dev

RUN apk add --no-cache curl
RUN curl -sfS https://dotenvx.sh | sh 
RUN npm ci
RUN npx prisma generate

COPY source/* .

EXPOSE 8080

CMD ["npm","run","start:dev"]
