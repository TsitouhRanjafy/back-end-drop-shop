import { LoadPostRepository } from "../../../../infrastructure";
import { IReaction } from "../../../domain/entities/reaction.interface";

export default class LoadPostByUserIdUsecase {
    constructor(
        private loadPostRepository: LoadPostRepository
    ){}

    async exec(id_user: number): Promise<Pick<IReaction,"id_post">[] | []>{
        const post = await this.loadPostRepository.getPostByUserId(id_user);
        return post;
    }
}