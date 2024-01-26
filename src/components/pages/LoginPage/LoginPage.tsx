import { ChangeEvent, Component, FormEvent } from 'react';
import "./LoginPage.scss"
import { TokenResponse } from '../../../interfaces/response/ITokenResponse';
import { HOME_URL } from '../../../constants/UrlPaths';
import { Navigate } from 'react-router-dom';
import { REFRESH_TOKEN } from '../../../constants/LocalStorageKeys';
import { CREATE_TOKEN_API } from '../../../constants/ApiEndpoints';
import { isTokenValid } from '../../../utils/JwtHelper';
import { callPublicApi } from '../../../utils/ApiCaller';
import loginImg from "../../../assets/login.png"
import { WeirdFormHolder } from '../../common/WeirdFormHolder/WeirdFormHolder';
import { WeirdForm } from '../../common/WeirdForm/WeirdForm';
interface IProps { }

interface IState {
    username?: string;
    password?: string;
    nextUrl: string;
    isLoggedIn: boolean
}
export class LoginPage extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            nextUrl: HOME_URL,
            isLoggedIn: false
        };
    }

    login(event: FormEvent<HTMLElement>) {
        event.preventDefault();
        callPublicApi({
            method: "post",
            endpoint: CREATE_TOKEN_API,
            body: {
                username: this.state.username,
                password: this.state.password
            },
            onSuccess: (result: TokenResponse) => {
                localStorage.setItem("access", result.access);
                localStorage.setItem("refresh", result.refresh);
                this.setState({ isLoggedIn: true });
            }
        });
    }
    componentDidMount() {
        this.setNextUrl();
        this.checkIfAlreadyLoggedIn();
    }

    setNextUrl() {
        const params = new URLSearchParams(window.location.search);
        let nextUrl = params.get("next");
        if (nextUrl) {
            this.setState({ nextUrl: nextUrl });
        }
    }
    checkIfAlreadyLoggedIn() {
        if (isTokenValid(REFRESH_TOKEN)) {
            this.setState({ isLoggedIn: true });
        }
    }

    render() {
        if (this.state.isLoggedIn) {
            return <Navigate to={this.state.nextUrl} />;
        }
        let loginForm = <WeirdForm
            onSubmit={this.login.bind(this)}
            formElements={[
                {
                    type: "text",
                    placeholder: "Enter username",
                    onChange: (e: ChangeEvent<HTMLInputElement>) => {
                        this.setState({ username: e.target.value })
                    },
                    required: true,
                    faIcon: "fa-user"
                },
                {
                    type: "password",
                    placeholder: "Enter password",
                    onChange: (e: ChangeEvent<HTMLInputElement>) => {
                        this.setState({ password: e.target.value })
                    },
                    required: true,
                    faIcon: "fa-lock"
                }
            ]}
            submitButtonText="Login"
            formFooter={
                <>
                    <div className="form-check d-flex mb-0">
                        <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="stayLoggedIn"
                        />
                        <label className="form-check-label" htmlFor="stayLoggedIn">
                            Remember Me
                        </label>
                    </div>
                    <div className="text-center text-lg-start mt-2 pt-2">
                        <p className="small fw-bold mt-0 pt-1 mb-2">Don't have an account? <a href="/register"
                            className="link-danger">Register</a></p>
                    </div>
                </>

            }
        />

        return (
            <WeirdFormHolder
                weirdForm={loginForm}
                formTitle="Log In"
                image={loginImg}
                backgroundColor="#17a2b8"
            />
        );
    }
}






