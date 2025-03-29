import bcrypt from "bcrypt"

const hashPassword = (password: string): Promise<string> => {
    let passwordHashed: string | null = null;
    bcrypt.hash(password,10,(err,hash) => {
        if (!err){
            throw new Error("Erreur lors d'u hashage `hashPassword`")
        }
        passwordHashed = hash;
    })
    if (!passwordHashed) throw new Error("Erreur lors d'u hashage `hashPassword`");
    return passwordHashed;
}

export {
    hashPassword
}