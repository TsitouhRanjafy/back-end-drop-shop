import { Request, Response, NextFunction } from "express";

export const authMiddlware = (req: Request, res: Response, next: NextFunction) => {
    console.log("middlware ok");
    next()
}


