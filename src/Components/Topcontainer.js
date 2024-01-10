import React from 'react'
import { Element } from 'react-scroll'
import Topcontent from './Topcontent'
import Top from "../assests/rrr.jpg"
import "./Topcontainer.css"

const Topcontainer = () => {
  return (
   <Element name="about" className='Topcontainer'>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  <br></br> <div className='home__img'>
            <img src={Top} alt=""/>
            </div>
  <Topcontent/>

   </Element>
  )
}

export default Topcontainer