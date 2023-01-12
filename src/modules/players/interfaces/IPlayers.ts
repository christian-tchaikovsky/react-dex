interface IData {
    name: string
    number: number
    position: string
    team: number
    birthday: string
    height: number
    weight: number
    avatarUrl: string
    id: number
}

interface IResponse {
    data: IData[]
    count: number
    page: number
    size: number
}

interface IRequest {
    Name?: string
    TeamIds?: number[] | number
    Page?: number
    PageSize?: number
}
export type {
    IResponse,
    IRequest,
    IData
};
