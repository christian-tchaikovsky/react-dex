import HTTP from "@/configs/axios/axios";
import { AxiosResponse } from "axios";
import { IRequest, IResponse } from "@/modules/players/interfaces/IPlayers";

async function getPlayers(params: IRequest = {}): Promise<AxiosResponse<IResponse>> {
    return await HTTP.get<IResponse>("/Player/GetPlayers", { params });
}

export {
    getPlayers
};
