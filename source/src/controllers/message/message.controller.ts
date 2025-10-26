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
            console.log("un client est connecté, socket_id: "+socket.id);
            
            socket.on('join_room', (arg: unknown) => {
                
                const room: string | null = ((): string | null => {
                    if (typeof arg !== "object" || arg === null) return null;

                    if (typeof parseInt((arg as any).id_expediteur) !== "number") return null;
                    if (typeof parseInt((arg as any).id_receiveur) !== "number") return null;
                    const { id_expediteur, id_receiveur } = arg as { 
                        id_expediteur: number, 
                        id_receiveur: number 
                    };
                    
                    return this.formerService.concateByPriorty(id_expediteur, id_receiveur);
                })();

                if (!room) {
                    socket.emit('error', { error_message: "bad id_expediteur or id_receiveur" });
                    return;
                }
                socket.join(room);
                console.log('room_id: ',room,' is joined by user_id:'+((arg as any).id_expediteur)); 
            });

            socket.on('send_message', async (arg: unknown) => {
                try {
                    const message: Omit<IMessage,'id' | 'sending_date' | 'room_id'> | null = this.formerService.parsePartialMessage(arg);
                    if (!message) {
                        socket.emit('error', { error_message: 'bad id_expediteur or id_receiveur or content' });
                        return;
                    }

                    const room: string = this.formerService.concateByPriorty(message.id_expediteur, message.id_receiveur);
                    const newMessage: Omit<IMessage,"id" | "sending_date"> | null = this.formerService.parseMessage({...message, room_id: room});
                    console.log(newMessage);
                    if (!newMessage) {
                        socket.emit('error', { error_message: 'something whent wrong'});
                        return;
                    };

                    const savedMessage: IMessage | null = await this.saveMessageUsecase.exec(newMessage);
                    if (!savedMessage) {
                        socket.emit('error', { error_message: 'failed to save message' });
                        return;
                    }
                    socket.to(room).emit('on_receive_message', savedMessage);
                } catch (error) {
                    console.error('Error on sendMessage: ', error);
                    socket.emit('error', { error_message: 'Internal serveur error' });
                }
            })

            socket.on('get_room_history', async (arg: unknown) => {
                /* not implemented */
            })
        })
    }
}