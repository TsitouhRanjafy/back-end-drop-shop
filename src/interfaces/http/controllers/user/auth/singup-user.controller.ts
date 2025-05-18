import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import env from "../../../../config/env";
import {  IHttpResponse, IUser, SignupUserUseCase } from "../../../../../domain";
import { ControllerError } from "../../../../error/controllers.error";


class SignupUserController {
    constructor(private signupUseCase: SignupUserUseCase){}

    async handler(req: Request,res: Response): Promise<IHttpResponse<{message: string}> | IHttpResponse<{id: number,token: string}>> {
        const user: Omit<IUser,"id"> = req.body as Omit<IUser,"id">;

        try {
            const usecaseResponse: {id: number,token: string} | null = await this.signupUseCase.exec(user);
            if (!usecaseResponse) return {body: { message: "bad request"}, statusCode: StatusCodes.BAD_REQUEST};

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
                statusCode: StatusCodes.CREATED
            };
        } catch (error) {
            throw new ControllerError("SignupUserController ",error);
        }
    }
}

export default SignupUserController;