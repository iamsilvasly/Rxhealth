import React, { Component } from 'react'
import '../contactus/Cstyle.css'
import right from '../../assets/images/rigths.png';

export class Details extends Component {
  render() {
    return (
      <div>
         <div className='row gx-0'>
            <div className='col-lg-6'>
                <div className='details_info'>
                    <h3>Contact Us</h3>
                    <h6><i class="fa-solid fa-phone details_icon "></i>030 987 9099</h6>
                    <h6><i class="fa-solid fa-location-dot details_icon "></i>GA-098-978- 21 Westland Blvd</h6>
                    <h6><i class="fa-solid fa-at details_icon"></i>support@rxhealth.com</h6>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='details_form'>
                        
                <form>
                            <div class="row py-2">
                                <div class="form-group col-lg-4 col-md-4 col-sm-12">
                                <label for="inputEmail4">Name</label>
                                <input type="text" class="form-control2" id="inputName4" placeholder="Name"></input>
                                </div>
                                <div class="form-group col-lg-4 col-md-4 col-sm-12">
                                <label for="inputEmail">Email</label>
                                <input type="email" class="form-control2" id="inputEail4" placeholder="Email"></input>
                                </div>
                                <div class="form-group col-lg-4 col-md-4 col-sm-12">
                                <label for="inputNumber">Contact</label>
                                <input type="int" class="form-control2" id="inputAddress" placeholder="Contact"></input>
                                </div>
                            </div>
                        
                           
                            <div class="form-row py-2">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Country</label>
                                <input type="text" class="form-control" id="inputName4" placeholder="Country"></input>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputEmail">Company Name</label>
                                <input type="email" class="form-control" id="inputEail4" placeholder="Company Name"></input>
                                </div>
                            </div>
                            
                            <div class="form-row py-2">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Company Type</label>
                                <input type="text" class="form-control" id="inputName4" placeholder="Company Type"></input>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputEmail">Position</label>
                                <input type="email" class="form-control" id="inputEail4" placeholder="Position"></input>
                                </div>
                            </div>
                            <h6>Please select the products you would like to learn more about</h6>
                            
                            
                            
                            <div class="form-row py-2">
                            <div class="form-check col-md-4">
                                    <input class="form-check-input" type="checkbox" id="payersolution"></input>
                                    <label class="form-check-label" for="payersolution">
                                    Payer Solutions
                                    </label>
                                </div>
                                <div class="form-check col-md-4">
                                    <input class="form-check-input" type="checkbox" id="patientsolution"></input>
                                    <label class="form-check-label" for="patientsolution">
                                    Patient Solution
                                    </label>
                                </div>
                                <div class="form-check col-md-4">
                                    <input class="form-check-input" type="checkbox" id="providersolution"></input>
                                    <label class="form-check-label" for="providersolution">
                                    Provider Solution
                                    </label>
                                </div>
                             </div>   




                             <div class="form-row">
                            <div class="form-check col-md-4">
                                    <input class="form-check-input" type="checkbox" id="developersolution"></input>
                                    <label class="form-check-label"  for="developersolution">
                                    Developer Solution
                                    </label>
                                </div>
                                <div class="form-check col-md-4">
                                    <input class="form-check-input" type="checkbox" id="analyticsolution" ></input>
                                    <label class="form-check-label"  for="analyticsolution">
                                    Analytic Soultion
                                    </label>
                                </div>
                                <div class="form-check col-md-4">
                                    <input class="form-check-input" type="checkbox" id="crmsolution"></input>
                                    <label class="form-check-label"  for="crmsolution" >
                                    CRM Solution
                                    </label>
                                </div>
                             </div>  
                            <div className='button-send'>
                             <button type="submit" class="btn btn-primary my-">Send</button>
                             
                             <div className='right'>
                                <img src={right}  alt="React" className='right_img2new'></img>
                            </div>
                            </div>

                            </form>
                           
                </div>
               
            </div>
        </div>
      </div>
    )
  }
}

export default Details

