import { CustomHttpResponse, IAdmin, IAuthUsecaseResponse, SignupAdminUseCase } from "../../../core";
import { Request, Response } from "express";
import { response_not_ok, response_ok } from "../../helpers/custome-reponse.reponse";
import env from "../../config/env";

class SignupAdminRouter {
    constructor(private signupUseCase: SignupAdminUseCase){}

    async handle(req: Request,res: Response): Promise<CustomHttpResponse> {
        const admin: Omit<IAdmin,"id"> = req.body as Omit<IAdmin,"id"> ;

        try {
            const usecaseResponse: IAuthUsecaseResponse | null = await this.signupUseCase.execute(admin);
            if (!usecaseResponse) return response_not_ok('try to change email or tel');

            res.cookie(env.token_secret_key,usecaseResponse.token,{
                httpOnly: true,
                sameSite: true,
                maxAge: 24 * (60 * (60 * 1000)) // 24h
            })

            return response_ok(usecaseResponse.id,usecaseResponse.token);
        } catch (error) {
            console.error("Erreur lors du `SignupAdminRouter` handle",error);
            throw error;
        }
    }
}

export default SignupAdminRouter;