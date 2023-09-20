
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";
import { requestBackend } from "../utils/requests";
import { ProductDTO } from "../models/product";

export function findPageRequest(page: number, name: string, size = 12, sort = "name"){

    const config : AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: "/products",
        params: {
            page,
            name,
            size,
            sort
        }
    }

    return axios(config);
}

export function findById(id: number){
    return axios.get(`${BASE_URL}/products/${id}`);
}

export function deleteById(id: number) {
    const config : AxiosRequestConfig = {
        method: "DELETE",
        url: `/products/${id}`,
        withCredentials: true,
    }
    return requestBackend(config);
}

export function updateRequest(obj: ProductDTO) {
    const config: AxiosRequestConfig = {
        method: "PUT",
        url: `/products/${obj.id}`,
        withCredentials: true,
        data: obj
    }
    return requestBackend(config);
}

export function insertRequest(obj: ProductDTO) {
    const config: AxiosRequestConfig = {
        method: "POST",
        url: "/products",
        withCredentials: true,
        data: obj
    }
    return requestBackend(config);
}

