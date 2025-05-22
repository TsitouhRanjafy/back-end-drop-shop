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

    async getAllUserByRole(role: Role,skip: number,take: number): Promise<Pick<IUser,"id" | "firstname" | "lastname" | "region" | "pays" | "profile_url" >[]> {
        try {
            const users: Pick<IUser,"id" | "firstname" | "lastname" | "region" | "pays" | "profile_url" >[] = await prisma.user.findMany({ 
                where: { role: role },
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    region: true,
                    pays: true,
                    profile_url: true,
                },
                skip: skip,
                take: take
            })
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

    async getUserById(id: number): Promise<IUser | null> {
        try {
            const user: IUser | null = await prisma.user.findUnique({
                where: { id }
            })
            return user;
        } catch (error) {
            throw new DataBaseAccessError("getUserById",error);
        }
    }
}

export default LoadUserRepository;