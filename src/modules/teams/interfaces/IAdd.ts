interface IRequest {
    name: string
    foundationYear: number
    division: string
    conference: string
    imageUrl: string
}

interface IFields extends IRequest {}

export type {
    IRequest,
    IFields
};
