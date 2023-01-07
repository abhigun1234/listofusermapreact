import axios from 'axios';
import React, { useState } from 'react';

function PostData(props) {
    const [product,setProduct]=useState({name:'',price:'',description:''})
    const saveProduct = () => {
        console.log("product",product)
        // fetch('https://justolearnapp.herokuapp.com/api/addproduct', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(product),
        // })
        //   .then((res) => {
        //     alert("saved")
        //   })
        //   .catch((err) => console.log('error'))
        axios.post('http://localhost:3000/api/addproduct',product).then(res=>{
            console.log("res",res)
        }).catch(error=>error)
      }
      
  const handleSubmit = (event) => {
    event.preventDefault()
    saveProduct() // Save games when form is submitted
  }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Enter Product Details
                </div>
                <div>
                    <label>Enter Product Name</label>
                    <input type="text" name='name' onChange={e=>setProduct({name:e.target.value})}></input>
                </div>
                <div>
                <label>Enter Product Price</label>
                    <input type="text" name='price' onChange={e=>setProduct({price:e.target.value})}></input>
                </div>
                <div>
                <label>Enter Product Description</label>
                    
                    <input type="text" name='description' onChange={e=>setProduct({description:e.target.value})}></input> 
                </div>
                <div>
                    <button type="submit">Add Product</button>
                </div>
            </form>
        </div>
    );
}

export default PostData;