import { Role } from "@prisma/client";
import { IUser, ILoadUserRepository } from "../../../domain";
import prisma, { IPrismaClient } from "../prismaClient";
import { DataBaseAccessError } from "../../error/repositories.error";

class LoadUserRepository implements ILoadUserRepository {
    private prismaClient: IPrismaClient;

    constructor(prismaClient: IPrismaClient = prisma) {
        this.prismaClient = prismaClient
    }

    async getUserByEmail(email: string, role: Role, includePassword = false): Promise<IUser | null> {
        try {
            const user = await this.prismaClient.user.findUnique({
                where: { email,role },
                omit: {
                    password: !includePassword
                }
            })

            return user;
        } catch (error) {
            throw new DataBaseAccessError("getUserByEmail",error);
        }
    }

    async getAllUserByRole(role: Role,skip: number,take: number): Promise<Pick<IUser,"id" | "firstname" | "lastname" | "region" | "pays" | "profile_url" >[]> {
        try {
            const users: Pick<IUser,"id" | "firstname" | "lastname" | "region" | "pays" | "profile_url" >[] = await this.prismaClient.user.findMany({ 
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
        const user: IUser | null = await this.prismaClient.user.findUnique({ where: { tel } })
        return user;
    }

    async getUserByEmailAndRole(email: string, role: Role): Promise<IUser | null> {
        try {
            const user: IUser | null = await this.prismaClient.user.findUnique({
                where: { email,role }
            })
            return user;
        } catch (error) {
            throw new DataBaseAccessError("getUserByEmailAndRole",error);
        }
    }

    async getUserById(id: number,includePassword = false): Promise<IUser | null> {
        try {
            const user: IUser | null = await this.prismaClient.user.findUnique({
                where: { id },
                omit: {
                    password: !includePassword
                }
            })
            return user;
        } catch (error) {
            throw new DataBaseAccessError("getUserById",error);
        }
    }
}

export default LoadUserRepository;