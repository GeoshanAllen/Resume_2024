import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavbarResume from "./components/Navbar";
import Skills from "./components/Skills";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <NavbarResume></NavbarResume>
      <Router>
        <Routes>
          <Route path ="Resume_2024/Skills/" element ={<Skills></Skills>} ></Route>
          <Route path ="Resume_2024/Home/" element ={<Home></Home>} ></Route>
        </Routes>
      </Router>
      
      
      <Footer></Footer>
    </div>
  );
}

export default App;
