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
        <h6 className='text-center'>Note: All subject notes may not be available however we are trying to upload as soon as possible. If you have any kindly share with us.</h6>
        <hr/>
        <h5 className='text-left'><b>Ist Year</b></h5>
         <ul className='text-left'>
          <li><p>English   
            
            <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div>

             </p></li>
          
           

          <li><p>Maths-I 
          <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div>
            
            </p></li>
          <li><p>Maths-II 
          <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div>
            </p></li>
          <li><p>Physics 
          <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div>
            </p></li>
          <li><p>Chemistry
          <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div>
            
            </p></li>
          <li><p>Fundamenatls of Digital Electronics
            
          <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div>
            
            </p></li> 
          <li><p>Data structures 
            
          <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div>
            </p></li>
          <li><p>C Programming 
            
          <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div>
            
            </p></li>
          <li><p>Python Programming 
            
          <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div>
            </p></li>
          <li><p>Engineering Graphics 
          <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div>
            </p></li>
          
          </ul>
       <hr/>
       <h5 className='text-left'><b>IInd Year</b></h5>
       <ul>
         
       <li><p>Mathematical Foundation of Computer Science  <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li>
          <li><p>Design and Analysis of Algorithms 
          <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li>
          <li><p>Computer Organization  <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li>
          <li><p>Oops through Java 
          <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li>
          <li><p>Mangerial Economics and Financial Analysis 
          <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li>
          <li><p>Statistics with R 
          <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li> 
          <li><p>Formal Languages and Automata theory 
          <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li>
          <li><p>Operating Systems 
          <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li>
          <li><p>Database Management Systems 
          <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li>
          <li><p>Software Engineering  <div className='row'>
              <div className='col-sm-12'>
              <a href='#' className='btn btn-info m-2'>Unit-1</a>
              <a href='#' className='btn btn-info m-2'>Unit-2</a>
              <a href='#' className='btn btn-info m-2'>Unit-3</a>
              <a href='#' className='btn btn-info m-2'>Unit-4</a>
              <a href='#' className='btn btn-info m-2'>Unit-5</a>
              <a href='#' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li>
       </ul>
    </div>
}</>
  )
}

export default Placement