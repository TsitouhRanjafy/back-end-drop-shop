const env = {
    port: process.env.PORT || 4000,
    db_postgre_url: process.env.DATABASE_URL || 'localhost',
    jwt_secret_key: process.env.JWT_KEY_SECRET || 'secret_key',
    token_secret_key: process.env.TOKEN_KEY_SECRET || 'secret_key'
}

export default env;