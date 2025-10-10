import express, { Application, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors"
import env from './env.config';
import routerSwaggerDocs from '../documentation/swagger.routes';
import router from './setup-router.config';



export const app: Application = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: [env.cors_origin1,env.cors_origin2,env.cors_origin3,env.cors_origin4]
}))
app.use(routerSwaggerDocs);
app.use("/",router);

