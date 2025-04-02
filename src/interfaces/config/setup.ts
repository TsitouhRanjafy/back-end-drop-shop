import SignupRouter from "../routes/user/singup.router";
import { TokenService, Hashage, LoadUserRepository, SaveUserReposiroty } from "../../frameworks";
import { SignupUserUseCase } from "../../core";

const signupRouter = new SignupRouter(new SignupUserUseCase(new TokenService,new Hashage,new LoadUserRepository,new SaveUserReposiroty))

export {
    signupRouter
}
