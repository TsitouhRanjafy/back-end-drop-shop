import { Router, Request, Response } from "express";
import endpoints from "../../../../configuration/endpoints.config";
import { countrySchemaInParams } from "../../../schema/params.schema";
import { validateRequest } from "../../../middleware/validate-request.middleware";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { LoadProductByCountryController } from "../../../../controllers";

export const loadLocalProductRouter = (router: Router, loadProductByCountryController: LoadProductByCountryController) => {
    router.get(
        endpoints.loadLocalProduct,
        countrySchemaInParams,
        validateRequest,
        async (req: Request, res: Response) => {
            try {
                const response = await loadProductByCountryController.handle(req);
                res.status(response.statusCode).send(response.body);
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
                throw error;
            }
        }
    )
}