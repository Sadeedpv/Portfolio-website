import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import { FaMoon, FaSun  } from "react-icons/fa";

function Navbar() {
  const [clicked, setclicked] = useState(false)
  const navRef = useRef()
  const shadowRef = useRef()
  const [active, setactive] = useState('About')
  const hamburgerRef = useRef();

  window.onscroll = function () {
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        shadowRef.current.classList.add("navbar-shadow")
      } else {
        shadowRef.current.classList.remove("navbar-shadow")
    }
  }

  return (
    <>
    {/* This nav component is for mobile devices */}
    <div className='smaller-nav' ref={hamburgerRef}>
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='close-icon' onClick={() =>{
       hamburgerRef.current.style.transform = "translateX(200%)";
       document.body.style.overflowY = "scroll";
    }}>
<path d="M2.46758 2L19 18.0888" stroke="#FF0066" strokeWidth="3" strokeLinecap="round"/>
<path d="M19 2L2.46757 18.0888" stroke="#FF0066" strokeWidth="3" strokeLinecap="round"/>
</svg>

      <ul>
        <li><a href='# '>Home</a></li>
        <li><a href='# '>About</a></li>
        <li><a href='# '>Projects</a></li>
        <li><a href='# '>Contact</a></li>
      </ul>
    </div>

    <div className='navbar' ref={shadowRef}>
      <div className='logo'><h2>Discover</h2></div>
      <div className='contents'>
      <svg width="53" height="23" viewBox="0 0 53 23" fill="none" xmlns="http://www.w3.org/2000/svg" className='nav-icon' ref={navRef} onClick={() =>{
        document.body.style.overflowY = "hidden";
        hamburgerRef.current.style.transform = 'translateX(0%)';

      }}>
        <path d="M2.02386 1.87744H51" stroke="black" strokeWidth="3" strokeLinecap="round" className='path1'/>
        <path d="M2.02386 11.0605H34.9297" stroke="black" strokeWidth="3" strokeLinecap="round" className='path2'/>
        <path d="M2 21.0374L26.5358 20.9802" stroke="black" strokeWidth="3" strokeLinecap="round" className='path3'/>
      </svg>


        <ul>
          <li><a href='# ' className={active === 'Home' ? 'active icon': ''} 
          onClick={() =>{
            setactive('Home')
          }}>Home</a></li>
          <li><a href='# ' onClick={() =>{
            setactive('About')
          }
          }
          className={active === 'About' ? 'active icon' : ''}
          >About</a></li>
          <li><a href='# ' onClick={() =>{
            setactive('Projects')
          }}
          className={active === 'Projects' ? 'active icon' : ''}
          >Projects</a></li>
          <li><a href='# ' onClick={() =>{
            setactive('Contact')
          }}
          className={active === 'Contact' ? 'active icon' : ''}
          >Contact</a></li>
          {clicked === false && <li><a href='#' className='icon' onClick={() =>{
            setclicked(true)
          }}><FaMoon /></a></li>}
          {clicked && <li><a href='#' className='icon' onClick={() =>{
            setclicked(false)
          }}><FaSun /></a></li>}
          
        </ul>
      </div>
    </div>
  </>
  )
}

export default Navbar