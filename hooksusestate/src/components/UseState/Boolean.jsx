import React, { useState } from 'react'

const Boolean = () => {
    const[isActive,setIsactive]=useState(true)
  return (
    <div>
      <h4>Boolean example</h4>
      {isActive && <p>Welcome user</p>}
      {!isActive && <p>Please Login again</p>}
    </div>
  )
}

export default Boolean
