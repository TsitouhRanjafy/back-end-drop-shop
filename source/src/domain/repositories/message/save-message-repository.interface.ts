import { IMessage } from "../../entities/message.interface";

export interface ISaveMessageRepository {
    saveMessage(message: Omit<IMessage,"id" | "sending_date">): Promise<IMessage | null>
}