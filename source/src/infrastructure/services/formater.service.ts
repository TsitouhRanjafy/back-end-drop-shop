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
    
        const { id_expediteur, id_receiveur, content, room_id } = data as Record<string, unknown>;
    
        if (typeof id_expediteur !== "number") return null;
    
        if (typeof id_receiveur !== "number") return null;
    
        if (typeof content !== "string") return null;
    
        if (typeof room_id !== "string") return null;
    
        if (!content.trim() || !room_id.trim()) return null;
    
        if (content.length > 500) return null;
    
        return { id_expediteur, id_receiveur, content, room_id };
    }

    concateByPriorty(a: number, b: number): string {
        if (a < b) return `${a}_room_${b}`;
        return `${b}_room_${a}`;
    }

    parsePartialMessage(data: unknown): Omit<IMessage, "id" | "sending_date" | "room_id"> | null {
        if (typeof data !== "object" || data === null) return null;
    
        const { id_expediteur, id_receiveur, content } = data as Record<string, unknown>;

        if (typeof id_expediteur !== "number") return null;
    
        if (typeof id_receiveur !== "number") return null;
    
        if (typeof content !== "string") return null;
    
        if (!content.trim()) return null;
    
        if (content.length > 500) return null;
    
        return { id_expediteur, id_receiveur, content };
        }
}

export default TransformService;