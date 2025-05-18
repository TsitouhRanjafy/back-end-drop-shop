import { Router, Request, Response } from "express";
import { validationResult } from "express-validator";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import LoginUserController from "../../../controllers/user/login-user.controller";
import endpoints from "../../../../config/endpoints";
import { userLoginSchema } from "../../../../schema/user.schema";

export const loginUserRouter = (router: Router, loginUserController: LoginUserController) => {
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
                const response = await loginUserController.handle(req,res);
                res.status(response.statusCode).send(response.body);
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
                throw error;
            }
        }
    )
}