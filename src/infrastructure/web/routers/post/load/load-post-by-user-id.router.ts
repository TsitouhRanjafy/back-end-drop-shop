import { Router, Request, Response } from "express";
import endpoints from "../../../../../configuration/endpoints.config";
import { idUserSchemaQuery } from "../../../schema/query.schema";
import { validateRequest } from "../../../middleware/validate-request.middleware";
import { IHttpResponse, IReaction } from "../../../../../core/domain";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { LoadPostByUserIdController } from "../../../../../interfaces";

export const loadPostByUserIdRouter = (router: Router, controller: LoadPostByUserIdController) => {
    router.get(
        endpoints.getPostByUserId,
        idUserSchemaQuery,
        validateRequest,
        async (req: Request, res: Response) => {
            try {
                const posts: IHttpResponse<Pick<IReaction,"id_post">[] | []> = await controller.handle(req);
                res.status(posts.statusCode).send(posts.body)
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
                throw error;
            }
        }
    )
}