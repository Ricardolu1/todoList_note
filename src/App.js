import React, {createContext,Component}from 'react';
import './App.css';


const BaterryContext = createContext()
const OnlineContext = createContext()

function Middle() {
  return(
    <div>
      <Leaf />
    </div>
  )
}

class Leaf extends Component{
  static contextType = BaterryContext
  render(){
    const battery = this.context
    return (
      <h1>Battery:{battery}</h1>
    )
  }
}

class App extends Component{
  state = {
    online:false,
    battery:60  
  }
  render(){
    const {battery, online} = this.state
    return (
      <BaterryContext.Provider value={battery}>
          <OnlineContext.Provider value={online}>
            <button onClick={()=>this.setState({battery:battery+1})}>press</button>
            <button onClick={()=>this.setState({online:!online})}>switch</button>
            <Middle />
          </OnlineContext.Provider>
      </BaterryContext.Provider>
    )
  }
}





export default App;
