import { checkSchema } from "express-validator";

const userSignupSchema = checkSchema({
    firstname: {
        errorMessage: "Invalid firstname",
        isLength: {
            options: { min: 3,max: 255 }
        },
        isEmpty: { negated: true, bail: true },
        escape: true
    },
    lastname: {
        errorMessage: "Invalid lastname",
        isLength: {
            options: { min: 3, max: 255 }
        },
        isEmpty: { negated: true, bail: true },
        escape: true
    },
    email: {
        errorMessage: 'Invalid email',
        isEmail: true,
        isEmpty: { negated: true,bail: true },
        escape: true,
        trim: true
    },
    password: {
        errorMessage: "Invalid password",
        isStrongPassword: true,
        isEmpty: { negated: true,bail: true },
        isLength: {
            options: { min: 8, max: 255 }
        },
        escape: true
    },
    tel: {
        errorMessage: "Invalid tel",
        isMobilePhone: {
            options: ['any',{ strictMode: true }]
        },
        isEmpty: { negated: true, bail: true },
        escape: true
    },
    pays: {
        errorMessage: "Invalid pays",
        isLength: {
            options: { min: 3, max: 255 }
        },
        isEmpty: { negated: true, bail: true },
        escape: true
    },
    role: {
        errorMessage: "Invalid role",
        isLength: {
            options: { min: 5, max: 6 }
        },
        isIn: {
            options: [['SELLER','BUYER','ADMIN']]
        },
        isEmpty: { negated: true }
    },
    product_preference: {
        errorMessage: "Invalid product_preference",
        isString: true,
        optional: true,
        escape: true,
    },
    adress: {
        errorMessage: "Invalid adress",
        isLength: {
            options: { min: 3, max: 255 }
        },
        optional: true,
        escape: true
    },
    profile_url: {
        errorMessage: "Invalid profile_url",
        isURL: {
            options: {
                require_protocol: true,
                protocols: ["http","https"]
            }
        },
        optional: true,
        escape: true

    },
    code_postal: {
        errorMessage: "Invalid code postal",
        isLength: {
            options: { min: 3, max: 255 }
        },
        escape: true,
        optional: true
    },
},['body'])


const userLoginSchema = checkSchema({
    email: {
        errorMessage: 'Invalid email',
        isEmail: true,
        isEmpty: { negated: true,bail: true },
        escape: true
    },
    password: {
        errorMessage: "Invalid password",
        isStrongPassword: true,
        isEmpty: { negated: true,bail: true },
        isLength: {
            options: { min: 8, max: 255 }
        },
        escape: true
    },
    role: {
        errorMessage: "Invalid role",
        isEmpty: { negated: true },
        isIn: {
            options: [["SELLER","BUYER"]]
        },
    }
})

export {
    userLoginSchema,
    userSignupSchema
}