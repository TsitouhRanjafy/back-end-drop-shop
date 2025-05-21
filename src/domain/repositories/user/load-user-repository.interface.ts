import { Role } from "@prisma/client";
import IUser from "../../entities/user.interface";

interface ILoadUserRepository {
    getUserByEmailAndRole(email: string, role: Role): Promise<IUser | null> 
    getUserByEmail(email: string,role: Role): Promise<IUser | null>;
    getUserByTel(tel: string,role: Role): Promise<IUser | null>;
    getUserById(id: number,role: Role): Promise<IUser | null>;
    getAllUserByRole(role: Role): Promise<IUser[] | null>;
}

export default ILoadUserRepository;