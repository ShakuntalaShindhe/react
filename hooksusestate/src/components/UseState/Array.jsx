import React, { useState } from 'react'

const Array = () => {
    const[items,setItem]=useState(['item1','item2','item3'])
    const arrlen=items.length>0
  return (
    <div>
        <h3>Example of Array iteration</h3>
        {arrlen&&
        <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        }
        {!arrlen&&<p>No items found</p>}
        {/* {arrlen ?
        (
         <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
         </ul>
        ):(
         <p>no items Found</p>
        )
        } */}
      
    </div>
  )
}

export default Array
