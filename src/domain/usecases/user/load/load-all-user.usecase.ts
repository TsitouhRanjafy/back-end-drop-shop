import { Role } from "@prisma/client";
import { LoadUserRepository } from "../../../../infrastructure";
import IUser from "../../../entities/user.type";

export default class LoadAllUserUsecase {
    constructor(
        private loadUserRepositorie: LoadUserRepository
    ){}

    async exec(role: Required<Role>) {
        const user: IUser[] = await this.loadUserRepositorie.getAllUser(role);
        return user;
    }
}
