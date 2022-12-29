import HTTP from "@/axios/axios";
import { AxiosResponse } from "axios";
import { ILoginRequest, ILoginResponse } from "@/models/ILogin";

async function login(data: ILoginRequest): Promise<AxiosResponse<ILoginResponse>> {
    return await HTTP.post<string, AxiosResponse<ILoginResponse>>("/Auth/SignIn", data);
}

export {
    login
};
