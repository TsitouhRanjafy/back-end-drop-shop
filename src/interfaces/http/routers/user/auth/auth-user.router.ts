import { Router, Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import AuthUserController from "../../../controllers/user/auth/auth-user.controller";
import endpoints from "../../../../config/endpoints";


export const authRouter = (router: Router, authController: AuthUserController) => {
    router.post(
        endpoints.auth,
        (req: Request,res: Response) => {
            try{
                const response = authController.handle(req);
                res.status(response.statusCode).send(response.body);
            }catch(error){
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
                throw error;
            }
        }
    )   
}

