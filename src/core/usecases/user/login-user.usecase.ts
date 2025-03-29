import { SaveUserReposiroty } from "../../../frameworks";
import IUser from "../../entities/type/user.type";



class LoginUserUseCase {
    constructor(
        private generator: Generator,
        private saveUserRepository: SaveUserReposiroty
    ){}

    // async execute(email: string,password: string,role: ROLE): Promise<string | null> {
    //     // comparer le user (email, password) input et le user (email,password) dans le bd
    //     // if user ok (c'est à dire il exist bien dans le bd et credential ok) 
    //     // retourné le token
    //     const user: IUser | null = await this.saveUserRepository.login({email,password,role})

    // }
}

export default LoginUserUseCase