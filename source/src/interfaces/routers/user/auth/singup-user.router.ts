import { Router, Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { userSignupSchema } from "../../../schema/user.schema";
import endpoints from "../../../../configuration/endpoints.config";
import { validateRequest } from "../../../middleware/validate-request.middleware";
import { SignupUserController } from "../../../../controllers";


export const signupUserRouter = (router: Router, signupUserRouter: SignupUserController) => {
    router.post(
        endpoints.signup,
        userSignupSchema,
        validateRequest,
        async (req: Request, res: Response) => {
            
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