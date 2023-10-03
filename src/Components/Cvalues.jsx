import React from 'react'
import Ds from "../assets/images/DSCF8413-2048x1365.jpg";

export default function Cvalues() {
  return (
    <div>
      <div className='row gx-0 mt-5'>
        <div className='col-lg-5'>
           
        <img src={Ds} className='core_img' alt="React"></img>
            

        </div>
        <div className='col-lg-7'>
            <div className='core_points'>
                <h3>Core Values</h3>
                <div className='cflex gap-4'>
                <i class="fa-regular fa-square-check ic2 "></i>
                <div className='block'>
                <h6>Innovative</h6>
                <p>Knowledge base and recieve</p>
                </div>
                <div className='block'>
                </div>
                </div>
                

                <div className='cflex gap-4'>
                <i class="fa-regular fa-square-check ic2 "></i>
                <div className='block'>
                <h6>Discipline</h6>
                <p>Knowledge base and recieve</p>
                </div>
                <div className='block'>
                </div>
                </div>

                <div className='cflex gap-4'>
                <i class="fa-regular fa-square-check ic2 "></i>
                <div className='block'>
                <h6>Teamwork</h6>
                <p>Knowledge base and recieve</p>
                </div>
                <div className='block'>
                </div>
                </div>
                
                <div className='cflex gap-4'>
                <i class="fa-regular fa-square-check ic2 "></i>
                <div className='block'>
                <h6>Hardwork</h6>
                <p>Knowledge base and recieve</p>
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
