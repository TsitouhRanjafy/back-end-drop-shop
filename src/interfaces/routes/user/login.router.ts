import { IUser, LoginUserUseCase } from "../../../core";
import { Request, Response } from "express";
import { CustomHttpResponse, response_not_ok, response_ok } from "./singup.router";
import env from "../../config/env";

class LoginRouter {
    constructor(private loginUserUsecase: LoginUserUseCase){}

    async handle(req: Request,res: Response): Promise<CustomHttpResponse>{
        try {
            const user: Pick<IUser,"email" | "password" | "role"> = req.body as Pick<IUser,"email" | "password" | "role"> ;
            const token: string | null = await this.loginUserUsecase.execute(user.email,user.password,user.role);
            if (!token) return response_not_ok('Invalid credentials');
    
            res.cookie(env.token_secret_key,token,{
                httpOnly: true,
                sameSite: true,
                maxAge: 24 * (60 * (60 * 1000)) // 24h
            })
    
            return response_ok(token);
        } catch (error) {
            console.error("Erreur lors de `LoginRouter `",error);
            throw error;
        }
    }
}

export default LoginRouter;