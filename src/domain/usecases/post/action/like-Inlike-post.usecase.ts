import { ActionReactionRepository, LoadPostRepository, LoadReactionRepository, LoadUserRepository, SaveReactionRepository } from "../../../../infrastructure";
import { IPost } from "../../../entities/post.type";
import { IReaction } from "../../../entities/reaction.type";
import IUser from "../../../entities/user.type";


export default class LikeInlikePostUsecase {
    constructor(
        private saveReactionRepository: SaveReactionRepository,
        private loadReactionRepository: LoadReactionRepository,
        private actionReactionReapository: ActionReactionRepository,
        private loadUserRepository: LoadUserRepository,
        private loadPostRepository: LoadPostRepository
    ){}

    async exec(reaction: Omit<IReaction,"id">): Promise<boolean>{
        const isReactionAlreadyExist = await this.loadReactionRepository.getReactionByReaction(reaction);
        if (isReactionAlreadyExist) {
            await this.actionReactionReapository.deleteReactionByReactionId(isReactionAlreadyExist.id);
            return true;
        }

        const isUserExist: IUser | null = await this.loadUserRepository.getUserById(reaction.id_user,reaction.role);
        if (!isUserExist) return false;
        const isPostExist: IPost | null = await this.loadPostRepository.getPostById(reaction.id_post);
        if (!isPostExist) return false;
        await this.saveReactionRepository.addReaction(reaction);
        return true;
    }
}