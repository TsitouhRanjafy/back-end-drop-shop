import IReaction from "../../entities/reaction.type";

export interface ISaveReactionRepository {
    addReaction(reaction: Omit<IReaction,"id">): Promise<void>;
}