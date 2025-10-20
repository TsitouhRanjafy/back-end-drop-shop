import { Request } from "express"
import { StatusCodes } from "http-status-codes";

import { IHttpResponse, ITokenDecoded } from "../../../domain";
import { ControllerError } from "../../../domain/error/controllers.error";
import { AuthUserUsecase } from "../../../usecases";


class AuthUserController {
    constructor(private authUserUsecase: AuthUserUsecase){}

    handle(req: Request): IHttpResponse<ITokenDecoded | {message: string}>{
        const token: string = req.cookies.TOKEN_DROP_APP as string;
        
        try {
            const usecaseResponse: ITokenDecoded | null = this.authUserUsecase.execute(token);
            if (!usecaseResponse) return {
                body: {
                    message: "unauthorized token"
                },
                statusCode: StatusCodes.UNAUTHORIZED
            };
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