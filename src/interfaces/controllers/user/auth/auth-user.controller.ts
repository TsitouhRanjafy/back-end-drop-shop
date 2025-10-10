import { Request } from "express"
import { StatusCodes } from "http-status-codes";

import { IHttpResponse, IUser } from "../../../../core/domain";
import { ControllerError } from "../../../error/controllers.error";
import { AuthUserUsecase } from "../../../../core/usecases";


class AuthUserController {
    constructor(private authUserUsecase: AuthUserUsecase){}

    handle(req: Request): IHttpResponse<Pick<IUser,"id" | "email" | "role"> | {message: string}>{
        const token: string = req.cookies.TOKEN_DROP_APP as string;
        
        try {
            const usecaseResponse: Pick<IUser,"id" | "email" | "role"> | null= this.authUserUsecase.execute(token);
            if (!usecaseResponse) return {body: {message: "unauthorized token"},statusCode: StatusCodes.UNAUTHORIZED};
            return {
                body: usecaseResponse,
                statusCode: StatusCodes.OK
            }
        } catch (error) {
            throw new ControllerError("AuthUserController", error);
        }
    }
}

export default AuthUserController;