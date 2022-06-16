import React from 'react'
import Skillitem from './Skillitem'
import './skill.css'
import {FaUmbrella, FaPencilAlt, FaMagic} from 'react-icons/fa'
import {BsPencilSquare} from 'react-icons/bs'

function Skill() {
  return (
    <div className='skill-grid'>
        <Skillitem name={<FaUmbrella className='icon-fa'/>} title='Scalable Softwares' desc='I write scalable, secure and fast programs in languages like Python and javascript' delay='0.2'/>
        <Skillitem name={<BsPencilSquare className='icon-fa'/>} title='Fast Learning' desc='I have built projects with frameworks like React, React-native and Flask' delay='0.5'/>
        <Skillitem name={<FaMagic className='icon-fa'/>} title='Modern websites' desc='I build powerful websites that can potentially empower your company.' delay='0.8'c/>
    </div>
  )
}

export default Skill