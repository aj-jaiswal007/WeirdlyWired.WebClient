import React from "react";
import { WeirdFormHolder } from "../../common/WeirdFormHolder/WeirdFormHolder";
import "./HomePage.scss"
import loginImg from "../../../assets/login.png"
export class HomePage extends React.Component<{}, {}> {
    render() {
        return (
            <WeirdFormHolder
                weirdForm={<>This is not build yet</>}
                formTitle="HomePage"
                image={loginImg}
                backgroundColor="#17a2b8"
            />
        );
    }
}