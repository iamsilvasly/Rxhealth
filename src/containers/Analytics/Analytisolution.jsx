import React, { Component } from 'react'
import enrol from '../../assets/images/enrollement 1.png'
import pay from '../../assets/images/patient.png'
import aboutright from '../../assets/images/aboutright.png'

export class Analytisolution extends Component {
  render() {
    return (
      <div>
        <div className='row gx-0'>
            <div className='col-lg-7'>
                <div className='payer_desc'>
                    <h3 className='white'>INSIGTH & ANALYTIC<br></br> SOLUTION</h3>
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
      </div>
    )
  }
}

export default Analytisolution
