import React from 'react'

const ObjectMap = () => {
    const users = [{ id: 101, name: 'John', dept: 'Computer' },
        { id: 102, name: 'Harry', dept: 'electrical' },
        { id: 103, name: 'peter', dept: 'education' }]

        const categories = [{ id: 1, name: 'Fruits', Types: ['apple', 'mango'] },
        { id: 2, name: 'Vegetables', Types: ['potato', 'tomato'] }];



        const Vehicals = [{ id: 101, name: 'Cars', veh_type: [{ brand: 'Honda', color: 'red' }]},
        { id: 102, name: 'Bikes', veh_type: [{ brand: 'Pulser', color: 'black' }] }
        ]
  return (
    <div>
      <h3>Object mapping</h3>
      {users.map((user,index)=>(
        <p key={index}>ID:{user.id} name:{user.name} Deaprtment:{user.dept}</p>
      ))}

          <h4>Mapping the nested objects</h4>
            {categories.map(category => (
                <p key={category.id}>Id:{category.id} Name:{category.name}
                    {category.Types.map(type => (
                        <p key={type}>{type}</p>
                    ))}</p>
            ))}


<h4>mapping with nested object practice</h4>
  {Vehicals.map((tye,i)=>(
    <p key={i.id}> Id :{tye.id} Name:{tye.name} 
    Types:{tye.veh_type.map(vari=>(
        <p key={vari}> Brand:{vari.brand} Color:{vari.color}</p>
    ))}
    </p>
  ))}

    </div>
  )
}

export default ObjectMap
