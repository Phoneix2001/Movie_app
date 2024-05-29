export enum Status {
    LOADING,
    COMPLETED,
    ERROR
};

export type ApiResponse<T> = {
    status: Status;
    data?: T;
    message?: string;
};

export const loading = (): ApiResponse<never> => ({
    status: Status.LOADING
});


// static loading() =>  ApiResponse {
//   return new ApiResponse(Status.LOADING, null, null);
// }

export const completed = <T>(value: T): ApiResponse<T> => ({
    status: Status.COMPLETED,
    data: value
});

export const error = (message: string): ApiResponse<never> => ({
    status: Status.ERROR,
    message: message
});

