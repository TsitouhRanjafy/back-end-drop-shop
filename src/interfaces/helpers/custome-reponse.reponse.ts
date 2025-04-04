import { StatusCodes } from "http-status-codes"
import { CustomHttpResponse } from "../../core"

export const response_ok = (id: number, token: string,statusCode: StatusCodes = StatusCodes.OK): CustomHttpResponse => {
    return {
        body: { id,token }, 
        statusCode: statusCode
    }
}

export const response_not_ok = (message: string,statusCode: StatusCodes = StatusCodes.BAD_REQUEST): CustomHttpResponse => {
    return {
        body: { message },
        statusCode: statusCode
    }
}