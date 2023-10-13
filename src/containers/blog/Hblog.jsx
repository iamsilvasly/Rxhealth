import React, { Component } from 'react'
import "../blog/Blogstyle.css"
import watch from "../../assets/images/Rectangle 96.png";
import fruit from '../../assets/images/fruits.png';
import left from '../../assets/images/lefts.png'
import right from '../../assets/images/rigths.png';

export class Hblog extends Component {
  render() {
    return (
      <div>
         <div className='lefts'>
        <img src={left}  alt="React" className='left_img'></img>
        </div>
        <div className='row'>
         
            <div className='col-lg-12 text-center '>
                <div className='blog_title'>
                    <h3>Blog</h3>
                </div>    
            </div>
        </div>

        <div className='container22'>
            <div className='row gx-0 py-4'>
                <div className='col-lg-4 py-4'>
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
                <div className='col-lg-4 col-sm-12'>
                    <div className='inline2'>
                    <button className='dis_bg3' >All</button>

                    <button className='dis_bg' >Health</button>

                    <button className='dis_bg' >Tech</button>

                    <button className='dis_bg' >People</button>
                    </div>
                </div>
                <div className='col-lg-7 col-sm-12'>
                <div className='search_pad'>
                <input type="text" class="search_control" id="inputName4" placeholder="Search" ></input>
                </div>
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

        <div className='Page_section'>
            <ul className='Number_section'>
                <i class="fa-solid fa-circle-chevron-left ic"></i>
                <button className='Numbs'>1</button>
                <button className='Numbs'>2</button>
                <button className='Numbs'>3</button>
                <button className='Numbs'>4</button>
                <button className='Numbs'>5</button>
                <i class="fa-solid fa-circle-chevron-right ic"></i>
            </ul>

        </div>
        
        <div className='right'>
        <img src={right}  alt="React" className='right_img'></img>
        </div>
        
      </div>
    )
  }
}

export default Hblog
