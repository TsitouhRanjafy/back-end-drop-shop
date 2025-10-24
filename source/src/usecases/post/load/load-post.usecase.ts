import { IPost } from "../../../domain/entities/post.interface";
import { ILoadPostRepository } from "../../../domain";

export default class LoadPostUsecase {
    constructor(
        private loadPostRepository: ILoadPostRepository
    ){}

    async exec(count: number): Promise<IPost[] | null>{
        const posts: IPost[] | null = await this.loadPostRepository.getAllPost(0,count);
        return posts;
    }
}