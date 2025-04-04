import SignupRouter from "./routers/user/singup.router";
import app from "./config/app";
import env from "./config/env";
import LoginRouter from "./routers/user/login.router";
import { userLoginSchema, userSignupSchema } from "./helpers/user.schema";
import AuthUserRouter from "./routers/user/auth.router";
import LoginAdminRouter from "./routers/admin/login.router";
import SignupAdminRouter from "./routers/admin/signup.router";

export {
    SignupRouter,
    LoginRouter,
    AuthUserRouter,
    LoginAdminRouter ,
    SignupAdminRouter,
    app,
    env,
    userLoginSchema,
    userSignupSchema
}
