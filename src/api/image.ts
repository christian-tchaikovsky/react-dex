import { AxiosResponse } from "axios";
import HTTP from "@/configs/axios/axios";

async function upload(data: FormData): Promise<AxiosResponse<string>> {
    return await HTTP.post<string, AxiosResponse<string>>("/Image/SaveImage", data);
}

export {
    upload
};
