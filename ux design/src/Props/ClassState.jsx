import React, { Component } from 'react'

export default class ClassState extends Component {
    // rconst this is shortcut of constructer
    constructor(props){
        super(props);
        this.state={
            name:"Ritu thakur"
        };
    }
    updateName=()=>{
      this.setState(
        {
          name:"Rahul"
        }
      )
    }
    
  render() {
    function name(params) {
        
    }
    return (
      <div>
        <h1>ClassState Example</h1>
        <h2>Student Details</h2>
        <h3>{this.state.name}</h3>
        <button onClick={this.updateName}>Update </button>
      </div>
    )
  }
}
