import { TokenService } from "../../../../frameworks";
import { JwtPayload } from "jsonwebtoken";
import IUser from "../../../entities/user.type";


class AuthUserUsecase {
    constructor(
        private tokenService: TokenService
    ){}

    execute(token: string): Pick<IUser,"id" | "email" | "role"> | null{
        const isVerified: JwtPayload | string | null = this.tokenService.verify(token);
        console.log(isVerified);
        
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