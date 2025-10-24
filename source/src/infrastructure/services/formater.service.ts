import { IFormaterService } from "../../domain";

class TransformService implements IFormaterService {
    capitalize(str: string): string {
        return str
            .trim()
            .toLowerCase()
            .split(' ')      
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
            .join(' ');    
        }
}

export default TransformService;