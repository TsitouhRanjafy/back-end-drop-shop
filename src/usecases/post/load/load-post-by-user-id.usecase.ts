import { IReaction } from "../../../domain/entities/reaction.interface";
import { ILoadPostRepository } from "../../../domain";

export default class LoadPostByUserIdUsecase {
    constructor(
        private loadPostRepository: ILoadPostRepository
    ){}

    async exec(id_user: number): Promise<Pick<IReaction,"id_post">[] | []>{
        const post = await this.loadPostRepository.getPostByUserId(id_user);
        return post;
    }
}