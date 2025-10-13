import { IPost } from "../../../domain/entities/post.interface";
import { ILoadUserRepository, ISavePostRepository } from "../../../domain";

export default class AddNewPostUsecase {
    constructor(
        private addPostRepository: ISavePostRepository,
        private loadUserRepository: ILoadUserRepository
    ){}

    async exec(newPost: Omit<IPost,"id" | "create_at" | "reaction">): Promise<IPost | null> {
        const isUserExist = await this.loadUserRepository.getUserById(newPost.id_user,false);
        if (!isUserExist) return null;

        if (newPost.type == "ARTICLE") {
            const newArticle: Omit<Required<IPost>,"id" | "create_at" | "reaction"> = newPost;
            return await this.addPostRepository.savePost(newArticle);
        }
        return await this.addPostRepository.savePost(newPost);
    }
}