import React from 'react'
import {Element} from 'react-scroll'
import Experience from "./Experience";
import "./Experiencecontainer.css"

const Experiencecontainer = () => {
  return (
   <Element className='experiancecontainer' id="exp">
    <h1>Experience</h1>
    <div className='experiencecontainer__info'>
        <Experience number="+2" title="Projects"/>
        <Experience number="+1" title="clients"/>
        <Experience number="+1" title="Content" 
        style={{backgroundcolor:"red"}}
        />
        <Experience number="+1" title="Projects"/>
    </div>
   </Element>
  )
}

export default Experiencecontainer
