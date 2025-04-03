import SignupRouter from "../routes/user/singup.router";
import { TokenService, Hashage, LoadUserRepository, SaveUserReposiroty } from "../../frameworks";
import { AuthUserUsecase, LoginUserUseCase, SignupUserUseCase } from "../../core";
import LoginRouter from "../routes/user/login.router";
import HashageService from "../../frameworks/services/hashage.service";
import AuthUserRouter from "../routes/user/auth.router";

const signupRouter = new SignupRouter(new SignupUserUseCase(new TokenService,new Hashage,new LoadUserRepository,new SaveUserReposiroty))
const loginRouter = new LoginRouter(new LoginUserUseCase(new TokenService,new HashageService,new LoadUserRepository))
const authRouter = new AuthUserRouter(new AuthUserUsecase(new TokenService))

export {
    signupRouter,
    loginRouter,
    authRouter
}
