import express, { Application, urlencoded } from 'express'

const app: Application = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

export default app;
