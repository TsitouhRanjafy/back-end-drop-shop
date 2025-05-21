import IUser from "../../entities/user.interface";

export default interface ISaveUserRepository {
    sinup(user: Pick<IUser,"email" | "password" | "role">): Promise<IUser | void>
}

