import { checkSchema } from "express-validator";

const newPostSchema = checkSchema({
    type: {
        in: ["body"],
        isIn: {
            options: [["ARTICLE","SIMPLE_POST"]],
            errorMessage: "Type must be either 'ARTICLE' or 'SIMPLE_POST'"
        },
        notEmpty: {
            errorMessage: "Type is required in body",
        }
    },
    description: {
        in: ["body"],
        isString: {
            errorMessage: "Description must be a string"
        },
        notEmpty: {
            errorMessage: "Description is required in body"
        },
        trim: true,
        escape: true
    },
    unit_price: {
        in: ["body"],
        optional: true,
        isFloat: {
            errorMessage: "unit_price must be a float",
            options: { min: 0 }
        },
        toFloat: true,
    },
    stock: {
        in: ["body"],
        optional: true,
        isInt: {
            errorMessage: "stock must be a integer",
            options: {min: 1}
        },
        toInt: true
    },
    image_url: {
        in: ["body"],
        optional: true,
        isURL: {
            errorMessage: "image_url must be a url"
        },
        trim: true,
        escape: true
    }
},)

export default newPostSchema;