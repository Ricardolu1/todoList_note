import React, { Component, PureComponent, memo } from "react"
import "./App.css"


const Foo = memo((props) =>{
  console.log('Foo render')
  return <div>{props.person.age}</div>
}) 

class App extends Component {
  state = {
    count:0,
    person:{
      age:1
    }
  }
  render() {
    const {count,person} = this.state
    person.age+=1
    return (
      <div>
        <button onClick={()=>this.setState({person})}>add</button>
        {person.age}
        <Foo name="mike" person={person}/>
      </div>
    )
  }
}

export default App
