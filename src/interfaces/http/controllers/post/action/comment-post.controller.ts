import { Request } from "express";
import { StatusCodes } from "http-status-codes";

import { CommentPostUsecase, IComment, IHttpResponse } from "../../../../../domain";
import { ControllerError } from "../../../../error/controllers.error";


export default class CommentPostController {
    constructor(
        private commentPostUsecase: CommentPostUsecase
    ){}

    async hanlde(req: Request): Promise<IHttpResponse<IComment | {message: string}>>{
        const { id_post,id_user } = req.query;
        const body: {content: string} = req.body as {content: string};
        const comment:Omit<IComment,"id" | "date"> = {
            content: body.content,
            id_post: Number(id_post),
            id_user: Number(id_user)
        }
        try {
            const newComment: IComment | null = await this.commentPostUsecase.exec(comment);
            return {
                body: newComment ? newComment : {message: "comment refused"},
                statusCode: newComment ? StatusCodes.OK : StatusCodes.BAD_REQUEST
            }
        } catch (error) {
            throw new ControllerError("CommentPostController",error);
        }
    }
}