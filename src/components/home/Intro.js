import React from 'react'
import './intro.css'
import blob from './blob.png'

function Intro() {
  return (
    <div className='grid'>
    <div className='intro'>
        <h1><span className='hey'>Hello,</span> <br /> I'm <span className='name'>&#60;Mohd Sadeed /&#62;</span></h1>
        {/* <p className='sub-intro'>A developing developer</p> */}
        <p className='gray-text'>I am a developing developer. I would love to help you with your next big project. Contact me for all kinds of collaborations</p>
        <button className='intro-button'>Contact me</button>
        <br></br><p className='nomore'>Know more <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10L23.773 10" stroke="#FF0066" strokeWidth="3" strokeLinecap="round"/>
<path d="M12.8329 2C12.8329 2 15.8729 7.3341 25.7098 10.4" stroke="#FF0066" strokeWidth="3" strokeLinecap="round"/>
<path d="M12.4303 18.4C12.4303 18.4 15.4702 13.0659 25.3071 10" stroke="#FF0066" strokeWidth="3" strokeLinecap="round"/>
</svg>




</p>
</div>
<div className='pic'><img src={blob}></img></div>
</div>
  )
}

export default Intro