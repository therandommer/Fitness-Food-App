import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import "./loginPage.css";

const LoginPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();

    //update states on button clicks
    const onButtonClick = () => {

    }

    return <section className={"mainContainer"}>
        <section className={"titleContainer"}>
            <section>Login</section>
        </section>
        <br />
        <section className={"inputContainer"}>
            <input
                value={email}
                placeholder="Enter your email:"
                onChange={newEvent => setEmail(newEvent.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{emailError}</label>
        </section>
        <br />
        <section className={"inputContainer"}>
            <input
                value={password}
                placeholder="Enter your password:"
                onChange={newEvent => setPassword(newEvent.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
        </section>
        <br />
        <section className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Log in"} />
        </section>
    </section>
}