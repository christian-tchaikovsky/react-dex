import { IOption as IPositionOption } from "../utils/positionOptions";
import { IOption as ITeamOption } from "../utils/teamOptions";

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

interface IDetails extends IData {
    teamName: string
}

interface IFields extends Omit<IData, "position" | "team" | "id"> {
    position: IPositionOption
    team: ITeamOption
}

export type {
    IResponse,
    IDetails,
    IRequest,
    IFields,
    IData
};
