import express, { Application, urlencoded } from 'express';
import { env } from './interfaces';
import endpoints from './interfaces/config/endpoints';
import cookieParser from 'cookie-parser';
import cors from "cors"
import routerSwaggerDocs from './interfaces/documentation/swagger.routes';
import router from './interfaces/http/routers/setup-router';


const app: Application = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: [env.cors_origin1,env.cors_origin2,env.cors_origin3,env.cors_origin4]
}))
app.use(routerSwaggerDocs);
app.use("/",router);

app.listen(env.port, () => {
    console.log(` \n server running on http://localhost:${env.port}`);
    console.log(` documentation on http://localhost:${env.port}${endpoints.docs}`);  
})

