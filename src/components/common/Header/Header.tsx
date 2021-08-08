import { FC } from "react";
import { LogoutClient } from "../../../utils/LogoutHelper";


interface IProps { }

export const Header: FC<IProps> = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <a className="navbar-brand mt-2 mt-lg-0" href="/home">
                        <i className="fa fa-home fa-lg"></i>
                    </a>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/chat">Chat</a>
                        </li>
                    </ul>
                </div>

                <div className="d-flex align-items-center">
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => { LogoutClient() }}
                    >
                        <i className="fa fa-sign-out mr-1" aria-hidden="true"></i>
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
};


