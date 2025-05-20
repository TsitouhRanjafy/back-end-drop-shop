import IPost from "../../entities/post.type";

export interface ISavePostRepository {
    savePost(newPost: Omit<IPost,"id">): Promise<IPost | null>
}