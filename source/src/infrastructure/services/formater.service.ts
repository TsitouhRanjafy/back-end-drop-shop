import { IFormaterService, IMessage } from "../../domain";

class TransformService implements IFormaterService {
    capitalize(str: string): string {
        return str
            .trim()
            .toLowerCase()
            .split(' ')      
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
            .join(' ');    
    }

    parseMessage(data: unknown): Omit<IMessage, "id" | "sending_date"> | null {
        if (typeof data !== "object" || data === null) return null;
        
        if (typeof parseInt((data as any).id_expediteur) !== "number") return null;
        
        if (typeof parseInt((data as any).id_receiveur) !== "number") return null;
        
        if (typeof (data as any).content !== "string") return null;
        
        if (typeof (data as any).room_id !== "string") return null;
        console.log("ok ici");
    
        if (((data as any).content as string).length  > 500) return null;
    
        const messageParded = data as { id_expediteur: number, id_receiveur: number, content: string, room_id: string }
        return messageParded;
    }

    concateByPriorty(a: number, b: number): string {
        if (a < b) return `${a}_room_${b}`;
        return `${b}_room_${a}`;
    }

    parsePartialMessage(data: unknown): Omit<IMessage, "id" | "sending_date" | "room_id"> | null {
        if (typeof data !== "object" || data === null) return null;

        if (typeof parseInt((data as any).id_expediteur) !== "number") return null;
    
        if (typeof parseInt((data as any).id_receiveur) !== "number") return null;
    
        if (typeof (data as any).content !== "string") return null;
    
        if ((data as any).content.length > 500) return null;
    
        const messageParsed = data as { id_expediteur: number, id_receiveur: number, content: string }
        return messageParsed;
    }
}

export default TransformService;