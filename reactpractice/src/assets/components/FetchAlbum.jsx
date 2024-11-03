import React, { useEffect, useState } from 'react'

const FetchAlbum = () => {
    const[details,setDetails]=useState([])
    useEffect(()=>{
        const AlbumUrl=async ()=>{
            try{
                const resp=await fetch('https://jsonplaceholder.typicode.com/albums');
                const result=await resp.json()
                setDetails(result)
            }
            catch(err){
                console.log('Error fetched',err)
            }
        }
        AlbumUrl()
    },[])
  return (
    <div>
      <h4>Fetch API</h4>
      <ul>
        {details.map((val,i)=>(
            <li key={i}>
                <p>{val.id}</p>
                <p>{val.title}</p>
            </li>
        ))}
      </ul>

    </div>
  )
}

export default FetchAlbum
