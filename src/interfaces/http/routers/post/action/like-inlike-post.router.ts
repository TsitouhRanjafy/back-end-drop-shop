import { Router, Request, Response } from "express";

import LikeInlikePostController from "../../../controllers/post/action/like-inlike-post.controller";
import endpoints from "../../../../config/endpoints";
import { reactionSchemaBody } from "../../../../schema/query.schema";
import { validateRequest } from "../../../middleware/validate-request.middleware";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const likeInLikePostRouter = (router: Router, likeInlikePostController: LikeInlikePostController) => {
    router.post(
        endpoints.likeInlikePost,
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