import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import pic from "./media/logo.png";


// const logo=new URL("")

function Navbar() {
  return (
    
    
    <div className='header'>
    <div className='menu-bar'>
  <nav className="navbar navbar-expand-lg navbar-light">
    
    <Link className="navbar-brand" to="/"><img src={pic} alt='STUFF'></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">🏠Home</Link>
         


        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">📖Know Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/examspace">📝Download Exam Papers</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/placement">📚Download Notes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/placement1">🎓Placement Preparation</Link>
        </li>
        
      </ul>
  </div>

</nav>
  
    
    </div>
    </div>   
   
  )
}

export default Navbar