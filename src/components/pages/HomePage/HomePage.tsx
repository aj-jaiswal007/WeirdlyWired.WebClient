import React from "react";
import { CHAT_URL } from "../../../constants/UrlPaths";
import { LogoutClient } from "../../../utils/LogoutHelper";

export class HomePage extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                Welcome to Home Page
                <br />
                <button className="btn btn-primary" onClick={() => { window.location.href = CHAT_URL; }}>Chat</button>
                <br />
                <br />
                <button className="btn btn-primary" onClick={() => { LogoutClient() }}>Logout</button>
            </div>
        );
    }
}