import { checkSchema } from "express-validator";

const reactionSchemaBody = checkSchema({
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
        escape: true,
        trim: true
    }
},["body"])

export {
    reactionSchemaBody,
}