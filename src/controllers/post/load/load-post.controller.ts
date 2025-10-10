import { Request } from "express";

import { IHttpResponse, IPost } from "../../../core/domain";
import { StatusCodes } from "http-status-codes";
import { ControllerError } from "../../error/controllers.error";
import { LoadPostUsecase } from "../../../core/usecases";

export default class LoadPostController {
    constructor(
        private loadPostUsecase: LoadPostUsecase
    ){}

    async handle(req: Request): Promise<IHttpResponse<IPost[] | {message: string}>>{
        const { count } = req.params;
        try {
            const posts: IPost[] | null = await this.loadPostUsecase.exec(parseInt(count));
            if (!posts) return {body: { message: "no post available"},statusCode: StatusCodes.OK }
            return {
                body: posts,
                statusCode: StatusCodes.OK
            }
        } catch (error) {
            throw new ControllerError("LoadPostController",error);
        }
    }
}