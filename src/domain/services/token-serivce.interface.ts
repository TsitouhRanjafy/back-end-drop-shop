import { JwtPayload } from "jsonwebtoken";
import IUser from "../entities/user.interface";

export interface ITokenService {
    generer(user: Pick<IUser,"id" | "email" | "role">): string;
    verify(token: string): JwtPayload | string | null;
}