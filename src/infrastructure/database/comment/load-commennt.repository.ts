import { IComment } from "../../../domain";
import { ILoadCommentRepository } from "../../../domain/repositories/comment/load-comment-repository.interface";
import { DataBaseAccessError } from "../../error/repositories.error";
import prisma from "../prismaClient";

export default class LoadCommentRepository implements ILoadCommentRepository {

    async getCommentForAPost(id_post: number): Promise<IComment[] | null> {
        try {
            const comments: IComment[] | null = await prisma.comment.findMany({where: {id_post}});
            return comments;
        } catch (error) {
            throw new DataBaseAccessError("getCommentForAPost",error);
        }
    }
}