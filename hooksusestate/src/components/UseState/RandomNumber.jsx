import React, { useState } from 'react'

const RandomNumber = () => {
    const[random,setRandom]=useState(0)
    const randomGen=()=>{
        setRandom(Math.floor(Math.random()*100)+1)
    }
  return (
    <div>
      <h4>Random Number Generator</h4>
      <p>Random Number:{random}</p>
      <button onClick={randomGen}>Generate Random number</button>
    </div>
  )
}

export default RandomNumber
