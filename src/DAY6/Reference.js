import React, { Component } from 'react'

export default class Reference extends Component {
    myRef = React.createRef();
    handleChange = (e) => {
        e.preventDefault();
        const val=this.myRef.current.value;
        console.log(val);
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleChange}>
            <input type='text' ref={this.myRef}></input>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
