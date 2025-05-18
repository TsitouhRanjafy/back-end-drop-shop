import { Router, Request, Response } from "express";
import { validationResult } from "express-validator";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import SignupUserController from "../../../controllers/user/singup-user.controller";
import { userSignupSchema } from "../../../../schema/user.schema";
import endpoints from "../../../../config/endpoints";

export const signupUserRouter = (router: Router, signupUserRouter: SignupUserController) => {
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
                const response = await signupUserRouter.handler(req, res);
                res.status(response.statusCode).send(response.body);
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
                throw error;
            }
        }
    );

}