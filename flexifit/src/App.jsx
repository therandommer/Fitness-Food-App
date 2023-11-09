// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import header from '../src/Hompage/header';
import Navbar from '../src/Hompage/navbar';
import Home from './pages/homepage';
import Login from './pages/Profile/login';
import Footer from '../src/Hompage/footer';
import Wrapper from './components/wrapper';
import ExercisePage from './pages/Exercises/ExercisePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/homepage';


function App() {
  return (
        <div>
        <header> 
        <Navbar />
        </header>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Login/>} />
            {/* <Route path="/about" element={<AboutUs/>} /> */}
            {/* <Route path="/page/profile" element={<Profile/>} /> */}
            <Route path="/page/Exercises" element={<ExercisePage/>} />
            {/* <Route path="/page/Foods" element={<Foods/>} /> */}

            
          </Routes>
        </Wrapper>
        <Homepage/>
        <Footer />
      </div>
   
  );
}

export default App;
