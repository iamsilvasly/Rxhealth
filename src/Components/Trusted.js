import React from 'react'
import logo from "../assets/images/logo192.png";
import acacia from "../assets/images/acacia-70x70.png";
import apex from "../assets/images/apex-70x70.png";
import metro from "../assets/images/metro-70x70.png";
import glico from "../assets/images/glico-70x70.png";
import nnp from "../assets/images/nnpchmo-70x70.png";

function Trusted() {
  return (
    <div className='row '>
        <div className='col-lg-2 col-sm-2 Trusted_div'>
            <div className='textdecoration'>
              <div>Trusted by</div>
            </div>
        </div>
        <div className='col-lg-10 col-sm-2 '>
          <div className='sponsor_img'>
            <img src={acacia} width="32px" height="32px" alt="React"></img>
            <img src={apex} width="32px" height="32px" alt="Image"></img>
            <img src={metro} width="3px" height="32px" alt="React"></img>
            <img src={glico} width="32px" height="32px" alt="Image"></img>
            <img src={nnp} width="32px" height="32px" alt="React"></img>
            <img src={logo} width="32px" height="32px" alt="Image"></img>
          </div>
    </div>
    </div>
  );
//   Array.map(function(e){

//       <Trusted img={e.image} text={e.text}/>
//   });
}
export default Trusted