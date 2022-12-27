import React from 'react'
import './Home.css';
import {useEffect, useState} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Cards1 from './Cards1';
import { Link } from 'react-router-dom';
import Testimonial from './Testimonial';





// const pic1= new URL("https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2186302/settings_images/pt3dMMAKQ0m7zWobyr55_photo-1484417894907-623942c8ee29.webp")

const pic1= new URL("https://giet.ac.in/public/assets/images/devices.jpg")

// const pic2= new URL("https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")

// const pic3=new URL("https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")



function Home() {


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
    
<div>


<div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-indicators">
    {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}

    <Link to='/about'><button type='button' className='btn1 btn btn-danger'>About Us</button></Link>
     
   

  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pic1} className="d-block w-100" alt=""/>
      <div className="carousel-caption">
        <h5><b>✅ WELCOME TO GIET CS SPACE</b></h5>
       
      </div>
    </div>
    {/* <div className="carousel-item">
      <img src={pic2} className="d-block w-100" alt=""/>
      <div className="carousel-caption">
        <h5><b>CS SPACE IS AN ACADEMIC PORTAL of GIET 🏫</b></h5>
        
      </div>
    </div> */}
    {/* <div className="carousel-item">
      <img src={pic3} className="d-block w-100" alt=""/>
      <div className="carousel-caption">
        <h5><b>WE AIM TO MAKE THE LIFE OF EVERY GIETIAN SIMPLER 👨‍💻!!</b></h5>
       
      </div>
    </div> */}
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>

<br/>

<hr className='hr'/>

<div>
<h1 className='text-center mt-5'>OUR MILESTONES <i class="fa-solid fa-trophy"></i></h1>
<div className='mt-2'>
<h3 className='text-center'>We thank each one of you for making us achieve this milestone</h3>
</div>

<Cards1/>
</div>

<hr className='hr mt-5'/>
<div>
  <h1 className='text-center mt-5'>TESTIMONIALS <i class="fa-solid fa-comment"></i></h1>
<div className='mt-2'>
<h3 className='text-center'>Read what people has said about us</h3>
</div>
  <Testimonial/>
</div>






</div> 
  
    
}
    </>

)}



export default Home;