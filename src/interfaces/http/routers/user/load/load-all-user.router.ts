import { Router, Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import LoadAllUserController from "../../../controllers/user/load/load-all-user.controller";
import endpoints from "../../../../config/endpoints";
import { IHttpResponse, IUser } from "../../../../../domain";
import { requestParamsSchema } from "../../../../schema/params.schema";
import { validateRequest } from "../../../middleware/validate-request.middleware";

export const loadAllUserRouter = (router: Router, loadAllUserController: LoadAllUserController) => {
    router.get(
        endpoints.getAllUser,
        requestParamsSchema,
        validateRequest,
        async (req: Request, res: Response) => {
            try {
                const response: IHttpResponse<Pick<IUser,"id" | "firstname" | "lastname" | "region" | "pays" | "profile_url" >[]> = await loadAllUserController.handle(req);
                res.status(response.statusCode).send(response.body);
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: ReasonPhrases.INTERNAL_SERVER_ERROR});
                throw error;
            }
        }
    )
}