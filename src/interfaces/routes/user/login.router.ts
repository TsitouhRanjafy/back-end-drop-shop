import { IAuthUsecaseResponse, IUser, LoginUserUseCase } from "../../../core";
import { Request, Response } from "express";
import { CustomHttpResponse, response_not_ok, response_ok } from "./singup.router";
import env from "../../config/env";

class LoginUserRouter {
    constructor(private loginUserUsecase: LoginUserUseCase){}

    async handle(req: Request,res: Response): Promise<CustomHttpResponse>{
        try {
            const user: Pick<IUser,"email" | "password" | "role"> = req.body as Pick<IUser,"email" | "password" | "role"> ;
            const usecaseResponse: IAuthUsecaseResponse | null = await this.loginUserUsecase.execute(user.email,user.password,user.role);
            if (!usecaseResponse) return response_not_ok('Invalid credentials');
    
            res.cookie(env.token_secret_key,usecaseResponse.token,{
                httpOnly: true,
                sameSite: true,
                maxAge: 24 * (60 * (60 * 1000)) // 24h
            })
    
            return response_ok(usecaseResponse.id,usecaseResponse.token);
        } catch (error) {
            console.error("Erreur lors de `LoginRouter `",error);
            throw error;
        }
    }
}

export default LoginUserRouter;