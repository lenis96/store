import React, { Component } from 'react';
import ProductRow from './ProductRow.jsx'

import {getProducts,getProduct,createProduct} from './../utils/api'
class ProductsList extends Component {
  constructor(props){
    super(props)
    this.state={products:[]}
  }

  componentDidMount(){
    this.setState({products:getProducts()})
    console.log(getProducts())
  }
  render() {
    return (
     <div>
       <h2>Product List</h2>
       <div>
         <table>
          <thead>
            <tr>

              <th>Description</th>
              <th>Prices</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((elem)=>{
              return <ProductRow key={elem.id} description={elem.description} price={elem.price} quantity={elem.quantity}/>

            })}
          </tbody>
         </table>
       </div>
     </div>
     
    );
  }
}

export default ProductsList;
