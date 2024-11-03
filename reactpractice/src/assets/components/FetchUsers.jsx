import React, { useEffect, useState } from 'react'

const FetchUsers = () => {
    const[user,setUser]=useState([])
    useEffect(()=>{
        const UserUrl=async()=>{
            try{
                const resp=await fetch('https://jsonplaceholder.typicode.com/users')
                const res=await resp.json()
                setUser(res)
            }
            catch(err){
              console.log('Error',err)
            }
        }
        UserUrl()
    },[])
  return (
    <div>
      <h4>Fetch users</h4>
      {user.map((kval,index)=>(
        <li key={index.id}>
            <p>{kval.id}</p>
            <p>{kval.name}</p>
            <p>{kval.username}</p>
            <p>{kval.address}</p>
            {/* <p>{kval.company}</p> */}
        </li>
      ))}
      <p></p>
    </div>
  )
}

export default FetchUsers
