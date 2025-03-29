import IUser from "../../entities/type/user.type";
import { Generator, hashPassword, LoadUserReposiroty, SaveUserReposiroty } from "../../../frameworks";



class SignupUserUseCase {
    constructor(
        private generator: Generator,
        private loadUserRepository: LoadUserReposiroty,
        private saveUserRepository: SaveUserReposiroty
    ){}

    async exec(user: Omit<IUser,"id">): Promise<string | null>{
        const isExistUser: IUser | null = await this.loadUserRepository.getUserByEmail(user.email);
        if(isExistUser){
            return null;
        }

        const passwordHashed: string = await hashPassword(user.password);
        await this.saveUserRepository.sinup({
            ...user,
            password: passwordHashed
        })
        
        const accesToken: string = this.generator.genererToken({ email: user.email,password: passwordHashed })
        return accesToken;
    }
}

export default SignupUserUseCase