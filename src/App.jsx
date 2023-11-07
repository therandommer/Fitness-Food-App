// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import header from '../src/Hompage/header';
import Navbar from '../src/Hompage/navbar';
import Home from './pages/homepage';
import Login from './pages/Profile/login';
import footer from '../src/Hompage/footer';

function App() {
  return (
    <Router>
      <div>
        <header> 
        <Navbar />
        </header>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/page/profile" element={<Profile/>} />
            <Route path="/page/Exercises" element={<Excercises/>} />
            <Route path="/page/Foods" element={<Foods/>} />

            
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
