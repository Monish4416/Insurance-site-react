import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { NavLink } from "react-router-dom";
import './App.css'

// import logo from "../images/IMG_20230219_192041.jpg"


export default function MyFunctionalComponent(){
  useEffect(()=>{
    AOS.init();
  },[])


// const Navbar = () =>{

    return(
        <>
          <section className="navbar1">

<section className="navbar container-fluid">
<div className="row1">
<NavLink to="/"><img src="https://flexa-react.envytheme.com/images/logo.png" alt="" srcset="" height={33} /></NavLink>
</div>
<div className="row2">
  <ul>
    <li><NavLink to="/"  style={{textDecoration:"none", color:"white",fontWeight:"600"}}>Home</NavLink></li>
    <li><NavLink to="/About" style={{textDecoration:"none", color:"white",fontWeight:"600"}}>About</NavLink></li>
    <li><NavLink to="/Insurance" style={{textDecoration:"none", color:"white",fontWeight:"600"}}>Insurance</NavLink></li>
    <li><NavLink to="/Service" style={{textDecoration:"none", color:"white",fontWeight:"600"}}>Services</NavLink></li>
    <li><NavLink to="/Contact" style={{textDecoration:"none", color:"white",fontWeight:"600"}}>Contact</NavLink></li>
  </ul>
  <ul className="search-box">
    <input type="text" placeholder="Search here..." /><i class="fa-solid fa-magnifying-glass"></i>
  </ul>
</div>
</section>

  </section>
        {/* Navbar  */}
   
        </>
    );

};
// };

// export default Navbar;