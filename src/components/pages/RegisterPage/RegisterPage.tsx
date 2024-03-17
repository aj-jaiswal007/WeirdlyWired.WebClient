import { ChangeEvent, Component, FormEvent } from "react";
import loginImg from "../../../assets/login.png"
import { WeirdForm } from "../../common/WeirdForm/WeirdForm";
import { WeirdFormHolder } from "../../common/WeirdFormHolder/WeirdFormHolder";
import { callPublicApi } from "../../../utils/ApiCaller";
import { USER_REGISTER_API } from "../../../constants/ApiEndpoints";
import { Navigate } from "react-router-dom";
import { LOGIN_URL } from "../../../constants/UrlPaths";
interface IProps { }

interface IState {
    firstName?: string,
    lastName?: string,
    userName?: string,
    email?: string,
    password?: string,
    confirmPassword?: string
}

export class RegisterPage extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    register(event: FormEvent<HTMLElement>) {
        event.preventDefault();
        callPublicApi(
            {
                method: "post",
                endpoint: USER_REGISTER_API,
                body: {
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                    email: this.state.email,
                    username: this.state.userName,
                    password: this.state.password,
                    confirm_password: this.state.confirmPassword
                },
                onSuccess: (result: any) => {
                    alert("User registered successfully");
                    return <Navigate to={LOGIN_URL} />;
                },
                onFailure: (error: Error) => {
                    alert(error.message);
                }
            }
        )
    }

    render() {
        let loginForm = <WeirdForm
            onSubmit={this.register.bind(this)}
            formElements={[
                {
                    type: "text",
                    placeholder: "First name",
                    onChange: (e: ChangeEvent<HTMLInputElement>) => {
                        this.setState({ firstName: e.target.value })
                    },
                    required: true,
                    faIcon: "fa-user"
                },
                {
                    "type": "text",
                    "placeholder": "Last Name",
                    "onChange": (e: ChangeEvent<HTMLInputElement>) => {
                        this.setState({ lastName: e.target.value })
                    },
                    "required": true,
                    "faIcon": "fa-user"
                },
                {
                    type: "text",
                    placeholder: "Enter username",
                    onChange: (e: ChangeEvent<HTMLInputElement>) => {
                        this.setState({ userName: e.target.value })
                    },
                    required: true,
                    faIcon: "fa-user"
                },
                {
                    type: "email",
                    placeholder: "Enter email",
                    onChange: (e: ChangeEvent<HTMLInputElement>) => {
                        this.setState({ lastName: e.target.value })
                    },
                    required: true,
                    faIcon: "fa-envelope"
                },
                {
                    type: "password",
                    placeholder: "Enter password",
                    onChange: (e: ChangeEvent<HTMLInputElement>) => {
                        this.setState({ password: e.target.value })
                    },
                    required: true,
                    faIcon: "fa-lock"
                },
                {
                    type: "password",
                    placeholder: "Confirm password",
                    onChange: (e: ChangeEvent<HTMLInputElement>) => {
                        this.setState({ confirmPassword: e.target.value })
                    },
                    required: true,
                    faIcon: "fa-key"
                }
            ]}
            submitButtonText="Register"
            formFooter={
                <>
                    <div className="form-check d-flex mb-0">
                        <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="agreeCheck"
                            required={true}
                        />
                        <label className="form-check-label" htmlFor="agreeCheck">
                            I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                    </div>
                    <div className="text-center text-lg-start mt-2 pt-2">
                        <p className="small fw-bold mt-0 pt-1 mb-2">Already have an account? <a href="/login"
                            className="link-danger">Login</a></p>
                    </div>
                </>

            }
        />

        return (
            <WeirdFormHolder
                weirdForm={loginForm}
                formTitle="Sign up"
                image={loginImg}
                backgroundColor="#17a2b8"
            />
        );
    }
}