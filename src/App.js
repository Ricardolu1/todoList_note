import React, { Component ,PureComponent,useEffect, useState,useMemo,memo,useCallback,useRef} from "react"
import "./App.css"



// const Counter =  memo(function Counter(props) {
//   console.log('Count render')
//   return (
//     <h1 onClick={props.onclick}>{props.count}</h1>
//   )
// })

class Counter extends PureComponent{
  render(){
    const {props} = this
    return (
      <h1 onClick={props.onclick}>{props.count}</h1>
    )
  }
}


function App() {
  const [count, setCount]= useState(0)
  const [clickCount,setClickCount] = useState(0)
  const counterRef = useRef()
  const it = useRef() 

  const double = useMemo(()=>{
    return count * 2
  },[count===3])
  const onclick= useCallback(()=>{
    console.log('click')
    console.log(counterRef.current)
},[counterRef])

  useEffect(()=>{
    it.current = setInterval(() => {
      setCount(count=>count+1)
    }, 1000);
  },[])

  useEffect(()=>{
    if (count>=10) {
      clearInterval(it.current)
    }
  },[count])


  return(
    <div>  
      <button onClick={()=>setCount(count+1)} >click ({count})  double:{double}</button>
        <Counter ref = {counterRef} count={double} onclick={onclick}/>
    </div>
  )
}


export default App
