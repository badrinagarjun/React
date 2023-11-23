import React, { Component } from 'react'

export default class Propsclasscomp extends Component {
  render() {
    return (
      <div>
        <h1>i am at {this.props.college} and my favourite color is {this.props.color}</h1>
      </div>
    )
  }
}

Propsclasscomp.defaultProps={color:"Black"}
