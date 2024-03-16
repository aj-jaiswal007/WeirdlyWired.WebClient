import { FC } from "react";
import { Navigate } from "react-router-dom";
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
    const isAuthenticated = isTokenValid(REFRESH_TOKEN);
    return isAuthenticated ? (
        <div
            className="d-flex flex-column"
            style={{ height: "inherit" }}>
            <Header />
            <Cmp />
        </div>
    ) : (
        <Navigate to={`${LOGIN_URL}?next=${props.next}`} />
    );
};