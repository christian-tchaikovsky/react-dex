import HTTP from "@/configs/axios/axios";
import { AxiosResponse } from "axios";
import { IRequest, IResponse } from "@/modules/auth/interfaces/ILogin";

async function login(data: IRequest): Promise<AxiosResponse<IResponse>> {
    return await HTTP.post<IResponse>("/Auth/SignIn", data);
}

export {
    login
};
