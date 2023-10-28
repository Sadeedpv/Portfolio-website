import React, { useEffect, useRef } from 'react'
import './About.css'
import cursor from './cursorimage.svg'
import cursor2 from './cursorimage2.svg'

function About(props) {
  const scrollImg = useRef()
 
  return (
    <div className="about" id="about">
      <img
        src={props.first ? cursor : cursor2}
        alt={
          props.first
            ? `It's not a bug, it's a feature`
            : "Create Your own Mark"
        }
        style={{ display: "none", position: "absolute", zIndex: "999999" }}
        ref={scrollImg}
      />
      <hr />
      <h4
        className="scrollText"
        onMouseEnter={(e) => {
          scrollImg.current.style.display = "block";
          scrollImg.current.style.top = `${e.pageY + 15}px`;
          scrollImg.current.style.left = `${e.pageX + 15}px`;
        }}
        onMouseLeave={() => {
          scrollImg.current.style.display = "none";
        }}
      >
        {props.text}
      </h4>
    </div>
  );
}

export default About