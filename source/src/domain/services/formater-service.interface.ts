import { IMessage } from "../entities/message.interface";

export interface IFormaterService {
    capitalize(word:  string): string;
    concateByPriorty(a: number, b: number): string;
    parseMessage(data: unknown): Omit<IMessage, "id" | "sending_date"> | null;
    parsePartialMessage(data: unknown): Omit<IMessage, "id" | "sending_date" | "room_id"> | null;
}