import React, {useState} from 'react'
import {FaArrowUp} from 'react-icons/fa'
import './index.css'

function Backtotop() {
  const [visible, setvisible] = useState(true)
  return (
    <button className='button-arrow' style={{display : visible? 'block': 'none'}} onClick={() =>{
      document.documentElement.scrollTop = 0;
      window.scrollTo({top: 0, behavior: 'smooth'})      
    }}><a href='#backtotop'><FaArrowUp  size={20} color='#fff'/> </a></button> 
  )

}

export default Backtotop