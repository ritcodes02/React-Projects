import React, { Component } from 'react'
import '../Props/Form.css'

export default class ClassStateForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
         email: "",
         password: ""
      }
    }
    updateEmail =(event)=>{
        this.setState({
            email: event.target.value
        })
    }
    updatePassword =(event)=>{
        this.setState({
            password: event.target.value
        })
    }
  render() {
    return (
        <div className="container">
            <div className="form">
                <form >
                    <h1>Login Form</h1>
                   Email <input type="email"  onChange={(event)=> this.updateEmail(event)}/> <br /><br />
                    Password <input type="password" onChange={(event) => this.updatePassword(event)} />
                    <h2>{this.state.email}</h2>
                    <h2>{this.state.password}</h2>
                </form>
            </div>
        </div>
        
    )
  }
}
