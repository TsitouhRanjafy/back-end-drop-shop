import { Role } from "@prisma/client";
import { IUser, ILoadUserRepository } from "../../../domain";
import prisma from "../prismaClient";
import { DataBaseAccessError } from "../../error/repositories.error";

class LoadUserRepository implements ILoadUserRepository {

    async getUserByEmail(email: string, role: Role): Promise<IUser | null> {
        try {
            const user: IUser | null = await prisma.user.findUnique({
                where: { email,role }
            })
            
            return user;
        } catch (error) {
            throw new DataBaseAccessError("getUserByEmail",error);
        }
    }

    async getAllUser(role: Role): Promise<IUser[]> {
        try {
            const users: IUser[] = await prisma.user.findMany({ where: { role: role }})
            return users;
        } catch (error) {
            throw new DataBaseAccessError("getAllUser",error);
        }
    }

    async getUserByTel(tel: string): Promise<IUser | null> {
        const user: IUser | null = await prisma.user.findUnique({ where: { tel } })
        return user;
    }

    async getUserByEmailAndRole(email: string, role: Role): Promise<IUser | null> {
        try {
            const user: IUser | null = await prisma.user.findUnique({
                where: { email,role }
            })
            return user;
        } catch (error) {
            throw new DataBaseAccessError("getUserByEmailAndRole",error);
        }
    }

    async getUserById(id: number,role: Role): Promise<IUser | null> {
        try {
            const user: IUser | null = await prisma.user.findUnique({
                where: { id, role }
            })
            return user;
        } catch (error) {
            throw new DataBaseAccessError("getUserById",error);
        }
    }
}

export default LoadUserRepository;