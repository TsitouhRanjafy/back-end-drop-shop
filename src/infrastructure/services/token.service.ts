import jwt, { JwtPayload } from 'jsonwebtoken'
import { env } from "../../interfaces";
import { ITokenService, IUser } from "../../domain";

class TokenService implements ITokenService {

    generer(user: Pick<IUser,"id" | "email" | "role">): string {
        const token = jwt.sign(
            user,
            env.jwt_secret_key,
            {
                expiresIn: (24 * (60 *(60 * 1000))) // 24 heurs
            }
        )
        return token;
    }

    verify(token: string): JwtPayload | string | null{
        try {
            const decode: JwtPayload | string = jwt.verify(token,env.jwt_secret_key);
            return decode;
        } catch (error) {
            if (error instanceof jwt.JsonWebTokenError) return null;
            throw error;
        }
    }
}

export default TokenService