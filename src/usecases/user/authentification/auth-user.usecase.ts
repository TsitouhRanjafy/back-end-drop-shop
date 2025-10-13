import { JwtPayload } from "jsonwebtoken";
import IUser from "../../../domain/entities/user.interface";
import { ITokenService } from "../../../domain";


class AuthUserUsecase {
    constructor(
        private tokenService: ITokenService
    ){}

    execute(token: string): Pick<IUser,"id" | "email" | "role"> | null{
        const isVerified: JwtPayload | string | null = this.tokenService.verify(token);
        
        if (!isVerified) return null;
        const user: Pick<IUser,"id" | "email" | "role"> = isVerified as Pick<IUser,"id" | "email" | "role">
        return {
            id: user.id,
            role: user.role,
            email: user.email
        };
    }
}

export default AuthUserUsecase;