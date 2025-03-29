import { Role } from "@prisma/client";
import { ILoadUserRepository, IUser } from "../../../../core";
import prisma from "../../prismaClient";

class LoadUserReposiroty implements ILoadUserRepository {
    async getUserByEmail(email: string): Promise<IUser | null> {
        try {
            const user: IUser | null = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })
            return user;
        } catch (error) {
            console.log("Erreurr lors de `getUserByEmail`",error);
            return null;
        }
    }
    
    async getUserByIdAndEmail(id: number, email: string): Promise<IUser | null> {
        throw new Error("Method not implemented.");
    }   
}

export default LoadUserReposiroty;