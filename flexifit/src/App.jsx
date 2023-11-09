// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import header from '../src/Hompage/Header';
import NavbarUsed from '../src/Hompage/navbar';
import Home from './pages/homepage';
import Profile from './pages/Profile/Profile'
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
        <NavbarUsed />
      </header>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/about" element={<AboutUs/>} /> */}
          <Route path="/pages/Profile/Profile" element={<Profile />} />
          <Route path="/Food/FoodMenu" element={<foodMenu />} />
          <Route path="/page/Exercises" element={<ExercisePage />} />
        </Routes>
        <Homepage />
      </Wrapper>

      <Footer />
    </div>

  );
}

export default App;
