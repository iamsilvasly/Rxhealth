import React from 'react'
import Button from './Reuseable/Button'
import vector from "../assets/images/Vector.png"
import vector2 from "../assets/images/Vector-1.png"


export default function Hero() {
  return (
    <div className='Hsection'>
                 <div className='row'>
                   <div className=' col-sm-12'>
                    <div className='vector_class'>
                      <img src={vector} alt="React" className='vector' ></img>
                      <img src={vector2} className='vector2' alt="React" ></img>
                    </div>
                      <div className='Hero_section text-center'>
                        <h1 className='hero_tittle'>RX HEALTH INFO SYSTEMS</h1>
                        <h5 className='hero_des'>Humanizing  <span className='hero_des2'>Healthcare</span> Technology</h5>
                        <p className='Hero_P'>We passionately develop healthcare technology  solutions that
                         solve the<br/> real challenges that health workers and stakeholders 
                        encounter today <br/>and will face tomorrow
                        </p>
                            <button className='bttn'>Request Demo</button>
                      </div>
                      
                   </div>
          </div>
          <div className='container3'>
          <div className='row text-center py-5'>
              <div className='col-lg-4 col-md-4 mb-3'>
                    <div className='cflex gap-1'>
                      <div className='ic_bg3'>
                    <i class="fa-solid fa-user-group ic5"></i>
                    </div>
                    <div className='block'>
                    <p className='black5'>TRUSTED BY MORE THAN</p>
                    <p className='black_client'>20 Clients</p>
                    </div>
                    <div className='block'>
                    </div>
                    </div>
                   </div> 
                        
                        
                        <div className='col-lg4 col-md-4  mb-3'>
                          <div className='hflex'>
                               <div className='ic_bg3'>
                                <i class="fa-regular fa-building ic5"></i>
                               </div>
                               <div className='hblock'>
                               <p className='black5'>And Used By Over</p><br></br>
                                <h6 className='black_health'>1000 Health Facilities</h6>
                               </div>
                         
                     
                         
                              
                                
                               
                        </div>
                      </div>
                        
       <div className='col-lg-4 col-md-4  mb-3'>
       <div className='cflex gap-1'>
                    <div className='ic_bg3'>
                    <i class="fa-solid fa-globe ic5"></i>
                    </div>
                    <div className='block'>
                    <p className='black5'>OPERATING IN OVER</p>
                    <h6 className='black_countries'>4 Countries</h6>
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
