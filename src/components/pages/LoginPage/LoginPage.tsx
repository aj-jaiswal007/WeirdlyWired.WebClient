import React, { Component, MouseEvent } from 'react';
import "./LoginPage.scss"
import { TokenResponse } from '../../../interfaces/response/tokenResponse';
import callApi from '../../../utils/apiCaller';
import { HOME_URL } from '../../../constants/UrlPaths';
import { Redirect } from 'react-router-dom';
import { ACCESS_TOKEN } from '../../../constants/LocalStorageKeys';
import { CREATE_TOKEN_API, VERIFY_TOKEN_API } from '../../../constants/ApiEndpoints';
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

    login(event: MouseEvent<HTMLElement>) {
        callApi({
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
        let accessToken = localStorage.getItem(ACCESS_TOKEN);
        if (!accessToken) {
            return;
        }
        callApi({
            method: "post",
            endpoint: VERIFY_TOKEN_API,
            body: {
                token: accessToken
            },
            onSuccess: (result: {}) => {
                console.log("Verify token sucessful");
                this.setState({ isLoggedIn: true });
            }
        });
    }

    render() {
        return (
            <> {this.state.isLoggedIn ?
                <Redirect to={this.state.nextUrl} />
                :
                <div className="LoginPage">
                    <div className="LoginBody">
                        <div className="form-group">
                            <label htmlFor="loginEmail">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter username"
                                onChange={(e) => { this.setState({ username: e.target.value }) }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="loginPassword">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                onChange={(e) => { this.setState({ password: e.target.value }) }} />

                        </div>
                        <button className="btn btn-primary" onClick={this.login.bind(this)}>Login</button>
                    </div>
                </div>
            }
            </>
        );
    }
}

