import { ISaveUserRepository, IUser } from "../../../../core";
import prisma from "../../prismaClient";

class SaveUserReposiroty implements ISaveUserRepository {

    // async login(user: Pick<IUser, "email" | "password" | "role">): Promise<IUser | null> {
    //     try {
            
    //     } catch (error) {
            
    //     }
    // }

    async sinup(user: Omit<IUser,"id">): Promise<void> {

        try {
            await prisma.user.create({
                data: user 
            })
            return;
        } catch (error) {
            console.log("Error lors `SaveUserReposiroty` singup",error);
            return;
        }
    }
    
}

export default SaveUserReposiroty