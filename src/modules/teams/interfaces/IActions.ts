interface IRequest {
    name: string
    foundationYear: number
    division: string
    conference: string
    imageUrl: string
}

interface IResponse extends IRequest {
    id: number
}

interface IFields extends IRequest {}

export type {
    IResponse,
    IRequest,
    IFields
};
