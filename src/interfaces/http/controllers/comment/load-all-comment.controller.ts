import { Request } from "express";

import { IComment, IHttpResponse, LoadAllCommentUsecase } from "../../../../domain";
import { ControllerError } from "../../../error/controllers.error";
import { StatusCodes } from "http-status-codes";

export default class LoadAllCommentController{
    constructor(
        private loadAllCommentUsecase: LoadAllCommentUsecase
    ){}

    async handle(req: Request): Promise<IHttpResponse<IComment[] | {message: string}>>{
        const { id_post, is_desc } = req.query;
        try {
            const allComment = await this.loadAllCommentUsecase.exec(Number(id_post), is_desc === 'true');
            return {
                body: allComment ? allComment : [],
                statusCode: StatusCodes.OK
            };
        } catch (error) {
            throw new ControllerError("LoadAllCommentController",error);
        }
    }
}