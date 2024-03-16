import { FC } from "react";
import { IChatUser } from "../../../interfaces/common/IChatItem";


export const ChatListUser: FC<IChatUser> = props => {

    let displayName = `${props.first_name} ${props.last_name}`.trim();
    displayName = displayName ? displayName : props.username;

    return (
        <li
            className="p-2 border-bottom"
            style={{ borderBottom: "1px solid rgba(255,255,255,.3) !important" }}
        >
            <a href="#!" className="d-flex justify-content-between link-light">
                <div className="d-flex flex-row">
                    {/* <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" /> */}
                    <div className="pt-1">
                        <p className="fw-bold mb-0 text-white font-weight-bold">{displayName}</p>
                        <p className="small text-white">No Message</p>
                    </div>
                </div>
                <div className="pt-1">
                    <p className="small text-white mb-1">Just now</p>
                    {/* <span className="badge bg-danger float-end">1</span> */}
                </div>
            </a>
        </li>
    )
};


