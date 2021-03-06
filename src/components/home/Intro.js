import React, { useState, useContext } from 'react'
import './intro.css'
import blob from './blob.png'
import { motion } from 'framer-motion'
import TypeAnimation from 'react-type-animation';
import {Darkmodecontext} from '../../Darkmode';
import {FaGithub, FaInstagram, FaTwitter, FaStackOverflow} from 'react-icons/fa'



function Intro() {
const {darksign} = useContext(Darkmodecontext)

  return (
    
    <div className='grid'>
    <motion.div className='intro' style={{ color:darksign? 'black':'white'}}>
        <h1><motion.span className='hey'  initial={{opacity:window.innerWidth < 996?'100%':'0%'}} animate={{opacity:'100%'}} transition={{delay:'0.8', duration:'2'}}>Hello,</motion.span> <br />
         I'm <motion.span className='name'  initial={{opacity:window.innerWidth < 996?'100%':'0%'}} animate={{opacity:'100%'}} transition={{delay:'1.2', duration:'2'}} exit={{opacity:'0%', y:'200%'}}
         
         >&#60;<TypeAnimation cursor={true} sequence={['', 5000 ,'Mohd Sadeed', 5000, 'A Developer', 5000, '']} repeat={Infinity} className='block'></TypeAnimation>  /&#62;</motion.span></h1>
        <motion.p className='gray-text' initial={{opacity:window.innerWidth < 996?'100%':'50%'}} animate={{opacity:'50%'}} transition={{delay:'2', duration:'2'}}>I am a developing developer. I would love to help you with your next big project. Contact me for all kinds of collaborations</motion.p>
        <div className='follow-more'><a className='icon-href' href='https://github.com/Sadeedpv'><FaGithub /></a> <a className='icon-href' href='https://www.instagram.com/sadio_pv/'><FaInstagram /></a> <a className='icon-href' href='https://twitter.com/PvSadeed'><FaTwitter /></a> <a className='icon-href' href='https://stackoverflow.com/users/18243271/sadeed-pv'><FaStackOverflow /></a></div>

        <button className='intro-button' onClick={(e) => {
                window.location = 'mailto:muhammedsadeed70@gmail.com';
                e.preventDefault();
            }}>Contact me</button></motion.div>


<div className='pic'>
  <motion.img src={blob} alt='hero section image'  initial={{x:window.innerWidth < 996?0:900, opacity:0}} animate={{x:0, opacity:'100%'}} transition={{x: { type: "tween", damping:50}, duration: 2.5,delay: 0.6}}
  exit={{opacity:0}}></motion.img>
  </div>
</div>
  )
}

export default Intro