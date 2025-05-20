import { ILoadPostRepository, IPost } from "../../../domain";
import { DataBaseAccessError } from "../../error/repositories.error";
import prisma from "../prismaClient";

export default class LoadPostRepository implements ILoadPostRepository {

    async getPostById(postId: number): Promise<IPost | null> {
        try {
            const post: IPost | null = await prisma.post.findUnique({where: {id: postId }})
            return post;
        } catch (error) {
            throw new DataBaseAccessError("getPostById",error);
        }
    }

    async getAllPost(skip: number,take: number): Promise<IPost[] | null> {
        try {
            const posts: IPost[] | null = await prisma.post.findMany({ 
                skip,
                take, 
                include: {
                    comment: true
                } 
            });
            return posts;
        } catch (error) {
            throw new DataBaseAccessError("LoadPostRepository",error);
        }
    }
}