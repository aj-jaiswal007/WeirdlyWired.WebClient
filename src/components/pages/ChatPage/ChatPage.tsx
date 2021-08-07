import { Component } from "react";


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
            </div>
        );
    }
}