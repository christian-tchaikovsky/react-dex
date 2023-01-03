interface IRequest {
    login: string
    password: string
}

interface IResponse {
    name: string
    avatarUrl: string
    token: string
}

interface IFields extends IRequest {}

export type {
    IFields,
    IRequest,
    IResponse
};
