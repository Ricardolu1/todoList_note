import React, {createContext,Component}from 'react';
import logo from './logo.svg';
import './App.css';
import { SSL_OP_ALL } from 'constants';


const BaterryContext = createContext()
const OnlineContext = createContext()

function Middle() {
  return(
    <div>
      <Leaf />
    </div>
  )
}
function Leaf() {
  return(
    <BaterryContext.Consumer>
      {battery=>(
        <OnlineContext.Consumer>
          {online=><h1>Battery:{battery},Online:{String(online)}</h1>}
        </OnlineContext.Consumer>
      )}
    </BaterryContext.Consumer>
  )
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
