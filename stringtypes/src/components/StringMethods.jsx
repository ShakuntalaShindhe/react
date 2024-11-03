import React from 'react'

const StringMethods = () => {
    const str='Hello world';
    const str1='Hello';
    const str2='World!';
    const concat=str1.concat(str2)

    const str_rep='react is amazing'
    const str_replace_result=str_rep.replace('amazing','awesome')
  return (
    <div>
      <h4>String Methods</h4>
      <p>{str}</p>
      <p>Concat two strings:{concat}</p>
      <p>Str1 to Upper case:{str1.toUpperCase()}</p>
      <p>str2 to lower case:{str2.toLowerCase()}</p>

      <p>{`String replace: ${str_replace_result}`}</p>
      <p>Length of first string is:{str.length}</p>
    </div>
  )
}

export default StringMethods
