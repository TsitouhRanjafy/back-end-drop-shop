import express, { Application, urlencoded, Request, Response} from 'express'
import { StatusCodes } from 'http-status-codes';
import { createServer } from 'node:http'
import '@dotenvx/dotenvx/config'


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

server.listen(PORT, () => {
    console.log(` server running at http://localhost:${PORT}`);
})