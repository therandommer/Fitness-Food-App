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
        checkAccountExists(accountExists => {
            if(accountExists) //if their login details are found, log the user in
            {
                logIn();
            }
            else
            {
                //ask user if they want to create an account with their email
                if(window.confirm("An account does not exist with the current email address: " + email + "\nDo you want to create a new account?"));
                {
                    logIn();
                }
            }
        })
    }

    //function to check if the account the user is asking about exists
    const checkAccountExists = (call) => {
        fetch("http://localhost:3080/check-account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email})
        })
        .then(reply => reply.json())
        .then(reply => {
            useCallback(reply?.userExists) //checking if user exists
        });
    }

    //log in the user with their username and password
    const logIn = () => {
        fetch("http://localhost:3080/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password}) //checking if user exists
        })
        .then(reply => reply.json())
        .then(reply => { //if user is valid, log them in, else return with error
            if("success" === reply.message)
            {
                localStorage.setItem("user", JSON.stringify({email, token: reply.token})); //set the user in local storage for use
                props.setLoggedIn(true)
                props.setEmail(email)
                navigate("/")
            }
            else
            {
                window.alert("Wrong email or password\nTry again."); //tells the user they entered the wrong email or password
            }

        })
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

export default LoginPage;