import { Request } from "express";
import { IHttpResponse, IUser, LoadAllUserUsecase } from "../../../../../domain";
import { Role } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { ControllerError } from "../../../../error/controllers.error";

export default class LoadAllUserController {
    constructor(
        private loadAllUserUsecase: LoadAllUserUsecase
    ){}

    async handle(req: Request): Promise<IHttpResponse<IUser[]>>{
        try {
            const { role } = req.params
            const users: IUser[] = await this.loadAllUserUsecase.exec(role as Role)
            return {
                body: users,
                statusCode: StatusCodes.OK
            };
        } catch (error) {
            throw new ControllerError("LoadAllUserController",error);
        }
    }
}