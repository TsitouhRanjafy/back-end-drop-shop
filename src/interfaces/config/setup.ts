import SignupRouter from "../routers/user/singup.router";
import { TokenService, Hashage, LoadUserRepository, SaveUserReposiroty, LoadAdminRepository, SaveAdminReposiroty } from "../../frameworks";
import { AuthUserUsecase, LoginAdminUseCase, LoginUserUseCase, SignupAdminUseCase, SignupUserUseCase } from "../../core";
import LoginRouter from "../routers/user/login.router";
import HashageService from "../../frameworks/services/hashage.service";
import AuthUserRouter from "../routers/user/auth.router";
import LoginAdminRouter from "../routers/admin/login.router";
import SignupAdminRouter from "../routers/admin/signup.router";
import express, { Application, Router } from "express"

const router: Router = express.Router();
const app: Application = express();

const signupRouter = new SignupRouter(new SignupUserUseCase(new TokenService,new Hashage,new LoadUserRepository,new SaveUserReposiroty))
const loginRouter = new LoginRouter(new LoginUserUseCase(new TokenService,new HashageService,new LoadUserRepository))
const authRouter = new AuthUserRouter(new AuthUserUsecase(new TokenService))

const loginAdminRouter = new LoginAdminRouter(new LoginAdminUseCase(new TokenService,new HashageService,new LoadAdminRepository))
const signupAdminRouter = new SignupAdminRouter(new SignupAdminUseCase(new TokenService,new HashageService,new LoadAdminRepository,new SaveAdminReposiroty))

export {
    router,
    app,
    signupRouter,
    loginRouter,
    authRouter,
    loginAdminRouter,
    signupAdminRouter
}
