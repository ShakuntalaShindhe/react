import React, { useState } from 'react'

const Undefine = () => {
    const[value,setValue]=useState(undefined);
    const randomGen=()=>{
        setValue('Hello Welcome!')
    }
  return (
    <div>
      <h4>Value Change</h4>
      <p>{value===undefined?'Undefined':value}</p>
      <button onClick={randomGen}>Change msg</button>
    </div>
  )
}

export default Undefine
