import endpoints from "../endpoints";
import { Request, Response } from "express";
import { loginAdminRouter, router } from "../setup";
import { signupAdminRouter } from "../setup";
import { adminLoginSchema, adminSignupSchema } from "../../helpers/admin.schema";
import { validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";


router.post(
    endpoints.signup_admin,
    adminSignupSchema,
    async (req: Request, res: Response) => {
        const resultValidation = validationResult(req);
        if (!resultValidation.isEmpty()){
            res.status(StatusCodes.BAD_REQUEST).send({ message: resultValidation.array()[0].msg as string })
            return;
        }

        const response = await signupAdminRouter.handle(req,res);
        res.status(response.statusCode).send(response.body);
    }
)

router.post(
    endpoints.login_admin,
    adminLoginSchema,
    async (req: Request,res: Response) => {
        const resultValidation = validationResult(req);
        if (!resultValidation.isEmpty()){
            res.status(StatusCodes.BAD_REQUEST).send({ message: resultValidation.array()[0].msg as string })
            return;
        }

        const response = await loginAdminRouter.handle(req,res);
        res.status(response.statusCode).send(response.body);
    }
)

export default router;