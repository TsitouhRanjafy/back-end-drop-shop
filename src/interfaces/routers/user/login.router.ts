import { Request, Response } from "express";
import env from "../../config/env";
import { IUser, LoginUserUseCase } from "../../../core";
import { IHttpResponse } from "../../http/http.type";
import { StatusCodes } from "http-status-codes";

class LoginUserRouter {
    constructor(private loginUserUsecase: LoginUserUseCase){}

    async handle(req: Request,res: Response): Promise<IHttpResponse<{message: string}> | IHttpResponse<{id: number,token: string}>>{
        try {
            const user: Pick<IUser,"email" | "password" | "role"> = req.body as Pick<IUser,"email" | "password" | "role"> ;
            const usecaseResponse: {id: number,token: string} | null = await this.loginUserUsecase.execute(user.email,user.password,user.role);
            if (!usecaseResponse) return {body: {message: "invalid credentials"},statusCode: StatusCodes.BAD_REQUEST};
    
            res.cookie(env().token_secret_key,usecaseResponse.token,{
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
            console.error("Erreur lors de `LoginRouter `",error);
            throw error;
        }
    }
}

export default LoginUserRouter;