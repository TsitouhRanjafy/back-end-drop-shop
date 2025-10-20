class RepositoryError extends Error {
    origin: string;

    constructor(error: unknown, origin: string, stack?: string ){
        const message = (error instanceof Error) ? error.message : "unknow error";
        super(message)
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor); 
        this.stack = stack;
        this.origin = origin;
    }  
}

export {
    RepositoryError
}