import { Request } from "express";
import { StatusCodes } from "http-status-codes";

import { AddNewPostUsecase, IHttpResponse, IPost } from "../../../../../domain";
import { ControllerError } from "../../../../error/controllers.error";

export default class AddNewPostController {
    constructor(
        private addNewPostUsecase: AddNewPostUsecase,
    ){}

    async handle(req: Request): Promise<IHttpResponse<IPost | { message: string; }>>{
        const post: Omit<IPost,"id" | "id_user" | "create_at" > = req.body as Omit<IPost,"id" | "id_user" | "create_at" >;
        const id_user: number = parseInt(req.params.id_user);
        const newPost: Omit<IPost,"id" | "create_at"> = {...post,id_user};
        try {
            const savedPost: IPost | null = await this.addNewPostUsecase.exec(newPost);
            if (!savedPost) return { body: {message: "id_user not fund"}, statusCode: StatusCodes.NOT_ACCEPTABLE }
            return {
                body: savedPost,
                statusCode: StatusCodes.ACCEPTED
            };
        } catch (error) {
            throw new ControllerError("ddNewPostController",error);
        }
    }
}




