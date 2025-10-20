import { IPost } from "../../entities/post.interface";


export interface ISavePostRepository {
    savePost(newPost: Omit<IPost,"id" | "create_at">): Promise<IPost | null>
}