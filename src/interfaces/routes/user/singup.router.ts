import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { IHttpResponse, IUser, SignupUserUseCase } from "../../../core";
import { Request, Response } from "express";
import env from "../../config/env";



class SignupRouter {
    constructor(private signupUseCase: SignupUserUseCase){}

    async handler(req: Request,res: Response): Promise<CustomHttpResponse> {
        const user: Omit<IUser,"id"> = req.body as Omit<IUser,"id">;

        try {
            if (!user.email || !user.firstname || !user.lastname || !user.password || !user.pays || !user.role || !user.tel || !user.adress){
                return response_not_ok('all propriety required');
            }
            const token = await this.signupUseCase.exec(user);
            if (!token) return response_not_ok('user already exist, change email or tel');

            res.cookie(env.token_secret_key,token,{
                httpOnly: true,
                sameSite: true,
                maxAge: 24 * (60 * (60 * 1000)) // 24h
            })

            return response_ok(token);
        } catch (error) {
            console.log("Erreur lors du `SingupRouter` handle",error);
            return response_not_ok(ReasonPhrases.INTERNAL_SERVER_ERROR,StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }
}

type CustomHttpResponse = IHttpResponse<{ token: string }> | IHttpResponse<{message: string}>

const response_ok = (token: string): CustomHttpResponse => {
    return {
        body: { token },
        statusCode: StatusCodes.BAD_REQUEST
    }
}

const response_not_ok = (message: string,statusCode: StatusCodes = StatusCodes.BAD_REQUEST): CustomHttpResponse => {
    return {
        body: { message },
        statusCode: statusCode
    }
}

export default SignupRouter;