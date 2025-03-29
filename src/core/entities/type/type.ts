import { StatusCodes } from "http-status-codes"


interface IHttpRequest<Type> { 
    body: Type,
}

interface IHttpResponse<Type> {
    body: Type,
    statusCode: StatusCodes
}

export {
    IHttpRequest,
    IHttpResponse
}