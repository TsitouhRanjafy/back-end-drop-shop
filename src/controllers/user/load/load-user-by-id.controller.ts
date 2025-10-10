import { Request } from "express";

import { IHttpResponse, IUser } from "../../../domain";
import { ControllerError } from "../../error/controllers.error";
import { StatusCodes } from "http-status-codes";
import { LoadUserByIdUsecase } from "../../../usecases";

export default class LoadUserByIdController {
    constructor(
        private loadUserByIdUsecase: LoadUserByIdUsecase
    ){}

    async handle(req: Request): Promise<IHttpResponse<IUser | Omit<IUser, "password"> | { message: string; }>> {
        const myId: number = parseInt(req.query.userId as string);
        const id_user: number= parseInt(req.query.id_user as string);

        try {  
            const user: IUser | Omit<IUser,"password"> | null = await this.loadUserByIdUsecase.exec(id_user,(id_user === myId));
            return {
                body: user? user : {message: "user not fund"},
                statusCode: StatusCodes.OK
            };
        } catch (error) {
            throw new ControllerError("LoadUserByIdController",error);
        }
    }
}