import IUser from "../entities/user.interface";
import { ITokenDecoded } from "../entities/custom.interface";

export interface ITokenService {
    generer(user: Pick<IUser,"id" | "email" | "role">): string;
    verify(token: string): ITokenDecoded | null;
}