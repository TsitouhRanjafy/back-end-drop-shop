import { signupRouter } from "./routes";
import { Request, Response } from "express"
import app from "./app";
import { StatusCodes } from "http-status-codes";
import { IHttpResponse } from "../../core";


app.get('/', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send(`
        <h1 style="color:green;font-family: sans-serif;">NODE TS SERVER OK</h1>
        `)
})

app.post('/auth/signup',async (req: Request,res: Response) => {
    const response: IHttpResponse<{ id: number, token: string }> | IHttpResponse<{message: string}> = await signupRouter.handler(req,res);
    res.status(response.statusCode).send(response.body);
})





