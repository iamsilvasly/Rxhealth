import React, { Component } from 'react'
import '../rxclaim/Styleclaims.css'
import enrol from "../../assets/images/enrollement 1.png"
import swipe from "../../assets/images/clay-banks-tgquMvhNLc4-unsplash.jpg"
import pay from "../../assets/images/rupixen-com-Q59HmzK38eQ-unsplash.jpg"
import patient from "../../assets/images/patient.png"
import risk from "../../assets/images/risk.png"
import claim from "../../assets/images/claim 1.png"
import aboutright from '../../assets/images/aboutright.png'
import claimsright from '../../assets/images/claimssil.png'

export class Payersolution extends Component {
  render() {
    return (
      <div>
         <div className='row gx-0'>
            <div className='col-lg-7'>
                <div className='payer_desc'>
                    <h3 className='white'>PAYER SOLUTION <br></br>(Rx Claim)</h3>
                    <p className='white'>We provide electronic solutions that allow all types of payers (health<br></br> insurance, TPAs, 
                    corporate bodies, donors) to reduce fraud and <br></br>
                    wastage  Also improving healthcare access, transparency and<br></br> sustainability.</p>
                    <button className='learn_btn3'>Request Demo</button>
                </div>
                <div className='right'>
                                <img src={aboutright}  alt="React" className='right_img5'></img>
               </div>
            </div>
            <div className='col-lg-5'>
                <div className='payer_img'>
                <img src={pay} alt="React" className='feature_pic'></img>
                </div>
            </div>
         </div>

        <div className='container8'>
          <div className='row'>
            <div className='col-lg-12'>
            <div className='dis_bg2'>
                      <p className='le_blue'>The RxClaims is Africa’s largest online to offline system which 
                      is perfectly suited for many parts of the emerging world with unstable internet
                      connectivity</p>
                    </div>
            </div>
         </div>
        </div>

        <div className='container40'>
        <div className='row gx-0'>
            <div className='col-lg-4 col-md-6'>
                <div className='claims_icon'>
                    <div className='ic_bg'>
                  <i class="fa-solid fa-file-lines claim_ic"></i> 
                    </div>
                   <div className='claims_number'>
                    <p className='claims_p'>No of processsed Claims</p>
                    <h3 className='number_heading'>5 M +</h3>
                   </div>
                </div>   
            </div>
            
            <div className='col-lg-4 col-md-6'>
                <div className='claims_icon'>
                  <div className='ic_bg2'>
                   <i class="fa-solid fa-money-bill-1 claim_ic"></i>
                   </div>
                   <div className='claims_number'>
                    <p className='claims_p'>Amount of processsed Claims</p>
                    <h3 className='number_heading'>100 M +</h3>
                   </div>
                </div>   
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
                    <h5 className='heading'>Enrollment</h5>
                    <p className='pfont2'>Electronic Member Enrolment (Online registration of members,<br></br> Bulk Excel
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
                    <h5 className='heading'>Policy Management</h5>
                    <p className='pfont2'>Electronic Member Enrolment (Online registration of members,<br></br> Bulk Excel
                    upload of members and single member registration)Member<br></br> management (Status,
                     Benefit options, Policy Expiries), Pricing and<br></br> Reporting.</p>
                </div>
                <div className='right'>
                                <img src={claimsright}  alt="React" className='right_img4'></img>
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
                    <h5  className='heading'>Risk, Benefits & Pricing</h5>
                    <p className='pfont2'>Electronic Member Enrolment (Online registration of members,<br></br> Bulk Excel
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
                    <h5 className='heading'>Claims Management</h5>
                    <p className='pfont2'>Electronic Member Enrolment (Online registration of members,<br></br> Bulk Excel
                    upload of members and single member registration)Member<br></br> management (Status,
                     Benefit options, Policy Expiries), Pricing and<br></br> Reporting.</p>
                </div>
                <div className='right'>
                                <img src={claimsright}  alt="React" className='right_img4'></img>
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
                    <h5 className='heading'>Payer Management</h5>
                    <p className='pfont2'>Electronic Member Enrolment (Online registration of members<br></br>, Bulk Excel
                    upload of members and single member registration)Member<br></br> management (Status,
                     Benefit options, Policy Expiries), Pricing and<br></br> Reporting.</p>
               
                </div>
                <div className='right'>
                                <img src={claimsright}  alt="React" className='right_img4'></img>
               </div>
            </div>
        </div>

        <div className='row gx-0'>
        <div className='col-lg-6'>
                <div className='feature_dis'>
                    <div className='dis_bg'>
                      <p className='le_blue'>Access</p>
                    </div>
                    <h5 className='heading'>Patient Interaction</h5>
                    <p className='pfont2'>Electronic Member Enrolment (Online registration of members,<br></br> Bulk Excel
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
                        <div className='col-lg-4'><h6 className='point'> <i class="fa-solid fa-dice-three icon"></i>Simplicity</h6></div>
                        <div className='col-lg-4'><h6 className='point'> <i class="fa-solid fa-bell icon"></i> Notification</h6></div>
                    </div>
                    <div className='row gx-0'>
                        <div className='col-lg-4'><h6 className='point'><i class="fa-solid fa-lock icon"></i> Security</h6></div>
                        <div className='col-lg-4'><h6 className='point'><i class="fa-solid fa-qrcode icon"></i>  Access</h6></div>
                    </div>
                    <div className='row gx-0'>
                        <div className='col-lg-4'><h6 className='point'><i class="fa-solid fa-clock-rotate-left icon"></i> Real-Time</h6></div>
                        <div className='col-lg-4'><h6 className='point'><i class="fa-solid fa-infinity icon"></i>Interoperability</h6></div>
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

