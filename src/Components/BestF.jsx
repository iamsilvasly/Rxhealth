import React from 'react'
import { FaChalkboardTeacher } from "react-icons/fa";
import {FiAirplay } from "react-icons/fi";
import { BiTargetLock } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";

export default function BestF() {
  return (
    <div className='section'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7'>
                    <h3>The Best Features Our Users<br/> Are Enjoying</h3>
                    <p className='pfont'>Find information on any topic in our Knowledge Base,
                     and receive <br/>instructions on how to get  the most out  our products.</p>
                    <button className='learn_btn3'>See More</button>

                </div>
                <div className='col-lg-4'>
                    <div className='Besf_sec'>
                      <div className='besf_sec2'>
                        <div className='row'>
                          <div className='col-lg-12'> <FaChalkboardTeacher size='40px'/></div>
                          <div className='col-lg-12'></div>
                        </div>
                      <h6 className='Bestf_tittle'> <FaChalkboardTeacher size='40px'/> Reliability</h6><p className='Bestf_P bl'>Knowledge base and recieve</p>
                      <h6 className='Bestf_tittle'><FiAirplay size='40px'/>Tracking</h6><p className='Bestf_P'>Knowledge base and recieve</p>
                      <h6 className='Bestf_tittle'><BiTargetLock size='40px'/>Training</h6><p className='Bestf_P'>Knowledge base and recieve</p>
                      <h6 className='Bestf_tittle'><BiSupport size='40px'/>Support</h6><p className='Bestf_P'>Knowledge base and recieve</p>
                      </div>
                    </div>
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}
