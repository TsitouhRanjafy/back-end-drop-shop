import { IComment } from "../../../domain";
import { ILoadCommentRepository } from "../../../domain/repositories/comment/load-comment-repository.interface";
import { DataBaseAccessError } from "../../error/repositories.error";
import prisma from "../prismaClient";

export default class LoadCommentRepository implements ILoadCommentRepository {

    async getCommentForAPost(id_post: number, is_desc?: boolean): Promise<IComment[] | null> {
        try {
            let comments: IComment[] | null;
            if (is_desc){
                comments = await prisma.comment.findMany({
                    where: { id_post },
                    orderBy: {
                        date: is_desc ? "desc" : "asc",
                    }
                });
                return comments;
            }
            comments = await prisma.comment.findMany({
                where: { id_post },
            })
            return comments;
        } catch (error) {
            throw new DataBaseAccessError("getCommentForAPost",error);
        }
    }
}