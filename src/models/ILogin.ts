interface ILoginRequest {
    login: string
    password: string
}

interface ILoginResponse {
    name: string
    avatarUrl: string
    token: string
}

export type {
    ILoginRequest,
    ILoginResponse
};
