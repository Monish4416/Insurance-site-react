import React,{useEffect,useLayoutEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import './App.css'
import { NavLink } from "react-router-dom";
// import img from "../images/IMG_20230721_130226.jpeg"


const Home = ()=>{
// export default function MyFunctionalComponent(){
    useEffect(()=>{
    AOS.init();
},[]) 
useLayoutEffect(()=>{
    window.scrollTo(0,0)
})

    return(
        <>
  
  <div className="navbody">
      
      <br></br>
            {/* Main Content Start  */}
              <section className="main-content">
      
              <div className="row1"  data-aos="fade-right" data-aos-duration="1000">
                <p className="up">Investment Retirement Insurance</p>
                <h1>The Right Protection to Keep <br /> You Moving Forward</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, unde quis necessitatibus eaque magni totam velit, eius expedita corrupti nam, ad optio quam ipsa nesciunt porro sed in excepturi fugiat.</p>
                <input type="submit" className="btn btn-1" value="Get Started" />
                <input type="submit" className="btn btn-2" value="Find An Agent" />
      
              </div>
              <div className="row2"  data-aos="fade-left" data-aos-duration="1000">
                <img src="https://flexa-react.envytheme.com/images/banner/banner-img.png" alt="" width={700} height={500} />
              </div>
              </section>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
      
      <section className="main-content2">
      <div>
        <p className="up">Why Choose Us</p>
        <h1>We are Dedicated to Support You</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
        <br />
        <br />
      </div>
      
      </section>
      <section className="container">
              <div className="row">
              <div className="card1"  data-aos="fade-up" data-aos-duration="1000">
              <i class="fa-solid fa-heart-pulse"></i>
              <h3>Service With Love</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
              </div>
              <div className=""  data-aos="fade-up" data-aos-duration="1500">
              <i class="fa-solid fa-suitcase-medical"></i>
              <h3>Clients Focused</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
              </div>
              <div className=""  data-aos="fade-up" data-aos-duration="2000">
              <i class="fa-solid fa-user-doctor"></i>
              <h3>Awesome Support</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
              </div>
              </div>
             </section>
             <br />
             <br />
             <br />
      
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
              <div className="left left1">
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
      <br />
      <br />
      <br />
      <br />
        <section className="service">
            <div className="container">
        <div className="row1">
        <p className="up">Our Services</p>
        <h1>Types of Flexa Insurance</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
        <br />
        <br />
      </div>
      <div className="row">
              <div className="card1" data-aos="flip-up" data-aos-duration="1000">
              <i class="fa-solid fa-heart-pulse in-1"></i>
              <h4>Car Insurance</h4>
              <p>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              </div>
              <div className="card1" data-aos="flip-up" data-aos-duration="1500">
              <i class="fa-solid fa-user-doctor"></i>
              <h4>Health Insurance</h4>
              <p>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              </div>
              <div className="card1" data-aos="flip-up" data-aos-duration="2000">
              <i class="fa-solid fa-bed-pulse"></i>
              <h4>Life Insurance</h4>
              <p>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              </div>
              <br />
            

              <div className="card2" data-aos="flip-up" data-aos-duration="1000">
              <i class="fa-solid fa-laptop-medical"></i>
              <h4>Travel Insurance</h4>
              <p>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              </div>
              <div className="card2" data-aos="flip-up" data-aos-duration="1500">
              <i class="fa-solid fa-book-medical"></i>
              <h4>Business Insurance</h4>
              <p>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              </div>
              <div className="card2" data-aos="flip-up" data-aos-duration="2000">
              <i class="fa-solid fa-house-medical"></i>
              <h4>Home Insurance</h4>
              <p>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              </div>
              </div>
              </div>

        </section>





       <section className="contact">

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
      






      
          </div>
          
            
           
        
        </>
    );
}

export default Home;


