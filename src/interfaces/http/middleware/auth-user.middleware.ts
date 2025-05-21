import { Request, Response, NextFunction } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { TokenService } from "../../../infrastructure";
import { ITokenDecoded } from "../../../domain";

export const authMiddlware = (req: Request, res: Response, next: NextFunction) => {
    const authHeaders = req.headers["authorization"];
    if (!authHeaders?.split(' ')[1]) {
        res.status(StatusCodes.UNAUTHORIZED).send({message: ReasonPhrases.UNAUTHORIZED + "user"});
        return;
    }

    const tokenService = new TokenService();
    const isVerified: ITokenDecoded | null = tokenService.verify(authHeaders?.split(' ')[1]);
    if (!isVerified) {
        res.status(StatusCodes.UNAUTHORIZED).send({message: ReasonPhrases.UNAUTHORIZED + "user"});
        return;
    } 
    req.query.userId = isVerified.id.toString();
    next()
}


