import { Request } from "express";
import { IHttpResponse, IPost, LoadProductByCountryUsecase} from "../../../../../domain";
import { StatusCodes } from "http-status-codes";
import { ControllerError } from "../../../../error/controllers.error";

export default class LoadProductByCountryController {
    constructor(
        private loadProductByCountryUsecase: LoadProductByCountryUsecase
    ){}

    async handle(req: Request): Promise<IHttpResponse<Omit<IPost, "type" | "create_at" | "stock">[] | { message: string; }>>{
        const { country } = req.params;
        try {
            const products: Omit<IPost, "type" | "create_at" | "stock">[] | null = await this.loadProductByCountryUsecase.exec(country);
            return {
                body: products ? products : { message: "no user add a product in your country" },
                statusCode: StatusCodes.OK
            }
        } catch (error) {
            throw new ControllerError("LoadProductByCountryController",error);
        }
    }
}