
import { LoadPostRepository } from "../../../../infrastructure";
import { IPost } from "../../../entities/post.type";

export default class LoadPostUsecase {
    constructor(
        private loadPostRepository: LoadPostRepository
    ){}

    async exec(count: number): Promise<IPost[] | null>{
        const posts: IPost[] | null = await this.loadPostRepository.getAllPost(0,count);
        return posts;
    }
}