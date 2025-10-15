import { RepositoryError } from "./repositories.error";

export class ControllerError extends Error {
    originalError: unknown;

    constructor(className: string, originalError?: unknown ){
        super(`Controller error in:${className}`);
        this.name = "ControllerError";
        this.originalError = originalError

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this,RepositoryError);
        }
    }
}