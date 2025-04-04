import { TokenService } from "../../../../frameworks";
import { JwtPayload } from "jsonwebtoken";
import IUser from "../../../entities/type/user.type";
import { IAuthUsecaseResponse } from "../../../entities/type/type";


class AuthUserUsecase {
    constructor(
        private tokenService: TokenService
    ){}

    execute(token: string): IAuthUsecaseResponse | null{
        const isVerified: JwtPayload | string | null = this.tokenService.verify(token);
        if (!isVerified) return null;
        const user: Pick<IUser,"id" | "email"> = isVerified as Pick<IUser,"id" | "email">
        return {
            id: user.id,
            token: token
        };
    }
}

export default AuthUserUsecase;