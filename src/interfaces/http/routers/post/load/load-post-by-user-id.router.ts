import { Router, Request, Response } from "express";
import LoadPostByUserIdController from "../../../controllers/post/load/load-post-by-user-id.controller";
import endpoints from "../../../../config/endpoints";
import { idUserSchemaQuery } from "../../../../schema/query.schema";
import { validateRequest } from "../../../middleware/validate-request.middleware";
import { IHttpResponse, IPost } from "../../../../../domain";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const loadPostByUserIdRouter = (router: Router, controller: LoadPostByUserIdController) => {
    router.get(
        endpoints.getPostByUserId,
        idUserSchemaQuery,
        validateRequest,
        async (req: Request, res: Response) => {
            try {
                const posts: IHttpResponse<Pick<IPost,"id">[] | []> = await controller.handle(req);
                res.status(posts.statusCode).send(posts.body)
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
                throw error;
            }
        }
    )
}