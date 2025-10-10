import { IActionReactionRespository } from "../../../domain";
import { DataBaseAccessError } from "../../error/repositories.error";
import prisma from "../prismaClient";

export default class ActionReactionRepository implements IActionReactionRespository {

    async deleteReactionByReactionId(reactionId: number): Promise<void> {
        try {
            await prisma.reaction.delete({
                where: { id: reactionId }
            })
        } catch (error) {
            throw new DataBaseAccessError("deleteReactionByReactionId",error);
        }
    }
}