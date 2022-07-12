import React from 'react'
import './card.css'
import CardItem from './CardItem'

function Card() {
  return (
    <div className='plans'>
        <div className='card-head'>Pricing</div>
    <div className='card-grid'>
        <CardItem size='large' plan='Basic' money='5,000' delay='0.4'
        a1='A static single page website'
        a2='HTML,CSS and JAVASCRIPT'
        a3='Free hosting on Github'
        a4='No backend'/>

        <CardItem size='normal' plan='Standard' money='10,000' delay='0.6'
        a1='Multipage websites'
        a2='Stunning visuals and animations'
        a3='Free hosting on Github'
        a4='No backend'/>

        <CardItem size='normal' plan='Premium' money='15,000' delay='0.8'
        a1='Full stack web applications'
        a2='Mobile applications'
        a3='No free hosting'
        a4='Backend framework like Nodejs/Flask'/>
    </div>
    </div>
  )
}

export default Card