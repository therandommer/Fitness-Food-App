// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import header from "../src/Hompage/header";
import Navbar from "../src/Hompage/navbar";
import Home from "./pages/homepage";
import Login from "./pages/Profile/loginPage";
import LoginElement from "./pages/Profile/loginElement";
import Footer from "../src/Hompage/footer";
import Wrapper from "./components/wrapper";
import ExercisePage from "./pages/Exercises/ExercisePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/homepage";

function App() {
  //states for login page
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  //get if the user is logged in in local storage
  
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Wrapper>
        <Routes>
          <Route path="/" element={<LoginElement setLoggedIn={setLoggedIn} setEmail={setEmail}/>} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail}/>} />
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
