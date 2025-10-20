import { Role } from "@prisma/client";
import IUser from "../../entities/user.interface";

interface ILoadUserRepository {
    getUserByEmailAndRole(email: string, role: Role): Promise<IUser | null> 
    getUserByEmail(email: string, role: Role, includePassword?: boolean): Promise<IUser | null>;
    getUserByTel(tel: string): Promise<IUser | null>;
    getUserById(id: number,includePassword: boolean ): Promise<IUser | null>;
    getAllUserByRole(role: Role,skip: number,take: number): Promise<Pick<IUser,"id" | "firstname" | "lastname" | "region" | "pays" | "profile_url" >[]>;
}

export default ILoadUserRepository;