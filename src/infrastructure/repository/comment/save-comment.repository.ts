import { IComment, ISaveCommentRepository } from "../../../domain";
import { DataBaseAccessError } from "../../error/repositories.error";
import prisma from "../prismaClient";

export default class SaveCommentRepository implements ISaveCommentRepository {

    async addComment(newComment: Omit<IComment, "id" | "date">): Promise<IComment | null> {
        try {
            const comment: IComment | null = await prisma.comment.create({data: newComment})
            return comment;
        } catch (error) {
            throw new DataBaseAccessError("addComment",error);
        }
    }
}