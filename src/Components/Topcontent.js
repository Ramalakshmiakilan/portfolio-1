import React from 'react'
import { Link } from 'react-scroll'
import "./Topcontent.css"

const Topcontent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent __container'>
            <h1>Hi,
                I am Ramalakshmi<br></br>
              <p>  Frontend Developer</p> </h1>
                <a>
                   <button className='topcontent__downloadbutton'> Download cv</button>
                </a>
                <Link to="Project" scroll={true}duration={500}>
                    <button className='topcontent__workbutton'> My Work</button>
                </Link>
            
        </div>
    </div>
  )
}

export default Topcontent