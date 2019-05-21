import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0
  }
  numberTimer = null

  componentWillUnmount() {
    clearTimeout(this.numberTimer)
  }

  handleClick = () => {
    clearTimeout(this.numberTimer)

    let ms = 0 
    const maxNumber = 100000 
    let random = Math.floor(Math.random() * maxNumber) 
    const stepDown = Math.round(random / 100) || 1 
    const stepMs = 10 
    const startSlow = random * 0.2 
    const bindingThis = this 

    this.numberTimer = setTimeout(function teak() {
      random -= stepDown
      if (random < 0) {
        clearTimeout(this.numberTimer)
        bindingThis.setState({ count: 0 })
      } else {
        if (random < startSlow) ms += stepMs
        
        clearTimeout(this.numberTimer)
        this.numberTimer = setTimeout(teak, ms)
        bindingThis.setState({ count: random })
    }}, ms);
  }

  render() {
    return (
      <div className="App">
        <div>{this.state.count}</div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default App;
