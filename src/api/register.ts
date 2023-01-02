import HTTP from "@/axios/axios";
import { AxiosResponse } from "axios";
import { IRequest, IResponse } from "@/models/IRegister";

async function register(data: IRequest): Promise<AxiosResponse<IResponse>> {
    return await HTTP.post<string, AxiosResponse<IResponse>>("/Auth/SignUp", data);
}

export {
    register
};
