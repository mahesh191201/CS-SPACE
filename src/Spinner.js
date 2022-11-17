import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import {useEffect, useState} from 'react'

function Spinner() {
 
     const [loading, setLoading]=useState(false)
     useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 5000)

    },[])   

  return (
    <div>
         <ClipLoader color={'#D0021B'} loading={loading} size={150} />
    </div>
  )
}

export default Spinner