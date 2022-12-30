interface IRegisterRequest {
    userName: string
    login: string
    password: string
}

interface IRegisterResponse {
    name: string
    avatarUrl: string
    token: string
}

interface IRegisterFields extends IRegisterRequest {
    confirmPassword: string
    agreement: boolean
}

export type {
    IRegisterFields,
    IRegisterRequest,
    IRegisterResponse
};
