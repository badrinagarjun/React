import React, { Component } from 'react'

export default class Stateclasscomp extends Component {
    state={
        name:"SKCET",
        age:"18",
        count:0
    }
    change=()=>{
        this.setState({name:"SKCETST" , age:"34"})
    }
    summa=()=>{
        this.setState({name:"asdfghjkl"})
    }
    countinc=()=>{
        this.setState({count: this.state.count +1})
    }
  render() {
    return (
      <div>
        <h1>I am at {this.state.name} and age is {this.state.age}</h1>
        <button onClick={this.countinc} onMouseOver={this.summa}>Click mE</button>
        <p>Count: {this.state.count}</p>
      </div>
    )
  }
}
