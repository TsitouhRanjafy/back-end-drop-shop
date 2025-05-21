import { Router, Request, Response } from "express"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

import AddNewPostController from "../../../controllers/post/save/add-new-post.controller"
import endpoints from "../../../../config/endpoints"
import newPostSchema from "../../../../schema/newpost.schema"
import { validateRequest } from "../../../middleware/validate-request.middleware"
import { IHttpResponse, IPost } from "../../../../../domain"
import { authMiddlware } from "../../../middleware/auth-user.middleware"


export const addNewPostRouter = (router: Router,addNewPostController: AddNewPostController) => {
    router.post(
        endpoints.addNewPost,
        authMiddlware,
        newPostSchema,
        validateRequest,
        async (req: Request, res: Response) => {
            try {
                const response: IHttpResponse<IPost | { message: string; }>  = await addNewPostController.handle(req);
                res.status(response.statusCode).send(response.body);
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
                throw error;
            }
        }
    )
}