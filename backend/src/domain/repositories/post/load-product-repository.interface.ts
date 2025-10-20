import { IPost } from "../../entities/post.interface";
import { IReaction } from "../../entities/reaction.interface";

export interface ILoadPostRepository {
    getAllPost(skip: number,take: number): Promise<IPost[] | null>;
    getPostById(postId: number): Promise<IPost | null>;
    getPostByCountryUser(userCountry: string): Promise<Omit<IPost,"type" | "create_at" | "stock">[] | null>;
    getPostByUserId(id_user: number): Promise<Pick<IReaction,"id_post">[] | []>;
}       