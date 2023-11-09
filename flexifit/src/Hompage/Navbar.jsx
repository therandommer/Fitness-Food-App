// Navbar.js function to create the navbar component to be used on the homepage


import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/images/flexifit-logo.png"


// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/">
//       <img src={logo} alt="flexifit Logo" height={100} width={250}/>
//       </Link>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item">
//             <Link className="nav-link" to="/">Homepage</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/profile">Profile</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/contact">Excercises</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/login">Login</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarUsed() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        
        <Container>
          <Navbar.Brand href="#home">FLEXIFIT</Navbar.Brand>
          <img src={logo} alt="flexifit Logo" height={100} width={250} />
          <Nav className="me-auto">
            <Nav.Link href="#home">Homepage</Nav.Link>
            <Nav.Link href="#Login">Login</Nav.Link>
            <Nav.Link href="#Menu">Menu</Nav.Link>
            <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default NavbarUsed;