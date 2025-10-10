import { AddPostRepository, LoadUserRepository } from "../../../../infrastructure";
import { IPost } from "../../../domain/entities/post.interface";

export default class AddNewPostUsecase {
    constructor(
        private addPostRepository: AddPostRepository,
        private loadUserRepository: LoadUserRepository
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