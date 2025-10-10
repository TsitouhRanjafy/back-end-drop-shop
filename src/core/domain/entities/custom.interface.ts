import { Role } from "@prisma/client";
import { JwtPayload } from "jsonwebtoken";

export interface ITokenDecoded extends JwtPayload {
    id:number;
    email: string;
    role?: Role;
}