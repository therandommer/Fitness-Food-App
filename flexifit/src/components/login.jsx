//--- Variables ---
let User = {
    username: "",
    password: ""
}

let newUsername = "usernameVariable";
let newPassword = "";
let validUsers = []; //will contain a list of valid user objects to compare

//--- Functions ---

const bob = new User(newUsername, newPassword);
console.log(bob);
export default function LoginButton(){
    return(
        <section>
            <h1>Test</h1>
            <p>Your user details are: {bob.username} -- {bob.password}</p>
            <button>Login now :3</button>
        </section>
    );
}