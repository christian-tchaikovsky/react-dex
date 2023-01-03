import HTTP from "@/configs/axios/axios";
import { AxiosResponse } from "axios";
import { IResponse, IRequest } from "@/modules/teams/interfaces/ITeams";

async function getTeams(params: IRequest): Promise<AxiosResponse<IResponse>> {
    return await HTTP.get<string, AxiosResponse<IResponse>>("/Team/GetTeams", { params });
}

export {
    getTeams
};
