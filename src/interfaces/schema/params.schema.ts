import { checkSchema } from "express-validator";

const requestParamsSchema = checkSchema({
    role: {
        isIn: {
            errorMessage: "Role must be `SELLER` or `BUYER`",
            options: [["SELLER","BUYER","ADMIN"]]
        },
        isEmpty: { negated: true },
        escape: true,
        trim: true,
    },
    skip: {
        isInt: {
            errorMessage: "skip must be a integer",
            options: { min: 0 }
        },
        toInt: true,
        optional: false,
    },
    take: {
        isInt: {
            errorMessage: "take must be a integer",
            options: { min: 0 }
        },
        toInt: true,
        optional: false
    }
},['params'])


const countPostSchemaParams = checkSchema({
    count: {
        isInt: {
            errorMessage: "count param must be a integer",
            options: {min: 1}
        },
        toInt: true,
        escape: true,
    }
},["params"])

export {
    requestParamsSchema,
    countPostSchemaParams,
}