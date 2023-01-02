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
              <a href='https://drive.google.com/uc?export=download&id=1lm0F-MFxCyZX1UIq4-9VpIG38lXq95_J' className='btn btn-info m-2'>Unit-1</a>
              <a href='https://drive.google.com/uc?export=download&id=1bsSYh0JYolY8oaRR7l877Hm4pQHRkIo3' className='btn btn-info m-2'>Unit-2</a>
              <a href='https://drive.google.com/uc?export=download&id=1Xv_ixLoNLjwxaJO3BP9FLqPwaULor3Wm' className='btn btn-info m-2'>Unit-3</a>
              <a href='https://drive.google.com/uc?export=download&id=1lfi17yv6Tu-qdjIDAzeEVmnjzKgSjv-t' className='btn btn-info m-2'>Unit-4</a>
              <a href='https://drive.google.com/uc?export=download&id=1yrtNfsrvwNAMABTMb-T9Htlt6LirDMfr' className='btn btn-info m-2'>Unit-5</a>
              <a href='https://drive.google.com/uc?export=download&id=1AAfGQqv1YeXwnAs9GVJRHrYkoPcLITfH' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li>
          <li><p>Design and Analysis of Algorithms 
          <div className='row'>
              <div className='col-sm-12'>
              <a href='https://drive.google.com/uc?export=download&id=1svh4XoYZj7F0FmgcHwoNicTp4Ud6C_kc' className='btn btn-info m-2'>Unit-1</a>
              <a href='https://drive.google.com/uc?export=download&id=1VwNyfQlS4nzTfoyHF-dvSNmFfdnVAPvR' className='btn btn-info m-2'>Unit-2</a>
              <a href='https://drive.google.com/uc?export=download&id=1REulHyvoP2Ajbx5rlGazgWRKZdaFKObw' className='btn btn-info m-2'>Unit-3</a>
              <a href='https://drive.google.com/uc?export=download&id=16EXQt52vFvNs5axsKafOvRiX6kx366xs' className='btn btn-info m-2'>Unit-4</a>
              <a href='https://drive.google.com/uc?export=download&id=1JWWZhtA4MRItcf9GLDktU2a0qz8jH606' className='btn btn-info m-2'>Unit-5</a>
              <a href='https://drive.google.com/uc?export=download&id=1lS9fkZvOsIgEgUgoFjdPtMs6HDXD6G6G' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li>
          <li><p>Computer Organization  <div className='row'>
              <div className='col-sm-12'>
              <a href='https://drive.google.com/uc?export=download&id=1Fjj0xVlLMU6fLgbJ0r6NkCtPW_oDZfio' className='btn btn-info m-2'>Unit-1</a>
              <a href='https://drive.google.com/uc?export=download&id=1f0euTSX_Tvhw7JLjn3GSmx256rKnG3iL' className='btn btn-info m-2'>Unit-2</a>
              <a href='https://drive.google.com/uc?export=download&id=1XUSsEumqXJZjGTdStOZtPOYqTuD_G_K8' className='btn btn-info m-2'>Unit-3</a>
              <a href='https://drive.google.com/uc?export=download&id=1ikj264Hjgs8S_FLZEyKukwPqz-maU05e' className='btn btn-info m-2'>Unit-4</a>
              <a href='https://drive.google.com/uc?export=download&id=1tkhzu0m-ol2zWXgQogIfotnwT0LrEjad' className='btn btn-info m-2'>Unit-5</a>
              <a href='https://drive.google.com/uc?export=download&id=1vsCTo0qBv_S-Z0GCQsAAUmyWKbe6tie6' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li>
          <li><p>Oops through Java 
          <div className='row'>
              <div className='col-sm-12'>
              <a href='https://drive.google.com/uc?export=download&id=1HyynvSNOR_hwo1zf0fnJnOHqi6SP6ccx' className='btn btn-info m-2'>Unit-1</a>
              <a href='https://drive.google.com/uc?export=download&id=1DcAXcVZA61UwTbgSFCYR9oLOKSfmSpdx' className='btn btn-info m-2'>Unit-2</a>
              <a href='https://drive.google.com/uc?export=download&id=1DcAXcVZA61UwTbgSFCYR9oLOKSfmSpdx' className='btn btn-info m-2'>Unit-3</a>
              <a href='https://drive.google.com/uc?export=download&id=1hu8ZvjHv_U-bSh9r3G9oPiGZQjEDG9Sd' className='btn btn-info m-2'>Unit-4</a>
              <a href='https://drive.google.com/uc?export=download&id=1xbAmPv3Z-5zQwfwYJIvPOhnsLvE7ijWM' className='btn btn-info m-2'>Unit-5</a>
              <a href='https://drive.google.com/uc?export=download&id=1j71TTIECmKo2bDS2WTscbtA3TZFc7WhS' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li>
          <li><p>Mangerial Economics and Financial Analysis 
          <div className='row'>
              <div className='col-sm-12'>
              <a href='https://drive.google.com/uc?export=download&id=1EjrYVtcwTlqYc72GGTYv1_alP4BMEZPH' className='btn btn-info m-2'>Unit-1</a>
              <a href='https://drive.google.com/uc?export=download&id=1WsSrdcGwzjhazcNLurb--gBu1_NamZmf' className='btn btn-info m-2'>Unit-2</a>
              <a href='https://drive.google.com/uc?export=download&id=15f9BDzwAM0VJf-yVLUgdcXsvTSonfMSb' className='btn btn-info m-2'>Unit-3</a>
              <a href='https://drive.google.com/uc?export=download&id=1_nLETSeU_wePcDI5ppNgqJkr9Tmr0Poc' className='btn btn-info m-2'>Unit-4</a>
              <a href='https://drive.google.com/uc?export=download&id=1_nLETSeU_wePcDI5ppNgqJkr9Tmr0Poc' className='btn btn-info m-2'>Unit-5</a>
              <a href='https://drive.google.com/uc?export=download&id=1v9yd-vF2sCTcR9avv18MjDMQfKQlalaF' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li>
          <li><p>Statistics with R 
          <div className='row'>
              <div className='col-sm-12'>
              <a href='https://drive.google.com/uc?export=download&id=' className='btn btn-info m-2'>Unit-1</a>
              <a href='https://drive.google.com/uc?export=download&id=' className='btn btn-info m-2'>Unit-2</a>
              <a href='https://drive.google.com/uc?export=download&id=' className='btn btn-info m-2'>Unit-3</a>
              <a href='https://drive.google.com/uc?export=download&id=' className='btn btn-info m-2'>Unit-4</a>
              <a href='https://drive.google.com/uc?export=download&id=' className='btn btn-info m-2'>Unit-5</a>
              <a href='https://drive.google.com/uc?export=download&id=' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li> 
          <li><p>Formal Languages and Automata theory 
          <div className='row'>
              <div className='col-sm-12'>
              <a href='https://drive.google.com/uc?export=download&id=155j-qELi2922sUyzAOPkih_sLr9Vig_d' className='btn btn-info m-2'>Unit-1</a>
              <a href='https://drive.google.com/uc?export=download&id=1ezK__IJnSrB70A08Yrc3o0STH7ofDgeu' className='btn btn-info m-2'>Unit-2</a>
              <a href='https://drive.google.com/uc?export=download&id=1sWVlqa9AsAufSHHn9TKfPhr5EuDvvhWt' className='btn btn-info m-2'>Unit-3</a>
              <a href='https://drive.google.com/uc?export=download&id=1DoNkA5hLC749HbTgQU9mKSWDNDnHWdUb' className='btn btn-info m-2'>Unit-4</a>
              <a href='https://drive.google.com/uc?export=download&id=1T75D58JuudxHhzXARQ13XhqVuRUIClXy' className='btn btn-info m-2'>Unit-5</a>
              <a href='https://drive.google.com/uc?export=download&id=1Ks6R3ou56bHQjgu6rc5h1xErTPc6x6kg' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li>
          <li><p>Operating Systems 
          <div className='row'>
              <div className='col-sm-12'>
              <a href='https://drive.google.com/uc?export=download&id=1sd3oTWp5U0VjZoKXqvQeEJ2lQJd1jF7j' className='btn btn-info m-2'>Unit-1</a>
              <a href='https://drive.google.com/uc?export=download&id=19oKSInwHi1wAIIG6qTAKMZnDoltGQfHz' className='btn btn-info m-2'>Unit-2</a>
              <a href='https://drive.google.com/uc?export=download&id=1J2HDqWHQ8fEYuqjWAUjuJNd39F2e4Nz5' className='btn btn-info m-2'>Unit-3</a>
              <a href='https://drive.google.com/uc?export=download&id=1k4CIJxbZIgMhrRLIm0Yfezih99tue-KQ' className='btn btn-info m-2'>Unit-4</a>
              <a href='https://drive.google.com/uc?export=download&id=1aZrgIS7Pij0q557cv4QpzeMuxI94QI2-' className='btn btn-info m-2'>Unit-5</a>
              <a href='https://drive.google.com/uc?export=download&id=1iDGS1_Cf2mkcz97HRgW76GP-EdR-X6CG' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li>
          <li><p>Database Management Systems 
          <div className='row'>
              <div className='col-sm-12'>
              <a href='https://drive.google.com/uc?export=download&id=' className='btn btn-info m-2'>Unit-1</a>
              <a href='https://drive.google.com/uc?export=download&id=' className='btn btn-info m-2'>Unit-2</a>
              <a href='https://drive.google.com/uc?export=download&id=' className='btn btn-info m-2'>Unit-3</a>
              <a href='https://drive.google.com/uc?export=download&id=' className='btn btn-info m-2'>Unit-4</a>
              <a href='https://drive.google.com/uc?export=download&id=' className='btn btn-info m-2'>Unit-5</a>
              <a href='https://drive.google.com/uc?export=download&id=' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li>
          <li><p>Software Engineering  <div className='row'>
              <div className='col-sm-12'>
              <a href='https://drive.google.com/uc?export=download&id=1dxV5bvSL822iQgnc2XIlHAAYwz5j34tX' className='btn btn-info m-2'>Unit-1</a>
              <a href='https://drive.google.com/uc?export=download&id=1xys-326yzdB_Td6xkCDqKasXInDq_JxT' className='btn btn-info m-2'>Unit-2</a>
              <a href='https://drive.google.com/uc?export=download&id=1XCBjjfMKjDVHeM1EAUxvsACyHEWskhrJ' className='btn btn-info m-2'>Unit-3</a>
              <a href='https://drive.google.com/uc?export=download&id=1NweJe5ttqZe9HVTrJlayalAeDXeA9Wu_' className='btn btn-info m-2'>Unit-4</a>
              <a href='https://drive.google.com/uc?export=download&id=1VCT-iREkcIXDnpO8o19n2oGCcxlz2KzB' className='btn btn-info m-2'>Unit-5</a>
              <a href='https://drive.google.com/uc?export=download&id=1FB28vH_-_Id6irhjJScM1jwuQdyOUPU8' className='btn btn-info m-2'>All Units</a>
              </div>
            </div></p></li>
       </ul>
    </div>
}</>
  )
}

export default Placement