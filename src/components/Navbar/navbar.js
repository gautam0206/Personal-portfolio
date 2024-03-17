import React, { useState } from "react";
import "./navbar.css";
import { FaRegMessage } from "react-icons/fa6";
import logo from "../../assests/logo_porofolio.png";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [showMenu,setshowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <div className="desktopMenu">
        <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>


        <Link activeClass="active" to='about' spy={true} smooth={true} offset={-80} duration={500}  className="desktopMenuListItem">About</Link>

        <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-40} duration={500}  className="desktopMenuListItem">Skills</Link>


        <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-10} duration={500}  className="desktopMenuListItem">Projects</Link>

      </div>
      <button className="contactBtn" onClick={()=>{document.getElementById('contact').scrollIntoView({behavior:'smooth'});}}> <FaRegMessage className="icon" />Contact Me</button>


{/* burger menu */}
     
      <IoMenu className="mobMenu" onClick={()=>setshowMenu(!showMenu)}/>
      <div className="navMenu" style={{display : showMenu? 'flex' :'none'}}>

        <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Home</Link>


        <Link activeClass="active" to='about' spy={true} smooth={true} offset={-70} duration={500}  className="listItem" onClick={()=>setshowMenu(false)}>About</Link>


        <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500}  className="listItem" onClick={()=>setshowMenu(false)}>Skills</Link>


       
        <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-100} duration={500}  className="listItem" onClick={()=>setshowMenu(false)}>Projects</Link>
        
        <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-100} duration={500}  className="listItem" onClick={()=>setshowMenu(false)}>Contact</Link>


      </div>
    </nav>
  );
};

export default Navbar;
