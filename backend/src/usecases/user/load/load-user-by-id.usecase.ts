import IUser from "../../../domain/entities/user.interface";
import { ILoadUserRepository } from "../../../domain";

export default class LoadUserByIdUsecase {
    constructor(
        private loadUserRepository: ILoadUserRepository
    ){}

    async exec(id:number,includePassword: boolean): Promise<IUser | null>{
        const user: IUser | null = await this.loadUserRepository.getUserById(id,includePassword);
        return user;
    }
}