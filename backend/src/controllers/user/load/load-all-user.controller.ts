import { Request } from "express";
import { IHttpResponse, IUser } from "../../../domain";
import { Role } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { ControllerError } from "../../../domain/error/controllers.error";
import { LoadAllUserUsecase } from "../../../usecases";

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