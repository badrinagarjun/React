import React, { Component } from 'react'

export default class Counter extends Component {
    state={
        count:0
    }
    countinc=()=>{
        this.setState({count: this.state.count +1})
    }
    countdec=()=>{
        this.setState({count: this.state.count-1})
    }
  render() {
    return (
      <div>
        <button onClick={this.countinc} >Increment</button>
        <br></br>
        <button onClick={this.countdec}>Decrement</button>
        <p>Count: {this.state.count}</p>
      </div>
    )
  }
}
