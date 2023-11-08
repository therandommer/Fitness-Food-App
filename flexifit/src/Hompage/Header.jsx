// function to create the component for header
// import react from "react";

import './header.css'
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';



function Header() {
  return (
    <>
    <header className='header'>
      <h1>Welcome to FlexiFit!</h1>
      <Navbar />

    </header>
    </>
  );
}

export default Header