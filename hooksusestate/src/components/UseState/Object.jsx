import React, { useState } from 'react'

const Object = () => {
    const[person,setPerson]=useState({name:'john',age:23,address:{city:'Hyderabad',country:'India'}});
    
    const handleClick=()=>{
        setPerson({...person},person.address.city='Bengalore')
    }
  return (
    <div>
      <h4>objects</h4>
      <p>Name:{person.name}</p>
      <p>Age:{person.age}</p>
      <p>City:{person.address.city}</p>
      <button onClick={handleClick}>Update city</button>
    </div>
  )
}

export default Object
