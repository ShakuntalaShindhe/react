import FilterMethod from "./components/arraymethods/FilterMethod"
import FindMethod from "./components/arraymethods/FindMethod"
import List from "./components/arraymethods/List"
import Map from "./components/arraymethods/Map"
import ObjectMap from "./components/arraymethods/ObjectMap"
import Reduce from "./components/arraymethods/Reduce"
import Tabel from "./components/arraymethods/Tabel"
import StringMethods from "./components/StringMethods"


function App() {
 

  return (
    <>
      <StringMethods />
      <Map />
      <ObjectMap />
      <Tabel />
      <List />
      <FilterMethod />
      <Reduce />
      <FindMethod />
    </>
  )
}

export default App
