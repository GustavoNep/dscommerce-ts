import { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";
import { requestBackend } from "../utils/requests";

export function findAllRequest(){

    const config : AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: "/categories",

    }

    return requestBackend(config);
}
