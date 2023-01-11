import HTTP from "@/configs/axios/axios";
import { AxiosResponse } from "axios";
import { IResponse, IRequest, IData } from "@/modules/teams/interfaces/ITeams";
import { IResponse as IActionResponse, IRequest as IActionRequest } from "@/modules/teams/interfaces/IActions";

async function getTeams(params: IRequest): Promise<AxiosResponse<IResponse>> {
    return await HTTP.get<IResponse>("/Team/GetTeams", { params });
}

async function getTeam(id: number): Promise<AxiosResponse<IData>> {
    return await HTTP.get<IData>("/Team/Get", { params: { id } });
}

async function addTeam(data: IActionRequest): Promise<AxiosResponse<IActionResponse>> {
    return await HTTP.post<IActionResponse>("/Team/Add", data);
}

async function editTeam(data: IActionRequest): Promise<AxiosResponse<IActionResponse>> {
    return await HTTP.put<IActionResponse>("/Team/Update", data);
}

async function removeTeam(id: number): Promise<AxiosResponse<IData>> {
    return await HTTP.delete<IData>("/Team/Delete", { params: { id } });
}

export {
    removeTeam,
    getTeams,
    editTeam,
    getTeam,
    addTeam
};
