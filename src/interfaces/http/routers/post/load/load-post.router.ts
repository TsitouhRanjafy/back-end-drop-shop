import { Router, Request, Response } from "express";

import LoadPostController from "../../../controllers/post/load/load-post.controller";
import endpoints from "../../../../config/endpoints";
import { countPostSchemaParams } from "../../../../schema/params.schema";
import { validateRequest } from "../../../middleware/validate-request.middleware";
import { IHttpResponse, IPost } from "../../../../../domain";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

// admin
export const loadPostRouter = (router: Router, loadPostController: LoadPostController) => {
    router.get(
        endpoints.loadPost,
        countPostSchemaParams,
        validateRequest,
        async (req: Request, res: Response) => {
            try {
                const response: IHttpResponse<IPost[] | {message: string}> = await loadPostController.handle(req);
                res.status(response.statusCode).send(response.body);
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
                throw error;
            }
        }
    )
}