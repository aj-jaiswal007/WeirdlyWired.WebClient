import { FC } from "react";
import { IChatMessage } from "../../../interfaces/common/IChatMessage";
import userImg from "../../../assets/user.png"


export const ChatMessage: FC<IChatMessage> = props => {
    return (
        < li className="d-flex justify-content-between mb-4" >
            <img src={userImg} alt="avatar"
                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong p1" width="60" />
            <div className="card mask-custom w-100">
                <div className="card-header d-flex justify-content-between p-3"
                    style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}>
                    <p className="fw-bold mb-0">{props.sender_name}</p>
                    <p className="text-light small mb-0"><i className="far fa-clock"></i>{new Date().toDateString()}</p>
                </div>
                <div className="card-body">
                    <p className="mb-0">
                        {props.content}
                    </p>
                </div>
            </div>
        </li >
    )
};


