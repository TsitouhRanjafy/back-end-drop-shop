import { Router } from "express";

import { AuthUserUsecase, LoadAllUserUsecase, LoginUserUseCase, SignupUserUseCase } from "../../../domain";
import { LoadUserRepository, SaveUserReposiroty, TokenService } from "../../../infrastructure";
import AuthUserController from "../controllers/user/auth/auth-user.controller";
import { authRouter } from "./user/auth/auth-user.router";
import { loginUserRouter } from "./user/auth/login-user.router";
import { signupUserRouter } from "./user/auth/singup-user.router";
import LoginUserController from "../controllers/user/auth/login-user.controller";
import HashageService from "../../../infrastructure/services/hashage.service";
import SignupUserController from "../controllers/user/auth/singup-user.controller";
import LoadAllUserController from "../controllers/user/load/load-all-user.controller";
import { loadAllUserRouter } from "./user/load/load-all-user.router";

const router = Router();

const tokenService = new TokenService();
const hashageService = new HashageService();

const loadUserRepository = new LoadUserRepository();
const saveUserRepository = new SaveUserReposiroty();

const authUserUsecase = new AuthUserUsecase(tokenService);
const loginUserUsecase = new LoginUserUseCase(tokenService, hashageService, loadUserRepository);
const signupUserUsecase = new SignupUserUseCase(tokenService, hashageService, loadUserRepository, saveUserRepository);
const loadAllUserUsecase = new LoadAllUserUsecase(loadUserRepository);

const authUserController = new AuthUserController(authUserUsecase);
const loginUserController = new LoginUserController(loginUserUsecase);
const signupUserController = new SignupUserController(signupUserUsecase);
const loadAllUserController = new LoadAllUserController(loadAllUserUsecase);

authRouter(router, authUserController);
loginUserRouter(router, loginUserController);
signupUserRouter(router, signupUserController);
loadAllUserRouter(router,loadAllUserController);

export default router;