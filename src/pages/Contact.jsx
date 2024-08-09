import React,{useEffect, useLayoutEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import './About.css'
import './App.css'

import { NavLink } from "react-router-dom";



export default function MyfunctionalComponent(){
    useEffect(()=>{
        AOS.init();
    },[])
    useLayoutEffect(()=>{
      window.scrollTo(0,0)
  })
    
  
// const Contact =()=>{

    return(
        <>
              <section className="head">
        <section>
            <h1>Contact</h1>
        </section>
    </section>

    <section className="contactus container"> 
    <div class="contact-form">
  <span class="heading">Contact Us</span>
  <div>
    <label for="name">Name:</label> <br />
    <input type="text" required="" placeholder="Enter your name"/> <br />
    <label for="email">Email:</label> <br />
    <input type="email" id="email" name="email" required="" placeholder="Enter your email" /> <br />
    <label for="message">Message:</label> <br />
    <textarea id="message" name="message" required="" rows={4} cols={50} placeholder="Enter message!" ></textarea> <br />
    <button type="submit">Submit</button>
  </div>
</div>
<div className="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54891.386084843914!2d76.65609494030554!3d30.698388675064166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee906da6f81f%3A0x512998f16ce508d8!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1723131923082!5m2!1sen!2sin" width={600} height={450} style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
    </section>



         {/* footer  */}
         <section className="footer">
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

};
