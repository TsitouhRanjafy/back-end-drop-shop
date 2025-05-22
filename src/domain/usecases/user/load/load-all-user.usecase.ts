import { Role } from "@prisma/client";
import { LoadUserRepository } from "../../../../infrastructure";
import IUser from "../../../entities/user.interface";

export default class LoadAllUserUsecase {
    constructor(
        private loadUserRepositorie: LoadUserRepository
    ){}

    async exec(role: Role,skip: number,take: number) {
        const user: Pick<IUser,"id" | "firstname" | "lastname" | "region" | "pays" | "profile_url" >[] = await this.loadUserRepositorie.getAllUserByRole(role,skip,take);
        return user;
    }
}
