import { Router, Request, Response } from "express";

import LoadAllCommentController from "../../controllers/comment/load-all-comment.controller";
import endpoints from "../../../config/endpoints";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { idPostSchemaQuery } from "../../../schema/query.schema";
import { validateRequest } from "../../middleware/validate-request.middleware";

export const loadAllCommentRouter = (router: Router, loadAllCommentController: LoadAllCommentController) => {
    router.get(
        endpoints.getAllComment,
        idPostSchemaQuery,
        validateRequest,
        async (req: Request, res: Response) => {
            try {
                const response = await loadAllCommentController.handle(req);
                res.status(response.statusCode).send(response.body);
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
                throw error;
            }
        }
    )
}