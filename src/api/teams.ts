import HTTP from "@/configs/axios/axios";
import { AxiosResponse } from "axios";
import { IResponse, IRequest, IData } from "@/modules/teams/interfaces/ITeams";
import { IResponse as IAddResponse, IRequest as IAddRequest } from "@/modules/teams/interfaces/IAdd";

async function getTeams(params: IRequest): Promise<AxiosResponse<IResponse>> {
    return await HTTP.get<IResponse>("/Team/GetTeams", { params });
}

async function getTeam(id: number): Promise<AxiosResponse<IData>> {
    return await HTTP.get<IData>("/Team/Get", { params: { id } });
}

async function addTeam(data: IAddRequest): Promise<AxiosResponse<IAddResponse>> {
    return await HTTP.post<IAddResponse>("/Team/Add", data);
}

export {
    getTeams,
    getTeam,
    addTeam
};
