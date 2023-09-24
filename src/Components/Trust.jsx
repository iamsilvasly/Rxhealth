import React, { Component } from 'react'
import logo from "../assets/images/logo192.png";
import acacia from "../assets/images/acacia-70x70.png";
import apex from "../assets/images/apex-70x70.png";
import metro from "../assets/images/metro-70x70.png";
import glico from "../assets/images/glico-70x70.png";
import nnp from "../assets/images/nnpchmo-70x70.png";

export default class Trust extends Component {
  render() {
    return (
        <div className='row '>
        <div className='col-lg-2 col-sm-6 Trusted_div'>
            <div className='textdecoration'>
              <h4 className='Trust_tittle'>Trusted by</h4>
            </div>
        </div>
        <div className='col-lg-10 col-sm-6 spon_div'>
          <div className='sponsor_img'>
            <img src={acacia} width="150px" height="120px" alt="React" className='sponsor_space'></img>
            <img src={apex} width="150px" height="120px" alt="Image"  className='sponsor_space'></img>
            <img src={metro} width="150px" height="120px" alt="React"  className='sponsor_space'></img>
            <img src={glico} width="150px" height="120px" alt="Image" className='sponsor_space'></img>
            <img src={nnp} width="150px" height="120px" alt="React"  className='sponsor_space'></img>
            <img src={logo} width="150px" height="120px" alt="Image"  className='sponsor_space'></img>
          </div>
    </div>
    </div>
    )
  }
}
