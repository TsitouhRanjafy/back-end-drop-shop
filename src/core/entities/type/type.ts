import { StatusCodes } from "http-status-codes"


interface IHttpRequest<Type> { 
    body: Type,
}

interface IHttpResponse<Type> {
    body: Type,
    statusCode: StatusCodes
}

interface IAuthUsecaseResponse {
    id: number,
    token: string,
}


type CustomHttpResponse = IHttpResponse<{ id: number,token: string }> | IHttpResponse<{message: string}>


export {
    IHttpRequest,
    IHttpResponse,
    IAuthUsecaseResponse,
    CustomHttpResponse
}