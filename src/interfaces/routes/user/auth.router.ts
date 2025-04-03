import { Request } from "express"
import { AuthUserUsecase, IAuthUsecaseResponse } from "../../../core";
import { CustomHttpResponse, response_not_ok, response_ok } from "./singup.router";
import { StatusCodes } from "http-status-codes";



class AuthUserRouter {
    constructor(private authUserUsecase: AuthUserUsecase){}

    handle(req: Request): CustomHttpResponse{
        const token: string = req.cookies.TOKEN_KEY_1234 as string;

        try {
            const usecaseResponse: IAuthUsecaseResponse | null = this.authUserUsecase.execute(token);
            if (!usecaseResponse) return response_not_ok("signup or login first",StatusCodes.UNAUTHORIZED);
            return response_ok(usecaseResponse.id,usecaseResponse.token);
        } catch (error) {
            console.error("Erreurs lors de `AuthUserRouter`",error);
            throw error;
        }
    }
}

export default AuthUserRouter;