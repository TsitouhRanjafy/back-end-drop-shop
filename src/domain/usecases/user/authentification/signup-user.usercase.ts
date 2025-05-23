import IUser from "../../../entities/user.interface";
import { TokenService, LoadUserRepository, SaveUserReposiroty, Hashage, TransformService } from "../../../../infrastructure";


class SignupUserUseCase {
    constructor(
        private tokenService: TokenService,
        private hashageService: Hashage,
        private loadUserRepository: LoadUserRepository,
        private saveUserRepository: SaveUserReposiroty,
        private transformService: TransformService
    ){}

    async exec(user: Omit<IUser,"id">): Promise<{id: number,token: string} | null>{
        let isExistUser: IUser | null = await this.loadUserRepository.getUserByEmail(user.email,user.role);
        if(isExistUser && isExistUser.role == user.role) return null; 
        isExistUser = await this.loadUserRepository.getUserByTel(user.tel);
        if(isExistUser) return null; 

        const passwordHashed: string = await this.hashageService.hash(user.password);
        const newUser: IUser = await this.saveUserRepository.sinup({
            ...user,
            password: passwordHashed,
            pays: this.transformService.capitalize(user.pays)
        })
        
        const accesToken: string = this.tokenService.generer({id: newUser.id, email: newUser.email,role: newUser.role })
        return {
            id: newUser.id,
            token: accesToken
        };
    }
}

export default SignupUserUseCase