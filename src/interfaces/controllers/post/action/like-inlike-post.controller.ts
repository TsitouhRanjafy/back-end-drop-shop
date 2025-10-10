import { Request } from "express";

import { IHttpResponse, IReaction} from "../../../../core/domain";
import { ControllerError } from "../../../error/controllers.error";
import { StatusCodes } from "http-status-codes";
import { LikeInlikePostUsecase } from "../../../../core/usecases";

export default class LikeInlikePostController {
    constructor(
        private likeInlikePostUsecase: LikeInlikePostUsecase
    ){}

    async handle(req: Request): Promise<IHttpResponse<{message: string}>> {
        const { id_post,userId } = req.query;
        const reaction: Omit<IReaction,"id"> = { 
            id_post: Number(id_post),
            id_user: Number(userId) 
        }
        try {
            const response: boolean = await this.likeInlikePostUsecase.exec(reaction);
            return {
                body: {message: response ? "request posted to like or inlike":"request failed"},
                statusCode: response ? StatusCodes.OK : StatusCodes.BAD_REQUEST
            }
        } catch (error) {
            throw new ControllerError("LikeInlikePostController",error);
        }
    }
}