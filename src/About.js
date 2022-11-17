import React from 'react'
import {useEffect, useState} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import './About.css'
import Cards from './Cards';





function About() {

  const [loading, setLoading]=useState(false)
  useEffect(()=>{
     setLoading(true)
     setTimeout(()=>{
         setLoading(false)
     }, 1000)

 },[])   
       
 
  
  return(
    <>
   {  loading?
      <ClipLoader className='spinner' color={'#D0021B'} loading={loading} size={50} />
      :
     
     <div>
      <div className='container'>

      <h3 className='heading text-center mt-5'><b>ABOUT</b></h3>
        <p className='para text-left mt-2'>
        CS SPACE is an academic portal for CS undergrads of GIET. Here you will find the much-needed exam papers and study material you require to pull the night before the exam. Our motive is to provide the every required material for students in one place to avoid the rush at the last moment. Moreover, we are also working to add things needed to prepare for Placements. This project was undertaken by a bunch of coding enthusiasts of CSE batch 2020-24. You can also collaborate and contribute to this project. Suggestions are welcome!!


      <hr/>
        </p>
      </div>


      <h3 className='text-center mt-4'><b>TAKE A LOOK AT OUR TEAM</b></h3>
        <Cards/>
     </div>

    

     

       
        
       
  
        

  

   
 
 

}
</>
  )}



export default About