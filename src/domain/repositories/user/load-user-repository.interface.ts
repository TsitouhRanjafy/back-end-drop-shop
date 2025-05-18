import { Role } from "@prisma/client";
import IUser from "../../entities/user.type";

interface ILoadUserRepository {
    getUserByEmailAndRole(email: string, role: Role): Promise<IUser | null> 
    getUserByEmail(email: string,role: Role): Promise<IUser | null>;
    getUserByTel(tel: string,role: Role): Promise<IUser | null>;
    getUserById(id: number,role: Role): Promise<IUser | null>;
    getAllUser(role: Role): Promise<IUser[] | null>;
}

export default ILoadUserRepository;