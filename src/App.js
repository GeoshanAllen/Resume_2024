import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavbarResume from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <NavbarResume></NavbarResume>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
