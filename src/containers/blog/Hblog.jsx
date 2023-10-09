import React, { Component } from 'react'
import "../blog/Blogstyle.css"
import watch from "../../assets/images/Rectangle 96.png";
import fruit from '../../assets/images/fruits.png';

export class Hblog extends Component {
  render() {
    return (
      <div>
        <div className='row'>
            <div className='col-lg-12 text-center '>
                <div className='blog_title'>
                    <h3>Blog</h3>
                </div>    
            </div>
        </div>

        <div className='container22'>
            <div className='row'>
                <div className='col-lg-4 py-5'>
                    <p className='blue'>Tech <i class="fa-solid fa-circle techicon"></i></p>
                    <h2 className='blue'>Health tech taking over</h2>
                    <p className='author'>Story by Bagna</p>
                </div>
                <div className='col-lg-7'>
                <img src={watch}  alt="React" className='watch_img'></img><br></br>
                    <div className='icon_div'>
                        <i class="fa-solid fa-circle-chevron-left ic"></i>
                        <i class="fa-solid fa-circle-chevron-right ic"></i>
                    </div>    
                </div>
            </div>

        </div>


        <div className='conainer22'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='inline2'>
                   <div className='dis_bg'>
                      <p className='le_blue'>All</p>
                    </div>
                    <div className='dis_bg'>
                      <p className='le_blue'>Health</p>
                    </div>
                    <div className='dis_bg'>
                      <p className='le_blue'>Tech</p>
                    </div>
                    <div className='dis_bg'>
                      <p className='le_blue'>People</p>
                    </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                <input type="text" class="form-control" id="inputName4" placeholder="Search"></input>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row'>
            <div className='col-lg-4'>
              <div className='t'>
              <img src={fruit}  alt="React" className='watch_img'></img><br></br>
              <div className='blog_date'>
              <p className='blue'>Tech <i class="fa-solid fa-circle techicon"></i></p>
              <p className='date'>October 5 2023</p>
              </div>
              <h5 className='blue'>Your health is your wealth</h5>
              <p className='author'>Bagna Omar</p>
              </div>

            </div>


            <div className='col-lg-4'>
            <div className='t'>
              <img src={fruit}  alt="React" className='watch_img'></img><br></br>
              <div className='blog_date'>
              <p className='blue'>Tech <i class="fa-solid fa-circle techicon"></i></p>
              <p className='date'>October 5 2023</p>
              </div>
              <h5 className='blue'>Your health is your wealth</h5>
              <p className='author'>Bagna Omar</p>
              </div>

            </div>


            <div className='col-lg-4'>
            <div className='t'>
              <img src={fruit}  alt="React" className='watch_img'></img><br></br>
              <div className='blog_date'>
              <p className='blue'>Tech <i class="fa-solid fa-circle techicon"></i></p>
              <p className='date'>October 5 2023</p>
              </div>
              <h5 className='blue'>Your health is your wealth</h5>
              <p className='author'>Bagna Omar</p>
              </div>

              </div>  


              <div className='col-lg-4'>
            <div className='t'>
              <img src={fruit}  alt="React" className='watch_img'></img><br></br>
              <div className='blog_date'>
              <p className='blue'>Tech <i class="fa-solid fa-circle techicon"></i></p>
              <p className='date'>October 5 2023</p>
              </div>
              <h5 className='blue'>Your health is your wealth</h5>
              <p className='author'>Bagna Omar</p>
              </div>

              </div> 


              <div className='col-lg-4'>
            <div className='t'>
              <img src={fruit}  alt="React" className='watch_img'></img><br></br>
              <div className='blog_date'>
              <p className='blue'>Tech <i class="fa-solid fa-circle techicon"></i></p>
              <p className='date'>October 5 2023</p>
              </div>
              <h5 className='blue'>Your health is your wealth</h5>
              <p className='author'>Bagna Omar</p>
              </div>

              </div> 


              <div className='col-lg-4'>
            <div className='t'>
              <img src={fruit}  alt="React" className='watch_img'></img><br></br>
              <div className='blog_date'>
              <p className='blue'>Tech <i class="fa-solid fa-circle techicon"></i></p>
              <p className='date'>October 5 2023</p>
              </div>
              <h5 className='blue'>Your health is your wealth</h5>
              <p className='author'>Bagna Omar</p>
              </div>

              </div> 
            
            </div>
        </div>
        
      </div>
    )
  }
}

export default Hblog
