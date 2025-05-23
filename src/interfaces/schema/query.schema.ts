import { checkSchema } from "express-validator";

const reactionSchemaBody = checkSchema({ // <= à corriger, use query in place of body, delete role (id_user is a primary key)
    id_post: {
        isInt: {
            errorMessage: "id_post must be a integer",
            options: { min: 0 }
        },
        toInt: true
    }
},["query"])

const idUserSchemaQuery = checkSchema({
    id_user: {
        isInt: {
            errorMessage: "id_user must be a integer",
            options: { min: 0 }
        },
        toInt: true
    }
})

export {
    reactionSchemaBody,
    idUserSchemaQuery
}