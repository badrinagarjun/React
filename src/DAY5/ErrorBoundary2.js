import React, { Component } from 'react'

export default class ErrorBoundary2 extends Component {
     state={hasError:false}

     static getDerivedStateFromError()
     {
        return {hasError:true}
     }
     componentDidCatch(error,info)
     {
        console.log(error);
        console.log(info)
     }
    render() {
     if(this.state.hasError){
        return <h1>Some Error Found</h1>
     }
     else{
        return this.props.children
     }
  }
}