
import { Request, Response } from "express"
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import express, { Router } from "express"
import { signupRouter } from "./setup";
import endpoints from "./endpoints";

const router: Router = express.Router();


router.get('/', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send(`
        <h1 style="color:green;font-family: sans-serif;">NODE TS SERVER OK</h1>
        `)
})


router.post(endpoints.signup, async (req: Request, res: Response) => {
    try {
        const response = await signupRouter.handler(req, res);
        res.status(response.statusCode).send(response.body);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
        throw error;
    }
});


export default router;
