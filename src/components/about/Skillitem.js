import React from 'react'
import './skill.css'
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import {Darkmodecontext} from '../../Darkmode'



function Skillitem(props) {

  const {darksign, toggledarkmode} = React.useContext(Darkmodecontext)

    const [ref, inView] = useInView({
        /* Optional options */
        triggerOnce: true,
        rootMargin: '0px 0px',
      })
  return (
    <motion.div className='flex-skill' ref={ref} initial={{opacity:'0%'}} animate={{opacity:inView?'100%':'0%'}} transition={{damping:'25', delay:props.delay}}>{props.name}
    <div>
    <p className='skill-title' style={{ color:darksign? 'black':'white'}} >{props.title}</p></div>
    <div><p className='skill-desc' style={{ color:darksign? 'black':'white'}}>{props.desc}</p>
    </div>
    </motion.div>
  )
}

export default Skillitem