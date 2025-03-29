import express, { Application, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import router from './routes';

const app: Application = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router)


export default app;
