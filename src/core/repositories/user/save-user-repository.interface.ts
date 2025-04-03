import IUser from "../../entities/type/user.type";

export default interface ISaveUserRepository {
    sinup(user: Pick<IUser,"email" | "password" | "role">): Promise<IUser | void>
}