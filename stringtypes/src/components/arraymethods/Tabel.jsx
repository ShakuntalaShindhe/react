import React from 'react'

const Tabel = () => {
    const data=[{id:101,Name:'John',grade:'A'},
                {id:102,Name:'Harry',grade:'A+'},
                {id:103,Name:'Pater',grade:'B'}]
  return (
    <div>
        <h4>Mapping the data in a table</h4>
        <table border={'1px solid black'}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
              {data.map((info,index)=>(
                <tr key={index}>
                    <td>{info.id}</td>
                    <td>{info.Name}</td>
                    <td>{info.grade}</td>
                </tr>
              ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default Tabel
