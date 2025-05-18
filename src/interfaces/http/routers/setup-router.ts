import { Router } from "express";

import { AuthUserUsecase, LoginUserUseCase, SignupUserUseCase } from "../../../domain";
import { LoadUserRepository, SaveUserReposiroty, TokenService } from "../../../infrastructure";
import AuthUserController from "../controllers/user/auth-user.controller";
import { authRouter } from "./user/auth/auth-user.router";
import { loginUserRouter } from "./user/auth/login-user.router";
import { signupUserRouter } from "./user/auth/singup-user.router";
import LoginUserController from "../controllers/user/login-user.controller";
import HashageService from "../../../infrastructure/services/hashage.service";
import SignupUserController from "../controllers/user/singup-user.controller";

const router = Router();

const tokenService = new TokenService();
const hashageService = new HashageService();

const loadUserRepository = new LoadUserRepository();
const saveUserRepository = new SaveUserReposiroty();

const authUserUsecase = new AuthUserUsecase(tokenService);
const loginUserUsecase = new LoginUserUseCase(tokenService, hashageService, loadUserRepository);
const signupUserUsecase = new SignupUserUseCase(tokenService, hashageService, loadUserRepository, saveUserRepository);

const authUserController = new AuthUserController(authUserUsecase);
const loginUserController = new LoginUserController(loginUserUsecase);
const signupUserController = new SignupUserController(signupUserUsecase);

authRouter(router, authUserController);
loginUserRouter(router, loginUserController);
signupUserRouter(router, signupUserController);

export default router;