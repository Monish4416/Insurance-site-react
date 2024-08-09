import React,{useEffect,useLayoutEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import './About.css'
import './App.css'
import { NavLink } from "react-router-dom";
import img from "../images/video-img.jpg"

const Insurance = ()=>{
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
            <h1>Insurance</h1>
        </section>
    </section>

    <section className="insurance">
        <section className="container">
            <div className="row1">
                <img src={img} alt="" height={400}  width={600}/>
            </div>
            <div className="row2">
            <p className="up">Achievement</p>
                  <h1>We have Achieved Many National Award For Our Success
                  </h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus aliqua suspendris.</p>
                  <button className="btn">Be Connected</button>
            </div>
        </section>
    </section>

    <section className="contact container">

<div className="container container-1">
<h1>Not Sure What You Need <br />
Find Agent Now</h1>
</div>

<div className="container">
    <div className="row1" data-aos="fade-right" data-aos-duration="1000">
        <div className="card">
            <div>
    <i class="fa-solid fa-phone-volume"> </i>
   <h1><span>Call Us <br />+91 7018548651</span></h1> 
    </div>
    </div>
    </div>
    <div className="row2" data-aos="fade-left" data-aos-duration="1000">
        
        <div className="card">
        <p>Subscribe Now</p>
        <div>
        <input type="email"  placeholder="Enter Your Email"/><button className="btn">
            Subscribe
        </button>
        </div>
        </div>
    </div>

</div>


</section>

  {/* footer  */}
  <section className="footer in-footer">
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

export default Insurance; 