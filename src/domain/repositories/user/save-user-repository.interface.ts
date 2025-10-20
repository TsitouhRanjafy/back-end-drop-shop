import IUser from "../../entities/user.interface";

export default interface ISaveUserRepository {
    signup(user: Omit<IUser,"id">): Promise<IUser>;
}

