class DataBaseAccessError extends Error {
    originalError: unknown;

    constructor(className: string, originalError?: unknown){
        super(`Repositorie error in: ${className}`)
        this.name = "DataBaseAccessError";
        this.originalError = originalError;

        // DataBaseAccessError: Error in: getUserByEmail
        //     at new DataBaseAccessError (/path/to/file.ts:5:15) <= pour enlevé ça
        //     at getUserByEmail (/path/to/repo/user.service.ts:24:13)
        //     ...
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this,DataBaseAccessError);
        }
    }    
}

export {
    DataBaseAccessError
}