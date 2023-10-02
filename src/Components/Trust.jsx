import React, { Component } from 'react'
import ace from "../assets/images/ace-100x100.png";
import acacia from "../assets/images/acacia-70x70.png";
import apex from "../assets/images/apex-70x70.png";
import metro from "../assets/images/metro-70x70.png";
import glico from "../assets/images/glico-70x70.png";
import nnp from "../assets/images/nnpchmo-70x70.png";
import nmh from "../assets/images/nmh-70x70.png"



export default class Trust extends Component {
  render() {
    return (
        <div className='row '>
        <div className='col-lg-2 col-sm-6 Trusted_div'>
            <div className='textdecoration'>
              <h5 className='Trust_tittle'>Trusted by</h5>
            </div>
        </div>
        <div className='col-lg-10 col-sm-6 spon_div'>
          <div className='sponsor_img'>
            <img src={acacia} width="120px" height="80px" alt="React" className='sponsor_space'></img>
            <img src={apex} width="120px" height="80px" alt="Image"  className='sponsor_space'></img>
            <img src={metro} width="120px" height="80px" alt="React"  className='sponsor_space'></img>
            <img src={glico} width="120px" height="80px" alt="Image" className='sponsor_space'></img>
            <img src={nnp} width="120px" height="80px" alt="React"  className='sponsor_space'></img>
            <img src={nmh} width="120px" height="80px" alt="Image"  className='sponsor_space'></img>
            <img src={ace} width="120px" height="80px" alt="Image"  className='sponsor_space'></img>
          </div>
    </div>
    </div>
    )
  }
}
