import { ISaveUserRepository, IUser } from "../../../domain";
import { RepositoryError } from "../../../domain/error/repositories.error";
import prisma, { IPrismaClient }  from "../prismaClient";

class SaveUserRepository implements ISaveUserRepository {
    private prismaClient: IPrismaClient;

    constructor(prismaClient: IPrismaClient = prisma) {
        this.prismaClient = prismaClient;
    }

    async signup(user: Omit<IUser,"id">): Promise<IUser> {
        try {
            const newUser: IUser = await this.prismaClient.user.create({
                data: user
            })
            return newUser;
        } catch (error) {
            throw new RepositoryError(error, "signup")
        }
    }
}

export default SaveUserRepository;