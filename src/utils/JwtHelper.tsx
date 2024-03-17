import { Buffer } from "buffer";
import { ACCESS_TOKEN } from "../constants/LocalStorageKeys";

export function isTokenValid(token_key: string) {
    const token = localStorage.getItem(token_key);
    if (!token) {
        return false;
    }
    let tokenContent: { exp: number } = JSON.parse(Buffer.from(token.split(".")[1], 'base64').toString());
    let tokenDatetime = new Date(tokenContent.exp * 1000);
    return tokenDatetime > new Date()
}
