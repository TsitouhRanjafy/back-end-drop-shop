import endpoints from "../endpoints";
import { Request, Response } from "express";
import { loginAdminRouter, router } from "../setup";
import { signupAdminRouter } from "../setup";


router.post(
    endpoints.signup_admin,
    async (req: Request, res: Response) => {
        const response = await signupAdminRouter.handle(req,res);
        res.status(response.statusCode).send(response.body);
    }
)

router.post(
    endpoints.login_admin,
    async (req: Request,res: Response) => {
        const response = await loginAdminRouter.handle(req,res);
        res.status(response.statusCode).send(response.body);
    }
)

export default router;