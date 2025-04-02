import { StatusCodes } from "http-status-codes";
import { IHttpResponse, IUser, SignupUserUseCase } from "../../../core";
import { Request, Response } from "express";
import env from "../../config/env";


class SignupRouter {
    constructor(private signupUseCase: SignupUserUseCase){}

    async handler(req: Request,res: Response): Promise<CustomHttpResponse> {
        const user: Omit<IUser,"id"> = req.body as Omit<IUser,"id">;

        try {
            const token = await this.signupUseCase.exec(user);
            if (!token) return response_not_ok('try to change email or password');

            res.cookie(env.token_secret_key,token,{
                httpOnly: true,
                sameSite: true,
                maxAge: 24 * (60 * (60 * 1000)) // 24h
            })

            return response_ok(token);
        } catch (error) {
            console.error("Erreur lors du `SingupRouter` handle",error);
            throw error;
        }
    }
}

export type CustomHttpResponse = IHttpResponse<{ token: string }> | IHttpResponse<{message: string}>

export const response_ok = (token: string): CustomHttpResponse => {
    return {
        body: { token },
        statusCode: StatusCodes.BAD_REQUEST
    }
}

export const response_not_ok = (message: string,statusCode: StatusCodes = StatusCodes.BAD_REQUEST): CustomHttpResponse => {
    return {
        body: { message },
        statusCode: statusCode
    }
}

export default SignupRouter;