import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import routerSwaggerDocs from '../documentation/swagger.routes';
import { app } from './setup';
import routerAdmin from "./routes/admin.route"
import routerUser from "./routes/user.route"

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(routerAdmin);
app.use(routerUser)
app.use(routerSwaggerDocs)


export default app;
