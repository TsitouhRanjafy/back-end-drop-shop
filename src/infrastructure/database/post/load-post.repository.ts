import { ILoadPostRepository, IPost } from "../../../domain";
import { DataBaseAccessError } from "../../error/repositories.error";
import prisma from "../prismaClient";

export default class LoadPostRepository implements ILoadPostRepository {
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