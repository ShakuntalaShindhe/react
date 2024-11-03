import React from 'react'

const Reduce = () => {
    const numbers=[1,2,3,4,5,6,7,8];
    const reducenum=numbers.reduce((acc,curr)=>acc+curr,0)
  return (
    <div>
      <h3>Reduce Method</h3>
      <p>Original Numbers:{numbers.join(',')}</p>
      <p>Reduce Numbers:{reducenum}</p>
    </div>
  )
}

export default Reduce
