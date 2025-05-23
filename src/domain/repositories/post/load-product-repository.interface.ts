import { IPost } from "../../entities/post.interface";

export interface ILoadPostRepository {
    getAllPost(skip: number,take: number): Promise<IPost[] | null>;
    getPostById(postId: number): Promise<IPost | null>;
    getPostByCountryUser(userCountry: string): Promise<Omit<IPost,"type" | "create_at" | "stock">[] | null>;
}   