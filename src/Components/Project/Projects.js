import React,{usestate} from 'react';
import "./Project.css";
const Projects = ({img,title,desc,link})=>{
    const[show,setshow]=usestate(false);
  return (
    <a href={link}>
        <div className="Project" 
        onMouseEnter={()=>setshow(true)} 
        onMouseLeave={()=>setshow(false)}
        >
            show?(
                <div className='Project__content'>
                <h4>{title}</h4>
                <p>{desc}</p>
                </div>
              ) :(
                <img src={img} alt=""/>
              ) 
            }
        </div>

    </a>
   
  );
};

export default Projects;
