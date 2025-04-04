import { Role } from "@prisma/client";
import { Hashage, LoadUserRepository, TokenService } from "../../../../frameworks";
import { IAuthUsecaseResponse } from "../../../entities/type/type";


class LoginUserUseCase {
    constructor(
        private tokenService: TokenService,
        private hashageService: Hashage,
        private loadUserRepository: LoadUserRepository
    ){}

    async execute(email: string,password: string,role: Role): Promise<IAuthUsecaseResponse | null> {
        try {
            const user = await this.loadUserRepository.getUserByEmailAndRole(email,role);
            if (!user) return null;
            const isPasswordMatched: boolean = await this.hashageService.compare(password,user.password);
            if (!isPasswordMatched) return null;
            const token: string = this.tokenService.generer({ id: user.id, email: user.email })
            return {
                id: user.id,
                token: token
            };
        } catch (error) {
            console.error("Erreur lors de `LoginUserUseCase `",error);
            throw error
        }
    }
}

export default LoginUserUseCase