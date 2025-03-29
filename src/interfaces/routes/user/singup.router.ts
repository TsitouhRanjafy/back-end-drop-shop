import { StatusCodes } from "http-status-codes";
import { IHttpResponse, IUser, SignupUserUseCase } from "../../../core";
import { Request, Response } from "express";

class SignupRouter {
    constructor(private signupUseCase: SignupUserUseCase){}

    async handler(req: Request,res: Response): Promise<IHttpResponse<{ id: number, token: string }> | IHttpResponse<{message: string}>> {
        const user: Omit<IUser,"id"> = req.body;

        try {
            if (!user.email || !user.firstname || !user.lastname || !user.password || !user.pays || !user.role || !user.tel || !user.adress){
                return {
                    body: {
                        message: "all propriety is required"
                    },
                    statusCode: StatusCodes.BAD_REQUEST
                }
            }
            console.log(user);
            return {
                body: {
                    id: 1,
                    token: "accesToken"
                },
                statusCode: StatusCodes.OK
            };
        } catch (error) {
            console.log("Erreur lors du `SingupRouter` handle",error);
            return {
                body: {
                    message: ""
                },
                statusCode: StatusCodes.INTERNAL_SERVER_ERROR
            };
        }
    }
}

export default SignupRouter;