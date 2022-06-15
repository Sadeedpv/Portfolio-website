import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import { FaMoon, FaSun  } from "react-icons/fa";
import {motion} from 'framer-motion'

function Navbar() {
  const [clicked, setclicked] = useState(false)
  const navRef = useRef()
  const shadowRef = useRef()
  const [active, setactive] = useState('Home')
  const [navAnime, setnavAnime] = useState(400)
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
    <motion.div 
    animate={{x: navAnime}}
    transition={{duration: 0.5, stiffness: 150, damping:30}}
    exit={{x: 800}}
    className='smaller-nav' ref={hamburgerRef}>
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='close-icon' onClick={() =>{
      setnavAnime(400)
      setTimeout(() =>{
       hamburgerRef.current.style.display = 'none';
        
      },500)
       document.body.style.overflowY = "auto";
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
    </motion.div>

    <motion.div className='navbar' id='backtotop' ref={shadowRef} initial={{y:'-200%'}} animate={{y: '0%'}} transition={{damping:'20', duration:0.8, delay:0.2}} >
      <div className='logo'><h2>Discover</h2></div>
      <div className='contents'>
      <svg width="53" height="23" viewBox="0 0 53 23" fill="none" xmlns="http://www.w3.org/2000/svg" className='nav-icon' ref={navRef} onClick={() =>{
        setnavAnime(0)
        document.body.style.overflowY = "hidden";
        hamburgerRef.current.style.display = 'block';

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

          <li><a href='# ' onClick={(e) =>{
            e.preventDefault();
            window.location.replace("/Portfolio-website/#about")
            setactive('About')
          }} className={active === 'About' ? 'active icon' : ''}
          >About</a></li>


          <li><a href='# ' onClick={(e) =>{
            e.preventDefault();
            window.location.replace("/Portfolio-website/#projects")
            setactive('Projects')
          }} className={active === 'Projects' ? 'active icon' : ''}
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
    </motion.div>
  </>
  )
}

export default Navbar