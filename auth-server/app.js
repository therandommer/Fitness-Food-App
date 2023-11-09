//declaring addon dependencies
import {express} from "express";
import {bcrypt} from "bcrypt";
import {cors} from "cors";
import {jwt} from "jsonwebtoken";
import {low} from "lowdb";
import {FileSync} from "lowdb/node";
var adapter = new FileSync("./database.json");
var db = low(adapter);

//initialising the app
const app = express();

//creating the secret key for JWT
const jwtSecretKey = "2df1644a6ee0666798271e42cc56e9c4"; //generated randomly, add to .env file later

//setting up cors and JWT
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//--- Endpoints ---

//Home
app.get("/", (_req, res) => {
    res.send("AUTH API. \nUse POST");
})

//creating a new user, or log in based on existing data
app.post("/auth", (req, res) => {
    const { email, password } = req.body; //the request body will contain the email and password data

    //verify if the user exists or not
    const user = db.get("users").value().filter(user => email === user.email); //using the user email as the key to search from

    //if the user exists, compare passwords
    if (user.length === 1) {
        bcrypt.compare(password, user[0].password, function (_err, result) {
            if (!result) //if password not correct
            {
                return res.status(401).json({ message: "Invalid password" }); //error to be displayed on screen
            }
            else //if password is also correct
            {
                let loginData = {
                    email,
                    signInTime: Date.now() //log current time of login
                };
                const token = jwt.sign(loginData, jwtSecretKey); //generates unique token to authenticate login request
                res.status(200).json({ message: "success", token }); //returns success status along with the unique token just generated
            }
        })
    }
    else if (user.length === 0) //if no user found
    {
        bcrypt.hash(password, 10, function (_err, hash) { //hash the password for the new user
            console.log({ email, password: hash }); //log user login to the console for verification
            db.get("users").push({ email, password: hash }).write(); //write the new user information to the database for future reference

            let loginData = { //log the user login time
                email,
                signInTime: Date.now()
            };

            const token = jwt.sign(loginData, jwtSecretKey);
            res.status(200).json({ mssage: "success", token });
        });
    }
});

//verifying the validity of the JWT
app.post("/verify", (req, res) => {
    const tokenHeaderKey = "jwt-token";
    const authToken = req.headers[tokenHeaderKey];
    try {
        const isVerified = jwt.verify(authToken, jwtSecretKey); //will compare authentication token vs the secret key
        if (isVerified) //if verification passes
        {
            return res.status(200).json({ status: "logged in", message: "success" });
        }
        else //unable to verify, deny access
        {
            return res.status(401).json({ status: "invalid auth", message: "error" });
        }
    }
    catch (error) //if an error occurs, deny access
    {
        return res.status(401).json({ status: "invalid auth", message: "error" });
    }
});

//checking if user already exists
app.post("/check-account", (req, res) => {
    const{email}  = req.body; //request body is the email
    console.log(req.body); //logging the request
    
    const user = db.get("users").value().filter(user => email === user.email); //check if user email exists in the database.
    console.log(user);

    res.status(200).json({
        status: user.length === 1 ? "User exists" : "User does not exist", userExists: user.length === 1 //return status code based on user existing or not
    });
});

//make it so that the auth-server will listen to the main app
app.listen(3080);