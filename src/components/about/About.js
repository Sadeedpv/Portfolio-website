import React, { useRef } from 'react'
import './About.css'
import cursor from './cursorimage.png'

function About() {
  const scrollText = useRef()
  const scrollImg = useRef()
  window.onscroll = () => {
    var scrolled = document.documentElement.scrollTop
    scrollText.current.style.transform = `translateX(${scrolled * 1.2}px)`
  }
  return (
    <div className="about">
      <img src={cursor} alt='Do nothing and feel great!' style={{display:'none', position:'absolute', zIndex:'9999'}} ref={scrollImg}/>
      <hr />
      <h4 ref={scrollText} onMouseEnter={(e) =>{
        scrollImg.current.style.display = 'block';
        scrollImg.current.style.top = `${e.pageY - 10}px`;
        scrollImg.current.style.left = `${e.pageX - 10}px`;
      }} onMouseLeave={() =>{
        scrollImg.current.style.display = 'none'
      }}>Do Nothing and Feel Great!</h4>
    </div>
  )
}

export default About