import React , {Component} from 'react'

export default function Day6CE(OrComponent) {

    class New extends Component {
        state={count:0}
        inc = () =>{
            this.setState({count:this.state.count+1})
        }
      render() {
        return <OrComponent inc={this.inc} count={this.state.count}></OrComponent>
      }
    }
    
    return New
}
