import React from 'react'
import {useEffect, useState} from "react";
import ClipLoader from "react-spinners/ClipLoader";



function Placement() {
  const [loading, setLoading]=useState(false)
  useEffect(()=>{
     setLoading(true)
     setTimeout(()=>{
         setLoading(false)
     }, 1000)

 },[])   

 
  return (
    <>{  loading?
      <ClipLoader className='spinner' color={'#D0021B'} loading={loading} size={50} />
      :
    <div className='container'>
        <h3 className='text-center py-5'>Download Notes here <i class="fa-regular fa-hand-point-down"></i></h3>
        <hr/>
        <h5 className='text-left'><b>Ist Year</b></h5>
         <ul className='text-left'>
          <li><p>English <a href='#' className='btn btn-info'>Download</a></p></li>
          <li><p>Maths-I <a href='#' className='btn btn-info'>Download</a></p></li>
          <li><p>Maths-II <a href='#' className='btn btn-info'>Download</a></p></li>
          <li><p>Physics <a href='#' className='btn btn-info'>Download</a></p></li>
          <li><p>Chemistry <a href='#' className='btn btn-info'>Download</a></p></li>
          <li><p>FDE <a href='#' className='btn btn-info'>Download</a></p></li> 
          <li><p>Data structures <a href='#' className='btn btn-info'>Download</a></p></li>
          <li><p>C Programming <a href='#' className='btn btn-info'>Download</a></p></li>
          <li><p>Python Programming <a href='#' className='btn btn-info'>Download</a></p></li>
          <li><p>Engineering Graphics <a href='#' className='btn btn-info'>Download</a></p></li>
          
          </ul>
       <hr/>
       <h5 className='text-left'><b>IInd Year</b></h5>
       <ul>
         
       <li><p>Mathematical Foundation of Computer Science <a href='#' className='btn btn-info'>Download</a></p></li>
          <li><p>Design and Analysis of Algorithms <a href='#' className='btn btn-info'>Download</a></p></li>
          <li><p>Computer Organization <a href='#' className='btn btn-info'>Download</a></p></li>
          <li><p>Oops through Java <a href='#' className='btn btn-info'>Download</a></p></li>
          <li><p>Mangerial Economics and Financial Analysis <a href='#' className='btn btn-info'>Download</a></p></li>
          <li><p>Statistics with R <a href='#' className='btn btn-info'>Download</a></p></li> 
          <li><p>Formal Languages and Automata theory <a href='#' className='btn btn-info'>Download</a></p></li>
          <li><p>Operating Systems <a href='#' className='btn btn-info'>Download</a></p></li>
          <li><p>Database Management Systems <a href='#' className='btn btn-info'>Download</a></p></li>
          <li><p>Software Engineering <a href='#' className='btn btn-info'>Download</a></p></li>
       </ul>
    </div>
}</>
  )
}

export default Placement