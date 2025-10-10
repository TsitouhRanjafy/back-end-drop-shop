class DataBaseAccessError extends Error {
    originalError: unknown;

    constructor(functionName: string, originalError?: unknown){
        super(`Repositorie error in: ${functionName}`)
        this.name = "DataBaseAccessError";
        this.originalError = originalError;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this,DataBaseAccessError);
        }
    }    
}

export {
    DataBaseAccessError
}