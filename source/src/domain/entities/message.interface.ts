import IUser from "./user.interface";

export interface IMessage {
  id: number;
  
  id_expediteur: number;
  id_receiveur: number;
  content: string;

  room_id: string;
  sending_date: Date;
}
