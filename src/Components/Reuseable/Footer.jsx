import React from 'react'
import logo from "../../assets/images/rxlogo.jpg"


function Footer() {
  return (
   <div className='section2'> 
    <div className='container  px-4'>
            <div className="row gx-4">
              <div className="col-lg-2 col-sm-6">
               
                   <img src={logo} className='logo' alt="React"></img></div>
              
                <div className="col-lg-2 col-sm-6">
                   <h6 className="footer_Tittle">Legal</h6>
                   <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    
                   </ul>
                </div>   
                <div className="col-lg-2 col-sm-6">
                   <h6 className="footer_Tittle"> Useful Links</h6>
                   <ul>
                    <li>Contact</li>
                    <li>Health Blog</li>
                    <li>Request Demo</li>
                   </ul>
                </div>
                <div className="col-lg-2 col-sm-6">
                   <h6 className="footer_Tittle"> Get In Touch</h6>
                   <ul>
                    <li>Haasto- Westland</li>
                    <li>030 123 4567</li>
                    <li>support@rx.com</li>
                    <li>Rxhealthinfosystem.com</li>
                   </ul>
                </div>
                <div className="col-lg-4 col-sm-5 col-md-12 ">
                   <h6 className="footer_Tittle"><i class="fa-regular fa-paper-plane"></i> Subscribe to our Newsletter</h6>
                   <input type='text' placeholder='Enter your email address'  class="form-control"></input>
                   <br/>
                   <br/>
                   <button className='learn_btn2'>Subscribe</button>
                </div>

            </div>
            <div className='row'>
                
                <div className='col-lg-12 text-center'>
                    <p className='copyright'>© 2023 Copyright Company.All Rights Reserved.</p>
                </div>
                
            </div>
        </div>
    </div> 
  )
}

export default Footer
