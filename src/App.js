import React from 'react'
import Header from "./Components/Header"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import  Container  from "./Components/Topcontainer"
import Topcontainer from './Components/Topcontainer'
import Skillcontainer from './Components/Skillcontainer'
import Project from './Components/Project/Projects'
import Projectcontainer from './Components/Projectcontainer'
import Experiencecontainer from './Components/Experiencecontainer'
import Contact from "./Components/Contact"
import Experience from './Components/Experience'
function App() {
  return (
    <div><Header/>
    <Topcontainer/>
    <Skillcontainer/>
    <Projectcontainer/>
    <Experiencecontainer/>
    <Contact/>
    <Routes>
      <Route path="/" element={<about/>}/>
      <Route path="/" element={<skills/>}/>
      <Route path="/" element={<projects/>}/>
      <Route path="/" element={<experience/>}/>
      <Route path="/" element={<contact/>}/>
    </Routes>

    
    </div>
  );
};

export default App;