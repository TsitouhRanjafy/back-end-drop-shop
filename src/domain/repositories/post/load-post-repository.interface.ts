import IPost from "../../entities/post.type";

export interface ILoadPostRepository {
    getAllPost(skip: number,take: number): Promise<IPost[] | null>;
    getPostById(postId: number): Promise<IPost | null>
}   