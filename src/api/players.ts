import HTTP from "@/configs/axios/axios";
import { AxiosResponse } from "axios";
import { IRequest, IResponse } from "@/modules/players/interfaces/IPlayers";
import qs from "qs";

async function getPlayers(params: IRequest = {}): Promise<AxiosResponse<IResponse>> {
    return await HTTP.get<IResponse>("/Player/GetPlayers", {
        params,
        paramsSerializer: params => qs.stringify(params)
    });
}

export {
    getPlayers
};
