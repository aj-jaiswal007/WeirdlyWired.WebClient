import { Component } from "react";
import "./ChatPage.scss"
import userImg from "../../../assets/user.png"
interface IProps { }

interface IState { }

export class SamplePage extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
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
                                        <li className="p-2 border-bottom" style={{ borderBottom: "1px solid rgba(255,255,255,.3) !important" }}>
                                            <a href="#!" className="d-flex justify-content-between link-light">
                                                <div className="d-flex flex-row">
                                                    {/* <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" /> */}
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">John Doe</p>
                                                        <p className="small text-white">No Message</p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-white mb-1">Just now</p>
                                                    <span className="badge bg-danger float-end">1</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="p-2 border-bottom" style={{ borderBottom: "1px solid rgba(255,255,255,.3) !important" }}>
                                            <a href="#!" className="d-flex justify-content-between link-light">
                                                <div className="d-flex flex-row">
                                                    {/* <img src={userImg} alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" /> */}
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">Danny Smith</p>
                                                        <p className="small text-white">Lorem ipsum dolor sit.</p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-white mb-1">5 mins ago</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="p-2 border-bottom" style={{ borderBottom: "1px solid rgba(255,255,255,.3) !important" }}>
                                            <a href="#!" className="d-flex justify-content-between link-light">
                                                <div className="d-flex flex-row">
                                                    <img src={userImg} alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong p-2" width="60" />
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">Danny Smith</p>
                                                        <p className="small text-white">Lorem ipsum dolor sit.</p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-white mb-1">5 mins ago</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="p-2 border-bottom" style={{ borderBottom: "1px solid rgba(255,255,255,.3) !important" }}>
                                            <a href="#!" className="d-flex justify-content-between link-light">
                                                <div className="d-flex flex-row">
                                                    <img src={userImg} alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">Danny Smith</p>
                                                        <p className="small text-white">Lorem ipsum dolor sit.</p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-white mb-1">5 mins ago</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="p-2 border-bottom" style={{ borderBottom: "1px solid rgba(255,255,255,.3) !important" }}>
                                            <a href="#!" className="d-flex justify-content-between link-light">
                                                <div className="d-flex flex-row">
                                                    <img src={userImg} alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">Danny Smith</p>
                                                        <p className="small text-white">Lorem ipsum dolor sit.</p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-white mb-1">5 mins ago</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="p-2 border-bottom" style={{ borderBottom: "1px solid rgba(255,255,255,.3) !important" }}>
                                            <a href="#!" className="d-flex justify-content-between link-light">
                                                <div className="d-flex flex-row">
                                                    <img src={userImg} alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">Danny Smith</p>
                                                        <p className="small text-white">Lorem ipsum dolor sit.</p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-white mb-1">5 mins ago</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="p-2 border-bottom" style={{ borderBottom: "1px solid rgba(255,255,255,.3) !important" }}>
                                            <a href="#!" className="d-flex justify-content-between link-light">
                                                <div className="d-flex flex-row">
                                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">Alex Steward</p>
                                                        <p className="small text-white">Lorem ipsum dolor sit.</p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-white mb-1">Yesterday</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="p-2 border-bottom" style={{ borderBottom: "1px solid rgba(255,255,255,.3) !important" }}>
                                            <a href="#!" className="d-flex justify-content-between link-light">
                                                <div className="d-flex flex-row">
                                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg" alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">Ashley Olsen</p>
                                                        <p className="small text-white">Lorem ipsum dolor sit.</p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-white mb-1">Yesterday</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="p-2 border-bottom" style={{ borderBottom: "1px solid rgba(255,255,255,.3) !important" }}>
                                            <a href="#!" className="d-flex justify-content-between link-light">
                                                <div className="d-flex flex-row">
                                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-4.jpg" alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">Kate Moss</p>
                                                        <p className="small text-white">Lorem ipsum dolor sit.</p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-white mb-1">Yesterday</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="p-2 border-bottom" style={{ borderBottom: "1px solid rgba(255,255,255,.3) !important" }}>
                                            <a href="#!" className="d-flex justify-content-between link-light">
                                                <div className="d-flex flex-row">
                                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">Lara Croft</p>
                                                        <p className="small text-white">Lorem ipsum dolor sit.</p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-white mb-1">Yesterday</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="p-2">
                                            <a href="#!" className="d-flex justify-content-between link-light">
                                                <div className="d-flex flex-row">
                                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">Brad Pitt</p>
                                                        <p className="small text-white">Lorem ipsum dolor sit.</p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-white mb-1">5 mins ago</p>
                                                    <span className="text-white float-end"><i className="fas fa-check" aria-hidden="true"></i></span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>

                        <div className="d-flex flex-column col-md-6 col-lg-7 col-xl-7 chat-panel">
                            <div className="card-body message-panel">
                                <ul className="list-unstyled text-white">
                                    <li className="d-flex justify-content-between mb-4">
                                        <img src={userImg} alt="avatar"
                                            className="rounded-circle d-flex align-self-start me-3 shadow-1-strong p-1" width="60" />
                                        <div className="card mask-custom">
                                            <div className="card-header d-flex justify-content-between p-3"
                                                style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}>
                                                <p className="fw-bold mb-0">Brad Pitt</p>
                                                <p className="text-light small mb-0"><i className="far fa-clock"></i> 12 mins ago</p>
                                            </div>
                                            <div className="card-body">
                                                <p className="mb-0">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex justify-content-between mb-4">
                                        <div className="card mask-custom w-100">
                                            <div className="card-header d-flex justify-content-between p-3"
                                                style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}>
                                                <p className="fw-bold mb-0">Lara Croft</p>
                                                <p className="text-light small mb-0"><i className="far fa-clock"></i> 13 mins ago</p>
                                            </div>
                                            <div className="card-body">
                                                <p className="mb-0">
                                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                                    laudantium.
                                                </p>
                                            </div>
                                        </div>
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="avatar"
                                            className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60" />
                                    </li>
                                    <li className="d-flex justify-content-between mb-4">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar"
                                            className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60" />
                                        <div className="card mask-custom">
                                            <div className="card-header d-flex justify-content-between p-3"
                                                style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}>
                                                <p className="fw-bold mb-0">Brad Pitt</p>
                                                <p className="text-light small mb-0"><i className="far fa-clock"></i> 10 mins ago</p>
                                            </div>
                                            <div className="card-body">
                                                <p className="mb-0">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex justify-content-between mb-4">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar"
                                            className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60" />
                                        <div className="card mask-custom">
                                            <div className="card-header d-flex justify-content-between p-3"
                                                style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}>
                                                <p className="fw-bold mb-0">Brad Pitt</p>
                                                <p className="text-light small mb-0"><i className="far fa-clock"></i> 10 mins ago</p>
                                            </div>
                                            <div className="card-body">
                                                <p className="mb-0">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex justify-content-between mb-4">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar"
                                            className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60" />
                                        <div className="card mask-custom">
                                            <div className="card-header d-flex justify-content-between p-3"
                                                style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}>
                                                <p className="fw-bold mb-0">Brad Pitt</p>
                                                <p className="text-light small mb-0"><i className="far fa-clock"></i> 10 mins ago</p>
                                            </div>
                                            <div className="card-body">
                                                <p className="mb-0">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex justify-content-between mb-4">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar"
                                            className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60" />
                                        <div className="card mask-custom">
                                            <div className="card-header d-flex justify-content-between p-3"
                                                style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}>
                                                <p className="fw-bold mb-0">Brad Pitt</p>
                                                <p className="text-light small mb-0"><i className="far fa-clock"></i> 10 mins ago</p>
                                            </div>
                                            <div className="card-body">
                                                <p className="mb-0">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex justify-content-between mb-4">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar"
                                            className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60" />
                                        <div className="card mask-custom">
                                            <div className="card-header d-flex justify-content-between p-3"
                                                style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}>
                                                <p className="fw-bold mb-0">Brad Pitt</p>
                                                <p className="text-light small mb-0"><i className="far fa-clock"></i> 10 mins ago</p>
                                            </div>
                                            <div className="card-body">
                                                <p className="mb-0">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className="d-flex form-outline form-white mt-2">
                                    <input
                                        className="form-control pl-3"
                                        placeholder="Type your message..."
                                        style={{
                                            borderRadius: "20px 0px 0px 20px",
                                            padding: "10px"
                                        }}
                                    />
                                    <button
                                        className="btn btn-primary btn-rounded float-end"
                                        style={{ borderRadius: "0px 20px 20px 0px" }}>
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