import bcrypt from "bcrypt"
import { IHashageService } from "../../core/domain";

class HashageService implements IHashageService {

    async hash(password: string): Promise<string> {
        return new Promise((resolve,reject) => {
            bcrypt.hash(password,10,(err,hash) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(hash)
            })
        })
    }

    async compare(password: string, hash: string): Promise<boolean> {
        return new Promise((resolve,reject) => {
            bcrypt.compare(password,hash,(err,result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            })
        })
    }
}

export default HashageService