import { StatusCodes } from "http-status-codes";

export interface IHttpResponse<T> {
    body: T,
    statusCode: StatusCodes
}