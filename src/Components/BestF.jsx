import React from 'react'
import { FaChalkboardTeacher } from "react-icons/fa";
import {FiAirplay } from "react-icons/fi";
import { BiTargetLock } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import homeright from '../assets/images/home.png';

export default function BestF() {
  return (
    <div className='section'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7 col-sm-12'>
                    <h3>The Best Features Our Users<br/> Are Enjoying</h3>
                    <p className='pfont'>Find information on any topic in our Knowledge Base,
                     and receive <br/>instructions on how to get  the most out  our products.</p>
                    <button className='learn_btn3'>See More</button>

                </div>
                <div className='col-lg-4 col-sm-12 pr-0'>
                    <div className='Besf_sec'>
                      <div className='besf_sec2'>
                        
                        <div className='besf_icon'>
                          < FiAirplay size='55px'/>
                          <div className='besf_block'>
                          <h6 className='Bestf_tittle'>Reliability</h6>
                          <p className='Bestf_P bl'>Knowledge base and recieve</p>
                          </div>
                        </div>

                        <div className='besf_icon'>
                          <BiTargetLock size='55px'/>
                          <div className='besf_block'>
                          <h6 className='Bestf_tittle'>Tracking</h6>
                          <p className='Bestf_P bl'>Knowledge base and recieve</p>
                          </div>
                        </div>

                        <div className='besf_icon'>
                          < FaChalkboardTeacher  size='55px'/>
                          <div className='besf_block'>
                          <h6 className='Bestf_tittle'>Training</h6>
                          <p className='Bestf_P bl'>Knowledge base and recieve</p>
                          </div>
                        </div>

                        <div className='besf_icon'>
                          <BiSupport size='55px'/>
                          <div className='besf_block'>
                          <h6 className='Bestf_tittle'>Support</h6>
                          <p className='Bestf_P bl'>Knowledge base and recieve</p>
                          </div>
                        </div>
                     
                      
                      </div>
                      <div className='right'>
                          <img src={homeright}  alt="React" className='right_img9'></img>
                      </div>
                    </div>
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}
