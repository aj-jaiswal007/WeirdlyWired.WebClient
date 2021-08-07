import { FC } from "react";
import {
    Redirect
} from "react-router-dom";
import { ACCESS_TOKEN } from "../../constants/LocalStorageKeys";
import { LOGIN_URL } from "../../constants/UrlPaths";

interface IProps {
    component: any,
    next: string
}

export const Protected: FC<IProps> = props => {
    const Cmp = props.component;
    let accessToken = localStorage.getItem(ACCESS_TOKEN);
    return (
        <>
            {accessToken ? <Cmp /> : <Redirect to={`${LOGIN_URL}?next=${props.next}`} />}
        </>
    );
};