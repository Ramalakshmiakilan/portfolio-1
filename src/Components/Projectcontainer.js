import React from 'react'
import { Element } from 'react-scroll'
import Projectcontainer from "../assests/18.jpg";
import projects from "./Project/Projects";
import "./Projectcontainer.css"
function Projectscontainer () {
  const Projects=[
    {
      img:"src/assests/18.jpg",
      title:"OrganicFarming",
      desc:
      "You can make mulch from any locally available, dry plant material such as grass, or straw. Mulching is easy. And above all, it helps to save you water, time and labour whilst at the same enriching your soil and giving you a better harvest.",
        },
      ];
  return (
    <Element className="Projectscontainer" id="Projects">
      <h1>Projects</h1>
      <p>Here are some projects which I done for making lives of people easy.</p>
      <div className='Projectscontainer__Projects'>
{
  Projects.map((Projects,index)=>{
    return(
      <projects key={index} 
      img={Projects.img} 
      title={Projects.title}
      desc={Projects.desc}
      
      />
    )
  })
}
      </div>
    </Element>
  )
}


export default Projectscontainer;
