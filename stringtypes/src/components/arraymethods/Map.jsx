import React from 'react'

const Map = () => {
    const numbers=[1,2,3,4,5]
    const number_map=numbers.map(num=>num)
    const double_num=numbers.map(num_double=>num_double*2)

    const fruit_list=['apple','banana','kiwi']
  return (
    <div>
      <h4>Example of map method</h4>
      <p>Numbers:{number_map.join(',')}</p>
      <p>Doubling the numbers:{double_num.join(',')}</p>

      <p>
        {double_num.map((num,index)=>(
            <p key={index}>{num}</p>
        ))}
      </p>

      <p>
        {fruit_list.map((fruit,index)=>(
            <p key={index}>{fruit.toUpperCase()}</p>
        ))}
      </p>
    </div>
  )
}

export default Map
