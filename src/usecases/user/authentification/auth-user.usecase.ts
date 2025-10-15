import { ITokenDecoded, ITokenService } from "../../../domain";


class AuthUserUsecase {
    constructor(
        private tokenService: ITokenService
    ){}

    execute(token: string): ITokenDecoded | null{
        const isVerified: ITokenDecoded | null = this.tokenService.verify(token);
        
        if (!isVerified) return null;
        const user: ITokenDecoded = isVerified;
        return {
            id: user.id,
            role: user.role,
            email: user.email
        };
    }
}

export default AuthUserUsecase;