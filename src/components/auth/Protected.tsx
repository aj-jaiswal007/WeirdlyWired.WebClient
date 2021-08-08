import { FC } from "react";
import {
    Redirect
} from "react-router-dom";
import { REFRESH_TOKEN } from "../../constants/LocalStorageKeys";
import { LOGIN_URL } from "../../constants/UrlPaths";
import { isTokenValid } from "../../utils/JwtHelper";
import { Header } from "../common/Header/Header";

interface IProps {
    component: any,
    next: string
}

export const Protected: FC<IProps> = props => {
    const Cmp = props.component;
    if (!isTokenValid(REFRESH_TOKEN)) {
        return <Redirect to={`${LOGIN_URL}?next=${props.next}`} />
    } else {
        return (
            <div
                className="d-flex flex-column"
                style={{ height: "inherit" }}>
                <Header />
                <Cmp />
            </div>
        )
    }
};