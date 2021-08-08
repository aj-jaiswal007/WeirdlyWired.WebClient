import { Component, FormEvent } from 'react';
import "./LoginPage.scss"
import { TokenResponse } from '../../../interfaces/response/tokenResponse';
import { HOME_URL } from '../../../constants/UrlPaths';
import { Redirect } from 'react-router-dom';
import { REFRESH_TOKEN } from '../../../constants/LocalStorageKeys';
import { CREATE_TOKEN_API } from '../../../constants/ApiEndpoints';
import { isTokenValid } from '../../../utils/JwtHelper';
import { callPublicApi } from '../../../utils/ApiCaller';
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
        return (
            <> {this.state.isLoggedIn ?
                <Redirect to={this.state.nextUrl} />
                :
                <div className="LoginPage">
                    <div className="LoginBody">
                        <form onSubmit={this.login.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="loginEmail">Email address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter username"
                                    onChange={(e) => { this.setState({ username: e.target.value }) }}
                                    required={true}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="loginPassword">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={(e) => { this.setState({ password: e.target.value }) }}
                                    required={true}
                                />

                            </div>
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </form>
                    </div>
                </div>
            }
            </>
        );
    }
}

