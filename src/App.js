import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavbarResume from "./components/Navbar";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Accolades from "./components/Accolades";
// import { useState, CSSProperties } from "react";
// import ClipLoader from "react-spinners/ClipLoader";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

function App() {

  // let [loading, setLoading] = useState(true);
  // let [color, setColor] = useState("#ffffff");

  return (
    <div className="App">
      {/* <div className="container fluid"> */}
      <div>
        <NavbarResume />
        {/* <Router> */}
        <Routes>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/Skills" element={<Skills></Skills>}></Route>
          <Route path="/Experience" element={<Experience></Experience>}></Route>
          <Route path="/Education" element={<Education></Education>}></Route>
          <Route path="/Accolades" element={<Accolades></Accolades>}></Route>
          <Route path="/AboutMe" element={<AboutMe></AboutMe>}></Route>
        </Routes>
        {/* </Router> */}


          <Footer />

      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
