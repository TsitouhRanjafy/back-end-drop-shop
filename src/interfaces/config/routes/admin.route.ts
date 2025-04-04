import endpoints from "../endpoints";
import { Request, Response } from "express";
import { router } from "../setup";
import { signupAdminRouter } from "../setup";
import { ReasonPhrases, StatusCodes } from "http-status-codes";


router.post(
    endpoints.signup_admin,
    async (req: Request, res: Response) => {
        try {
            const response = await signupAdminRouter.handle(req,res);
            res.status(response.statusCode).send({ message: response.body })
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message: ReasonPhrases.INTERNAL_SERVER_ERROR})
            throw error;
        }
    }
)

export default router;