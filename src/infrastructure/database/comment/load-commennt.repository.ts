import { IComment } from "../../../domain";
import { ILoadCommentRepository } from "../../../domain/repositories/comment/load-comment-repository.interface";
import { DataBaseAccessError } from "../../error/repositories.error";
import prisma from "../prismaClient";

export default class LoadCommentRepository implements ILoadCommentRepository {

    async getCommentForAPost(id_post: number, is_desc?: boolean): Promise<Omit<IComment,"id_post" | "id_user">[] | null> {
        try {
            let comments: Omit<IComment,"id_post" | "id_user">[] | null;
            if (is_desc){
                comments = await prisma.comment.findMany({
                    where: { id_post },
                    orderBy: {
                        date: is_desc ? "desc" : "asc",
                    },
                    omit: {
                        id_post: true,
                        id_user: true
                    },
                    include: {
                        user: {
                            select: {
                                firstname: true,
                                lastname: true,
                                profile_url: true
                            }
                        }
                    }
                });
                return comments;
            }
            comments = await prisma.comment.findMany({
                where: { id_post },
                omit: {
                    id_post: true,
                    id_user: true
                },
                include: {
                    user: {
                        select: {
                            firstname: true,
                            lastname: true,
                            profile_url: true
                        }
                    }
                }
            })
            return comments;
        } catch (error) {
            throw new DataBaseAccessError("getCommentForAPost",error);
        }
    }
}