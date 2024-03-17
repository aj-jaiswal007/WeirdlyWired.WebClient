import { FC } from "react";
import { Navigate } from "react-router-dom";
import { REFRESH_TOKEN } from "../../constants/LocalStorageKeys";
import { LOGIN_URL } from "../../constants/UrlPaths";
import { isTokenValid } from "../../utils/JwtHelper";
import { Header } from "../common/Header/Header";
import { callApi } from "../../utils/ApiCaller";
import { USER_PROFILE_API } from "../../constants/ApiEndpoints";
import { IDataResonse } from "../../interfaces/response/IDataResponse";
import { IUserDetail } from "../../interfaces/common/IUserDetail";

interface IProps {
    component: any,
    next: string
}

export const Protected: FC<IProps> = props => {
    const Cmp = props.component;
    const isAuthenticated = isTokenValid(REFRESH_TOKEN);
    if (isAuthenticated) {
        callApi({
            method: "get",
            endpoint: USER_PROFILE_API,
            onSuccess: (response: IDataResonse<IUserDetail>) => {
                // Set data in redux store
                console.log("User is logged in, data will be stored in redux store")
                console.log(response.data);
            }
        })
        return <div
            className="d-flex flex-column"
            style={{ height: "inherit" }}>
            <Header />
            <Cmp />
        </div>
    }

    return <Navigate to={`${LOGIN_URL}?next=${props.next}`} />

};