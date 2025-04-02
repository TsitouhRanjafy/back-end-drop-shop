import IUser from "../../entities/type/user.type";
import { TokenService, LoadUserRepository, SaveUserReposiroty, Hashage } from "../../../frameworks";


class SignupUserUseCase {
    constructor(
        private tokenService: TokenService,
        private hashageService: Hashage,
        private loadUserRepository: LoadUserRepository,
        private saveUserRepository: SaveUserReposiroty
    ){}

    async exec(user: Omit<IUser,"id">): Promise<string | null>{
        let isExistUser: IUser | null = await this.loadUserRepository.getUserByEmail(user.email);
        if(isExistUser) return null; 
        isExistUser = await this.loadUserRepository.getUserByTel(user.tel);
        if(isExistUser) return null; 

        const passwordHashed: string = await this.hashageService.hash(user.password);
        await this.saveUserRepository.sinup({
            ...user,
            password: passwordHashed
        })
        
        const accesToken: string = this.tokenService.genererToken({ email: user.email,lastname: user.lastname})
        return accesToken;
    }
}

export default SignupUserUseCase