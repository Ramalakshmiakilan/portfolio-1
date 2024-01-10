import React from 'react'
import { Element } from 'react-scroll'
import skillimg from "../assests/16.jpg";
import LinearProgress from "@mui/material/LinearProgress";
import "./Skillcontainer.css"

const Skillcontainer = () => {
  return (
    <Element className='skillcontainer' id="skills">
        <div className='skillcontainer__image'>
            <img src={skillimg} alt=""/>
            </div>
            <div className='skillcontainer__text'>
                <h2>SKILLSET</h2>
                <div className='skillcontainer__skillset'>
                <h5>Html</h5>
                    <div className='skillcontainer__slider skillcontainer__slider1'>
                        <LinearProgress variant="determinate" value={90}/>
</div>
</div>
                <div className='skillcontainer__skillset'>
                <h5>css</h5>
                    <div className='skillcontainer__slider skillcontainer__slider2'>
                        <LinearProgress variant="determinate" value={80}/>
                         </div>
                
                
                </div>
                <div className='skillcontainer__skillset'>
                <h5>Javascript</h5>
                    <div className='skillcontainer__slider skillcontainer__slider3'>
                        <LinearProgress variant="determinate" value={70}/>
                         </div>
                 </div>

            </div>
    </Element>
  )
}

export default Skillcontainer