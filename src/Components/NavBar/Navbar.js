import React, {useState} from 'react';
import {FaGasPump, FaTimes} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Nav, NavContainer, LogoHold, MoblieIcon, NavBar, NavLinks} from './NavBar.Element'

import {Link, NavLink} from 'react-router-dom'



function Navbar(){

 const[click, setClick] = useState(false);

 const handClick = () => {
  setClick(!click)
 }

  const navLinkStyles = ({isActive}) =>{
    return{
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? 'red' : 'white',
    }
  }


 return(
  <>

  <Nav>
   <NavContainer>
    <LogoHold>
     <FaGasPump/>LSETF
    </LogoHold>

    <MoblieIcon onClick={handClick}>
     {click ? <FaTimes/> :
      <GiHamburgerMenu/>}
     
    </MoblieIcon>
    <NavBar onClick={handClick} click={click}>
      <NavLink to="/" style={navLinkStyles}>Home</NavLink>
      <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
      <NavLink to="/serve" style={navLinkStyles}>Services</NavLink>
      <NavLink to="/blog" style={navLinkStyles}>Blog</NavLink>

      </NavBar>

   </NavContainer>

  </Nav>
  </>

 );
}

export default Navbar;