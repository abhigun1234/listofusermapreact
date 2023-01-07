import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(){
        super()
        this.state={name:"raj"}
    }
    getName(e){
      console.log("value",e.target.value)
    }
  render() {
    return (
      <div>
      <form>

        <label>Name</label>
        <input type='text' value={this.state.name} onChange={this.getName}></input>
        <button>Submit</button>
      </form>

      </div>
    )
  }
}
