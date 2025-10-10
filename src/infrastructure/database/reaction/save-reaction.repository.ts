import { IReaction, ISaveReactionRepository } from "../../../core/domain";
import { DataBaseAccessError } from "../../error/repositories.error";
import prisma from "../prismaClient";

export default class SaveReactionRepository implements ISaveReactionRepository {
    
    async addReaction(reaction: Omit<IReaction, "id">): Promise<void> {
        try {
            await prisma.reaction.create({
                data: reaction  
            })
        } catch (error) {
            throw new DataBaseAccessError("addOrDeleteReaction",error);
        }
    }


    async deleteReaction(reactionId: number): Promise<void> {
        try {
            await prisma.reaction.delete({where: {id: reactionId}});
        } catch (error) {
            throw new DataBaseAccessError("deleteReaction",error);
        }
    }
    
}