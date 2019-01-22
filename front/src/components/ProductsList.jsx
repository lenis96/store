import React, { Component } from 'react';
import ProductRow from './ProductRow.jsx'

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
         <Table>
          <TableHead>
            <TableRow>

              <TableCell>Description</TableCell>
              <TableCell>Prices</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Edit</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.products.map((elem)=>{
              return <ProductRow key={elem.id} idProduct={elem.id} description={elem.description} price={elem.price} quantity={elem.quantity}/>

            })}
          </TableBody>
         </Table>
       </div>
     </div>
     
    );
  }
}

export default ProductsList;
