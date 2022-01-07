import React, { ChangeEvent, Component, KeyboardEvent } from "react";
import "./ChatPage.scss"
import { ChatListItem } from "../../common/Chat/ChatListItem";
import { IChatItem } from "../../../interfaces/common/IChatItem";
import { callApi, validateToken } from "../../../utils/ApiCaller";
import { GET_USERS_API } from "../../../constants/ApiEndpoints";
import { IDataResonse } from "../../../interfaces/response/IDataResponse";
import { IChatMessage } from "../../../interfaces/common/IChatMessage";
import { ChatMessage } from "../../common/Chat/ChatMessage";
import { ACCESS_TOKEN } from "../../../constants/LocalStorageKeys";
const WSBASEURL = process.env.REACT_APP_WS_BASE_URL;

interface IProps { }
var SOCKET: WebSocket | null = null;
interface IState {
    chatItems?: Array<IChatItem>,
    chatMessages?: Array<IChatMessage>,
    messageText?: string
}
export class ChatPage extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    componentDidMount(): void {
        callApi({
            method: "get",
            endpoint: GET_USERS_API,
            onSuccess: (response: IDataResonse<Array<IChatItem>>) => {
                this.setState({ chatItems: response.data })
            }
        });
        this.connectSocket();
    }


    connectSocket() {
        if (SOCKET) {
            SOCKET.close(3000, "closed by client");
        }
        validateToken().then(() => {
            let accessToken = localStorage.getItem(ACCESS_TOKEN);
            SOCKET = new WebSocket(`${WSBASEURL}/chat/?token=${accessToken}`)
            this.setupSocket();
            this.clearChat();
        });
    }
    clearChat() {
        this.setState({ chatMessages: [] })
    }

    addMessage(message: IChatMessage) {
        let messages = this.state.chatMessages;
        messages?.push(message)
        this.setState({ chatMessages: messages })
    }
    onMessage(event: MessageEvent<any>) {
        console.log(`[message] Data received from server: ${event.data}`);
        let r: IChatMessage = JSON.parse(event.data);
        this.addMessage(r)
    }
    sendSocketMessage(data: string) {
        SOCKET?.send(data);
    }
    sendTextMessage() {
        if (!this.state.messageText) {
            return;
        }
        console.log(this.state.chatItems);
        if (this.state.chatItems) {
            const msg = JSON.stringify({
                "content": this.state.messageText,
                "receiver_id": this.state.chatItems[0].id
            })
            this.sendSocketMessage(msg)
        }
        this.setState({ messageText: "" });
    }

    handleInput(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ messageText: event.target.value });
    }


    setupSocket = () => {
        if (!SOCKET) {
            return alert("Socket not initialized");
        }
        SOCKET.onopen = function (e) {
            console.log("[open] Connection established");
        };

        SOCKET.onmessage = (event) => { this.onMessage(event) }
        SOCKET.onclose = function (event) {
            if (event.wasClean) {
                console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
            } else {
                // e.g. server process killed or network down
                // event.code is usually 1006 in this case
                console.log('[close] Connection died');
            }
        };

        SOCKET.onerror = function (error) {
            alert(`[error] ${error}`);
        };
    }



    render() {
        return (
            <section className="gradient-custom">
                <div className="container py-5 px-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-xl-5 mb-4 mb-md-0">
                            <h5 className="font-weight-bold text-center text-white">Friends</h5>
                            <div className="card mask-custom">
                                <div className="card-body members-panel">
                                    <ul className="list-unstyled mb-0">
                                        {this.state.chatItems?.map(chatItem => {
                                            return (
                                                <div key={chatItem.key}>
                                                    <ChatListItem {...chatItem} />
                                                </div>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="d-flex flex-column col-md-6 col-lg-7 col-xl-7 chat-panel">
                            <div className="card-body message-panel">
                                <ul className="list-unstyled text-white">
                                    {this.state.chatMessages?.map(chatMessage => {
                                        return <ChatMessage {...chatMessage} />
                                    })}
                                </ul>
                            </div>
                            <div>
                                <div className="d-flex form-outline form-white mt-2">
                                    <input
                                        className="form-control pl-3"
                                        placeholder="Type your message..."
                                        value={this.state.messageText}
                                        style={{
                                            borderRadius: "20px 0px 0px 20px",
                                            padding: "10px"
                                        }}
                                        onChange={this.handleInput.bind(this)}
                                        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                                            if (e.key === "Enter" && e.ctrlKey) {
                                                this.sendTextMessage()
                                            }
                                        }}
                                    />
                                    <button
                                        className="btn btn-primary btn-rounded float-end"
                                        style={{ borderRadius: "0px 20px 20px 0px" }}
                                        onClick={() => { this.sendTextMessage() }}>
                                        <i className="fa fa-paper-plane fa-lg mr-2" aria-hidden="true"></i></button>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>
            </section>
        );
    }
}