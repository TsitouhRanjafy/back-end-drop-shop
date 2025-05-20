import { checkSchema } from "express-validator";

const roleSchemaParams = checkSchema({
    role: {
        errorMessage: "Invalid role",
        isLength: {
            options: { min: 5, max: 6 }
        },
        isIn: {
            options: [["SELLER","BUYER","ADMIN"]]
        },
        isEmpty: { negated: true },
        escape: true,
        trim: true,
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
    roleSchemaParams,
    countPostSchemaParams,
}