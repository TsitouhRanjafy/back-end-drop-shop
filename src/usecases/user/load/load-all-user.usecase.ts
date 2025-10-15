import { Role } from "@prisma/client";
import IUser from "../../../domain/entities/user.interface";
import { ILoadUserRepository } from "../../../domain";

export default class LoadAllUserUsecase {
    constructor(
        private loadUserRepositorie: ILoadUserRepository
    ){}

    async exec(role: Role,skip: number,take: number) {
        const user: Pick<IUser,"id" | "firstname" | "lastname" | "region" | "pays" | "profile_url" >[] = await this.loadUserRepositorie.getAllUserByRole(role,skip,take);
        return user;
    }
}
