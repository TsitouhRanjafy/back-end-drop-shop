import { TokenService, Hashage, LoadAdminRepository, SaveAdminReposiroty } from "../../../../frameworks";
import { IAuthUsecaseResponse } from "../../../entities/type/type";
import IAdmin from "../../../entities/type/admin.type";


class SignupAdminUseCase {
    constructor(
        private tokenService: TokenService,
        private hashageService: Hashage,
        private loadAdminRepository: LoadAdminRepository,
        private saveAdminRepository: SaveAdminReposiroty
    ){}

    async execute(admin: Omit<IAdmin,"id">): Promise<IAuthUsecaseResponse | null>{
        let isExistAdmin: IAdmin | null = await this.loadAdminRepository.getAdminByEmail(admin.email);
        if(isExistAdmin) return null; 
        isExistAdmin = await this.loadAdminRepository.getAdminByTel(admin.tel);
        if(isExistAdmin) return null; 

        const passwordHashed: string = await this.hashageService.hash(admin.password);
        const newAdmin: IAdmin = await this.saveAdminRepository.signup({
            ...admin,
            password: passwordHashed
        })
        
        const accesToken: string = this.tokenService.generer({id: newAdmin.id, email: newAdmin.email })
        return {
            id: newAdmin.id,
            token: accesToken
        };
    }
}

export default SignupAdminUseCase