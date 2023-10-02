import React, { Component } from 'react'
import group from "../assets/images/DSCF7964-scaled.jpg"
import gadri from "../assets/images/Gadri.png"
import John from "../assets/images/DSCF7856-683x1024.jpg"
import emefa from "../assets/images/DSCF7869-683x1024 (1).jpg"
import rich from "../assets/images/DSCF7861-683x1024.jpg"


export class Abouthero extends Component {
  render() {
    return (
      <div>
        <div className='row'>
            <div className='col-lg-5'> <img src={group} width="530px" height="340px" alt="React" ></img></div>
            <div className='col-lg-7'>
                <div className='abu_sec'>
                <h3>About Us</h3>
                <p className='pfont'>Founded in Ghana in 2015, our solutions today<br/> span 4 African
                countries and are used by over<br/> 1000  health providers.</p>
                </div>
            </div>
        </div>

        <div className='row'>
            <div className='col-lg-12 text-center'>
            <h5 className='corev_title'>Core <span className='solution_span'>Values</span></h5>
            </div>
        </div>
        <div className='container3'>
        <div className='row'>
          <div className='col-lg-2'><h6 className='black'><i class="fa-solid fa-lightbulb ic"></i>Innovative</h6></div>
          <div className='col-lg-2'><h6 className='black'> <i class="fa-solid fa-user-group ic"></i>Team Work</h6></div>
          <div className='col-lg-2'><h6 className='black'><i class="fa-solid fa-thumbs-up ic"></i>Integrity</h6></div>
          <div className='col-lg-2'><h6 className='black'><i class="fa-solid fa-user-shield ic"></i>Discipline</h6></div>
          <div className='col-lg-2'><h6 className='black'><i class="fa-solid fa-helmet-safety ic"></i>Hard Work</h6></div>
          </div>
        </div>


        {/* Message Open  */}
        <div className='row gx-0'>
          <div className='col-lg-6'>
            <div className='mission_vission2'>
              <h4>Message From<br/> Management</h4>
              <p className='pfont'>At RX Health our goal is to make every solution as relevant and real world relatable as possible.<br/><br/>
              Please feel free to browse through our wide range of solutions on offer and we are sure you will find something that suits your needs. If you can’t find something that suits your needs don’t worry.<br/><br/>
              Send me an email: emefa@rxhealthinfosystems.com and we shall find a solution that works hand in hand with you.</p> <br/><br/>
            <br/>
           <p>Signed</p>
           <p>Gertrude Emefa Badoe</p>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='mission_vission'> 
              <h4 className='h_mission'>Mission</h4>
              <p className='missionfont'> We aim to provide reliable and easy to use solutions<br/>that address the needs of our 
                clients in a timely<br/> manner.</p>

                <h4 className='h_vission'>Vission</h4>
              <p className='missionfont'> Our vision is to be the leading healthcare technology <br/>solutions partner in emerging markets</p>
            </div>
          </div>
        {/* Message Close */}


      {/*  Open Management */}
        <div className='row gx-0'>
          <div className='col-lg-6'> 
          <div className='profile-img'>
           <img src={emefa} alt="React"  width="614px" height="450px"></img></div>
           </div> 
          <div className='col-lg-6 col-sm-6'>
            <div className='profile'>
              <div className='profile_margin'>
              <h2>Mrs Gertrude Emefa Baidoo (GM)</h2>
              <p>Currently the General Manager at Rx Health Info Systems, with an<br/> exemplary career within Health administration and customer <br/>services spanning the last 10yrs. Gertrude was the former Healthcare<br/> administrator at Foresight Medical Centre and customer relations <br/> manager at MTN, Ghana.</p>
              </div>
            </div>
          </div>
        </div>


        <div className='row gx-0'>
          <div className='col-lg-6 col-sm-6'>
            <div className='profile'>
            <div className='profile_margin'>
              <h2>John K. Mbir (C.T.O)</h2>
              <p>John is the Co-founder of Appnet consult and an MBA degree holder with specialization in Management Information Systems (MIS). John has astute skills in ICT especially in programming. He is an excellent and experienced Software Engineer looking to continue his career within agency side development.<br/><br/>
               John has been creating diverse and attention-catching web presence for a variety of clients across the globe for over seven years. He is currently the Chief Technology Officer (CTO) for Rx Health Info Systems, a leading IT company in the Health sector.</p>
            </div>
            </div>
            </div>
            <div className='col-lg-6'>
            <div className='profile-img'>
              <img src={John} alt="React"  width="613px" height="450px"></img> 
           </div>
           </div>
          
        </div>


        <div className='row gx-0'>
          <div className='col-lg-6 col-sm-6'>
          <div className='profile-img'>
          <img src={rich}  alt="React" width="614px" height="450px" ></img>
          </div> 
          </div>
          <div className='col-lg-6 v'>
            <div className='profile'>
            <div className='profile_margin'>
              <h2>Mr Richard Edem Asravor <span>(C.O.O)</span></h2>
              <p>He has vast experience in operation strategy. Richard deployed our first operation in Nigeria and Angola. He holds bachelor degree in BSc Computer Science and Management and an MBA in Management Information System from University of Ghana Business School..</p>
            </div>
            </div>
          </div>
        </div>
        {/* close management */}
        

        <div className='row'>
            <div className='col-lg-12 text-center'>
            <h5 className='corev_title'>Our <span className='solution_span'>Team</span></h5>
            </div>
        </div>


        <div className='container2'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='profile_card'> 
                <div className='profile_image'> <img src={gadri} width="60%" height="50%" border-radius="20px" alt="React" ></img></div>
                <div className='profile_name'><h5 className='blue'>Andrew Gadri</h5></div>
                <div className='profile_post'><p className='black2'>Mobile Developer</p></div>
              </div>
            </div>
            <div className='col-lg-4'>
            <div className='profile_card'> 
                <div className='profile_image'> <img src={gadri} width="60%" height="50%" border-radius="20px" alt="React" ></img></div>
                <div className='profile_name'><h5 className='blue'>Andrew Gadri</h5></div>
                <div className='profile_post'><p className='black2'>Mobile Developer</p></div>
              </div>
            </div>
            <div className='col-lg-4'>
            <div className='profile_card'> 
                <div className='profile_image'> <img src={gadri} width="60%" height="50%" border-radius="20px" alt="React" ></img></div>
                <div className='profile_name'><h5 className='blue'>Andrew Gadri</h5></div>
                <div className='profile_post'><p className='black2'>Mobile Developer</p></div>
              </div>
            </div>
          </div>
        


        
          <div className='row '>
            <div className='col-lg-4'>
              <div className='profile_card'> 
                <div className='profile_image'> <img src={gadri} width="60%" height="50%" border-radius="20px" alt="React" ></img></div>
                <div className='profile_name'><h5 className='blue'>Andrew Gadri</h5></div>
                <div className='profile_post'><p className='black2'>Mobile Developer</p></div>
              </div>
            </div>
            <div className='col-lg-4'>
            <div className='profile_card'> 
                <div className='profile_image'> <img src={gadri} width="60%" height="50%" border-radius="20px" alt="React" ></img></div>
                <div className='profile_name'><h5 className='blue'>Andrew Gadri</h5></div>
                <div className='profile_post'><p className='black2'>Mobile Developer</p></div>
              </div>
            </div>
            <div className='col-lg-4'>
            <div className='profile_card'> 
                <div className='profile_image'> <img src={gadri} width="60%" height="50%" border-radius="20px" alt="React" ></img></div>
                <div className='profile_name'><h5 className='blue'>Andrew Gadri</h5></div>
                <div className='profile_post'><p className='black2'>Mobile Developer</p></div>
              </div>
            </div>
          </div>
        </div>


        </div>
        
      </div>
    )
  }
}

export default Abouthero
