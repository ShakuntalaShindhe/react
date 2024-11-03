import React, { useEffect } from 'react'
import { useState } from 'react'

const Fetchapi = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
      const Url=async()=>{
        try{
          const response=await fetch('https://jsonplaceholder.typicode.com/comments')
          const result=await response.json()
          setData(result)
        }
        catch(error){
          console.log('Error found',error)
        }
      }
      Url()
    },[])
    
  return (
    <div>
      <h4>fetch api</h4>
      <ul>
        {data.map((val,index)=>(
          <li key={index}>
            <p>{val.postId}</p>
            <p>{val.name}</p>
            <p>{val.email}</p>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Fetchapi
