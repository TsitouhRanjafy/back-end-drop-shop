import { ILoadReactionRepository, IReaction } from "../../../core/domain";
import prisma from "../prismaClient";
import { DataBaseAccessError } from "../../error/repositories.error";

export default class LoadReactionRepository implements ILoadReactionRepository {

    async getReactionByReaction(reaction: Omit<IReaction, "id">): Promise<IReaction | null> {
        const {id_post,id_user} = reaction;
        try {
            const reaction: IReaction | null  = await prisma.reaction.findFirst({
                where: { id_post,id_user }
            })
            return reaction;
        } catch (error) {
            throw new DataBaseAccessError("getReactionByReaction",error);
        }
    }

    async getReactionByPostId(postId: number): Promise<IReaction[] | null> {
        try {
            const reactions: IReaction[] | null = await prisma.reaction.findMany({
                where: { id_post: postId}
            })
            return reactions;
        } catch (error) {
            throw new DataBaseAccessError("getReactionByPostId",error);
        }
    }
    async getReactionByUserId(userId: number): Promise<IReaction[] | null> {
        try {
            const reactions: IReaction[] | null = await prisma.reaction.findMany({
                where: {id_user: userId}
            })
            return reactions;
        } catch (error) {
            throw new DataBaseAccessError("getReactionByUserId",error);
        }
    }
}