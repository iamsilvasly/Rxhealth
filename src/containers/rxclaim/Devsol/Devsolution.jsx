import React, { Component } from 'react'
import aboutright from '../../../assets/images/aboutright.png'

export class Devsolution extends Component {
  render() {
    return (
      <div>
          <div className='row gx-0'>
            <div className='col-lg-7'>
                <div className='payer_desc'>
                    <h3 className='white'>PATIENT SOLUTION <br></br>(HEALTHKER)</h3>
                    <p className='white'>We provide electronic solutions that allow all types of payers (health<br></br> insurance, TPAs, 
                    corporate bodies, donors) to reduce fraud and <br></br>
                    wastage  Also improving healthcare access, transparency and<br></br> sustainability.</p>
                    <button className='learn_btn3'>Request Demo</button>
                </div>
                <div className='right'>
                                <img src={aboutright}  alt="React" className='right_img5'></img>
               </div>
            </div>
            </div>
      </div>
    )
  }
}

export default Devsolution
