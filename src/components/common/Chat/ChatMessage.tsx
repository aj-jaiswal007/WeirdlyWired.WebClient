import { FC } from "react";
import { IChatMessage } from "../../../interfaces/common/IChatMessage";
import userImg from "../../../assets/user.png"


export const ChatMessage: FC<IChatMessage> = props => {
    let avatarDiv = <img src={userImg} alt="avatar"
        className="rounded-circle d-flex align-self-start me-3 shadow-1-strong p1" width="60" />;
    let bubbleClass = props.is_me ? "bubble-left" : "bubble-right";
    return (
        < li className="d-flex justify-content-between mb-4" >
            {props.is_me ? null : avatarDiv}
            <div className={`card mask-custom w-100 ${bubbleClass}`}>
                <div className="card-body">
                    <p className="mb-0">
                        {props.content}
                    </p>
                    <hr className="my-1" />
                    <p className="text-light small mb-0">{new Date().toDateString()}</p>
                </div>
            </div>
            {props.is_me ? avatarDiv : null}

        </li >
    )
};


