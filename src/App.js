import React, { Component ,useState,useMemo,memo,useCallback} from "react"
import "./App.css"



const Counter =  memo(function Counter(props) {
  console.log('Count render')
  return (
    <h1 onClick={props.onclick}>{props.count}</h1>
  )
})




function App() {
  const [count, setCount]= useState(0)
  const [clickCount,setClickCount] = useState(0)
  const double = useMemo(()=>{
    return count * 2
  },[count===3])
  const onclick= useCallback(()=>{
    console.log('click')
    
},[])
  return(
    <div>  
      <button onClick={()=>setCount(count+1)} >click ({count})  double:{double}</button>
        <Counter  count={double} onclick={onclick}/>
    </div>
  )
}


export default App
