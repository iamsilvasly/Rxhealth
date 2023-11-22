// import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import logo from "../../assets/images/rxlogo.jpg"
import Dropdown from './Dropdown';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 60) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 860) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };


return (
    <div>
     <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <img src={logo} className='logo2' alt="React"></img>
         
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <span
             
              className='nav-links'
              onMouseEnter={() => setSolutionsDropdown(!solutionsDropdown)}
              onMouseLeave={() => setSolutionsDropdown(solutionsDropdown)}
              // onMouseOver={() => setSolutionsDropdown(!solutionsDropdown)}
              // onMouseMove={() => setSolutionsDropdown(!solutionsDropdown)}
              // onMouseOut={() => setSolutionsDropdown(!solutionsDropdown)}
              
            >
              Solution  <i className='fas fa-caret-down' />
              </span>
              <div 
           
              onMouseLeave={() => setSolutionsDropdown(!solutionsDropdown)}
              >
             { solutionsDropdown && <Dropdown /> }
              </div>
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/healthblog'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Health Blog
            </Link>
          </li>
          
        </ul>
        
      </nav>

      
      

    </div>
  )
}

export default Navbar
