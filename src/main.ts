import express, { Application, urlencoded, Request, Response} from 'express'
import { StatusCodes } from 'http-status-codes';
import { createServer } from 'node:http'
import '@dotenvx/dotenvx/config'
import { IHttpResponse, SignupUserUseCase } from './core';
import { SignupRouter } from './interfaces';
import { Generator, LoadUserReposiroty, SaveUserReposiroty } from './frameworks';


const app: Application = express();
const server = createServer(app);
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send(`
        <h1 style="color:green;font-family: sans-serif;">NODE TS SERVER OK</h1>
        `)
})

const signupRouter = new SignupRouter(new SignupUserUseCase(new Generator,new LoadUserReposiroty,new SaveUserReposiroty))

app.post('/auth/signup',async (req: Request,res: Response) => {
    const response: IHttpResponse<{ id: number, token: string }> | IHttpResponse<{message: string}> = await signupRouter.handler(req,res);
    res.status(response.statusCode).send(response.body);
})

server.listen(PORT, () => {
    console.log(` server running at http://localhost:${PORT}`);
})