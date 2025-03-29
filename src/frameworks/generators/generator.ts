import { IUser } from "../../core";
import jwt from 'jsonwebtoken'

const JWT_KEY_SECRET = process.env.JWT_KEY_SECRET;

if (!JWT_KEY_SECRET){
    throw new Error(" JWT_KEY_SECRET n'est pas définie dans l'environnemment variable");
}

class Generator {
    genererToken(user: Pick<IUser,"email" | "password">): string {
        if (!JWT_KEY_SECRET){
            throw new Error(" JWT_KEY_SECRET n'est pas définie dans l'environnemment variable");
        }
        const token = jwt.sign(
            user,
            JWT_KEY_SECRET,
            {
                expiresIn: (24 * (60 *(60 * 1000))) // 24 heurs
            }
        )
        return token;
    }

}

export default Generator