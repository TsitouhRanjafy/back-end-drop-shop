FROM node:lts-alpine

WORKDIR /app

COPY package*.json .

EXPOSE 8080

CMD ["npm","run","start:dev"]
