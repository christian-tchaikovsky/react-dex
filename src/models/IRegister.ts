interface IRequest {
    userName: string
    login: string
    password: string
}

interface IResponse {
    name: string
    avatarUrl: string
    token: string
}

interface IFields extends IRequest {
    confirmPassword: string
    agreement: boolean
}

export type {
    IFields,
    IRequest,
    IResponse
};
