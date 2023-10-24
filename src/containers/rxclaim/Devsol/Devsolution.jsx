import React, { Component } from 'react'
import pay from '../../../assets/images/enrollement 1.png'

export class Devsolution extends Component {
  render() {
    return (
      <div>
          <div className='row gx-0'>
            <div className='col-lg-7'>
                <div className='payer_desc'>
                    <h3 className='white'>Developer SOLUTION </h3>
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
      </div>
    )
  }
}

export default Devsolution
