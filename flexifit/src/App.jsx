// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Hompage/Header';
import Navbar from './Hompage/Navbar';
import Homepage from './Hompage/Homepage';
// import Profile from '../pages/Profile/Profile';
// import Login from '../pages/Profile/Login';
// import Footer from '../Hompage/Footer';
// import Wrapper from '../components/Wrapper';
// import ExercisePage from './pages/Exercises/ExercisePage';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (

    <Homepage />

    // <div>

    //   <Wrapper>
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />
    //       {/* <Route path="/about" element={<AboutUs/>} /> */}
    //       <Route path="/pages/Profile/Profile" element={<Profile />} />
    //       <Route path="/pages/Exercises" element={<ExercisePage />} />
    //       {/* <Route path="/page/Foods" element={<Foods/>} /> */}


    //     </Routes>
    //   </Wrapper>
    //   <Footer />
    // </div>

  );
}

export default App;
