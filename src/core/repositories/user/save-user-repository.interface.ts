import IUser from "../../entities/type/user.type";

export default interface ISaveUserRepository {
    // login(user: Pick<IUser,"email" | "password" | "role">): Promise<IUser | null>
    sinup(user: Pick<IUser,"email" | "password" | "role">): Promise<void>
}