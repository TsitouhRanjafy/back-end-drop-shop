import { IMessage, ISaveMessageRepository } from "../../../domain";
import { RepositoryError } from "../../../domain/error/repositories.error";
import prisma from "../prismaClient";

export class SaveMessageRepository implements ISaveMessageRepository {
    async saveMessage(message: Omit<IMessage,"id" | "sending_date">): Promise<IMessage | null> {
        try {
            const savedMessage: IMessage | null = await prisma.message.create({
                data: message
            })
            return savedMessage;
        } catch (error) {
            throw new RepositoryError(error, "SaveMessageRepository");
        }
    }
}

