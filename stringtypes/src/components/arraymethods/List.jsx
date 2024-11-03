import React from 'react'

const List = () => {
    const data=[{id:101,Name:'John',grade:'A'},
        {id:102,Name:'Harry',grade:'A+'},
        {id:103,Name:'Pater',grade:'B'}]
  return (
    <div>
      <h4>Mapping the data in List</h4>
      {/* {data.map((info,index)=>(
        <ul key={index}>
            <li>{info.id}</li>
            <li>{info.Name}</li>
            <li>{info.grade}</li>
        </ul>
      ))} */}
      <ul>
        {data.map((info,i)=>(
            <li key={i}>
            <li>{info.id}</li>
            <li>{info.Name}</li>
            <li>{info.grade}</li>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default List
