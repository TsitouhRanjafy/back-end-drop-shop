import { Hashage, LoadAdminRepository, TokenService } from "../../../../frameworks";
import { IAuthUsecaseResponse } from "../../../entities/type/type";


class LoginAdminUseCase {
    constructor(
        private tokenService: TokenService,
        private hashageService: Hashage,
        private loadAdminRepository: LoadAdminRepository
    ){}

    async execute(email: string,password: string): Promise<IAuthUsecaseResponse | null> {
        try {
            const admin = await this.loadAdminRepository.getAdminByEmail(email);
            if (!admin) return null;
            const isPasswordMatched: boolean = await this.hashageService.compare(password,admin.password);
            if (!isPasswordMatched) return null;
            const token: string = this.tokenService.generer({ id: admin.id, email: admin.email })
            return {
                id: admin.id,
                token: token
            };
        } catch (error) {
            console.error("Erreur lors de `LoginAdminUseCase`",error);
            throw error
        }
    }
}

export default LoginAdminUseCase 