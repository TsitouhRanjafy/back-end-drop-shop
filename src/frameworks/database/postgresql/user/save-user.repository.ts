import { ISaveUserRepository, IUser } from "../../../../core";
import prisma from "../../prismaClient";

class SaveUserReposiroty implements ISaveUserRepository {

    async sinup(user: Omit<IUser,"id">): Promise<IUser> {
        try {
            const newUser: IUser = await prisma.user.create({
                data: user 
            })
            return newUser;
        } catch (error) {
            console.error("Error lors `SaveUserReposiroty` singup",error);
            throw error
        }
    }
    
}

export default SaveUserReposiroty