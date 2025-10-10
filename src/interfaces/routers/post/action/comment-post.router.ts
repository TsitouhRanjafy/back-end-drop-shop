import { Router, Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import endpoints from "../../../../configuration/endpoints.config";
import { commentSchema } from "../../../schema/comment.schema";
import { validateRequest } from "../../../middleware/validate-request.middleware";
import { authMiddlware } from "../../../middleware/auth-user.middleware";
import { CommentPostController } from "../../../../controllers";

export const commentPostRouter = (router: Router,commentPostController: CommentPostController) => {
    router.post(
        endpoints.commentPost,
        authMiddlware,
        commentSchema,
        validateRequest,
        async (req: Request, res: Response) => {
            try {
                const response = await commentPostController.hanlde(req);
                res.status(response.statusCode).send(response.body);
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
                throw error;
            }
        }
    )
}