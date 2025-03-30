import express, { Application, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import router from './routes';
import routerSwaggerDocs from '../documentation/swagger.routes';

const app: Application = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);
app.use(routerSwaggerDocs)


export default app;
