import IUser from "./entities/user.type";
import { ITokenService } from "./services/tokenSerivce.interface";
import { IHashageService } from "./services/hashageService.interface";
import { IHttpResponse } from "./http/http.interface";

import { IPost } from "./entities/post.type";
import { IReaction } from "./entities/reaction.type";
import { IComment } from "./entities/comment.type";

// import { ILoadAdminRepository, ISaveAdminRepository } from "./repositories/admin/admin-repository.interface";
import ISaveUserRepository from "./repositories/user/save-user-repository.interface";
import ILoadUserRepository from "./repositories/user/load-user-repository.interface";
import { ISavePostRepository } from "./repositories/post/save-post-repository.interface";
import { ILoadPostRepository } from "./repositories/post/load-post-repository.interface";
import { ILoadReactionRepository } from "./repositories/reaction/load-reaction-repository.interface";
import { ISaveReactionRepository } from "./repositories/reaction/save-reaction-repository.interface";
import { IActionReactionRespository } from "./repositories/reaction/action-reaction-repository.interface";
import { ISaveCommentRepository } from "./repositories/comment/save-comment-repository.interface";

import AuthUserUsecase from "./usecases/user/authentification/auth-user.usecase";
import SignupUserUseCase from "./usecases/user/authentification/signup-user.usercase";
import LoginUserUseCase from "./usecases/user/authentification/login-user.usecase";
import LoadAllUserUsecase from "./usecases/user/load/load-all-user.usecase";
import AddNewPostUsecase from "./usecases/post/save/add-new-post.usecase";
import LoadPostUsecase from "./usecases/post/load/load-post.usecase";
import LikeInlikePostUsecase from "./usecases/post/action/like-Inlike-post.usecase";
import CommentPostUsecase from "./usecases/post/action/comment-post.usecase";


export {
    IUser,
    // ILoadAdminRepository,
    // ISaveAdminRepository,
    ITokenService,
    IHashageService,
    IHttpResponse,
    
    IPost,
    IReaction,
    IComment,

    ILoadUserRepository,
    ILoadPostRepository,
    ISavePostRepository,
    ILoadReactionRepository,
    ISaveUserRepository,
    ISaveReactionRepository,
    IActionReactionRespository,
    ISaveCommentRepository,

    AuthUserUsecase,
    LoginUserUseCase,
    SignupUserUseCase,
    LoadAllUserUsecase,
    AddNewPostUsecase,
    LoadPostUsecase,
    LikeInlikePostUsecase,
    CommentPostUsecase
}