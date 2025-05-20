import { checkSchema } from "express-validator";

const reactionSchemaBody = checkSchema({ // <= à corriger, use query in place of body, delete role (id_user is a primary key)
    id_post: {
        isInt: {
            errorMessage: "id_post must be a integer",
            options: {min: 0 }
        },
        toInt: true
    },
    id_user: {
        isInt: {
            errorMessage: "id_user must be a integer",
            options: {min: 0}
        },
        toInt: true
    },
    role: {
        isIn: {
            errorMessage: "role must be a `SELLER` or `BUYER`",
            options: [["SELLER","BUYER"]]
        },
        toUpperCase: true,
        escape: true,
        trim: true
    }
},["body"])

export {
    reactionSchemaBody,
}