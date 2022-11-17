import React from 'react'
import {useEffect, useState} from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Placement1() {
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
    <h3 className='text-center mt-3'>Work is in progress</h3>
    }</>
)
}

export default Placement1