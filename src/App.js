import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavbarResume from "./components/Navbar";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Education from "./components/Education";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <div className="container fluid"> */}
      <NavbarResume></NavbarResume>
      {/* <Router> */}
        <Routes>
          <Route path ="/Home" element ={<Home></Home>} ></Route>
          <Route path ="/Skills" element ={<Skills></Skills>} ></Route>
          <Route path ="/Experience" element ={<Experience></Experience>} ></Route>          
          <Route path ="/Education" element ={<Education></Education>} ></Route>     
          <Route path ="/AboutMe" element ={<AboutMe></AboutMe>} ></Route>
        </Routes>
      {/* </Router> */}
      
      
      <Footer ></Footer>
      {/* </div> */}

    </div>
  );
}

export default App;
