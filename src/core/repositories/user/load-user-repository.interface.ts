import { Role } from "@prisma/client";
import IUser from "../../entities/type/user.type";

interface ILoadUserRepository {
    getUserByEmailAndRole(email: string, role: Role): Promise<IUser | null> 
    getUserByEmail(email: string): Promise<IUser | null>;
    getUserByTel(tel: string): Promise<IUser | null>
    getUserById(id: number): Promise<IUser | null>
}

export default ILoadUserRepository;