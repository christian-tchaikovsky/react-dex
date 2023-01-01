interface IRequest {
    login: string
    password: string
}

interface IResponse {
    name: string
    avatarUrl: string
    token: string
}

export type {
    IRequest,
    IResponse
};
