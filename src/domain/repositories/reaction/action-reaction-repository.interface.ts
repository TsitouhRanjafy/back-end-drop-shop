export interface IActionReactionRespository {
    deleteReactionByReactionId(reactionId: number): Promise<void>;
}

