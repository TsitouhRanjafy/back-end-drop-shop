import { IReaction } from "../../entities/reaction.interface";


export interface ISaveReactionRepository {
    addReaction(reaction: Omit<IReaction,"id">): Promise<void>;
}