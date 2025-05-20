import { Role } from "@prisma/client";

export interface IActionReactionRespository {
    deleteReactionByReactionId(reactionId: number,role: Role): Promise<void>;
}

