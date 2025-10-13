import { IFormaterService } from "../../domain";

class TransformService implements IFormaterService {
    capitalize(word: string): string {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
}

export default TransformService;