import { Router, Request, Response } from "express";
import endpoints from "../../../../../configuration/endpoints.config";
import { idUserSchemaQuery } from "../../../schema/query.schema";
import { validateRequest } from "../../../middleware/validate-request.middleware";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { authMiddlware } from "../../../middleware/auth-user.middleware";
import { LoadUserByIdController } from "../../../../../interfaces";

export const loadUserByIdRouter = (router: Router, loadUserController: LoadUserByIdController) => {

    router.get(
        endpoints.getUserById,
        authMiddlware,
        idUserSchemaQuery,
        validateRequest,
        async (req: Request, res: Response) => {
            try {
                const response = await loadUserController.handle(req);
                res.status(response.statusCode).send(response.body)
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: ReasonPhrases.INTERNAL_SERVER_ERROR});
                throw error;
            }
        }
    )
}