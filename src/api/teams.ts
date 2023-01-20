import HTTP from "@/configs/axios/axios";
import { AxiosResponse } from "axios";
import { IResponse, IRequest, IData } from "@/modules/teams/interfaces/ITeams";

async function getTeams(params: IRequest): Promise<AxiosResponse<IResponse>> {
    return await HTTP.get<IResponse>("/Team/GetTeams", { params });
}

async function getTeam(id: number): Promise<AxiosResponse<IData>> {
    return await HTTP.get<IData>("/Team/Get", { params: { id } });
}

async function addTeam(data: Omit<IData, "id">): Promise<AxiosResponse<IData>> {
    return await HTTP.post<IData>("/Team/Add", data);
}

async function editTeam(data: Omit<IData, "id">): Promise<AxiosResponse<IData>> {
    return await HTTP.put<IData>("/Team/Update", data);
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
