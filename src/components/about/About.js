import React, { useEffect, useRef } from 'react'
import './About.css'
import cursor from './cursorimage.png'
import cursor2 from './cursorimage2.png'

function About(props) {
  const scrollImg = useRef()

  return (
    <div className="about" id="about">
      <img src={props.first? cursor: cursor2} alt={props.first?'Do nothing and feel great!': 'Create Your own Mark'} style={{display:'none', position:'absolute', zIndex:'9999'}} ref={scrollImg}/>
      <hr />
      <h4 className='scrollText' onMouseEnter={(e) =>{
        scrollImg.current.style.display = 'block';
        scrollImg.current.style.top = `${e.pageY - 10}px`;
        scrollImg.current.style.left = `${e.pageX - 10}px`;
      }} onMouseLeave={() =>{
        scrollImg.current.style.display = 'none'
      }}>{props.text}</h4>
    </div>
  )
}

export default About