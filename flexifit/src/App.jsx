import { useEffect, useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LoginElement from './components/loginElement';

//routes are used to plug each page.
//use the / route to plug the homepage
//use the /calendar, etc. page to plug each other page.
function App() {
  const [count, setCount] = useState(0)

  const [isLoggedIn, setLoggedIn] = useState(false); //user is logged out by default
  const [email, setEmail] = useState(""); //sets the default email to blank

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginElement email={email} isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
