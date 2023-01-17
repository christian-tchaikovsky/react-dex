import HTTP from "@/configs/axios/axios";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { IRequest, IResponse } from "@/modules/players/interfaces/IPlayers";
import qs from "qs";

async function getPlayers(params: IRequest = {}, config?: AxiosRequestConfig): Promise<AxiosResponse<IResponse>> {
    return await HTTP.get<IResponse>("/Player/GetPlayers", {
        params,
        paramsSerializer: params => qs.stringify(params),
        ...config
    });
}

async function getPositions(): Promise<AxiosResponse<string[]>> {
    return await HTTP.get<string[]>("/Player/GetPositions");
}

export {
    getPositions,
    getPlayers
};
