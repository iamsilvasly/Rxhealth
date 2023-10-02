import React from 'react'
import Button from './Reuseable/Button'
import vector from "../assets/images/Vector.png"
import vector2 from "../assets/images/Vector-1.png"


export default function Hero() {
  return (
    <div className='Hsection'>
                 <div className='row'>
                   <div className='col-lg-12 col-md-6 col-sm-2'>
                    <div className='vector'>
                      <img src={vector} alt="React" ></img>
                      </div> 
                      <div className='vector2'>
                      <img src={vector2} alt="React" ></img>
                      </div> 
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
          <div className='container3'>
          <div className='row text-center'>
                        <div className='col-lg-4 col-sm-2'>
                        <div className='cflex '>
                        <i class="fa-regular fa-square-check ic3 "></i>
                        <div className='block '>
                        <p className='black3'>Trusted by more than</p>
                        <p className='black4'>20 Clients</p>
                        </div>
                        <div className='block'>
                         </div>
                </div>
         </div>
                        
                        
                        <div className='col-lg-4 col-md-3'>
                        <div className='cflex'>
                         <i class="fa-regular fa-square-check ic3 "></i>
                         <div className='block'>
                         <p className='black3'>And Used By Over</p>
                         <p className='black4'>1000 Health Facilities</p>
                         </div>
                         <div className='block'>
                        </div>
                        </div>
                
                        </div>
                        
       <div className='col-lg-4 col-md-3'>
          <div className='cflex '>
            <i class="fa-regular fa-square-check ic3 "></i>
              <div className='block'>
                <p className='black3'>Operatin in 0ver</p>
                <p className='black4'>4 Countries</p>
             </div>
                <div className='block'>
                </div>
                </div>
                
            
                        </div>
                      </div>
         </div>            
    </div>
  )
}
