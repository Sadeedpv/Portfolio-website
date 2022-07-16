import React from 'react'
import './projects.css'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import projectlist from './project list';
import {Darkmodecontext} from '../../Darkmode'

function Projects() {
    const [ref, inView] = useInView({
        /* Optional options */
        triggerOnce: true,
        rootMargin: '-50px 0px',
      })
    const {darksign, toggledarkmode} = React.useContext(Darkmodecontext);


   return window.innerWidth > 1200 ? <motion.div className='main-project' style={{backgroundColor:darksign? '#f5f5f5':'#0d0d0d', color:darksign?'#233142':'white'}}
   id='projects' ref={ref} initial={{opacity:'0%', height:'0%'}} animate={{opacity:inView? '100%':'0%', height:inView?'100%':'0%'}} transition={{duration:1, }}>
        <div className='project-head'>My Projects&nbsp;<span style={{color:'#FF0066', fontWeight:'1000', fontSize:'2rem'}}>.</span></div>
        <div className='project-flex'>

            {projectlist.map((e, index) =>{
                return <><Tilt><p className='tilted-para' whilehover={{color:'red'}} key={index}><a className='broken-link' href={e.link}>{e.name}</a></p></Tilt><hr className='solid'/></>
            })}


        </div>
    </motion.div>
  : <div className='main-project' ref={ref}>
  <div className='project-head'>My Projects&nbsp;<span style={{color:'#FF0066', fontWeight:'1000', fontSize:'2rem'}}>.</span></div>
  <div className='project-flex'>
    
    {projectlist.map((e, index) =>{
        return <><p className='tilted-para' whilehover={{color:'red'}} key={index}><a className='broken-link' href={e.link}>{e.name}</a></p><hr className='solid'/></>
    })}


  </div>
</div>
}

export default Projects