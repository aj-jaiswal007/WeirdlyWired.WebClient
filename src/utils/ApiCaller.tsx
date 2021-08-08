import { REFRESH_TOKEN_API } from "../constants/ApiEndpoints";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants/LocalStorageKeys";
import { CurrentPath } from "../constants/UrlPaths";
import { isTokenValid } from "./JwtHelper";
import { LogoutClient } from "./LogoutHelper";

const BASEURL = process.env.REACT_APP_API_BASE_URL;

interface CallApiParamerters {
    method: string,
    endpoint: string,
    body?: object,
    onSuccess: any
}
const raiseErrorIfNot2XX = (response: Response) => {
    if (response.status >= 200 && response.status <= 299) {
        return response.json();
    }
    throw Error(response.statusText);
}

export function refreshToken() {
    return fetch(`${BASEURL}${REFRESH_TOKEN_API}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "refresh": localStorage.getItem(REFRESH_TOKEN)
        })
    }).then(raiseErrorIfNot2XX).then((response: {
        access: string,
        refresh: string
    }) => {
        localStorage.setItem(REFRESH_TOKEN, response.refresh);
        localStorage.setItem(ACCESS_TOKEN, response.access);
    }).catch((error) => {
        LogoutClient(CurrentPath());
    });
}

export function callPublicApi({
    method,
    endpoint,
    body,
    onSuccess
}: CallApiParamerters) {
    return fetch(`${BASEURL}${endpoint}`, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(raiseErrorIfNot2XX).then(onSuccess).catch((error) => {
        console.log("Some error", error)
    });
}

export async function callApi({
    method,
    endpoint,
    body,
    onSuccess
}: CallApiParamerters) {
    if (!isTokenValid(ACCESS_TOKEN) && !isTokenValid(REFRESH_TOKEN)) {
        return LogoutClient(CurrentPath());
    }
    if (!isTokenValid(ACCESS_TOKEN) && isTokenValid(REFRESH_TOKEN)) {
        await refreshToken();
    }
    let accessToken = localStorage.getItem(ACCESS_TOKEN);
    let requestContent: RequestInit = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    }
    if (body != null) {
        requestContent.body = JSON.stringify(body);
    }
    return fetch(
        `${BASEURL}${endpoint}`,
        requestContent
    ).then((response) => {
        if (response.status >= 200 && response.status <= 299) {
            return response.json();
        } else if (response.status === 401) {
            console.warn(response);
            // LogoutClient(CurrentPath());
        }
        throw Error(response.statusText);
    }).then(onSuccess).catch((error) => {
        console.log("Some error", error)
    });
}