import { Router } from "express";

import { AddNewPostUsecase, AuthUserUsecase, CommentPostUsecase, LikeInlikePostUsecase, LoadAllUserUsecase, LoadProductByCountryUsecase, LoadPostUsecase, LoginUserUseCase, SignupUserUseCase, LoadUserByIdUsecase, LoadAllCommentUsecase } from "../../../domain";
import { ActionReactionRepository, AddPostRepository, LoadCommentRepository, LoadPostRepository, LoadReactionRepository, LoadUserRepository, SaveCommentRepository, SaveReactionRepository, SaveUserReposiroty, TokenService, TransformService } from "../../../infrastructure";

import AuthUserController from "../controllers/user/auth/auth-user.controller";
import LoginUserController from "../controllers/user/auth/login-user.controller";
import SignupUserController from "../controllers/user/auth/singup-user.controller";
import LoadAllUserController from "../controllers/user/load/load-all-user.controller";
import AddNewPostController from "../controllers/post/save/add-new-post.controller";
import LoadPostController from "../controllers/post/load/load-post.controller";
import LikeInlikePostController from "../controllers/post/action/like-inlike-post.controller";
import LoadLocalProductController from "../controllers/post/load/load-product-by-country.controller";
import CommentPostController from "../controllers/post/action/comment-post.controller";

import HashageService from "../../../infrastructure/services/hashage.service";

import { authRouter } from "./user/auth/auth-user.router";
import { loginUserRouter } from "./user/auth/login-user.router";
import { signupUserRouter } from "./user/auth/singup-user.router";
import { loadAllUserRouter } from "./user/load/load-all-user.router";
import { addNewPostRouter } from "./post/save/add-new-post.router";
import { loadPostRouter } from "./post/load/load-post.router";
import { likeInLikePostRouter } from "./post/action/like-inlike-post.router";
import { commentPostRouter } from "./post/action/comment-post.router";
import { loadLocalProductRouter } from "./post/load/load-product-by-country.router";
import LoadUserByIdController from "../controllers/user/load/load-user-by-id.controller";
import { loadUserByIdRouter } from "./user/load/load-user-by-id.router";
import { loadAllCommentRouter } from "./comment/load-all-comment.router";
import LoadAllCommentController from "../controllers/comment/load-all-comment.controller";

const router = Router();

// service
const tokenService = new TokenService();
const hashageService = new HashageService();
const transformService = new TransformService();

// Repository
const loadUserRepository = new LoadUserRepository();
const saveUserRepository = new SaveUserReposiroty();
const addPostRepository = new AddPostRepository();
const loadPostRepository = new LoadPostRepository();
const actionReactionReapository = new ActionReactionRepository();
const saveReactionRepository = new SaveReactionRepository();
const loadReactionRepository = new LoadReactionRepository();
const saveCommentRepository = new SaveCommentRepository();
const loadCommentRepository = new LoadCommentRepository();
// const loadCommentRepository = new LoadCommentRepository();

// Usecase
const authUserUsecase = new AuthUserUsecase(tokenService);
const loginUserUsecase = new LoginUserUseCase(tokenService, hashageService, loadUserRepository);
const signupUserUsecase = new SignupUserUseCase(tokenService, hashageService, loadUserRepository, saveUserRepository,transformService);
const loadAllUserUsecase = new LoadAllUserUsecase(loadUserRepository);
const addNewPostUsecase = new AddNewPostUsecase(addPostRepository,loadUserRepository);
const loadPostUsecase = new LoadPostUsecase(loadPostRepository);
const likeInlikePostUsecase = new LikeInlikePostUsecase(saveReactionRepository,loadReactionRepository,actionReactionReapository,loadUserRepository,loadPostRepository);
const commentPostUsecase = new CommentPostUsecase(saveCommentRepository);
const loadProductByCountryUsecase = new LoadProductByCountryUsecase(loadPostRepository,transformService);
const loadUserByIdUsecase = new LoadUserByIdUsecase(loadUserRepository);
const loadAllCommentUsecase = new LoadAllCommentUsecase(loadCommentRepository);

// Controller
const authUserController = new AuthUserController(authUserUsecase);
const loginUserController = new LoginUserController(loginUserUsecase);
const signupUserController = new SignupUserController(signupUserUsecase);
const loadAllUserController = new LoadAllUserController(loadAllUserUsecase);
const addNewPostController = new AddNewPostController(addNewPostUsecase);
const loadPostController = new LoadPostController(loadPostUsecase);
const likeInlikePostController = new LikeInlikePostController(likeInlikePostUsecase);
const commentPostController = new CommentPostController(commentPostUsecase);
const loadLocalProductController = new LoadLocalProductController(loadProductByCountryUsecase);
const loadUserByIdController = new LoadUserByIdController(loadUserByIdUsecase);
const loadAllCommentController = new LoadAllCommentController(loadAllCommentUsecase);

authRouter(router, authUserController);
loginUserRouter(router, loginUserController);
signupUserRouter(router, signupUserController);
loadAllUserRouter(router,loadAllUserController);
addNewPostRouter(router,addNewPostController);
loadPostRouter(router,loadPostController);
likeInLikePostRouter(router,likeInlikePostController);
commentPostRouter(router,commentPostController);
loadLocalProductRouter(router,loadLocalProductController);
loadUserByIdRouter(router,loadUserByIdController);
loadAllCommentRouter(router,loadAllCommentController);

export default router;