import { Server, Socket } from "socket.io";
import { SaveMessageUsecase } from "../../usecases";
import { IFormaterService, IMessage } from "../../domain";

export class MessageController {
    constructor(
        private io: Server,
        private saveMessageUsecase: SaveMessageUsecase,
        private formerService: IFormaterService
    ){
        this.intializeSocketEvents();
    }

    private intializeSocketEvents(): void {
        this.io.on('connection', (socket: Socket) => {
            socket.on('sendMessage', (arg: unknown) => {
                console.log(arg);

                const message: Omit<IMessage,'id' | 'sending_date' | 'room_id'> | null = this.formerService.parsePartialMessage(arg);
                if (!message) {
                    console.log("message invalide");
                    return;
                }

                const room: string = this.formerService.concateByPriorty(message.id_expediteur, message.id_receiveur);
                console.log(room);

                const newMessage: Omit<IMessage,"id" | "sending_date"> | null = this.formerService.parseMessage(message);
                console.log(newMessage);

                
            })
        })
    }
}