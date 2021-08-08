import { Component } from "react";
import { GET_USERS_API } from "../../../constants/ApiEndpoints";
import { callApi } from "../../../utils/ApiCaller";


interface IProps { }

interface IState { }

export class ChatPage extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                This is Chat page
                <br />
                <button
                    onClick={() => {
                        callApi({
                            method: "get",
                            endpoint: GET_USERS_API,
                            onSuccess: (result: JSON) => {
                                console.log("Users found", result)
                            }
                        })
                    }}
                >Get Users</button>
            </div>
        );
    }
}