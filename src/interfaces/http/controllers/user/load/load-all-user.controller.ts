import { Request } from "express";
import { IHttpResponse, IUser, LoadAllUserUsecase } from "../../../../../domain";
import { Role } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { ControllerError } from "../../../../error/controllers.error";

export default class LoadAllUserController {
    constructor(
        private loadAllUserUsecase: LoadAllUserUsecase
    ){}

    async handle(req: Request): Promise<IHttpResponse<Pick<IUser,"id" | "firstname" | "lastname" | "region" | "pays" | "profile_url" >[]>>{
        try {
            const { role, skip, take } = req.params
            const users: Pick<IUser,"id" | "firstname" | "lastname" | "region" | "pays" | "profile_url" >[] = await this.loadAllUserUsecase.exec(role as Role,parseInt(skip),parseInt(take));
            return {
                body: users,
                statusCode: StatusCodes.OK
            };
        } catch (error) {
            throw new ControllerError("LoadAllUserController",error);
        }
    }
}