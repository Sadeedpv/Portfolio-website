import React, { useState } from 'react'
import './intro.css'
import blob from './blob.png'
import { motion } from 'framer-motion'
import TypeAnimation from 'react-type-animation';

function Intro() {
  return (
    
    <div className='grid'>
    <motion.div className='intro'>
        <h1><motion.span className='hey'  initial={{opacity:window.innerWidth < 996?'100%':'0%'}} animate={{opacity:'100%'}} transition={{delay:'0.8', duration:'2'}}>Hello,</motion.span> <br />
         I'm <motion.span className='name'  initial={{opacity:window.innerWidth < 996?'100%':'0%'}} animate={{opacity:'100%'}} transition={{delay:'1.2', duration:'2'}} exit={{opacity:'0%', y:'200%'}}
         
         >&#60;<TypeAnimation cursor={true} sequence={['', 5000 ,'Mohd Sadeed', 5000, 'A Developer', 5000, '']} repeat={Infinity} className='block'></TypeAnimation>  /&#62;</motion.span></h1>
        <motion.p className='gray-text' initial={{opacity:window.innerWidth < 996?'100%':'50%'}} animate={{opacity:'50%'}} transition={{delay:'2', duration:'2'}}>I am a developing developer. I would love to help you with your next big project. Contact me for all kinds of collaborations</motion.p>
        <button className='intro-button'>Contact me</button>
        <br></br><p className='nomore'>Know more <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10L23.773 10" stroke="#FF0066" strokeWidth="3" strokeLinecap="round"/>
<path d="M12.8329 2C12.8329 2 15.8729 7.3341 25.7098 10.4" stroke="#FF0066" strokeWidth="3" strokeLinecap="round"/>
<path d="M12.4303 18.4C12.4303 18.4 15.4702 13.0659 25.3071 10" stroke="#FF0066" strokeWidth="3" strokeLinecap="round"/>
</svg>
</p> </motion.div>


<div className='pic'>
  <motion.img src={blob} alt='hero section image'  initial={{x:window.innerWidth < 996?0:900, opacity:0}} animate={{x:0, opacity:'100%'}} transition={{x: { type: "tween", damping:20}, duration: 2.5,delay: 0.6}}
  exit={{opacity:0}}></motion.img>
  </div>
</div>
  )
}

export default Intro