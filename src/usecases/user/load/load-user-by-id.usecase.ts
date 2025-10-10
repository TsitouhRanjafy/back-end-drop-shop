import { LoadUserRepository } from "../../../infrastructure";
import IUser from "../../../domain/entities/user.interface";

export default class LoadUserByIdUsecase {
    constructor(
        private loadUserRepository: LoadUserRepository
    ){}

    async exec(id:number,includePassword: boolean): Promise<IUser | null>{
        const user: IUser | null = await this.loadUserRepository.getUserById(id,includePassword);
        return user;
    }
}