import { IPost, ISavePostRepository } from "../../../domain";
import { DataBaseAccessError } from "../../error/repositories.error";
import prisma from "../prismaClient";

export default class AddPostRepository implements ISavePostRepository {

    async savePost(newPost: Omit<IPost,"id" | "create_at">): Promise<IPost | null> {
        try {
            const savedPost: IPost | null = await prisma.post.create({
                data: newPost
            })
            return savedPost;
        } catch (error) {
            throw new DataBaseAccessError("AddPostRepository",error);
        }
    }
}

