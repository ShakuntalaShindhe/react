import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);
    const handleIncr=()=>{
        setCount(count+1)
    }
    const handleDecr=()=>{
        if(count>0){
        setCount(count-1)
        }
    }
  return (
    <div>
      <h4>Counter Application</h4>
      <p>Counter:{count}</p>
      <button onClick={handleDecr}>Decrement</button>
      <button onClick={handleIncr}>Increment</button>
    </div>
  )
}

export default Counter
