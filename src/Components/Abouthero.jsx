import React, { Component } from 'react'
import group from "../assets/images/DSCF7964-scaled.jpg"
import gadri from "../assets/images/Gadri.png"
import John from "../assets/images/DSCF7856-683x1024.jpg"
import emefa from "../assets/images/DSCF7869-683x1024 (1).jpg"
import rich from "../assets/images/DSCF7861-683x1024.jpg"
import aboutright from '../assets/images/aboutright.png'


export class Abouthero extends Component {
  render() {
    return (
      <div>
        <div className='row gx-0'>
            <div className='col-lg-5'>
               <img src={group} className='about_img' alt="React" ></img>
               </div>
            <div className='col-lg-7'>
                <div className='abu_sec'>
                <h3>About Us</h3>
                <p className='pfont'>Founded in Ghana in 2015, our solutions today<br/> span 4 African
                countries and are used by over<br/> 1000  health providers.</p>
                </div>
                <div className='right'>
                                <img src={aboutright}  alt="React" className='right_img3'></img>
                 </div>
            </div>
        </div>

        <div className='row'>
            <div className='col-lg-12 text-center'>
            <h3 className='corev_title'>Core <span className='solution_span'>Values</span></h3>
            </div>
        </div>
        <div className='container3'>
        <div className='row'>
          {/* <div className='col-lg-2 col-md-6'><div className='core_icon'><div className='icbg'><i class="fa-solid fa-dice-three icon"></i></div><h5 className='feature_txt'>Simplicity</h5></div></div> */}
          <div className='col-lg-2 col-md-6'><div className='core_icon'><div className='icbg'><i class="fa-solid fa-lightbulb ic "></i></div><h6 className='feature_txt'>Innovative</h6></div></div>
          <div className='col-lg-2 col-md-6'><div className='core_icon'><div className='icbg'> <i class="fa-solid fa-user-group ic"></i></div><h6 className='feature_txt'>Team Work</h6></div></div>
          <div className='col-lg-2 col-md-6'><div className='core_icon'><div className='icbg'><i class="fa-solid fa-thumbs-up ic "></i></div><h6 className='feature_txt'>Integrity</h6></div></div>
          <div className='col-lg-2 col-md-6'><div className='core_icon'><div className='icbg'><i class="fa-solid fa-user-shield ic"></i></div><h6 className='feature_txt'>Discipline</h6></div></div>
          <div className='col-lg-2 col-md-6'><div className='core_icon'><div className='icbg'><i class="fa-solid fa-helmet-safety ic"></i></div><h6 className='feature_txt'>Hard Work</h6></div></div>
          </div>
        </div>


        {/* Message Open  */}
        <div className='row gx-0'>
          <div className='col-lg-6 col-sm-12'>
            <div className='mission_vission2'>
             {/* <div className='m-2'>  */}
              <h3>Message From<br></br>Management</h3>
              <p className='pfont'>At RX Health our goal is to make every solution as relevant and <br/> real world relatable as possible.
              Please feel free to browse<br/>  through our wide range of solutions on offer and we are sure you<br/>  will find something that suits your needs. If you can’t find <br/> something that suits your needs don’t worry.<br/><br/>
              Send me an email: emefa@rxhealthinfosystems.com and we <br/>  shall find a solution that works hand in hand with you.</p>
           <p>Signed</p>
           <p><i>Gertrude Emefa Badoe</i></p>
            {/* </div> */}
            </div>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <div className='mission_vission'> 
              <h3 className='h_mission'>Mission</h3>
              <p className='missionfont'> We aim to provide reliable and easy to use solutions<br/>that address the needs of our 
                clients in a timely<br/> manner.</p>

                <h3 className='h_vission'>Vision</h3>
              <p className='missionfont'> Our vision is to be the leading healthcare technology <br/>solutions partner in emerging markets</p>
            </div>
            <div className='right'>
                                <img src={aboutright}  alt="React" className='right_img3'></img>
                 </div>
          </div>
        {/* Message Close */}


      {/*  Open Management */}
        <div className='row gx-0'>
          <div className='col-lg-6'> 
          <div className='img_card'>
           <img src={emefa} alt="React" className='profile_img'></img>
           </div>
           </div>
          <div className='col-lg-6'>
            <div className='profile'>
              <div className='profile_margin'>
              <h2>Mrs Gertrude Emefa Baidoo <i className='position_tittle'>(GM)</i></h2>
              <p>Currently the General Manager at Rx Health Info Systems, with an<br/> exemplary career within Health administration and customer <br/>services spanning the last 10yrs. Gertrude was the former<br/> Healthcare administrator at Foresight Medical Centre and<br/>  customer relations manager at MTN, Ghana.</p>
              </div>
            </div>
            <div className='right'>
                                <img src={aboutright}  alt="React" className='right_img3'></img>
                 </div>
          </div>
        </div>


        <div className='row gx-0'>
          <div className="col-lg-6">
            <div className='profile'>
            <div className='profile_margin'>
              <h2>John K. Mbir <i className='position_tittle'>(C.T.O)</i></h2>
              <p>John is the Co-founder of Appnet consult and an MBA degree<br/>  holder with specialization in Management Information Systems<br/>  (MIS). John has astute skills in ICT especially in programming.<br/>  He is an excellent and experienced Software Engineer looking to continue his career within agency side development.<br/><br/>
               John has been creating diverse and attention-catching<br/>  web presence for a variety of clients across the globe for over<br/>  seven years. He is currently the Chief Technology Officer (CTO) for<br/>  Rx Health Info Systems, a leading IT company in the Health sector.</p>
            </div>
            </div>
            <div className='right'>
                                <img src={aboutright}  alt="React" className='right_img3'></img>
                 </div>
            </div>
            <div className="col-lg-6  ">
            <div className='img_card'>           
              <img src={John} alt="React"  className='profile_img'></img> 
              </div>
           </div>
          
        </div>


        <div className='row gx-0'>
          <div className='col-lg-6 '>
            <div className='img_card'>
          <img src={rich}  alt="React" className='profile_img' ></img> 
          </div>
          </div>
          <div className='col-lg-6 '>
            <div className='profile'>
            <div className='profile_margin'>
              <h2>Mr Richard Edem Asravor <span><i className='position_tittle'>(C.O.O)</i></span></h2>
              <p>He has vast experience in operation strategy. Richard deployed <br/>  our first operation in Nigeria and Angola. He holds bachelor<br/>  degree in BSc Computer Science and Management and an MBA<br/>  in Management Information System from University of Ghana<br/>  Business School.</p>
            </div>
            
            </div>
            <div className='right'>
                                <img src={aboutright}  alt="React" className='right_img3'></img>
                 </div>
          </div>
        </div>
        {/* close management */}
        

        <div className='row'>
            <div className='col-lg-12 text-center'>
            <h3 className='corev_title'>Our <span className='solution_span'>Team</span></h3>
            </div>
        </div>


        <div className='container2'>
          <div className='row no-gutters '>
            <div className='col-lg-4 col-sm-6'>
              <div className='profile_card'> 
                 <img src={gadri} className='profile_image' alt="React" ></img>
                <div className='profile_name'><h5 className='blue'>Andrew Gadri</h5></div>
                <div className='profile_post'><p className='black2'>Mobile Developer</p></div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
            <div className='profile_card'> 
                 <img src={gadri}className='profile_image' alt="React" ></img>
                <div className='profile_name'><h5 className='blue'>Andrew Gadri</h5></div>
                <div className='profile_post'><p className='black2'>Mobile Developer</p></div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
            <div className='profile_card'> 
                <img src={gadri} className='profile_image' alt="React" ></img>
                <div className='profile_name'><h5 className='blue'>Andrew Gadri</h5></div>
                <div className='profile_post'><p className='black2'>Mobile Developer</p></div>
              </div>
            </div>



            <div className='col-lg-4 col-sm-6'>
              <div className='profile_card'> 
                 <img src={gadri} className='profile_image' alt="React" ></img>
                <div className='profile_name'><h5 className='blue'>Andrew Gadri</h5></div>
                <div className='profile_post'><p className='black2'>Mobile Developer</p></div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
            <div className='profile_card'> 
                 <img src={gadri}className='profile_image' alt="React" ></img>
                <div className='profile_name'><h5 className='blue'>Andrew Gadri</h5></div>
                <div className='profile_post'><p className='black2'>Mobile Developer</p></div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
            <div className='profile_card'> 
                <img src={gadri} className='profile_image' alt="React" ></img>
                <div className='profile_name'><h5 className='blue'>Andrew Gadri</h5></div>
                <div className='profile_post'><p className='black2'>Mobile Developer</p></div>
              </div>
            </div>

            



          </div>
        
              

        
          
        </div>


        </div>
        <div className='right'>
                                <img src={aboutright}  alt="React" className='right_img3'></img>
               </div>
      </div>
    )
  }
}

export default Abouthero
