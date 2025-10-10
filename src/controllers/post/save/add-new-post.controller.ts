import { Request } from "express";
import { StatusCodes } from "http-status-codes";

import {  IHttpResponse, IPost } from "../../../core/domain";
import { ControllerError } from "../../error/controllers.error";
import { AddNewPostUsecase } from "../../../core/usecases";

export default class AddNewPostController {
    constructor(
        private addNewPostUsecase: AddNewPostUsecase,
    ){}

    async handle(req: Request): Promise<IHttpResponse<IPost | { message: string; }>>{
        const post: Omit<IPost,"id" | "id_user" | "create_at" > = req.body as Omit<IPost,"id" | "id_user" | "create_at" >;
        const { userId } = req.query;
        
        const newPost: Omit<IPost,"id" | "create_at"> = {...post,id_user: Number(userId)};
        try {
            const savedPost: IPost | null = await this.addNewPostUsecase.exec(newPost);
            if (!savedPost) return { body: {message: "id_user not fund"}, statusCode: StatusCodes.NOT_ACCEPTABLE }
            return {
                body: savedPost,
                statusCode: StatusCodes.ACCEPTED
            };
        } catch (error) {
            throw new ControllerError("addNewPostController",error);
        }
    }
}




