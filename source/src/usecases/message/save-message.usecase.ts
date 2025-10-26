import { ILoadUserRepository, IMessage, ISaveMessageRepository, IUser } from "../../domain";

export class SaveMessageUsecase {
    constructor(
        private saveMessageRepository: ISaveMessageRepository,
        private loadUserRepository: ILoadUserRepository
    ){}

    async exec(message: Omit<IMessage,"id" | "sending_date">): Promise<IMessage | null> {
        try {
            const isExistExpediteur: IUser | null = await this.loadUserRepository.getUserById(message.id_expediteur, false);
            if (!isExistExpediteur) return null;

            const isExistReceiveur: IUser | null = await this.loadUserRepository.getUserById(message.id_receiveur, false);
            if (!isExistReceiveur) return null;

            const newMessage: IMessage | null = await this.saveMessageRepository.saveMessage(message);
            return newMessage;
        } catch (error) {
            throw error
        }
    }
}