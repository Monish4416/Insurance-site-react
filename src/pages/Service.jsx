import React,{useEffect,useLayoutEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import './About.css'
import './App.css'
import { NavLink } from "react-router-dom";

const Service = ()=>{
    // export default function MyfunctionalComponent(){
    
        useEffect(()=>{
            AOS.init();
        },[])
        useLayoutEffect(()=>{
            window.scrollTo(0,0)
        })
      
    
    return(
        <>
          <section className="head">
        <section>
            <h1>Our Service</h1>
        </section>
    </section>
    

    <section className="service service1">
            <div className="container">
        <div className="row1">
        <h1>Types of Flexa Insurance</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
        <br />
        <br />
      </div>
      <div className="row">
              <div className="card1 cd" data-aos="flip-up" data-aos-duration="1000" >
              <i class="fa-solid fa-heart-pulse in-1" style={{color:"#151449"}}></i>
              <h4 style={{color:"#151449"}}>Car Insurance</h4>
              <p style={{color:"#151449"}}>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              </div>
              <div className="card1" data-aos="flip-up" data-aos-duration="1500">
              <i class="fa-solid fa-user-doctor" style={{color:"#151449"}}></i>
              <h4 style={{color:"#151449"}}>Health Insurance</h4>
              <p style={{color:"#151449"}}>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              </div>
              <div className="card1" data-aos="flip-up" data-aos-duration="2000">
              <i class="fa-solid fa-bed-pulse" style={{color:"#151449"}}></i>
              <h4 style={{color:"#151449"}}>Life Insurance</h4>
              <p style={{color:"#151449"}}>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              </div>
              <br />
            

              <div className="card2" data-aos="flip-up" data-aos-duration="1000">
              <i class="fa-solid fa-laptop-medical" style={{color:"#151449"}}></i>
              <h4 style={{color:"#151449"}}>Travel Insurance</h4>
              <p style={{color:"#151449"}}>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              </div>
              <div className="card2" data-aos="flip-up" data-aos-duration="1500">
              <i class="fa-solid fa-book-medical" style={{color:"#151449"}}></i>
              <h4 style={{color:"#151449"}}>Business Insurance</h4>
              <p style={{color:"#151449"}}>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              </div>
              <div className="card2" data-aos="flip-up" data-aos-duration="2000">
              <i class="fa-solid fa-house-medical" style={{color:"#151449"}}></i>
              <h4 style={{color:"#151449"}}>Home Insurance</h4>
              <p style={{color:"#151449"}}>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              </div>
              </div>
              </div>

        </section>

           {/* footer  */}
       <section className="footer" style={{marginTop:"10px"}}>
        <div className="container">
        <div className="col1">
          <NavLink to="/" ><img src="https://flexa-react.envytheme.com/images/logo2.png" alt="" /></NavLink>  
            <p>Lorem ipsum dolor sitamet,cons adipiscing elit, sed do eiusmod te incididunt ut labore et dolore Lorem ipsum dolor sitamet,cons adipiscing dolore Lorem ipsum dolor.</p>
          <NavLink to="https://www.facebook.com/monish.ansari.5283166"> <i class="fa-brands fa-facebook" style={{color:"white"}}></i></NavLink>
          <NavLink to="https://www.instagram.com/vip_star4416?igsh=enJpMGxkOHc3N24x"><i class="fa-brands fa-instagram"style={{color:"white"}}></i></NavLink>
           <NavLink to="https://www.linkedin.com/in/monish-ansari-74495b2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands fa-linkedin-in"style={{color:"white"}}></i></NavLink>
           <NavLink to="https://github.com/Monish4416"><i class="fa-brands fa-github"style={{color:"white"}}></i>     </NavLink>    

        </div>
        <div className="col2">
            <h3>Contact Us</h3>
            <i class="fa-solid fa-phone-volume"> <span>Phone:</span></i> <p>+91 7018548651</p>  <br />
            <i class="fa-regular fa-envelope"> <span>Email:</span> </i> <p>monishansari164@gmail.com</p> <br /> 
            <i class="fa-solid fa-location-dot"> <span>Address:</span> </i> <p>Mohali,Chandigarh,India</p>
        </div>
      
        </div>
        </section>
        <footer className="copywrite"> 
        <p>Copyright © 2024 Flexa Designed By Monish Ansari</p>
        </footer>
      
        </>
    );
}

export default Service; 