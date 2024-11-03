
import './App.css'
import Array from './components/UseState/Array'
import ArrayItems from './components/UseState/ArrayItems'
import Boolean from './components/UseState/Boolean'

import Counter from './components/UseState/Counter'
import LoginStatus from './components/UseState/LoginStatus'
import Object from './components/UseState/Object'
import RandomNumber from './components/UseState/RandomNumber'
import ReverseString from './components/UseState/ReverseString'
import String from './components/UseState/String'
import Undefine from './components/UseState/Undefine'

function App() {
  return (
    <>
      <Counter />
      <RandomNumber />
      <Undefine />
      <String />
      <ReverseString />
      <Boolean />
      <LoginStatus />
      <Array />
      <ArrayItems />
      <Object />
    </>
  )
}

export default App
