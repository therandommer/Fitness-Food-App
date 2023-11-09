// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import header from "../src/Hompage/header";
import Navbar from "../src/Hompage/navbar";
import Home from "./pages/homepage";
import Login from "./pages/Profile/loginPage.jsx";
import LoginElement from "./pages/Profile/loginElement";
import Footer from "../src/Hompage/footer";
import Wrapper from "./components/wrapper";
import ExercisePage from "./pages/Exercises/ExercisePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/homepage";

import {useEffect} from "react";

function App() {
  //states for login page
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    //get if the user is logged in within local storage
    const user = JSON.parse(localStorage.getItem("user"));

    //if the user is not logged in, log the user out
    if (!user || !user.token) {
      setLoggedIn(false);
      return;
    }

    //if the user is logged in, verify with the authentication server
    fetch("http://localhost:3080/verify", {
      method: "POST",
      headers: {
        "jwt-token": user.token,
      },
    })
      .then((reply) => reply.json())
      .then((reply) => {
        setLoggedIn("success" === reply.message);
        setEmail(user.email || "");
      });
  });

  //logic for loggin in the user or not
  const onButtonClick = () => {
    if(loggedIn)
    {
      localStorage.removeItem("user") //will remove the user from local storage
      props.setLoggedIn(false) //will set loggedin status to false
    }
    else
    {
      Navigate("/login"); //if not logged in, navigate to the login page
    }
  }
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Wrapper>
        <Routes>
          <Route
            path="/"
            element={
              <LoginElement setLoggedIn={setLoggedIn} setEmail={setEmail} />
            }
          />
          <Route
            path="/login"
            element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />}
          />
          {/* <Route path="/about" element={<AboutUs/>} /> */}
          {/* <Route path="/page/profile" element={<Profile/>} /> */}
          <Route path="/page/Exercises" element={<ExercisePage />} />
          {/* <Route path="/page/Foods" element={<Foods/>} /> */}
        </Routes>
      </Wrapper>
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
