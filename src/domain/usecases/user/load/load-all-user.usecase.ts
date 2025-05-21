import { Role } from "@prisma/client";
import { LoadUserRepository } from "../../../../infrastructure";
import IUser from "../../../entities/user.interface";

export default class LoadAllUserUsecase {
    constructor(
        private loadUserRepositorie: LoadUserRepository
    ){}

    async exec(role: Required<Role>) {
        const user: IUser[] = await this.loadUserRepositorie.getAllUserByRole(role);
        return user;
    }
}
