import { REFRESH_TOKEN_API } from "../constants/ApiEndpoints";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants/LocalStorageKeys";

const BASEURL = "http://127.0.0.1:8000";

interface CallApiParamerters {
    method: string,
    endpoint: string,
    body: object,
    onSuccess: any
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
    }).then((response) => {
        // put status code checks here
        if (response.status === 200) {
            return response.json();
        } else {
            localStorage.clear();
            throw Error(response.statusText);
        }
    }).then((response: {
        access: string,
        refresh: string
    }) => {
        localStorage.setItem(REFRESH_TOKEN, response.refresh);
        localStorage.setItem(ACCESS_TOKEN, response.access);
    }).catch((error) => {
        console.log("Some error", error)
    });
}

export default function callApi({
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
    }).then((response) => {
        // put status code checks here
        if (response.status === 200) {
            return response.json();
        } else {
            throw Error(response.statusText);
        }
    }).then(onSuccess).catch((error) => {
        console.log("Some error", error)
    });
}