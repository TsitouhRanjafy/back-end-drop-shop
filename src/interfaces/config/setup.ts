import SignupRouter from "../routers/user/singup.router";
import { TokenService, Hashage, LoadUserRepository, SaveUserReposiroty } from "../../frameworks";
import LoginRouter from "../routers/user/login.router";
import HashageService from "../../frameworks/services/hashage.service";
import AuthUserRouter from "../routers/user/auth.router";
import express, { Application, Router } from "express"
import { AuthUserUsecase, LoginUserUseCase, SignupUserUseCase } from "../../core";

const router: Router = express.Router();
const app: Application = express();

const signupRouter = new SignupRouter(new SignupUserUseCase(new TokenService,new Hashage,new LoadUserRepository,new SaveUserReposiroty))
const loginRouter = new LoginRouter(new LoginUserUseCase(new TokenService,new HashageService,new LoadUserRepository))
const authRouter = new AuthUserRouter(new AuthUserUsecase(new TokenService))

export {
    router,
    app,
    signupRouter,
    loginRouter,
    authRouter,
}
