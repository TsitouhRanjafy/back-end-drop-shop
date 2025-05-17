import { Request, Response } from "express"
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { authRouter, loginRouter, signupRouter } from "../setup";
import endpoints from "../endpoints";
import { validationResult } from "express-validator";
import { userLoginSchema, userSignupSchema } from "../../schema/user.schema";
import { router } from "../setup";


router.get(
    '/', 
    (req: Request, res: Response) => {
        const resul = validationResult(req);

        if (resul.isEmpty()){
            res.status(StatusCodes.OK).send(`
                <h1 style="color:green;font-family: sans-serif;">NODE TS SERVER OK</h1>
                `)
            return;
        }
        res.status(StatusCodes.BAD_REQUEST).send({ error: resul.array()})
})


router.post(
    endpoints.signup,
    userSignupSchema,
    async (req: Request, res: Response) => {
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()){
            res.status(StatusCodes.BAD_REQUEST).send({ message: resultValidation.array()[0].msg as string})
            return;
        }
        
        try {
            const response = await signupRouter.handler(req, res);
            res.status(response.statusCode).send(response.body);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
            throw error;
        }
    }
);

router.post(
    endpoints.login,
    userLoginSchema,
    async (req: Request,res: Response) => {
        const resulValidation = validationResult(req);
        
        try {
            if (!resulValidation.isEmpty()){
                res.status(StatusCodes.BAD_REQUEST).send({ message: resulValidation.array()[0].msg as string})
                return;
            }
            const response = await loginRouter.handle(req,res);
            res.status(response.statusCode).send(response.body);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
            throw error;
        }
    }
)

router.post(
    endpoints.auth,
    (req: Request,res: Response) => {
        try{
            const response = authRouter.handle(req);
            res.status(response.statusCode).send(response.body);
        }catch(error){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
            throw error;
        }
    }
)

export default router;
