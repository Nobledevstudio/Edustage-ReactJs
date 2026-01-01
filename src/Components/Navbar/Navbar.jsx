import React, { useEffect, useState } from 'react'
import edustage from "../../assets/logo.png"
import './Navbar.css'
import Menubar from '../../assets/menu-bar.png'
import { Link } from 'react-scroll';


const Navbar = ({setSearchIcon,showSearchBar,setShowSearchBar}) => {
     

    const [sticky, setSticky] = useState(false);
     
    useEffect(()=>{
       window.addEventListener('scroll',()=>{
        window.scrollY > 50 ?setSticky(true) : setSticky(false);
       })
    },[]);

    const [menu, setMenu] = useState(false);

    const toggleMenu= ()=>{
      menu ?  setMenu(false) : setMenu(true);

    }
     
   
 
  return (

   <div>   
   
    <nav className={`container ${sticky ? 'styled-bg': ''} ${showSearchBar ? 'navbar-shifted': ''} ` }>  
          <div className="nav-logo">
            <img src={edustage} alt="" />
            </div>  
            <div className="nav-links">
               <ul className={`nav-links ${menu ? 'show-menu' : ''}`}>
    <li>
        <Link to='hero' offset={0} smooth={true} duration={500} onClick={() => setMenu(false)}>Home</Link>
    </li>
    <li>
        <Link to='features' offset={0} smooth={true} duration={500} onClick={() => setMenu(false)}>Features</Link>
    </li>
    <li>
        <Link to='courses' offset={0} smooth={true} duration={500} onClick={() => setMenu(false)}>Courses</Link>
    </li>
    <li>
        <Link to='testimonial' offset={-160} smooth={true} duration={500} onClick={() => setMenu(false)}>Testimonial</Link>
    </li>
    <li>
        <Link to='about' offset={-160} smooth={true} duration={500} onClick={() => setMenu(false)}>About</Link>
    </li>
    <li>
        <Link to='contact' offset={-60} smooth={true} duration={500} onClick={() => setMenu(false)}>Contact</Link>
    </li>
    <li onClick={() => { setSearchIcon(true); setShowSearchBar(true); setMenu(false); }}>
        <i className="fa-solid fa-magnifying-glass"></i>
    </li>
</ul>

            </div>  
            <img src={Menubar} alt="" className='menu-bar' onClick={toggleMenu} />
    </nav>
   </div>   

  )
}

export default Navbar