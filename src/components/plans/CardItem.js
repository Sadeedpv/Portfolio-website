import React from 'react';
import './card.css';
import {FaRupeeSign} from 'react-icons/fa';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import{Darkmodecontext} from '../../Darkmode'

function CardItem(props) {

  const {darksign, toggledarkmode} = React.useContext(Darkmodecontext);

  const [ref, inView] = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: '-50px 0px',
  })


  return (
    <motion.div initial={{x:'100%', opacity:'0%'}} animate={{x:inView?'0%':'100%', opacity:inView?'100%':'0%'}} transition={{duration:0.5, ease: 'easeInOut', delay:props.delay}} className='carditem' ref={ref} style={{transform:props.size === 'large'? 'scale(1':'scale(0.9)',
    backgroundColor:darksign?'#fffafb':'#fff0f5'}}>
        <div className='carditem-head'><FaRupeeSign style={{fontSize:'35px', paddingRight:'2px'}} /><p className='money'>{props.money}</p></div>
        {props.size === 'large' && <div className='recomm'>Recommended</div>}
        <div className='carditem-subhead'>{props.plan}</div>
        <div className='cardbody'>
            <ul>
                <li>{props.a1}</li>
                <li>{props.a2}</li>
                <li>{props.a3}</li>
                <li>{props.a4}</li>
            </ul>
        </div>
    </motion.div>
  )
}

export default CardItem