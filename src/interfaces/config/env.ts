const env = () => {
    if (!process.env.PORT) throw new Error("PORT not defined in environnement");
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL not defined in environnement");
    if (!process.env.JWT_KEY_SECRET) throw new Error("JWT_KEY_SECRET not defined in environnement");
    if (!process.env.TOKEN_KEY_SECRET) throw new Error("TOKEN_KEY_SECRET not defined in environnement");
    return {
        port: process.env.PORT || 4000,
        db_postgre_url: process.env.DATABASE_URL,
        jwt_secret_key: process.env.JWT_KEY_SECRET || 'secret_key',
        token_secret_key: process.env.TOKEN_KEY_SECRET || 'secret_key'
    }
}

export default env;