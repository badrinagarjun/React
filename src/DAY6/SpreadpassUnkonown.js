import React, { Component } from 'react'

export default class SpreadpassUnkonown extends Component {
  render() {
    const{title1, ...restvalue}=this.props

    return (
      <div>
        <h1>Title is {title1}</h1>
        <input {...restvalue} ></input>
      </div>
    )
  }
}
