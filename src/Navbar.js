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
          <Link className="nav-link" aria-current="page" to="/"><i class="fa-solid fa-house"></i> Home</Link>
         


        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about"><i class="fa-solid fa-book-open"></i> About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/examspace"><i class="fa-solid fa-note-sticky"></i> Exam Papers</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/placement"><i class="fa-solid fa-book"></i> Notes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/placement1"><i class="fa-solid fa-graduation-cap"></i> Placement Preparation</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://accounts.google.com/v3/signin/identifier?dsh=S-821394334%3A1672066426000790&continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLScfKQgyhh14zNBWhjrxCa-6pVUbpJSeGqoXsknk9bFvEmxuJw%2Fviewform%3Fusp%3Dsf_link&followup=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLScfKQgyhh14zNBWhjrxCa-6pVUbpJSeGqoXsknk9bFvEmxuJw%2Fviewform%3Fusp%3Dsf_link&ltmpl=forms&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AeAAQh6lTH6QEBTFnAMoh5y1vVrJjxrN82lxnDsWKU5d4z9hzYldrX_89BfrZYSJHopEprc8nvTO"><i class="fa-solid fa-upload"></i> Send Us Material</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=" https://wa.me/919381740439"><i class="fa-brands fa-whatsapp"></i> Contact</a>
        </li>
        
      </ul>
  </div>

</nav>
  
    
    </div>
    </div>   
   
  )
}

export default Navbar