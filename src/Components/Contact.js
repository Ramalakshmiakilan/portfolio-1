import React from 'react'
import {Element} from 'react-scroll'
import "./Contact.css"
const Contact = () => {
  return (
    <Element className="contact" id="contact">
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
                Email:<span>narayananrama98@gmail.com</span>
            </p>
          &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;  <div className='home__social'>
            <a href="https://www.instagram.com/ramaakil6?utm_source=qr&igsh=aXBldjgycTI3eWt2/" 
            className='home__social_icon' target='_blank'>
            <i class="uil uil-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ramalakshmi-a-7b8469219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/" className='home__social_icon' target='_blank'>
        <i class="uil uil-linkedin"></i> 
        </a>  
        <a href="https://github.com/Ramalakshmiakilan/portfolio-1" className='home__social_icon' target='_blank'>
        <i class="uil uil-github-alt"></i>   
        </a>
    </div>
        </div>
    </Element>
  )
}

export default Contact;