import React, { useState } from 'react'

const ReverseString = () => {
    const[text,setText]=useState('');
    const handleClick=()=>{
        setText(text.split('').reverse().join(''))
    }

   /* const TextHandle=(event)=>{
        setText(event.target.value)
    }*/
  return (
    <div>
     <input type='text' value={text} onChange={(e)=>setText(e.target.value)} />
     <p>Enter text:{text}</p>
     <button onClick={handleClick}>Click to reverse string</button>
    </div>
  )
}

export default ReverseString
