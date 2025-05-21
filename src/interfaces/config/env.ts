const config = () => {
    if (!process.env.PORT) throw new Error("PORT not defined in environnement");
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL not defined in environnement");
    if (!process.env.JWT_KEY_SECRET) throw new Error("JWT_KEY_SECRET not defined in environnement");
    if (!process.env.TOKEN_KEY_SECRET) throw new Error("TOKEN_KEY_SECRET not defined in environnement");
    if (!process.env.CORS_ORIGIN1) throw new Error("CORS_ORIGIN1 not definied in environnement");
    if (!process.env.CORS_ORIGIN2) throw new Error("CORS_ORIGIN2 not definied in environnement");
    return {
        port: process.env.PORT,
        db_postgre_url: process.env.DATABASE_URL,
        jwt_secret_key: process.env.JWT_KEY_SECRET,
        token_secret_key: process.env.TOKEN_KEY_SECRET,
        cors_origin1: process.env.CORS_ORIGIN1,
        cors_origin2: process.env.CORS_ORIGIN2
    }
}

const env = config();

export default env;