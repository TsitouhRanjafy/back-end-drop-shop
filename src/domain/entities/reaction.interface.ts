import { Role } from "@prisma/client";

export interface IReaction {
    id: number,
    id_post: number,
    role: Role,
    id_user: number
}