import HTTP from "@/axios/axios";
import { AxiosResponse } from "axios";
import { IRequest, IResponse } from "@/models/ILogin";

async function login(data: IRequest): Promise<AxiosResponse<IResponse>> {
    return await HTTP.post<string, AxiosResponse<IResponse>>("/Auth/SignIn", data);
}

export {
    login
};
