import IUser from "./entities/user.type";
// import { ILoadAdminRepository, ISaveAdminRepository } from "./repositories/admin/admin-repository.interface";
import ISaveUserRepository from "./repositories/user/save-user-repository.interface";
import ILoadUserRepository from "./repositories/user/load-user-repository.interface";
import { ITokenService } from "./services/tokenSerivce.interface";
import { IHashageService } from "./services/hashageService.interface";
import { IHttpResponse } from "./http/http.interface";
import IPost from "./entities/post.type";
import { ISavePostRepository } from "./repositories/post/save-post-repository.interface";

import AuthUserUsecase from "./usecases/user/authentification/auth-user.usecase";
import SignupUserUseCase from "./usecases/user/authentification/signup-user.usercase";
import LoginUserUseCase from "./usecases/user/authentification/login-user.usecase";
import LoadAllUserUsecase from "./usecases/user/load/load-all-user.usecase";
import AddNewPostUsecase from "./usecases/post/save/add-new-post.usecase";


export {
    IUser,
    // ILoadAdminRepository,
    // ISaveAdminRepository,
    ISaveUserRepository,
    ILoadUserRepository,
    ITokenService,
    IHashageService,
    IHttpResponse,
    IPost,
    ISavePostRepository,
    

    AuthUserUsecase,
    LoginUserUseCase,
    SignupUserUseCase,
    LoadAllUserUsecase,
    AddNewPostUsecase
}