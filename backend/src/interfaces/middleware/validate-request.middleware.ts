import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
                
    if (!errors.isEmpty()){        
        res.status(StatusCodes.BAD_REQUEST).json({ message: errors.array()[0].msg as string || ReasonPhrases.BAD_REQUEST })
        return;
    }

    next();
}