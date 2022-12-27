import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import ClipLoader from "react-spinners/ClipLoader";


function Footer() {
    const [loading, setLoading]=useState(false)
  useEffect(()=>{
     setLoading(true)
     setTimeout(()=>{
         setLoading(false)
     }, 1000)

 },[])   
  return (

      <>
      
      
    {  loading?
        <ClipLoader className='spinner' color={'#D0021B'} loading={loading} size={50} />
        :
        
        <footer className='footer'>
    <div className='social'>
        <a href='https://www.instagram.com/wtfmaahesh/'><i className='fab fa-instagram'></i></a>
        <a href='https://twitter.com/matrixmahesh19'><i className='fab fa-twitter'></i></a>
        <a href='https://www.linkedin.com/in/mahesh-rallabhandi-488848142/'><i className='fab fa-linkedin'></i></a>
    </div>
    <ul className='list'>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About Us</Link>
        </li>
        <li>
            <Link to='/examspace'>Download Exam Papers</Link>
        </li>
        <li>
            <Link to='/placement'>Download Notes</Link>
        </li>
        <li>
            <Link to='/placement1'>Placement Preparation</Link>
        </li>
    </ul>
    <p className='copyrights'>CS Space @2022</p>
 </footer>
    }
</>
)}

export default Footer