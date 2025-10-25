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

            // join a room
            socket.on('on_join_room', (arg: unknown) => {
                const room: string | null = ((): string | null => {
                    if (typeof arg !== "object" || arg === null) return null;

                    if (typeof (arg as any).id_expediteur !== "number") return null;
                    if (typeof (arg as any).id_receiveur !== "number") return null;
                    const { id_expediteur, id_receiveur } = arg as { id_expediteur: number, id_receiveur: number };

                    return this.formerService.concateByPriorty(id_expediteur, id_receiveur);
                })();

                if (!room) {
                    socket.emit('error', { message: "bad id_expediteur or id_receiveur" });
                    return;
                }
                socket.join(room);
            });

            // send message
            socket.on('sendMessage', async (arg: unknown) => {
                try {
                    console.log(arg);

                    const message: Omit<IMessage,'id' | 'sending_date' | 'room_id'> | null = this.formerService.parsePartialMessage(arg);
                    if (!message) {
                        socket.emit('error', { message: 'bad id_expediteur or id_receiveur or content' });
                        return;
                    }
                    const room: string = this.formerService.concateByPriorty(message.id_expediteur, message.id_receiveur);
                    console.log(room);

                    const newMessage: Omit<IMessage,"id" | "sending_date"> | null = this.formerService.parseMessage(message);
                    console.log(newMessage);
                    if (!newMessage) return;


                    const savedMessage: IMessage | null = await this.saveMessageUsecase.exec(newMessage);
                    if (!savedMessage) {
                        this.io.to(room).emit('on_message_not_saved');
                        return;
                    }
                    this.io.to(room).emit('on_receive_message', newMessage);
                } catch (error) {
                    console.error('Error on sendMessage: ', error);
                    socket.emit('error', { message: 'Internal serveur error' });
                }
            })
        })
    }
}