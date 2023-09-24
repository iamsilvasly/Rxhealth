import React from 'react'
import Button from './Reuseable/Button'

export default function Hero() {
  return (
    <div className='Hsection'>
                 <div className='row'>
                   <div className='col-lg-12 col-md-6 col-sm-2'>
                      <div className='Hero_section text-center'>
                        <h1 className='hero_tittle'>RX HEALTH INFO SYSTEMS</h1>
                        <h5 className='hero_des'>Humanizing  <span className='hero_des2'>Healthcare</span> Technology</h5>
                        <p className='Hero_P'>We passionately develop healthcare technology  solutions that
                         solve the<br/> real challenges that health workers and stakeholders 
                        encounter today <br/>and will face tomorrow
                        </p>
                            <button className='btn btn-primary'>Request Demo</button>
                      </div>
                      
                   </div>
          </div>
          {/* <div className='stats'>
          <div className='row text-center'>
                        <div className='col-lg-4 col-sm-2'>
                          <p className=' black'>Trusted By More Than</p><br/>
                          <p  className='black'>20 Clients</p></div>
                        <div className='col-lg-4 col-md-3'>
                          <p className=' black'>And Used By Over</p><br/>
                          <p className=' black'>1000 Health Facilities</p>
                        </div>
                        <div className='col-lg-4 col-md-3'>
                          <p className=' black'>Operating In</p><br/>
                          <p className=' black'>4 Countries</p>
                        </div>
                      </div>
         </div>             */}
    </div>
  )
}
