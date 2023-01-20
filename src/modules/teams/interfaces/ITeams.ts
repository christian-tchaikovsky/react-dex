interface IData {
    name: string
    foundationYear: number
    division: string
    conference: string
    imageUrl: string
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
    Page?: number
    PageSize?: number
}

type IFields = Omit<IData, "id">;

export type {
    IResponse,
    IRequest,
    IFields,
    IData
};
