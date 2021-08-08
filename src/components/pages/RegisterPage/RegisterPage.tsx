import { ChangeEvent, Component } from "react";
import loginImg from "../../../assets/login.png"
import { WeirdForm } from "../../common/WeirdForm/WeirdForm";
import { WeirdFormHolder } from "../../common/WeirdFormHolder/WeirdFormHolder";
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

    render() {
        let loginForm = <WeirdForm
            onSubmit={() => console.log("Register called")}
            formElements={[
                {
                    type: "text",
                    placeholder: "Enter your name",
                    onChange: (e: ChangeEvent<HTMLInputElement>) => {
                        this.setState({ firstName: e.target.value })
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