import HTTP from "@/configs/axios/axios";
import { AxiosResponse } from "axios";
import { IRequest, IResponse } from "@/modules/auth/interfaces/IRegister";

async function register(data: IRequest): Promise<AxiosResponse<IResponse>> {
    return await HTTP.post<IResponse>("/Auth/SignUp", data);
}

export {
    register
};
