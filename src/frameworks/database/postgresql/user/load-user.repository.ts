import { ILoadUserRepository, IUser } from "../../../../core";
import prisma from "../../prismaClient";

class LoadUserReposiroty implements ILoadUserRepository {

    async getUserByTel(tel: string): Promise<IUser | null> {
        const user: IUser | null = await prisma.user.findUnique({ where: { tel } })
        return user;
    }

    async getUserByEmail(email: string): Promise<IUser | null> {
        try {
            const user: IUser | null = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })
            
            return user;
        } catch (error) {
            console.log("Erreurr lors de `getUserByEmail`\n",error);
            return null;
        }
    }

}

export default LoadUserReposiroty;