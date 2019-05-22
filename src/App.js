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
    let stepDown = random / 50 
    const startSlow = random - (random * 0.05)
    const bindingThis = this 
    let count = 0

    this.numberTimer = setTimeout(function teak() {
      count += stepDown
      let height = count / (random / 100) * 4
      if (count > random) {
        clearTimeout(this.numberTimer)
        bindingThis.setState({ count, height })
      } else {
        if (count > startSlow) stepDown = random / 1499
        
        clearTimeout(this.numberTimer)
        this.numberTimer = setTimeout(teak, ms)
        bindingThis.setState({ count, height })
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
