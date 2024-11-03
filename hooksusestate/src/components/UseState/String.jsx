import React, { useState } from 'react'

const String = () => {
    const[text,setText]=useState('Hii there');
    const handleText=()=>{
        setText('Hello Good Morning')
    }
  return (
    <div>
      <p>Text:{text}</p>
      <button onClick={handleText}>Change string</button>
    </div>
  )
}

export default String
