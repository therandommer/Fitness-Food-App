//--- Variables ---
let newUsername = "usernameVariable";
let newPassword = "passwordVariable";

//--- Functions ---

export default function LoginButton(){
    return(
        <section>
            <h1>Test</h1>
            <p>Your user details are: {newUsername} -- {newPassword}</p>
            <button>Login now :3</button>
        </section>
    );
}