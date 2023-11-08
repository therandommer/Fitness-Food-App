// function to create the component for header
import react from "react";
import { useState } from 'react';

import './header.css'
import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css';



function Header() {
return (
        <header className= 'header'>
          <h1>Welcome to FlexiFit!</h1>

        </header>)
        
    }
export default Header