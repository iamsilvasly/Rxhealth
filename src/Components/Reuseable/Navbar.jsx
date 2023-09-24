import React from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
    const [show,setShow] =useState(true)

    const handleShow = () =>{
        setShow (current=>!current)
    }
  
  
    return (
    <div>
      <header>
        <div className='logo'>
            Company
        </div>
        {show &&
        <div className='display-menu'>
          <Link className='menu' to={"/"}>Home</Link>
          <Link className='menu' to={"/solution"}>Solution</Link>
          <Link className='menu' to={"/about"}>About Us</Link>
          <Link className='menu' to={"/contact"}>Contact US</Link>
          <button className='btn btn-primary'>Health Blog</button>
        </div>
        }
        <button onClick={handleShow} className='toggle'><MenuIcon/></button>
      </header>
    </div>
  )
}

export default Navbar
