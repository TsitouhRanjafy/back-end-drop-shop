import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import env from "../../../configuration/env.config";
import { IHttpResponse, IUser } from "../../../domain";
import { ControllerError } from "../../../domain/error/controllers.error";
import { LoginUserUseCase } from "../../../usecases";


class LoginUserController {
    constructor(private loginUserUsecase: LoginUserUseCase){}

    async handle(req: Request,res: Response): Promise<IHttpResponse<{message: string}> | IHttpResponse<{id: number,token: string}>>{
        try {
            const user: Pick<IUser,"email" | "password" | "role"> = req.body as Pick<IUser,"email" | "password" | "role"> ;
            const usecaseResponse: {id: number,token: string} | null = await this.loginUserUsecase.execute(user.email,user.password,user.role);
            if (!usecaseResponse) return {body: {message: "invalid credentials"},statusCode: StatusCodes.BAD_REQUEST};
    
            res.cookie(env.token_secret_key,usecaseResponse.token,{
                httpOnly: true,
                sameSite: true,
                maxAge: 24 * (60 * (60 * 1000)) // 24h
            })
    
            return {
                body: {
                    id: usecaseResponse.id,
                    token: usecaseResponse.token
                },
                statusCode: StatusCodes.OK
            };
        } catch (error) {
            throw new ControllerError("LoginUserController", error);
        }
    }
}

export default LoginUserController;