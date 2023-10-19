import React from 'react'
import sil from "../assets/images/os.png"

export default function Oursolution() {
  return (
    <div>
        <div className='row'>
            <div className='col-lg-12 col-md-12  col-sm-12 text-center'>
                <h3 className='solution_tittle'>Our <span className='solution_span'>Solution</span></h3>
            </div>
        </div>
        
         <div className='solution_box justify-content-center'>
            <div className='row gx-0 '>
                <div className='col-md-4 col-sm-12'>
                    <div className='solution_card1'>
                        <div className='solution_icon'><i class="fas fa-wallet ic2"></i></div>
                        <div><h5>PAYER SOLUTIONS<br/>(Rx Claim)</h5>
                              <p className='pfont'>We provide electronic solutions that
                                allow all  types of payers</p></div>
                                <button className='learn_btn2'>Learn More</button>
                    </div>
                                <div className='rigth'>
                                <img src={sil} alt="React" className='right_img99' ></img>
                                </div>
                </div>
                <div className='col-md-4  col-sm-12'>
                <div className='solution_card2'>
                        <div className='solution_icon'><i class="fa-regular fa-building ic2"></i></div>
                        <div><h5>Patient Solution<br/>(Healthker)</h5>
                              <p className='pfont'>We provide electronic solutions that
                                allow all  types of payers</p></div>
                                <button className='learn_btn'>Learn More</button>      
                    </div>
                                <div className='rigth'>
                                <img src={sil} alt="React" className='right_img98' ></img>
                                </div>
                </div>
                <div className='col-md-4 col-sm-12 '>
                <div className='solution_card3'>
                        <div className='solution_icon'><i class="fa-solid fa-caret-up ic2"></i></div>
                        <div><h5>Provider Solution<br/>(Rx Hopes)</h5>
                              <p className='pfont'>We provide electronic solutions that
                                allow all  types of payers</p></div>
                                <button className='learn_btn2'>Learn More</button>        
                    </div>
                                <div className='rigth'>
                                <img src={sil} alt="React" className='right_img97' ></img>
                                </div>
                </div>
            </div>
            <div className='row gx-0'>
                <div className='col-md-4 col-sm-12 '><div className='solution_card4'>
                        <div className='solution_icon'><i class="fa-solid fa-handshake-angle ic2"></i></div>
                        <div><h5>CRM</h5>
                              <p className='pfont'>We provide electronic solutions that
                                allow all  types of payers</p></div><br/>
                                <button className='learn_btn'>Learn More</button>
                    </div>
                                <div className='rigth'>
                                <img src={sil} alt="React" className='right_img96' ></img>
                                </div>
                    </div>
                <div className='col-md-4 col-sm-12'>
                <div className='solution_card'>
                        <div className='solution_icon'><i class="fas fa-chart-line ic2"></i></div>
                        <div><h5>Insight & Analytics Solutions</h5>
                              <p className='pfont'>We provide electronic solutions that
                                allow all  types of payers</p></div>
                                <button className='learn_btn2'>Learn More</button>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                <div className='solution_card6'>
                        <div className='solution_icon'><i class="fa-regular fa-lightbulb ic"></i></div>
                        <div><h5>Developer Solutions</h5>
                              <p className='pfont'>We provide electronic solutions that
                                allow all  types of payers</p></div>
                                <button className='learn_btn'>Learn More</button>
                    </div>
                </div>
            </div>
         </div>
      
    </div>
  )
}
