import IUser  from "./entities/type/user.type";
import ISaveUserRepository from "./repositories/user/save-user-repository.interface";
import ILoadUserRepository from "./repositories/user/load-user-repository.interface";
import { CustomHttpResponse, IAuthUsecaseResponse, IHttpRequest, IHttpResponse } from "./entities/type/type";
import LoginUserUseCase from "./usecases/user/authentification/login-user.usecase";
import SignupUserUseCase from "./usecases/user/authentification/signup-user.usercase";
import AuthUserUsecase from "./usecases/user/authentification/auth-user.usecase";
import IAdmin from "./entities/type/admin.type";
import SignupAdminUseCase from "./usecases/admin/authentification/signup-admin.usecase";
import LoginAdminUseCase from "./usecases/admin/authentification/login-user.usecase";
import { ISaveAdminRepository, ILoadAdminRepository } from "./repositories/admin/admin-repository.interface";


export {
    IUser,
    IAdmin,
    IHttpRequest,
    IHttpResponse,
    IAuthUsecaseResponse,
    ISaveUserRepository,
    ILoadUserRepository,
    ISaveAdminRepository,
    ILoadAdminRepository,
    CustomHttpResponse,

    LoginUserUseCase,
    SignupUserUseCase,
    AuthUserUsecase,
    SignupAdminUseCase,
    LoginAdminUseCase,
}