
export interface IAPIResponse<T> {
    status: number;
    message?: string;
    data: T;
}

export class APIResponse<T> implements IAPIResponse<T> {
    status: number;
    message?: string;
    data: T;

    constructor(status: number, message: string, data: T) {
        this.status = status;
        this.message = message ?? this.getDefaultMsgForStatus(status);
        this.data = data;
    }

    getDefaultMsgForStatus(status: number): string {
        switch (status) {
            case 200: return 'OK';
            case 201: return 'Created';
            case 202: return 'Accepted';
            case 204: return 'No Content';
            case 400: return 'Bad Request';
            case 401: return 'Unauthorized';
            case 403: return 'Forbidden';
            case 404: return 'Not Found';
            case 409: return 'Conflict';
            case 500: return 'Internal Server Error';
            case 502: return 'Bad Gateway';
            case 503: return 'Service Unavailable';
            case 504: return 'Gateway Timeout';
            default: return 'Unknown Status Code';
        }
    }
}