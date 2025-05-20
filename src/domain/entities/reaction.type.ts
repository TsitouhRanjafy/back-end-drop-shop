import { Role } from "@prisma/client";

export default interface IReaction {
    id: number,
    id_post: number,
    role: Role,
    id_user: number
}