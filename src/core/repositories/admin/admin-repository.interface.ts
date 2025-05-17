import IAdmin from "../../entities/admin.type";

interface ILoadAdminRepository {
    getAdminByEmail(email: string): Promise<IAdmin | null>;
    getAdminByTel(tel: string): Promise<IAdmin | null>
    getAdminById(id: number): Promise<IAdmin | null>
}

interface ISaveAdminRepository {
    signup(Admin: Omit<IAdmin,"id">): Promise<IAdmin>;
}

export {
    ILoadAdminRepository,
    ISaveAdminRepository
}