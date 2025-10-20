import { IFormaterService, IHashageService, ILoadUserRepository, ISaveUserRepository, ITokenService } from "../../../domain";
import IUser from "../../../domain/entities/user.interface";
class SignupUserUseCase {
    constructor(
        private tokenService: ITokenService,
        private hashageService: IHashageService,
        private loadUserRepository: ILoadUserRepository,
        private saveUserRepository: ISaveUserRepository,
        private transformService: IFormaterService
    ){}

    async exec(user: Omit<IUser,"id">): Promise<{id: number,token: string} | null>{
        let isExistUser: IUser | null = await this.loadUserRepository.getUserByEmail(user.email,user.role);
        if(isExistUser && isExistUser.role == user.role) return null; 

        isExistUser = await this.loadUserRepository.getUserByTel(user.tel);
        if(isExistUser) return null; 

        const passwordHashed: string = await this.hashageService.hash(user.password);
        const newUser: IUser = await this.saveUserRepository.signup({
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