import { IPost } from "../../../domain/entities/post.interface";
import { IReaction } from "../../../domain/entities/reaction.interface";
import IUser from "../../../domain/entities/user.interface";
import { IActionReactionRespository, ILoadPostRepository, ILoadReactionRepository, ILoadUserRepository, ISaveReactionRepository } from "../../../domain";


export default class LikeInlikePostUsecase {
    constructor(
        private saveReactionRepository: ISaveReactionRepository,
        private loadReactionRepository: ILoadReactionRepository,
        private actionReactionReapository: IActionReactionRespository,
        private loadUserRepository: ILoadUserRepository,
        private loadPostRepository: ILoadPostRepository
    ){}

    async exec(reaction: Omit<IReaction,"id">): Promise<boolean>{
        const isReactionAlreadyExist = await this.loadReactionRepository.getReactionByReaction(reaction);
        if (isReactionAlreadyExist) {
            await this.actionReactionReapository.deleteReactionByReactionId(isReactionAlreadyExist.id);
            return true;
        }

        const isUserExist: IUser | null = await this.loadUserRepository.getUserById(reaction.id_user,false);
        if (!isUserExist) return false;

        const isPostExist: IPost | null = await this.loadPostRepository.getPostById(reaction.id_post);
        if (!isPostExist) return false;
        
        await this.saveReactionRepository.addReaction(reaction);
        return true;
    }
}