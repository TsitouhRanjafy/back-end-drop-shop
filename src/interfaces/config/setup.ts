import SignupRouter from "../routes/user/singup.router";
import { TokenService, Hashage, LoadUserReposiroty, SaveUserReposiroty } from "../../frameworks";
import { SignupUserUseCase } from "../../core";

const signupRouter = new SignupRouter(new SignupUserUseCase(new TokenService,new Hashage,new LoadUserReposiroty,new SaveUserReposiroty))

export {
    signupRouter
}
