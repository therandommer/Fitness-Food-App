import React from "react";
import {useNavigate} from "react-router-dom";

const LoginElement = (props) => {
    const {isLoggedIn, email} = props;
    const navigate = useNavigate();

    //update on button state
    const onButtonClick = () => {

    }

    //creating the HTML for the containers of the login menu
    //the button will update based on the value of isLoggedIn
    return <section className="mainContainer">
        <section className={"titleContainer"}>
            <section>Hi!</section>
        </section>
        <section>
            This is my login page, I hope it will work soon!
        </section>
        <section className={"buttonContainer"}>
            <input className={"inputButton"}
            type="button"
            onClick={onButtonClick}
            value={isLoggedIn ? "Log out" : "Log in"} />
            {(isLoggedIn ? <section>
                Your email address is: {email}
            </section> : <section/>)}
        </section>
    </section>
}

export default LoginPage;