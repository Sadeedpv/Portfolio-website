import React from 'react'
import './service.css'
import {IoEllipsisHorizontalSharp} from 'react-icons/io5'
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import {Darkmodecontext} from '../../Darkmode'



function ServiceItem(props) {
    const [ref, inView] = useInView({
        /* Optional options */
        triggerOnce: true,
        rootMargin: '0px 0px',
      })
      const {darksign, toggledarkmode} = React.useContext(Darkmodecontext)

  return (
    <motion.div ref={ref}  className='service-item'
    initial={{x:'-100%'}} animate={{x:inView?'0%':'-100%'}} transition={{duration:1, delay:props.delay}}
    >
    <p className='service-title' style={{ color:darksign? 'black':'white'}}>{props.quest}</p>
    <IoEllipsisHorizontalSharp color='#FF0066' size={60}/>

    <p className='service-desc' style={{ color:darksign? 'black':'white'}}>
        {props.desc}
    </p>
    
    </motion.div>
  )
}

export default ServiceItem