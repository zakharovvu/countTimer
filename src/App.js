import React from 'react';
import './App.css';
import styled from "styled-components"

const Progress = styled.div`
  background: green;
  width: 50px;
  height: ${(props) => props.height + 'px'};
  margin: auto
`

class App extends React.Component {
  state = {
    count: 0,
    height: 0
  }
  numberTimer = null

  componentWillUnmount() {
    clearTimeout(this.numberTimer)
  }

  handleClick = () => {
    clearTimeout(this.numberTimer)

    let ms = 16 
    const maxNumber = 100000
    let random = Math.floor(Math.random() * maxNumber) 
    let ran = random
    let stepDown = random / 100 
    const startSlow = random * 0.1
    const bindingThis = this 

    this.numberTimer = setTimeout(function teak() {
      random -= stepDown
      if (random < 0) {
         
        clearTimeout(this.numberTimer)
        bindingThis.setState({ count: 0, height: 0 })
      } else {

        if (random < startSlow) {
          stepDown = 100
        }
        
        
        
        clearTimeout(this.numberTimer)
        this.numberTimer = setTimeout(teak, ms)
        bindingThis.setState({ count: random, height: random / (maxNumber / 100) * 4 })
    }}, ms);
  }

  render() {
    return (
      <div className="App">
        <div>{Math.round(this.state.count)}</div>
        <button onClick={this.handleClick}>Click</button>
        <Progress height={this.state.height}></Progress>
      </div>
    )
  }
}

export default App;
