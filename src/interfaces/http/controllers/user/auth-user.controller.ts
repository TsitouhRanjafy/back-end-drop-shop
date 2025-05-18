import { Request } from "express"
import { StatusCodes } from "http-status-codes";

import { AuthUserUsecase, IHttpResponse, IUser } from "../../../../domain";


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
            console.error("Erreurs lors de `AuthUserRouter`",error);
            throw error;
        }
    }
}

export default AuthUserController;