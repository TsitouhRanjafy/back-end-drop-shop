// Interface Service
import IUser from "./entities/user.interface";
import { ITokenService } from "./services/token-serivce.interface";
import { IHashageService } from "./services/hashage-service.interface";
import { IHttpResponse } from "./http/http.interface";

// Entites
import { IPost } from "./entities/post.interface";
import { IReaction } from "./entities/reaction.interface";
import { IComment } from "./entities/comment.interface";
import { ITokenDecoded } from "./entities/custom.interface";
import { IFormaterService } from "./services/formater-service.interface";

// Interface Repository
// import { ILoadAdminRepository, ISaveAdminRepository } from "./repositories/admin/admin-repository.interface";
import ISaveUserRepository from "./repositories/user/save-user-repository.interface";
import ILoadUserRepository from "./repositories/user/load-user-repository.interface";
import { ISavePostRepository } from "./repositories/post/save-post-repository.interface";
import { ILoadPostRepository } from "./repositories/post/load-product-repository.interface";
import { ILoadReactionRepository } from "./repositories/reaction/load-reaction-repository.interface";
import { ISaveReactionRepository } from "./repositories/reaction/save-reaction-repository.interface";
import { IActionReactionRespository } from "./repositories/reaction/action-reaction-repository.interface";
import { ISaveCommentRepository } from "./repositories/comment/save-comment-repository.interface";
import { ILoadCommentRepository } from "./repositories/comment/load-comment-repository.interface";


export {
    IUser,
    // ILoadAdminRepository,
    // ISaveAdminRepository,
    ITokenService,
    IHashageService,
    IHttpResponse,
    IFormaterService,
    
    IPost,
    IReaction,
    IComment,
    ITokenDecoded,

    ILoadUserRepository,
    ILoadPostRepository,
    ISavePostRepository,
    ILoadReactionRepository,
    ISaveUserRepository,
    ISaveReactionRepository,
    IActionReactionRespository,
    ISaveCommentRepository,
    ILoadCommentRepository
}