// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import header from '../src/Hompage/header';
import Navbar from '../src/Hompage/navbar';
import Home from './pages/hompage';
import Login from './pages/Profile/login';

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
            <Route path="/project" element={<Profile/>} />
            <Route path="/contact" element={<contact/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
