import { Router, Request, Response } from "express";

import endpoints from "../../../../configuration/endpoints.config";
import { reactionSchemaBody } from "../../../schema/query.schema";
import { validateRequest } from "../../../middleware/validate-request.middleware";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { authMiddlware } from "../../../middleware/auth-user.middleware";
import { LikeInlikePostController } from "../../../../controllers";


export const likeInLikePostRouter = (router: Router, likeInlikePostController: LikeInlikePostController) => {
    router.post(
        endpoints.likeInlikePost,
        authMiddlware,
        reactionSchemaBody,
        validateRequest,
        async (req: Request,res: Response) => {
            try {
                const response = await likeInlikePostController.handle(req);
                res.status(response.statusCode).send(response.body);
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
                throw error;
            }
        }
    )
}