import React, { useState } from 'react'

const ArrayItems = () => {
    const[items,setItems]=useState([]);
    const[newItem,setNewitem]=useState('');

    const handleClick=()=>{
        setItems([...items,newItem])
        setNewitem('')
    }
  return (
    <div>
      <h4>Array items</h4>
      <input type='text' value={newItem} onChange={(e)=>setNewitem(e.target.value)} />
      <button onClick={handleClick}>Add items</button>
      <ul>
        {items.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ArrayItems
