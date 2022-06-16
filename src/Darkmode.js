import React from 'react'
import { useState, createContext } from 'react';

const Darkmodecontext = createContext();

function Darkmode(props) {
    const [darksign, setdarkmode] = useState(true)
    const toggledarkmode = () =>{
        setdarkmode(!darksign)
    darksign? document.body.backgroundColor =document.body.style.backgroundColor = 'black': document.body.style.backgroundColor = 'white'

    }
  return (
    <Darkmodecontext.Provider value = {{darksign, toggledarkmode}}>
        {props.children}
    </Darkmodecontext.Provider>
  )
}

export  {Darkmode, Darkmodecontext}