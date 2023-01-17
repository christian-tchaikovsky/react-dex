import { IOption as IPositionOption } from "@/modules/players/components/Select/Position";
import { IOption as ITeamOption } from "@/modules/players/components/Select/Team";

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

interface IFields extends Omit<IData, "position" | "team"> {
    position: IPositionOption
    team: ITeamOption
}

export type {
    IResponse,
    IRequest,
    IFields,
    IData
};
