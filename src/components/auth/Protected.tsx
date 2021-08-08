import { FC } from "react";
import {
    Redirect
} from "react-router-dom";
import { REFRESH_TOKEN } from "../../constants/LocalStorageKeys";
import { LOGIN_URL } from "../../constants/UrlPaths";
import { isTokenValid } from "../../utils/JwtHelper";

interface IProps {
    component: any,
    next: string
}

export const Protected: FC<IProps> = props => {
    const Cmp = props.component;
    return (
        <>
            {isTokenValid(REFRESH_TOKEN) ? <Cmp /> : <Redirect to={`${LOGIN_URL}?next=${props.next}`} />}
        </>
    );
};