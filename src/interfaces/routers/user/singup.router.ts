import { CustomHttpResponse, IAuthUsecaseResponse, IUser, SignupUserUseCase } from "../../../core";
import { Request, Response } from "express";
import env from "../../config/env";
import { response_not_ok, response_ok } from "../../helpers/custome-reponse.reponse";


class SignupUserRouter {
    constructor(private signupUseCase: SignupUserUseCase){}

    async handler(req: Request,res: Response): Promise<CustomHttpResponse> {
        const user: Omit<IUser,"id"> = req.body as Omit<IUser,"id">;

        try {
            const usecaseResponse: IAuthUsecaseResponse | null = await this.signupUseCase.exec(user);
            if (!usecaseResponse) return response_not_ok('try to change email or password');

            res.cookie(env.token_secret_key,usecaseResponse.token,{
                httpOnly: true,
                sameSite: true,
                maxAge: 24 * (60 * (60 * 1000)) // 24h
            })

            return response_ok(usecaseResponse.id,usecaseResponse.token);
        } catch (error) {
            console.error("Erreur lors du `SingupRouter` handle",error);
            throw error;
        }
    }
}

export default SignupUserRouter;