import { CustomHttpResponse, IAdmin, IAuthUsecaseResponse, LoginAdminUseCase } from "../../../core";
import { Request, Response } from "express";
import { response_not_ok, response_ok } from "../../helpers/custome-reponse.reponse";
import env from "../../config/env";

class LoginAdminRouter {
    constructor(private loginAdminUsecase: LoginAdminUseCase){}

    async handle(req: Request,res: Response): Promise<CustomHttpResponse>{
        try {
            const admin: Pick<IAdmin,"email" | "password"> = req.body as Pick<IAdmin,"email" | "password">;
            const usecaseResponse: IAuthUsecaseResponse | null = await this.loginAdminUsecase.execute(admin.email,admin.password);
            if (!usecaseResponse) return response_not_ok('Invalid credentials');
    
            res.cookie(env().token_secret_key,usecaseResponse.token,{
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

export default LoginAdminRouter;