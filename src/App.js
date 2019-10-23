import React, { Component ,useState ,createContext} from "react"
import "./App.css"

const CountContext = createContext()

class Foo extends Component{
  render(){
    return (
      <CountContext.Consumer>
        {count=><h1>{count}</h1>}
      </CountContext.Consumer>
    )
  }
}


function App() {
  const [count, setCount]= useState(0)
  return(
    <div>  
      <button onClick={()=>setCount(count+1)} >click ({count}) </button>
      <CountContext.Provider value={count}>
        <Foo />
      </CountContext.Provider>
    </div>
  )
}


export default App
