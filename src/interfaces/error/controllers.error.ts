import { DataBaseAccessError } from "../../infrastructure/error/repositories.error";

export class ControllerError extends Error {
    originalError: unknown;

    constructor(functionName: string, originalError?: unknown ){
        super(`Controller error in:${functionName}`);
        this.name = "ControllerError";
        this.originalError = originalError

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this,DataBaseAccessError);
        }
    }
}