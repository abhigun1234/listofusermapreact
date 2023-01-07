import React, { Component } from 'react'

export default class AddProduct extends Component {
    constructor(){
        super()
        this.state={prodName:""}
        this.handelProductData = this.handelProductData.bind(this);
    }
    handelProductData(event){
            console.log("this",this)
        this.setState({prodName:event.target.value})
    }
    handleSubmit=(event)=>{

         console.log("event",event.target.value)
    }
  render() {
    return (
      <form>
        <label>UserName</label>
        <input type='text' value={this.state.prodName} onChange={this.handelProductData}></input>
        <button type="submit">Add</button>
      </form>
    )
  }
}
