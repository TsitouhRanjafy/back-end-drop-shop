import { IUser } from "../../core";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { env } from "../../interfaces";

class TokenService {

    generer(user: Pick<IUser,"id" | "email">): string {
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