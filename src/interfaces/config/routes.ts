
import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { IHttpResponse } from '../../core';
import express, { Router } from "express"
import { signupRouter } from "./setup";
import endpoints from "./endpoints";

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send(`
        <h  1 style="color:green;font-family: sans-serif;">NODE TS SERVER OK</h1>
        `)
})

router.post(endpoints.signup,async (req: Request,res: Response) => {
    const response: IHttpResponse<{ token: string }> | IHttpResponse<{message: string}> = await signupRouter.handler(req,res);
    res.status(response.statusCode).send(response.body);
})

export default router;
