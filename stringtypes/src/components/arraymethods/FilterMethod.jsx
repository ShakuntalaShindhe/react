import React from 'react'

const FilterMethod = () => {
    const numbers=[1,2,3,4,5,6,7,8];
    const filterNum=numbers.filter(num=>num%2===0);

    const fruits=['apple','kiwi','mango','banana']
    const fruitsfiletr=fruits.filter(fruit=>fruit.length<5)

    const items=[{id:1,name:'Apple',category:'Fruit'},
        {id:2,name:'Tomata',category:'Vegatable'},
        {id:3,name:'Banana',category:'Fruit'}];
   const filteritems=items.filter(fruit=>fruit.category==='Fruit')
  return (
    <div>
      <h4>Example of Filter Methods</h4>
      <ul>
        {filterNum.map((num,index)=>(
           <li key={index}>{num}</li>
        ))}

     <p>Fruits filter method</p>
     {fruitsfiletr.map((fru,i)=>(
        <p key={i}>{fru}</p>
     ))}
      </ul>

      <ul>
        {filteritems.map((frui,index)=>(
            <li key={index}>{frui.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default FilterMethod
