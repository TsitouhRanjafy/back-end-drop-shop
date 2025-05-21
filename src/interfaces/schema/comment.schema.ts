import { checkSchema } from "express-validator";

export const commentSchema = checkSchema({
    content: {
        in: ["body"],
        isString: {
            errorMessage: "content must be a string"
        },
        isLength: {
            errorMessage: "content must be either 1 in 65535",
            options: {min:1, max: 65535}
        },
        escape: true,
        trim: true
    },
    id_post: {
        in:["query"],
        isInt: {
            errorMessage: "id_post must be a integer",
            options: {min: 1 }
        },
        toInt: true
    },
    date: {
        in: ["body"],
        isISO8601: {
            errorMessage: "date must be a valid ISO 8601"
        },
        optional: true,
        escape: true,
    }
})

