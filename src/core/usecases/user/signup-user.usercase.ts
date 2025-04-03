import IUser from "../../entities/type/user.type";
import { TokenService, LoadUserRepository, SaveUserReposiroty, Hashage } from "../../../frameworks";
import { IAuthUsecaseResponse } from "../../entities/type/type";


class SignupUserUseCase {
    constructor(
        private tokenService: TokenService,
        private hashageService: Hashage,
        private loadUserRepository: LoadUserRepository,
        private saveUserRepository: SaveUserReposiroty
    ){}

    async exec(user: Omit<IUser,"id">): Promise<IAuthUsecaseResponse | null>{
        let isExistUser: IUser | null = await this.loadUserRepository.getUserByEmail(user.email);
        if(isExistUser && isExistUser.role == user.role) return null; 
        isExistUser = await this.loadUserRepository.getUserByTel(user.tel);
        if(isExistUser) return null; 

        const passwordHashed: string = await this.hashageService.hash(user.password);
        const newUser: IUser = await this.saveUserRepository.sinup({
            ...user,
            password: passwordHashed
        })
        
        const accesToken: string = this.tokenService.generer({id: newUser.id, email: newUser.email })
        return {
            id: newUser.id,
            token: accesToken
        };
    }
}

export default SignupUserUseCase