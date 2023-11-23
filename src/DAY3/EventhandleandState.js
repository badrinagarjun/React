import React, { Component } from 'react'

export default class EventhandleandState extends Component {

    state={
        name:""
    }
    change=(event)=>{
        this.setState({name : event.target.value})
    }
  render() {
    return (
      <div>
        <h1>Name : {this.state.name}</h1>
        <input type="text" value={this.state.name} onChange={this.change}></input>
      </div>
    )
  }
}
