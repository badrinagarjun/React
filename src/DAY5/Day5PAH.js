import React, { Component } from 'react'

export default class Day5PAH extends Component {
   state={color:"Yellow"}
//    shouldComponentUpdate(){
//         return false;
//    }
componentDidMount()
{
    setTimeout(()=>{this.setState({color:"Blue"})},3000)
}
// getSnapshotBeforeUpdate(preProps,preState){
//     document.getElementById("i").innerHTML="Previous value is "+preState.color;
// }
// componentDidUpdate(){
//     document.getElementById("i").innerHTML="Updated value is "+this.state.color;
// }
 
    render() {
    return (
      <div>
        <h1>{this.state.color}</h1>
        <p id="i"></p>
      </div>
    )
  }
}