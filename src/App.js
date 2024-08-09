import { Route,Routes,Link } from "react-router-dom";
import './pages/App.css';
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Insurance from "./pages/Insurance";
import Service from "./pages/Service"



function App() {
  return (
    <>
  <Navbar />
 

  <Routes >
  <Route path="/" element={<Home></Home>} />
  <Route path="/About" element={<About></About>} />
  <Route path="/Insurance" element={<Insurance></Insurance>} />
  <Route path="/Service" element={<Service></Service>} />
  <Route path="/Contact" element={<Contact></Contact>} />

  </Routes>
  </>
  );
}

export default App;
