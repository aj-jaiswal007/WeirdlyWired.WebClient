import React, { Component } from "react";

interface IProps { }

interface IState { }

export class RegisterPage extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                Register Page
            </div>
        );
    }
}