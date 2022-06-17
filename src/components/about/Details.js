import React, {useContext, useState} from 'react'
import about from './about.jpg'
import './Details.css'
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { SlButton, SlDialog } from '@shoelace-style/shoelace/dist/react';
import {Darkmodecontext} from '../../Darkmode'
import {FaGithub, FaInstagram, FaTwitter, FaStackOverflow} from 'react-icons/fa'



function Details() {
  const [ref, inView] = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: '0px 0px',
  })
  const [refobject, inViewobject] = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: '0px 0px',
  })
  const [refdetail, inViewdetail] = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: '0px 0px',
  })

  // Modal box
  const [open, setOpen] = useState(false);
  const [open2, setopen2] = useState(false);

  const {darksign, toggledarkmode} = useContext(Darkmodecontext)

  return (
    <div  style={{ backgroundColor:darksign? '#f5f5f5':'#050505', color:darksign?'#233142':'white'}} className='aboutbg'>
          <SlDialog label="Forbes"  open={open} onSlAfterHide={() => setOpen(false)}>
            Without a website, people may question your legitimacy as a business. Having a website is an opportunity to make a great first impression. Showcasing your brand to your prospective customers is one of the most important things that you can do
          <SlButton slot="footer" variant="danger" onClick={() => setOpen(false)}>
            Close
          </SlButton>
          </SlDialog>

          <SlDialog label="How I can help you" open={open2} onSlAfterHide={() => setopen2(false)}>
              Software development can improve the client's experiences, bring more feature-rich and innovative products to market, and make setups more safe, productive, and efficient. It helps them distinguish from competitors and become more competitive
          <SlButton slot="footer" variant="danger" onClick={() => setopen2(false)}>
              Close
          </SlButton>
          </SlDialog>



    <div className='about-head'>About me&nbsp;<span style={{color:'#FF0066', fontWeight:'1000', fontSize:'2rem'}}>.</span></div>

    <div className='grid-about'>
        <motion.div className='grid-img' ref={refobject} initial={{opacity:'0%'}} animate={{opacity:inViewobject? '100%': '0%'}} 
        transition={{duration:1.5, delay:0.8}}
        >
        <img src={about} alt='About me'/>
        </motion.div>

        <motion.div className='detailed' ref={refdetail} initial={{x:'100%', opacity:'0%'}} animate={{x: inViewdetail? '0%': '100%', opacity:inViewdetail? '100%': '0%'}} transition={{ duration:1.4 }}>
          <div className='about-text'><p>It's not about what I can do, but what you can do with my help.
            I can help your company grow large. I am currently a <strong> front-end developer </strong> and extending my skills on full-stack web development. </p>
            <ul>
              <li onClick={() => setOpen(true)}><a style={{color:darksign?'black':'white'}}> Why your company need a website? </a></li>

              <li onClick={() => setopen2(true)}><a style={{color:darksign?'black':'white'}}>How a developer can help your company grow?</a></li>

            </ul>
            </div>
            <div className='follow-more'>Follow me on <a className='icon-href' href='https://github.com/Sadeedpv'><FaGithub /></a> <a className='icon-href' href='https://www.instagram.com/sadio_pv/'><FaInstagram /></a> <a className='icon-href' href='https://twitter.com/PvSadeed'><FaTwitter /></a> <a className='icon-href' href='https://stackoverflow.com/users/18243271/sadeed-pv'><FaStackOverflow /></a></div>
        </motion.div>
    </div>
    </div>
  )
}

export default Details