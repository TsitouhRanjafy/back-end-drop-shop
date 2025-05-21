import { Role } from "@prisma/client";
import { IReaction } from "../../entities/reaction.interface";


export interface ILoadReactionRepository {
    getReactionByReaction(reaction: Omit<IReaction,"id">): Promise<IReaction | null> 
    getReactionByPostId(postId: number): Promise<IReaction[] | null>;
    getReactionByUserId(userId: number,role: Role): Promise<IReaction[] | null>;
}