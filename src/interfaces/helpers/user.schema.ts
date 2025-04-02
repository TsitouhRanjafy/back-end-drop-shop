import { checkSchema } from "express-validator";

const userSignupSchema = checkSchema({
    email: {
        errorMessage: 'Invalid email',
        isEmail: true,
        isEmpty: { negated: true,bail: true }
    },
    password: {
        errorMessage: "Invalid password",
        isStrongPassword: true,
        isEmpty: { negated: true,bail: true },
        isLength: {
            options: { min: 8, max: 255 }
        }
    },
    firstname: {
        errorMessage: "Invalid firstname",
        isLength: {
            options: { min: 3,max: 255 }
        },
        isEmpty: { negated: true, bail: true }
    },
    lastname: {
        errorMessage: "Invalid lastname",
        isLength: {
            options: { min: 3, max: 255 }
        },
        isEmpty: { negated: true, bail: true }
    },
    tel: {
        errorMessage: "Invalid tel",
        isMobilePhone: {
            options: ['any',{ strictMode: true }]
        },
        isEmpty: { negated: true, bail: true }
    },
    pays: {
        errorMessage: "Invalid pays",
        isLength: {
            options: { min: 3, max: 255 }
        },
        isEmpty: { negated: true, bail: true }
    },
    adress: {
        errorMessage: "Invalid adress",
        isLength: {
            options: { min: 3, max: 255 }
        },
        isEmpty: { negated: true, bail: true }
    },
    code_postal: {
        errorMessage: "Invalid code postal",
        isLength: {
            options: { min: 3, max: 255 }
        },
        optional: true
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
    }
},['body'])


const userLoginSchema = checkSchema({
    email: {
        errorMessage: 'Invalid email',
        isEmail: true,
        isEmpty: { negated: true,bail: true }
    },
    password: {
        errorMessage: "Invalid password",
        isStrongPassword: true,
        isEmpty: { negated: true,bail: true },
        isLength: {
            options: { min: 8, max: 255 }
        }
    }
})

export {
    userLoginSchema,
    userSignupSchema
}