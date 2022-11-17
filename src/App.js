
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Examspace from './Examspace';
import Placement from './Placement';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { useState } from 'react'
import Placement1 from './Placement1';





function App() {

  
  
  

  


  return (
    <>




  <Router>
   
    <Navbar/>
   
   
   
      
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/examspace" element={<Examspace/>}/>
      <Route path="/placement" element={<Placement/>}/>
      <Route path="/placement1" element ={<Placement1/>}/>
       
    </Routes>      
    <Footer/>
   
  
  </Router>
    </>
  );
}

export default App;
