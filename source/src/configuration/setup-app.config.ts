import express, { Application, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors"
import env from './env.config';
import router, { saveMessageUsecase, transformService } from './setup-router.config';
import { socketConfig } from './socket.config';
import { MessageController } from '../controllers';



export const app: Application = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: [env.cors_origin1,env.cors_origin2,env.cors_origin3,env.cors_origin4]
}))

const { io, httpServer } = socketConfig(app);
new MessageController(io, saveMessageUsecase, transformService);
app.set('httpServer', httpServer);

app.use("/",router);

