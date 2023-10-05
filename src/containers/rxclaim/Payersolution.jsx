import React, { Component } from 'react'
import '../rxclaim/Styleclaims.css'
import enrol from "../../assets/images/enrollement 1.png"
import swipe from "../../assets/images/clay-banks-tgquMvhNLc4-unsplash.jpg"
import pay from "../../assets/images/rupixen-com-Q59HmzK38eQ-unsplash.jpg"
import patient from "../../assets/images/patient.png"
import risk from "../../assets/images/risk.png"
import claim from "../../assets/images/claim 1.png"

export class Payersolution extends Component {
  render() {
    return (
      <div>
         <div className='row gx-0'>
            <div className='col-lg-7'>
                <div className='payer_desc'>
                    <h1 className='white'>Payer Solution<br/>(Rx Claim)</h1>
                    <p className='white'>We provide electronic solutions that allow all types of payers (health<br></br> insurance, TPAs, 
                    corporate bodies, donors) to reduce fraud and <br></br>
                    wastage  Also improving healthcare access, transparency and<br></br> sustainability.</p>
                    <button className='learn_btn3'>Request Demo</button>
                </div>
            </div>
            <div className='col-lg-5'>
                <div className='payer_img'>
                <img src={pay} alt="React" className='feature_pic'></img>
                </div>
            </div>
         </div>


        <div className='row text-center'>
            <div className='col-lg-12'><h3 className='heading_tittle'>Features of <span className='heading_span'>Rx Claim </span></h3></div>
        </div>
        
        
        <div className='row gx-0'>
            <div className='col-lg-6'>
                <div className='Feature_img'>
                <img src={enrol} alt="React" className='feature_pic'></img>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='feature_dis'>
                    <div className='dis_bg'>
                      <p className='le_blue'>Simplicity</p>
                    </div>
                    <h5>Enrollment</h5>
                    <p>Electronic Member Enrolment (Online registration of members,<br></br> Bulk Excel
                    upload of members and single member registration)Member<br></br> management (Status,
                     Benefit options, Policy Expiries), Pricing and<br></br> Reporting.</p>
                </div>
            </div>
        </div>

        <div className='row gx-0'>
        <div className='col-lg-6'>
                <div className='feature_dis'>
                    <div className='dis_bg'>
                      <p className='le_blue'>Real-Time</p>
                    </div>
                    <h5>Policy Management</h5>
                    <p>Electronic Member Enrolment (Online registration of members,<br></br> Bulk Excel
                    upload of members and single member registration)Member<br></br> management (Status,
                     Benefit options, Policy Expiries), Pricing and<br></br> Reporting.</p>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='Feature_img'>
                <img src={enrol} alt="React" className='feature_pic'></img>
                </div>
            </div>
        </div>
         


        
        <div className='row gx-0'>
            <div className='col-lg-6'>
                <div className='Feature_img'>
                <img src={enrol} alt="React" className='feature_pic'></img>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='feature_dis'>
                    <div className='dis_bg'>
                      <p className='le_blue'>Security</p>
                    </div>
                    <h5 >Risk, Benefits & Pricing</h5>
                    <p>Electronic Member Enrolment (Online registration of members,<br></br> Bulk Excel
                    upload of members and single member registration)Member<br></br> management (Status,
                     Benefit options, Policy Expiries), Pricing and<br></br> Reporting.</p>
                </div>
            </div>
        </div>

        <div className='row gx-0'>
        <div className='col-lg-6'>
                <div className='feature_dis'>
                    <div className='dis_bg'>
                      <p className='le_blue' >Interoperability</p>
                    </div>
                    <h5>Claims Management</h5>
                    <p>Electronic Member Enrolment (Online registration of members,<br></br> Bulk Excel
                    upload of members and single member registration)Member<br></br> management (Status,
                     Benefit options, Policy Expiries), Pricing and<br></br> Reporting.</p>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='Feature_img'>
                <img src={claim} alt="React" className='feature_pic'></img>
                </div>
            </div>
        </div>




        <div className='row gx-0'>
            <div className='col-lg-6'>
                <div className='Feature_img'>
                <img src={risk} alt="React" className='feature_pic'></img>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='feature_dis'>
                    <div className='dis_bg'>
                      <p className='le_blue'>Notification</p>
                    </div>
                    <h5>Payer Management</h5>
                    <p>Electronic Member Enrolment (Online registration of members<br></br>, Bulk Excel
                    upload of members and single member registration)Member<br></br> management (Status,
                     Benefit options, Policy Expiries), Pricing and<br></br> Reporting.</p>
                </div>
            </div>
        </div>

        <div className='row gx-0'>
        <div className='col-lg-6'>
                <div className='feature_dis'>
                    <div className='dis_bg'>
                      <p className='le_blue'>Access</p>
                    </div>
                    <h5>Patient Interaction</h5>
                    <p>Electronic Member Enrolment (Online registration of members,<br></br> Bulk Excel
                    upload of members and single member registration)Member<br></br> management (Status,
                     Benefit options, Policy Expiries), Pricing and<br></br> Reporting.</p>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='Feature_img'>
                <img src={patient} alt="React" className='feature_pic'></img>
                </div>
            </div>
        </div>

        <div className='row gx-0'>
            <div className='col-lg-5'>
                <div className='image'></div>
                <img src={swipe} alt="React" className='feature_pic'></img>
            </div>
            <div className='col-lg-7'>
                <div className='benfit_sec'>
                    <div className='row'>
                        <div className='col-lg-12'><h3>Benefits of Rx Claim <br></br>as a Service product</h3></div>
                    </div>
                    <div className='row gx-0'>
                        <div className='col-lg-4'><h6> <i class="fa-solid fa-chart-simple"></i> a Service product</h6></div>
                        <div className='col-lg-4'><h6> <i class="fa-solid fa-bell"></i> a Service product</h6></div>
                    </div>
                    <div className='row gx-0'>
                        <div className='col-lg-4'><h6><i class="fa-solid fa-lock"></i> a Service product</h6></div>
                        <div className='col-lg-4'><h6><i class="fa-solid fa-qrcode"></i> a Service product</h6></div>
                    </div>
                    <div className='row gx-0'>
                        <div className='col-lg-4'><h6><i class="fa-solid fa-clock-rotate-left"></i> a Service product</h6></div>
                        <div className='col-lg-4'><h6><i class="fa-solid fa-infinity"></i> a Service product</h6></div>
                    </div>
                    <button className='learn_btn3'>Request Demo</button>
                </div>
            </div>
        </div>

      </div>
    )
  }
}

export default Payersolution

