import QueryString from "qs";
import { CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import * as accessTokenRepository from '../localstorage/acess-token-repository';

export function loginRequest(loginData: CredentialsDTO) {

    // credencias da aplicação + credenciais do usuario -> TOKEN JWT

    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }

    const requestBody = QueryString.stringify({...loginData, grant_type: "password"}); // gerando o objeto xxx-form-urlencoded

    const config: AxiosRequestConfig = {
        method: "POST",
        url: "/oauth/token",
        data: requestBody,
        headers
    }

    return requestBackend(config);

}

export function logout() {
    accessTokenRepository.remove();
}

export function saveAccessToken(token: string) {
    accessTokenRepository.save(token);
}

export function getAccessToken() {
    return accessTokenRepository.get();
}
