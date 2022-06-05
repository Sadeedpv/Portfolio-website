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
        <br></br><p className='nomore'>Know more <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.72L29 9.72" stroke="#FF0066" strokeWidth="3" strokeLinecap="round"/>
<path d="M20 17C20 17 22.3561 12.5549 29.9801 10" stroke="#FF0066" strokeWidth="3" strokeLinecap="round"/>
<path d="M19.3335 2C19.3335 2 21.6896 6.44509 29.3136 9" stroke="#FF0066" strokeWidth="3" strokeLinecap="round"/>
</svg>


</p>
</div>
<div className='pic'><img src={blob}></img></div>
</div>
  )
}

export default Intro