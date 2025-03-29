import bcrypt from "bcrypt"

class HashageService {

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
}

export default HashageService