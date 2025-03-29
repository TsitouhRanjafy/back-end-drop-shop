import IUser from "../../entities/type/user.type";

interface ILoadUserRepository {
    getUserByIdAndEmail(id: number,email: string): Promise<IUser | null>;
    getUserByEmail(email: string): Promise<IUser | null>
}

export default ILoadUserRepository;