import React,{useEffect,useLayoutEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import './About.css'
import './App.css'
import { NavLink } from "react-router-dom";

const About = ()=>{
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
            <h1>About</h1>
        </section>
    </section>
    <section className="about container">
              <div className="left">
                  <p className="up">About Us</p>
                  <h1>We have been Thriving in 37 Years The Area</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus aliqua suspendris.</p>
                  <section className="check">
                  <div>
                  <i class="fa-regular fa-circle-check"> <span>Save Money</span></i> <br />
                  <i class="fa-regular fa-circle-check"> <span>Flexible Insurance</span></i> <br />
                  <i class="fa-regular fa-circle-check"> <span>Investment Planning</span></i> <br />
                  </div>
                  <div>
                  <i class="fa-regular fa-circle-check"> <span>Fast Application</span></i> <br />
                  <i class="fa-regular fa-circle-check"> <span>No Brokers, No Upselling</span></i> <br />
                  <i class="fa-regular fa-circle-check"> <span>Professional Advisor</span></i> <br />
                  </div>
                  </section>
                 
              </div>
              <div className="right" data-aos-duration="1000"  data-aos="fade-up">
                  <img src="https://flexa-react.envytheme.com/images/about-img.png" alt="" className="img1" />
              </div>
          </section>
      
      
      
      
      
          <section className="about container">
           
              <div className="right"  data-aos="fade-up" data-aos-duration="1000">
                  <img src="https://flexa-react.envytheme.com/images/vision-img.png" alt="" className="img2" />
              </div>
              <div className="left">
                  <p className="up">Our Vision</p>
                  <h1>We are Committed to Help Clients to Reach The Goals</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus aliqua suspendris.</p>
                  <section className="check">
                  <div>
                  <i class="fa-solid fa-angles-right"> <span>Save Money</span></i> <br />
                  <i class="fa-solid fa-angles-right"> <span>Flexible Insurance</span></i> <br />
                  <i class="fa-solid fa-angles-right"> <span>Investment Planning</span></i> <br />
                  </div>
                  <div>
                  <i class="fa-solid fa-angles-right"> <span>Fast Application</span></i> <br />
                  <i class="fa-solid fa-angles-right"> <span>No Brokers, No Upselling</span></i> <br />
                  <i class="fa-solid fa-angles-right"> <span>Professional Advisor</span></i> <br />
                  </div>
                  </section>
                 
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

export default About;