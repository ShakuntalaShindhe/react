import React from 'react'

const FindMethod = () => {
    const numbers=[1,3,5]
    const findNum=numbers.find(num=>num%2===0);


    const data=[{id:1,name:'john',grade:'A'},
        {id:2,name:'harry',grade:'B'},
        {id:3,name:'john',grade:'A+'}]
    const findData=data.find(item=>item.id===1)
  return (
    <div>
      <h3>Find Method</h3>
      {/* <p>{findNum}</p> */}
      {findNum?(`Even Numbers ${findNum}`):(
        'Not an even numbers present in an array'
      )}

      {findData?
      <div>
      <p>Name:{findData.name}</p>
        <p>Grade:{findData.grade}</p>
      
      </div>:
      ('Data not found')}
    </div>
  )
}

export default FindMethod
