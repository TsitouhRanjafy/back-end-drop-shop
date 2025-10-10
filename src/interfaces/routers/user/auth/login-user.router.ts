import { Router, Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import endpoints from "../../../../configuration/endpoints.config";
import { userLoginSchema } from "../../../schema/user.schema";
import { validateRequest } from "../../../middleware/validate-request.middleware";
import { LoginUserController } from "../../../../controllers";


export const loginUserRouter = (router: Router, loginUserController: LoginUserController) => {
    router.post(
        endpoints.login,
        userLoginSchema,
        validateRequest,
        async (req: Request,res: Response) => {
            try {
                const response = await loginUserController.handle(req,res);
                res.status(response.statusCode).send(response.body);
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
                throw error;
            }
        }
    )
}