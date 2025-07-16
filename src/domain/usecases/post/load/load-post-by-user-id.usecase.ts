import { LoadPostRepository } from "../../../../infrastructure";
import { IPost } from "../../../entities/post.interface";

export default class LoadPostByUserIdUsecase {
    constructor(
        private loadPostRepository: LoadPostRepository
    ){}

    async exec(id_user: number): Promise<Pick<IPost,"id">[] | []>{
        const post = await this.loadPostRepository.getPostByUserId(id_user);
        return post;
    }
}