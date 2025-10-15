import { Role } from "@prisma/client";
import { IHashageService, ILoadUserRepository, ITokenService } from "../../../domain";


class LoginUserUseCase {
    constructor(
        private tokenService: ITokenService,
        private hashageService: IHashageService,
        private loadUserRepository: ILoadUserRepository
    ){}

    async execute(email: string,password: string,role: Role): Promise<{id: number,token: string} | null> {
        try {
            const user = await this.loadUserRepository.getUserByEmailAndRole(email,role);
            if (!user) return null;
            const isPasswordMatched: boolean = await this.hashageService.compare(password,user.password);
            if (!isPasswordMatched) return null;
            const token: string = this.tokenService.generer({ id: user.id, email: user.email, role: user.role })
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