import { ISaveUserRepository, IUser } from "../../../domain";
import { DataBaseAccessError } from "../../error/repositories.error";
import prisma from "../prismaClient";

class SaveUserReposiroty implements ISaveUserRepository {

    async sinup(user: Omit<IUser,"id">): Promise<IUser> {
        try {
            const newUser: IUser = await prisma.user.create({
                data: user
            })
            return newUser;
        } catch (error) {
            throw new DataBaseAccessError("signup",error);
        }
    }
}

export default SaveUserReposiroty